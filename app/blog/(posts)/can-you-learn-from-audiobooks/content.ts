// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Listening comprehension vs reading comprehension: research in cognitive
//     psychology and education has found that for narrative and informational
//     texts, listening comprehension is roughly similar to reading comprehension
//     for skilled adult readers. The gap appears with dense technical material
//     that relies on visual aids (diagrams, formulas) and when re-reading or
//     pausing is necessary for understanding. These are well-established general
//     findings; the article frames them honestly without fabricated numbers.
//   - No fabricated study claims, testimonials, or statistics.
//   - LoudReader features: imports EPUB/PDF, 70,000+ Gutenberg books, natural
//     offline voices, word-by-word highlighting, free unlimited listening,
//     Premium features from site.ts PRICING.
// Claims you may NOT make: that audiobooks provide the same learning outcomes as
// reading for all content types, specific comprehension percentages, any named
// study unless verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is listening to a book the same as reading it?",
    a: "For understanding the content, yes, mostly. Research in cognitive psychology has found that listening comprehension is roughly similar to reading comprehension for narrative and informational texts. Your brain builds the same mental model of the story or argument whether the words entered through your eyes or your ears. The difference is in the experience, not the understanding, at least for the kinds of books most people read for learning and enjoyment.",
  },
  {
    q: "What kinds of books are harder to learn from in audio?",
    a: "Anything that relies on visual information you cannot recreate in your head. Technical books with diagrams and formulas. Cookbooks where you need to see the ingredient list while following steps. Reference books you dip into rather than read front to back. And dense academic prose where you need to pause, reread, and chew on a single paragraph. For those, audio is better as a supplement to the printed page, not a replacement.",
  },
  {
    q: "Can I learn a new subject purely through audiobooks?",
    a: "You can get a lot of it. For narrative-driven non-fiction like history, biography, and popular science, audiobooks work well: the information flows in a linear way that maps cleanly onto audio. For skill-building subjects where you need to practice, write, or work through examples, you will need more than audio. The honest approach is to use audiobooks for the foundation and the big picture, then switch to print or hands-on practice for the details.",
  },
  {
    q: "Does listening speed affect how well I learn?",
    a: "Yes. Research has found that comprehension begins to decline measurably above 2x speed, and 1.25x to 1.5x has minimal impact for most listeners. But these are averages for familiar content types. When you are learning something new, slower is smarter. Unfamiliar terms, new concepts, and complex arguments need processing time that speed chews up. For learning, stay at 1x or slightly above until the material feels familiar.",
  },
  {
    q: "Is reading while listening better for learning than either alone?",
    a: "It can be. Dual-coding theory in cognitive psychology suggests that processing the same information through two channels (visual and auditory) creates two mental representations, which gives you more ways to retrieve it later. LoudReader's word-by-word highlighting does exactly this: your eyes follow the text while a natural offline voice reads it aloud. For dense material you want to really absorb, reading and listening together gives you both channels.",
  },
];