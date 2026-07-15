// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Sleep timer options are 15, 30, and 60 minutes:
//     LoudReader/SleepTimerFloatingMenu.swift (options = [15, 30, 60]).
//   - When the timer runs out, playback PAUSES (it does not stop or close
//     the book), so the reading position is exactly where narration
//     stopped: LoudReader/PlayerService.swift, tickSleepTimer() → pause().
//   - Ambient soundscapes are Rain, Fireplace, and Ocean Waves:
//     LoudReader/SoundscapeService.swift (SoundscapeType cases).
//   - Sleep timer and ambient soundscapes are Premium features; free tier
//     is unlimited listening: components/money/site.ts (PRICING) and
//     app/faq/faq-data.ts.
//   - Background playback with the screen locked: LoudReader/Info.plist
//     declares UIBackgroundModes = ["audio"]; lock-screen controls via
//     MPRemoteCommandCenter in PlayerService.swift.
// NO sleep-science claims are made anywhere in this article. No studies
// are cited because none were verified for it; all advice is framed as
// experiential ("many listeners find"), not clinical. Keep it that way
// unless a real, verified citation is added here.
// Claims you may NOT make until verified: any medical/sleep-research claim,
// end-of-chapter timer option (only 15/30/60 minutes exist), fade-out
// behavior specifics.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How do I stop an audiobook from playing all night?",
    a: "Use a sleep timer, every night, no exceptions. In LoudReader you set it to 15, 30, or 60 minutes from the player, and when it runs out playback pauses on its own. Without a timer, the book plays for hours while you sleep and you wake up hopelessly far from where you drifted off.",
  },
  {
    q: "Do I lose my place if I fall asleep while listening?",
    a: "Not if the timer does the stopping. When LoudReader's sleep timer runs out it pauses playback, so the book is parked exactly where narration stopped, at most one timer-length past where you drifted off. The next evening, skip back a little and you're re-oriented within a minute.",
  },
  {
    q: "Does LoudReader have a sleep timer?",
    a: "Yes. 15, 30, or 60 minutes, set right from the player. When it runs out, playback pauses and your place is kept. The sleep timer is part of LoudReader Premium ($7.99/month, $49.99/year, or $199.99 once), alongside all 8 AI voices, speed control, ambient soundscapes, and notes & highlights.",
  },
  {
    q: "What are ambient soundscapes in LoudReader?",
    a: "Continuous background sound (Rain, Fireplace, or Ocean Waves) that plays softly underneath the narration. At bedtime it fills the silence between sentences that can otherwise snap you back awake. Soundscapes are a Premium feature.",
  },
  {
    q: "Is listening to audiobooks in bed bad for sleep?",
    a: "There's no one answer, and this article makes no medical claims. Experientially, many listeners find a familiar book with a timer set is a gentler wind-down than a bright phone screen. The practical rules are: keep the volume low, choose calm and familiar books, and always set the timer so the night has a defined end.",
  },
];
