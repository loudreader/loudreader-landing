// FACT PROVENANCE. Every number below is labeled arithmetic, not a study or
// measured result, verified on 2026-08-24:
//   - Average audiobook narration pace: 150 to 160 words per minute is a
//     commonly cited industry figure for spoken narration (the same range
//     used, in hours form, by the sibling article
//     app/blog/(posts)/how-many-books-can-you-read-in-a-year/content.ts,
//     which cites ~9 hours as the commonly cited average audiobook length).
//     This article uses 150 wpm as the arithmetic baseline and shows the math
//     explicitly rather than asserting a single "true" number.
//   - Average novel length: 70,000 to 100,000 words is a commonly cited range
//     for a standard adult novel; 90,000 is used as the round mid-point for
//     the worked example. Genre and non-fiction lengths vary widely and the
//     article says so.
//   - All hour figures below are (word count / words per minute) / 60,
//     arithmetic only, never presented as a guarantee or a measured result.
//   - Checked data/voice-durations.json and data/sample-durations.json: both
//     hold short-clip durations in SECONDS (narrator introduction lines and
//     book preview samples respectively, per scripts/update-audio-samples.mjs
//     and docs/audio-samples.md), not full-book listening times, so neither
//     file is usable for whole-book arithmetic and neither is cited as such.
//   - LoudReader speed range 0.3x to 3.0x: components/money/site.ts PRICING
//     (Premium feature; free tier plays at normal speed).
// Claims you may NOT make: that any specific book takes exactly X hours, or
// that comprehension holds at every speed for every listener.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How long does it take to listen to an average book?",
    a: "Roughly 9 to 10 hours at normal speed, using common arithmetic: a typical novel runs about 90,000 words, and audiobook narration is commonly cited at around 150 words per minute, which works out to 600 minutes, or 10 hours. Shorter books and longer ones move that number a lot, so treat it as a starting estimate, not a fixed rule for any one title.",
  },
  {
    q: "How do you calculate listening time for a specific book?",
    a: "Divide the book's word count by your narration speed in words per minute, then divide by 60 for hours. A 120,000-word novel at 150 words per minute is 800 minutes, or about 13.3 hours. A 60,000-word novella at the same pace is 400 minutes, or about 6.7 hours. If you don't know the exact word count, page count times roughly 275 words per page is a rough stand-in.",
  },
  {
    q: "Does playback speed change how long a book takes?",
    a: "Yes, directly and proportionally. Doubling playback speed halves listening time for the same book, arithmetically. A 10-hour book at 1.5x takes about 6.7 hours. At 2x it takes about 5 hours. LoudReader Premium supports speed from 0.3x to 3.0x, so the fastest end of that range would take a 10-hour book down to roughly 3.3 hours, though comprehension at very high speeds depends on the listener and the material.",
  },
  {
    q: "Is a longer book always harder to listen to?",
    a: "Length and difficulty are different things. A long, plainly written novel can move faster than a short, dense one, because narration speed interacts with how much you slow down mentally to follow the ideas, not just the word count. Length arithmetic tells you time, not difficulty.",
  },
  {
    q: "Why isn't there one single number for 'how long is a book'?",
    a: "Because word count varies by book and narration speed varies by narrator, format, and your own playback speed setting. Two people listening to the same book at different speeds get genuinely different total hours, and two books with the same page count can have very different word counts depending on font, formatting, and prose density. Any single number is an average masking real spread.",
  },
];
