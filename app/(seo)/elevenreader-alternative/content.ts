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
import { CLONING, FEATURES, FREE_TIER, LIBRARY, MAC, PRICING, PRIVACY, REQUIREMENTS, VOICES } from "@/components/money/site";

// LoudReader product facts checked against shipping release 1.12 and Apple's
// live US listing on 2026-09-28. See docs/product-facts-2026-09-28.md.
// Competitor evidence remains dated 2026-07-14; it was not rechecked here.

export const SLUG = "elevenreader-alternative";

export const LAST_UPDATED = "2026-09-28";
export const FACTS_CHECKED_NOTE =
  "ElevenReader facts checked against elevenreader.io, elevenlabs.io, and the ElevenReader App Store listing on July 14, 2026. LoudReader 1.12 product facts checked on September 28, 2026; competitor facts were not rechecked";

export const PAGE_TITLE = "ElevenReader Alternative: Private & Offline";
export const PAGE_DESCRIPTION =
  "LoudReader narrates DRM-free EPUBs and PDFs on your device, without uploading books for speech. Compare free listening and features with ElevenReader.";

export const H1 = "The ElevenReader alternative that narrates on your device";

export const COMPARISON_COLUMNS = ["LoudReader", "ElevenReader"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Premium price",
    cells: [
      `${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}; storefront prices vary`,
      "Ultra: $11/month, or $99/year (about $8.25/month billed annually)",
    ],
  },
  {
    label: "One-time purchase",
    cells: [
      `Yes, ${PRICING.premiumLifetime}`,
      "No, subscription only (plus per-book audiobook purchases)",
    ],
  },
  {
    label: "Free tier",
    cells: [
      `${FREE_TIER.full} ${FREE_TIER.choice}`,
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
    cells: ["No LoudReader account required to import and listen", "Yes, sign-up required to start listening"],
  },
  {
    label: "Privacy",
    cells: [
      `Books are not uploaded for narration. ${PRIVACY.summary} Usage analytics is enabled by default.`,
      "Cloud service. You upload your files to convert them to audio (\"Simply upload and press play\")",
    ],
  },
  {
    label: "Works offline",
    cells: [
      FEATURES.onDevice,
      "Offline listening via downloads, an Ultra plan feature",
    ],
  },
  {
    label: "Voices",
    cells: [
      `${VOICES.headline}. ${VOICES.availability}`,
      "1,000+ voices, including licensed \"Iconic\" celebrity voices and custom voices you design",
    ],
  },
  {
    label: "Voice cloning",
    cells: [
      `${CLONING.long} ${CLONING.trial}`,
      "In the cloud. Your recording is uploaded and the voice lives on ElevenLabs' servers.",
    ],
  },
  {
    label: "Languages",
    cells: [`10 studio-voice languages. ${VOICES.availability}`, "30+ languages"],
  },
  {
    label: "Platforms",
    cells: [
      MAC.precise,
      "iOS, Android, web app, Chrome extension, no Mac app",
    ],
  },
  {
    label: "Built-in library",
    cells: [
      LIBRARY.gutenberg,
      "Thousands of free classic audiobooks, plus a 200,000+ premium audiobook store on Ultra",
    ],
  },
  {
    label: "Requirements",
    cells: [
      REQUIREMENTS,
      "iOS 18+, Android, or any modern browser",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a good ElevenReader alternative?",
    a: `Yes, if you mainly want books and documents narrated on your device without uploading them to a speech server. ${FREE_TIER.full} If you want 1,000+ cloud voices, 30+ languages, an audiobook store, or Android support, ElevenReader is the better fit.`,
  },
  {
    q: "Does LoudReader upload my books or PDFs for narration?",
    a: `No. LoudReader generates speech on your device rather than sending books to a speech server. ${PRIVACY.summary} Usage analytics is enabled by default. ElevenReader converts uploaded files in the ElevenLabs cloud.`,
  },
  {
    q: "Is there a listening limit in LoudReader's free tier?",
    a: `There is no hourly or word quota on book listening. ${FREE_TIER.full} ${FREE_TIER.choice} ElevenReader's free plan meters text-to-audio at 10 hours per month; unlimited conversion of your own imports requires Ultra at $11/month or $99/year.`,
  },
  {
    q: "Does ElevenReader have a Mac app?",
    a: `The July 14, 2026 comparison found iOS and Android apps, a web app and a Chrome extension, with browser access on Mac. ${MAC.precise}`,
  },
  {
    q: "Do I need an account to use LoudReader?",
    a: "No LoudReader account is required to import books and listen. App Store purchases use your Apple ID. ElevenReader requires creating an account before you can start listening.",
  },
  {
    q: "What does ElevenReader offer that LoudReader doesn't?",
    a: "A lot, honestly: 1,000+ voices including licensed celebrity voices, custom voices you can design from a text prompt, 30+ languages, GenFM AI podcasts generated from your content, a 200,000+ premium audiobook store, and Android and web apps. LoudReader focuses on on-device narration of books and documents on Apple devices.",
  },
];
