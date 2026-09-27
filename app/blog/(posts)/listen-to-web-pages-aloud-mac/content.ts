// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/AddContentSheet.swift; LinkImportSheet.swift — Paste a Link
//   LoudReader/ArticleImportPipeline.swift — extraction errors
//   LoudReader/Subscription/PaywallReason.swift — paid controls
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry
//   LoudReader.xcodeproj/project.pbxproj — iOS target
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://support.apple.com/guide/mac-help/mh27448/mac
// Official source checked 2026-09-28: https://support.apple.com/guide/mac-help/mchlp1531/mac
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does macOS have a built-in read-aloud feature?",
    "a": "Yes. Enable Speak selection under Accessibility’s Read & Speak settings, or Spoken Content on older versions. Check the assigned shortcut before using it."
  },
  {
    "q": "Can LoudReader import an article URL directly?",
    "a": "Yes. Use Paste a Link or the share extension. Check the extracted text because sign-in requirements, paywalls and JavaScript-heavy pages can limit imports."
  },
  {
    "q": "Is LoudReader a native macOS app?",
    "a": "It is an iPhone and iPad app that runs on compatible Apple Silicon Macs through iPad-app compatibility. There is no separate native macOS target."
  },
  {
    "q": "Is saving as PDF always necessary?",
    "a": "No. It is a fallback when direct import does not produce a useful copy. Inspect the saved file before importing it."
  },
  {
    "q": "Are speed controls and unlimited article saving free?",
    "a": "Those LoudReader features require Premium. The free allowance lets you try article saving; ordinary offline narration is a separate capability."
  }
];
