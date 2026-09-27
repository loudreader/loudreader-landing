// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/17157
//   - https://www.gutenberg.org/ebooks/829
//   - https://www.gutenberg.org/cache/epub/17157/pg17157-images.html
//   - https://www.gutenberg.org/cache/epub/829/pg829-images.html
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry gullivers-travels,
//     ebook 17157. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/gullivers-travels: catalogue/sample route, not a full audiobook.
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
    q: "Is the LoudReader catalogue edition unabridged?",
    a: "No. The current entry uses Gutenberg ebook 17157, an abridged school edition edited by Thomas M. Balliet, containing the Lilliput and Brobdingnag voyages.",
  },
  {
    q: "Where can I get the four-voyage text?",
    a: "Gutenberg ebook 829 contains all four parts. Download its EPUB and import it into a compatible reading app. Check the contents before listening.",
  },
  {
    q: "Why is the catalogue estimate only about six hours?",
    a: "That estimate is attached to the shortened catalogue text. It is based on text length and does not describe a complete four-voyage recording.",
  },
  {
    q: "Can I listen to an imported edition free?",
    a: FREE_TIER.full,
  },
  {
    q: "Is this a human audiobook?",
    a: "No. LoudReader generates speech from the ebook you select. A separately recorded audiobook may use a different edition, so compare its abridgment and contents details.",
  },
];
