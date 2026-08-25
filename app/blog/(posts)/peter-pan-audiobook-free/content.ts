// FACT PROVENANCE. Every claim verified on 2027-01-01 against:
//   - Peter Pan (Peter and Wendy) is public domain and on Project Gutenberg
//     (J. M. Barrie, Gutenberg ebook #16): https://www.gutenberg.org/ebooks/16
//   - Author dates, catalog entry, and the listening-time estimate (about
//     5.5 hours) come from data/gutenberg-catalog.json, the same dataset
//     that renders the /listen/peter-pan catalog page on this site.
//     Listening hours are computed from word count, not measured from a
//     recording, so this article calls it an estimate.
//   - LoudReader app-behavior claims come from components/money/site.ts
//     (single source of truth): 70,000+ Gutenberg books browsable in the
//     app, free tier = one natural offline voice with unlimited listening,
//     Premium adds all 23 studio narrators, playback speed 0.3x to 3.0x,
//     sleep timer, soundscapes, and notes. Word-by-word highlighting is a
//     real, non-gated feature per the reference article in this repo
//     (app/blog/(posts)/app-that-highlights-words-while-reading/content.ts).
//   - /listen/peter-pan exists in data/catalog-slugs.json and ships a
//     rendered audio sample.
// Claims you may NOT make until verified: CarPlay, Android, a human
// narrator, or any claim that the app exports audio files to keep.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is Peter Pan free to listen to?",
    a: "Yes. J. M. Barrie's novel Peter and Wendy is public domain, free on Project Gutenberg, and LoudReader reads the full text aloud with a natural offline voice at no cost. The free tier is unlimited listening, not a preview.",
  },
  {
    q: "Is this a professional audiobook narration?",
    a: "No, and this article says so upfront. LoudReader's voice is synthetic, generated on your device as the book plays, not a recording of a human narrator. It reads the whole story straight through, which is different from a performed audiobook where a narrator acts out Peter, Hook, and Tinker Bell in different voices.",
  },
  {
    q: "Is this the original novel or a children's picture-book version?",
    a: "The original novel, Barrie's full 1911 text, Peter and Wendy, exactly as Project Gutenberg carries it (ebook #16). It's a real listen for adults too, not just a bedtime abridgment, and Barrie's narration is sharper and funnier than the shortened versions most people know.",
  },
  {
    q: "How long is Peter Pan as an audiobook?",
    a: "About 5.5 hours, based on the novel's roughly 48,000 words. That's short enough to finish in a couple of evenings or one long drive, which makes it a good place to start if you've never listened to a full book read aloud before.",
  },
  {
    q: "Can I listen to Peter Pan on my iPhone and Mac?",
    a: "Yes. LoudReader has native Mac and iPhone apps, both reading the same book with your place saved, so you can start on one device and finish on the other.",
  },
];
