// FACT PROVENANCE. Every claim verified on 2027-01-01 against:
//   - Gulliver's Travels is public domain and on Project Gutenberg
//     (Jonathan Swift, Gutenberg ebook #17157):
//     https://www.gutenberg.org/ebooks/17157
//   - Author dates, catalog entry, and the listening-time estimate (about
//     6 hours) come from data/gutenberg-catalog.json, the same dataset
//     that renders the /listen/gullivers-travels catalog page on this
//     site. Listening hours are computed from word count, not measured
//     from a recording, so this article calls it an estimate.
//   - LoudReader app-behavior claims come from components/money/site.ts
//     (single source of truth): 70,000+ Gutenberg books browsable in the
//     app, free tier = one natural offline voice with unlimited listening,
//     Premium adds all 23 studio narrators, playback speed 0.3x to 3.0x,
//     sleep timer, soundscapes, and notes. Word-by-word highlighting is a
//     real, non-gated feature per the reference article in this repo
//     (app/blog/(posts)/app-that-highlights-words-while-reading/content.ts).
//   - /listen/gullivers-travels exists in data/catalog-slugs.json and
//     ships a rendered audio sample.
// Claims you may NOT make until verified: CarPlay, Android, a human
// narrator, or any claim that the app exports audio files to keep.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is Gulliver's Travels free to listen to?",
    a: "Yes. Jonathan Swift's novel is public domain, free on Project Gutenberg, and LoudReader reads the full text aloud with a natural offline voice at no cost. The free tier is unlimited listening, not a limited preview.",
  },
  {
    q: "Is this a performed audiobook or a synthetic voice?",
    a: "A synthetic voice, and this article says so upfront. LoudReader generates the narration on your device as the book plays. It is not a human actor's recording, so if you want a performed reading with a distinct voice for the deadpan comedy of Gulliver's report, a commercial audiobook edition will give you that. What you get here is the complete text, narrated for free, whenever you want it.",
  },
  {
    q: "Is this the full novel, or a shortened children's version?",
    a: "The full 1726 text, all four voyages, Lilliput, Brobdingnag, Laputa, and the land of the Houyhnhnms, exactly as Project Gutenberg carries it. Many editions kids read are abridged to just the Lilliput section; the complete novel is a much sharper satire and worth hearing in full.",
  },
  {
    q: "How long is Gulliver's Travels as an audiobook?",
    a: "About 6 hours, based on the book's roughly 52,000 words. That's manageable in a handful of commutes or a couple of long evenings, closer to a novella-length listen than a major commitment.",
  },
  {
    q: "Can I listen on both my iPhone and Mac?",
    a: "Yes. LoudReader runs on iPhone, iPad, and Apple Silicon Macs that share the same imported book and remember your place, so you can move between devices without losing where you were.",
  },
];
