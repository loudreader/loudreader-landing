// Local content constants for /loudreader-vs-speechify.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// NOTE ON SCOPE: /speechify-alternative-for-mac targets people searching for
// a Speechify *alternative on Mac*. This page targets the head-to-head brand
// query "LoudReader vs Speechify" across all platforms. Do not merge them.
//
// FACT PROVENANCE. Every competitor claim below was checked on 2026-07-14
// against Speechify's own pages:
//   - https://speechify.com/pricing/            (free tier = 10 voices, up to
//     1.5x speed; Speechify's own page calls them "10 robotic sounding
//     voices"; Premium $29/month with "SAVE 60%" when billed annually; 1000+
//     voices, 60+ languages, 5x speeds; Scan & Listen, AI Summaries & Chats,
//     cloud storage integrations, voice typing, AI podcasts, Voice AI
//     assistant)
//   - https://speechify.com/usage-limits/       (Premium voice usage limits:
//     1,000,000 words/month guaranteed Jan 1 to Dec 31, 2026, expiring
//     automatically Jan 1, 2027; 150,000 words/month contractual baseline)
//   - https://speechify.com/text-to-speech-mac/ (dedicated Mac app: TTS +
//     voice typing; "sign in, and you're ready"; the Mac app currently
//     supports English with US and UK accents)
// If Speechify changes pricing or limits, update the facts AND bump
// `LAST_UPDATED` here + `lastModified` in meta.json.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";
import { DIFFERENTIATORS, FEATURES, FREE_TIER, LIBRARY, PRICING, PRIVACY, REQUIREMENTS, VOICES } from "@/components/money/site";

export const SLUG = "loudreader-vs-speechify";

// LoudReader facts checked against shipping 1.12 and Apple’s US listing on
// 2026-09-28; see docs/product-facts-2026-09-28.md. Competitor research retains
// its original July 14 date and has not been rechecked for this update.
export const LAST_UPDATED = "2026-09-28";
export const FACTS_CHECKED_NOTE =
  "LoudReader facts checked against version 1.12 and the US App Store listing on September 28, 2026. Speechify facts were last checked against speechify.com (pricing, usage limits, Mac app pages) on July 14, 2026. This page is maintained by LoudReader's developer.";

export const PAGE_TITLE = "LoudReader vs Speechify: Which Should You Pick?";
export const PAGE_DESCRIPTION =
  "LoudReader vs Speechify, compared honestly: pricing, word limits, privacy, offline use, voices, and platforms, plus which app fits which kind of reader.";

export const H1 = "LoudReader vs Speechify: an honest comparison";

export const COMPARISON_COLUMNS = ["LoudReader", "Speechify"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "What it is",
    cells: [
      "A focused reader that turns books and documents into audiobooks",
      "A cloud AI suite: TTS plus AI summaries, chats, podcasts, and voice typing",
    ],
  },
  {
    label: "Premium price",
    cells: [
      `${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}`,
      "$29/month, with a 60% discount when billed annually",
    ],
  },
  {
    label: "One-time purchase",
    cells: [`Yes, ${PRICING.premiumLifetime}`, "No, subscription only"],
  },
  {
    label: "Free tier",
    cells: [
      `${FREE_TIER.full} ${FREE_TIER.choice}`,
      "10 standard voices (Speechify's own pricing page: \"10 robotic sounding voices\"), speeds up to 1.5x",
    ],
  },
  {
    label: "Word limits",
    cells: [
      "None. No quota on free or Premium",
      "Premium voice usage is metered: 1,000,000 words/month guaranteed for 2026, 150,000/month contractual baseline after",
    ],
  },
  {
    label: "Account required",
    cells: ["No LoudReader account to import and listen; purchases use your Apple ID", "Yes, the Mac app requires sign-in"],
  },
  {
    label: "Privacy",
    cells: [
      `${DIFFERENTIATORS.private}. ${PRIVACY.summary}`,
      "Cloud-based voices and cloud storage integrations",
    ],
  },
  {
    label: "Works offline",
    cells: [
      FEATURES.onDevice,
      "Cloud-first; the free web voices and AI features need a connection",
    ],
  },
  {
    label: "Voices",
    cells: [
      `${VOICES.headline}. ${VOICES.availability}`,
      "1000+ voices on Premium, including celebrity voices",
    ],
  },
  {
    label: "Languages",
    cells: [
      `10 languages. ${VOICES.availability}`,
      "60+ languages (the Mac app currently supports English US/UK)",
    ],
  },
  {
    label: "Platforms",
    cells: [
      DIFFERENTIATORS.native,
      "iOS, Android, web app, Chrome extension, Mac app",
    ],
  },
  {
    label: "Built-in library",
    cells: [
      LIBRARY.gutenberg,
      "Import your own PDFs, docs, web pages, and scanned books",
    ],
  },
  {
    label: "Requirements",
    cells: [
      REQUIREMENTS,
      "Broad. The web app runs in any browser",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What is the main difference between LoudReader and Speechify?",
    a: `Scope. Speechify is a cloud AI suite: 1000+ voices, 60+ languages, AI summaries, podcasts, and voice typing across nearly every platform. LoudReader is a focused reader for books and documents: ${DIFFERENTIATORS.private}. ${FREE_TIER.full}`,
  },
  {
    q: "Is LoudReader cheaper than Speechify?",
    a: `Yes. LoudReader Premium is ${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}; prices vary by storefront. Speechify Premium is advertised at $29/month, discounted 60% when billed annually, with no one-time purchase option. ${FREE_TIER.full}`,
  },
  {
    q: "Does Speechify have a word limit?",
    a: "Yes, on premium voices. Speechify's own usage-limits page guarantees Premium subscribers 1,000,000 words per month through December 31, 2026, with a contractual baseline of 150,000 words per month after that. LoudReader has no word quota on any tier.",
  },
  {
    q: "Which app is more private?",
    a: `LoudReader generates narration locally and does not upload your books to a speech server. ${PRIVACY.summary} Usage analytics is enabled by default. No LoudReader account is required to import and listen, but that does not mean the app has no telemetry. Speechify is cloud-based, with sign-in and cloud storage integrations.`,
  },
  {
    q: "Which app works offline?",
    a: "LoudReader can narrate books already on the device offline. Install and open the app, then test your chosen voice and book before travelling. Downloads, purchases, diagnostics and analytics use the network when available. Speechify is cloud-first; its voices and AI features are delivered from the cloud.",
  },
  {
    q: "Who makes LoudReader?",
    a: "A solo developer. LoudReader is a small, focused app rather than a venture-backed platform, which is why this comparison concedes plainly that Speechify wins on breadth: more languages, more voices, more platforms, and AI extras LoudReader deliberately doesn't have.",
  },
];
