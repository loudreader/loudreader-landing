// FACT PROVENANCE. Verified on 2026-08-24 against data/gutenberg-catalog.json
// (the same catalog that generates the live /listen pages, built by
// scripts/build-gutenberg-catalog.mjs): every title, author, and estimated
// listening-hours figure named below is a real entry in that file, and every
// /listen/<slug> link points at a route that exists in the catalog
// (verified with `ls app/listen` route generation via getAllBooks()). Hours
// are the catalog's own word-count-derived estimate at 1x speed, so they are
// labeled "estimated" here exactly as the catalog itself labels them, not
// presented as a measured benchmark.
//   - Built-in catalog size (70,000+ books), free unlimited listening,
//     natural offline voices, on-device narration: components/money/site.ts.
//   - Playback speed 0.3x to 3.0x is Premium: components/money/site.ts.
// No plot summaries beyond a one-line description already implied by the
// catalog's own genre/subject tags; this article is a browsing aid, not a
// book report.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What's a good short book to listen to first?",
    a: "Elizabeth Barrett Browning's Sonnets from the Portuguese runs about an hour and is a real complete work, not an excerpt, so you get a finished listen in one sitting. If you want something with a story rather than poetry, Shakespeare's A Midsummer Night's Dream and Oscar Wilde's De Profundis both run around two hours.",
  },
  {
    q: "What should I listen to if I want a plot that keeps moving?",
    a: "Arthur Conan Doyle's The Adventures of Sherlock Holmes is built as short, self-contained cases, so it's easy to pick up in pieces. For a single continuous mystery, Agatha Christie's The Murder of Roger Ackroyd and Wilkie Collins' The Moonstone are both plot-driven and hold their pace the whole way through.",
  },
  {
    q: "What's a good long book to really live inside for a while?",
    a: "Alexandre Dumas' The Count of Monte Cristo runs around 51.5 hours of narration and is the kind of book you return to over weeks, not days. Leo Tolstoy's War and Peace, at roughly 62 hours, is the biggest single commitment in the catalog. Both reward the time.",
  },
  {
    q: "What if I don't know what genre I'm in the mood for?",
    a: "Browse by genre instead of deciding up front. LoudReader's free classics catalog groups its 70,000+ books, with a curated 100-title selection showing real estimated listening times, so you can filter by mood (adventure, mystery, gothic horror, philosophy) rather than staring at a blank search box.",
  },
  {
    q: "Do these listening-time estimates account for playback speed?",
    a: "No, they're all at normal 1x speed, since that's a consistent baseline for comparing books. LoudReader Premium lets you play anywhere from 0.3x to 3.0x, so your actual listening time on any of these titles depends on the speed you pick.",
  },
];
