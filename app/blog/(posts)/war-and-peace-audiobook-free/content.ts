// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/2600
//   - https://www.gutenberg.org/cache/epub/2600/pg2600-images.html
//   - https://www.gutenberg.org/policy/permission.html
//   - Edition/translator claims use the linked primary catalog record and text,
//     not its automatically generated synopsis. US status is not global clearance.
//   - data/catalog-slugs.json and data/audio-samples.ts: catalog route and sample.
//   - components/money/site.ts: FREE_TIER and Premium playback features.
//   - Product claims cross-checked against the 2026-09-28 shipping-source audit:
//     LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//     SubscriptionAccess.swift, SubscriptionManager.swift, KittenVoice.swift,
//     VoiceRegistry.swift, PaywallReason.swift, ProjectGutenbergService.swift
//     and the Xcode iOS target. Compatible Macs run the iPad app; catalog
//     discovery, ebook download and required voice setup are distinct.
//     No runtime/network test was performed for this article revision.
// Do not claim: worldwide copyright clearance, a fixed measured runtime,
// identical modern translations, human/cast performance, no network or telemetry,
// no downloads, automatic cross-device reading sync, or every feature free.
// Practical listening suggestions are editorial advice, not measured outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Which translation does this guide use?",
    "a": "The English translation by Louise and Aylmer Maude in Project Gutenberg ebook #2600. Other translations can use different wording, names and editorial choices."
  },
  {
    "q": "How long does War and Peace take to listen to?",
    "a": "Duration depends on the edition, voice, speed and pauses. A catalog estimate based on text is not the measured length of a finished recording."
  },
  {
    "q": "Will a synthetic voice distinguish all the characters?",
    "a": "Do not expect an actor for each character. Keep the text nearby for names and dialogue tags, and sample a human narration if distinctive character voices matter to you."
  },
  {
    "q": "Do I have to download a complete audio recording?",
    "a": "No finished recording is needed for text-to-speech, but the app, ebook and required voice resources still need downloading and storage."
  },
  {
    "q": "Can the entire English novel be heard on the free tier?",
    "a": "Unlimited listening continues after the first 8 hours of listening with a limited free English voice selection. Extra features such as speed control require Premium."
  }
];
