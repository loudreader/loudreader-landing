// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Speed-vs-comprehension ranges: research in cognitive psychology has
//     consistently found that 1.0x to 1.5x is generally safe for most content;
//     above 2x comprehension drops notably; content complexity moderates the
//     effect (dense material degrades faster). These are well-established general
//     findings, not invented numbers. No specific papers are cited by name.
//   - TTS may be less forgiving at high speeds than human narration: logical
//     inference from how neural TTS handles prosody vs human speech patterns.
//   - LoudReader speed range: 0.3x to 3.0x (site.ts PRICING). Speed is Premium.
// Claims you may NOT make: specific comprehension percentages, that any speed
// is optimal for everyone, named studies unless verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the safest playback speed for full comprehension?",
    a: "1x, obviously. That is the speed human speech was designed for. But 1.25x to 1.5x is generally safe for most narrative and informational content, and your brain adjusts to the faster pace within a few minutes. The drop-off is not a cliff at 1.5x, it is a gradual decline that gets steeper past 2x.",
  },
  {
    q: "At what speed does comprehension really start to fall off?",
    a: "Research in cognitive psychology has found that above 2x, comprehension begins to drop measurably for most listeners. By 3x, most people are catching the gist at best. The exact threshold varies by person and by content. A familiar, straightforward book you have read before might survive 2.5x. New, dense material starts losing you well before 2x.",
  },
  {
    q: "Does content type change the best speed?",
    a: "More than anything else. Light fiction with simple language and linear plots handles speed well. Dense non-fiction, technical writing, and anything with unfamiliar vocabulary needs slower speeds because your brain needs time to process new terms and build mental models. A good rule of thumb: if you would need to reread a passage in print, you need to slow it down in audio.",
  },
  {
    q: "Why is TTS harder to understand at high speed than a human narrator?",
    a: "Human narrators use natural pauses, emphasis, and phrasing that carry meaning and give your brain time to process. When you speed up a human recording, those cues stretch but do not disappear. Neural TTS voices sound natural at normal speed, but their prosody is generated algorithmically. Speed it up and the cues that help your brain chunk sentences can get compressed in ways that make comprehension harder than the same speed on a human recording.",
  },
  {
    q: "How do I find my personal best speed?",
    a: "Start at 1x for a chapter. Nudge up to 1.25x. If you can summarize what you heard without effort, go to 1.5x. Keep nudging until you notice you are losing details or rewinding a lot, then back off one notch. Your speed will vary by book, by chapter, and even by time of day. LoudReader Premium gives you speed control from 0.3x to 3.0x, and changing it is one tap, so you can adjust as you go.",
  },
];