// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Lock-screen controls: LoudReader/PlayerService.swift configures
//     MPRemoteCommandCenter with play, pause, toggle, and skip
//     forward/backward (preferredIntervals = [15] seconds).
//   - Background playback with screen locked: LoudReader/Info.plist
//     UIBackgroundModes = ["audio"].
//   - Bluetooth headphone controls: same MPRemoteCommandCenter setup
//     responds to standard play/pause from Bluetooth devices.
//   - On-device voices, no internet needed: voice data is bundled or
//     downloaded to the device, speech synthesis runs locally.
//   - Pricing: components/money/site.ts PRICING (single source of truth).
//   - Free tier unlimited listening: SubscriptionAccess.swift
//     baseFreeFraction = 1.0, no word quota.
// Claims you may NOT make: any specific health benefit of walking,
// pedestrian safety statistics, or that Listening-while-walking improves
// recall (no verified citation at write time).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Do I need an internet connection to listen while walking?",
    a: "Not with LoudReader. The voices run entirely on your iPhone, so the app is fully on-device and private, your library never leaves your device, and playback works on trails, in parks with spotty signal, and anywhere you walk. No streaming, no pre-downloading audio files.",
  },
  {
    q: "Can I control playback without taking my phone out of my pocket?",
    a: "Yes. The lock screen shows play, pause, and 15-second skip controls. If your headphones or earbuds have a play/pause button, that works too. Tap once to pause, once to resume. No need to unlock the phone mid-walk.",
  },
  {
    q: "What kind of books work best on a walk?",
    a: "Narrative-heavy books tend to be the easiest to follow while walking: fiction, memoirs, narrative history, and any non-fiction that tells a story rather than builds an argument. Dense textbooks or reference-heavy books are tougher because you cannot easily flip back to check a diagram or a footnote.",
  },
  {
    q: "Is walking and listening safe?",
    a: "Use common sense. Keep the volume low enough that you can hear traffic, bikes, and your surroundings. A single earbud in, or bone-conduction headphones that leave your ears open, are practical choices. And obviously, look both ways before crossing streets.",
  },
  {
    q: "Does LoudReader drain my battery on a long walk?",
    a: "On-device speech synthesis uses some battery, but locking the screen helps since the display is the biggest drain. A fully charged iPhone handles a long walk easily. If you are doing a multi-hour hike, a small power bank in your bag removes any worry.",
  },
];
