// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-25 against:
//   - data/voices.ts (the /voices roster source, audited 2026-08-20 against
//     the shipping app's studio voice enum): 10 languages, 23 narrators
//     total. English has 11 voices, Spanish has 4, and German, French,
//     Italian, Dutch, Polish, Portuguese, Swedish, and Danish each have
//     exactly one.
//   - components/money/site.ts VOICES: headline count ("23 studio narrators
//     across 10 languages"), lazyLanguages behavior (a language's narrators
//     appear in the picker once the library has a book in that language),
//     and languageList, quoted verbatim rather than retyped from memory.
//   - components/money/site.ts PRICING, DIFFERENTIATORS: pricing, the free
//     tier, and on-device/private phrasing come from here verbatim.
//   - components/money/site.ts FREE_TIER: all 23 narrators are free for
//     the first 8 hours. After that, the one keepable free voice is chosen
//     from the eligible English lineup; other narrators need Premium.
// App-behavior claims used: on-device, no account, imports EPUB/PDF,
// 70,000+ Project Gutenberg books, free tier = unlimited listening, Premium
// adds all voices + speed (0.3x to 3.0x) + sleep timer + soundscapes + notes.
// Claims NOT made: CarPlay, Android, Windows, OCR of scanned/image-only PDFs,
// a language not in the 10-language list above, or a second voice for any
// language outside English and Spanish (none exists; not claimed).

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "How many languages does LoudReader's text to speech support?",
    a: "Ten: English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish, and Danish. Across those 10 languages there are 23 narrators in total. English has 11 of them and Spanish has 4; the other eight languages each ship with one.",
  },
  {
    q: "Can I use different voices for different languages in the same app?",
    a: "Yes. The narrator picker is organized by language, and a language's narrators appear once your library has a book in that language. You can have an English book read by one of 11 English voices and a French book read by the single French narrator in the same app, with no separate mode or setup between them.",
  },
  {
    q: "Is the non-English support as deep as the English support?",
    a: "No, and it's worth being direct about that. English has 11 narrators to choose from; every other language on the roster has one, except Spanish, which has 4. If you want to compare several native voices against each other, only English and Spanish give you that. The other eight languages give you one narrator, not a lineup.",
  },
  {
    q: "Do I need an account to use LoudReader's multilingual voices?",
    a: "No. There is no account and no sign-up. Import a book in any of the 10 supported languages and the matching narrator or narrators become available in the picker.",
  },
  {
    q: "Are all 23 voices free to use?",
    a: `Try ${FREE_TIER.trial}. After that, free users choose one keepable voice from the eligible English lineup and retain unlimited listening on every book, with no account or word quota. Continuing with the other narrators, including all non-English voices, requires Premium, which also adds playback speed from 0.3x to 3.0x, a sleep timer, soundscapes, and notes and highlights.`,
  },
  {
    q: "Can LoudReader translate a book into another language?",
    a: "No. LoudReader reads text aloud in the language it's written in; it doesn't translate content between languages. A German book is read by the German narrator in German, not translated and read in English.",
  },
];
