// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/AddContentSheet.swift; ArticleImportPipeline.swift — article import
//   LoudReader/ContentFilter.swift — preserveReadingTables and speechNormalized
//   LoudReader/PDFImportPipeline.swift — text extraction
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://en.wikipedia.org/wiki/Help:Download_as_PDF
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need a Wikipedia-specific integration?",
    "a": "No. LoudReader can try the ordinary article URL importer, or you can import a readable PDF. Check the saved text for completeness."
  },
  {
    "q": "Will citation numbers always be spoken?",
    "a": "Common number markers are filtered from speech, but source formatting varies. Use the original reference links when checking evidence."
  },
  {
    "q": "Are Wikipedia tables read accurately?",
    "a": "Do not assume so. Structured data tables are kept for visual reference rather than linear narration, while PDF extraction can lose row and column relationships."
  },
  {
    "q": "Does the saved article stay up to date?",
    "a": "No. It is a snapshot. Keep the source URL and access date, or a permanent revision link when version precision matters."
  },
  {
    "q": "Does listening prove I have understood the topic?",
    "a": "No. Pause, explain the point in your own words, and check the source and its references for any unresolved questions."
  }
];
