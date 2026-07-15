// FACT PROVENANCE, verified on 2026-07-14:
// Competitor speed floors (the comparison's load-bearing facts), verified
// via web search on 2026-07-14 against official sources:
//   - Audible: narration speed range 0.5x-3.5x (0.05 increments).
//     https://help.audible.com/s/article/set-narration-speed and
//     https://www.audible.com/ep/NarrationSpeed
//   - Apple Books (Mac): audiobook playback 0.75x slowest, 2x fastest, in
//     0.25 steps. Official Apple Support guide:
//     https://support.apple.com/guide/books/listen-to-audiobooks-ibks9a460640/mac
// Both floors are quoted with their sources linked in the article body.
// Re-check these before any future edit, since competitor UIs change.
// App-behavior claims verified against the LoudReader app source
// (LoudReader_mac repo, main branch) and components/money/site.ts:
//   - Speed range 0.3x-3.0x: TTSPreferences.swift:14-15 (minRate = 0.3,
//     maxRate = 3.0), adjusted with a continuous slider
//     (SettingsSheet.swift:117-137).
//   - Pitch is preserved when speed changes: playback rate is applied via
//     AVAudioUnitTimePitch (BaseTTSEngine.swift:584, :1038), Apple's
//     pitch-preserving time-stretch unit. The article claims "natural pitch
//     at any speed", NOT "re-generated at the target speed".
//   - Speed control is Premium; the free tier plays at normal speed with
//     unlimited listening (site.ts PRICING: $7.99/month, $49.99/year,
//     $199.99 lifetime).
//   - Word-by-word highlighting: ContinuousReaderView.swift:4383-4388.
// No comprehension studies are cited. The "why slower helps" sections are
// reasoning about processing time and learner listening, with no invented
// statistics. Claims you may NOT make until verified: any named study on
// listening speed and comprehension, Spotify/Libby speed floors.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What audiobook speed is best for language learners?",
    a: "Slower than the app defaults suggest. You want it slow enough to hear where one word ends and the next begins. Connected English speech blurs those boundaries, and that is the hardest part of listening for learners. Most people start somewhere below 1x and work up. The right speed is the fastest one where you stop rewinding.",
  },
  {
    q: "How slow can LoudReader read?",
    a: "Down to 0.3x, on a continuous slider that goes up to 3.0x. That floor sits well below the mainstream audiobook apps. Audible stops at 0.5x and Apple Books at 0.75x. At 0.3x you can listen syllable by syllable, take dictation, or walk through dense material one word at a time.",
  },
  {
    q: "Does slowing audio distort the voice?",
    a: "Not the way old tape decks did. LoudReader keeps the voice at its natural pitch when you change speed, so slowing down does not make the narrator deeper or robotic. It just speaks more deliberately. At the very low end any speech sounds stretched, but the pitch and character stay intact.",
  },
  {
    q: "When should you speed back up?",
    a: "When comprehension stops being the bottleneck. If you follow every sentence without rewinding, nudge it up. If you catch yourself skipping back or losing the thread, you have gone too far. Familiar genres, re-reads, and light fiction handle speed fine. New material, technical books, and a language you are still learning do not.",
  },
  {
    q: "Is playback speed control free in LoudReader?",
    a: "No. Playback speed (0.3x to 3.0x) is part of LoudReader Premium, which costs $7.99/month, $49.99/year, or $199.99 once. The free tier plays at normal speed and is otherwise unlimited: every book, cover to cover, no word quota, no account.",
  },
];
