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

export const SLUG = "turn-any-book-into-an-audiobook";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "Product facts checked against the App Store listing and loudreader.io on July 14, 2026";

export const PAGE_TITLE = "Turn Any Book Into an Audiobook on Mac & iPhone";
export const PAGE_DESCRIPTION =
  "Turn any DRM-free EPUB or PDF into an audiobook in about a minute: import it into LoudReader and press play. Natural offline voices, no file conversion, no uploads.";

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
      "Free tier: unlimited listening on every book; Premium from $7.99/month",
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
      "Fully on-device and private, your library never leaves your device; no account",
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
    a: "Install LoudReader on your Mac or iPhone, import the book (any DRM-free EPUB or PDF, shared from Files, Safari, or Mail, or added with the import button), and press play. Natural offline voices read it aloud in real time with word-by-word highlighting. There's no file conversion and nothing to export.",
  },
  {
    q: "Do I need to convert my EPUB or PDF into MP3 files?",
    a: "No. LoudReader narrates the book in real time on your device, so there are no audio files to generate or keep in sync. You keep the highlighting, your reading position, and the ability to switch voice or speed whenever you want.",
  },
  {
    q: "Can I turn Kindle books into audiobooks?",
    a: "Not directly. Kindle purchases are locked with DRM, and LoudReader can't open DRM-protected files. It reads standard, DRM-free EPUBs and PDFs. Any legitimate text-to-speech reader has the same limit.",
  },
  {
    q: "Is it free to turn a book into an audiobook this way?",
    a: "Yes. The free tier includes unlimited listening on every book, cover to cover, with no word quota and no account, plus 70,000+ free Project Gutenberg classics built in. Premium adds all 23 studio narrators, playback speed (0.3x to 3.0x), a sleep timer, soundscapes, and notes & highlights for $7.99/month, $49.99/year, or $199.99 once.",
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
