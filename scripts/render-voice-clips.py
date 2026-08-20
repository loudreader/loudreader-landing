#!/usr/bin/env python3
"""Render the per-narrator preview clips for /voices, from the SHIPPED voice assets.

Unlike the book samples (scripts/render-samples-local.py), which enroll a
reference WAV, this renders each narrator from the exact tensors the phone
loads. Two reasons:

  1. Four Spanish narrators (sofia, hector, diego, valentina) were enrolled
     from ten-second windows that no longer exist on either machine. Every
     surviving window of those recordings scores 0.85-0.92 speaker cosine
     against the shipped vector -- same person, audibly not the same
     conditioning. The bins ARE the enrollment.
  2. Conditioning through cond_enc bakes emotion_adv, and the app ships 0.5
     (LoudReader/Engines/VoiceEnrollment.swift). Rendering from the dumped
     T3 cond inherits that automatically, so a preview cannot promise a
     livelier narrator than the app delivers.

Assets per voice, both halves required:
  bench-payload/t3-prod/voice_<name>_cond.bin   fp32 [len, 1024]  T3 conditioning
  models/roster/<name>_prompt.bin               int32 [238]       s3gen prompt units
  models/roster/<name>_cond.bin                 fp32 [80, 986]    prompt features
  models/roster/<name>_spks.bin                 fp32 [80]         speaker vector, post-affine

Run from ~/Developer/chatterbox-apple:

    PYTHONPATH=distill .venv/bin/python \
      ~/Developer/loudreader-landing/scripts/render-voice-clips.py \
      --checkpoint distill/ckpts/E13_180.pt \
      --jobs /tmp/voice-jobs.json --output /tmp/voice-clips --seed 20260721

Jobs JSON: [{"name": "tomasz", "lang": "pl", "text": "..."}].
Post-process with scripts/postprocess-voice-clips.mjs.
"""
import argparse, json
from pathlib import Path
import numpy as np, soundfile as sf, torch
import torch.nn.functional as F

ROOT = Path.home() / "Developer" / "chatterbox-apple"
T3_DIR = ROOT / "bench-payload" / "t3-prod"
ROSTER = ROOT / "models" / "roster"
P_TOK, T_QUERY = 238, 255
T_MEL = 2 * (P_TOK + T_QUERY)
PAD_SIL = 4254


def load_student(checkpoint, device):
    import chatterbox.models.t3.llama_configs as llama_configs
    from chatterbox.models.t3 import T3
    from chatterbox.models.t3.modules.t3_config import T3Config
    raw = torch.load(checkpoint, map_location="cpu", weights_only=False)
    llama_configs.LLAMA_CONFIGS["Llama_520M"] = raw["llama_config"]
    model = T3(T3Config.multilingual())
    model.load_state_dict(raw.get("student_sd", raw.get("state_dict")), strict=False)
    return model.eval().to(device)


def t3_cond_embedding(name, device):
    """The dumped cond_enc output — what prepare_conditioning would have returned."""
    flat = np.fromfile(T3_DIR / f"voice_{name}_cond.bin", dtype=np.float32)
    return torch.from_numpy(flat.reshape(1, -1, 1024).copy()).to(device)


def s3gen_ref(name, s3gen):
    """Rebuild embed_ref's dict from the three shipped tensors.

    prompt_token is padded with PAD_SIL to a fixed 238 and prompt_feat is
    zero-padded to the graph window, so both are trimmed back. The speaker
    vector was dumped AFTER the affine layer and the affine is not invertible,
    so the layer is replaced by one that returns the stored vector — the same
    value the graph would have computed.
    """
    tok = np.fromfile(ROSTER / f"{name}_prompt.bin", dtype=np.int32)
    keep = int(np.argmax(tok == PAD_SIL)) if (tok == PAD_SIL).any() else len(tok)
    tok = tok[:keep]
    feat = np.fromfile(ROSTER / f"{name}_cond.bin", dtype=np.float32).reshape(80, T_MEL)
    feat = feat[:, : 2 * keep].T                                    # [frames, 80]
    spks = np.fromfile(ROSTER / f"{name}_spks.bin", dtype=np.float32).reshape(1, -1)

    class FixedSpeaker(torch.nn.Module):
        def __init__(self, value):
            super().__init__()
            self.register_buffer("value", torch.from_numpy(value.copy()))

        def forward(self, _):
            return self.value

    s3gen.flow.spk_embed_affine_layer = FixedSpeaker(spks)
    return dict(
        prompt_token=torch.from_numpy(tok.astype(np.int64)).unsqueeze(0),
        prompt_token_len=torch.tensor([keep]),
        prompt_feat=torch.from_numpy(feat.copy()).unsqueeze(0),
        prompt_feat_len=None,
        embedding=torch.from_numpy(spks.copy()),
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--checkpoint", required=True)
    ap.add_argument("--jobs", required=True)
    ap.add_argument("--output", required=True)
    ap.add_argument("--seed", type=int, required=True)
    ap.add_argument("--device", default="cpu")
    ap.add_argument("--only")
    ap.add_argument("--temperature", type=float, default=0.7)
    args = ap.parse_args()

    from distill_datagen import load_support
    import eval_suite as evaluation
    from eval_suite import synth, sample_step, SAMP
    from chatterbox.models.s3gen import S3GEN_SR
    from chatterbox.tts import punc_norm

    def run(model, tokenizer, cond_emb, text, lang, device, seed):
        """free_run with a precomputed conditioning block, plus EOS rescue."""
        hp = model.hp
        with torch.inference_mode():
            tt = tokenizer.text_to_tokens(punc_norm(text), language_id=lang).to(device)
            tt = F.pad(tt, (1, 0), value=hp.start_text_token)
            tt = F.pad(tt, (0, 1), value=hp.stop_text_token)
            init_sp = hp.start_speech_token * torch.ones_like(tt[:, :1])
            text_emb = model.text_emb(tt) + model.text_pos_emb(tt)
            speech_emb = model.speech_emb(init_sp) + model.speech_pos_emb(init_sp)
            x = torch.cat([cond_emb, text_emb, speech_emb], dim=1)

            g = torch.Generator().manual_seed(seed)
            past, gen = None, []
            best_eos, best_eos_p = -1, 0.0
            for i in range(SAMP["max_new"]):
                o = model.tfmr(inputs_embeds=x, use_cache=True, past_key_values=past)
                past = o.past_key_values
                logits = model.speech_head(o.last_hidden_state[:, -1]).float()[0]
                probs = torch.softmax(logits / SAMP["temp"], dim=-1)
                if i > 10 and float(probs[hp.stop_speech_token]) > best_eos_p:
                    best_eos, best_eos_p = i, float(probs[hp.stop_speech_token])
                nt = sample_step(logits, gen, g)
                gen.append(nt)
                if nt == hp.stop_speech_token:
                    break
                e = model.speech_emb(torch.tensor([[nt]], device=device))
                x = e + model.speech_pos_emb.get_fixed_embedding(i + 1).to(device)
            ended = bool(gen) and gen[-1] == hp.stop_speech_token
            return gen, {"ended": ended, "best_eos": best_eos, "best_eos_p": best_eos_p}

    output = Path(args.output); output.mkdir(parents=True, exist_ok=True)
    jobs = json.loads(Path(args.jobs).read_text())
    if args.only:
        jobs = [j for j in jobs if j["name"] == args.only]
        assert jobs, f"no job named {args.only!r}"

    model = load_student(args.checkpoint, args.device)
    _, s3gen, tokenizer = load_support("cpu")
    evaluation.SAMP.update(temp=args.temperature, rep=1.2, min_p=0.05, max_new=400)

    manifest = []
    for job in jobs:
        name = job["name"]
        cond_emb = t3_cond_embedding(name, args.device)
        ref = s3gen_ref(name, s3gen)          # rebinds the affine layer per voice
        seed = args.seed
        for attempt in range(3):
            tokens, info = run(model, tokenizer, cond_emb, job["text"],
                               job.get("lang", "en"), args.device, seed)
            if not info["ended"] and info["best_eos_p"] > 0.05 and info["best_eos"] > 10:
                tokens, info["ended"] = tokens[: info["best_eos"]], True
            if info["ended"]:
                break
            seed += 1000
            print(json.dumps({"retry": name, "seed": seed}), flush=True)
        if not info["ended"]:
            raise RuntimeError(f"{name}: never reached EOS; shorten the line")
        audio = synth(s3gen, ref, tokens)
        sf.write(output / f"{name}.wav", audio, S3GEN_SR, subtype="PCM_16")
        row = {"name": name, "lang": job.get("lang", "en"), "text": job["text"],
               "seed": seed, "temperature": args.temperature,
               "duration_sec": round(len(audio) / S3GEN_SR, 3)}
        manifest.append(row)
        print(json.dumps(row, ensure_ascii=False), flush=True)

    (output / "synthesis-manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")


if __name__ == "__main__":
    main()
