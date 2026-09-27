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
// Shipping1.12 local TTS, ProjectGutenbergService, StoreKit and instrumentation audit.
// https://support.apple.com/en-us/108785 — Apple airplane mode guidance: Wi-Fi/Bluetooth can be used while enabled.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Can LoudReader generate speech in airplane mode?",
    "a": "Yes, from an imported book with a ready voice on a supported device. Open the app and test the particular book and narrator offline before travelling."
  },
  {
    "q": "Do cloud voices always stop on a flight?",
    "a": "Not if the app has already generated and downloaded the audio. Fresh cloud generation needs connectivity, but a complete local recording can play offline."
  },
  {
    "q": "Does airplane mode prove that an app is private?",
    "a": "No. It tests behaviour without a connection. An app can collect or queue diagnostics and send them later, and Wi-Fi can be enabled while airplane mode is on."
  },
  {
    "q": "Can I import another book while offline?",
    "a": "You can try a supported EPUB or PDF already stored locally. A cloud-only file, catalogue download or web article still needs a connection."
  }
];
