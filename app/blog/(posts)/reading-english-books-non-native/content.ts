// FACT PROVENANCE. Verified on 2026-07-14:
//   - Study citation: Hu, M. & Nation, P. (2000), "Unknown vocabulary
//     density and reading comprehension", Reading in a Foreign Language,
//     13(1). Verified via web search on 2026-07-14; the journal's own page
//     hosts it at https://nflrc.hawaii.edu/rfl/item/43 (the URL linked in
//     the article). Finding used: adequate unassisted comprehension of a
//     fiction text generally required knowing about 98% of the running
//     words; the article converts that to "roughly one unknown word in
//     fifty" and keeps the framing as "a widely cited threshold".
//     No other numbers are attributed to the study.
//   - Word-by-word highlighting + tap-a-sentence-to-replay: LoudReader app
//     source (LoudReader_mac repo, main branch), ContinuousReaderView.swift
//     "tappedContent" handler calls controller.play(fromSentenceId:), and the
//     word/sentence highlight publishers in ContinuousReaderController.swift.
//   - Built-in Project Gutenberg catalog: ProjectGutenbergService.swift /
//     ProjectGutenbergBrowserView.swift.
//   - Free tier = unlimited listening, no word quota; playback speed
//     (0.3x to 3.0x) is Premium: components/money/site.ts PRICING.
//   - Voices are English-only today: consistent with the vetted claim on
//     app/(seo)/private-text-to-speech-no-cloud.
// Claims you may NOT make until verified: any CEFR/Lexile mapping, any
// claim that listening-while-reading is proven to improve outcomes (the
// article frames it as practical scaffolding, not cited research).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How many unknown words per page is too many?",
    a: "A widely cited threshold from second-language reading research (Hu & Nation, 2000, Reading in a Foreign Language) is that comfortable unassisted reading needs roughly 98% of words known, about one unknown word in fifty. On a typical 300-word page that's around six unknown words. If you're hitting ten or more per page, the book will fight you, so pick an easier one or scaffold it with audio and highlighting.",
  },
  {
    q: "Should I look up every word I don't know?",
    a: "No, that's the fastest way to abandon a book. Look a word up only if it blocks the plot or if you've now met it several times. Everything else, let go: most unknown words either become clear from context or never matter. A dictionary is a tool for the second encounter, not the first.",
  },
  {
    q: "Does listening while reading make English books easier?",
    a: "It removes two specific frictions. The narration keeps you moving at a steady pace, so you physically can't stall on every unknown word, and it gives you the real pronunciation of words you'd otherwise guess silently (and often wrongly). In LoudReader each word highlights as it's spoken, so your eyes never lose the line.",
  },
  {
    q: "How do I stay motivated through a long English novel?",
    a: "Pick a shorter book first. Finishing a 40,000-word classic this month builds more momentum than being 15% into a masterpiece forever. Read or listen in small daily sessions, count chapters rather than pages, and give yourself permission to abandon a book that isn't working. Sticking with the same author for a second book also helps: their vocabulary repeats, so it reads noticeably easier.",
  },
  {
    q: "Are older classics harder for learners than modern books?",
    a: "Often, honestly, yes. A book from 1890 carries some vocabulary and phrasing you'll never hear in conversation. But the difficulty varies wildly: The Wonderful Wizard of Oz or Black Beauty read plainer than many modern literary novels. Since classics are free and instantly available with audio, they're the cheapest possible practice material, so just choose the plain-prose ones and skip the ornate ones until later.",
  },
];
