// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - data/catalog-slugs.json and data/gutenberg-catalog.json: gutenberg_id
//     345, slug "dracula", author "Bram Stoker", author_years
//     "1847 to 1912", word_count_estimate 148400, listening_hours 16.5
//     (estimated: false, a word-count-derived figure the /listen page
//     itself states as an estimate, not a claimed measured runtime). The
//     catalog synopsis for this book also describes it as told through
//     "diaries, letters, phonograph recordings, and newspaper clippings",
//     which this article restates, not invents.
//   - app/listen/[slug]/page.tsx confirms /listen/dracula is a real,
//     already-built route with a rendered opening sample (bookSample /
//     SamplePlayer), so "hear a sample before you open the app" is true.
//   - Publication year 1897: standard, widely documented literary fact,
//     not sourced from app data.
//   - LoudReader claims (built-in Gutenberg catalog, free unlimited
//     listening, word-by-word highlighting, saved place, natural offline
//     voices, on-device, no account, iPhone, iPad, and Apple Silicon Macs):
//     components/money/site.ts and the same claims already verified in
//     app/blog/(posts)/project-gutenberg-audiobooks/content.ts and
//     app/blog/(posts)/listen-to-books-while-driving/content.ts (background
//     playback, lock-screen controls: LoudReader/Info.plist,
//     LoudReader/PlayerService.swift).
//   - Playback speed (0.3x to 3.0x) is a Premium feature:
//     components/money/site.ts PRICING.premiumFeatures.
// Claims you may NOT make: no narrator name, no cast, no claim this is a
// performed audiobook. No invented horror-fandom or sales statistics.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free Dracula audiobook?",
    a: "Yes. Dracula has been public domain for a long time, so the full text is free on Project Gutenberg, and LoudReader reads it aloud for you at no cost. Open the app, find Dracula in the built-in catalog, and press play.",
  },
  {
    q: "Is this a real narrator or a computer voice?",
    a: "It's a synthetic voice, not an actor performing each character's diary entry in a studio. Dracula is told entirely through letters, journals, and newspaper clippings from different narrators, and LoudReader reads all of them in the same voice rather than a distinct cast. It won't build atmosphere the way a full audio drama would, but it reads the entire novel clearly and for free.",
  },
  {
    q: "How long is the Dracula audiobook?",
    a: "Around 16.5 hours, based on the novel's roughly 148,400 words. That's an estimate from the text length, not a measured recording, the same figure LoudReader shows on the book's own catalog page.",
  },
  {
    q: "Can I listen to Dracula in the car or while walking?",
    a: "Yes. LoudReader keeps playing with the screen locked and shows play, pause, and skip controls on the lock screen, so it works the same way a podcast or downloaded audiobook does for a commute or a walk.",
  },
  {
    q: "Can I listen offline, with no signal?",
    a: "Yes, once the book is open on your device. LoudReader is fully on-device and private, your library never leaves your device, so listening works in airplane mode or anywhere without a connection after the first open.",
  },
];
