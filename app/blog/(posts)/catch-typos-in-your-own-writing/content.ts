// FACT PROVENANCE. Verified on 2026-07-14:
// External citation (the article's ONE study/commentary citation):
//   - WIRED, "What's Up With That: Why It's So Hard to Catch Your Own Typos"
//     (Nick Stockton, August 2014), quoting psychologist Tom Stafford of the
//     University of Sheffield: https://www.wired.com/2014/08/wuwt-typos/
//     Verified via web search 2026-07-14. Claims taken from it, paraphrased:
//     writing is a high-level task; the brain generalizes component parts;
//     when proofreading your own work the version in your head competes with
//     the version on the screen; Stafford's advice is to make the text as
//     unfamiliar as possible (change font, print it out). No other studies
//     are cited; no statistics are invented.
// App-behavior claims verified against the LoudReader app source
// (LoudReader_mac repo, main branch):
//   - Word-by-word highlighting: ContinuousReaderView.swift:4383-4388
//     (per-word `tts-word-highlight`), driven by TTSEngine word callbacks.
//   - Import formats EPUB + PDF only: ContentView.swift:827 fileImporter
//     allowedContentTypes [.epub, .pdf]; article says "export to PDF".
//   - On-device / offline / no account: local TTS engines, no CloudKit or
//     upload code anywhere in the app source.
// Spellchecker limitations are described generically (real-word errors and
// missing words pass; no named product or accuracy number is claimed).
// Claims you may NOT make: any percentage of typos caught by listening,
// any named spellchecker's behavior, any second study without verifying it.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why can I spot typos in other people's writing but not mine?",
    a: "Because you only have a mental draft of your own text. When you read someone else's writing, everything on the page is new information and gets your full attention. When you read your own, your brain already knows the intended meaning and fills in gaps, so you see the sentence you meant to write, not the one you wrote. The errors are not invisible; they are being autocorrected by the author's own memory.",
  },
  {
    q: "Does reading backwards actually work?",
    a: "Partially. Reading your text backwards, sentence by sentence, strips away meaning so each word gets inspected on its own, which is good for catching misspellings. But because it destroys meaning, it cannot catch meaning-level errors: a missing 'not', a 'from' that should be 'form', or a sentence that stops making sense halfway. It is also slow and unpleasant enough that most people quit after a page.",
  },
  {
    q: "Why does hearing text expose errors seeing it hides?",
    a: "A text-to-speech voice has no idea what you meant to write, so it reads exactly what is on the page. Your typo-blindness lives in the visual reading loop (skimming, predicting, filling in), and listening bypasses that loop entirely. A missing word becomes an audible hole, a doubled word gets spoken twice, and a garbled sentence sounds garbled, even though your eyes would have glided over all three.",
  },
  {
    q: "Do spellcheckers catch missing words?",
    a: "Usually not. A spellchecker flags strings that are not words, so 'teh' gets caught. But a missing word leaves a perfectly spelled sentence behind, and real-word errors like 'form' for 'from' or 'it' for 'is' pass too. Grammar checkers catch some of these and miss others. That is why a listening pass complements them: the voice reads the sentence you actually wrote, and your ear notices when it is not the sentence you meant.",
  },
  {
    q: "How long should I wait before proofreading my own draft?",
    a: "As long as your deadline allows. The enemy is familiarity, and familiarity fades with time. Overnight is a common rule of thumb; a week is better for anything important. If you have no time at all, change the modality instead of waiting: listening to the draft makes it unfamiliar immediately, which is the same effect a delay is trying to achieve.",
  },
];
