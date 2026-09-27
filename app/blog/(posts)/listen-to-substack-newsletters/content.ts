// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/AddContentSheet.swift; LinkImportSheet.swift — links
//   LoudReader/ArticleImportPipeline.swift — extraction limits
//   LoudReader/Subscription/SubscriptionAccess.swift — article allowance
//   LoudReader/Analytics.swift; LoudReaderApp.swift — diagnostics and usage analytics
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://support.substack.com/hc/en-us/articles/7265753724692-How-do-I-listen-to-a-Substack-post
// Official source checked 2026-09-28: https://support.substack.com/hc/en-us/articles/7265784112916-How-do-I-add-a-voiceover-to-my-Substack-post
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does Substack have a listen button?",
    "a": "Yes. The Substack app offers text-to-speech for many eligible English posts, and writers may also provide recorded voiceovers. Availability varies by publication and post."
  },
  {
    "q": "Does LoudReader sync my Substack subscriptions?",
    "a": "No. You choose the links or files to import. There is no Substack account connection or automatic newsletter feed."
  },
  {
    "q": "Can I import a subscriber-only post by URL?",
    "a": "It may fail or capture only a preview because the importer does not automatically have your browser login. Check the result, or save a complete PDF through your authorised access."
  },
  {
    "q": "Can I listen offline?",
    "a": "Imported text can be narrated locally. Prepare the article and try the desired voice without a connection before relying on offline playback."
  }
];
