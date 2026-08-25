// FACT PROVENANCE. Every app-behavior and roster claim verified on 2026-08-24
// against:
//   - data/voices.ts (VOICE_LANGUAGES, ALL_VOICES): the English roster is 11
//     voices, a mix of male- and female-presenting names and blurbs (James,
//     Oliver, Henry, Arthur, Hugo are male-presenting; Nora, Clara, Emma,
//     Alice, Grace, Ivy are female-presenting), audited 2026-08-20.
//   - components/money/site.ts (VOICES): free tier = one voice with
//     unlimited listening; Premium opens up the full roster.
//   - components/money/site.ts (CLONING): on-device voice cloning from about
//     ten seconds of speech, Premium feature.
// No engine or model names appear anywhere in this file, per
// components/money/site.ts.
// This article makes no claim that either gender of narrator is objectively
// preferred, more effective, or more common among listeners. No survey,
// study, or percentage of any kind is cited or implied anywhere in this
// file, because none was verified. Preference is treated explicitly as
// personal and untestable in the abstract, which is why the article routes
// to /voices instead of arguing a side.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is a male or female narrator better for audiobooks?",
    a: "Neither, in general. It's a matter of personal taste, and taste varies by listener and even by book. There's no reliable research that says one gender of narrator is objectively better at holding attention or aiding comprehension, so treat any claim like that with suspicion. The only useful answer is the one you get from listening yourself.",
  },
  {
    q: "Does the narrator's gender need to match the author or the main character?",
    a: "No. Plenty of well-regarded audiobooks pair a narrator of one gender with an author or protagonist of another, and it works fine. Matching genders can feel natural but isn't required for the reading to land.",
  },
  {
    q: "How many male and female voices does LoudReader have?",
    a: "The English roster is 11 narrators, split between male-presenting and female-presenting voices, so there's real choice on both sides. Every one of them is playable at /voices before you pick.",
  },
  {
    q: "Can I use a different narrator for different books?",
    a: "Yes. You can change the voice from the reader controls at any point. It's a single app-wide setting rather than saved per book, so switching narrators changes what plays next across your whole library until you switch again, not just the one title.",
  },
  {
    q: "Is there a female voice in every language LoudReader supports?",
    a: "Not always. English (11 voices) and Spanish (4 voices) have a mix of both. German, French, Italian, Dutch, Polish, Portuguese, Swedish, and Danish each have exactly one narrator, so there's no choice of gender in those languages, just the one voice available. Check /voices to hear which gender that is before you commit to a language.",
  },
  {
    q: "What if I don't like any of the built-in narrators, regardless of gender?",
    a: "LoudReader Premium includes on-device voice cloning: read a few sentences aloud, about ten seconds, and the app builds a narrator from your own voice. The recording and the model stay on your device and never leave it.",
  },
];
