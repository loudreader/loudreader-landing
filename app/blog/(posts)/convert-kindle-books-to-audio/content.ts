// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/BookImportService.swift — EPUB/PDF detection and protected-book error path
//   LoudReader/Subscription/SubscriptionAccess.swift — unrestricted book listening
//   LoudReader.xcodeproj/project.pbxproj — iOS target, iPad compatibility on Mac
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://kdp.amazon.com/en_US/help/topic/GDDXGH9VR22ACM8U
// Official source checked 2026-09-28: https://manual.calibre-ebook.com/faq.html#what-formats-does-calibre-support-conversion-to-from
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can all Kindle purchases be downloaded as EPUB?",
    "a": "No. Download availability depends on the title and publisher’s settings. Check the options for your purchased copy; a Kindle download inside the Kindle app is not necessarily a portable EPUB."
  },
  {
    "q": "Does LoudReader remove Kindle DRM?",
    "a": "No. It imports supported DRM-free files and has no connection to your Kindle library or Amazon account."
  },
  {
    "q": "Do I need to convert an EPUB before importing it?",
    "a": "No. Use the EPUB directly. If you only have an older DRM-free MOBI file, conversion is a separate step."
  },
  {
    "q": "Does this make an MP3 audiobook?",
    "a": "This guide describes listening inside LoudReader. It does not promise an exported audiobook file or the performance of a human narrator."
  }
];
