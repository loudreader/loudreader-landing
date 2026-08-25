// FACT PROVENANCE. Every claim verified on 2027-01-01 against:
//   - The Phantom of the Opera is public domain and on Project Gutenberg
//     (Gaston Leroux, Gutenberg ebook #175):
//     https://www.gutenberg.org/ebooks/175
//   - Author dates, catalog entry, and the listening-time estimate (about
//     9.5 hours) come from data/gutenberg-catalog.json, the same dataset
//     that renders the /listen/the-phantom-of-the-opera catalog page on
//     this site. Listening hours are computed from word count, not
//     measured from a recording, so this article calls it an estimate.
//   - LoudReader app-behavior claims come from components/money/site.ts
//     (single source of truth): 70,000+ Gutenberg books browsable in the
//     app, free tier = one natural offline voice with unlimited listening,
//     Premium adds all 23 studio narrators, playback speed 0.3x to 3.0x,
//     sleep timer, soundscapes, and notes. Word-by-word highlighting is a
//     real, non-gated feature per the reference article in this repo
//     (app/blog/(posts)/app-that-highlights-words-while-reading/content.ts).
//   - /listen/the-phantom-of-the-opera exists in data/catalog-slugs.json
//     and ships a rendered audio sample.
//   - The Phantom of the Opera musical, referenced only as the well-known
//     adaptation the novel differs from, no specifics about the show are
//     claimed beyond it existing.
// Claims you may NOT make until verified: CarPlay, Android, a human
// narrator, or any claim that the app exports audio files to keep.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is The Phantom of the Opera free to listen to?",
    a: "Yes. Gaston Leroux's novel is public domain, free on Project Gutenberg, and LoudReader reads the full text aloud with a natural offline voice at no cost. The free tier is unlimited listening, not a limited preview.",
  },
  {
    q: "Is this the musical, or the original novel?",
    a: "The original novel, Leroux's 1910 text, not the musical or any film adaptation. This is a different, stranger story than the show made famous, and the version this reading covers is the complete original text as Project Gutenberg carries it.",
  },
  {
    q: "Is this a performed audiobook with a human narrator?",
    a: "No, and this article says so upfront. LoudReader generates its narration with a synthetic voice reading the text on your device, not a recording of a human actor. If you want a performed reading with distinct voices for Christine, Raoul, and the Phantom, a commercial audiobook edition will give you that. This gives you the complete novel, free, on demand.",
  },
  {
    q: "How long is The Phantom of the Opera as an audiobook?",
    a: "About 9.5 hours, based on the novel's roughly 84,000 words. That's a solid but manageable listen, comparable to many mid-length commercial audiobooks.",
  },
  {
    q: "Can I listen on both my iPhone and Mac?",
    a: "Yes. LoudReader has native Mac and iPhone apps that share the same imported book and remember your place, so you can move between devices without losing where you left off.",
  },
];
