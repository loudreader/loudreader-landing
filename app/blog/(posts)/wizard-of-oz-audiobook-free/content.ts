// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/55
//   - https://www.gutenberg.org/ebooks/43936
//   - https://librivox.org/wonderful-wizard-of-oz-version-9-by-l-frank-baum/
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry the-wonderful-wizard-of-oz,
//     ebook 55. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/the-wonderful-wizard-of-oz: catalogue/sample route, not a full audiobook.
// LibriVox version 9 metadata/download listing confirmed in official indexed page;
// direct fetch was blocked. No audio was played or quality ranked.
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
    q: "Which book does the catalogue use?",
    a: "The current entry links Gutenberg ebook 55, The Wonderful Wizard of Oz by L. Frank Baum. Gutenberg also points to ebook 43936 as an improved edition.",
  },
  {
    q: "Is the improved edition available for read-along use?",
    a: "Gutenberg ebook 43936 credits W. W. Denslow as illustrator and offers EPUB downloads. Inspect the file, then import it if you want that edition rather than the current catalogue entry.",
  },
  {
    q: "Is there a free human audiobook?",
    a: "Yes. LibriVox’s version 9 is a volunteer recording with downloadable sections. Preview the voice on its catalogue page before choosing it.",
  },
  {
    q: "Does this include the film songs?",
    a: "No. A reading of Baum’s novel is not a film soundtrack or musical recording.",
  },
  {
    q: "Can I listen to the ebook without subscribing?",
    a: FREE_TIER.full,
  },
];
