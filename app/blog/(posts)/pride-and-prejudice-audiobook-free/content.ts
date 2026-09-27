// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/1342
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry pride-and-prejudice,
//     ebook 1342. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/pride-and-prejudice: catalogue/sample route, not a full audiobook.
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
    q: "Where is the free Pride and Prejudice text?",
    a: "Project Gutenberg ebook 1342 supplies the English novel and lists it as public domain in the USA. It can be downloaded as an EPUB for a compatible reading app.",
  },
  {
    q: "Is LoudReader’s version a recorded performance?",
    a: "No. It generates speech from the ebook on your device. A separate human audiobook has a fixed reader and performance; sample each option before choosing.",
  },
  {
    q: "Will the chapter and page references match my paperback?",
    a: "Use chapter numbers and opening words to compare passages. Ebook pagination and editorial notes can differ, so use the assigned edition for page references.",
  },
  {
    q: "Can I finish the novel free?",
    a: FREE_TIER.full,
  },
  {
    q: "Is the 14.5-hour estimate exact?",
    a: "No. It is based on text length. Voice, pauses and playback speed affect how long the reading takes.",
  },
];
