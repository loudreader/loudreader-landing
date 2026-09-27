// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/174
//   - https://www.gutenberg.org/cache/epub/174/pg174-images.html
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
    "q": "Which Dorian Gray text is linked here?",
    "a": "Project Gutenberg ebook #174, an English text with the preface and twenty chapters. Check that it matches the version needed by your class or book group."
  },
  {
    "q": "Is every Dorian Gray audiobook free to reuse?",
    "a": "No. An old underlying text does not settle the rights to a particular recording, introduction or annotated edition. Check the provider’s terms and your location."
  },
  {
    "q": "Is LoudReader’s voice a human narrator?",
    "a": "No. It generates speech from the ebook. Hear the sample and decide whether its phrasing works for you; it is not an actor’s interpretation of Wilde’s dialogue."
  },
  {
    "q": "What downloads are needed?",
    "a": "The app, the ebook and required voice resources. You do not need a separate finished recording for text-to-speech, but setup is not download-free."
  },
  {
    "q": "Can I use my own edition?",
    "a": "You can import a supported DRM-free file that you may use. A purchased ebook with DRM may not be importable, and a different edition may not match the catalog sample’s wording."
  }
];
