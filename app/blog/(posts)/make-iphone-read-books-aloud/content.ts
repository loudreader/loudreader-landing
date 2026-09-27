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
// Shipping1.12 PDFImportPipeline.swift: on-device OCR; Info.plist and PlayerService.swift: background audio; SubscriptionManager.swift: entitlements.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "What is the quickest built-in route?",
    "a": "Enable Speak Screen in Accessibility settings, then try it on a page whose text the app exposes. Menu names vary by iOS version; Apple’s current guide calls the settings Read & Speak."
  },
  {
    "q": "Does every ebook import into LoudReader?",
    "a": "No. Import DRM-free EPUB or PDF files. A book locked to a store or borrowing app must be used through an authorised reading route there."
  },
  {
    "q": "Can it read a scanned PDF?",
    "a": "LoudReader includes on-device text recognition for scanned PDFs. Check the recognised words and reading order, especially in columns, tables and poor-quality scans."
  },
  {
    "q": "Do I need a subscription?",
    "a": "No. Book listening remains free with a limited English voice selection after the first eight cumulative listening hours. Premium unlocks additional eligible voices and features such as playback speed and the sleep timer."
  }
];
