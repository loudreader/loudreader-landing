// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - data/catalog-slugs.json and data/gutenberg-catalog.json: gutenberg_id
//     2701, slug "moby-dick", title "Moby Dick; Or, The Whale", author
//     "Herman Melville", author_years "1819 to 1891", word_count_estimate
//     212700, listening_hours 23.5 (estimated: false, a word-count-derived
//     figure the /listen page itself states as an estimate, not a claimed
//     measured runtime). It is the longest title in this batch of five.
//   - app/listen/[slug]/page.tsx confirms /listen/moby-dick is a real,
//     already-built route with a rendered opening sample (bookSample /
//     SamplePlayer), so "hear a sample before you open the app" is true.
//   - Publication year 1851: standard, widely documented literary fact,
//     not sourced from app data. The famous opening line "Call me
//     Ishmael." is quoted at under 15 words with attribution to Melville,
//     within the site-wide copyright policy for quoting source text.
//   - LoudReader claims (built-in Gutenberg catalog, free unlimited
//     listening, word-by-word highlighting, saved place, natural offline
//     voices, on-device, no account, native Mac and iPhone apps):
//     components/money/site.ts and the same claims already verified in
//     app/blog/(posts)/project-gutenberg-audiobooks/content.ts.
//   - Playback speed (0.3x to 3.0x) is a Premium feature:
//     components/money/site.ts PRICING.premiumFeatures.
// Claims you may NOT make: no narrator name, no cast, no claim this is a
// performed audiobook. No invented sales or "most abandoned book" statistics.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free Moby Dick audiobook?",
    a: "Yes. Moby Dick has been public domain for a long time, so the full text is free on Project Gutenberg, and LoudReader reads it aloud for you at no cost. Open the app, find Moby Dick in the built-in catalog, and press play.",
  },
  {
    q: "Is this a real narrator or a computer voice?",
    a: "It's a synthetic voice, not an actor performing Ishmael's digressive narration in a studio. LoudReader generates the reading on your device with natural offline voices. It won't bring the theatrical range a great human narrator gives Melville's asides on whaling and philosophy, but it reads the entire novel clearly and for free.",
  },
  {
    q: "How long is the Moby Dick audiobook?",
    a: "Around 23.5 hours, based on the novel's roughly 212,700 words, making it the longest title in this batch of free classics. That's an estimate from the text length, not a measured recording, the same figure LoudReader shows on the book's own catalog page.",
  },
  {
    q: "Is Moby Dick hard to listen to as an audiobook?",
    a: "It's long and it wanders on purpose, mixing the whaling plot with chapters that read like essays on cetology and philosophy. Some listeners find that pacing suits audio better than the page, since the digressions land like a storyteller's tangents rather than a wall of text. Try the free sample on the book's catalog page before committing to the full 23.5 hours.",
  },
  {
    q: "Can I listen offline, with no signal?",
    a: "Yes, once the book is open on your device. LoudReader is fully on-device and private, your library never leaves your device, so listening works in airplane mode or anywhere without a connection after the first open.",
  },
];
