// FACT PROVENANCE — checked 2026-09-28 against shipping release_v1.12
// (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), not dirty checkout HEAD:
// - LoudReader/AudioCacheManager.swift:69,306–374: bounded cache and eviction,
//   including prepared audio; no guarantee of perpetual or universal cache hits.
// - LoudReader/Info.plist UIBackgroundModes + LoudReaderApp.swift:820:
//   background audio with playback/spokenAudio session.
// - Subscription/PaywallReason.swift:125–148: Premium sleep timer.
// - Canonical product audit 2026-09-28: local synthesis; other app services use
//   networking. We do not state a user-facing analytics opt-out path.
// - https://support.apple.com/en-gb/102432 (read 2026-09-28): Battery settings.
// - https://support.apple.com/en-gb/109351 (read 2026-09-28): brightness guidance.
// No battery benchmark or runtime session was performed for this article.
// Do not claim a universal power hierarchy, continual cloud streaming, exact
// podcast equivalence, or a tested battery advantage over another app.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is there a LoudReader hours-per-charge figure?",
    "a": "No measured hours-per-charge result is provided here. Battery life depends on the device and listening conditions."
  },
  {
    "q": "Does cached speech use no battery?",
    "a": "No. Cached audio still needs playback, and the cache can discard older entries. It may avoid another round of speech generation while that audio remains available."
  },
  {
    "q": "Is cloud speech always worse for battery life?",
    "a": "No. Local generation and network delivery have different costs. A fair comparison needs measurements under similar conditions."
  },
  {
    "q": "Does locking the screen stop LoudReader?",
    "a": "No, LoudReader supports background playback. Calls, audio-route changes and other interruptions can still affect a session."
  }
];
