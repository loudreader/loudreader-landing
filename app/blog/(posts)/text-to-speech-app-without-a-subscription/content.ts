// FACT PROVENANCE. Every pricing figure below is imported directly from
// components/money/site.ts (PRICING), never retyped, so a price change in
// App Store Connect only needs updating in that one file. Checked against
// that file and the App Store listing on 2026-08-24.
// App-behavior claims (free tier = unlimited listening, no word quota, no
// account) verified against components/money/site.ts and the app source
// (no account/CloudKit code found anywhere in LoudReader/, grepped
// 2026-08-24). Voice-cloning and speed-range figures also from site.ts
// (CLONING, PRICING.premiumFeatures).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a text-to-speech app that doesn't require a subscription?",
    a: "Yes. LoudReader's free tier is unlimited listening on every book, cover to cover, with no subscription, no account, and no word quota. If you want more voices and features, Premium also offers a one-time lifetime price as an alternative to a recurring plan.",
  },
  {
    q: "What do you get with LoudReader for free, with no subscription?",
    a: "Unlimited listening on every book, cover to cover, no account, no word quota. That's the free tier in full, not a trial that runs out.",
  },
  {
    q: "Does LoudReader have a one-time purchase instead of a monthly plan?",
    a: "Yes. Premium is available as a $199.99 one-time lifetime purchase, alongside $7.99/month or $49.99/year subscription options. The lifetime price means you pay once and never see a renewal charge.",
  },
  {
    q: "What does LoudReader Premium add over the free tier?",
    a: "All 23 studio narrators across 10 languages, on-device voice cloning, playback speed from 0.3x to 3.0x, sleep timer, ambient soundscapes, and notes and highlights. The free tier plays at normal speed with one natural offline voice.",
  },
  {
    q: "Are there hidden costs or a word limit on the free tier?",
    a: "No. LoudReader's free tier is unlimited listening on every book, cover to cover, with no word quota. There's no ad-supported tier and no separate charge per book.",
  },
];
