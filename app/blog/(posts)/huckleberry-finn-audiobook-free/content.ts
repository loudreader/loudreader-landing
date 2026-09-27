// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/76
//   - https://librivox.org/the-adventures-of-huckleberry-finn-by-mark-twain/
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry adventures-of-huckleberry-finn,
//     ebook 76. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/adventures-of-huckleberry-finn: catalogue/sample route, not a full audiobook.
//   - https://www.gutenberg.org/cache/epub/76/pg76-images.html (text/contents checked).
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
    q: "Is there a free human audiobook of Huckleberry Finn?",
    a: "Yes. LibriVox lists volunteer recordings of the book. Check the readers, edition and sample on the recording’s page before downloading.",
  },
  {
    q: "Does LoudReader perform the dialect accurately?",
    a: "Text-to-speech pronunciation of Twain’s unusual spellings can vary. Try dialogue passages with the text visible; we do not promise an accurate regional performance.",
  },
  {
    q: "Is the original suitable for children without preparation?",
    a: "The original includes racist language, slavery and violence. Review the edition and recording before shared listening; an unadapted text is not automatically softened for a younger audience.",
  },
  {
    q: "How long is the reading?",
    a: "The catalogue’s approximately 11.5 hours is a word-count estimate. A chosen voice, recording and playback speed may give a different runtime.",
  },
  {
    q: "Is unlimited listening free?",
    a: FREE_TIER.full,
  },
];
