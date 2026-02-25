# LoudReader — Ad Scripts for Seedance 1.5

This folder contains video ad scripts for **LoudReader**, organized by marketing segment.
Each segment has its own subfolder with one file per scene, ready to feed directly into
Seedance 1.5 as generation prompts.

---

## What Is LoudReader?

LoudReader is an **iOS app** that converts any ebook you own (EPUB or PDF) into a
natural-sounding audiobook instantly — entirely on-device, with no internet required.
It also includes free access to 70,000+ public domain books via Project Gutenberg.

Key properties to keep in mind across all ads:
- Brand color: **Loud Blue `#2EC7F6`** (vivid cyan) — used for word-by-word highlighting in the player UI
- Background: **Soft Beige `#F7F5F2`** — warm, calm, Apple-like
- Typography: **Space Grotesk** (bold headlines), **Inter** (body)
- Tagline: *"Your books. Your voice."*
- Status: Launching **February 2026**, free to try, App Store only

---

## Segment Overview & Rationale

| # | Folder | Segment Name | Platform | Duration | Hook |
|---|--------|-------------|----------|----------|------|
| 1 | `segment-1-digital-hoarder/` | The Digital Hoarder | TikTok + YouTube Shorts | 30s | Guilt → relief |
| 2 | `segment-2-busy-commuter/` | The Busy Commuter | YouTube Pre-roll | 45s | Time reclaimed |
| 3 | `segment-3-student/` | The Student | TikTok | 20s | Study hack |
| 4 | `segment-4-privacy-rebel/` | The Privacy Rebel | YouTube Pre-roll | 45s | Anti-surveillance identity |
| 5 | `segment-5-classic-lit-aspirant/` | The Classic Lit Aspirant | YouTube + Instagram Reels | 40s | Aspiration + free library |
| 6 | `segment-6-avid-reader/` | The Avid Reader | Instagram Reels + YouTube | 35s | Enhancement — read more of what you love |
| 7 | `segment-7-business-optimizer/` | The Business Optimizer | YouTube + LinkedIn | 45s | CEO reads 60 books/year — the math |
| 8 | `segment-8-academic/` | The Academic | YouTube + Podcast pre-roll | 45s | Dual-coding — evidence-based retention |
| 9 | `segment-9-fitness-optimizer/` | The Fitness Optimizer | TikTok + Instagram Reels | 25s | 5 hrs/week at gym = 26 books/year |
| 10 | `segment-10-news-reader/` | The News Reader | TikTok + YouTube Shorts | 25s | Your saved articles — finally heard |

---

## Why These Five Segments?

### Segment 1 — The Digital Hoarder
**Who:** People who have bought ebooks (Kindle, Apple Books, Kobo, PDFs) they never read.
The library keeps growing. The guilt keeps growing with it.

**Why they buy:** LoudReader removes the single biggest barrier to reading — sitting down
to do it. Now they can convert their existing purchases into audio without buying anything
new. The emotional hook is immediate: *you already have the files, you just need this app.*

**Why highest priority:** This is the broadest, most relatable segment. Every avid book buyer
has experienced this. It's a universal pain point with an immediate, frictionless solution.
Conversion rate is high because the product fits the pain perfectly — no behavior change
needed, just a different way to consume what they already own.

---

### Segment 2 — The Busy Commuter
**Who:** Professionals aged 25–40 who commute daily (subway, bus, driving, cycling).
They want to read more but never have time to sit down with a book.

**Why they buy:** The reframe is powerful — *your commute is already your reading time,
you just haven't started yet.* They have disposable income and a daily habit slot that's
begging to be filled. Speed control and offline playback are critical features for this
segment.

**Why high priority:** Massive audience, high purchase intent, daily active use. Commuters
become power users. Premium features (multiple voices, speed control) appeal directly to
people who listen for 60–90 minutes every day and want to optimize their experience.

---

### Segment 3 — The Student
**Who:** University students aged 18–26 with heavy reading loads.
They live on TikTok, hate sitting still to read dense material, and love productivity hacks.

**Why they buy:** Speed control is the killer feature here — reading a 400-page textbook
at 2.5× with word highlighting = finishing it in a fraction of the time while retaining
more than passive reading. It's sold as a *study hack*, not an audiobook app.

**Why medium-high priority:** Enormous TikTok reach, high organic sharing potential
(study hacks go viral). Lower income = likely to stay free tier, but they drive brand
awareness and will upgrade later. The word-highlighting feature specifically helps students
retain information — a real, provable benefit to lead with.

---

### Segment 4 — The Privacy Rebel
**Who:** Privacy-conscious individuals (tech workers, journalists, activists, general
skeptics of surveillance capitalism) who refuse to use data-hungry streaming services.
Niche but deeply motivated. They read blogs like The Markup, use Signal, have Pi-hole.

**Why they buy:** LoudReader is the *only* fully offline, zero-tracking audiobook solution.
No account. No crash reports. No analytics. For this segment, that isn't a feature — it's
the entire product. They will pay for premium to support a company that shares their values.

**Why valuable despite small size:** Extremely high conversion rate (they've been looking
for this). Very high lifetime value (loyal, recurring). Powerful word-of-mouth — they
share in niche communities (Hacker News, Reddit privacy subs, Mastodon) where one post
can drive thousands of installs. High signal-to-noise advocacy.

---

### Segment 5 — The Classic Lit Aspirant
**Who:** Intellectually curious people who aspire to read the great classics — Tolstoy,
Dostoyevsky, Dickens, Austen — but find the actual act of reading them daunting or
time-consuming. Often aged 28–50, high cultural self-image.

**Why they buy:** The free 70,000-book Project Gutenberg library removes every barrier
to starting. No purchase, no sign-up, no decision fatigue. The aspirational identity
hook ("I'm the kind of person who listens to War and Peace on my morning walk") combined
with the sleep-timer feature (fall asleep to a story) creates strong emotional resonance.

**Why medium priority:** Strong aspiration-to-action gap that the product bridges cleanly.
The free library is a unique differentiator no competitor can match. Tends toward longer
listening sessions (whole novels), making them ideal premium candidates who want multiple
voices and full speed control.

---

## How to Use These Files in Seedance 1.5

Each scene file contains:
- **Metadata block** — timing, platform format, audio cues, energy level
- **Visual description** — detailed enough for Seedance to generate a clip
- **Camera notes** — movement style, lens feel, shot type
- **Lighting notes** — mood and source
- **Text overlays** — exact copy, font style, animation style
- **Audio notes** — music direction, voice-over copy if applicable
- **Seedance prompt** — a condensed, directive version ready to paste directly

### Generation workflow

1. Use the `## Seedance Prompt` block from each scene file as your primary input
2. Generate each scene as a **separate clip** — do not try to generate an entire ad in one pass
3. For screen recordings: generate UI mockups separately and composite in post
4. Assemble clips in CapCut, Premiere, or DaVinci Resolve
5. Add text overlays and sound design in post — Seedance handles the cinematics

### Aspect ratios

- TikTok / YouTube Shorts / Instagram Reels → `9:16` vertical
- YouTube pre-roll (standard) → `16:9` horizontal
- Instagram Feed → `1:1` square (crop from 9:16)

### Brand consistency

- Word highlight color in any UI shot: `#2EC7F6`
- Background / cards: `#F7F5F2`
- Font on text overlays: Space Grotesk Bold where possible
- Avoid overly polished stock-footage energy in segments 1 and 3 — keep it authentic/TikTok-native

---

## Folder Structure

```
ads/
├── README.md                          ← this file
│
├── segment-1-digital-hoarder/        TikTok · 30s · guilt→relief
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-pivot.md
│   ├── scene-03-montage.md
│   ├── scene-04-payoff.md
│   └── scene-05-cta.md
│
├── segment-2-busy-commuter/          YouTube Pre-roll · 45s · time reclaimed
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-demonstration.md
│   ├── scene-03-day-in-life.md
│   ├── scene-04-offer.md
│   └── scene-05-cta.md
│
├── segment-3-student/                TikTok · 20s · study hack
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-the-hack.md
│   ├── scene-03-the-result.md
│   ├── scene-04-features.md
│   └── scene-05-cta.md
│
├── segment-4-privacy-rebel/          YouTube · 45s · anti-surveillance identity
│   ├── overview.md
│   ├── scene-01-accusation.md
│   ├── scene-02-alternative.md
│   ├── scene-03-product-tour.md
│   ├── scene-04-philosophy.md
│   └── scene-05-cta.md
│
├── segment-5-classic-lit-aspirant/   YouTube + Reels · 40s · aspiration
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-problem-and-number.md
│   ├── scene-03-library-tour.md
│   ├── scene-04-sleep-scene.md
│   └── scene-05-cta.md
│
├── segment-6-avid-reader/            Instagram Reels + YouTube · 35s · read more
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-the-gap.md
│   ├── scene-03-still-reading.md
│   ├── scene-04-more-books.md
│   └── scene-05-cta.md
│
├── segment-7-business-optimizer/     YouTube + LinkedIn · 45s · CEO reading math
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-the-stack.md
│   ├── scene-03-speed.md
│   ├── scene-04-library.md
│   └── scene-05-cta.md
│
├── segment-8-academic/               YouTube + Podcast · 45s · dual-coding retention
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-mechanism.md
│   ├── scene-03-workflow.md
│   ├── scene-04-features.md
│   └── scene-05-cta.md
│
├── segment-9-fitness-optimizer/      TikTok + Reels · 25s · gym time = book time
│   ├── overview.md
│   ├── scene-01-hook.md
│   ├── scene-02-the-shift.md
│   ├── scene-03-how-it-works.md
│   ├── scene-04-the-math.md
│   └── scene-05-cta.md
│
└── segment-10-news-reader/           TikTok + Shorts · 25s · saved articles cleared
    ├── overview.md
    ├── scene-01-hook.md
    ├── scene-02-the-workflow.md
    ├── scene-03-everywhere.md
    └── scene-04-cta.md
```
