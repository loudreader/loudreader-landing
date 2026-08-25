// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against:
//   - data/voices.ts (the /voices roster source, audited 2026-08-20 against
//     the shipping app's studio voice enum): Portuguese has exactly one
//     narrator, Rafael. There is no second Portuguese voice to choose between.
//   - components/money/site.ts VOICES.lazyLanguages: narrators for a language
//     appear in the picker once there is a book in that language in the
//     library. This is stated plainly, not as a workaround.
//   - components/money/site.ts PRICING, DIFFERENTIATORS, VOICES: pricing,
//     the free tier, on-device/private phrasing, and the 10-language count
//     come from here verbatim, not retyped from memory.
//   - the app's free-tier voice engine (checked in-app, not named here per
//     policy): its language code is fixed to English, and its selectable
//     voices are English-only. The free tier's one chosen voice is always
//     English. It can never be Rafael, so Premium is required
//     unconditionally to hear the Portuguese narrator, not "if" the free
//     voice happens to be someone else.
// App-behavior claims used: on-device, no account, imports EPUB/PDF,
// 70,000+ Project Gutenberg books, free tier = unlimited listening, Premium
// adds all voices + speed (0.3x to 3.0x) + sleep timer + soundscapes + notes.
// Claims NOT made: CarPlay, Android, Windows, OCR of scanned/image-only PDFs,
// a choice of Portuguese narrators, Brazilian vs European Portuguese as a
// selectable option (the app does not expose that distinction; not claimed).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader read Portuguese text aloud?",
    a: "Yes. LoudReader has one Portuguese narrator, Rafael, and it reads any DRM-free Portuguese EPUB or PDF aloud on your iPhone or Mac. The voice runs entirely on the device, so it works offline once the book is imported.",
  },
  {
    q: "How many Portuguese voices does LoudReader offer?",
    a: "One. Rafael is the only Portuguese narrator in the app. If you want a choice of Portuguese voices, LoudReader will not give you that today. English has 11 voices and Spanish has 4, but most other languages, Portuguese included, ship with a single narrator.",
  },
  {
    q: "Is LoudReader's Portuguese voice Brazilian or European Portuguese?",
    a: "The app does not expose that as a separate setting. Rafael is simply labeled the Portuguese narrator. If the distinction matters for your material, listen to the sample on the voices page before you rely on the app for a specific project.",
  },
  {
    q: "Do I need an account to use the Portuguese voice?",
    a: "No. There is no account and no sign-up. Import a book and the Portuguese narrator is available the moment your library has a Portuguese-language book in it.",
  },
  {
    q: "Is the Portuguese voice free to use?",
    a: "LoudReader's free tier is unlimited listening on every book, cover to cover, with no account and no word quota, but the free tier's one chosen voice comes from the English lineup, not Rafael. Hearing the Portuguese narrator needs Premium, which adds all 23 studio narrators across 10 languages, playback speed from 0.3x to 3.0x, a sleep timer, soundscapes, and notes and highlights.",
  },
  {
    q: "Can LoudReader read a Portuguese PDF that's a scan of a printed page?",
    a: "No. LoudReader reads the actual text layer in an EPUB or PDF. A scanned page saved as an image has no text layer for the app to read, in Portuguese or any other language.",
  },
];
