// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/37106
//   - https://www.gutenberg.org/cache/epub/37106/pg37106-images.html
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry little-women,
//     ebook 37106. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/little-women: catalogue/sample route, not a full audiobook.
// Product facts: release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0)
// in the LoudReader app source, reviewed by the shared 2026-09-28
// source audit (docs/product-facts-2026-09-28.md): SubscriptionAccess.swift,
// SubscriptionManager.swift, VoiceRegistry.swift, PaywallReason.swift,
// ProjectGutenbergService, ContentView.swift file importer, Xcode target configuration.
// FREE_TIER imports the updated shared wording: eight cumulative listening hours,
// then a free English voice selection (not any studio narrator), unlimited listening.
// iPad compatibility on Apple Silicon is not a native Mac app; no device sync promise.
// Local speech is not a claim of zero diagnostics, analytics or network use.
// Edition and voice-selection advice is editorial guidance, not a tested superiority claim.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "Does this Little Women edition contain both parts?",
    a: "Yes. Gutenberg ebook 37106 includes Part First and Part Second, with 47 chapters in total. Part Second starts at chapter 24.",
  },
  {
    q: "Is the sample a human narrator?",
    a: "No. The LoudReader sample demonstrates synthetic speech. The app reads the selected ebook rather than playing a purchased studio recording.",
  },
  {
    q: "How long does the whole book take?",
    a: "The catalogue estimates about 20.5 hours from text length. That is not a measured recording duration, and your chosen voice and speed can change it.",
  },
  {
    q: "Can I finish both parts without paying?",
    a: FREE_TIER.full,
  },
  {
    q: "Do I need to download it before a trip?",
    a: "Yes. Download the book and required voice files while connected, then check playback. The catalogue is browsable in the app, but that does not mean every book is already stored on your device.",
  },
];
