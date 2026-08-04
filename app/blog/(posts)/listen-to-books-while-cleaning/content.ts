// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Lock-screen / Bluetooth controls: PlayerService.swift,
//     MPRemoteCommandCenter with play, pause, toggle, skip (15 sec).
//   - Background audio with screen locked: Info.plist
//     UIBackgroundModes = ["audio"].
//   - On-device voices, no internet: speech synthesis runs locally.
//   - Free tier unlimited listening: SubscriptionAccess.swift
//     baseFreeFraction = 1.0, site.ts PRICING.
//   - 70,000+ Gutenberg books built in: app/page.tsx, same claim as
//     the home page and App Store listing.
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: any productivity benefit of audiobook-chore
// pairing (no verified study), cleaning efficiency statistics.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I listen to my own EPUBs and PDFs, or just the free classics?",
    a: "Both. LoudReader reads any DRM-free EPUB or PDF you import, plus the 70,000+ built-in Project Gutenberg classics. Your own files and the free library sit side by side in the same app.",
  },
  {
    q: "Do I need to keep the screen on while cleaning?",
    a: "No. Press play, lock the screen, and put the phone in your pocket or on a counter. Playback continues with the screen off, and the lock screen gives you play, pause, and 15-second skip if you need them.",
  },
  {
    q: "Can I pause with wet or dirty hands?",
    a: "Bluetooth headphone or speaker controls are the cleaner option. A single tap on most earbud or speaker buttons pauses playback. No need to touch the phone at all. The lock screen controls also work through a clear plastic bag if you want to keep the phone protected.",
  },
  {
    q: "What if I want to switch to music for a bit?",
    a: "LoudReader pauses when you switch apps. Play your music, then come back to LoudReader and press play. It picks up exactly where you left off. The book position is saved regardless.",
  },
  {
    q: "Is the free voice good enough for cleaning background listening?",
    a: "The free voice in LoudReader is a natural offline voice, not a robotic old-style TTS. It sounds good enough to follow a story while you vacuum, fold laundry, or scrub dishes. If you want more vocal variety, Premium unlocks all 23 studio narrators.",
  },
];
