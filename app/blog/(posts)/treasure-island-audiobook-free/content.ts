// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/120
//   - https://librivox.org/treasure-island-dramatic-reading-by-robert-louis-stevenson/
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry treasure-island,
//     ebook 120. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/treasure-island: catalogue/sample route, not a full audiobook.
//   - https://www.gutenberg.org/cache/epub/120/pg120-images.html (text/contents checked).
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
    q: "Is there a free human Treasure Island audiobook?",
    a: "Yes. LibriVox’s version 3 is a volunteer dramatic reading with downloadable sections. Check the cast and preview a section to decide whether that format suits you.",
  },
  {
    q: "Does LoudReader use that recording?",
    a: "No. LoudReader generates speech from its ebook text using the voice you select. The LibriVox performance is a separate audio edition.",
  },
  {
    q: "Does Jim Hawkins narrate every chapter?",
    a: "No. Dr Livesey narrates part of the novel. Follow the chapter heading when the viewpoint changes, especially if the reading uses one voice throughout.",
  },
  {
    q: "How long is the audiobook?",
    a: "The catalogue’s approximately 7.5 hours is an estimate based on text length, not a measured duration for every recording or synthetic voice.",
  },
  {
    q: "Can I finish the book on the free tier?",
    a: FREE_TIER.full,
  },
];
