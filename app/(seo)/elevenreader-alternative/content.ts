// Local content constants for /elevenreader-alternative.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE. Every competitor claim below was checked on 2026-07-14
// against ElevenLabs' own pages:
//   - https://elevenreader.io/                    (free plan = 10 hours of
//     text-to-audio per month, "about a 400-page book every month"; Ultra =
//     $11/month or $8.25/month billed annually with unlimited text-to-audio,
//     200,000+ premium audiobooks, offline downloading, custom voice creation;
//     1,000+ voices; platforms: web, iOS, Android, Chrome extension; sign-up
//     required to start listening; "Simply upload and press play")
//   - https://apps.apple.com/us/app/elevenreader-read-books-aloud/id6479373050
//     (iOS 18+, iPhone/iPad only, no Mac app; IAP: Ultra $11/month, $99/year;
//     individual audiobook purchases listed as separate IAPs; 1,000+ AI
//     voices, 30+ languages; offline listening via downloads; 0.25x to 4x
//     speed; thousands of free classic audiobooks)
//   - https://elevenlabs.io/text-reader           (free app; GenFM AI podcasts;
//     licensed "Iconic Voices"; words highlighted in sync with audio)
// If ElevenLabs changes pricing or limits, update the facts AND bump
// `LAST_UPDATED` here + `lastModified` in meta.json.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "elevenreader-alternative";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "ElevenReader facts checked against elevenreader.io, elevenlabs.io, and the ElevenReader App Store listing on July 14, 2026";

export const PAGE_TITLE = "ElevenReader Alternative: Private & Offline";
export const PAGE_DESCRIPTION =
  "Looking for an ElevenReader alternative? LoudReader reads EPUBs and PDFs aloud with natural offline voices, no upload, no account, no hourly listening quota.";

export const H1 = "The ElevenReader alternative that never uploads your reading";

export const COMPARISON_COLUMNS = ["LoudReader", "ElevenReader"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Premium price",
    cells: [
      "$7.99/month, $49.99/year, or $199.99 once (lifetime)",
      "Ultra: $11/month, or $99/year (about $8.25/month billed annually)",
    ],
  },
  {
    label: "One-time purchase",
    cells: [
      "Yes, $199.99 lifetime",
      "No, subscription only (plus per-book audiobook purchases)",
    ],
  },
  {
    label: "Free tier",
    cells: [
      "Unlimited listening on every book, cover to cover; every voice free for your first 8 hours",
      "10 hours of text-to-audio per month. ElevenLabs describes it as \"about a 400-page book every month\"",
    ],
  },
  {
    label: "Listening limits",
    cells: [
      "None. No quota on free or Premium",
      "Free plan is metered at 10 hours/month; Ultra removes the cap on your own imports",
    ],
  },
  {
    label: "Account required",
    cells: ["No, no sign-up at all", "Yes, sign-up required to start listening"],
  },
  {
    label: "Privacy",
    cells: [
      "Fully on-device and private, your library never leaves your device",
      "Cloud service. You upload your files to convert them to audio (\"Simply upload and press play\")",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%, all speech is generated on-device",
      "Offline listening via downloads, an Ultra plan feature",
    ],
  },
  {
    label: "Voices",
    cells: [
      "23 natural offline voices across 10 languages",
      "1,000+ voices, including licensed \"Iconic\" celebrity voices and custom voices you design",
    ],
  },
  {
    label: "Voice cloning",
    cells: [
      "On device. Read a few sentences aloud, about ten seconds, and the narrator is built on your phone. The recording is never uploaded.",
      "In the cloud. Your recording is uploaded and the voice lives on ElevenLabs' servers.",
    ],
  },
  {
    label: "Languages",
    cells: ["10 languages, each with a native narrator", "30+ languages"],
  },
  {
    label: "Platforms",
    cells: [
      "iPhone, iPad, and Apple Silicon Macs",
      "iOS, Android, web app, Chrome extension, no Mac app",
    ],
  },
  {
    label: "Built-in library",
    cells: [
      "70,000+ free Project Gutenberg classics",
      "Thousands of free classic audiobooks, plus a 200,000+ premium audiobook store on Ultra",
    ],
  },
  {
    label: "Requirements",
    cells: [
      "macOS 15+ on Apple Silicon; iOS 18+",
      "iOS 18+, Android, or any modern browser",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a good ElevenReader alternative?",
    a: "Yes, if you mainly want books and documents read aloud without uploading them. LoudReader is fully on-device and private, your library never leaves your device, and the free tier has no listening meter, so you can listen to entire books cover to cover, every month, without paying. If you want 1,000+ cloud voices, 30+ languages, an audiobook store, or Android support, ElevenReader is the better fit.",
  },
  {
    q: "Does LoudReader upload my books or PDFs anywhere?",
    a: "No. All text-to-speech runs on your Mac or iPhone, so your files are never uploaded to any server. ElevenReader works the other way around: you upload your files to the ElevenLabs cloud, which converts them to audio.",
  },
  {
    q: "Is there a listening limit in LoudReader's free tier?",
    a: "No. LoudReader's free tier includes unlimited listening on every book, cover to cover, with no hourly or word quota. ElevenReader's free plan meters text-to-audio at 10 hours per month; unlimited conversion of your own imports requires Ultra at $11/month or $99/year.",
  },
  {
    q: "Does ElevenReader have a Mac app?",
    a: "No. ElevenReader ships iOS and Android apps, a web app, and a Chrome extension, so on a Mac you use it in the browser. LoudReader runs on iPhone, iPad, and Apple Silicon Macs, so you can listen on the Mac itself with word-by-word highlighting, rather than in a browser tab.",
  },
  {
    q: "Do I need an account to use LoudReader?",
    a: "No. There's no sign-up, no login, and no profile. You download the app and start listening. ElevenReader requires creating an account before you can start listening.",
  },
  {
    q: "What does ElevenReader offer that LoudReader doesn't?",
    a: "A lot, honestly: 1,000+ voices including licensed celebrity voices, custom voices you can design from a text prompt, 30+ languages, GenFM AI podcasts generated from your content, a 200,000+ premium audiobook store, and Android and web apps. LoudReader is deliberately narrower, a private, offline reader for books and documents on Mac and iPhone.",
  },
];
