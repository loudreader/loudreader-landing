// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/2701
//   - https://www.gutenberg.org/ebooks/15
//   - https://www.gutenberg.org/ebooks/28794
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry moby-dick,
//     ebook 2701. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/moby-dick: catalogue/sample route, not a full audiobook.
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
    q: "Where can I find a free human recording of Moby-Dick?",
    a: "Project Gutenberg’s audio entry 28794 links a human performance with downloadable audio files. It is separate from LoudReader’s generated speech.",
  },
  {
    q: "Why are there different Gutenberg text editions?",
    a: "The catalogue links ebook 2701. Gutenberg’s own note recommends ebook 15, based on the first American edition, among its text versions. Compare the edition notes and import the version you want.",
  },
  {
    q: "Is 23.5 hours an exact runtime?",
    a: "No. It is LoudReader’s estimate from text length. A recording, chosen voice or playback speed can have a different duration.",
  },
  {
    q: "Can I hear an imported EPUB free?",
    a: FREE_TIER.full,
  },
  {
    q: "Can it play offline?",
    a: "Yes, when the ebook and required voice files are downloaded. Prepare them and try playback before you lose connectivity.",
  },
];
