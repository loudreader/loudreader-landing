// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/16
//   - https://www.gosh.nhs.uk/about-us/our-history/peter-pan-at-great-ormond-street-hospital/
//   - https://neverlandofficial.com/discover/peter-pan-copyright/
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
    "q": "Which novel does this guide cover?",
    "a": "J. M. Barrie’s Peter and Wendy, listed by Project Gutenberg as Peter Pan, ebook #16. It is not the play, a film adaptation or Peter Pan in Kensington Gardens."
  },
  {
    "q": "Is Peter Pan public domain everywhere?",
    "a": "Do not treat the US Gutenberg listing as a worldwide permission. GOSH Charity describes special continuing UK royalty rights, including for ebooks and audiobooks. Check the edition and your territory."
  },
  {
    "q": "Is LoudReader’s reading a human performance?",
    "a": "No. LoudReader generates speech from the text with a synthetic voice. A cast recording or an actor’s interpretation is a different listening option."
  },
  {
    "q": "Is it suitable for every child?",
    "a": "Preview it first. The original text contains violence and dated portrayals that may be altered or omitted in modern adaptations. Suitability depends on the child and edition."
  },
  {
    "q": "Is a particular running time guaranteed?",
    "a": "No. Runtime changes with the text, voice and playback speed. A catalog estimate is not the measured duration of a finished recording."
  }
];
