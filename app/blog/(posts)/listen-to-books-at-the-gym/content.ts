// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Lock-screen controls via MPRemoteCommandCenter: PlayerService.swift
//     configures play, pause, toggle, skip forward/backward (15 sec).
//   - Background audio: Info.plist UIBackgroundModes = ["audio"].
//   - Bluetooth controls: same MPRemoteCommandCenter responds to standard
//     Bluetooth play/pause commands.
//   - On-device voices: speech synthesis runs locally, no internet.
//   - Pricing: components/money/site.ts PRICING.
//   - Free tier unlimited listening: SubscriptionAccess.swift
//     baseFreeFraction = 1.0.
// Claims you may NOT make: any gym performance benefit, fitness statistics,
// or that audiobooks improve workout quality (no verified source).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I actually focus on a book during a workout?",
    a: "It depends on the exercise. Steady cardio like the treadmill, elliptical, or stationary bike is ideal: your body runs on autopilot and your brain follows the book. Heavy lifts where you need to count reps and focus on form are tougher. A good approach: listen during warm-up, cardio, and cool-down. Switch to music during your big sets.",
  },
  {
    q: "Does LoudReader work with gym WiFi that requires a sign-in?",
    a: "It does not matter. LoudReader runs fully on-device and private, your library never leaves your device, and the voices work with no internet connection at all. Captive portal WiFi, spotty gym signal, or airplane mode. None of it affects playback.",
  },
  {
    q: "Can I control playback from my watch or headphones?",
    a: "Bluetooth headphone controls work for play and pause. The lock screen on your iPhone shows play, pause, and 15-second skip. Apple Watch integration specifically for LoudReader is not a current feature, but the standard Now Playing controls on the watch work for pausing and resuming like any audio app.",
  },
  {
    q: "What kind of books actually work at the gym?",
    a: "Action-heavy fiction, thrillers, and fast-paced narrative non-fiction tend to pair best with a workout. The pacing matches the energy. Dense philosophy or technical material is harder because your attention is split. If you would read it on a plane, it works at the gym. If you would read it with a highlighter at a desk, it probably does not.",
  },
  {
    q: "Does the free tier actually let me listen to whole books?",
    a: "Yes. LoudReader's free tier is unlimited listening on every book, cover to cover. No word quota, no time limit, no account required. Premium adds all 23 studio narrators, speed control (0.3x to 3.0x), sleep timer, soundscapes, and notes.",
  },
];
