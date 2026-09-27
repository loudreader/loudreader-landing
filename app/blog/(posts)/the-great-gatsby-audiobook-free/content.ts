// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/64317
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry the-great-gatsby,
//     ebook 64317. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/the-great-gatsby: catalogue/sample route, not a full audiobook.
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
    q: "Where is a free English copy of The Great Gatsby?",
    a: "Project Gutenberg ebook 64317 offers the English text and marks it public domain in the USA. Check the edition’s availability in your country.",
  },
  {
    q: "Does a free text mean a film or actor’s recording is free too?",
    a: "No. The Gutenberg ebook listing concerns its text edition. A film soundtrack, modern translation or recorded performance is a separate work with its own availability.",
  },
  {
    q: "What does LoudReader play?",
    a: "It generates speech from the ebook in your selected voice. It does not play a studio recording of the novel or a film soundtrack.",
  },
  {
    q: "Can I listen to the whole ebook free?",
    a: FREE_TIER.full,
  },
  {
    q: "How long is the reading?",
    a: "The catalogue’s approximately 5.5 hours is a text-length estimate. Actual duration depends on the voice, pauses and playback speed.",
  },
];
