// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Tap a sentence to jump playback to its start: ContinuousReaderView.swift
//     ("tappedContent" message handler calls controller.play(fromSentenceId:)).
//     Nuance also verified there: while playing with the control bar hidden,
//     the FIRST tap only reveals the controls; the next tap on a sentence
//     jumps playback. The article describes both.
//   - 15-second skips seek by whole sentences and always land at the start of
//     a sentence: ContinuousReaderController.swift skipForward/skipBackward →
//     sentenceCountForDuration (minimum 1 sentence).
//   - Lock-screen 15-second skip controls: PlayerService.swift configures
//     MPRemoteCommandCenter skip commands with preferredIntervals = [15].
//   - Word-by-word and sentence highlighting during narration:
//     ContinuousReaderController word/sentence highlight publishers rendered
//     by ContinuousReaderView.
//   - Playback speed 0.3x to 3.0x is Premium, and the free tier plays at
//     normal speed: components/money/site.ts PRICING (single source of truth).
//   - Voices cover 10 languages (11 English narrators of 23): consistent with
//     app/(seo)/private-text-to-speech-no-cloud.
//   - LoudReader has NO pronunciation-scoring or speech-recording feature.
//     The article states this as an honest concession, not a capability.
// Claims you may NOT make until verified: a dedicated "repeat sentence"
// button (does not exist, repetition is done by tapping the sentence),
// any pronunciation feedback, any non-English voices.
// No studies are cited in this article.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the shadowing technique?",
    a: "Shadowing means you play spoken audio and repeat it out loud almost at the same time. You stay about half a second behind the voice, copying its rhythm, stress, and intonation as closely as you can. Interpreters train with it, and language learners use it to make their spoken English sound more natural. It's a speaking exercise, not a listening one. What matters is what your mouth does, not what your ears take in.",
  },
  {
    q: "Is shadowing with books better than with podcasts?",
    a: "They train different things, so the honest answer is to use both. A book gives you the full text in front of you, sentence-by-sentence repetition, and control over difficulty, so you can shadow the same paragraph five times. Podcasts give you modern conversational English, hesitations and all, which books rarely contain. Books are the better tool for deliberate pronunciation practice, and podcasts are better for real-world listening.",
  },
  {
    q: "What speed should I shadow at as a beginner?",
    a: "Slow enough that you can keep up without dropping word endings. For many beginners that's around 0.6x to 0.8x, climbing back toward 1.0x as a passage gets familiar. In LoudReader, playback speed from 0.3x to 3.0x is part of Premium, and the free tier plays at normal speed. If you're on the free tier, pick short, simple sentences instead of slowing the voice down.",
  },
  {
    q: "How do I repeat the same sentence in LoudReader?",
    a: "Tap the sentence in the text and playback jumps to the start of that sentence. Tap it again when it ends to hear it once more, as many times as you want. If the control bar is hidden while playing, the first tap brings the controls back, then tap the sentence. The 15-second back button also always lands at the start of a sentence, so it works as a quick 'say that again' control too.",
  },
  {
    q: "How long should a daily shadowing session be?",
    a: "There's no researched magic number, so here's the practical one: 5 to 15 focused minutes beats a long unfocused slog. Shadowing only works while you're genuinely imitating, so the moment you slip into mumbling along on autopilot, stop or take a break. A short daily session you actually keep doing is worth more than an ambitious plan you abandon in a week.",
  },
];
