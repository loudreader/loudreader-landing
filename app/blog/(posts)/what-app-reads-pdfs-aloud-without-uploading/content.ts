// FACT PROVENANCE — revised 2026-09-28, not a runtime test.
// Shipping app: the LoudReader app source, release_v1.12,
// peeled commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0 (git show, not dirty HEAD).
// BookImportService.swift:319–334,972–979 accepts EPUB/PDF file imports;
// remote article links have a separate download/import path.
// PDFImportPipeline.swift:88–96,153–218 uses on-device Apple Vision OCR
// when at least half the pages lack text or total extracted text is very small;
// at most 300 OCR pages/import, with partial/unreadable-result notices.
// LoudReaderApp.swift and Analytics.swift initialise Sentry diagnostics and
// TelemetryDeck usage analytics; the latter defaults ON. Release SettingsSheet.swift
// hides the usage-statistics switch; do not promise a visible opt-out.
// Local narration is not a claim of zero network traffic.
// Platform/account/free-tier facts: docs/product-facts-2026-09-28.md,
// audited against this shipping tag and official Apple lookup on 2026-09-28.
// Privacy-focused source detail: LoudReaderApp.swift:62,244 initialises Sentry/Analytics;
// Analytics.swift:52,69–70 default-on opt-out design; no independent traffic audit.
// No cloud-retention generalisation, compliance certification, universal backup exclusion,
// or inference that airplane mode proves privacy. Future publication date preserved.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader upload my PDF to generate narration?",
    "a": "No. PDF extraction, supported scanned-page recognition and speech generation run on-device. The document is not sent to a speech server for narration."
  },
  {
    "q": "Does LoudReader collect no data at all?",
    "a": "That would be inaccurate. The app uses Sentry crash/performance diagnostics and TelemetryDeck usage analytics. Usage analytics is enabled by default; the current release does not expose its usage-statistics switch."
  },
  {
    "q": "Does airplane mode prove that an app is private?",
    "a": "No. It can show that a particular book and voice work offline. It does not establish what the app sends while connected or what other apps and storage services have already done with the file."
  },
  {
    "q": "Do scanned PDFs require a cloud OCR service?",
    "a": "Not in LoudReader. It includes local text recognition for image-based PDFs, with up to 300 OCR pages per import and notices for incomplete results. Recognition quality and layout still need checking."
  },
  {
    "q": "Do I need a LoudReader account?",
    "a": "No LoudReader account is required to import and listen. That is separate from your Apple account for App Store services and from the app’s diagnostics and analytics."
  },
  {
    "q": "Is my library guaranteed never to appear in a backup or synced folder?",
    "a": "No such guarantee follows from local narration. LoudReader has no automatic library or reading-position sync, but the source file’s storage provider and your device backup settings are separate. Check them for sensitive documents."
  }
];
