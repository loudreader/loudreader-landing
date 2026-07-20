// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - On-device voice synthesis, no internet: voice engines run locally,
//     no cloud API calls, works in airplane mode.
//   - Lock-screen controls via MPRemoteCommandCenter in PlayerService.swift:
//     play, pause, toggle, skip forward/backward (15-second intervals).
//   - Background audio: Info.plist UIBackgroundModes = ["audio"].
//   - Playback speed 0.3x to 3.0x is Premium: PaywallReason.playbackSpeed.
//   - Free tier unlimited listening: SubscriptionAccess.swift
//     baseFreeFraction = 1.0.
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: any running performance benefit, calorie burn
// statistics, or that listening while running improves workout quality
// (no verified citation at write time). No CarPlay claims.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Will I actually absorb the book while running?",
    a: "Your brain can follow a story while your legs do their own thing, especially if the book is narrative-driven. Dense non-fiction or anything requiring heavy mental work is tougher at speed. The honest rule: if you can follow a podcast on the same run, you can follow a book.",
  },
  {
    q: "What playback speed works best while running?",
    a: "Start at 1.0x and see how it feels. Some runners nudge it up slightly because the physical rhythm makes slower narration feel draggy, but the key is picking a speed you can follow without effort. Speed control from 0.3x to 3.0x is a LoudReader Premium feature; the free tier plays at normal speed.",
  },
  {
    q: "Do I need to bring my phone on the run?",
    a: "LoudReader runs on your iPhone, so you need your phone with you. An armband or a zippered pocket keeps it secure. The lock-screen and Bluetooth headphone controls let you pause and resume without touching the screen.",
  },
  {
    q: "What happens if I lose signal on my route?",
    a: "Nothing, because LoudReader does not need one. The voices run entirely on your device. The app is fully on-device and private, your library never leaves your device, and playback continues through dead zones, parks, and anywhere your route takes you.",
  },
  {
    q: "Can I pause mid-run and pick up exactly where I was?",
    a: "Yes. Tap your headphone button or the lock-screen pause control, and LoudReader saves your position. When you resume, the narration picks up at the exact word where you stopped. No re-finding your place.",
  },
];
