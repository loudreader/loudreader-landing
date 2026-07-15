// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Background playback with the screen locked: LoudReader/Info.plist
//     declares UIBackgroundModes = ["audio", "processing"].
//   - Lock-screen / Bluetooth controls: LoudReader/PlayerService.swift
//     configures MPRemoteCommandCenter with play, pause, toggle, and
//     skip forward/backward (preferredIntervals = [15] seconds), and
//     publishes title/author/artwork/elapsed time to MPNowPlayingInfoCenter.
//   - CarPlay: NOT present anywhere in the app source. Do NOT claim CarPlay
//     support in this article until it ships and is verified in-app.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts
//     (single source of truth, synced with the App Store listing).
// Statements about audiobook stores (Audible, Apple Books, Spotify) and
// library apps (Libby, Hoopla) are deliberately generic descriptions of what
// those services are, with no pricing or feature specifics that could go stale.
// Legal guidance is deliberately non-specific: laws vary by jurisdiction and
// the article says so instead of citing any statute.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I listen to an ebook in the car if it has no audiobook version?",
    a: "Yes. A text-to-speech reader turns the ebook itself into the audiobook. LoudReader reads any DRM-free EPUB or PDF aloud with natural offline voices, remembers your place, and needs no conversion step. You import the file once and press play. It works for novels, technical books, manuscripts, and PDFs that never got a recorded edition.",
  },
  {
    q: "Do I need an internet connection to listen while driving?",
    a: "Not with LoudReader. The voices run entirely on your iPhone, so listening is fully on-device and private, your library never leaves your device, and playback continues through tunnels, rural dead zones, and even airplane mode. Streaming and cloud-based apps generally need a connection or audio you remembered to download in advance.",
  },
  {
    q: "Is listening to audiobooks while driving safe and legal?",
    a: "Listening to audio is generally treated the same as listening to the radio or a podcast, which is legal for drivers in most places. What traffic laws restrict is handling your phone: many jurisdictions ban handheld phone use outright, and laws vary, so check your local rules. The safe pattern is simple. Set everything up before you drive, and control playback only from the lock screen or your car's own buttons.",
  },
  {
    q: "Does LoudReader keep playing with the screen locked?",
    a: "Yes. On iPhone, playback continues with the screen locked, and the lock screen shows the book with play, pause, and 15-second skip controls. The same play/pause commands work from standard Bluetooth controls, like the buttons on many car stereos and steering wheels.",
  },
  {
    q: "How fast should I set playback speed in the car?",
    a: "Slower than at your desk. Driving deserves most of your attention, so pick a speed you can follow easily. Starting at 1.0x is sensible, and you can nudge it up on familiar routes. Adjust it before you set off, not while moving. Speed control from 0.3x to 3.0x is part of LoudReader Premium; the free tier plays at normal speed.",
  },
];
