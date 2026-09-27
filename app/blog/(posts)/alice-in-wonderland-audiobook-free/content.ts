// FACT PROVENANCE — editorial review 2026-09-28.
// Read the previous page.tsx, content.ts and meta.json in full before revision.
// Primary edition/catalog sources checked 2026-09-28:
//   - https://www.gutenberg.org/ebooks/11
//   - https://librivox.org/alices-adventures-in-wonderland-by-lewis-carroll-5
//   - https://www.gutenberg.org/ebooks/12
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json: current catalogue entry alices-adventures-in-wonderland,
//     ebook 11. Listening hours, where used, are catalogue estimates,
//     not measured audio runtimes. No comparative voice test was performed.
//   - data/audio-samples.ts confirms the shipped opening sample lookup.
//   - /listen/alices-adventures-in-wonderland: catalogue/sample route, not a full audiobook.
//   - https://www.gutenberg.org/cache/epub/11/pg11-images.html (text/contents checked).
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
    q: "Is there a free Alice in Wonderland audiobook?",
    a: "Yes. LibriVox has volunteer recordings, and a text-to-speech app can read the English ebook. Project Gutenberg lists ebook 11 as public domain in the USA; availability elsewhere needs a local check.",
  },
  {
    q: "Does the ebook include Through the Looking-Glass?",
    a: "The linked Gutenberg entry is Alice’s Adventures in Wonderland. Through the Looking-Glass is a separate book, so check collection contents rather than relying on a shortened cover title.",
  },
  {
    q: "Does LoudReader use a human narrator?",
    a: "LoudReader generates speech from the ebook on your device. It is not the LibriVox recording. Preview dialogue and verse to judge whether its delivery suits this book.",
  },
  {
    q: "What stays free in LoudReader?",
    a: FREE_TIER.full,
  },
  {
    q: "Can I listen offline?",
    a: "Yes, after downloading the book and required voice files. Download them while connected and check playback before a journey. The full reading takes place in the app, not in the website’s short sample.",
  },
];
