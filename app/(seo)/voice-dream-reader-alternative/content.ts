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
import { FEATURES, FREE_TIER, LIBRARY, MAC, PRICING, PRIVACY, REQUIREMENTS, VOICES } from "@/components/money/site";

// LoudReader product facts checked against shipping release 1.12 and Apple's
// live US listing on 2026-09-28. See docs/product-facts-2026-09-28.md.
// Competitor evidence remains dated 2026-07-14; it was not rechecked here.

export const SLUG = "voice-dream-reader-alternative";

export const LAST_UPDATED = "2026-09-28";
export const FACTS_CHECKED_NOTE =
  "Voice Dream facts checked against voicedream.com (Reader page, subscription pricing update) and its App Store listing on July 14, 2026. LoudReader 1.12 product facts checked on September 28, 2026; competitor facts were not rechecked";

export const PAGE_TITLE = "Voice Dream Reader Alternative: Modern & Offline";
export const PAGE_DESCRIPTION =
  "LoudReader narrates DRM-free EPUBs and PDFs offline. Compare its free book listening and US$49.99/year Premium plan with Voice Dream Reader.";

export const H1 = "A Voice Dream Reader alternative with modern offline voices";

export const COMPARISON_COLUMNS = ["LoudReader", "Voice Dream Reader"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Price",
    cells: [
      `Free book listening; Premium ${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}; storefront prices vary`,
      "Subscription. $79.99/year regular price, covering the iOS and Mac apps",
    ],
  },
  {
    label: "One-time purchase",
    cells: [
      `Yes, ${PRICING.premiumLifetime}`,
      "No longer sold. Retired with the May 2024 switch to subscriptions (existing owners keep their features)",
    ],
  },
  {
    label: "Free tier",
    cells: [
      `${FREE_TIER.full} ${FREE_TIER.choice}`,
      "Free download with built-in iOS voices; the subscription adds the premium voices and features",
    ],
  },
  {
    label: "Account required",
    cells: [
      "No LoudReader account required to import and listen",
      "Subscription features sync by logging into the same account on your devices",
    ],
  },
  {
    label: "Works offline",
    cells: [
      FEATURES.onDevice,
      "Yes. Voice Dream also works without an internet connection",
    ],
  },
  {
    label: "Voices",
    cells: [
      `${VOICES.headline} (neural TTS). ${VOICES.availability}`,
      "200+ premium voices in 30 languages, from classic TTS vendors such as Acapela",
    ],
  },
  {
    label: "Languages",
    cells: [`10 studio-voice languages. ${VOICES.availability}`, "30 languages"],
  },
  {
    label: "Formats",
    cells: [
      `${FEATURES.imports}; ${FEATURES.ocr}`,
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
      MAC.precise,
      "iOS, iPadOS, macOS, plus a companion Apple Watch app",
    ],
  },
  {
    label: "Built-in catalogs",
    cells: [
      LIBRARY.gutenberg,
      "Project Gutenberg and Bookshare integrations",
    ],
  },
  {
    label: "Requirements",
    cells: [REQUIREMENTS, "iOS 15+; Mac app included in the subscription"],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a good Voice Dream Reader alternative?",
    a: `Yes, if you want on-device narration without uploading books to a speech server. ${FREE_TIER.full} LoudReader Premium is ${PRICING.premiumYearly} or ${PRICING.premiumLifetime}, with prices varying by storefront, versus Voice Dream's cited $79.99/year subscription. If you depend on Bookshare, DAISY, Word or PowerPoint files, an Apple Watch app, or 30 languages, Voice Dream Reader remains the stronger choice.`,
  },
  {
    q: "Did Voice Dream Reader become a subscription?",
    a: "Yes. Voice Dream announced a switch to subscription pricing effective May 1, 2024, at a regular price of $79.99/year covering the iOS and Mac apps. After community feedback, Voice Dream reversed the change for existing customers: people who had already bought the app keep its existing features at no additional cost, while new users subscribe.",
  },
  {
    q: "Does LoudReader work offline like Voice Dream Reader?",
    a: `LoudReader narrates books already on your device offline; install and open the app, then test your desired book and voice before travelling. Voice Dream also states it does not require an internet connection. No LoudReader account is required to listen. ${PRIVACY.summary} Usage analytics is enabled by default.`,
  },
  {
    q: "Does LoudReader support DAISY or Bookshare?",
    a: `No. LoudReader supports ${FEATURES.imports}, including ${FEATURES.ocr}, and downloads from the Project Gutenberg catalog. If you need DAISY books or a Bookshare integration, Voice Dream Reader is the better tool for you.`,
  },
  {
    q: "Does LoudReader have a one-time purchase?",
    a: `Yes. Premium is ${PRICING.premiumMonthly} or ${PRICING.premiumYearly}, with a ${PRICING.premiumLifetime} option. These are US listing prices; other storefronts may vary. Voice Dream no longer sells a one-time purchase to new users.`,
  },
  {
    q: "Can LoudReader read EPUBs and PDFs aloud on both Mac and iPhone?",
    a: `Yes. ${MAC.precise} Import DRM-free EPUBs or PDFs for on-device narration and word-by-word highlighting. Scanned PDFs use on-device text recognition; results depend on scan quality and layout. ${VOICES.availability}`,
  },
];
