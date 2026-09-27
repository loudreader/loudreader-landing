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
// DocumentScanImport.swift:14,49–69,151: supported-device camera guard and local Vision recognition.
// Official OCRmyPDF cookbook, checked 2026-09-28:
// https://ocrmypdf.readthedocs.io/en/latest/cookbook.html
// --skip-text is supported as a legacy alias of --mode skip; distinct output file.
// No accuracy percentage, universal source-quality claim, or runtime validation claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can LoudReader read image-only scanned PDFs?",
    "a": "Yes. Version 1.12 includes on-device OCR for image-based PDFs. Recognition is attempted when at least half the pages lack text or the total extracted text is very small. Results depend on the scan, and the app reports incomplete imports."
  },
  {
    "q": "Do I still need a selectable text layer?",
    "a": "Not for every scan: LoudReader can recognise image pages itself. A clean text layer is still useful because it avoids OCR and can be checked before import. Selectable text can contain errors, so compare a few passages with the page image."
  },
  {
    "q": "Is there a limit on scanned PDF length?",
    "a": "The current importer attempts OCR on at most 300 image pages per import. Existing text pages do not use that recognition allowance. If a scan imports partially, split a copy into sections or prepare a searchable PDF with another OCR tool."
  },
  {
    "q": "Why are some pages missing from the narration?",
    "a": "Recognition may fail on unclear pages, reach the 300-page OCR limit, or not trigger for a few image-only inserts in an otherwise searchable PDF. Check the import notice and compare the imported book with the original scan."
  },
  {
    "q": "Can I scan a paper page inside LoudReader?",
    "a": "Camera-based document scanning is available on supported devices and recognises text locally. For a long book, check the time involved and the quality of the first few pages before scanning the rest."
  },
  {
    "q": "Does OCR upload the scanned book?",
    "a": "LoudReader performs PDF text recognition and speech generation on-device; it does not upload the book to a speech server for narration. The app separately uses crash/performance diagnostics and usage analytics, with analytics enabled by default."
  }
];
