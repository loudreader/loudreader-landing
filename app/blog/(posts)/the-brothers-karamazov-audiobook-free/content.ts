// FACT PROVENANCE. Every claim verified on 2027-01-01 against:
//   - The Brothers Karamazov is public domain and on Project Gutenberg
//     (Constance Garnett translation, Gutenberg ebook #28054):
//     https://www.gutenberg.org/ebooks/28054
//   - Author dates, catalog entry, and the listening-time estimate (about
//     38 hours) come from data/gutenberg-catalog.json, the same dataset
//     that renders the /listen/the-brothers-karamazov catalog page on this
//     site. Listening hours are computed from word count, not measured
//     from a recording, so this article calls it an estimate.
//   - LoudReader app-behavior claims come from components/money/site.ts
//     (single source of truth): 70,000+ Gutenberg books browsable in the
//     app, free tier = one natural offline voice with unlimited listening,
//     Premium adds all 23 studio narrators, playback speed 0.3x to 3.0x,
//     sleep timer, soundscapes, and notes. Word-by-word highlighting is a
//     real, non-gated feature per the reference article in this repo
//     (app/blog/(posts)/app-that-highlights-words-while-reading/content.ts,
//     itself verified against LoudReader_mac's ReaderStylesheet.swift and
//     Engines/HighlightSchedule.swift).
//   - /listen/the-brothers-karamazov exists in data/catalog-slugs.json and
//     ships a rendered audio sample (components/listen/catalog + the page
//     itself), which is why this article can honestly say "hear a sample
//     before you commit."
// Claims you may NOT make until verified: CarPlay, Android, a human
// narrator, or any claim that the app exports audio files to keep.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is The Brothers Karamazov free to listen to?",
    a: "Yes. Dostoyevsky died in 1881, and the novel has been public domain for a long time, so every route to it costs nothing. LoudReader reads the full Project Gutenberg text aloud with a natural offline voice, and the free tier is unlimited listening, not a sample or a trial.",
  },
  {
    q: "Is this a professionally narrated audiobook?",
    a: "No, and it's worth saying plainly. LoudReader generates the narration with a synthetic voice reading the public-domain text on your device, live, as you listen. It is not a human actor's performance, so if you specifically want a studio recording with different voices for each brother, look for a commercial audiobook edition instead. What you get here is a real, complete reading of the whole novel, free, with your choice of when to press play.",
  },
  {
    q: "How long is The Brothers Karamazov as an audiobook?",
    a: "Around 38 hours, based on the book's roughly 340,000 words. That's a big listen by any measure, closer to a long TV season than a weekend read, so most people work through it over several weeks rather than in one sitting.",
  },
  {
    q: "Which translation does LoudReader use?",
    a: "The Constance Garnett translation, which is the one Project Gutenberg carries as ebook #28054. It's the most widely read English translation of the novel and the one nearly every free digital edition uses.",
  },
  {
    q: "Can I listen on my phone and my Mac?",
    a: "Yes. LoudReader has native Mac and iPhone apps, and both read the same imported book, so you can start The Brothers Karamazov on your commute and pick it back up at your desk. It remembers your place either way.",
  },
];
