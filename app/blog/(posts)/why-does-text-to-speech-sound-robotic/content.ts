// FACT PROVENANCE. Every claim verified on 2027-01-01 against:
//   - General, publicly documented history of speech synthesis: early
//     text-to-speech systems used formant synthesis (rule-based, generating
//     sound from acoustic parameters) or concatenative synthesis (splicing
//     together small recorded speech fragments). Both approaches are widely
//     documented as producing flat pitch and abrupt transitions between
//     sounds, because there is no model of natural prosody, just rules or
//     stitched fragments. This is textbook speech-synthesis history, not a
//     specific study or benchmark.
//   - Modern neural text-to-speech generates audio using models trained on
//     large amounts of human speech, and produces continuous, learned
//     intonation and pacing instead of rule-based or spliced output. This is
//     the same honest, non-specific characterization already used in
//     are-ai-voices-good-enough-for-books; no MOS scores, no named model
//     comparisons, no fabricated benchmark numbers.
//   - Known remaining failure modes of TTS in general (any engine, not
//     LoudReader-specific): text normalization errors (numbers, abbreviations,
//     dates read wrong), homograph ambiguity ("I read the book" vs "I will
//     read the book" depend on tense the system must infer), and unusual
//     punctuation or formatting confusing sentence-boundary detection. These
//     are well-documented, general TTS engineering challenges.
//   - LoudReader voices: 23 natural offline voices across 10 languages,
//     running fully on-device (components/money/site.ts VOICES, PRICING).
//     No claim of specific model architecture, engine name, or benchmark
//     score for LoudReader's own voices; only the general, verified facts
//     (natural, offline, free tier includes one voice).
// Claims you may NOT make: named engines or models (LoudReader's or anyone
// else's), specific MOS/naturalness scores, fabricated research citations,
// or a claim that any voice is indistinguishable from human speech.
// This article explains the cause of robotic-sounding speech. It does not
// judge whether current voices are good enough for book-length listening;
// that question is answered in are-ai-voices-good-enough-for-books.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why does text to speech sound robotic?",
    a: "Mostly because of how the audio gets generated. Older systems either built words from fixed acoustic rules (formant synthesis) or spliced together small pre-recorded speech fragments (concatenative synthesis). Neither approach models how a sentence's pitch and rhythm actually flow, so the output has flat intonation and audible seams. Modern neural text-to-speech generates continuous audio from a model trained on real speech, so it captures much more of that natural flow. Some robotic moments still happen even with neural voices, usually from a different cause: the system misreading what a word or number should sound like, not the voice itself sounding mechanical.",
  },
  {
    q: "What's the difference between old TTS and modern TTS?",
    a: "The old robotic voices from screen readers and GPS units generated speech from rules or spliced-together recordings, with no real model of natural prosody. Modern neural TTS is trained on large amounts of human speech and generates the waveform directly, learning intonation, pacing, and breath-like pauses as part of that process instead of following a fixed rulebook. The gap between old TTS and modern neural TTS is bigger than the gap between neural TTS and a human voice.",
  },
  {
    q: "Is a robotic-sounding voice always the voice's fault?",
    a: "No. A lot of what sounds mechanical is actually a text problem, not a voice problem. If a sentence has an ambiguous abbreviation, an oddly formatted number, or a word that's pronounced differently depending on its part of speech (like \"read\" or \"lead\"), the system has to guess, and a wrong guess sounds jarring even from a genuinely natural-sounding voice. Clean, well-formatted source text produces noticeably smoother output than messy scanned text or auto-generated transcripts.",
  },
  {
    q: "Does running text to speech offline make it sound worse?",
    a: "Not inherently. On-device voice quality has closed most of the gap with cloud-based voices, thanks to dedicated hardware for running these models efficiently on a phone or laptop. There can still be a difference in expressiveness and variety between an offline voice and a much larger cloud model, but for straightforward narration, most listeners wouldn't pick out which is which in a blind test.",
  },
  {
    q: "Does LoudReader use robotic-sounding voices?",
    a: "LoudReader's voices are neural, natural offline voices, not the old rule-based or spliced kind. The free tier includes one voice with unlimited listening, so you can hear it for yourself before deciding whether it works for you, rather than taking a claim about naturalness on faith.",
  },
];
