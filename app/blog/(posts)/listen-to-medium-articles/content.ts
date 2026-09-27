// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/AddContentSheet.swift; LinkImportSheet.swift — Paste a Link
//   LoudReader/BookImportService.swift; ArticleImportPipeline.swift — HTML extraction and quality failures
//   LoudReader/Subscription/SubscriptionAccess.swift — article allowance
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry exists
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://help.medium.com/hc/en-us/articles/4635049283351-About-audio
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does Medium have text-to-speech?",
    "a": "Yes. Medium documents English text-to-speech for active members, with a Listen button in the browser and app. Check its audio help page for availability."
  },
  {
    "q": "Does LoudReader unlock member-only stories?",
    "a": "No. Its link importer is separate from your signed-in browser. Use content you can access and verify that the imported copy contains the complete article."
  },
  {
    "q": "Must I export every article as a PDF?",
    "a": "No. Try Paste a Link or the share extension first. A PDF is a fallback when you can save a complete readable copy from your browser."
  },
  {
    "q": "Will saved stories update automatically?",
    "a": "No. Treat the imported article as a snapshot. Return to the original URL for edits, comments and linked sources."
  }
];
