// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/28054
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry the-brothers-karamazov,
//     ebook 28054. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/the-brothers-karamazov: catalogue/sample route, not a full audiobook.
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
    q: "Which English translation is in the catalogue?",
    a: "The entry links Gutenberg ebook 28054, translated by Constance Garnett. Check the translator’s name when comparing another ebook or recording.",
  },
  {
    q: "Is every translation free because the original is old?",
    a: "No. The linked Gutenberg record describes that particular English edition. A different translation or recording has its own publication and rights information.",
  },
  {
    q: "How long does it take to listen?",
    a: "The catalogue estimates about 38 hours from text length. The voice and playback speed change the actual duration; use chapter boundaries for your listening plan.",
  },
  {
    q: "Can I listen without a subscription?",
    a: FREE_TIER.full,
  },
  {
    q: "Does the app automatically carry my place from iPhone to Mac?",
    a: "No. LoudReader has no automatic library or reading-position sync between devices. It runs on iPhone and iPad, and as the iPad app on compatible Apple Silicon Macs; manage each device’s copy separately.",
  },
];
