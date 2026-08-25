// FACT PROVENANCE. Every app-behavior and roster claim verified on 2026-08-24
// against:
//   - data/voices.ts (VOICE_LANGUAGES, ALL_VOICES): 23 narrators across 10
//     languages (11 English, 4 Spanish, 1 each for German, French, Italian,
//     Dutch, Polish, Portuguese, Swedish, Danish), audited 2026-08-20.
//   - components/money/site.ts (VOICES, CLONING): headline roster count,
//     lazy-by-language picker behavior, free tier = one voice, Premium
//     opens up the full roster, on-device voice cloning from about ten
//     seconds of speech.
//   - components/money/site.ts (PRICING): speed range 0.3x to 3.0x is a
//     Premium feature.
//   - LoudReader/TTSPreferences.swift: selectedVoiceIdentifier is a single
//     app-wide UserDefaults value, not stored per book. You can change it at
//     any time (including mid-book, from the reader controls), but it is not
//     a per-book setting: switching narrators changes what plays next across
//     the whole app until you switch again. The article states this
//     precisely rather than implying a per-book voice slot.
// No engine or model names appear anywhere in this file, per
// components/money/site.ts.
// No claim about "what a voice sounds like" is made in prose beyond adjectives
// already present in the app's own picker blurbs (data/voices.ts) or the
// general shape of what narration style suits what material; the article
// points to /voices for the actual sound instead of describing it.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How many narrator voices does LoudReader have?",
    a: "23 studio narrators across 10 languages: 11 English voices, 4 Spanish voices, and one each for German, French, Italian, Dutch, Polish, Portuguese, Swedish, and Danish. You can hear every one of them at /voices before you pick.",
  },
  {
    q: "Can I try a voice before committing to it?",
    a: "Yes. The /voices page plays every narrator right in the browser, no app download or account needed. Inside the app, the free tier gives you one voice with unlimited listening, and Premium opens up the full roster so you can switch to a different narrator any time you like.",
  },
  {
    q: "Does the same voice work for fiction and nonfiction?",
    a: "It can, but it doesn't have to. A brisk, even voice that's easy to tune out in the background suits a report or a manual. A voice with more warmth and shape holds attention better through a novel. You can switch narrators from the reader controls whenever the material changes, so there's no reason to force one voice to do both jobs.",
  },
  {
    q: "What if I don't like any of the English voices?",
    a: "Unlikely with 11 to choose from, but if none of them land, LoudReader Premium also includes on-device voice cloning: read a few sentences aloud, about ten seconds, and the app builds a narrator from your own voice. The recording and the model stay on your device.",
  },
  {
    q: "Do non-English languages have as many voice choices as English?",
    a: "No, and the app is upfront about it. English has 11 voices and Spanish has 4. German, French, Italian, Dutch, Polish, Portuguese, Swedish, and Danish each have exactly one narrator. If you're reading in one of those languages, you're not choosing a voice so much as meeting the one available, which you can hear at /voices before you commit.",
  },
  {
    q: "Can I change the voice partway through a book?",
    a: "Yes, at any time, from the reader controls. One honest detail: the voice is an app-wide setting rather than saved per book, so switching narrators changes what plays next across your whole library, not just the book you're currently in, until you switch again.",
  },
];
