// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - data/catalog-slugs.json and data/gutenberg-catalog.json: gutenberg_id
//     84, slug "frankenstein", title "Frankenstein; or, the Modern
//     Prometheus", author "Mary Wollstonecraft Shelley", author_years
//     "1797 to 1851", word_count_estimate 74800, listening_hours 8.5
//     (estimated: false, a word-count-derived figure the /listen page
//     itself states as an estimate, not a claimed measured runtime).
//   - app/listen/[slug]/page.tsx confirms /listen/frankenstein is a real,
//     already-built route with a rendered opening sample (bookSample /
//     SamplePlayer), so "hear a sample before you open the app" is true.
//   - Publication year 1818 and that Shelley wrote it starting at 18 on a
//     ghost-story dare with Byron and Percy Shelley: standard, widely
//     documented literary history, also already stated in the app's own
//     catalog synopsis for this book (data/gutenberg-catalog.json), not
//     invented for this article.
//   - LoudReader claims (built-in Gutenberg catalog, free unlimited
//     listening, word-by-word highlighting, saved place, natural offline
//     voices, on-device, no account, iPhone, iPad, and Apple Silicon Macs):
//     components/money/site.ts and the same claims already verified in
//     app/blog/(posts)/project-gutenberg-audiobooks/content.ts.
//   - Playback speed (0.3x to 3.0x) is a Premium feature:
//     components/money/site.ts PRICING.premiumFeatures.
// Claims you may NOT make: no narrator name, no cast, no claim this is a
// performed audiobook. No invented horror-fandom statistics.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free Frankenstein audiobook?",
    a: "Yes. Frankenstein has been public domain for a long time, so the full text is free on Project Gutenberg, and LoudReader reads it aloud for you at no cost. Open the app, find Frankenstein in the built-in catalog, and press play. No purchase, no library hold.",
  },
  {
    q: "Is this a real narrator or a computer voice?",
    a: "It's a synthetic voice, not an actor performing the creature's confession in a studio. LoudReader generates the reading on your device with natural offline voices, so the letters, Victor's account, and the creature's own voice all come through the same narrator rather than a cast. It won't give you the dramatic shifts a full-cast audio drama would, but it reads the entire novel clearly and for free.",
  },
  {
    q: "How long is the Frankenstein audiobook?",
    a: "Around 8.5 hours, based on the novel's roughly 74,800 words. That's an estimate from the text length, not a measured recording, the same figure LoudReader shows on the book's own catalog page. It's one of the shorter classics in this list.",
  },
  {
    q: "Is the free version the original 1818 text?",
    a: "LoudReader reads the Project Gutenberg edition of Frankenstein, the same public-domain text used across free classic-literature catalogs. Mary Shelley published the novel in 1818, begun two years earlier at eighteen on a ghost-story dare.",
  },
  {
    q: "Can I listen offline, with no signal?",
    a: "Yes, once the book is open on your device. LoudReader is fully on-device and private, your library never leaves your device, so listening works in airplane mode or anywhere without a connection after the first open.",
  },
];
