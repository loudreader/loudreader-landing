// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-25 against:
//   - data/voices.ts (the /voices roster source, audited 2026-08-20 against
//     the shipping app's studio voice enum): Polish has exactly one
//     narrator, Tomasz. There is no second Polish voice to choose between.
//   - components/money/site.ts VOICES.lazyLanguages: narrators for a language
//     appear in the picker once there is a book in that language in the
//     library. This is stated plainly, not as a workaround.
//   - components/money/site.ts PRICING, DIFFERENTIATORS, VOICES: pricing,
//     the free tier, on-device/private phrasing, and the 10-language count
//     come from here verbatim, not retyped from memory.
//   - components/money/site.ts FREE_TIER: all 23 narrators are free for
//     the first 8 hours. After that, the one keepable free voice is chosen
//     from the eligible English lineup; this language narrator needs Premium.
// App-behavior claims used: on-device, no account, imports EPUB/PDF,
// 70,000+ Project Gutenberg books, free tier = unlimited listening, Premium
// adds all voices + speed (0.3x to 3.0x) + sleep timer + soundscapes + notes.
// Claims NOT made: CarPlay, Android, Windows, OCR of scanned/image-only PDFs,
// a choice of Polish narrators, or a regional-accent setting (the app does
// not expose one; not claimed).

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader read Polish text aloud?",
    a: "Yes. LoudReader has one Polish narrator, Tomasz, and it reads any DRM-free Polish EPUB or PDF aloud on your iPhone or Mac. The voice runs entirely on the device, so it works offline once the book is imported.",
  },
  {
    q: "How many Polish voices does LoudReader offer?",
    a: "One. Tomasz is the only Polish narrator in the app. If you were hoping to compare a few Polish voices against each other, LoudReader doesn't offer that today. English has 11 voices and Spanish has 4, but most other languages, Polish included, ship with a single narrator.",
  },
  {
    q: "Can I hear the Polish voice before I download the app?",
    a: "Yes. The voices page plays a real recorded sample of every narrator, including Tomasz reading in Polish, with no download or account required. It's the fastest way to check the voice fits your ear before you commit to anything.",
  },
  {
    q: "Do I need an account to use the Polish voice?",
    a: "No. There is no account and no sign-up. Import a book and the Polish narrator becomes available once your library has a Polish-language book in it.",
  },
  {
    q: "Is the Polish voice free to use?",
    a: `Try ${FREE_TIER.trial}. After that, continuing with Tomasz, the Polish narrator, requires Premium. Free users choose one keepable voice from the eligible English lineup and retain unlimited listening on every book, with no account or word quota. Premium includes all 23 studio narrators across 10 languages, playback speed from 0.3x to 3.0x, a sleep timer, soundscapes, and notes and highlights.`,
  },
  {
    q: "Can LoudReader read a Polish PDF that's a scan of a printed page?",
    a: "No. LoudReader reads the actual text layer in an EPUB or PDF. A scanned page saved as an image has no text layer for the app to read, in Polish or any other language.",
  },
];
