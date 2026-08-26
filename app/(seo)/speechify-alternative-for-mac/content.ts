// Local content constants for /speechify-alternative-for-mac.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE. Every competitor claim below was checked on 2026-07-14
// against Speechify's own pages:
//   - https://speechify.com/pricing/           (plans, $29/mo, "SAVE 60%" annual,
//     free tier = 10 voices / up to 1.5x speed, 1000+ voices, 60+ languages, 5x)
//   - https://speechify.com/usage-limits/      (Premium word allowance: 1,000,000
//     words/month guaranteed for 2026; 150,000/month contractual baseline)
//   - https://speechify.com/text-to-speech-mac/ (Mac app exists: TTS + voice
//     typing; sign-in required; Mac app currently supports English US/UK)
// If Speechify changes pricing or limits, update the facts AND bump
// `lastUpdated` here + `lastModified` in meta.json.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "speechify-alternative-for-mac";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "Speechify facts checked against speechify.com (pricing, usage limits, Mac app pages) on July 14, 2026";

export const PAGE_TITLE = "Speechify Alternative for Mac: Private & Offline";
export const PAGE_DESCRIPTION =
  "Looking for a Speechify alternative for Mac? LoudReader reads EPUBs and PDFs aloud with natural offline voices, fully on-device, no account, no word quota. Premium from $7.99/month or $199.99 once.";

export const H1 = "The Speechify alternative for Mac that never uploads your books";

export const COMPARISON_COLUMNS = ["LoudReader", "Speechify"];

export const COMPARISON_ROWS: ComparisonRow[] = [
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
      "10 standard voices, speeds up to 1.5x",
    ],
  },
  {
    label: "Word limits",
    cells: [
      "None. No quota on free or Premium",
      "Premium voice usage is metered: 1,000,000 words/month guaranteed for 2026, 150,000/month baseline after",
    ],
  },
  {
    label: "Account required",
    cells: ["No, no sign-up at all", "Yes, sign-in required"],
  },
  {
    label: "Privacy",
    cells: [
      "Fully on-device and private, your library never leaves your device",
      "Cloud-based voices and cloud integrations (Google Drive, Dropbox, OneDrive)",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%, all speech is generated on-device",
      "Partial. Premium offers offline listening via downloads",
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
    label: "Voice cloning",
    cells: [
      "On device. About ten seconds of your own speech, processed on your phone, never uploaded.",
      "In the cloud. Your recording is uploaded and processed on their servers.",
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
      "Broad. The web app runs in any browser, including Intel Macs",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a good Speechify alternative for Mac?",
    a: "Yes, if you mainly read long-form: books, PDFs, and articles read aloud privately on a Mac. LoudReader is fully on-device and private, your library never leaves your device, and the free tier has no word quota, so you can listen to entire books cover to cover without paying. If you need 60+ languages, celebrity voices, or Android and Windows apps, Speechify is the better fit.",
  },
  {
    q: "Does LoudReader work offline, like on a plane?",
    a: "Yes, 100%. All text-to-speech runs on your Mac or iPhone in real time, so LoudReader works with zero connectivity. The only thing that needs internet is downloading free books from the built-in Project Gutenberg catalog.",
  },
  {
    q: "Do I need an account to use LoudReader?",
    a: "No. There's no sign-up, no login, and no profile. You download the app and start listening. Speechify's Mac app requires signing in.",
  },
  {
    q: "Can LoudReader read PDFs and EPUBs aloud on a Mac?",
    a: "Yes. Import any EPUB or PDF and LoudReader reads it aloud with natural offline voices and word-by-word highlighting, so you can read along as you listen.",
  },
  {
    q: "Does LoudReader have a one-time purchase instead of a subscription?",
    a: "Yes. Premium is $7.99/month or $49.99/year, and there's a $199.99 lifetime option. Pay once, keep it forever. Speechify Premium is subscription-only.",
  },
  {
    q: "What does Speechify offer that LoudReader doesn't?",
    a: "Quite a lot, honestly: 60+ languages, 1000+ voices including celebrity voices, Android and Windows support via web and mobile apps, a Chrome extension, scanning physical books with your camera, and AI extras like summaries and podcasts. LoudReader is deliberately narrower, a private, offline reader for books and documents on Mac and iPhone.",
  },
  {
    q: "Is LoudReader a native Mac app?",
    a: "No, and it is worth being precise about it. LoudReader is an iPhone and iPad app. On an Apple Silicon Mac you install it from the Mac App Store's 'iPhone & iPad Apps' tab, and it runs in Apple's compatibility mode: a fixed-size window rather than a resizable Mac one, and no menu bar. There is no separate Mac build. What is not a compromise is the engine underneath. Speech is generated on your Mac's own silicon, offline, and nothing is uploaded. It needs macOS 15 or later on Apple Silicon; Intel Macs are not supported.",
  },
];
