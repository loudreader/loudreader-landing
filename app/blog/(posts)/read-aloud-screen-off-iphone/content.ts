// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Background playback with the screen locked: LoudReader/Info.plist
//     declares UIBackgroundModes = ["audio", "processing"]. This is the
//     same verification used in the listen-to-books-while-driving article.
//   - Lock-screen / Bluetooth controls: LoudReader/PlayerService.swift
//     configures MPRemoteCommandCenter with play, pause, toggle, and
//     skip forward/backward (preferredIntervals = [15] seconds), and
//     publishes title/author/artwork/elapsed time to MPNowPlayingInfoCenter.
//     This is the same verification source.
//   - iOS apps that do NOT declare the audio background mode stop playback
//     when the screen locks. This is a standard iOS behavior and is
//     stated as a general fact, not a specific claim about any competitor.
//   - The article mentions system-wide Speak Screen as an alternative for
//     apps that lack background audio. Speak Screen is an iOS accessibility
//     feature available since iOS 8.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: screen-off listening in apps we have not verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader keep playing when I lock my iPhone screen?",
    a: "Yes. LoudReader declares the audio background mode in its app configuration, which tells iOS to keep the app's audio running when the screen is off or another app is in the foreground. Lock the screen, put the phone in your pocket, and playback continues without interruption.",
  },
  {
    q: "Can I control playback from the lock screen?",
    a: "Yes. The lock screen shows the book title, author, and elapsed time. Standard playback controls are available: play/pause and skip forward/backward by 15 seconds. You can also control playback from Bluetooth devices (headphones, car stereos, speakers) using their built-in play/pause buttons.",
  },
  {
    q: "Does the screen-off playback work in other iOS apps with text-to-speech?",
    a: "It depends on the app. iOS requires apps to explicitly declare background audio support. Apps that do not declare it stop audio when the screen locks. Many reading apps, note-taking apps, and web browsers fall into this category. A quick test: lock the screen while audio is playing. If it stops, the app does not support screen-off playback. If it continues, it does.",
  },
  {
    q: "What about iOS Speak Screen? Can I listen with the screen off that way?",
    a: "Speak Screen (two-finger swipe down from the top) plays through the system accessibility voice and sometimes continues with the screen locked, but the behavior is inconsistent and it was not designed for it. The voice is the system voice, there are no per-app controls, and playback often stops when you switch apps or receive a notification. For a book, use an app built for screen-off listening.",
  },
  {
    q: "Does screen-off listening drain the battery?",
    a: "LoudReader's voices run on the iPhone's Neural Engine, which is power-efficient. The display, not the audio processing, is the main battery drain on iPhones. Locking the screen turns off the display, which saves a significant amount of battery compared to having the screen on while listening. A fully charged iPhone can play many hours of audio with the screen off.",
  },
  {
    q: "Can I use other apps while LoudReader plays in the background?",
    a: "Yes. The background audio mode keeps LoudReader playing even when another app is in the foreground. You can check messages, browse the web, or use navigation while the book continues reading. The lock screen and Control Center both show the playback controls so you can pause or skip without switching back to LoudReader.",
  },
];
