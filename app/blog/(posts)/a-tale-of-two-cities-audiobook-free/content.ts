// FACT PROVENANCE. Every claim verified on 2026-08-24 against:
//   - Book facts (author, public domain status, Gutenberg availability):
//     data/gutenberg-catalog.json, entry slug "a-tale-of-two-cities"
//     (gutenberg_id 98, author Charles Dickens, author_years 1812 to 1870).
//     Same source that powers the /listen/a-tale-of-two-cities page, so the
//     facts here match that page exactly.
//   - The "about 15 hours" listening estimate is LoudReader's own
//     word-count-derived estimate for this title (listening_hours: 15 in
//     the same catalog entry), stated as an estimate, not a measured
//     duration of any other edition.
//   - Rendered opening sample on /listen/a-tale-of-two-cities: confirmed
//     present via components/listen/catalog.ts bookSample() lookup for
//     this slug.
//   - LoudReader app claims: components/money/site.ts (single source of
//     truth), free tier = unlimited listening with one voice, Premium adds
//     all 23 studio narrators across 10 languages, playback speed 0.3x to
//     3.0x, on-device processing (DIFFERENTIATORS.private), iPhone, iPad and Apple Silicon Macs, no account, imports EPUB/PDF, 70,000+ Gutenberg catalog
//     built in.
//   - No audio export: LoudReader generates narration live on-device and
//     does not produce a downloadable MP3 file.
// Claims you may NOT make until verified: any claim about how LibriVox's or
// any other recorded version of this book sounds or compares in quality.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of A Tale of Two Cities?",
    a: "Yes. Charles Dickens's novel is in the public domain, so a free audiobook of the actual text is available with no purchase and no subscription. LoudReader has the full book in its built-in catalog and reads it aloud with a natural offline voice on the free tier, and you can hear the opening, including the famous first line, read aloud on the book's LoudReader page before installing anything.",
  },
  {
    q: "Is the narration a real person or a synthetic voice?",
    a: "It's a synthetic voice, not a professional narrator. LoudReader converts Dickens's public-domain text into audio using an on-device text-to-speech voice, reading the whole novel in one consistent voice rather than a dramatized performance with different voices for Sydney Carton, Madame Defarge, and the rest of the cast. If a human reading is what you want, LibriVox may have a volunteer-narrated version worth checking.",
  },
  {
    q: "Does the synthetic voice handle Dickens's long sentences well?",
    a: "It reads them clearly and at a steady pace, exactly as written, with no simplification of Dickens's long clauses or period vocabulary. It won't add dramatic pacing to a long sentence the way a skilled human narrator might, but it reads every word of the actual unabridged text.",
  },
  {
    q: "Do I need an account or subscription to listen?",
    a: "No. LoudReader's free tier is unlimited listening with one built-in voice and no account required. A Tale of Two Cities is already in the app's built-in Project Gutenberg catalog of 70,000+ books, so there's no file to find or convert.",
  },
  {
    q: "How long is the audiobook?",
    a: "LoudReader's own estimate, based on the book's word count, is about 15 hours at normal speed, one of the longer titles in the catalog. That's an estimate for this synthetic reading, not a measured runtime of any other version, and Premium's speed control (0.3x to 3.0x) can shorten or stretch it.",
  },
];
