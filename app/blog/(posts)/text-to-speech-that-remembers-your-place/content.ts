// FACT PROVENANCE — editorial review 2026-09-28.
// Shipping app: release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
// the LoudReader app source, read through git show, not local HEAD.
// Canonical audit: docs/product-facts-2026-09-28.md. Source review,
// not a new runtime test. Local speech does not imply no diagnostics:
// LoudReaderApp.swift initialises Sentry and Analytics.swift TelemetryDeck;
// SettingsSheet.showsUsageStatisticsChoice is false in this shipping release.
// SubscriptionAccess/SubscriptionManager verify 8 cumulative listening hours,
// then Stella or Rio plus Bella on capable devices; whole-book listening stays
// free. Notes/highlights are not Premium-only. Studio availability varies.
// Xcode target is iOS/iPadOS; on Apple Silicon Macs it is the iPad build.
// No automatic library/progress sync; iCloud file import is not app sync.
// Shipping1.12 PlayerService.swift headlessResumePlayback, resolve saved sentence anchor and stopAndClose; Book.swift lastLocation,lastSentenceId,lastSentenceSegmentationVersion.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Do I have to set a bookmark before closing a book?",
    "a": "No. LoudReader automatically records progress for books in its local library. Pause before a planned break and check the position when you reopen the same book."
  },
  {
    "q": "Does it save a sentence or only a chapter?",
    "a": "The playback path stores a sentence anchor and prefers it when compatible. It can fall back to a saved reading location, so exact sentence resumption is not an unconditional guarantee."
  },
  {
    "q": "What happens if the app crashes?",
    "a": "Progress is saved during normal use, but an abrupt interruption can happen before the latest state is persisted. Check the resumed passage; do not rely on a promise of zero lost progress."
  },
  {
    "q": "Does progress sync between devices?",
    "a": "No. Each device keeps its own local progress. Sharing or importing the source book does not transfer the saved listening position."
  }
];
