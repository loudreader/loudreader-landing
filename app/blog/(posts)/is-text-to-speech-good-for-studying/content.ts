// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Dual-coding theory: a real, established concept in cognitive psychology
//     (Paivio, 1971/1986). The core idea is that information processed
//     simultaneously through visual and auditory channels creates two separate
//     mental representations, which can improve encoding and recall. This is
//     standard textbook material, not a recent or contested finding.
//   - TTS for review vs deep study: the distinction between passive review
//     (listening) and active study (note-taking, self-testing) is grounded in
//     the well-established "testing effect" and active-recall research in
//     cognitive psychology. Listening alone is a weaker encoding strategy than
//     active engagement. The article frames this honestly.
//   - LoudReader features: word-by-word highlighting is free (see too-tired-to-read
//     provenance), notes & highlights are Premium (site.ts PRICING), speed control
//     is Premium, AI voices (8 total) are Premium. Free tier = unlimited listening.
//   - No fabricated study claims, no invented statistics.
// Claims you may NOT make: that TTS improves test scores by any specific amount,
// that TTS is superior to reading for studying, any specific study names unless
// verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does listening to a textbook work as well as reading it?",
    a: "It depends on what you do with it. For initial exposure to a chapter or reviewing material you have already read, listening works well. Your brain processes the same content through a different channel, which can reinforce what you read. But for deep study that requires understanding diagrams, working through formulas, or taking detailed notes, reading print (or reading along while listening) is more effective than listening alone.",
  },
  {
    q: "What is dual-coding theory and why does it matter for studying?",
    a: "Dual-coding theory is a well-established concept in cognitive psychology. It says that when you process information through two channels at once (visual and auditory), your brain creates two separate representations of the same material. That gives you two ways to retrieve it later. Reading while listening, which LoudReader supports with word-by-word highlighting, taps directly into this: your eyes anchor your ears, and your brain encodes through both channels at the same time.",
  },
  {
    q: "Is text to speech better than reading for reviewing?",
    a: "For review, TTS can be genuinely better because it is easier to fit in. You can listen to a chapter recap while walking to class, doing laundry, or eating lunch. You probably were not going to sit down with a textbook during those moments anyway. The content gets into your head through a channel you already have available. The trade-off is that passive listening encodes less deeply than active rereading, but that is a trade worth making when the alternative is no review at all.",
  },
  {
    q: "What are the limits of using TTS for studying?",
    a: "Three honest limits. First, diagrams, charts, and formulas do not translate to audio. If your material is visually dense, you need your eyes on it at some point. Second, TTS is a passive input channel. Active studying (note-taking, self-quizzing, explaining concepts out loud) produces stronger learning than passive listening. Third, if you multitask heavily while listening, comprehension drops. TTS works best for studying when you give it most of your attention.",
  },
  {
    q: "Can LoudReader help with active studying or just passive listening?",
    a: "Both. LoudReader Premium includes notes and highlights, so you can mark passages and write thoughts as you listen or read. The word-by-word highlight keeps your eyes locked to the text, which gives you the dual-coding benefit of reading and listening at the same time. And because the app works fully on-device and private, your library never leaves your device, you can use it with study materials you would not want uploaded to a cloud service.",
  },
  {
    q: "Should I use TTS for exam prep?",
    a: "TTS is a good supplement, not a replacement. Listening to a chapter summary or your own notes read aloud is a great way to squeeze in an extra review session. But the research on learning consistently shows that active recall (testing yourself, answering practice questions) produces better retention than passive re-exposure. Use TTS to get more reps with the material, but do the active recall too.",
  },
];