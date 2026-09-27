// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/345
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry dracula,
//     ebook 345. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/dracula: catalogue/sample route, not a full audiobook.
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
    q: "Where is the free Dracula text?",
    a: "Project Gutenberg ebook 345 provides the English novel and marks it public domain in the USA. It is an ebook, not a studio audiobook; a reading app can generate speech from it.",
  },
  {
    q: "Does LoudReader use a different voice for each diary?",
    a: "No. It reads the selected text in the voice you choose. Follow the document headings to identify the speaker rather than expecting an automatic cast change.",
  },
  {
    q: "How long does Dracula take to listen to?",
    a: "The catalogue’s roughly 16.5 hours is a text-length estimate, not a measured runtime. Voice, pauses and speed affect the duration.",
  },
  {
    q: "Can I finish it without a subscription?",
    a: FREE_TIER.full,
  },
  {
    q: "Will it play without a connection?",
    a: "Download the book and voice files first. Local speech playback then works offline; catalogue browsing and downloading require a connection.",
  },
];
