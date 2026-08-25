// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - Book facts (author, author_years, listening-hours estimate, word
//     count): data/gutenberg-catalog.json, entry slug "the-odyssey" (Project
//     Gutenberg ebook #1727, Homer, author_years "750 BC to 650 BC",
//     ~119,600 words, 13.5-hour listening estimate). The synopsis field in
//     that same entry states the poem "was performed aloud for centuries
//     before anyone wrote it down", used here as the article's framing for
//     why listening suits it. No specific translator name is stated in this
//     article, because it is not recorded in the JSON and was not otherwise
//     verified.
//   - Catalog page /listen/the-odyssey: confirmed present in
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
    q: "Is The Odyssey free as an audiobook?",
    a: "Yes. The Gutenberg edition of The Odyssey is public domain and free as text, and LoudReader has it built in and reads it aloud with a natural offline voice, free, with unlimited listening. It's a synthetic voice reading the actual translation, not a purchased recording.",
  },
  {
    q: "Is the reading performed by a real narrator?",
    a: "No, and this article says so upfront. LoudReader generates the reading on your device from the actual Gutenberg text using a natural offline voice. It is not a performed audiobook narration, and it doesn't dramatize the poem's different voices or scenes. If you specifically want a performed reading, check an audiobook store or a library app like Libby, since The Odyssey is popular enough that recordings usually exist.",
  },
  {
    q: "How long is The Odyssey as an audiobook?",
    a: "About 13.5 hours at a typical narration pace, based on the Gutenberg prose translation's roughly 119,600 words. That is short enough to finish in a normal week of commuting, which is unusual for an epic with this much reputation attached to it.",
  },
  {
    q: "Wasn't The Odyssey originally meant to be heard, not read?",
    a: "Yes. Homer's epic was composed and performed aloud for an audience for centuries before it was written down. Listening to it, even with a synthetic voice reading a written translation rather than a bard performing it, is closer to how the poem was originally experienced than silently reading it off a page.",
  },
  {
    q: "Do I need to download anything to listen?",
    a: "You need the LoudReader app, free on the App Store for iPhone and Mac. The Gutenberg catalog is built in, so you search for the book and press play, with no separate audio file to find or manage.",
  },
];
