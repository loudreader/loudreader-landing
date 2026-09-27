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
// https://support.apple.com/guide/app-store/fird2c7092da/mac — checked2026-09-28: compatible iPad apps on Apple Silicon, Designed for iPad label.
// Shipping1.12 Xcode project; SubscriptionManager.swift restore flow; Book.swift local progress; ClonedVoiceStore.swift backup exclusion.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Are there separate native Mac and iPhone builds?",
    "a": "No. LoudReader is an iPhone/iPad app. On compatible Apple Silicon Macs it runs as an iPad app rather than a separate native macOS build."
  },
  {
    "q": "Does iCloud Drive sync my reading position?",
    "a": "No. It can make a source file available for import, but LoudReader keeps its own library and progress locally on each device."
  },
  {
    "q": "Will restoring Premium move my books?",
    "a": "No. Restoring an eligible purchase restores access, not local books, reading progress or cloned voices."
  },
  {
    "q": "Can I keep the same custom narrator on both devices?",
    "a": "There is no automatic cloned-voice sync. Use the supported Voice Studio workflow on each device, with recordings you have permission to use."
  }
];
