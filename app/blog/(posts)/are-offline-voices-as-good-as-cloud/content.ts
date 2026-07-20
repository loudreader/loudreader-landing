// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - On-device vs cloud TTS quality trade-off: honest assessment of current
//     state. On-device neural voices (via Apple Neural Engine) are nearly as good
//     as cloud voices. Cloud still leads on expressiveness and variety because
//     server-side models can be larger and more numerous. This is an honest
//     comparison, not fabricated benchmarks.
//   - Privacy: on-device TTS means text never leaves the device. Structural
//     privacy, not policy-based. LoudReader enforces offline in code (see
//     on-device-text-to-speech-explained provenance).
//   - LoudReader: 8 natural offline voices, English-only, Apple Silicon required
//     for Mac, iOS 18+ for iPhone (site.ts). Free tier = unlimited listening.
//   - No fabricated study claims, testimonials, or statistics.
// Claims you may NOT make: that on-device has "matched" cloud quality, specific
// MOS scores, named model comparisons unless verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How close are offline voices to cloud voices in quality?",
    a: "Remarkably close. On-device neural voices running on Apple Silicon's Neural Engine produce speech that is natural enough for hours of book listening. Cloud voices still have an edge: they run on bigger models with more parameters, which gives them slightly richer expressiveness and a wider range of voice options. But the gap has narrowed to the point where most listeners would not notice unless they compared them side by side.",
  },
  {
    q: "What does cloud TTS do better than on-device?",
    a: "Two things. Expressiveness: the largest cloud models still produce slightly more natural prosody, especially for emotional or varied content. Variety: cloud services can host hundreds of voices in dozens of languages because they live on a server with no storage limits. An on-device app ships a curated set. LoudReader has 8 natural offline voices, English-only. If you need a specific accent, language, or celebrity-style voice, cloud TTS genuinely serves you better.",
  },
  {
    q: "What does on-device TTS do better than cloud?",
    a: "Three things. Privacy: your text never leaves your device. There is no server to trust, no account to create, and no audio stream that could be intercepted. Reliability: no internet connection needed. Tunnels, dead zones, airplane mode, nothing stops playback. Latency: generating audio locally is faster than round-tripping to a server, so play and pause feel instant. For long listening sessions, these add up to a smoother experience.",
  },
  {
    q: "Why would someone choose offline over cloud if cloud sounds better?",
    a: "Because quality is only one dimension. If you listen to books on your commute through spotty coverage, offline wins on reliability. If you listen to private documents, work materials, or personal writing, offline wins on privacy. If you listen for hours a day and do not want your reading habits logged on someone else's server, offline wins on principle. The quality gap is small enough now that these other factors often decide it.",
  },
  {
    q: "Do offline voices use more battery than cloud streaming?",
    a: "Neural synthesis does use processing power, because a machine learning model is generating audio in real time. On modern devices with dedicated ML hardware (Apple Neural Engine), this is efficient enough that battery drain is comparable to streaming audio. Cloud TTS uses less local processing but more data and radio power. For most users, the difference is not enough to matter for a few hours of listening.",
  },
  {
    q: "Can I try offline voices without paying?",
    a: "Yes. LoudReader's free tier gives you one voice with unlimited listening, fully on-device and private, your library never leaves your device. You can test how natural an offline voice sounds on your own books with no time limit and no word quota. If you want all 8 voices, speed control, sleep timer, and soundscapes, those are part of LoudReader Premium.",
  },
];