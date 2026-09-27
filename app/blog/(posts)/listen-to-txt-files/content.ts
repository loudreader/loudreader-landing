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
// Official instructions checked 2026-09-28:
// https://support.apple.com/guide/textedit/create-open-and-convert-documents-txtee6663a0e/mac
// https://support.apple.com/en-ca/guide/pages-iphone/tan78c0ddfdb/ios
// TextEdit PDF export and Pages export are verified; no claim of native TXT import,
// automatic Notes TXT opening, perfect layout preservation, or unlimited practical file size.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader open .txt files directly?",
    "a": "No. Its file importer accepts EPUB and PDF. Make a PDF copy in a text editor or word processor, then import that copy into LoudReader."
  },
  {
    "q": "Will converting a text file to PDF change the words?",
    "a": "The export should retain your text, but it introduces page layout and wrapping. Check accented characters, long lines and a few paragraphs in the PDF rather than assuming every file converts perfectly."
  },
  {
    "q": "Can I make the PDF entirely on my iPhone?",
    "a": "Yes. Copy the text into a blank Pages word-processing document, then export a PDF using the sharing/export controls. Save the PDF to Files or share it to LoudReader."
  },
  {
    "q": "Can this help me proofread?",
    "a": "A listening pass can draw attention to repeated words and awkward phrasing. Keep the editable source open, record corrections there and export a new copy when needed. Continue checking spelling, references and layout visually."
  },
  {
    "q": "What about a very large log or transcript?",
    "a": "Start with a relevant section. Repeated timestamps and machine-generated identifiers are often difficult to follow aloud. Split long documents at useful boundaries if navigation or conversion becomes cumbersome."
  },
  {
    "q": "Is this a private conversion workflow?",
    "a": "A local editor can make a PDF without an online converter, but its save location and sync settings still matter. LoudReader generates speech locally; it also uses diagnostics and usage analytics, with usage analytics enabled by default."
  }
];
