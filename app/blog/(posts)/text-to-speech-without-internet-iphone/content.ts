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
// https://support.apple.com/guide/iphone/iph96b214f0/ios — checked2026-09-28: current Read & Speak menu, Speak Screen gesture, voice and rate controls; older releases call it Spoken Content.
// Shipping1.12 PDFImportPipeline, BookImportService, local speech paths and app instrumentation.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "What must be stored on the phone?",
    "a": "The text and the resources needed by the selected voice. Make sure cloud files have downloaded, then test a passage you have not already played."
  },
  {
    "q": "Do I need to choose a special offline mode in LoudReader?",
    "a": "Normal book narration runs locally. Prepare the book and voice first; downloads and purchase management are separate connected tasks."
  },
  {
    "q": "Why does one book fail while another works?",
    "a": "The file may be unavailable locally, protected, malformed or difficult to recognise. Try a simple DRM-free EPUB to separate document problems from voice problems."
  },
  {
    "q": "Does local speech mean the app sends no data?",
    "a": "No. LoudReader generates speech locally but also has diagnostics and usage analytics. In version 1.12 these are enabled by default; offline playback is not a complete privacy test."
  }
];
