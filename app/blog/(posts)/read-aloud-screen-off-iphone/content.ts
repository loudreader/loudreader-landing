// FACT PROVENANCE — checked 2026-09-28 against shipping release_v1.12
// (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0):
// - Info.plist: audio background mode; LoudReaderApp.swift:820: playback session.
// - PlayerService.swift:1733–1787: play/pause/toggle, 15-second skip callbacks,
//   next/previous track disabled; no changePlaybackPositionCommand handler.
// - PlayerService.swift:1826–1910: title/author/artwork and available timing.
// - Subscription/PaywallReason.swift:125–148: sleep timer Premium gate.
// - https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MediaPlaybackGuide/Contents/Resources/en.lproj/ConfiguringAudioSettings/ConfiguringAudioSettings.html
//   (read 2026-09-28): audio-session + background-capability requirements.
// - https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios
//   (read 2026-09-28): Speak Screen, voice choice and controller. Does not support
//   the prior article's universal failure / single-voice / no-control claims.
// Source audit, not a new hardware playback test. No guarantee for every headset,
// car stereo or interruption; no remote scrubber claim or battery-hours promise.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need to keep LoudReader open on screen?",
    "a": "No. It supports playback with the screen locked or another app in front, subject to normal audio interruptions."
  },
  {
    "q": "Will my car’s next-track button skip 15 seconds?",
    "a": "Not necessarily. Next-track and skip-forward are different commands. LoudReader supports 15-second skips but disables next/previous track commands."
  },
  {
    "q": "Can I drag the lock-screen progress bar to seek?",
    "a": "LoudReader supplies timing information when available, but does not implement remote position seeking. Use its supported skip controls or return to the reader."
  },
  {
    "q": "Is screen-off playback a guarantee of offline access?",
    "a": "No. Test your imported book and chosen voice without Wi-Fi or mobile data before depending on them offline."
  }
];
