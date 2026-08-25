// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch) and
// components/money/site.ts:
//   - Built-in Project Gutenberg catalog, browsable and free: site.ts and the
//     app's library import flow (Gutenberg browse/download sheet).
//   - Word-by-word highlighting in sync with narration and a saved reading
//     position: established product behavior, also documented in the
//     sibling article app/blog/(posts)/project-gutenberg-audiobooks.
//   - Playback speed 0.3x to 3.0x is a Premium feature: components/money/site.ts
//     (PRICING.premiumFeatures).
//   - Fully on-device, natural offline voices, native Mac and iPhone apps:
//     components/money/site.ts (DIFFERENTIATORS).
// General claims about how text-to-speech engines handle long sentences and
// unfamiliar/archaic words (pausing at punctuation, sentence-by-sentence
// processing, higher odds of mispronouncing rare words) are a description of
// how synthetic speech works in general, not a specific measured benchmark of
// any one voice, and are phrased that way. No study or statistic is cited.
// Claims you may NOT make until verified: any specific accuracy figure for
// how LoudReader's voices handle archaic words, CarPlay, OCR of scanned pages.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does text to speech work on classic literature?",
    a: "Yes, in the sense that any plain text can be read aloud, including public-domain classics. The results are generally more listenable than they sound on paper, because a narrator's job is exactly what a TTS engine does: turn written sentences into spoken ones. The rough edges are usually a rare archaic word or a very long sentence, not the book as a whole.",
  },
  {
    q: "Why does old prose sound different when read by a synthetic voice?",
    a: "Two habits of older writing that modern prose mostly dropped. Sentences run much longer, sometimes stretching a full paragraph with semicolons instead of periods, so a synthetic voice has fewer natural places to pause and breathe. And the vocabulary includes archaic spellings and words a modern voice never trained on, like 'thou', 'shew', or 'wherefore', which raise the odds of an odd pronunciation on any single word.",
  },
  {
    q: "Can I slow down the narration for dense or old-fashioned prose?",
    a: "Yes. LoudReader Premium lets you set playback speed anywhere from 0.3x to 3.0x, and slower speeds are genuinely useful for eighteenth and nineteenth century prose, where a single sentence can carry three or four clauses. The free tier plays at normal speed.",
  },
  {
    q: "Will a text-to-speech voice mispronounce old or unusual words?",
    a: "Sometimes, and that's true of any synthetic voice reading any unfamiliar word, not just archaic ones. A name, a place, or a word that's fallen out of use is more likely to trip a voice up than an ordinary sentence. It's a real limit worth knowing about going in, not a reason to skip the book.",
  },
  {
    q: "Where do I find classic books to listen to?",
    a: "LoudReader has a built-in catalog of 70,000+ Project Gutenberg books, all public domain and free to browse and import from inside the app, no separate download or file conversion needed.",
  },
];
