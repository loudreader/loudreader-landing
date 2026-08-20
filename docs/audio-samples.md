# Audio samples on the site

Two kinds of audio ship in `public/`, from two different render paths. Keeping
them straight matters, because one of them is literally what the app produces
and the other is a faithful stand-in.

## 1. The narrator clip — `public/voices/james.m4a`

**One voice on the way in: James, the flagship narrator.** The home page sample
and the opening of every catalog book are his, and that is a decision. He is
the voice the product is levelled against, and asking a stranger to audition
eleven near-identical English narrators before they have heard one sentence is
a worse first minute than hearing one good one. The roster is a click away on
`/voices` (below) for the visitor who wants it — which is the order that
decision always implied, not a reversal of it.

**What a visitor hears is exactly what the app renders.** This is the app's own
showcase clip: rendered on a physical iPhone through the shipping engine
(`LoudReader/Bench/VoiceShowcaseDump.swift`, launched with
`-VoiceShowcaseDump`), pulled off the device, and bundled into the app at
`LoudReader/Resources/VoiceShowcase/`. The site copies it verbatim.

What he reads:

> Hi, I'm James. The lamps came on along the quiet street, and somewhere a
> piano began to play — slow and unhurried, as if the city had finally decided
> to rest.

## 1b. The roster clips — `public/voices/<name>.mp3`

**All twenty-three narrators, one clip each, for `/voices`.** The home page
still plays James alone; this is the page for the visitor who has already
heard him and now wants the roster. Each narrator introduces themselves **in
the language they read** — a Polish narrator reading English would disprove
the very claim the page makes.

Two provenances again, and this time they are mixed deliberately:

- **The eleven English clips** are the app's own showcase recordings, copied
  from `LoudReader/Resources/VoiceShowcase/chatterbox_<name>.m4a` and put
  through the loudness pass below.
- **The twelve others** are rendered here by `scripts/render-voice-clips.py`,
  from the **shipped voice tensors** rather than a reference WAV:
  `bench-payload/t3-prod/voice_<name>_cond.bin` (T3 conditioning) plus
  `models/roster/<name>_{prompt,cond,spks}.bin` (s3gen). That is what the
  phone loads, so it is the narrator, not an approximation of one.

Why tensors and not WAVs. Two reasons, both discovered the hard way:

1. The four Spanish narrators were enrolled from ten-second windows of
   YouTube-sourced recordings that survive on **neither machine**. Every
   remaining window scores 0.85–0.92 speaker cosine against the shipped
   vector — the same person, audibly not the same conditioning. The tensors
   *are* the enrolment.
2. Conditioning bakes `emotion_adv`, and the app ships **0.5**
   (`LoudReader/Engines/VoiceEnrollment.swift`). The book samples use 0.85 for
   expressiveness; a voice preview must not promise a livelier narrator than
   the app delivers. Rendering from the dumped cond inherits 0.5 for free.

Sanity check on the result: resynthesised speech never scores 1.0 against its
own reference vector. The app's own device clips land at **0.68–0.89** speaker
cosine, and these twelve land at **0.80–0.87** — inside the band the shipping
app itself produces. `/tmp` scripts aside, the check is
`s3.flow.spk_embed_affine_layer(normalize(embed_ref(clip)["embedding"]))`
against `models/roster/<name>_spks.bin`.

**Every clip, English ones included, goes through
`scripts/postprocess-voice-clips.mjs`** (trim, compress, −16 LUFS, 96k mono) —
a comparison page is only fair if the voices are equally loud, and the device
clips were never loudness-normalised. `public/voices/james.m4a` stays untouched
beside them: the home page keeps playing the device recording verbatim.

Copy lives in `data/voices.ts` (roster, language groups, blurbs, the line each
narrator speaks); durations in `data/voice-durations.json`.

**Filenames carry no engine or model name** — `james.m4a`, not the app-side
`chatterbox_james.m4a`. A URL is public copy. See `components/money/site.ts`.

### Refreshing it

```
# on a Mac with the phone attached, from the app repo
xcrun devicectl device copy from --device <id> --domain-identifier <bundle> \
  --source Documents/voice-showcase --destination /tmp/showcase
cp /tmp/showcase/chatterbox_james.m4a public/voices/james.m4a
```

Re-copy whenever James is re-cloned or the engine changes materially. A stale
clip is worse than no clip: it is a promise about a voice that no longer sounds
like that.

## 2. Book samples — `public/samples/<slug>.mp3`

The opening of one catalog book, read by James — the same voice as the clip
above, and the voice every remaining sample will use — keyed by
the same slug as `/listen/[slug]`. **Every catalog book has one** — the whole
tier-1 catalog (100 books), one opening each, all read by James. The page
renders the player only when a sample exists, so a page never promises silence.

These come from the offline render path in the app repo, not from the phone:

- `scripts/render-samples-local.py` in this repo — the local variant of
  `LoudReader_mac/Scripts/generate_chatterbox_marketing.py`, adapted to the
  newer `distill` checkout in `chatterbox-apple`. Deterministic (per-segment
  seed, emits a manifest), takes a jobs JSON of `{name, text, segments,
  reference}` and the flagship reference voice. Runs on the laptop on CPU —
  the T3 graph does not run on MPS, and CPU is how the original five samples
  were rendered.
- `LoudReader_mac/Scripts/postprocess_marketing_sample.sh` — WAV → MP3: trims
  silence, caps at 35 s, compresses, normalises to −16 LUFS.

Same narrator and same character as the app, but a different render path, so
treat them as representative rather than byte-identical. If that distinction
ever starts to matter, the honest fix is to render book openings through the
device dump too.

## Rebuilding the catalog

The full loop, end to end:

1. **Passages.** `scripts/extract-sample-passages.mjs` fetches each book's
   Gutenberg text and extracts the first real prose — skipping the header,
   title page, dedication, preface, and table of contents — with hand-curated
   overrides where the heuristic picks wrong front matter. Writes
   `data/sample-passages.json`. Passage selection is the only judgement call
   in the loop; review the JSON before rendering.
2. **Jobs.** `scripts/build-sample-jobs.mjs` turns the passages into the jobs
   JSON (`data/…` → `/tmp/marketing-jobs.json`), with abbreviation-aware
   sentence segments and over-long segments split at semicolons.
3. **Render.** From `~/Developer/chatterbox-apple`:
   `PYTHONPATH=distill .venv/bin/python ~/Developer/loudreader-landing/scripts/render-samples-local.py --checkpoint distill/ckpts/E13_180.pt --jobs /tmp/marketing-jobs.json --output /tmp/marketing-batch --seed 20260721 --device cpu --temperature 0.7 --exaggeration 0.85`.
   Checkpoint `E13_180.pt` is the packed production student (==
   `loudkit-v0.1`), the reference is the flagship voice (James), and the seed
   is locked — re-runs are deterministic. The script retries a cap-hitting
   segment with a shifted seed and bisects it if it still rambles, so the
   batch never dies on one bad sentence.
4. **Post-process.** `node scripts/postprocess-samples.mjs /tmp/marketing-batch`
   — trims, normalises, encodes every WAV into `public/samples/<slug>.mp3` and
   writes `data/sample-durations.json`.
5. **Wire up.** `node scripts/update-audio-samples.mjs` regenerates
   `BOOK_SAMPLES` in `data/audio-samples.ts` from the durations.
6. **Gate.** Rendered speech can go wrong quietly — a clipped ending, a
   mispronounced proper noun, a hallucinated word. Somebody has to listen
   before the batch ships: spot-check a spread of passages against the text
   and against each other's loudness.

## Weight on Vercel

| what | count | size |
|---|---|---|
| the James clip | 1 | 176 KB |
| roster clips | 23 | ~2.3 MB |
| book samples | 100 | ~27 MB |

Static files in `public/`, served from the CDN — no blob storage or streaming
service needed at this size. `preload="none"` on both players, so a visitor who
never presses play downloads none of it.
