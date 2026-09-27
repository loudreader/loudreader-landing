// LoudReader product facts refreshed against release_v1.12 on 2026-09-28.
// See docs/product-facts-2026-09-28.md. Older third-party check dates below remain unchanged.
// Local content constants for /turn-any-book-into-an-audiobook.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE, checked on 2026-07-14:
//   - LoudReader product claims verified against components/money/site.ts,
//     the App Store listing, and app/faq/faq-data.ts in this repo (pricing,
//     free tier, 23 studio narrators, word-by-word highlighting, Project Gutenberg
//     catalog, EPUB/PDF import, iOS 18+/macOS 15+ Apple Silicon).
//   - DRM claim: LoudReader imports standard EPUB and PDF files. It has no
//     DRM-decryption capability (app source: BookImportService.swift), so
//     DRM-locked purchases (e.g. Kindle) cannot be imported. Stated as an
//     honest limitation, not a competitor claim.
//   - Listening-time figures are arithmetic, not statistics: words divided by
//     words per minute (e.g. 90,000 / 150 = 600 minutes = 10 hours), and the
//     page labels them as estimates at a stated narration pace.
//   - https://www.gutenberg.org/ (Project Gutenberg: 70,000+ free ebooks,
//     the count Gutenberg itself publishes on its home page).

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER, PRICING } from "@/components/money/site";

export const SLUG = "turn-any-book-into-an-audiobook";

export const LAST_UPDATED = "2026-09-28";
export const FACTS_CHECKED_NOTE =
  "LoudReader 1.12 product facts checked September 28, 2026";

export const PAGE_TITLE = "Turn Any Book Into an Audiobook on Mac & iPhone";
export const PAGE_DESCRIPTION =
  "Listen to DRM-free EPUBs and PDFs in LoudReader with local narration, saved progress and word highlighting. Compare real-time speech with recorded audiobooks.";

export const H1 = "How to turn any book into an audiobook";

export const COMPARISON_COLUMNS = [
  "LoudReader (real-time TTS)",
  "Professionally narrated audiobook",
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Which books",
    cells: [
      "Any DRM-free EPUB or PDF you own, plus 70,000+ free Project Gutenberg classics",
      "Only titles a publisher chose to record",
    ],
  },
  {
    label: "When you can listen",
    cells: ["Right away, once you import and press play", "Whenever (and if) it gets produced"],
  },
  {
    label: "Narration",
    cells: [
      "Natural offline voices from modern neural TTS, consistent across every book",
      "A human performance, still the artistic gold standard",
    ],
  },
  {
    label: "Cost per book",
    cells: [
      `Free book listening. ${FREE_TIER.full} Premium ${PRICING.premiumMonthly} in the US`,
      "Typically purchased per title or via subscription credits",
    ],
  },
  {
    label: "Read along with the text",
    cells: [
      "Yes, word-by-word highlighting synced to the narration",
      "Usually audio only (text sold separately)",
    ],
  },
  {
    label: "Privacy",
    cells: [
      "No account or book upload for narration; diagnostics and usage analytics also run",
      "Store account required; purchases tracked to it",
    ],
  },
  {
    label: "Works offline",
    cells: ["100%, speech is generated on-device", "Yes, after downloading"],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How do I turn a book into an audiobook?",
    a: "Install LoudReader on iPhone or iPad, or its iPad build on a compatible Apple Silicon Mac. Import a DRM-free EPUB or PDF, wait for processing, choose an available voice and press Play. No separate MP3 export is required.",
  },
  {
    q: "Do I need to convert my EPUB or PDF into MP3 files?",
    a: "No. LoudReader generates narration on your device while you listen, so you do not have to export an audiobook. It still uses storage for voice resources, imported documents and cached audio. Available voices depend on your device and tier; playback-speed control is Premium.",
  },
  {
    q: "Can I turn Kindle books into audiobooks?",
    a: "Not directly. Kindle purchases are locked with DRM, and LoudReader can't open DRM-protected files. It reads standard, DRM-free EPUBs and PDFs. For protected purchases, check the store app’s own reading and accessibility features.",
  },
  {
    q: "Is it free to turn a book into an audiobook this way?",
    a: `Yes. ${FREE_TIER.full} Premium adds ${PRICING.premiumFeatures}. US prices are ${PRICING.premiumMonthly}, ${PRICING.premiumYearly} or ${PRICING.premiumLifetime}; storefront prices can vary.`,
  },
  {
    q: "How long does a book take to listen to?",
    a: "Roughly the word count divided by the narration pace. At about 150 words per minute, a 90,000-word novel runs around 10 hours of listening. Premium's speed control (up to 3.0x) shortens that a lot.",
  },
  {
    q: "Is TTS narration as good as a real audiobook?",
    a: "Honestly, a great human narrator still gives a better performance. But most books never get an audiobook at all, and modern neural voices are natural enough to disappear into the story. If a professional recording of your book exists and you love narration as an art, buy it. LoudReader is for the millions of books that will never be recorded.",
  },
];
