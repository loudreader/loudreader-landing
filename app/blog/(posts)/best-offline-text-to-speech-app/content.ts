import { FREE_TIER, CLONING } from "@/components/money/site";

// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Voice Dream Reader claims are based on publicly available information
// about the app on the App Store as of late 2026.
// No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why does offline matter for text-to-speech?",
    a: "Offline TTS works anywhere: planes, subways, rural areas, international travel without data, and through dead zones on your commute. It also means your voice processing is private. Cloud TTS sends your text to a server, which costs money per word and means your content leaves your device. On-device TTS has neither problem.",
  },
  {
    q: "Does Voice Dream Reader work on Mac?",
    a: "Voice Dream Reader has an iOS and iPadOS app. It does not have a dedicated Mac app. LoudReader runs on iPhone, iPad, and Apple Silicon Macs, so you get the full desktop experience alongside mobile.",
  },
  {
    q: "Can I use my own voices with LoudReader?",
    a: `Yes, through on-device voice cloning in LoudReader Premium. ${CLONING.long} This is separate from importing third-party voice engines, which LoudReader does not support. Voice Dream Reader allows purchasing and installing additional voices from various providers, giving you more voice flexibility.`,
  },
  {
    q: "Which app is better for accessibility needs?",
    a: "Both are excellent. Voice Dream Reader has a long history in the accessibility community and offers extensive customization for visual impairment and reading disabilities. LoudReader focuses on a cleaner, simpler reading experience with strong voice quality. Both are offline and private.",
  },
  {
    q: "How do the free tiers compare?",
    a: `Voice Dream Reader is a paid app with no permanent free tier. LoudReader offers unlimited listening on every book with no word cap. ${FREE_TIER.full} If you want to try offline TTS for free before committing, LoudReader gives you that path.`,
  },
];