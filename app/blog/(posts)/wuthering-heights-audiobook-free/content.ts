// FACT PROVENANCE — reviewed 2026-09-28.
//   - https://www.gutenberg.org/ebooks/768
//   - https://www.gutenberg.org/cache/epub/768/pg768-images.html
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
    "q": "Which text is linked in this guide?",
    "a": "The English text of Emily Brontë’s Wuthering Heights in Project Gutenberg ebook #768. Check your assigned edition if you need matching wording or references."
  },
  {
    "q": "Is every recording of Wuthering Heights free?",
    "a": "No. The underlying novel and a particular recording are separate. Check the recording’s provider, terms and territorial availability."
  },
  {
    "q": "Will the synthetic voice act Lockwood and Nelly separately?",
    "a": "Do not expect distinct actors for each storyteller. Follow the text’s narrative transitions, and sample a human recording if performed characterisation is important to you."
  },
  {
    "q": "What must be downloaded for offline listening?",
    "a": "The ebook and required voice resources must be ready on the device. Check playback with the selected voice before you travel; a catalog entry is not an offline copy."
  },
  {
    "q": "Is free listening limited to a short preview?",
    "a": "LoudReader offers every available voice for the first 8 hours of listening. After that, listening remains unlimited with a limited free English voice selection. Premium features are separate."
  }
];
