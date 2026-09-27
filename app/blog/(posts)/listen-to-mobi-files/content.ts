// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/BookImportService.swift — EPUB/PDF detection
//   LoudReader.xcodeproj/project.pbxproj — iPad compatibility on Mac
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://manual.calibre-ebook.com/faq.html#what-formats-does-calibre-support-conversion-to-from
// Official source checked 2026-09-28: https://kdp.amazon.com/en_US/help/topic/GDDXGH9VR22ACM8U
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can LoudReader open a MOBI file?",
    "a": "Not directly. Convert a supported DRM-free MOBI to EPUB first, or obtain an EPUB from the original source."
  },
  {
    "q": "Does changing the extension to .epub work?",
    "a": "No. Renaming a file does not change its internal format. Use an actual converter on a supported unprotected file."
  },
  {
    "q": "Why is the converted book reading strangely?",
    "a": "Check the EPUB before import for broken text, missing paragraph breaks or repeated contents. Separate source-conversion problems from narration problems."
  },
  {
    "q": "Can I listen offline afterwards?",
    "a": "Yes, local narration can work after the supported book and required voice resources are ready. Test the particular book and voice without a connection first."
  }
];
