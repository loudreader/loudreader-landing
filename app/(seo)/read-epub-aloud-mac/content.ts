// Local content constants for /read-epub-aloud-mac.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE. Every third-party claim below was checked on 2026-07-14
// against first-party pages:
//   - https://support.apple.com/guide/mac-help/have-your-mac-speak-text-thats-on-the-screen-mh27448/mac
//     (macOS "Speak selection": System Settings > Accessibility > Read &
//     Speak; default shortcut Option-Esc; speaks selected text, or available
//     text items in the current window if nothing is selected; optional
//     onscreen controller for speaking rate, skipping sentences, pause/stop;
//     customizable highlighting as text is spoken)
//   - https://speechify.com/pricing/            (Premium $29/month, 60% off
//     billed annually; free tier 10 voices up to 1.5x)
//   - https://speechify.com/text-to-speech-mac/ (dedicated Mac app, sign-in
//     required, text highlighting; Mac app supports English US/UK)
//   - https://elevenreader.io/ + the ElevenReader App Store listing
//     (iOS/Android/web/Chrome extension, no Mac app; free plan = 10 hours of
//     text-to-audio per month; Ultra $11/month or $99/year; offline
//     downloads are an Ultra feature; sign-up required; "Simply upload and
//     press play")
// If any of these change, update the facts AND bump `LAST_UPDATED` here +
// `lastModified` in meta.json.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "read-epub-aloud-mac";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "Third-party facts checked against Apple's macOS User Guide, speechify.com, and elevenreader.io on July 14, 2026";

export const PAGE_TITLE = "How to Read an EPUB Aloud on Mac (3 Ways)";
export const PAGE_DESCRIPTION =
  "Three ways to read an EPUB aloud on your Mac: LoudReader with natural offline voices, the free built-in Speak selection feature, or a cloud text-to-speech app.";

export const H1 = "How to read an EPUB aloud on your Mac";

export const COMPARISON_COLUMNS = [
  "LoudReader",
  "macOS Speak selection",
  "Cloud TTS apps",
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Price",
    cells: [
      "Free tier with unlimited listening; Premium $7.99/month, $49.99/year, or $199.99 once",
      "Free, built into macOS",
      "Speechify Premium: $29/month; ElevenReader Ultra: $11/month",
    ],
  },
  {
    label: "Reads a whole book hands-free",
    cells: [
      "Yes. Open the EPUB, press play, listen cover to cover",
      "Selection-based. You select text and press Option-Esc",
      "Yes, after you upload or import the document",
    ],
  },
  {
    label: "Book library & saved position",
    cells: [
      "Yes, a real library that remembers where you stopped in every book",
      "No. It speaks what's on screen, with no library or memory",
      "Yes, a cloud library tied to your account",
    ],
  },
  {
    label: "Word-by-word highlighting",
    cells: [
      "Yes, synced to the narration",
      "Optional highlighting of text as it's spoken",
      "Yes. Speechify and ElevenReader both highlight text",
    ],
  },
  {
    label: "Account required",
    cells: [
      "No sign-up at all",
      "No",
      "Yes. Speechify's Mac app requires sign-in; ElevenReader requires sign-up",
    ],
  },
  {
    label: "Your book stays on your device",
    cells: [
      "Yes, fully on-device and private",
      "Yes, a built-in accessibility feature with nothing to upload",
      "No. Files are uploaded to the service to be converted or synced",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%. All speech is generated on-device",
      "Yes, uses voices installed on your Mac",
      "Cloud-first. ElevenReader's offline downloads require the Ultra plan",
    ],
  },
  {
    label: "Voices",
    cells: [
      "23 natural offline voices across 10 languages",
      "The system voices installed on your Mac",
      "1000+ cloud voices (Speechify: 60+ languages)",
    ],
  },
  {
    label: "Runs as a Mac app",
    cells: [
      "Yes, as the iPad app on Apple Silicon (macOS 15+)",
      "Yes, part of macOS itself",
      "Speechify: yes (sign-in required). ElevenReader: no Mac app, browser only",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What is the easiest way to read an EPUB aloud on a Mac?",
    a: "Use a dedicated reader app. LoudReader opens any DRM-free EPUB and reads it aloud with natural offline voices and word-by-word highlighting. You import the book, press play, and it remembers your position. It's fully on-device and private, your library never leaves your device, and the free tier includes unlimited listening with no account.",
  },
  {
    q: "Does macOS have built-in text to speech for EPUBs?",
    a: "Yes, indirectly. The Speak selection feature (System Settings > Accessibility > Read & Speak) speaks any text you select on screen when you press Option-Esc, including text in an ebook app. It even offers an onscreen controller and optional highlighting. What it lacks is a book workflow: there's no library, no saved position, and you re-select text as you go.",
  },
  {
    q: "Is it free to have a Mac read an EPUB aloud?",
    a: "Yes, two ways. macOS Speak selection is free and built in. LoudReader's free tier is also genuinely free for books: unlimited listening on every book, cover to cover, with no account and no word quota.",
  },
  {
    q: "Can I listen to DRM-protected EPUBs from Apple Books or Kindle?",
    a: "No, and not in any other third-party reader either. DRM-protected books can only be opened by the store app that sold them. LoudReader reads DRM-free EPUBs and PDFs: Project Gutenberg titles, DRM-free store purchases, and your own files. It also ships with 70,000+ free Project Gutenberg classics built in.",
  },
  {
    q: "What Mac do I need for LoudReader?",
    a: "An Apple Silicon Mac running macOS 15 or later (LoudReader also runs on iPhone and iPad with iOS 18+). On an Intel Mac, use the built-in Speak selection feature or a cloud text-to-speech app in the browser instead.",
  },
  {
    q: "Do I have to upload my EPUB somewhere to hear it?",
    a: "Not with LoudReader. All speech is generated on your Mac, so nothing is uploaded and it works completely offline. Cloud apps like ElevenReader work the other way: you upload the file and the service converts it to audio.",
  },
  {
    q: "Is LoudReader a native Mac app?",
    a: "No, and it is worth being precise about it. LoudReader is an iPhone and iPad app. On an Apple Silicon Mac you install it from the Mac App Store's 'iPhone & iPad Apps' tab, and it runs in Apple's compatibility mode: a fixed-size window rather than a resizable Mac one, and no menu bar. There is no separate Mac build. What is not a compromise is the engine underneath. Speech is generated on your Mac's own silicon, offline, and nothing is uploaded. It needs macOS 15 or later on Apple Silicon; Intel Macs are not supported.",
  },
];
