// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/1727
//   - https://www.gutenberg.org/cache/epub/1727/pg1727-images.html
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
    "q": "Which English translation is used here?",
    "a": "Samuel Butler’s prose translation in Project Gutenberg ebook #1727. A modern verse translation or a course edition may have different wording and structure."
  },
  {
    "q": "Can I use it alongside a different translation for class?",
    "a": "For exact quotations, passage references and line-by-line discussion, use the assigned translation. A free prose edition can differ substantially from your course text."
  },
  {
    "q": "How can I follow unfamiliar names?",
    "a": "Keep the text available when a name is unclear. A synthetic voice can mispronounce unfamiliar names; use the written spelling to identify the person rather than guessing from the audio."
  },
  {
    "q": "How long is The Odyssey as an audiobook?",
    "a": "There is no single duration across translations and narrations. Text-to-speech runtime also varies by voice and playback speed; a catalog estimate is only a planning aid."
  },
  {
    "q": "What do I need for offline listening?",
    "a": "Download the ebook and required voice resources first, then check playback with that selected book and voice. The catalog listing alone is not an offline copy."
  }
];
