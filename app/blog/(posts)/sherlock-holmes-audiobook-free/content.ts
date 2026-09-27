// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/1661
//   - https://www.gutenberg.org/ebooks/9551
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
    "q": "Does The Adventures of Sherlock Holmes include every Holmes story?",
    "a": "No. It contains twelve cases, from A Scandal in Bohemia to The Adventure of the Copper Beeches. Other Holmes collections and novels are separate books."
  },
  {
    "q": "Is this a human-narrated audiobook?",
    "a": "The LoudReader route uses speech generated from the ebook. Human recordings are separate editions with their own narrators, durations and terms."
  },
  {
    "q": "How long is each story?",
    "a": "There is no common fixed duration. Stories differ in length, and synthetic readings depend on voice and playback speed. Choose sessions by story rather than relying on a single estimate."
  },
  {
    "q": "What must I download?",
    "a": "Install the app, download the chosen ebook and finish any required voice-resource downloads. Text-to-speech does not require obtaining a separate finished MP3 recording."
  },
  {
    "q": "Can I continue listening for free after the voice trial?",
    "a": "Yes. Try every available voice for the first 8 hours of listening; afterward, unlimited listening continues with a limited free English voice selection. Premium features such as speed control are separate."
  }
];
