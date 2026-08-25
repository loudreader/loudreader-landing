// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - Book facts (author, listening-hours estimate, word count):
//     data/gutenberg-catalog.json, entry slug "the-count-of-monte-cristo"
//     (Project Gutenberg ebook #1184, Alexandre Dumas, "The Count of Monte
//     Cristo", ~464,500 words, 51.5-hour listening estimate). Original
//     serialization dates (1844 to 1846) are the book's well-documented
//     publishing history and are not in the JSON, so nothing more specific
//     than that range is claimed.
//   - Catalog page /listen/the-count-of-monte-cristo: confirmed present in
//     data/catalog-slugs.json and as a real route under
//     app/listen/[slug]/page.tsx before linking to it.
//   - LoudReader claims: components/money/site.ts (DIFFERENTIATORS, VOICES,
//     PRICING) and app FAQ, same source as every other article on this site.
//     Free tier = unlimited listening, one voice; Premium unlocks all 23
//     narrators and speed 0.3x to 3.0x.
//   - Honesty note: the /listen page and this article both state plainly
//     that the reading is a synthetic voice, not a performed narration, per
//     the cluster's hard requirement.
// Claims you may NOT make until verified: any specific translator or edition
// beyond "the Gutenberg text", LibriVox-specific detail, CarPlay.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is The Count of Monte Cristo free as an audiobook?",
    a: "Yes. The novel is public domain and free on Project Gutenberg as text. LoudReader has that edition built in and reads it aloud with a natural offline voice, free, with unlimited listening. It's a synthetic voice reading the real text, not a purchased recording.",
  },
  {
    q: "How long is The Count of Monte Cristo as an audiobook?",
    a: "About 51.5 hours at a typical narration pace. The novel runs roughly 464,500 words, which makes it one of the longest audiobooks you're likely to start on purpose. Splitting it across daily commutes or chores turns that length into a season-long project instead of a wall.",
  },
  {
    q: "Is this a real narrator, or a computer voice?",
    a: "A computer voice. LoudReader generates the reading on your device from the actual Gutenberg text using a natural offline voice, and this article says so upfront. It is not a performed audiobook narration. Given the book's length, that also means no narrator fatigue across fifty-plus hours, since the voice is generated fresh, but it also means no dramatized character voices.",
  },
  {
    q: "Do I need to download an audio file to listen?",
    a: "No. You need the LoudReader app, free on the App Store for iPhone and Mac. The Gutenberg catalog is built in, so you search for the book and press play. There is no separate MP3 to find or manage, and playback picks up exactly where you left off.",
  },
  {
    q: "Can I speed it up, given how long it is?",
    a: "Yes, with LoudReader Premium. Playback speed runs from 0.3x to 3.0x, so a listener comfortable at 1.3x or 1.5x can meaningfully shorten a 51.5-hour book. The free tier plays at normal speed with unlimited listening; speed control is one of the Premium features.",
  },
];
