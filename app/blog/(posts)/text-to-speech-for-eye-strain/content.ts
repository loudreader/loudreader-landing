// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Word-by-word highlighting: free, not gated (ReaderStylesheet.swift +
//     HighlightSchedule.swift).
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift (play, pause, 15s skip).
//   - On-device voices: Apple speech synthesis, no cloud dependency.
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Sleep timer: Premium (PaywallReason.sleepTimer).
//   - Soundscapes: Premium (PaywallReason.soundscapes).
//   - Free tier unlimited listening: SubscriptionAccess.swift.
// NO claims about: medical advice for eye conditions, ergonomic certifications,
// blue-light filtering, or clinical claims about eye strain reduction.
// Eye strain discussion is practical and experiential, not clinical.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does listening instead of reading actually reduce eye strain?",
    a: "Subjectively, yes, and the logic is straightforward: eye strain comes from focusing on a screen or page for hours. Switching to audio removes the visual focus entirely. Your eyes can rest, close, or look at something distant while the book continues. It is not a medical treatment, it is just giving your eyes the break they are asking for.",
  },
  {
    q: "When in the day should I switch to listening?",
    a: "Most screen-heavy workers find the last hour or two of the day is when their eyes protest the loudest. Switching to audio for evening reading lets you finish the chapter without pushing through discomfort. Some people also use listening for the post-lunch slump, when focus dips and staring at text feels heavier than usual.",
  },
  {
    q: "Can I listen with the screen off?",
    a: "Yes. On iPhone, playback continues with the screen locked, and lock-screen controls give you play, pause, and 15-second skip. On Mac, you can minimize the app or turn off the display. The voices run locally, so no connection is needed. This is the core use case: the book in your ears while your eyes get the rest of the night off.",
  },
  {
    q: "What if I get eye strain from work but still want to read at night?",
    a: "That is exactly the gap text-to-speech fills. You spent eight hours on a work screen. Reading for pleasure should not feel like overtime for your eyes. Import your book into LoudReader, pick a comfortable voice, and listen. The native Mac and iPhone apps give you the same experience on whatever device is nearby when your eyes give out.",
  },
  {
    q: "Does the sleep timer help?",
    a: "Yes, and it is a Premium feature. Set the timer for 30 or 60 minutes, listen in the dark, and the narration fades out on its own. Combined with ambient soundscapes (also Premium), it is a way to read before sleep without any light hitting your eyes at all.",
  },
];
