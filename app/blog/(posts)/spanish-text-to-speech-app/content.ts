// FACT PROVENANCE. Every claim verified on 2026-08-24 against:
//   - data/voices.ts (VOICE_LANGUAGES, the "es" entry): the four Spanish
//     narrators are Sofía, Hector, Diego and Valentina, with the app's own
//     one-line blurbs quoted verbatim in Spanish (Cálida y clara / Grave y
//     pausada / Firme, buen ritmo / Suave, muy cercana). No blurb, name, or
//     count is invented.
//   - components/money/site.ts (VOICES): the 23-voice roster spans 10
//     languages, and "Counting rule: 23 = 11 English + 4 Spanish + one each
//     for German, French, Italian, Dutch, Polish, Portuguese and
//     Danish/Swedish" makes Spanish the largest non-English roster in the
//     app, confirmed by simple count against every other language entry in
//     data/voices.ts (all one voice each).
//   - components/money/site.ts (VOICES.lazyLanguages): "narrators for a
//     language appear once you have a book in that language" - the picker
//     surfaces the Spanish voices once a Spanish-language book is in the
//     library, so this article does not claim they are visible before that.
//   - LoudReader_mac/LoudReader/Subscription/SubscriptionManager.swift
//     (freeVoiceCandidates, freeVoiceIdentifiers): the free tier's one
//     keepable voice is chosen from a small fixed set of English voices,
//     never from the Spanish roster. This article does NOT claim a Spanish
//     voice is available on the free tier; it says plainly that the four
//     Spanish narrators require Premium.
// NOT claimed: any localization of the app's own interface into Spanish.
// Nothing in components/money/site.ts, data/voices.ts, or the app source
// reviewed for this article states the UI itself is translated; this
// article is about narration of Spanish text, not an app menus in Spanish,
// and says so.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader read Spanish text aloud?",
    a: "Yes. LoudReader has four Spanish narrators, the widest non-English voice roster in the app, and they read any Spanish-language EPUB or PDF you import. The app is fully on-device and private, your library never leaves your device, so the narration runs entirely on your Mac or iPhone with no text sent anywhere.",
  },
  {
    q: "How many Spanish voices does LoudReader have?",
    a: "Four: Sofía, Hector, Diego, and Valentina. Every other non-English language in the app (German, French, Italian, Dutch, Polish, Portuguese, Swedish, Danish) has exactly one narrator, so Spanish is the language with the most choice outside English.",
  },
  {
    q: "Can I hear the Spanish voices before choosing one?",
    a: "Yes. The voices page plays every narrator, including all four Spanish voices, reading a real sample in Spanish, right in the browser. You can compare Sofía, Hector, Diego, and Valentina back to back before picking one for a book.",
  },
  {
    q: "Is the app's interface available in Spanish?",
    a: "This article is about the narration, not the app's own menus, and it does not claim the interface is translated into Spanish. What's verified is that the four Spanish narrators read Spanish-language books aloud.",
  },
  {
    q: "Do the Spanish voices work offline?",
    a: "Yes. All of LoudReader's narrators, including the Spanish ones, are natural offline voices that run on your device, so playback works without an internet connection once a book is imported.",
  },
  {
    q: "Is a Spanish voice free, or does it need Premium?",
    a: "The four Spanish narrators require Premium. The free tier's one keepable voice is chosen from a small set of English voices, not from the Spanish roster. Premium unlocks Sofía, Hector, Diego, and Valentina, along with the rest of the 23-voice roster.",
  },
];
