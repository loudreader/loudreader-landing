// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Lock-screen controls: PlayerService.swift, MPRemoteCommandCenter
//     with play, pause, toggle, skip (15 sec).
//   - Background audio: Info.plist UIBackgroundModes = ["audio"].
//   - On-device voices, no internet: speech synthesis runs locally.
//   - 70,000+ Gutenberg books built in.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
//   - Word-by-word highlighting free: ReaderStylesheet.swift.
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: any social media usage statistics, addiction
// or habit-formation research (no verified citations at write time).
// The article frames the habit swap as personal practical advice, not
// clinical or psychological claims.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why is scrolling so hard to stop and books so hard to start?",
    a: "Scrolling is engineered for frictionless, endless consumption. Books ask you to sit still and focus. The trick is not willpower. The trick is making the book at least as convenient as the feed. If you can press play and get a chapter with the same effort as opening an app, the habit math shifts in your favor.",
  },
  {
    q: "What is the easiest way to swap scrolling for listening?",
    a: "Pick one trigger moment. The ten minutes after dinner on the couch. The five minutes waiting for coffee to brew. The moment you sit down on public transit. When that moment arrives, open LoudReader instead of your feed app and press play. One press. That is the whole swap. Do not try to replace all scrolling at once. Replace one slot.",
  },
  {
    q: "Does listening feel as satisfying as the quick-hit scroll?",
    a: "Honestly, no, in the first two minutes. Scrolling delivers instant tiny rewards. A book chapter takes a few minutes to sink into. But after those first minutes, a book leaves you with something. A scroll session leaves you with the same thing it always leaves you with. That contrast becomes its own motivator once you notice it.",
  },
  {
    q: "Can I listen while doing something else to resist the urge to pick up my phone?",
    a: "Yes, and this is one of the strongest versions of the swap. Put a book on while you fold laundry, do dishes, or tidy up. Your hands are busy, your ears are occupied, and the phone is across the room playing audio with the screen locked. You cannot scroll if the phone is not in your hand.",
  },
  {
    q: "What if I want to highlight something while listening?",
    a: "In LoudReader, notes and highlights are a Premium feature. The free tier gives you unlimited listening and word-by-word highlighting so you can follow along, but marking passages requires Premium. The full set of Premium features includes all 8 voices, speed control (0.3x to 3.0x), sleep timer, soundscapes, and notes.",
  },
];
