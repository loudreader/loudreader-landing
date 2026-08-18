# Audio samples on the site

Two kinds of audio ship in `public/`, from two different render paths. Keeping
them straight matters, because one of them is literally what the app produces
and the other is a faithful stand-in.

## 1. The narrator clip — `public/voices/james.m4a`

**One voice on the whole site: James, the flagship narrator.** The app ships
23 and the copy says so, but everything a visitor hears here — the home page
sample and the opening of every catalog book — is James. That is a decision.
He is the voice the product is levelled against, and asking a stranger to
audition eleven near-identical English narrators before they have heard one
sentence is a worse first minute than hearing one good one.

**What a visitor hears is exactly what the app renders.** This is the app's own
showcase clip: rendered on a physical iPhone through the shipping engine
(`LoudReader/Bench/VoiceShowcaseDump.swift`, launched with
`-VoiceShowcaseDump`), pulled off the device, and bundled into the app at
`LoudReader/Resources/VoiceShowcase/`. The site copies it verbatim.

What he reads:

> Hi, I'm James. The lamps came on along the quiet street, and somewhere a
> piano began to play — slow and unhurried, as if the city had finally decided
> to rest.

The other twenty-two narrators have no clip on the site. Ten English ones exist
in the app bundle and are simply not published; the twelve non-English ones
have not been rendered at all. If the site ever gains a reason to let people
compare voices — a dedicated voices page, say — the English ten are a copy
away, and the rest are one dump run on a device holding books in those
languages.

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
| book samples | 100 | ~27 MB |

Static files in `public/`, served from the CDN — no blob storage or streaming
service needed at this size. `preload="none"` on both players, so a visitor who
never presses play downloads none of it.
