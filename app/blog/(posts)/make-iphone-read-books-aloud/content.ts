// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - iOS Speak Screen / Spoken Content: Apple iPhone User Guide
//     https://support.apple.com/guide/iphone/iph96b214f0/ios
//     ("Hear iPhone speak the screen, selected text, and typing feedback".
//     Settings → Accessibility → Spoken Content; two-finger swipe down from
//     the top of the screen; on-screen speech controller; optional content
//     highlighting). Same source already used by /listen-to-pdf-iphone.
//   - VoiceOver described only at a high level (Apple's built-in screen
//     reader, changes standard touch gestures), no step-by-step claims.
//   - Kindle Assistive Reader: Amazon Customer Service page "Use Assistive
//     Reader to Read Aloud in Kindle Apps"
//     https://www.amazon.com/gp/help/customer/display.html?nodeId=TqLHvK6eo6O7DJVQoZ
//     (exists in Kindle apps, uses the device's OS text-to-speech engines,
//     i.e. system voices, with synchronized highlighting; works with
//     Enhanced Typesetting titles).
//   - LoudReader claims: components/money/site.ts + app/faq/faq-data.ts
//     (pricing, free tier, 70,000+ Gutenberg catalog, word-by-word
//     highlighting, English-only voices today) and the app source
//     (background audio: UIBackgroundModes "audio" in Info.plist;
//     lock-screen controls: MPRemoteCommandCenter in PlayerService.swift).
// Claims you may NOT make until verified: CarPlay support, any specific
// Speak Screen auto-page-turn behavior per app (it varies by app, and the
// copy deliberately says so), non-English LoudReader voices.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How do I turn on Speak Screen on iPhone?",
    a: "Go to Settings → Accessibility → Spoken Content and turn on Speak Screen. Then, on any page you want read aloud, swipe down from the top of the screen with two fingers. An on-screen controller lets you pause and adjust the speaking rate. It reads what's currently on screen using the system voice.",
  },
  {
    q: "Why does the built-in iPhone voice sound robotic?",
    a: "Speak Screen and most reading features use the system text-to-speech voices, which are built for accessibility and announcements rather than long-form narration. They're perfectly intelligible, but over a whole book the flat pacing wears on you. Purpose-built reading apps ship their own neural voices. LoudReader's natural offline voices are generated on-device and built specifically for books.",
  },
  {
    q: "Can my iPhone read Kindle books aloud?",
    a: "Yes, two ways: the Kindle app's built-in Assistive Reader reads Kindle books with synchronized highlighting using your iPhone's system voices, or iOS Speak Screen can read whatever page is open. Kindle purchases are DRM-locked, so they can't be imported into third-party apps like LoudReader. Only Amazon's own app can open them.",
  },
  {
    q: "Does LoudReader work without internet on iPhone?",
    a: "Yes, 100%. LoudReader's voices run entirely on your iPhone, so reading, listening, and highlighting all work in airplane mode. It's fully on-device and private, your library never leaves your device. You only need a connection to browse and download new books from the built-in Project Gutenberg catalog.",
  },
  {
    q: "Does the free version of LoudReader limit how much it reads?",
    a: "No. The free tier is unlimited listening on every book, cover to cover, with no word quota, no monthly cap, and no account. Every voice is free for your first 8 hours of listening. After that, free users keep the default voice, and Premium keeps all 8 AI voices plus speed control, a sleep timer, soundscapes, and notes & highlights.",
  },
];
