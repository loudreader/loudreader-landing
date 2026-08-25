// FACT PROVENANCE. Every claim verified on 2026-08-24 against:
//   - Book facts (author, public domain status, Gutenberg availability):
//     data/gutenberg-catalog.json, entry slug "treasure-island"
//     (gutenberg_id 120, author Robert Louis Stevenson, author_years
//     1850 to 1894). Same source that powers the /listen/treasure-island
//     page, so the facts here match that page exactly.
//   - The "about 7.5 hours" listening estimate is LoudReader's own
//     word-count-derived estimate for this title (listening_hours: 7.5 in
//     the same catalog entry), stated as an estimate, not a measured
//     duration and not a claim about any other narration.
//   - Rendered opening sample on /listen/treasure-island: confirmed present
//     via components/listen/catalog.ts bookSample() lookup for this slug.
//   - LoudReader app claims: components/money/site.ts (single source of
//     truth), free tier = unlimited listening with one voice, Premium adds
//     all 23 studio narrators across 10 languages, playback speed 0.3x to
//     3.0x, on-device processing (DIFFERENTIATORS.private), native Mac and
//     iPhone apps, no account, imports EPUB/PDF, 70,000+ Gutenberg catalog
//     built in.
//   - No audio export: LoudReader generates narration live on-device and
//     does not produce a downloadable MP3 file (consistent with the same
//     honest note in app/blog/(posts)/best-audiobook-app-for-classics).
// Claims you may NOT make until verified: any claim about how Treasure
// Island's LibriVox or other human recordings sound or compare in quality.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of Treasure Island?",
    a: "Yes. Treasure Island is in the public domain, so you can listen to it free with no purchase and no subscription. LoudReader reads the full Project Gutenberg text aloud with a natural offline voice, at no cost on the free tier, and you can hear the opening read aloud right now on the book's LoudReader catalog page.",
  },
  {
    q: "Is this a real narrator or a synthetic voice?",
    a: "It is a synthetic voice, not a professional narrator. LoudReader turns the public-domain text of Treasure Island into audio using an on-device text-to-speech voice. It is clear and natural to listen to, but it is not a performed audiobook with a human actor doing the character voices. If that distinction matters to you, LibriVox may have a volunteer-read version, and this is not that.",
  },
  {
    q: "Do I need an account or subscription to listen?",
    a: "No. LoudReader's free tier gives you unlimited listening with one built-in voice and no account required. Import is instant because Treasure Island is already in LoudReader's built-in Project Gutenberg catalog of 70,000+ books, so there's no file to find or convert.",
  },
  {
    q: "Can I listen to Treasure Island offline, like on a flight or a hike?",
    a: "Yes. LoudReader is fully on-device and private, your library never leaves your device, so once the book is open, playback works with no internet connection at all.",
  },
  {
    q: "How long is the Treasure Island audiobook?",
    a: "LoudReader's own estimate, based on the book's word count, puts it at about 7.5 hours at normal speed. That is an estimate for this synthetic reading, not a measured runtime of any other edition, and Premium's speed control (0.3x to 3.0x) changes it either direction.",
  },
];
