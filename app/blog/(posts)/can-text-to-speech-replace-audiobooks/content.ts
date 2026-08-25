// FACT PROVENANCE. Verified 2026-08-25 against the LoudReader app source
// (LoudReader_mac repo, main branch) and components/money/site.ts:
//   - Pricing, free tier, voice roster and Premium feature list come
//     verbatim from PRICING and VOICES in site.ts (single source of truth,
//     synced with the App Store listing).
//   - On-device voice cloning (Voice Studio) verified against CLONING in
//     site.ts: "about ten seconds" of recorded speech, and the recording,
//     model, and voice never leave the device.
//   - Playback speed range (0.3x to 3.0x), sleep timer, ambient soundscapes,
//     and notes and highlights are Premium features per PRICING.premiumFeatures.
//   - Statements about commercial audiobook services (Audible, Apple Books,
//     Spotify, library apps like Libby and Hoopla) and about what
//     professional narration involves (character voices, multi-cast
//     productions, director-guided performance) are deliberately generic,
//     well-known descriptions with no invented pricing, statistics, or
//     reviews attached.
// This article does not repeat the feature-by-feature product comparison in
// /blog/audible-vs-text-to-speech; it answers a narrower question (can TTS
// substitute for an audiobook at all) rather than comparing two products.
// Claims NOT made: no claim that TTS narration equals or exceeds a trained
// human narrator's performance, no invented benchmark or listener study, no
// specific competitor per-credit or per-book audiobook price (the FAQ price
// comparison stays qualitative, since no competitor price is sourced here).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can text to speech replace audiobooks for every book?",
    a: "No. For a book where the performance is the point, a full-cast production, a memoir read by its author, a novel built around distinct character voices, a trained human narrator does something text to speech does not attempt. For every other book, especially the huge majority that were never recorded at all, text to speech is not a downgrade from an audiobook. It is the only audiobook that book will ever have.",
  },
  {
    q: "Does text to speech sound as good as a human narrator?",
    a: "Not in performance terms. Modern on-device voices sound natural for sustained listening, but they narrate rather than perform. A skilled narrator makes acting choices, character voices, comic timing, emotional shading, that a TTS engine does not attempt to replicate. If narration quality alone decides the format for you, a professionally narrated audiobook wins.",
  },
  {
    q: "What can text to speech do that audiobooks can't?",
    a: "Read anything you already have. Most books, including backlist titles, academic texts, manuscripts, self-published novels, and public domain classics, were never recorded as audiobooks and never will be. Text to speech also lets you adjust speed continuously instead of a few fixed presets, and it works on the exact file you own with no separate purchase.",
  },
  {
    q: "Is text to speech cheaper than audiobooks?",
    a: "Often, yes, though it depends how you already buy audiobooks. LoudReader's free tier plays every book you import with unlimited listening at no cost, and Premium, which adds every studio voice and speed control, costs $7.99 a month or $49.99 a year rather than a per-book price. For the books that have no audiobook edition at all, the comparison does not apply anyway, since there is nothing to buy.",
  },
  {
    q: "Can I mix the two, audiobooks for some books and text to speech for others?",
    a: "Yes, and that is how most people who try both end up using them. Reach for a professionally narrated audiobook when a specific performance is what you want. Reach for text to speech for the books that have no recording, the ones you already own as files, or the ones you want to read faster than a fixed narration speed allows.",
  },
];
