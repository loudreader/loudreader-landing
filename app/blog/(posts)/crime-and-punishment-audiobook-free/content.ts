// FACT PROVENANCE — checked 2026-09-28.
//   - https://www.gutenberg.org/ebooks/2554
//   - https://www.gutenberg.org/cache/epub/2554/pg2554-images.html
//   - https://librivox.org/crime-and-punishment-by-fyodor-dostoyevsky/
//   - https://www.gutenberg.org/policy/permission.html
//   - data/gutenberg-catalog.json and data/audio-samples.ts: catalogue ID and preview mapping.
//   - components/money/site.ts: FREE_TIER, updated from shipping release_v1.12.
//   - the LoudReader app source at release_v1.12
//     (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28:
//     LoudReader/Subscription/SubscriptionAccess.swift (free listening),
//     LoudReader/Subscription/PaywallReason.swift (speed/timer gates),
//     ProjectGutenbergService (catalogue downloads), BookImportService (EPUB),
//     iOS Xcode target (iPad compatibility on Apple Silicon Mac).
//     No automatic library/progress sync is implemented; offline playback requires local files.
// Practical listening suggestions are editorial advice, not comprehension/test claims.
// No universal copyright clearance, guaranteed pronunciation, cross-device sync, or zero-telemetry claim.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Which translation is in the linked free ebook?", a: "Project Gutenberg #2554 credits Constance Garnett. LoudReader’s catalogue entry links to that edition." },
  { q: "Is the free recording a human voice?", a: "The linked LibriVox edition is read by volunteers. LoudReader’s ebook reading uses a synthetic voice. They are separate listening options." },
  { q: "Can I use another English translation?", a: "You can import a supported DRM-free ebook you are entitled to use. Owning a print edition does not automatically give you its digital file, and different translations may have different rights." },
  { q: "Is unlimited listening free?", a: FREE_TIER.full },
  { q: "Why does the audio not match my printed sentence?", a: "Check the translator and whether either edition is abridged. Matching only the title is not enough for word-for-word reading alongside audio." },
];
