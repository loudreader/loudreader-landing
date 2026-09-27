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
// https://support.apple.com/guide/mac-help/mh27448/mac — checked2026-09-28: Read & Speak, Speak selection, Option-Esc default, controller and highlighting.
// https://support.apple.com/guide/app-store/fird2c7092da/mac — checked2026-09-28: compatible iPad apps on Apple Silicon, Designed for iPad label.
// Shipping Xcode project and no-sync audit; Book.swift and PlayerService.swift: local progress.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Is LoudReader a native Mac app?",
    "a": "No. It is an iPhone and iPad app whose iPad build can run on compatible Apple Silicon Macs. There is no separate native macOS target."
  },
  {
    "q": "Can I use an Intel Mac?",
    "a": "Not for the LoudReader app build. Intel Macs still have system speech and can run other compatible software; local text-to-speech is not exclusive to Apple Silicon."
  },
  {
    "q": "Will my phone resume the Mac’s position?",
    "a": "No. Each device has its own local library and progress. Sharing an EPUB through iCloud Drive or AirDrop transfers the source file, not LoudReader’s saved position."
  },
  {
    "q": "Does narration continue with the lid closed?",
    "a": "Sleep can stop playback. Closed-lid behaviour depends on the Mac’s setup, including external displays and power. Test your arrangement instead of relying on a blanket promise."
  }
];
