// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/AddContentSheet.swift; LinkImportSheet.swift — article URL imports
//   LoudReader/ArticleImportPipeline.swift — extraction quality gate
//   LoudReader/Subscription/SubscriptionAccess.swift — article saving allowance
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader subscribe to RSS feeds?",
    "a": "No. Import individual article links or supported files. Your RSS app remains responsible for finding and tracking new entries."
  },
  {
    "q": "Do I have to save every article as a PDF?",
    "a": "No. Try the link importer or share extension first. A readable PDF is a fallback for pages that do not extract properly."
  },
  {
    "q": "Can a summary-only feed become a full article?",
    "a": "Open the item’s original page and check the text available to you. Importing a summary or paywall preview cannot supply missing content."
  },
  {
    "q": "Does this create a podcast feed?",
    "a": "No. It creates reading copies in LoudReader’s library, with local narration. It does not publish a podcast or automatically follow your RSS subscriptions."
  }
];
