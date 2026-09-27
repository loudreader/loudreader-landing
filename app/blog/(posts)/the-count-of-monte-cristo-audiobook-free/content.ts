// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/1184
//   - https://www.gutenberg.org/cache/epub/1184/pg1184-images.html
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
    "q": "Which translation is this guide about?",
    "a": "The English text in Project Gutenberg ebook #1184. Its catalog record does not identify the translator, so this guide does not assign one or equate it with a modern translation."
  },
  {
    "q": "Is this guaranteed to be unabridged?",
    "a": "This guide does not certify the Gutenberg translation against the French original. Check the specific edition’s editorial information. Text-to-speech reads the supplied text; it cannot restore passages absent from that edition."
  },
  {
    "q": "How long will Monte Cristo take to listen to?",
    "a": "That depends on the edition, voice and speed. A text-based catalog estimate is not a measured recording duration. Try a chapter with your chosen voice before planning a listening schedule."
  },
  {
    "q": "Does the free route require a giant audiobook download?",
    "a": "A text-to-speech route uses the ebook and required voice resources instead of a finished recording of the novel. The app, book and voice setup still require downloads and storage."
  },
  {
    "q": "Can I change playback speed?",
    "a": "Playback speed from 0.3x to 3.0x is a LoudReader Premium feature. Free listening continues after the first 8 hours of listening with a limited free English voice selection."
  }
];
