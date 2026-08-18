#!/usr/bin/env python3
"""Render the book-sample WAVs on this Mac, with James's voice.

Local variant of LoudReader_mac/Scripts/generate_chatterbox_marketing.py,
adapted to the newer distill checkout in chatterbox-apple (whose
`eval_suite.free_run` returns tokens only, not a (tokens, info) pair).

Run from ~/Developer/chatterbox-apple so the `chatterbox` package and the
`distill` modules import:

    cd ~/Developer/chatterbox-apple
    PYTHONPATH=distill .venv/bin/python \
      ~/Developer/loudreader-landing/scripts/render-samples-local.py \
      --checkpoint distill/ckpts/E13_180.pt \
      --jobs /tmp/marketing-jobs.json \
      --output /tmp/marketing-batch \
      --seed 20260721 --device cpu --temperature 0.7 --exaggeration 0.85

The checkpoint is the packed production student (E13_180 == loudkit-v0.1),
the reference is the flagship voice (James), and the seed is the locked
20260721 value — every book renders in the identical voice, and re-runs are
deterministic on this machine. CPU rather than MPS: the T3 graph does not
run on MPS ("incompatible dimensions" in MPSGraph), and CPU is how the five
original samples were rendered.

Jobs JSON: [{"name": "<slug>", "text": "...", "segments": [...],
"reference": "<wav>"}] — built by scripts/build-sample-jobs.mjs.

Post-process with scripts/postprocess-samples.mjs afterwards.
"""
import argparse, json, os, re
from pathlib import Path
import librosa, numpy as np, soundfile as sf, torch

def load_student(checkpoint, device):
    import chatterbox.models.t3.llama_configs as llama_configs
    from chatterbox.models.t3 import T3
    from chatterbox.models.t3.modules.t3_config import T3Config
    raw = torch.load(checkpoint, map_location="cpu", weights_only=False)
    llama_configs.LLAMA_CONFIGS["Llama_520M"] = raw["llama_config"]
    model = T3(T3Config.multilingual())
    state = raw.get("student_sd", raw.get("state_dict"))
    loaded = model.load_state_dict(state, strict=False)
    return model.eval().to(device)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--checkpoint", required=True)
    ap.add_argument("--jobs", required=True)
    ap.add_argument("--output", required=True)
    ap.add_argument("--seed", type=int, required=True)
    ap.add_argument("--device", default="cpu")
    ap.add_argument("--only")
    ap.add_argument("--temperature", type=float, default=0.8)
    ap.add_argument("--exaggeration", type=float, default=0.5)
    args = ap.parse_args()

    from distill_datagen import enroll, load_support
    import eval_suite as evaluation
    from eval_suite import free_run, synth, cond_half, sample_step, SAMP
    from chatterbox.models.s3gen import S3GEN_SR
    from chatterbox.tts import punc_norm
    import torch.nn.functional as F

    def free_run_with_eos(model, tokenizer, cond, text, lang, device, seed):
        """Vendored free_run that also reports the best EOS candidate, so a
        segment that rambles to the token cap is trimmed instead of failing."""
        with torch.inference_mode():
            return _free_run_with_eos(model, tokenizer, cond, text, lang, device, seed)

    def _free_run_with_eos(model, tokenizer, cond, text, lang, device, seed):
        hp = model.hp
        tt = tokenizer.text_to_tokens(punc_norm(text), language_id=lang).to(device)
        tt = F.pad(tt, (1, 0), value=hp.start_text_token)
        tt = F.pad(tt, (0, 1), value=hp.stop_text_token)
        init_sp = hp.start_speech_token * torch.ones_like(tt[:, :1])
        embeds, _ = model.prepare_input_embeds(
            t3_cond=cond_half(cond, device, next(model.parameters()).dtype == torch.half),
            text_tokens=tt,
            speech_tokens=init_sp,
            cfg_weight=0.0,
        )
        if next(model.parameters()).dtype == torch.half:
            embeds = embeds.half()
        g = torch.Generator().manual_seed(seed)
        past, x, gen = None, embeds, []
        best_eos, best_eos_p = -1, 0.0
        for i in range(SAMP["max_new"]):
            o = model.tfmr(inputs_embeds=x, use_cache=True, past_key_values=past)
            past = o.past_key_values
            logits = model.speech_head(o.last_hidden_state[:, -1]).float()[0]
            probs = torch.softmax(logits / SAMP["temp"], dim=-1)
            eos_p = float(probs[hp.stop_speech_token])
            if i > 10 and eos_p > best_eos_p:
                best_eos, best_eos_p = i, eos_p
            nt = sample_step(logits, gen, g)
            gen.append(nt)
            if nt == hp.stop_speech_token:
                break
            e = model.speech_emb(torch.tensor([[nt]], device=device))
            e = e + model.speech_pos_emb.get_fixed_embedding(i + 1).to(device)
            if next(model.parameters()).dtype == torch.half:
                e = e.half()
            x = e
        ended = bool(gen) and gen[-1] == hp.stop_speech_token
        return gen, {"ended": ended, "best_eos": best_eos, "best_eos_p": best_eos_p}

    def render_segment(segment, seed, attempt):
        """One segment -> (tokens, info, [audio parts]).

        Retries once with a shifted seed; if the cap is still hit, bisects
        the segment and renders each half, so the batch never dies on one
        rambling sentence."""
        tokens, info = free_run_with_eos(model, tokenizer, enrolled[reference], segment, "en", args.device, seed)
        render_tokens = tokens
        if not info["ended"] and info["best_eos_p"] > 0.05 and info["best_eos"] > 10:
            render_tokens = tokens[: info["best_eos"]]
            info["ended"] = True
        if info["ended"] or render_tokens is not tokens:
            part = synth(s3gen, references[reference], render_tokens)
            info["attempt"] = attempt
            return render_tokens, info, [part]
        if attempt == 0:
            print(json.dumps({"retry": job["name"], "seed": seed}), flush=True)
            t2, i2, p2 = render_segment(segment, seed + 1000, 1)
            i2["attempt"] = attempt
            return t2, i2, p2
        # bisect at the nearest space to the middle
        half = len(segment) // 2
        cut = segment.rfind(" ", 0, half)
        if cut <= 0:
            cut = segment.find(" ", half)
        if cut <= 0:
            raise RuntimeError(f'{job["name"]}: cannot render segment "{segment[:40]}..."')
        print(json.dumps({"bisect": job["name"], "seed": seed}), flush=True)
        left, right = segment[:cut].strip(), segment[cut:].strip()
        tl, il, pl = render_segment(left, seed, 2)
        tr, ir, pr = render_segment(right, seed + 500, 3)
        gap = np.zeros(round(0.08 * S3GEN_SR), dtype=np.float32)
        return tl + tr, {"ended": il["ended"] and ir["ended"], "attempt": attempt}, pl + [gap] + pr

    output = Path(args.output); output.mkdir(parents=True, exist_ok=True)
    jobs = json.loads(Path(args.jobs).read_text())
    if args.only:
        jobs = [j for j in jobs if j["name"] == args.only]
        assert jobs, f"no job named {args.only!r}"
    model = load_student(args.checkpoint, args.device)
    voice_encoder, s3gen, tokenizer = load_support("cpu")
    evaluation.SAMP.update(temp=args.temperature, rep=1.2, min_p=0.05, max_new=400)

    enrolled, references = {}, {}
    for job in jobs:
        reference = os.path.realpath(job["reference"])
        if reference in enrolled: continue
        enrolled[reference] = enroll(reference, s3gen, voice_encoder, model)
        enrolled[reference].emotion_adv = args.exaggeration * torch.ones(1, 1, 1)
        waveform, _ = librosa.load(reference, sr=S3GEN_SR, mono=True)
        references[reference] = s3gen.embed_ref(waveform[:10 * S3GEN_SR], S3GEN_SR, device="cpu")

    manifest = []
    for job in jobs:
        if (output / f'{job["name"]}.wav').exists():
            print(json.dumps({"name": job["name"], "skipped": True}), flush=True)
            continue
        reference = os.path.realpath(job["reference"])
        audio_parts, segment_rows = [], []
        segments = job.get("segments") or re.split(r"(?<=[.!?])\s+", job["text"])
        for i, segment in enumerate(segments):
            tokens, info, parts = render_segment(segment, args.seed + i, 0)
            audio_parts.extend(parts)
            segment_rows.append({"index": i, "seed": args.seed + i, "speech_tokens": len(tokens),
                                 "duration_sec": round(sum(len(p) for p in parts) / S3GEN_SR, 3),
                                 "ended": info["ended"], "attempt": info.get("attempt", 0)})
        audio = np.concatenate(audio_parts)
        sf.write(output / f'{job["name"]}.wav', audio, S3GEN_SR, subtype="PCM_16")
        row = {"name": job["name"], "text": job["text"], "reference": reference, "seed": args.seed,
               "temperature": args.temperature, "exaggeration": args.exaggeration,
               "duration_sec": round(len(audio) / S3GEN_SR, 3), "segments": segment_rows}
        manifest.append(row)
        print(json.dumps(row), flush=True)

    (output / "synthesis-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")

if __name__ == "__main__":
    main()
