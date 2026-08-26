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

export const SLUG = "loudreader-vs-speechify";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "Speechify facts checked against speechify.com (pricing, usage limits, Mac app pages) on July 14, 2026. This page is maintained by LoudReader's developer.";

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
      "$7.99/month, $49.99/year, or $199.99 once (lifetime)",
      "$29/month, with a 60% discount when billed annually",
    ],
  },
  {
    label: "One-time purchase",
    cells: ["Yes, $199.99 lifetime", "No, subscription only"],
  },
  {
    label: "Free tier",
    cells: [
      "Unlimited listening on every book, cover to cover; every voice free for your first 8 hours",
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
    cells: ["No, no sign-up at all", "Yes, the Mac app requires sign-in"],
  },
  {
    label: "Privacy",
    cells: [
      "Fully on-device and private, your library never leaves your device",
      "Cloud-based voices and cloud storage integrations",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%, all speech is generated on-device",
      "Cloud-first; the free web voices and AI features need a connection",
    ],
  },
  {
    label: "Voices",
    cells: [
      "23 natural offline voices across 10 languages",
      "1000+ voices on Premium, including celebrity voices",
    ],
  },
  {
    label: "Languages",
    cells: [
      "10 languages, each with a native narrator",
      "60+ languages (the Mac app currently supports English US/UK)",
    ],
  },
  {
    label: "Platforms",
    cells: [
      "iPhone, iPad, and Apple Silicon Macs",
      "iOS, Android, web app, Chrome extension, Mac app",
    ],
  },
  {
    label: "Built-in library",
    cells: [
      "70,000+ free Project Gutenberg classics",
      "Import your own PDFs, docs, web pages, and scanned books",
    ],
  },
  {
    label: "Requirements",
    cells: [
      "macOS 15+ on Apple Silicon; iOS 18+",
      "Broad. The web app runs in any browser",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What is the main difference between LoudReader and Speechify?",
    a: "Scope. Speechify is a cloud AI suite: 1000+ voices, 60+ languages, AI summaries, podcasts, and voice typing across nearly every platform. LoudReader is a focused reader for books and documents that's fully on-device and private, your library never leaves your device, with no account and no word quota.",
  },
  {
    q: "Is LoudReader cheaper than Speechify?",
    a: "Yes. LoudReader Premium is $7.99/month, $49.99/year, or $199.99 once (lifetime); Speechify Premium is advertised at $29/month, discounted 60% when billed annually, with no one-time purchase option. LoudReader's free tier also includes unlimited listening on every book, cover to cover.",
  },
  {
    q: "Does Speechify have a word limit?",
    a: "Yes, on premium voices. Speechify's own usage-limits page guarantees Premium subscribers 1,000,000 words per month through December 31, 2026, with a contractual baseline of 150,000 words per month after that. LoudReader has no word quota on any tier.",
  },
  {
    q: "Which app is more private?",
    a: "LoudReader. All text-to-speech runs on your Mac or iPhone, so your books and documents are never uploaded; the app requires no account and collects no personal data. Speechify is cloud-based, with sign-in and cloud storage integrations.",
  },
  {
    q: "Which app works offline?",
    a: "LoudReader works 100% offline. Every word of speech is generated on-device, so it works on a plane or in the subway with zero connectivity. Speechify is cloud-first; its voices and AI features are delivered from the cloud.",
  },
  {
    q: "Who makes LoudReader?",
    a: "A solo developer. LoudReader is a small, focused app rather than a venture-backed platform, which is why this comparison concedes plainly that Speechify wins on breadth: more languages, more voices, more platforms, and AI extras LoudReader deliberately doesn't have.",
  },
];
