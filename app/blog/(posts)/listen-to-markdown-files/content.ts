// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/BookImportService.swift — EPUB/PDF input
//   LoudReader/ContentFilter.swift; PDFImportPipeline.swift — structure handling
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://pandoc.org/MANUAL.html
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader import .md files directly?",
    "a": "No. Render them to EPUB or PDF first. Renaming the file is not a conversion."
  },
  {
    "q": "Will Markdown punctuation be read aloud?",
    "a": "A proper rendering turns Markdown syntax into document structure. Printing raw source can leave punctuation in the text; inspect the export before importing."
  },
  {
    "q": "Does Pandoc PDF output need anything else installed?",
    "a": "Its default PDF route needs a LaTeX engine. For this workflow, EPUB output is another supported choice without that PDF-rendering step."
  },
  {
    "q": "Can I check code by listening?",
    "a": "Listening may help review surrounding explanations, but it does not preserve every detail of syntax or indentation. Read and test the code separately."
  },
  {
    "q": "Will changes to my notes update the imported copy?",
    "a": "No. Re-export and reimport when you want to hear a revised version."
  }
];
