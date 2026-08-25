// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - Book facts (author, listening-hours estimate, word count):
//     data/gutenberg-catalog.json, entry slug "little-women" (Project
//     Gutenberg ebook #37106, Louisa May Alcott, "Little Women; Or, Meg, Jo,
//     Beth, and Amy", ~185,600 words, 20.5-hour listening estimate).
//     Publication years (Part First 1868, Part Second 1869) are the book's
//     well-documented publishing history and are not in the JSON, so nothing
//     more specific is claimed.
//   - Catalog page /listen/little-women: confirmed present in
//     data/catalog-slugs.json and as a real route under
//     app/listen/[slug]/page.tsx before linking to it.
//   - LoudReader claims: components/money/site.ts (DIFFERENTIATORS, VOICES,
//     PRICING) and app FAQ, same source as every other article on this site.
//     Free tier = unlimited listening, one voice; Premium unlocks all 23
//     narrators and speed 0.3x to 3.0x.
//   - Honesty note: the /listen page and this article both state plainly
//     that the reading is a synthetic voice, not a performed narration, per
//     the cluster's hard requirement.
// Claims you may NOT make until verified: any specific edition/abridgment
// detail beyond "the Gutenberg text", LibriVox-specific detail, CarPlay.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is Little Women free as an audiobook?",
    a: "Yes. The novel is public domain and free on Project Gutenberg as text. LoudReader has that edition built in and reads it aloud with a natural offline voice, free, with unlimited listening. It's a synthetic voice reading the real text, not a purchased recording.",
  },
  {
    q: "Is the voice reading it a real narrator?",
    a: "No, and this article says so upfront. LoudReader generates the reading on your device from the actual Gutenberg text using a natural offline voice. It is not a performed audiobook narration with distinct voices for Jo, Meg, Beth, and Amy. If a dramatized performance matters to you for this particular book, a library app or audiobook store is worth checking too.",
  },
  {
    q: "How long is Little Women as an audiobook?",
    a: "About 20.5 hours at a typical narration pace, based on the novel's roughly 185,600 words. That includes both parts (Meg, Jo, Beth, and Amy as girls, and their lives afterward), which Alcott originally published a year apart and which most modern editions, including the Gutenberg text, present as one continuous novel.",
  },
  {
    q: "Do I need to find and download an audio file?",
    a: "No. You need the LoudReader app, free on the App Store for iPhone and Mac. The Gutenberg catalog is built in, so you search for the book and press play, with no separate file to manage.",
  },
  {
    q: "Can I read along while listening?",
    a: "Yes. LoudReader highlights each word as it is spoken, so the text stays in sync with the audio, and your place is saved automatically between sessions.",
  },
];
