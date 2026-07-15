// FACT PROVENANCE. Verified on 2026-07-14:
//   - Word counts: measured by the author of this page from the Project
//     Gutenberg plain-text editions (gutenberg.org ebook IDs: Peter Rabbit
//     #14838, Aesop's Fables #21, Alice #11, Wizard of Oz #55, Call of the
//     Wild #215, Peter Pan #16, Black Beauty #271, Adventures of Sherlock
//     Holmes #1661, Anne of Green Gables #45), counting words between the
//     "*** START/END OF THE PROJECT GUTENBERG EBOOK ***" markers, then
//     rounded. Counts include each edition's own front matter (contents
//     pages etc.), so they are labeled approximate in the copy.
//   - Listening-time estimates: words ÷ 150 words per minute (a typical
//     audiobook narration pace), rounded. The assumption is stated
//     explicitly in the copy; actual time depends on voice and speed.
//   - Difficulty labels: editorial judgment, explicitly presented as such
//     in the copy, NOT a formal grading system or measured data.
//   - All nine books are public domain in the US and available on Project
//     Gutenberg (fetched from gutenberg.org on the date above).
//   - In-app Gutenberg catalog (browse + download built in):
//     ProjectGutenbergService.swift / ProjectGutenbergBrowserView.swift in
//     the LoudReader app source. Downloading a book needs a connection;
//     playback afterwards is fully offline.
//   - Word-by-word highlighting + tap-a-sentence-to-replay:
//     ContinuousReaderView.swift ("tappedContent" handler) and
//     ContinuousReaderController.swift highlight publishers.
//   - Free tier = unlimited listening, no word quota, no account; playback
//     speed (0.3x to 3.0x) is Premium: components/money/site.ts PRICING.
// Claims you may NOT make until verified: any reading-level/grade metrics
// (Lexile, CEFR) for these books; non-English voices.
// No studies are cited in this article.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const BOOK_TABLE_COLUMNS = [
  "Words (approx.)",
  "Listening time (est.)",
  "Difficulty (editorial)",
];

export const BOOK_TABLE_ROWS: ComparisonRow[] = [
  {
    label: "The Tale of Peter Rabbit (Beatrix Potter)",
    cells: ["1,000", "7 min", "Very easy"],
  },
  {
    label: "Aesop's Fables (Townsend translation)",
    cells: ["45,000 total", "~1 min per fable", "Very easy"],
  },
  {
    label: "Alice's Adventures in Wonderland (Lewis Carroll)",
    cells: ["26,500", "3 h", "Easy, with wordplay"],
  },
  {
    label: "The Wonderful Wizard of Oz (L. Frank Baum)",
    cells: ["39,500", "4.5 h", "Easy"],
  },
  {
    label: "Black Beauty (Anna Sewell)",
    cells: ["60,000", "6.5 h", "Easy to moderate"],
  },
  {
    label: "The Call of the Wild (Jack London)",
    cells: ["32,000", "3.5 h", "Moderate"],
  },
  {
    label: "Peter Pan (J. M. Barrie)",
    cells: ["47,000", "5 h", "Moderate"],
  },
  {
    label: "The Adventures of Sherlock Holmes (Arthur Conan Doyle)",
    cells: ["104,500 (12 stories)", "~1 h per story", "Moderate"],
  },
  {
    label: "Anne of Green Gables (L. M. Montgomery)",
    cells: ["102,500", "11.5 h", "Moderate"],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Which classic books are easiest for English learners?",
    a: "In my editorial judgment: The Tale of Peter Rabbit (about 1,000 words), Aesop's Fables (one-minute stories), The Wonderful Wizard of Oz (famously plain prose), and Alice's Adventures in Wonderland (simple sentences, though the wordplay is fine to let wash over you). All four are public domain and free to listen to in LoudReader.",
  },
  {
    q: "Are these books really free?",
    a: "Yes. All nine are public domain and published as free ebooks by Project Gutenberg. LoudReader has the Project Gutenberg catalog built in, so you browse, download, and press play inside the app, and the free tier includes unlimited listening on every book, cover to cover, with no word quota and no account.",
  },
  {
    q: "How long does an easy classic take to listen to?",
    a: "From about 7 minutes (The Tale of Peter Rabbit) to about 4.5 hours (The Wonderful Wizard of Oz), estimated at a typical narration pace of 150 words per minute. At 20 minutes a day, you finish Oz in under two weeks. Word counts here were measured from the Project Gutenberg editions, so the estimates are honest, not guesses.",
  },
  {
    q: "Can I read along while listening to check words?",
    a: "Yes, and that is the point of using a reader instead of plain audio. LoudReader highlights each word as it is spoken, so you always see the spelling of what you are hearing, and you can tap any sentence to hear it again from the start.",
  },
  {
    q: "What should I try after finishing beginner books?",
    a: "Step up to The Adventures of Sherlock Holmes, where each story is a self-contained hour, or Anne of Green Gables for a longer, chattier novel. After that, any DRM-free EPUB or PDF you own works: import it into LoudReader and it becomes listening material the same way.",
  },
];
