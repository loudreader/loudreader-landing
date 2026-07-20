// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Screen-off listening: Info.plist UIBackgroundModes = ["audio"];
//     lock-screen controls via MPRemoteCommandCenter in PlayerService.swift.
//   - On-device voices, no cloud: speech synthesis runs locally.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
//   - Night mode is free: ReaderControlsSheet.swift, no paywall gate.
//   - Reading Style (fonts, sizes, spacing) is Premium:
//     PaywallReason.readingStyle.
//   - Word-by-word highlighting free: ReaderStylesheet.swift
//     (.tts-word-highlight).
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: specific screen-time reduction statistics,
// eye health benefits beyond screen-off listening (the article frames
// this as shifting reading off screens, not medical advice).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How much screen time can I cut by listening instead?",
    a: "If you currently read on a phone or tablet for 30 minutes a day, switching that session to audio eliminates those 30 minutes of screen time entirely. If you read physical books already and are worried about total screen hours from other activities, this swap affects reading specifically. The cumulative relief on your eyes adds up over weeks.",
  },
  {
    q: "Does listening with the screen off actually work?",
    a: "Yes. Press play in LoudReader, lock the screen, and put the phone down. The narration keeps going. The lock screen shows play, pause, and 15-second skip, and playback continues even if the phone auto-locks. The display stays off the entire time your book is playing.",
  },
  {
    q: "Is listening to a book better for my eyes than reading on a screen?",
    a: "It removes screen exposure during the reading session itself. You are not staring at a backlit display for the length of the chapter. Your eyes can rest, close, or look at something across the room. It is not a medical claim about eye health. It is a practical way to shift one daily chunk of screen time off the screen.",
  },
  {
    q: "Can I switch between reading on screen and listening in the same book?",
    a: "Yes, and this is the practical way to reduce screen time without giving up the page entirely. Read with your eyes when the screen budget allows. When you hit your limit, press play and listen with the screen locked. The position is saved either way, so you lose no progress.",
  },
  {
    q: "Does LoudReader have a dark mode?",
    a: "Yes. Night mode is free: one tap switches the reader to a dark color scheme. It is kinder in low light. Custom fonts, text sizes, and spacing (the Reading Style options) are part of LoudReader Premium.",
  },
];
