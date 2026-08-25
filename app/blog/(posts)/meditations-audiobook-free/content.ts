// FACT PROVENANCE. Every claim verified on 2026-08-24 against:
//   - Book facts (author, public domain status, Gutenberg availability):
//     data/gutenberg-catalog.json, entry slug "meditations" (gutenberg_id
//     2680, author Marcus Aurelius, author_years 121 to 180). Same source
//     that powers the /listen/meditations page, so the facts here match
//     that page exactly. The Gutenberg edition is the George Long English
//     translation, which is what any English-text-to-speech reading of
//     this Gutenberg text will read; the article does not claim a specific
//     translator by name beyond what the catalog data implies, and makes
//     no claim about which translation is "best."
//   - The "about 8 hours" listening estimate is LoudReader's own
//     word-count-derived estimate for this title (listening_hours: 8 in
//     the same catalog entry), stated as an estimate, not a measured
//     duration of any other edition.
//   - Rendered opening sample on /listen/meditations: confirmed present via
//     components/listen/catalog.ts bookSample() lookup for this slug.
//   - LoudReader app claims: components/money/site.ts (single source of
//     truth), free tier = unlimited listening with one voice, Premium adds
//     all 23 studio narrators across 10 languages, playback speed 0.3x to
//     3.0x, on-device processing (DIFFERENTIATORS.private), native Mac and
//     iPhone apps, no account, imports EPUB/PDF, 70,000+ Gutenberg catalog
//     built in.
//   - No audio export: LoudReader generates narration live on-device and
//     does not produce a downloadable MP3 file.
// Claims you may NOT make until verified: any claim about how LibriVox's or
// any other recorded version of this translation sounds or compares in
// quality, and no claim about which English translation is definitive.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of Meditations by Marcus Aurelius?",
    a: "Yes. Meditations is in the public domain and Project Gutenberg hosts an English translation of it, so a free audiobook of the actual text is available with no purchase and no subscription. LoudReader has the full book in its built-in catalog and reads it aloud with a natural offline voice on the free tier, and you can hear the opening read aloud on the book's LoudReader page before installing anything.",
  },
  {
    q: "Is the narration a real person or a synthetic voice?",
    a: "It's a synthetic voice, not a professional narrator. LoudReader converts the public-domain English text into audio using an on-device text-to-speech voice. It reads clearly and steadily, which suits a book meant to be dipped into a few entries at a time rather than performed dramatically. If a human reading is what you want, LibriVox may have a volunteer-narrated version worth checking.",
  },
  {
    q: "Does it matter that Meditations has no plot, for a listen?",
    a: "It actually helps. Meditations is a private notebook of short reflections, not a narrative, so there's no thread to lose if you listen in short sessions, skip around, or start partway through. A synthetic voice reading it aloud at a steady, even pace suits that structure well: you can drop in on a walk or a commute and pick up anywhere.",
  },
  {
    q: "Do I need an account or subscription to listen?",
    a: "No. LoudReader's free tier is unlimited listening with one built-in voice and no account required. Meditations is already in the app's built-in Project Gutenberg catalog of 70,000+ books, so there's no file to find or convert.",
  },
  {
    q: "How long is the audiobook?",
    a: "LoudReader's own estimate, based on the book's word count, is about 8 hours at normal speed, though since Meditations has no plot, most listeners dip into it in short sessions rather than straight through. That's an estimate for this synthetic reading, not a measured runtime of any other version, and Premium's speed control (0.3x to 3.0x) changes it either direction.",
  },
];
