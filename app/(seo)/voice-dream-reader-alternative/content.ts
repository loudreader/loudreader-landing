// Local content constants for /voice-dream-reader-alternative.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE. Every competitor claim below was checked on 2026-07-14
// against Voice Dream's own pages:
//   - https://www.voicedream.com/reader/          (200+ voices, 30 languages,
//     "Offline: does not require Internet connection", synchronized
//     highlighting, formats: PDF, EPUB (DRM-free), DAISY audio/text, plain
//     text, web pages, Word, PowerPoint; Dropbox/iCloud/Google Drive,
//     Bookshare, Gutenberg, Pocket/Instapaper/Evernote sources; Safari
//     extension; iCloud sync; Apple Watch app; 2021 Apple Design Award;
//     "One free premium voice from Acapela"; iOS/iPadOS and macOS)
//   - https://www.voicedream.com/subscription-pricing-update/  (switch to
//     subscription pricing on May 1, 2024; regular price $79.99/year;
//     legacy purchasers offered $59.99 = 25% off for life; subscription
//     includes iOS + Mac apps, all voices, unlimited listening; April 2024
//     update: after community feedback, existing one-time purchasers keep
//     the app's existing features at no additional cost; "log into the same
//     account on all your devices")
//   - https://apps.apple.com/us/app/voice-dream-reader/id496177674
//     (free download + in-app subscriptions, annual tiers listed
//     $39.99 to $79.99; iOS 15+; 36 built-in iOS voices in 27 languages free;
//     200+ premium voices in 30 languages; OCR document scanner; Bookshare)
// If Voice Dream changes pricing, update the facts AND bump `LAST_UPDATED`
// here + `lastModified` in meta.json.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "voice-dream-reader-alternative";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "Voice Dream facts checked against voicedream.com (Reader page, subscription pricing update) and its App Store listing on July 14, 2026";

export const PAGE_TITLE = "Voice Dream Reader Alternative: Modern & Offline";
export const PAGE_DESCRIPTION =
  "Looking for a Voice Dream Reader alternative? LoudReader reads EPUBs and PDFs aloud with natural offline voices. Free tier, $49.99/year, or $199.99 lifetime.";

export const H1 = "A Voice Dream Reader alternative with modern offline voices";

export const COMPARISON_COLUMNS = ["LoudReader", "Voice Dream Reader"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Price",
    cells: [
      "Free tier with unlimited listening; Premium $7.99/month, $49.99/year, or $199.99 once (lifetime)",
      "Subscription. $79.99/year regular price, covering the iOS and Mac apps",
    ],
  },
  {
    label: "One-time purchase",
    cells: [
      "Yes, $199.99 lifetime",
      "No longer sold. Retired with the May 2024 switch to subscriptions (existing owners keep their features)",
    ],
  },
  {
    label: "Free tier",
    cells: [
      "Unlimited listening on every book, cover to cover; every voice free for your first 8 hours",
      "Free download with built-in iOS voices; the subscription adds the premium voices and features",
    ],
  },
  {
    label: "Account required",
    cells: [
      "No, no sign-up at all",
      "Subscription features sync by logging into the same account on your devices",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%, all speech is generated on-device",
      "Yes. Voice Dream also works without an internet connection",
    ],
  },
  {
    label: "Voices",
    cells: [
      "8 natural offline voices (modern neural TTS)",
      "200+ premium voices in 30 languages, from classic TTS vendors such as Acapela",
    ],
  },
  {
    label: "Languages",
    cells: ["English only (more coming)", "30 languages"],
  },
  {
    label: "Formats",
    cells: [
      "EPUB and PDF",
      "PDF, EPUB (DRM-free), DAISY text and audio, Word, PowerPoint, web pages, plain text",
    ],
  },
  {
    label: "Accessibility pedigree",
    cells: [
      "Word-by-word highlighting; standard Apple accessibility support",
      "Accessibility-first design: Bookshare integration, pronunciation dictionary, 2021 Apple Design Award",
    ],
  },
  {
    label: "Platforms",
    cells: [
      "Native Mac and iPhone apps (iPad too)",
      "iOS, iPadOS, macOS, plus a companion Apple Watch app",
    ],
  },
  {
    label: "Built-in catalogs",
    cells: [
      "70,000+ free Project Gutenberg classics",
      "Project Gutenberg and Bookshare integrations",
    ],
  },
  {
    label: "Requirements",
    cells: ["macOS 15+ on Apple Silicon; iOS 18+", "iOS 15+; Mac app included in the subscription"],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a good Voice Dream Reader alternative?",
    a: "Yes, if you want books and documents read aloud with modern AI voices, privately, on Mac and iPhone. LoudReader is fully on-device and private, your library never leaves your device. Its free tier has unlimited listening, and paid plans are $49.99/year or $199.99 once versus Voice Dream's $79.99/year subscription. If you depend on Bookshare, DAISY, Word or PowerPoint files, an Apple Watch app, or 30 languages, Voice Dream Reader remains the stronger choice.",
  },
  {
    q: "Did Voice Dream Reader become a subscription?",
    a: "Yes. Voice Dream announced a switch to subscription pricing effective May 1, 2024, at a regular price of $79.99/year covering the iOS and Mac apps. After community feedback, Voice Dream reversed the change for existing customers: people who had already bought the app keep its existing features at no additional cost, while new users subscribe.",
  },
  {
    q: "Does LoudReader work offline like Voice Dream Reader?",
    a: "Yes, both apps work offline, and that deserves to be said plainly. LoudReader generates all speech on your device in real time, so it works with zero connectivity; Voice Dream also states it does not require an internet connection. LoudReader also requires no account of any kind.",
  },
  {
    q: "Does LoudReader support DAISY or Bookshare?",
    a: "No. LoudReader reads EPUB and PDF files and the built-in Project Gutenberg catalog. If you need DAISY books or a Bookshare integration, Voice Dream Reader is the better tool for you.",
  },
  {
    q: "Does LoudReader have a one-time purchase?",
    a: "Yes. Premium is $7.99/month or $49.99/year, and there's a $199.99 lifetime option. Pay once, keep it forever. Voice Dream no longer sells a one-time purchase to new users.",
  },
  {
    q: "Can LoudReader read EPUBs and PDFs aloud on both Mac and iPhone?",
    a: "Yes. LoudReader ships native Mac and iPhone apps (iPad too). Import any DRM-free EPUB or PDF and it is read aloud with natural offline voices and word-by-word highlighting, so you can read along as you listen.",
  },
];
