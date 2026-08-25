// FACT PROVENANCE. Every claim verified on 2027-01-01 against:
//   - The Hound of the Baskervilles is public domain and on Project
//     Gutenberg (Arthur Conan Doyle, Gutenberg ebook #2852):
//     https://www.gutenberg.org/ebooks/2852
//   - Author dates, catalog entry, and the listening-time estimate (about
//     7 hours) come from data/gutenberg-catalog.json, the same dataset
//     that renders the /listen/the-hound-of-the-baskervilles catalog page
//     on this site. Listening hours are computed from word count, not
//     measured from a recording, so this article calls it an estimate.
//   - LoudReader app-behavior claims come from components/money/site.ts
//     (single source of truth): 70,000+ Gutenberg books browsable in the
//     app, free tier = one natural offline voice with unlimited listening,
//     Premium adds all 23 studio narrators, playback speed 0.3x to 3.0x,
//     sleep timer, soundscapes, and notes. Word-by-word highlighting is a
//     real, non-gated feature per the reference article in this repo
//     (app/blog/(posts)/app-that-highlights-words-while-reading/content.ts).
//   - /listen/the-hound-of-the-baskervilles exists in
//     data/catalog-slugs.json and ships a rendered audio sample.
// Claims you may NOT make until verified: CarPlay, Android, a human
// narrator, or any claim that the app exports audio files to keep.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is The Hound of the Baskervilles free to listen to?",
    a: "Yes. Arthur Conan Doyle's novel is public domain, free on Project Gutenberg, and LoudReader reads the full text aloud with a natural offline voice at no cost. The free tier is unlimited listening, not a trial.",
  },
  {
    q: "Is this a professionally performed audiobook?",
    a: "No, and this article says so upfront. LoudReader's narration is a synthetic voice generated on your device as the book plays, not a human actor's recording. If you specifically want a performed reading of Holmes and Watson with distinct character voices, a commercial audiobook edition will give you that. This gives you the complete, unabridged novel, free, whenever you want it.",
  },
  {
    q: "Is it the full novel or an abridged version?",
    a: "The complete original text, exactly as Project Gutenberg carries it under ebook #2852. This is the most celebrated of the Sherlock Holmes novels, and this reading covers all of it, not a shortened retelling.",
  },
  {
    q: "How long is The Hound of the Baskervilles as an audiobook?",
    a: "About 7 hours, based on the novel's roughly 65,000 words. That fits in a handful of evenings or one long drive, on the shorter side for a full novel.",
  },
  {
    q: "Can I listen on my iPhone and my Mac?",
    a: "Yes. LoudReader has native Mac and iPhone apps, both reading the same imported book and remembering your place, so you can switch devices without losing where you were.",
  },
];
