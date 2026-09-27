// FACT PROVENANCE — checked 2026-09-28.
//   - https://www.gutenberg.org/ebooks/98
//   - https://www.gutenberg.org/cache/epub/98/pg98-images.html
//   - https://librivox.org/a-tale-of-two-cities-by-charles-dickens-2/
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
  { q: "Is there a free human-narrated A Tale of Two Cities?", a: "Yes. The linked LibriVox version 2 provides a recorded reading. Check its reader list, sample and territory notice before downloading." },
  { q: "Which ebook does LoudReader’s catalogue use?", a: "Its A Tale of Two Cities entry points to Project Gutenberg ebook #98. Modern introductions, notes and adaptations may be different editions." },
  { q: "Do all free versions sound the same?", a: "No. Recordings have different readers, and text-to-speech depends on the selected voice. Compare samples rather than treating the title as one audiobook." },
  { q: "Can I finish the book without paying?", a: FREE_TIER.full },
  { q: "Can I listen without an internet connection?", a: "Download the book and any required voice first. LoudReader can generate speech locally from those downloaded files; browsing the catalogue and downloading them require a connection." },
];
