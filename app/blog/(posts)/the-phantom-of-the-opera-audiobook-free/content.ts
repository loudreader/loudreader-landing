// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/175
//   - https://www.gutenberg.org/cache/epub/175/pg175-images.html
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry the-phantom-of-the-opera,
//     ebook 175. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/the-phantom-of-the-opera: catalogue/sample route, not a full audiobook.
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
    q: "Is this the musical soundtrack?",
    a: "No. It is generated speech from an English translation of Leroux’s novel. It does not include the stage musical’s songs or script.",
  },
  {
    q: "Is ebook 175 the original French text?",
    a: "No. Gutenberg lists it as English and identifies it as a translation. The catalogue record does not name its translator; this guide does not claim it is a particular modern translation.",
  },
  {
    q: "Is the English edition guaranteed unabridged against the French?",
    a: "This guide does not make that claim. Check the translation’s editorial information if textual completeness against the French original matters to you.",
  },
  {
    q: "How long is the reading?",
    a: "The approximately 9.5-hour catalogue estimate is derived from text length. The actual voice and speed determine listening time.",
  },
  {
    q: "Can I listen free in LoudReader?",
    a: FREE_TIER.full,
  },
];
