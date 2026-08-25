// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-25 against:
//   - data/voices.ts (the /voices roster source, audited 2026-08-20 against
//     the shipping app's studio voice enum): Italian has exactly one
//     narrator, Marco. There is no second Italian voice to choose between.
//   - components/money/site.ts VOICES.lazyLanguages: narrators for a language
//     appear in the picker once there is a book in that language in the
//     library. This is stated plainly, not as a workaround.
//   - components/money/site.ts PRICING, DIFFERENTIATORS, VOICES: pricing,
//     the free tier, on-device/private phrasing, and the 10-language count
//     come from here verbatim, not retyped from memory.
//   - the app's free-tier voice engine (checked in-app, not named here per
//     policy): its language code is fixed to English, and its selectable
//     voices are English-only. The free tier's one chosen voice is always
//     English. It can never be Marco, so Premium is required
//     unconditionally to hear the Italian narrator, not "if" the free
//     voice happens to be someone else.
// App-behavior claims used: on-device, no account, imports EPUB/PDF,
// 70,000+ Project Gutenberg books, free tier = unlimited listening, Premium
// adds all voices + speed (0.3x to 3.0x) + sleep timer + soundscapes + notes.
// Claims NOT made: CarPlay, Android, Windows, OCR of scanned/image-only PDFs,
// a choice of Italian narrators, or a regional-accent setting (the app does
// not expose one; not claimed).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader read Italian text aloud?",
    a: "Yes. LoudReader has one Italian narrator, Marco, and it reads any DRM-free Italian EPUB or PDF aloud on your iPhone or Mac. The voice runs entirely on the device, so it works offline once the book is imported.",
  },
  {
    q: "How many Italian voices does LoudReader offer?",
    a: "One. Marco is the only Italian narrator in the app. If you were hoping to compare a few Italian voices against each other, LoudReader doesn't offer that today. English has 11 voices and Spanish has 4, but most other languages, Italian included, ship with a single narrator.",
  },
  {
    q: "Can I hear the Italian voice before I download the app?",
    a: "Yes. The voices page plays a real recorded sample of every narrator, including Marco reading in Italian, with no download or account required. It's the fastest way to check the voice fits your ear before you commit to anything.",
  },
  {
    q: "Do I need an account to use the Italian voice?",
    a: "No. There is no account and no sign-up. Import a book and the Italian narrator becomes available once your library has an Italian-language book in it.",
  },
  {
    q: "Is the Italian voice free to use?",
    a: "LoudReader's free tier is unlimited listening on every book, cover to cover, with no account and no word quota, but the free tier's one chosen voice comes from the English lineup, not Marco. Hearing the Italian narrator needs Premium, which adds all 23 studio narrators across 10 languages, playback speed from 0.3x to 3.0x, a sleep timer, soundscapes, and notes and highlights.",
  },
  {
    q: "Can LoudReader read an Italian PDF that's a scan of a printed page?",
    a: "No. LoudReader reads the actual text layer in an EPUB or PDF. A scanned page saved as an image has no text layer for the app to read, in Italian or any other language.",
  },
];
