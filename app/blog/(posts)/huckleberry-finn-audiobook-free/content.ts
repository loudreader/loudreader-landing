// FACT PROVENANCE. Every claim verified on 2026-08-24 against:
//   - Book facts (author, public domain status, Gutenberg availability):
//     data/gutenberg-catalog.json, entry slug "adventures-of-huckleberry-finn"
//     (gutenberg_id 76, author Mark Twain, author_years 1835 to 1910). Same
//     source that powers the /listen/adventures-of-huckleberry-finn page,
//     so the facts here match that page exactly.
//   - The "about 11.5 hours" listening estimate is LoudReader's own
//     word-count-derived estimate for this title (listening_hours: 11.5 in
//     the same catalog entry), stated as an estimate, not a measured
//     duration of any other edition.
//   - Rendered opening sample on /listen/adventures-of-huckleberry-finn:
//     confirmed present via components/listen/catalog.ts bookSample()
//     lookup for this slug.
//   - LoudReader app claims: components/money/site.ts (single source of
//     truth), free tier = unlimited listening with one voice, Premium adds
//     all 23 studio narrators across 10 languages, playback speed 0.3x to
//     3.0x, on-device processing (DIFFERENTIATORS.private), iPhone, iPad and Apple Silicon Macs, no account, imports EPUB/PDF, 70,000+ Gutenberg catalog
//     built in.
//   - No audio export: LoudReader generates narration live on-device and
//     does not produce a downloadable MP3 file.
// Claims you may NOT make until verified: any claim about how LibriVox's or
// any other recorded version of this book sounds or compares in quality.
// This article does not attempt to represent Huck's regional dialect
// spellings as anything the synthetic voice performs differently; it states
// plainly that one voice reads the whole text as written.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of Adventures of Huckleberry Finn?",
    a: "Yes. Mark Twain's novel is in the public domain, so a free audiobook of the actual text is available with no purchase and no subscription. LoudReader has the full book in its built-in catalog and reads it aloud with a natural offline voice on the free tier, and you can hear the opening read aloud on the book's LoudReader page before installing anything.",
  },
  {
    q: "Is the narration a real person or a synthetic voice?",
    a: "It's a synthetic voice, not a professional narrator. LoudReader converts Twain's public-domain text into audio using an on-device text-to-speech voice. It reads the whole book, including Huck's vernacular narration, exactly as Twain wrote it, in one consistent voice rather than a dramatized performance with a different voice for each character. If a human reading matters to you, LibriVox may have a volunteer-narrated version worth checking.",
  },
  {
    q: "Does the synthetic voice handle Huck's dialect and spelling well?",
    a: "It reads the text as written, including Twain's phonetic spellings for Huck's and Jim's speech. A synthetic voice doesn't perform a regional accent the way a human narrator might, but it does read every word of the actual text rather than a simplified or modernized version.",
  },
  {
    q: "Do I need an account or subscription to listen?",
    a: "No. LoudReader's free tier is unlimited listening with one built-in voice and no account required. Adventures of Huckleberry Finn is already in the app's built-in Project Gutenberg catalog of 70,000+ books, so there's no file to find or convert.",
  },
  {
    q: "How long is the audiobook?",
    a: "LoudReader's own estimate, based on the book's word count, is about 11.5 hours at normal speed. That's an estimate for this synthetic reading, not a measured runtime of any other version, and Premium's speed control (0.3x to 3.0x) changes it either direction.",
  },
];
