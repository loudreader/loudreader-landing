// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - Book facts (author, listening-hours estimate, word count):
//     data/gutenberg-catalog.json, entry slug "war-and-peace" (Project
//     Gutenberg ebook #2600, Leo Tolstoy, "War and Peace", ~559,900 words,
//     62-hour listening estimate). Publication year 1869 is the novel's
//     well-documented publishing history and is not in the JSON, so nothing
//     more specific is claimed. Translator is not stated anywhere in this
//     article because it is not recorded in the JSON and was not otherwise
//     verified.
//   - Catalog page /listen/war-and-peace: confirmed present in
//     data/catalog-slugs.json and as a real route under
//     app/listen/[slug]/page.tsx before linking to it.
//   - LoudReader claims: components/money/site.ts (DIFFERENTIATORS, VOICES,
//     PRICING) and app FAQ, same source as every other article on this site.
//     Free tier = unlimited listening, one voice; Premium unlocks all 23
//     narrators and speed 0.3x to 3.0x.
//   - Honesty note: the /listen page and this article both state plainly
//     that the reading is a synthetic voice, not a performed narration, per
//     the cluster's hard requirement.
// Claims you may NOT make until verified: translator/edition identity,
// LibriVox-specific detail, CarPlay.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is War and Peace free as an audiobook?",
    a: "Yes. The novel is public domain and free on Project Gutenberg as text. LoudReader has that edition built in and reads it aloud with a natural offline voice, free, with unlimited listening. It's a synthetic voice reading the real text, not a purchased or borrowed recording.",
  },
  {
    q: "How long is War and Peace as an audiobook?",
    a: "About 62 hours at a typical narration pace, based on the novel's roughly 559,900 words. That makes it one of the longest books most people will ever listen to, which is exactly why audio suits it: spread across a commute, sixty-plus hours turns from an intimidating page count into a season of listening.",
  },
  {
    q: "Is the reading performed by a real narrator?",
    a: "No, and this article says so upfront. LoudReader generates the reading on your device from the actual Gutenberg text using a natural offline voice. It is not a performed audiobook, and it doesn't give the many Russian characters distinct voices. Given the length, that also means no narrator fatigue across the full novel, since the voice is generated fresh throughout.",
  },
  {
    q: "Do I need to manage a giant audio file to listen?",
    a: "No. You need the LoudReader app, free on the App Store for iPhone and Mac. The Gutenberg catalog is built in, so you search for the book and press play. There's no file to download or store, and your place is saved automatically between sessions.",
  },
  {
    q: "Does listening actually make War and Peace easier to follow?",
    a: "Many readers find it does, mostly because of the sprawling cast of Russian names. Hearing them said consistently helps them sort themselves out over the first several hours in a way that skimming a printed character list often doesn't. Nothing about the app changes the book's structure; this is a general observation about audio and long Russian novels, not a claim specific to LoudReader.",
  },
];
