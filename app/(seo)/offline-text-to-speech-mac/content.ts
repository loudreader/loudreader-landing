// Local content constants for /offline-text-to-speech-mac.
// One page = one file pair (page.tsx + content.ts) + meta.json.
// See docs/money-page-contract.md for the contract.
//
// FACT PROVENANCE. Every non-LoudReader claim below was checked on 2026-07-14:
//   - https://support.apple.com/guide/mac-help/mh27448/mac
//     (Apple macOS User Guide: "Have your Mac speak text that's on the
//     screen" confirms the built-in feature lives under System Settings →
//     Accessibility → Read & Speak (labelled Spoken Content on earlier
//     macOS), the default Speak-selection shortcut is Option-Esc, an
//     on-screen controller can appear with speaking-rate controls, voices
//     are selectable with more downloadable, and words/sentences can be
//     highlighted as they are spoken.)
//   - The `say` command-line tool is part of every macOS install
//     (run `man say` in Terminal).
// LoudReader claims verified against components/money/site.ts, the App Store
// listing, and app/faq/faq-data.ts in this repo.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "offline-text-to-speech-mac";

export const LAST_UPDATED = "2026-07-14";
export const FACTS_CHECKED_NOTE =
  "macOS Spoken Content facts checked against Apple's macOS User Guide (support.apple.com) on July 14, 2026";

export const PAGE_TITLE = "Offline Text to Speech on Mac: No Cloud Needed";
export const PAGE_DESCRIPTION =
  "Your Mac can read aloud fully offline: the built-in Spoken Content feature, or LoudReader for books, PDFs, and articles with natural offline voices. No cloud, no account.";

export const H1 = "Offline text to speech on your Mac, no cloud required";

export const COMPARISON_COLUMNS = ["LoudReader", "macOS Spoken Content (built in)"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Best for",
    cells: [
      "Long-form listening: whole books, PDFs, and articles",
      "Quick passages: an email, a paragraph, a web page section",
    ],
  },
  {
    label: "How you use it",
    cells: [
      "Import an EPUB or PDF (or paste an article link), press play",
      "Select text anywhere, press Option + Esc",
    ],
  },
  {
    label: "Voices",
    cells: [
      "8 natural offline voices, modern neural TTS generated on your Mac",
      "System voices, with more downloadable in Accessibility settings",
    ],
  },
  {
    label: "Library & resume",
    cells: [
      "Yes. Your library keeps every book and document with its reading position",
      "No. It speaks the current selection, and nothing is saved",
    ],
  },
  {
    label: "Highlighting",
    cells: [
      "Word-by-word highlighting synced to the narration",
      "Optional word/sentence highlighting while speaking",
    ],
  },
  {
    label: "Works offline",
    cells: [
      "100%. All speech is generated on-device",
      "Yes, speech is generated on your Mac",
    ],
  },
  {
    label: "Mac requirements",
    cells: [
      "macOS 15+ on Apple Silicon",
      "Any Mac, it's part of macOS",
    ],
  },
  {
    label: "Price",
    cells: [
      "Free tier with unlimited listening; Premium from $7.99/month or $199.99 once",
      "Free, included with macOS",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Can my Mac do text to speech without an internet connection?",
    a: "Yes, two ways. macOS has a built-in Spoken Content feature (System Settings → Accessibility) that speaks selected text with Option + Esc, fully offline. And LoudReader, a native Mac app, reads whole books, PDFs, and articles aloud with natural offline voices. All speech is generated on your Mac, so it works with Wi-Fi switched off.",
  },
  {
    q: "Is LoudReader's text to speech really offline?",
    a: "Yes, 100%. The neural text-to-speech engine runs on your Mac's own hardware and generates every word locally. The simplest proof: switch off Wi-Fi and it keeps reading. The only thing that needs internet is downloading free books from the built-in Project Gutenberg catalog.",
  },
  {
    q: "Which Macs can run LoudReader?",
    a: "LoudReader needs macOS 15 or later on Apple Silicon (M1 or newer). On an Intel Mac, use the built-in Spoken Content feature instead. It works on any Mac.",
  },
  {
    q: "Can it read a whole book or PDF aloud on my Mac?",
    a: "Yes, that's exactly what LoudReader is built for. Import any DRM-free EPUB or PDF and it reads the book aloud with word-by-word highlighting, remembering your place. A built-in catalog also offers 70,000+ free Project Gutenberg classics.",
  },
  {
    q: "Does offline text to speech on Mac cost anything?",
    a: "The macOS Spoken Content feature is free with every Mac. LoudReader's free tier includes unlimited listening on every book cover to cover with no word quota and no account; Premium (all 8 AI voices, playback speed 0.3x to 3.0x, sleep timer, soundscapes, notes) is $7.99/month, $49.99/year, or $199.99 once.",
  },
  {
    q: "Why choose offline TTS over a cloud service like Speechify?",
    a: "Three reasons: it works anywhere (planes, trains, dead zones), there are no word quotas or metering because nothing runs on someone else's servers, and it's private. With LoudReader, your library never leaves your device. Cloud services counter with more languages and voices, so it depends on what you read.",
  },
];
