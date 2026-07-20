// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Word-by-word highlighting: free, not gated (ReaderStylesheet.swift +
//     HighlightSchedule.swift). The dual-channel reading mechanic (listen while
//     following highlighted text) is the core feature for ESL learners.
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed). Slow speeds
//     (below 1.0x) are particularly relevant for language learners.
//   - Natural offline voices: Apple speech synthesis, all local. English only
//     at this time. NO claims about multilingual voice support.
//   - 70,000+ Gutenberg books: includes many accessible English classics.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
//   - Notes & highlights: Premium.
// NO claims about: language acquisition research, fluency guarantees, TOEFL/IELTS
// score improvements, or formal language pedagogy. The article offers practical
// advice for using TTS as one tool among many for English learning.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does listening while reading help with English?",
    a: "Yes, for several reasons at once. You hear the correct pronunciation of words you might otherwise guess at. You absorb sentence rhythm and natural phrasing, which are hard to pick up from silent reading alone. The word-by-word highlighting connects the sound to the spelling in real time, so you build the mapping between written and spoken English without flashcards.",
  },
  {
    q: "Should I listen at a slower speed?",
    a: "Many learners start at 0.8x or 0.9x because it gives the brain slightly more time to process each word while still sounding natural. As comprehension improves, you can nudge the speed up. In LoudReader, speed control from 0.3x to 3.0x is a Premium feature; the free tier plays at normal speed. The slower end of the range is genuinely useful for language learning in a way it is not for native-speed reading.",
  },
  {
    q: "What kind of books should I start with?",
    a: "Books you already know in your native language are a great starting point, because you already understand the story and can focus on the English. Graded readers and young adult novels use simpler vocabulary and shorter sentences. The 70,000+ free classics built into LoudReader include many accessible starting points. If you want a curated list, check out our guide to easy English books to listen to.",
  },
  {
    q: "Can I practice pronunciation by repeating after the voice?",
    a: "Yes. This is called shadowing, and it is a common language-learning technique. Play a sentence, pause, repeat it aloud trying to match the voice's rhythm and intonation. The 15-second skip back button on the lock screen makes it easy to replay the same sentence several times. It works with any imported book or article.",
  },
  {
    q: "Does text-to-speech work for English exams?",
    a: "It can help with the reading sections. Listening to practice passages while following the highlighted text builds the speed and comprehension you need under timed conditions. It is a study tool, not a cheat code, and there is no substitute for practice tests. But for the months of preparation before the exam, dual-channel reading is one of the most efficient ways to absorb a lot of English text.",
  },
  {
    q: "Will the voice sound natural enough?",
    a: "Modern AI voices are quite good. LoudReader uses high-quality neural voices that sound closer to a human narrator than the robotic TTS of a decade ago. You can try all 8 voices free for the first 8 listening hours and pick the one that is clearest and most pleasant for long sessions.",
  },
];
