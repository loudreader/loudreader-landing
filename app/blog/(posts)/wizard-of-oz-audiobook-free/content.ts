// FACT PROVENANCE. Every claim verified on 2026-08-24 against:
//   - Book facts (author, public domain status, Gutenberg availability):
//     data/gutenberg-catalog.json, entry slug "the-wonderful-wizard-of-oz"
//     (gutenberg_id 55, author L. Frank Baum, author_years 1856 to 1919).
//     Same source that powers the /listen/the-wonderful-wizard-of-oz page,
//     so the facts here match that page exactly. Note the book's original
//     title is "The Wonderful Wizard of Oz"; "Wizard of Oz" is how most
//     people search for it and is used as the plain-language name here.
//   - The "about 4.5 hours" listening estimate is LoudReader's own
//     word-count-derived estimate for this title (listening_hours: 4.5 in
//     the same catalog entry), stated as an estimate, not a measured
//     duration of any other edition.
//   - Rendered opening sample on /listen/the-wonderful-wizard-of-oz:
//     confirmed present via components/listen/catalog.ts bookSample()
//     lookup for this slug.
//   - LoudReader app claims: components/money/site.ts (single source of
//     truth), free tier = unlimited listening with one voice, Premium adds
//     all 23 studio narrators across 10 languages, playback speed 0.3x to
//     3.0x, on-device processing (DIFFERENTIATORS.private), native Mac and
//     iPhone apps, no account, imports EPUB/PDF, 70,000+ Gutenberg catalog
//     built in.
//   - No audio export: LoudReader generates narration live on-device and
//     does not produce a downloadable MP3 file.
// Claims you may NOT make until verified: any claim about how the 1939 film
// or any other recorded audiobook of Oz sounds or compares in quality.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of The Wonderful Wizard of Oz?",
    a: "Yes. L. Frank Baum's 1900 novel is in the public domain, so a free audiobook of the actual text is available with no purchase and no subscription. LoudReader has the full book in its built-in catalog and reads it aloud with a natural offline voice on the free tier, and you can hear the opening read aloud on the book's LoudReader page before you install anything.",
  },
  {
    q: "Is this the book or the 1939 movie script?",
    a: "It's the book. The Wonderful Wizard of Oz is Baum's original 1900 novel, which is brisker and stranger than the film, with more of Oz's odd little kingdoms and a different ending for the Wizard. This audiobook reads Baum's actual text, not a movie tie-in adaptation.",
  },
  {
    q: "Is the narration a real person or a synthetic voice?",
    a: "It is a synthetic voice, not a professional narrator. LoudReader converts Baum's public-domain text into audio using an on-device text-to-speech voice. It's clear and easy to follow, but it's not a performed audiobook with an actor voicing Dorothy, the Scarecrow, and the Wizard differently. If a human performance is what you want, LibriVox may have a volunteer-read version to check.",
  },
  {
    q: "Do I need to sign up for anything to listen?",
    a: "No. LoudReader's free tier is unlimited listening with one built-in voice and no account required. The Wonderful Wizard of Oz is already in the app's built-in Project Gutenberg catalog of 70,000+ books, so there's no file to find or convert before you press play.",
  },
  {
    q: "How long is the audiobook?",
    a: "LoudReader's own estimate, based on the book's word count, is about 4.5 hours at normal speed, short enough for a weekend or a couple of commutes. That's an estimate for this synthetic reading, not a measured runtime of any other version, and Premium's speed control (0.3x to 3.0x) shortens or stretches it.",
  },
];
