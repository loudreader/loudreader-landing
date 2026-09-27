// FACT PROVENANCE — checked 2026-09-28.
//   - https://www.gutenberg.org/ebooks/2680
//   - https://www.gutenberg.org/cache/epub/2680/pg2680-images.html
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
  { q: "Is Gutenberg #2680 the George Long translation?", a: "No. The edition’s notes identify Casaubon’s translation. Check the translator credit when comparing it with another English edition." },
  { q: "Does a free Meditations ebook include modern translations?", a: "Not automatically. Each translation is a separate edition. Check the translator and access rights for the one you want." },
  { q: "Why does the audio begin with an introduction?", a: "Gutenberg #2680 includes introductory and reference material as well as twelve books of reflections. Use its contents if you want to start with Book I." },
  { q: "Can I listen a few sections at a time for free?", a: FREE_TIER.full },
  { q: "Should I memorise every reflection?", a: "There is no required listening method. Try a short section, pause and check your understanding against the text. Keep a reference for passages you want to revisit." },
];
