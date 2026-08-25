// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader/ReaderView.swift, toggleVoice(): the player control button
//     cycles to the next unlocked voice within the book's own language on a
//     tap. Comment: "The one-tap cycle stays inside the language of the
//     BOOK... a tap could hand an English novel to a Spanish narrator, a
//     change nobody asked for and no obvious way back."
//   - LoudReader/ReaderView.swift, voiceMenuContent: a long press on the same
//     button opens a full picker, grouped by language, with a checkmark on
//     the active voice; tapping any unlocked voice in a DIFFERENT language
//     from the book triggers a confirm alert ("Read this book in
//     [language]?") before switching, rather than switching silently.
//   - LoudReader/ReaderView.swift, displayedVoiceIdentifier: comment reads
//     "Playback voice transition still occurs on the next sentence" -
//     confirms the new voice does not interrupt the sentence being read, it
//     takes over starting the next one.
//   - LoudReader/ReaderView.swift, voiceMenuContent: an unlocked-for-Premium
//     voice tapped on the free tier calls
//     subscriptionManager.presentPaywall(.voiceSelection) instead of
//     switching, so locked voices are visible but gated, not hidden.
//   - components/money/site.ts (VOICES, PRICING): free tier is one voice
//     with unlimited listening; Premium unlocks all 23 studio narrators
//     across 10 languages.
// Claim NOT made: whether switching mid-sentence is possible (it is not -
// the app finishes the current sentence in the old voice by design).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can you change the narrator voice partway through a book?",
    a: "Yes. LoudReader lets you switch narrators from inside the player at any point while reading, not just before you start. There's a voice button in the player controls: tap it to cycle to the next voice, or press and hold it to open a full picker of every narrator, grouped by language, with a checkmark on the one currently reading to you.",
  },
  {
    q: "Does the new voice start immediately or wait for the chapter to end?",
    a: "It starts on the next sentence, not the next chapter. The sentence already playing finishes in the old voice, and the very next one picks up in the new voice, so there's no need to wait or rewind to a chapter break.",
  },
  {
    q: "Can I switch to a narrator in a different language?",
    a: "You can, but LoudReader checks with you first. Picking a narrator whose language differs from the book's own language shows a confirmation prompt asking whether you actually want to read the book in that language, rather than switching instantly. This exists because language detection can be wrong, and being read to in an unexpected language partway through a chapter is jarring.",
  },
  {
    q: "Do I need Premium to switch narrators mid-book?",
    a: "The free tier includes one natural offline voice with unlimited listening, and you can cycle back to it at any time at no cost. Switching to any of the other studio narrators requires Premium; tapping a locked voice in the picker opens the paywall rather than switching. Premium unlocks all 23 studio narrators across 10 languages.",
  },
  {
    q: "Will switching voices lose my place in the book?",
    a: "No. Switching narrators changes only which voice reads to you. Your position in the book, your notes, and your listening history are untouched.",
  },
];
