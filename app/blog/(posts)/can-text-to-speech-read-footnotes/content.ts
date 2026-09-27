// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/ContentFilter.swift — extractAndRemoveFootnotes, preserveReadingTables, speechNormalized
//   LoudReader/ContinuousReaderView.swift — footnotesHTML and appendFootnotesIfNeeded
//   LoudReader/PDFImportPipeline.swift — local OCR and text extraction
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader read every footnote inline?",
    "a": "No. Common markers are removed from speech. Recognised notes can be opened beside their references and are collected for an end section, but support depends on the document’s markup."
  },
  {
    "q": "Are data tables deleted?",
    "a": "Structured data tables are kept for visual reference and excluded from linear narration. Some prose layout tables are converted to paragraphs. PDF extraction can behave differently."
  },
  {
    "q": "Will a PDF footnote behave like an EPUB footnote?",
    "a": "Not necessarily. A PDF may expose only positioned text or OCR output, without structured note relationships."
  },
  {
    "q": "Can scanned PDFs be recognised?",
    "a": "Yes. LoudReader includes local OCR, but recognition does not guarantee correct note links, equations or table structure."
  },
  {
    "q": "Should I rely on audio for a citation-heavy document?",
    "a": "Use it alongside the original. Check important notes, source references and tables visually rather than assuming the narration contains every relationship."
  }
];
