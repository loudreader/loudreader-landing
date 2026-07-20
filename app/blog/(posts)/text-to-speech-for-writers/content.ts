// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Word-by-word highlighting: ReaderStylesheet.swift + HighlightSchedule.swift.
//   - Natural offline voices: Apple speech synthesis, all processing local.
//   - EPUB/PDF import: iOS Share sheet and macOS file picker. No conversion step.
//   - Speed control 0.3x to 3.0x: Premium only (PaywallReason.playbackSpeed).
//   - Notes & highlights: Premium feature.
//   - The "reading your own writing" use case: no special writer mode exists;
//     the standard import-and-play flow is what writers use to hear drafts.
// NO claims about: professional manuscript evaluation, grammar checking,
// style analysis, or integration with word processors. LoudReader is a general
// TTS reader. Writer-specific editing advice is standard craft wisdom
// (hearing catches what eyes miss), not clinical or proprietary.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why does reading aloud catch errors that silent reading misses?",
    a: "Your brain fills gaps when you read silently. You wrote the sentence, you know what it is supposed to say, and your eyes skim right over the missing word because your expectations paper over the hole. A voice reads what is actually on the page, not what you meant to put there. When you hear a clunky rhythm, a repeated word, or a sentence that runs out of breath, you notice it immediately. Your ears are less forgiving than your eyes.",
  },
  {
    q: "What kinds of writing problems does listening catch best?",
    a: "Repetition is the easiest catch: you hear the same word three times in two sentences and it jumps out. Run-on sentences reveal themselves when you run out of breath listening. Awkward rhythm, unintentional rhyme, and overlong prepositional chains all stand out in audio. Dialogue that reads fine on the page can sound stiff or unnatural when spoken. Transitions that felt smooth while typing often sound abrupt.",
  },
  {
    q: "Should I listen at normal speed when proofreading?",
    a: "Most writers prefer slightly above reading speed, around 1.15x to 1.3x, so the voice keeps a natural flow without dragging. Too fast and you miss things. Too slow and the unnatural pacing distracts from the prose. The point is hearing the shape of your sentences, not speed-listening your draft. Speed control is a Premium feature in LoudReader; the free tier plays at normal speed.",
  },
  {
    q: "Can I listen to my manuscript on my phone?",
    a: "Yes. Export your draft as an EPUB or PDF (most word processors do this natively) and import it into LoudReader. The app is a native iPhone app, so you can proofread on a walk, in bed, or anywhere you want fresh ears and fresh context. Playback continues with the screen locked.",
  },
  {
    q: "Does this replace a human proofreader?",
    a: "No. It replaces the first two passes you would do yourself. It catches mechanical problems: repetition, rhythm issues, typos that spellcheck misses because the wrong word is still a word. It does not catch plot holes, character inconsistencies, or factual errors. Think of it as the quickest first reader your draft will ever have, and one that reads exactly what is on the page.",
  },
  {
    q: "How do I set up a proofreading session?",
    a: "Export your current draft as EPUB or PDF. Import into LoudReader. Pick a voice you find clear and neutral. Press play and do not look at the screen. Just listen. Keep a notes app open nearby to jot down what you catch, or use LoudReader's notes feature (Premium) to mark passages. A full chapter usually takes under an hour to hear.",
  },
];
