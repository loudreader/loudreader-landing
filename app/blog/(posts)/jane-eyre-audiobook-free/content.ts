// FACT PROVENANCE — checked 2026-09-28.
//   - https://www.gutenberg.org/ebooks/1260
//   - https://www.gutenberg.org/cache/epub/1260/pg1260-images.html
//   - https://librivox.org/jane-eyre-by-charlotte-bront/
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
  { q: "Where can I find a free human Jane Eyre recording?", a: "The linked LibriVox edition supplies a volunteer-recorded reading. Check the reader list and samples on that page, along with the territory notice." },
  { q: "Is Jane Eyre: An Autobiography a different book?", a: "That is the full title used by the linked Gutenberg edition of Charlotte Brontë’s novel. Jane is its fictional first-person narrator." },
  { q: "Is the LoudReader sample a human narrator?", a: "No. It is a sample of synthetic narration. Use it to assess the sound, then try a longer passage if you want to judge it for extended listening." },
  { q: "Can I listen for free beyond the first eight hours?", a: FREE_TIER.full },
  { q: "Can I follow a printed copy while listening?", a: "Yes, but match the edition and chapter. Page numbers and editorial material differ; check quotations against the edition you need for study." },
];
