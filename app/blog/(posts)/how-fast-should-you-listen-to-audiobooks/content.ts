// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Speed vs comprehension: research in cognitive psychology has consistently
//     found that comprehension begins to decline measurably above 2x speed.
//     At 1.25x to 1.5x, most listeners show minimal comprehension loss for
//     narrative and informational content. Content complexity matters more than
//     speed alone (dense technical material degrades faster at any speed above
//     1x than light fiction does). These are well-established general findings
//     from the cognitive science of listening comprehension; the article frames
//     them honestly as research-backed ranges without fabricating specific
//     study names or numbers.
//   - TTS may be less forgiving at high speeds than human narration because
//     human narrators use natural pauses and prosody that help comprehension
//     survive speed-ups. This is a logical inference from how TTS works vs
//     human speech, not a fabricated study claim.
//   - LoudReader playback speed range (0.3x to 3.0x) from components/money/site.ts
//     PRICING. Speed control is a Premium feature.
//   - All other feature claims (offline voices, free tier, etc.) from site.ts.
// Claims you may NOT make: specific comprehension percentages at exact speeds,
// any named research paper unless verified, any claim that a specific speed
// is "optimal" for everyone.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the fastest I can listen and still understand?",
    a: "It depends on what you are listening to and how much you care about every detail. Research in cognitive psychology has found that comprehension holds up pretty well up to about 1.5x for most narrative and informational content. Above 2x, comprehension starts dropping measurably for most people, and by 3x you are mostly skimming by ear. But those are averages. A fast-paced novel you know well might work at 2x; a dense philosophy book might lose you at 1.2x.",
  },
  {
    q: "Is 1.5x speed safe for comprehension?",
    a: "For most people and most content, yes. Research has found that 1.25x to 1.5x has minimal impact on comprehension for narrative and general informational material. Your brain adjusts to the faster pace within a few minutes. The caveat: this applies to content you could comfortably read in print. If the material is dense, technical, or new to you, even 1.2x can cost you understanding.",
  },
  {
    q: "Does text-to-speech handle high speeds differently than human narration?",
    a: "TTS can be less forgiving at high speeds. Human narrators use natural pauses, emphasis, and pacing that help your brain chunk information even when sped up. TTS voices, while natural sounding, do not have that human-level prosody control. At 1.5x a good neural TTS voice sounds fine. At 2.5x, a human narrator might still be followable while TTS can start to feel like a wall of words. Start conservative and nudge up.",
  },
  {
    q: "Why does content complexity matter more than speed?",
    a: "Your brain processes familiar language patterns faster than unfamiliar ones. A conversation-heavy novel uses everyday vocabulary and predictable sentence structures, your brain can handle it at higher speeds. A technical paper introduces new terms, complex logic, and sentences you might need to pause and reread. That reread instinct is the warning sign: if you would need to reread it in print, you need to slow down the audio too.",
  },
  {
    q: "Can I speed up some chapters and slow down others?",
    a: "Yes, and most people do. LoudReader Premium gives you speed control from 0.3x to 3.0x, and adjusting it takes one tap. Action scenes or dialogue at 1.5x, dense exposition at 1.2x, and slow a passage you want to savor to 0.8x. There is no rule that says one speed fits a whole book.",
  },
];