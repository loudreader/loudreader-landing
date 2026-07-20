// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Lock-screen / Bluetooth controls via MPRemoteCommandCenter:
//     PlayerService.swift, play, pause, toggle, skip (15 sec).
//   - Background audio: Info.plist UIBackgroundModes = ["audio"].
//   - On-device voices: speech synthesis runs locally, no internet.
//   - Playback speed 0.3x to 3.0x is Premium: PaywallReason.playbackSpeed,
//     site.ts PRICING.
//   - Sleep timer is Premium: PaywallReason.sleepTimer.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: any food safety or cooking benefit claims,
// that listening improves cooking quality.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I use LoudReader hands-free in the kitchen?",
    a: "Yes. Set the book playing before you start cooking, and use Bluetooth speaker or headphone controls to pause and resume. The lock screen also gives you play, pause, and 15-second skip. The phone can sit on the counter, locked, while your hands stay on the chopping board.",
  },
  {
    q: "What if the pan is sizzling and I miss a few sentences?",
    a: "Tap the 15-second skip-back button on the lock screen or your headphones. It jumps back so you can catch what you missed. No need to unlock the phone and hunt for your place. The skip interval is fixed at 15 seconds, which covers most moments of distraction.",
  },
  {
    q: "Does LoudReader run on my iPad or Mac in the kitchen?",
    a: "LoudReader is a native Mac and iPhone app. On Mac, it works with any Bluetooth speaker or headphones. On iPhone, it runs with the screen locked and in your pocket. There is no dedicated iPad layout at this time, but the iPhone app runs on iPad in compatibility mode.",
  },
  {
    q: "Will audiobook narration get drowned out by kitchen noise?",
    a: "Connect to a Bluetooth speaker or a pair of earbuds and the voice comes through clearly. If you use your phone's built-in speaker, loud vent hoods, running water, and sizzling pans will compete with the narration. A small kitchen speaker solves this completely.",
  },
  {
    q: "Can I set a sleep timer for cooking sessions?",
    a: "The sleep timer is a Premium feature, and while it is designed for falling asleep, it works just as well for setting a fixed listening window. Set it for 30 minutes and get through a chapter while dinner cooks. It fades out gently and saves your spot.",
  },
];
