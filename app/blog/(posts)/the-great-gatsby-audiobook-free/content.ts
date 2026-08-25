// FACT PROVENANCE. Every claim verified on 2026-08-25 against:
//   - data/catalog-slugs.json and data/gutenberg-catalog.json: gutenberg_id
//     64317, slug "the-great-gatsby", author "F. Scott Fitzgerald",
//     author_years "1896 to 1940", word_count_estimate 51100,
//     listening_hours 5.5 (estimated: false, a word-count-derived figure the
//     /listen page itself states as an estimate, not a claimed measured
//     runtime).
//   - app/listen/[slug]/page.tsx confirms /listen/the-great-gatsby is a real,
//     already-built route with a rendered opening sample (bookSample /
//     SamplePlayer), so "hear a sample before you open the app" is true.
//   - Publication year 1925 and US public-domain status: The Great Gatsby
//     entered the US public domain on January 1, 2021 (95 years after
//     publication under US copyright term), which is why it only recently
//     joined free catalogs like Project Gutenberg, unlike the 19th-century
//     titles in this same batch. Widely documented fact, not app data.
//   - LoudReader claims (built-in Gutenberg catalog, free unlimited
//     listening, word-by-word highlighting, saved place, natural offline
//     voices, on-device, no account, native Mac and iPhone apps):
//     components/money/site.ts and the same claims already verified in
//     app/blog/(posts)/project-gutenberg-audiobooks/content.ts.
//   - Playback speed (0.3x to 3.0x) is a Premium feature:
//     components/money/site.ts PRICING.premiumFeatures.
// Claims you may NOT make: no narrator name, no cast, no claim this is a
// performed audiobook. No invented sales figures or "most listened" claims.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free Great Gatsby audiobook?",
    a: "Yes. The Great Gatsby entered the public domain in the US in 2021, so the full text is free on Project Gutenberg, and LoudReader reads it aloud for you at no cost. Open the app, find The Great Gatsby in the built-in catalog, and press play.",
  },
  {
    q: "Why wasn't The Great Gatsby free to listen to before?",
    a: "US copyright law protected it for 95 years after publication. Fitzgerald published the novel in 1925, and the term expired at the start of 2021, which is when it joined free public-domain catalogs. That's more recent than the 19th-century classics on Project Gutenberg, which is why some readers assume it isn't free yet.",
  },
  {
    q: "Is this a real narrator or a computer voice?",
    a: "It's a synthetic voice, not an actor performing Nick Carraway's narration in a studio. LoudReader generates the reading on your device with natural offline voices. It won't give you a director's interpretation of Gatsby's parties, but it will read every sentence of Fitzgerald's prose clearly and for free.",
  },
  {
    q: "How long is The Great Gatsby audiobook?",
    a: "Around 5.5 hours, based on the novel's roughly 51,100 words, the shortest book in this list by a wide margin. That's an estimate from the text length, not a measured recording. It's short enough to finish on one long drive or a couple of commutes.",
  },
  {
    q: "Can I listen offline, with no signal?",
    a: "Yes, once the book is open on your device. LoudReader is fully on-device and private, your library never leaves your device, so listening works in airplane mode or anywhere with no connection after the first open.",
  },
];
