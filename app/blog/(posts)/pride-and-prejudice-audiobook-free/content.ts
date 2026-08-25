// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - data/catalog-slugs.json and data/gutenberg-catalog.json: gutenberg_id
//     1342, slug "pride-and-prejudice", author "Jane Austen", author_years
//     "1775 to 1817", word_count_estimate 128700, listening_hours 14.5
//     (estimated: false, i.e. a real word-count-derived figure the /listen
//     page itself states as an estimate, not a claimed measured runtime).
//   - app/listen/[slug]/page.tsx confirms /listen/pride-and-prejudice is a
//     real, already-built route with a rendered opening sample (bookSample /
//     SamplePlayer), so "hear a sample before you open the app" is true.
//   - Publication year 1813: standard, widely documented literary fact
//     about Pride and Prejudice, not sourced from app data.
//   - LoudReader claims (built-in Gutenberg catalog browsable by genre and
//     author, free unlimited listening, word-by-word highlighting, saved
//     place, natural offline voices, on-device, no account, native Mac and
//     iPhone apps): components/money/site.ts and the same claims already
//     verified in app/blog/(posts)/project-gutenberg-audiobooks/content.ts
//     and app/blog/(posts)/listen-to-books-while-driving/content.ts.
//   - Playback speed (0.3x to 3.0x) is a Premium feature: components/money/site.ts
//     PRICING.premiumFeatures. Free tier plays at normal speed.
// Claims you may NOT make: no narrator name, no cast, no claim this is a
// performed audiobook. No invented review or popularity statistic beyond
// the download_count figure, which this article does not use.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free Pride and Prejudice audiobook?",
    a: "Yes. Pride and Prejudice has been public domain for a long time, so the full text is free on Project Gutenberg, and LoudReader reads it aloud for you at no cost. Open the app, find Pride and Prejudice in the built-in catalog, and press play. No purchase, no rental, no library hold.",
  },
  {
    q: "Is this a real narrator or a computer voice?",
    a: "It's a synthetic voice, not a professional narrator reading a script in a studio. LoudReader generates the narration on your device using natural offline voices, so it sounds different from a performed Audible-style audiobook. If Austen's dialogue only works for you with a human actor's comic timing, that's a fair reason to look elsewhere. If you just want the book read aloud clearly and for free, it does the job.",
  },
  {
    q: "How long is the Pride and Prejudice audiobook?",
    a: "Around 14.5 hours, based on the book's roughly 128,700 words. That's an estimate from the text length, the same way the listening-time figure works on LoudReader's own Pride and Prejudice catalog page, not a measured recording runtime.",
  },
  {
    q: "Do I need to buy or import an EPUB to listen?",
    a: "No, not for this one. Pride and Prejudice is already built into LoudReader's free Project Gutenberg catalog, so there's nothing to download or convert first. You can still import your own EPUB or PDF of any other book the same way, but this particular title is ready the moment you open the app.",
  },
  {
    q: "Can I listen offline, on a plane or with no signal?",
    a: "Yes, once the book is on your device. LoudReader is fully on-device and private, your library never leaves your device, so after you open Pride and Prejudice once, listening works in airplane mode, on the subway, or anywhere without a connection.",
  },
];
