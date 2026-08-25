// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - Book facts (author, story count, listening-hours estimate, word count):
//     data/gutenberg-catalog.json, entry slug "the-adventures-of-sherlock-holmes"
//     (Project Gutenberg ebook #1661, Arthur Conan Doyle, "The Adventures of
//     Sherlock Holmes", 12 stories). Publication year 1892 is the book's
//     well-documented first-collection date and is not in the JSON, so it is
//     stated as general public-domain publishing history, nothing more
//     specific is claimed.
//   - Catalog page /listen/the-adventures-of-sherlock-holmes: confirmed
//     present in data/catalog-slugs.json and as a real route under
//     app/listen/[slug]/page.tsx before linking to it.
//   - LoudReader claims: components/money/site.ts (DIFFERENTIATORS, VOICES,
//     PRICING) and app FAQ, same source as every other article on this site.
//     Free tier = unlimited listening, one voice; Premium unlocks all 23
//     narrators and speed 0.3x to 3.0x.
//   - Honesty note: the /listen page and this article both state plainly
//     that the reading is a synthetic voice, not a performed narration, per
//     the cluster's hard requirement. No claim of "professional narrator" or
//     similar is made anywhere.
// Claims you may NOT make until verified: exact publication date beyond
// "1892", any LibriVox-specific detail, CarPlay.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free Sherlock Holmes audiobook?",
    a: "Yes. The Adventures of Sherlock Holmes is public domain and free on Project Gutenberg as text. LoudReader has that catalog built in and reads it aloud with a natural offline voice, for free, with unlimited listening. It is not a purchased or borrowed recording, it is a synthetic voice reading the real text.",
  },
  {
    q: "Is this a real narrator or a computer voice?",
    a: "A computer voice, and the article says so upfront. LoudReader generates the reading on your device from the actual Gutenberg text using a natural offline voice. It is not a human audiobook performance. For many listeners that trade is fine, especially for a book they already know from adaptations. For others, a performed reading from a library app or audiobook store is worth seeking out instead.",
  },
  {
    q: "How long is The Adventures of Sherlock Holmes as an audiobook?",
    a: "About 11.5 hours at a typical narration pace, based on the book's roughly 101,000 words. Each of the 12 stories runs around 40 to 50 minutes on its own, so it works well in short sessions rather than one long sitting.",
  },
  {
    q: "Do I need to download anything to listen?",
    a: "You need the LoudReader app, free on the App Store for iPhone and Mac. Inside the app, the Gutenberg catalog is built in, so you search for the book and press play. No separate audio file, no account, no conversion step.",
  },
  {
    q: "Can I read along while it plays?",
    a: "Yes. LoudReader highlights each word as it is spoken, so the text and the audio stay in sync. That is useful for catching Victorian vocabulary you might otherwise mishear, and for picking up exactly where you left off.",
  },
];
