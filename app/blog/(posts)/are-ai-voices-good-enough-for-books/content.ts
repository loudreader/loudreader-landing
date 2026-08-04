// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Neural TTS state: neural text-to-speech has improved dramatically since
//     WaveNet (2016, DeepMind). Modern neural TTS produces natural-sounding speech
//     that is adequate for long-form listening, especially non-fiction. For
//     fiction with dialogue and emotional range, human narration still has an
//     edge in expressiveness. This is an honest assessment of the current state
//     of the technology; no fabricated benchmarks or comparisons.
//   - LoudReader voices: 23 natural offline voices across 10 languages, Apple Silicon
//     Neural Engine (site.ts, app source). Voices run fully on-device.
//   - No fabricated study claims, testimonials, or statistics.
//   - No claim that AI voices have "matched" human narration quality.
// Claims you may NOT make: that AI voices are indistinguishable from human,
// specific MOS scores, named model comparisons unless verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Do AI voices sound natural enough for a whole book?",
    a: "For non-fiction, yes. Modern neural TTS voices handle the straightforward, declarative style of most non-fiction well. You can listen to a history book, a business book, or a popular science book for hours without the voice getting in the way. For fiction, it depends on the book. Dialogue with distinct character voices, emotional scenes, and books where the narrator's performance is part of the experience still benefit from a human reader.",
  },
  {
    q: "What is the difference between neural TTS and older synthetic voices?",
    a: "The old robotic voices from the 2000s worked by stitching together tiny recorded speech fragments or generating sound from rules. Neural TTS uses deep learning models trained on thousands of hours of human speech to generate audio waveforms directly. The result has natural intonation, pacing, and breath patterns instead of the flat mechanical sound of older systems. The gap between neural TTS and old TTS is bigger than the gap between neural TTS and human narration.",
  },
  {
    q: "Can AI voices handle fiction with dialogue and emotion?",
    a: "Yes, but not like a human narrator. A skilled human narrator gives each character a distinct voice, modulates emotion, and uses timing for dramatic effect. AI voices are getting better at this, but they still sound like one voice reading a book, not a cast performing it. For most readers, that is fine. For fiction where the narration is genuinely part of the art (think a masterfully narrated audiobook), a human recording is still the better experience.",
  },
  {
    q: "Are on-device AI voices worse than cloud AI voices?",
    a: "On-device voices have gotten remarkably close to cloud quality thanks to dedicated hardware like the Apple Neural Engine. Cloud voices still have an edge on expressiveness and variety, because they run on bigger models with no storage constraints. But for book-length listening, the difference is small enough that most people would not notice unless they did a side-by-side comparison. The full trade-off is covered in our comparison of offline vs cloud voice quality.",
  },
  {
    q: "How many AI voices does LoudReader offer?",
    a: "LoudReader Premium includes 23 natural offline voices across 10 languages. They run entirely on your device using Apple Silicon's Neural Engine, so they work with no internet connection. The free tier includes one voice with unlimited listening, which is plenty to decide if AI narration works for you before paying for variety.",
  },
];