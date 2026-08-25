# Blog batch 3: 61 topics (deduped vs the existing 90 + 10 money pages)

Written for the September/October 2026 drip: **1 article per day, 2026-09-01 to
2026-10-31** (61 days, 61 articles). One per day, not two. Batch 2 shipped 60
articles and four of them draw measurable traffic, so the bottleneck is query
choice, not volume.

Same rules as batch 2: each row = ONE article, ONE query, ONE avatar. Written
now, held (future `publishedAt`), released by the weekly check-in.

Avatars: TSBL = Time-Starved Book Lover · NDS = Neurodivergent Student ·
WPE = Writer Proofreading by Ear · ELL = English Language Learner ·
PCP = Privacy-Conscious Professional · ACT = Active/On-the-go · SEN = Senior/low-vision.

Format: `slug | search query | avatar | angle (non-generic + honest note)`

## Why these three clusters

Batch 1 and 2 wrote about the app. Batch 3 writes about **surfaces the site
already owns but never links to**:

- **`/voices`** shipped 2026-08-20 with real audio samples and has **zero
  inbound links from the blog**. It is an orphan. Nobody else in this category
  can copy it, because it needs actual rendered audio.
- **`/listen`** is 100 built catalog pages with covers, Wikidata entity links
  and samples, drawing near-zero traffic. Twenty-five of them target real
  title-level search demand and have a destination page already waiting.
- **AI answer engines are the main channel.** chatgpt.com/ai-assistant was 26
  of 51 sessions in the week to 2026-08-23. Cluster I is written for the shape
  of a question asked to an assistant, not a keyword typed into Google.

Cluster G also closes a genuine gap: the app ships 23 voices across 12
languages, and all 90 existing articles are English-only, while Brazil, France,
Germany, Spain and Italy are all in the top install countries.

## Before writing: confirm the query isn't already taken

Existing surfaces to check against (never two pages competing for one query):

- 10 money pages: `app/(seo)/*`
- 90 articles: `app/blog/(posts)/*`

Rows below were checked against both. Close calls are flagged inline as
MERGE-RISK with the article they brush against, so the writer can drop or
narrow rather than cannibalize.

---

## G. Voices and languages (12). Every row links to `/voices`

Hard requirement for this cluster: **every article links to `/voices` at least
once in body copy**, and the link is the payoff, not a footnote. The point of
the cluster is to stop the samples page being an orphan.

Do not name engines or models anywhere (see `components/money/site.ts`).
The roster is 23 voices: 11 English, 4 Spanish, one each for German, French,
Italian, Dutch, Polish, Portuguese, Swedish, Danish. For most non-English
languages that is ONE voice, and the article must say so plainly.

1. how-to-choose-a-narrator-voice | how to choose a text to speech voice | TSBL | picking a voice per material; send them to the samples instead of describing sound in words
2. male-or-female-narrator-audiobook | male or female narrator | TSBL | preference not science; no invented research, no fake percentages
3. what-does-offline-text-to-speech-sound-like | what does offline text to speech sound like | TSBL | the whole article is a pointer to real samples; honest that on-device has a ceiling
4. best-voice-for-nonfiction-vs-fiction | best tts voice for nonfiction | PCP | different material wants a different voice
5. change-narrator-voice-mid-book | change narrator voice mid book | TSBL | VERIFY against app source before claiming; if it can't, say it can't
6. spanish-text-to-speech-app | spanish text to speech app | ELL | 4 Spanish voices, the widest non-English roster
7. portuguese-text-to-speech-app | portuguese text to speech app | ELL | Brazil is the #2 install country; one Portuguese voice, say so
8. german-text-to-speech-app | german text to speech app | ELL | one voice, honest
9. french-text-to-speech-app | french text to speech app | ELL | one voice, honest
10. italian-text-to-speech-app | italian text to speech app | ELL | one voice, honest
11. polish-text-to-speech-app | polish text to speech app | ELL | one voice, honest
12. multilingual-text-to-speech-app | multilingual text to speech app | ELL | the 12-language roster as a whole; concede the depth is English-first

## H. Title-level long tail (25). Every row links to its `/listen/<slug>` page

Hard requirement: **the article links to the matching catalog page**, and the
catalog slug in the table below is a real existing route. Verify it resolves
before writing.

These are NOT reviews and NOT summaries. Each answers one question: how do I
listen to this specific book for free, right now, and what does it actually
sound like. The honest note in every one of these: this is a synthetic voice
reading a public-domain text, not a performed audiobook. Say it early.

MERGE-RISK for the whole cluster: `project-gutenberg-audiobooks`,
`best-audiobook-app-for-classics`, `librivox-alternative` and
`free-audible-alternative` own the *category* queries. These 25 own *title*
queries only. If a draft starts arguing the general case, it has drifted.

| # | slug | query | catalog page |
|---|---|---|---|
| 13 | pride-and-prejudice-audiobook-free | pride and prejudice audiobook free | /listen/pride-and-prejudice |
| 14 | the-great-gatsby-audiobook-free | great gatsby audiobook free | /listen/the-great-gatsby |
| 15 | frankenstein-audiobook-free | frankenstein audiobook free | /listen/frankenstein |
| 16 | dracula-audiobook-free | dracula audiobook free | /listen/dracula |
| 17 | moby-dick-audiobook-free | moby dick audiobook free | /listen/moby-dick |
| 18 | jane-eyre-audiobook-free | jane eyre audiobook free | /listen/jane-eyre |
| 19 | crime-and-punishment-audiobook-free | crime and punishment audiobook free | /listen/crime-and-punishment |
| 20 | wuthering-heights-audiobook-free | wuthering heights audiobook free | /listen/wuthering-heights |
| 21 | the-picture-of-dorian-gray-audiobook-free | picture of dorian gray audiobook free | /listen/the-picture-of-dorian-gray |
| 22 | alice-in-wonderland-audiobook-free | alice in wonderland audiobook free | /listen/alices-adventures-in-wonderland |
| 23 | sherlock-holmes-audiobook-free | sherlock holmes audiobook free | /listen/the-adventures-of-sherlock-holmes |
| 24 | the-count-of-monte-cristo-audiobook-free | count of monte cristo audiobook free | /listen/the-count-of-monte-cristo |
| 25 | little-women-audiobook-free | little women audiobook free | /listen/little-women |
| 26 | war-and-peace-audiobook-free | war and peace audiobook free | /listen/war-and-peace |
| 27 | the-odyssey-audiobook-free | the odyssey audiobook free | /listen/the-odyssey |
| 28 | treasure-island-audiobook-free | treasure island audiobook free | /listen/treasure-island |
| 29 | wizard-of-oz-audiobook-free | wizard of oz audiobook free | /listen/the-wonderful-wizard-of-oz |
| 30 | huckleberry-finn-audiobook-free | huckleberry finn audiobook free | /listen/adventures-of-huckleberry-finn |
| 31 | a-tale-of-two-cities-audiobook-free | tale of two cities audiobook free | /listen/a-tale-of-two-cities |
| 32 | meditations-audiobook-free | marcus aurelius meditations audiobook free | /listen/meditations |
| 33 | the-brothers-karamazov-audiobook-free | brothers karamazov audiobook free | /listen/the-brothers-karamazov |
| 34 | peter-pan-audiobook-free | peter pan audiobook free | /listen/peter-pan |
| 35 | gullivers-travels-audiobook-free | gullivers travels audiobook free | /listen/gullivers-travels |
| 36 | hound-of-the-baskervilles-audiobook-free | hound of the baskervilles audiobook free | /listen/the-hound-of-the-baskervilles |
| 37 | the-phantom-of-the-opera-audiobook-free | phantom of the opera audiobook free | /listen/the-phantom-of-the-opera |

Rows 13 to 37 all use avatar TSBL.

## I. Assistant-shaped questions (24)

Written for how someone phrases a question to an AI assistant. Long, specific,
answered completely in the TL;DR. Every one of these must survive having a
single sentence lifted out of context.

38. what-app-reads-pdfs-aloud-without-uploading | app that reads pdf aloud without uploading | PCP | the upload question is the whole article; MERGE-RISK with money page /listen-to-pdf-iphone, stay on the privacy question not the how-to
39. text-to-speech-app-without-a-subscription | text to speech no subscription | TSBL | honest pricing, import PRICING from site.ts
40. text-to-speech-app-without-an-account | text to speech app no sign up | PCP | no account is a real differentiator, say what that costs you too (no sync)
41. how-much-do-text-to-speech-apps-cost | how much do text to speech apps cost | TSBL | honest field comparison; no invented competitor prices, check them or omit
42. is-speechify-worth-it | is speechify worth it | TSBL | answer the question fairly, including when it is; MERGE-RISK with /speechify-alternative-for-mac, that page owns "alternative", this owns "worth it"
43. is-elevenreader-free | is elevenreader free | PCP | MERGE-RISK with /elevenreader-alternative, same split as above
44. what-file-formats-can-be-read-aloud | what file types can be read aloud | WPE | EPUB/PDF/TXT/MD matrix; concede MOBI-DRM and image-only PDFs
45. can-i-listen-to-ebooks-i-already-own | listen to ebooks i already own | TSBL | DRM wall stated plainly and early
46. why-does-text-to-speech-sound-robotic | why does text to speech sound robotic | TSBL | explain the real reason; MERGE-RISK with are-ai-voices-good-enough-for-books, that one judges quality, this one explains cause
47. book-not-on-audible-what-to-do | book not on audible | TSBL | the catalog-gap angle, funnels to /listen
48. text-to-speech-that-remembers-your-place | app that saves your place in a book | NDS | VERIFY resume behavior against app source
49. how-long-does-it-take-to-listen-to-a-book | how long does it take to listen to a book | TSBL | real math using data/voice-durations.json, label it as math not a study; MERGE-RISK with how-many-books-can-you-read-in-a-year, that one is per year, this is per book
50. text-to-speech-sleep-timer | text to speech app with sleep timer | TSBL | feature query; MERGE-RISK with fall-asleep-to-audiobooks, that one is the use case, this is the feature. If the draft repeats it, DROP this row
51. does-text-to-speech-drain-your-battery | does text to speech drain battery | ACT | do NOT invent numbers; either measure on device or write qualitatively
52. how-much-storage-do-offline-voices-need | how much space do offline voices take | PCP | VERIFY actual sizes before writing any figure
53. can-text-to-speech-read-footnotes | how does text to speech handle footnotes | NDS | real behavior with footnotes, tables, headers; concede what gets skipped
54. how-does-an-app-read-math-aloud | how does text to speech read math | NDS | the app has real math speech handling, VERIFY against app source; strong differentiator if true, drop the row if not
55. what-happens-to-your-data-with-text-to-speech | is text to speech private | PCP | MERGE-RISK with are-text-to-speech-apps-safe and /private-text-to-speech-no-cloud; only write this if it can answer "what leaves the device" more concretely than both, otherwise DROP
56. text-to-speech-on-mac-and-iphone | text to speech app for mac and iphone | PCP | native on both, and what does not carry across
57. free-vs-paid-text-to-speech-what-you-get | free vs paid text to speech | TSBL | exact free-tier boundary, no softening
58. can-text-to-speech-replace-audiobooks | can text to speech replace audiobooks | TSBL | answer honestly: sometimes no; MERGE-RISK with audible-vs-text-to-speech, that compares products, this answers the replace question
59. best-text-to-speech-for-classic-literature | text to speech for classic books | TSBL | old prose, long sentences, archaic spelling; funnels to /listen
60. how-to-listen-to-public-domain-books-legally | are public domain audiobooks legal | TSBL | plain answer on public domain and what you may do with a generated reading
61. what-to-listen-to-next | what book should i listen to next | TSBL | browsing entry point into the /listen catalog

---

## Generation notes (deltas vs `docs/batch2-brief.md`)

The batch 2 brief is reusable as-is except for these four changes:

1. **Hold date is `2027-01-01`**, not `2026-11-01`. Batch 2 already occupies
   dates up to 2026-08-29, and rows here get released across September and
   October by a human. Never today's date.
2. **Cluster G must link `/voices`; cluster H must link its `/listen/<slug>`.**
   This is in addition to the contract's "2 or more internal links" rule, not
   instead of it. An article in G or H without that link is rejected.
3. **Cluster H is the catalog, not the classics essay.** Anything that reads
   like a book report or plot summary is rejected. The reader wants to press
   play.
4. **Rows 5, 48, 51, 52, 54 need app verification before a claim is written.**
   If the behavior cannot be verified against app source or in-app, the row is
   dropped, not softened. Record what was checked in the fact-provenance
   comment as usual.

Everything else holds: zero em-dashes and en-dashes, the banned-word list, no
fabrication, no engine or model names, server components only, 800 to 1400
words, `npm run build` plus the dash grep after each cluster, no commits, no
shared-file edits.

## Suggested order

Cluster H first. It has a built destination, the clearest search intent, and
the shortest path to proving whether title-level long tail works at all. If the
first ten H articles show nothing in GSC after three weeks, that is a real
signal and clusters G and I should be re-scoped before writing 36 more.
