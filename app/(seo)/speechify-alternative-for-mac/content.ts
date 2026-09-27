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
import { CLONING, DIFFERENTIATORS, FEATURES, FREE_TIER, LIBRARY, MAC, PRICING, PRIVACY, REQUIREMENTS, VOICES } from "@/components/money/site";

export const SLUG = "speechify-alternative-for-mac";

// LoudReader facts checked against shipping 1.12 and Apple’s US listing on
// 2026-09-28; see docs/product-facts-2026-09-28.md. Competitor research retains
// its original July 14 date and has not been rechecked for this update.
export const LAST_UPDATED = "2026-09-28";
export const FACTS_CHECKED_NOTE =
  "LoudReader facts checked against version 1.12 and the US App Store listing on September 28, 2026. Speechify facts were last checked against speechify.com (pricing, usage limits, Mac app pages) on July 14, 2026";

export const PAGE_TITLE = "Speechify Alternative for Mac: Private & Offline";
export const PAGE_DESCRIPTION =
  "A Speechify alternative for Apple Silicon Macs: LoudReader runs as an iPad app, narrates books locally and offers free unlimited listening with selected voices.";

export const H1 = "A Speechify alternative for Mac with on-device narration";

export const COMPARISON_COLUMNS = ["LoudReader", "Speechify"];

export const COMPARISON_ROWS: ComparisonRow[] = [
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
    cells: ["No LoudReader account to import and listen; purchases use your Apple ID", "Yes, sign-in required"],
  },
  {
    label: "Privacy",
    cells: [
      `${DIFFERENTIATORS.private}. ${PRIVACY.summary}`,
      "Cloud-based voices and cloud integrations (Google Drive, Dropbox, OneDrive)",
    ],
  },
  {
    label: "Works offline",
    cells: [
      FEATURES.onDevice,
      "Partial. Premium offers offline listening via downloads",
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
    label: "Voice cloning",
    cells: [
      `${CLONING.long} ${CLONING.trial}`,
      "In the cloud. Your recording is uploaded and processed on their servers.",
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
      "Broad. The web app runs in any browser, including Intel Macs",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a good Speechify alternative for Mac?",
    a: `Yes, if you mainly want books, PDFs and saved articles read aloud with on-device speech. ${MAC.precise} ${FREE_TIER.full} If you need 60+ languages, celebrity voices, or Android and Windows apps, Speechify is the better fit.`,
  },
  {
    q: "Does LoudReader work offline, like on a plane?",
    a: "Yes, books already on the device can be narrated offline. Install and open the app, then test your chosen voice and book before travelling. Downloads, purchases, diagnostics and analytics use the network when available.",
  },
  {
    q: "Do I need an account to use LoudReader?",
    a: `No LoudReader account is required to import and listen; App Store purchases use your Apple ID. ${PRIVACY.summary} Usage analytics is enabled by default. Speechify's Mac app requires signing in.`,
  },
  {
    q: "Can LoudReader read PDFs and EPUBs aloud on a Mac?",
    a: `Yes, on a compatible Apple Silicon Mac through Apple's iPad-app compatibility mode. Import DRM-free EPUBs or PDFs for local narration and word-by-word highlighting. Scanned PDFs use on-device text recognition; results depend on the document. ${VOICES.availability}`,
  },
  {
    q: "Does LoudReader have a one-time purchase instead of a subscription?",
    a: `Yes. Premium is ${PRICING.premiumMonthly} or ${PRICING.premiumYearly}, with a ${PRICING.premiumLifetime} option. Prices vary by storefront. Speechify Premium is subscription-only.`,
  },
  {
    q: "What does Speechify offer that LoudReader doesn't?",
    a: "Speechify offers 60+ languages, 1000+ voices including celebrity voices, Android and Windows support via web and mobile apps, a Chrome extension, camera scanning, and AI extras like summaries and podcasts. LoudReader focuses on local book narration and also has on-device camera and scanned-PDF text recognition; scanning is not exclusive to Speechify.",
  },
  {
    q: "Is LoudReader a native Mac app?",
    a: `${MAC.precise} Speech is generated locally on the Mac; books are not uploaded for narration. It needs macOS 15 or later on a compatible Apple Silicon Mac. Intel Macs are not supported.`,
  },
];
