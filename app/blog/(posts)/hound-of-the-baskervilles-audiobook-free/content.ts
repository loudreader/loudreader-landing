// FACT PROVENANCE — checked 2026-09-28.
//   - https://www.gutenberg.org/ebooks/2852
//   - https://www.gutenberg.org/cache/epub/2852/pg2852-images.html
//   - https://librivox.org/the-hound-of-the-baskervilles-by-arthur-conan-doyle/
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
  { q: "Is there a free human recording?", a: "Yes. The linked LibriVox edition is read by Laurie Anne Walden. Its catalogue page provides samples and downloads; check its territorial notice." },
  { q: "How long is the audiobook?", a: "Laurie Anne Walden’s linked LibriVox recording is listed at 5:52:59. Other recordings and generated narration have different runtimes." },
  { q: "Do I need to read other Sherlock Holmes stories first?", a: "You can start with this case. The opening establishes Holmes, Watson and the mystery; a complete-series chronology is not required to follow it." },
  { q: "Is LoudReader free for the whole novel?", a: FREE_TIER.full },
  { q: "Will my place automatically follow me to another device?", a: "Do not rely on automatic cross-device progress sync. If you change devices or editions, note your chapter and passage so you can resume in the right place." },
];
