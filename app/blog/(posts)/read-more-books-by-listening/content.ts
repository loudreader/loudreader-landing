// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Lock-screen controls via MPRemoteCommandCenter: PlayerService.swift.
//   - Background audio, screen locked: Info.plist UIBackgroundModes = ["audio"].
//   - On-device voices, no internet: speech synthesis runs locally.
//   - 70,000+ Gutenberg books built in.
//   - Free tier unlimited listening: SubscriptionAccess.swift
//     baseFreeFraction = 1.0.
//   - Import EPUB and PDF (DRM-free): ContentView.swift.
//   - Pricing: components/money/site.ts PRICING.
//   - Playback speed 0.3x to 3.0x is Premium: PaywallReason.playbackSpeed.
// Claims you may NOT make: any specific reading-habit statistics,
// invented productivity numbers, or claims that listening is faster
// than reading (framed as "fit books into time that eyes cannot use").

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How many more books can I finish by adding listening?",
    a: "There is no magic multiplier, but the math is straightforward. If your commute is 30 minutes each way, that is 5 hours a week. A typical novel is 10 to 12 hours of audio. You finish roughly one extra book every two weeks from commute time alone, before you count any other moment.",
  },
  {
    q: "What is 'dead time' and why does it matter?",
    a: "Dead time is the minutes your hands and body are occupied but your brain is underused. Walking, driving, cooking, cleaning, folding laundry, waiting in line. Your eyes cannot read during these moments, but your ears can listen. Turning dead time into listening time is the easiest way to add books to your year without rearranging your calendar.",
  },
  {
    q: "Do I have to listen at faster speeds to get through more books?",
    a: "No. Speed is a lever, not a requirement. Even at 1.0x, filling dead time with books adds significant reading volume. Some listeners enjoy slightly faster speeds once they are used to it, but you do not need to race through books to read more of them. You just need to be listening during time you were not reading before.",
  },
  {
    q: "Can I read the same book with my eyes and then switch to ears?",
    a: "Yes, and this is the best of both worlds. Read with your eyes during the quiet evening hour. Listen with your ears during the morning walk, the commute, and the dishes. One book, one position, two formats. LoudReader saves your place regardless of which mode you use.",
  },
  {
    q: "Is the free tier actually enough to read more books?",
    a: "Yes. The free tier includes unlimited listening on every book, cover to cover. No word quota, no time limit, no account required. One natural offline voice. You can finish as many books as you want for free. Premium adds all 8 voices, speed control (0.3x to 3.0x), sleep timer, soundscapes, and notes.",
  },
];
