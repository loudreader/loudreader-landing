// FACT PROVENANCE — checked 2026-09-28.
//   - https://www.gutenberg.org/ebooks/84
//   - https://www.gutenberg.org/ebooks/41445
//   - https://www.gutenberg.org/ebooks/42324
//   - https://librivox.org/frankenstein-edition-1831-by-mary-shelley-wollstonecraft/
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
  { q: "Is the free Gutenberg copy definitely the 1818 text?", a: "Do not assume that from the title alone. Gutenberg #84 links separately to #41445, identified as the 1818 edition, and #42324, identified as the 1831 edition." },
  { q: "Can I listen to the 1831 edition with a human narrator?", a: "Yes. The linked LibriVox page explicitly identifies an 1831-edition recording. Check its sample and territorial notice before downloading." },
  { q: "Why does the book begin with an explorer’s letters?", a: "Walton’s correspondence frames Victor’s story. The creature later gives an account within that story, so the speaker changes as the novel develops." },
  { q: "Can I finish it on LoudReader’s free tier?", a: FREE_TIER.full },
  { q: "Does offline listening require preparation?", a: "Yes. Import or download the ebook and finish any required voice download first. Test a passage before leaving your connection." },
];
