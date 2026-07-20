// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Position saving: playback resumes from current position across
//     app launches, eyes-to-ears switching uses the same file.
//   - Lock-screen controls via MPRemoteCommandCenter: PlayerService.swift.
//   - Background audio: Info.plist UIBackgroundModes = ["audio"].
//   - On-device voices, no internet: speech synthesis runs locally.
//   - Sleep timer is Premium: PaywallReason.sleepTimer.
//   - Playback speed 0.3x to 3.0x is Premium: PaywallReason.playbackSpeed.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: any completion-rate statistics, ADHD-specific
// completion data, or that listening eliminates all barriers to finishing
// books. The article frames momentum as practical advice, not a clinical
// claim.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why do I keep abandoning books halfway through?",
    a: "Most abandoned books are victims of a gap, not a bad book. You hit a busy week, you go three days without reading, the thread breaks, and picking it back up feels like restarting. The book didn't get worse. The continuity got interrupted and eyeball-only reading has no way to bridge that gap.",
  },
  {
    q: "How does listening help me finish a book I already started?",
    a: "Listening fills the gaps that kill momentum. When you cannot sit down with the book, you listen during the walk, the drive, the dishes. The story keeps moving in your head even when your eyes are unavailable. A book that gets a chapter a day through any channel is a book that stays alive in your attention.",
  },
  {
    q: "Can I switch between reading and listening in the same book?",
    a: "Yes. In LoudReader, the book you read and the book that is narrated are the same imported file. Read chapter three with your eyes in the evening. Listen to chapter four with your ears during tomorrow's commute. Your position is saved either way. There is no syncing step and no two-edition problem.",
  },
  {
    q: "Should I switch to listening when I feel stuck on a book?",
    a: "Yes, try it before you give up on the book entirely. A change of format can reset your relationship with the material. A chapter that felt like a slog on the page might move differently in your ears, especially if the writing is voice-driven or narrative. If it still does not grab you after a few chapters of listening, the book might genuinely not be for you.",
  },
  {
    q: "Does LoudReader have a sleep timer so I do not lose my place?",
    a: "The sleep timer is a Premium feature. It gently fades out playback after a set duration and saves your position, so nodding off costs you a few minutes of lost place rather than a whole night of narration. Without the timer, playback continues until you pause it manually.",
  },
];
