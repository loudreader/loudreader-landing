// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/BookImportService.swift — EPUB/PDF import
//   LoudReader/ContentFilter.swift; PDFImportPipeline.swift — structure-specific extraction
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry
//   LoudReader.xcodeproj/project.pbxproj — iPad app on Mac
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://support.google.com/docs/answer/16386234?hl=en
// Official source checked 2026-09-28: https://support.google.com/docs/answer/49114?hl=en
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does Google Docs have built-in audio?",
    "a": "Yes. Eligible Google Workspace or Google AI plans offer Gemini audio features, including listening to a document tab. Consult Google’s help page for availability."
  },
  {
    "q": "Will edits in Google Docs update my LoudReader copy?",
    "a": "No. An imported EPUB or PDF is a snapshot. Export again after changes you want to hear."
  },
  {
    "q": "Can I export a document that is view-only?",
    "a": "The owner’s settings may restrict downloads. Use the sharing options you have been given instead of publishing a private document to obtain a link."
  },
  {
    "q": "Are comments and suggestions read too?",
    "a": "Do not assume they are included in an export. Review collaboration comments and suggested changes in Google Docs itself."
  },
  {
    "q": "Can I proofread from an audio summary?",
    "a": "A summary omits and rewrites content, so it is not a substitute for reviewing the words in your draft. Choose the full-text route for a proofreading pass."
  }
];
