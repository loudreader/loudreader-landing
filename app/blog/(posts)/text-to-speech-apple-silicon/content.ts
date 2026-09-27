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
// https://developer.apple.com/documentation/coreml/mlcomputeunits — checked2026-09-28 compute-unit selection.
// Local loudkit site/src/content/docs/supported.md and guides/01-getting-started.md checked2026-09-28: five SDKs and distinct runtimes.
// Shipping1.12 Xcode target,DeviceCapability,VoiceRegistry and instrumentation audit.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Does local speech always run on the Neural Engine?",
    "a": "No. A speech pipeline may use the CPU, GPU or Neural Engine, depending on the model and runtime. Core ML offers compute-unit options; not every operation necessarily runs on the same processor."
  },
  {
    "q": "Will an M-series chip make every voice sound better?",
    "a": "No. Sound depends on the voice model and its handling of your language and material. Hardware affects performance, but its name is not a quality score."
  },
  {
    "q": "Does LoudReader have a separate native Mac build?",
    "a": "No. Compatible Apple Silicon Macs run its iPad app. Check App Store compatibility and available voices on your device."
  },
  {
    "q": "Is Loudkit only for Apple Silicon?",
    "a": "No. The developer framework has several backends and platform paths. Check its support matrix and SDK guide, then validate your target runtime."
  }
];
