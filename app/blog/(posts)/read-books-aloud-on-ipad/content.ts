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
// Shipping1.12 DeviceCapability.swift and VoiceRegistry.swift: hardware-gated studio voices.
// Shipping PDFImportPipeline.swift: OCR threshold, limit300 and degraded/partial result path.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Can I follow the text while listening?",
    "a": "Yes. LoudReader highlights the current spoken words. Choose a comfortable text size and pace; following along is optional, and it does not guarantee better learning outcomes."
  },
  {
    "q": "Does every iPad have all 23 studio narrators?",
    "a": "No. Voice availability depends on the device and release. Check the voice picker on your iPad before relying on a particular studio narrator."
  },
  {
    "q": "Can it read scanned PDFs?",
    "a": "It includes on-device OCR, with a 300-page OCR limit per import and possible partial results. Check accuracy and order against the original, especially with complex layouts."
  },
  {
    "q": "Does the iPad library sync to my phone?",
    "a": "No. LoudReader does not automatically sync imported books or reading progress. A shared source file can be imported separately, but each device keeps its own progress."
  }
];
