// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Competitor free tier claims are based on publicly available information
// as of late 2026. Apple Spoken Content is a system feature, not a third-party
// app claim. No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a truly free text-to-speech app with no catches?",
    a: "Yes, two kinds. Apple Spoken Content is built into every iPhone and Mac, completely free forever, and reads anything on screen. LoudReader's free tier gives you unlimited book listening with no word quota, no time limit, and no account required. You get one natural voice free, covering entire books.",
  },
  {
    q: "Why do most TTS apps limit their free tiers?",
    a: "Cloud-based TTS costs the developer money for every word spoken. Server processing at scale is expensive. On-device processing like LoudReader and Apple Spoken Content has no per-word cost, which is why those free tiers can be genuinely unlimited.",
  },
  {
    q: "What is the catch with LoudReader's free tier?",
    a: "The free tier gives you one natural voice. Premium adds all 23 studio narrators, playback speed (0.3x to 3.0x), sleep timer, ambient soundscapes, and notes and highlights. The free tier covers full books, cover to cover, with no word cap, forever.",
  },
  {
    q: "Can I use Apple Spoken Content for full books?",
    a: "Technically yes. It reads any text selected on screen. But it is not built for books. It does not save your place, import EPUB files, highlight words, or remember where you stopped. It is a great system feature for short-form reading; for books, a dedicated reader app is better.",
  },
  {
    q: "Do free TTS voices sound good enough?",
    a: "Apple's built-in voices have improved significantly with recent iOS and macOS versions. They sound natural for system-level TTS. LoudReader's free voice is a dedicated neural voice optimized for long-form reading. Both are fully offline and adequate for hours of listening.",
  },
];