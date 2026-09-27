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
// BookImportService.swift:338–420 remote links; DocumentScanImport.swift local camera OCR.
// calibre official formats/DRM FAQ checked 2026-09-28:
// https://manual.calibre-ebook.com/faq.html#what-formats-does-calibre-support-conversion-to-from
// No claim all Kindle purchases are protected, all 70,000+ catalog titles are bundled,
// or every supported extension imports instantly/perfectly. Future date preserved.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "What files does LoudReader import directly?",
    "a": "DRM-free EPUB and PDF files. Web article links and camera scanning are separate workflows; they do not add TXT, DOCX, MOBI or arbitrary image files to the supported file-import list."
  },
  {
    "q": "Can LoudReader read a scanned PDF?",
    "a": "Yes, it can use local OCR for image-based PDFs. Recognition is attempted when at least half the pages lack text or the total extracted text is very small. Up to 300 image pages are processed per import, and partial results need checking."
  },
  {
    "q": "How do I use a TXT or Markdown file?",
    "a": "Export a PDF from a text editor or Markdown renderer, then import the PDF. For Markdown, render it first so the listening copy contains the intended text instead of raw formatting syntax."
  },
  {
    "q": "Can I import a Word document?",
    "a": "Not as a DOCX file. Export a PDF copy from Word, check markup and page layout, then import the PDF. It will not automatically update when the Word original changes."
  },
  {
    "q": "Can I listen to a MOBI file?",
    "a": "A DRM-free MOBI can be converted to EPUB with a compatible tool such as calibre. Check the resulting book before import. LoudReader does not remove DRM or gain access to another app’s protected library."
  },
  {
    "q": "Is EPUB always better than PDF?",
    "a": "No. A well-structured EPUB is often a useful choice for prose with chapters. A text PDF can be appropriate for documents where the original page layout matters. Check the actual file: the extension alone does not guarantee good reading order."
  }
];
