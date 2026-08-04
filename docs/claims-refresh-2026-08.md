# Claims refresh — August 2026 (branch `voices-23-copy`)

Every claim below was read out of the shipping app source on branch
`design-reading-lamp` (the newest LoudReader code, commit `e452893`,
2026-08-04), not remembered. The audit it implements is
`LoudReader_mac/Docs/CLAIMS_AUDIT_2026-08-04.md`.

**This branch is not merged and must not be deployed yet.** See "Before this
goes live" at the bottom — the App Store build carrying these features has not
shipped, so publishing today would make the site wrong in the other direction.

---

## What was wrong

| Claim on the site | Files | Reality in 1.06 |
|---|---|---|
| "8 voices" / "eight voices" | 22 files, incl. JSON-LD and `llms.txt` | 23 user-facing studio narrators |
| "English only (more coming)" | 30 places | 10 languages, each with a native narrator |
| Voice cloning | never mentioned | shipping since 2026-07-28, entirely on device |
| Campaign screenshot on the home page | `screen-campaign.png` | the campaign row was removed from Home on 2026-07-25; campaigns survive only as a quick action |

## The verified roster

Read out of the studio voice enum in the app repo:

- **English — 11**: James, Nora, Clara, Emma, Alice, Grace, Ivy, Oliver, Henry,
  Arthur, Hugo
- **Spanish — 4**: Sofía, Héctor, Diego, Valentina
- **One each — 8**: Klaus (de), Antoine (fr), Marco (it), Daan (nl),
  Tomasz (pl), Rafael (pt), Erik (sv), Mads (da)
- **Total: 23 narrators, 10 languages**

`David` and `Golden` exist in the enum as QA references, are filtered by
`isInternal`, and are **not** counted.

**Engine and model names never appear on the site.** Not in copy, not in
JSON-LD, not in source-note comments. This branch also strips the ones that had
accumulated in blog source notes. A reader hears voices, not model names.

Two facts that the copy has to respect, both from the same file:

1. **Studio narrators are Premium-only.** `availableVoices(isPremium:)` returns
   `[]` for a free user. The free tier keeps one voice after the 8-hour trial.
2. **The picker is lazy by language.** A Polish narrator appears once a Polish
   book is in the library. So "23 narrators" is true of the roster, not of what
   any one user sees in a list — the copy says so wherever it could mislead.

## Canonical phrasing

Added to `components/money/site.ts` as `VOICES` and `CLONING`, so future pages
copy from one place instead of paraphrasing:

- headline — "23 studio narrators across 10 languages"
- English-market pages — "11 English studio voices"
- Premium feature list — "all 23 studio narrators across 10 languages"
- free tier — "one natural offline voice, with unlimited listening"
- cloning — "clone your own voice on device"

## What changed, by area

**76 files.** `npx tsc --noEmit` clean, `npm run build` clean, no console
errors on the dev server, and `/`, `/faq`, `/support` and the money pages were
checked in the browser for the new strings.

- **`components/money/site.ts`** — new `VOICES` and `CLONING` blocks;
  `PRICING.premiumFeatures` now names 23 narrators and cloning.
- **`app/faq/faq-data.ts`** — "Which voices are available?" rewritten with the
  full breakdown and the lazy-language rule; two new questions ("Can LoudReader
  read books in languages other than English?", "Can I use my own voice?");
  "What does Premium add?" now includes cloning.
- **`app/support/SupportClient.tsx`** — same corrections, plus a cloning entry.
- **`app/HomeClient.tsx`** — voices section rewritten (23 / 10 languages / no
  accented-English narrators); **new voice-cloning section** between Voices and
  Library; Discover section reframed around the classics shelf and Surprise Me
  instead of campaigns; the `screen-campaign.png` phone and its blur
  placeholder removed; pricing bullets updated (23 narrators + cloning).
- **`app/page.tsx`** — `featureList` in the SoftwareApplication JSON-LD now
  carries the roster, the language list and cloning.
- **`app/layout.tsx`** — site meta description leads with 23 narrators / 10
  languages / cloning.
- **`public/llms.txt`** — same facts, for answer engines.
- **10 money pages** — voice counts and language rows corrected; a **"Voice
  cloning" comparison row** added to the ElevenReader and Speechify pages,
  where on-device vs in-the-cloud is the actual differentiator.
- **~45 blog posts** — voice counts corrected. The English-learning posts
  (ESL, shadowing, non-native readers, easy English books) were *rewritten*
  rather than string-swapped: their argument used to be "English-only, which
  for this is exactly what you want", which is now false. They now say English
  is the deepest part of the roster — 11 of 23 — which keeps the argument and
  makes it true.
- **Source-note comments** in the affected `content.ts` files were updated too,
  so the next writer does not reintroduce "English-only" from the notes.

## Judgment calls worth reviewing

1. **Campaigns.** The cloud session's instruction was "campaign out". Campaigns
   are not actually dead — the catalog feeds the classics shelf and Surprise
   Me, and a quick action still opens the campaign sheet. What is dead is the
   Home row, and the screenshot is of a screen the user no longer lands on. So
   the section was *reframed* rather than deleted: still "over 100 hand-picked
   classics", now described as the shelf plus Surprise Me. Delete outright if
   you disagree.
2. **Competitor cloning cells.** Phrased as "in the cloud — your recording is
   uploaded and processed on their servers", which is true of both ElevenLabs
   and Speechify without asserting anything about their feature details.
3. **EU AI Act Article 50 marking** (exported audio carries a machine-readable
   AI-generated tag) is in the audit as a trust signal and is **not** used
   anywhere on the site yet. It needs a decision: it is a genuine
   differentiator, but it invites questions about export in general.

## Before this goes live

1. **Ship 1.06 first.** These claims describe a build that is not in the App
   Store — as of 2026-08-04 the release is expected within the week. Merging
   this branch before it lands makes the site wrong in the other direction.
   The order is: App Store release → merge `voices-23-copy` → deploy.
2. **Screenshots are stale and now contradict the copy.**
   `public/screen-voices-premium.png` shows the old picker sitting directly
   next to "23 studio narrators across 10 languages". There is **no** Voice
   Studio screenshot at all, which is why the cloning section is text-only.
   The App Store screenshots predate the roster change too. The capture driver
   (`MarketingScreenshotTests` in the app repo, commit `e452893`) exists for
   this.
3. **`public/screen-campaign.png` is now unreferenced.** Delete it once the
   reframing above is agreed.
4. **The releases page has no entry for this release.** Draft, to paste into
   `app/releases/ReleasesClient.tsx` when the version number is fixed:

   > **Twenty-three narrators, ten languages** — Spanish, German, French,
   > Italian, Dutch, Polish, Portuguese, Swedish and Danish books now get a
   > narrator who speaks the language.
   > **Your own voice** — read one paragraph aloud and LoudReader builds a
   > narrator from it, entirely on your phone.
   > Faster start: the first sentences are ready before you press play.

5. **No blog post mentions cloning yet.** Not a false claim, just the biggest
   untold story on the site — worth one dedicated post
   (`clone-your-own-voice-on-device` would slot into the existing
   privacy/on-device cluster).
