// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift (play, pause, 15s skip).
//   - On-device voices: Apple speech synthesis, all processing local. No
//     network dependency, which matters because listening with the screen
//     locked/off is the core use case here.
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Sleep timer: Premium (PaywallReason.sleepTimer).
//   - Soundscapes: Premium (PaywallReason.soundscapes).
//   - EPUB/PDF import + 70,000+ Gutenberg: verified in-app.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
// NO claims about: medical advice for eye conditions, blue-light exposure stats,
// sleep science, or clinical benefits. The article positions TTS as practical
// relief for screen-overloaded eyes, not a medical intervention.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is visual fatigue and why does it hit at night?",
    a: "Visual fatigue is the cumulative tiredness from focusing on screens and text all day. By evening, the muscles that control your eye focus are worn out, screen glare feels harsher, and your eyes want to close. It is not a medical condition, it is the natural result of spending hours staring at displays. Reading for pleasure at the end of that day feels harder than it should because your eyes are done before your brain is.",
  },
  {
    q: "Does read-aloud actually help or is it just a workaround?",
    a: "It is a workaround, and workarounds are underrated. Your eyes are tired. You want to read. Listening lets you do that without asking more from the part that is already spent. It is not fixing the underlying fatigue (only rest does that), but it preserves the evening reading time you would otherwise lose to discomfort.",
  },
  {
    q: "Can I listen with my eyes completely closed?",
    a: "Yes. Press play, lock the screen, close your eyes. The narration continues. On iPhone, lock-screen controls let you pause and skip without opening your eyes fully. The sleep timer (a Premium feature) can stop playback after 30 or 60 minutes so you do not lose your place if you drift off.",
  },
  {
    q: "What about during the workday?",
    a: "You can use listening as a screen break between tasks. Instead of reading a long article on your monitor, send it to LoudReader as a PDF and listen while you lean back or look out the window. It is a five-minute break that actually rests your eyes while still getting the information. The app is fully on-device and private, your library never leaves your device, so it works on your work machine without sending company documents to a cloud service.",
  },
  {
    q: "Does the voice quality matter for tired eyes?",
    a: "Yes. A harsh or robotic voice is grating when you are already fatigued. LoudReader uses natural offline voices that are smoother and less straining to listen to for long periods. You can try all 23 studio narrators free for the first 8 hours and pick the gentlest one. This matters more than you would think after a long screen day.",
  },
];
