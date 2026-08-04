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
the same slug as `/listen/[slug]`. **Five of the hundred books have one.** The
page renders the player only when a sample exists, so the other ninety-five
pages are unchanged rather than promising silence.

These come from the offline render path in the app repo, not from the phone:

- `Scripts/generate_chatterbox_marketing.py` — deterministic (per-segment seed,
  emits a manifest), takes a jobs JSON of `{name, text, reference}` and the
  flagship reference voice, runs on a CUDA box.
- `Scripts/postprocess_marketing_sample.sh` — WAV → MP3: trims silence, caps at
  35 s, compresses, normalises to −16 LUFS.

Same narrator and same character as the app, but a different render path, so
treat them as representative rather than byte-identical. If that distinction
ever starts to matter, the honest fix is to render book openings through the
device dump too.

## Rendering the remaining 95

The work is: pick the opening passage per book (the catalog already has the
Gutenberg id, and the existing five show the shape), render, post-process, drop
into `public/samples/`, add a line to `BOOK_SAMPLES` in `data/audio-samples.ts`.

It is schedulable — the render is a headless script with a fixed seed, and the
verification is mechanical (file exists, duration in range, loudness in range).
A nightly batch of ten finishes the catalog inside a fortnight. What it needs
before it can run unattended:

1. **A reachable GPU box with the checkpoint** — the script wants
   `--checkpoint` and a CUDA device.
2. **A jobs file**, generated from `data/catalog-slugs.json` plus the opening
   passage of each book. Passage selection is the only judgement call in the
   loop: it should be the first real prose, skipping the Gutenberg header,
   dedication and table of contents.
3. **A gate before publishing.** Rendered speech can go wrong quietly — a
   clipped ending, a mispronounced proper noun, a hallucinated word. Somebody
   has to listen. The cheap version: the batch opens a PR with the new files
   and the manifest, and merging is the human step.

## Weight on Vercel

| what | count | size |
|---|---|---|
| the James clip | 1 | 176 KB |
| book samples | 5 | 1.3 MB |
| book samples at full catalog | 100 | ~25 MB |

Static files in `public/`, served from the CDN — no blob storage or streaming
service needed at this size. `preload="none"` on both players, so a visitor who
never presses play downloads none of it. The repo grows by ~25 MB when the
catalog is complete, which is the point to reconsider (Git LFS or Vercel Blob)
rather than now.
