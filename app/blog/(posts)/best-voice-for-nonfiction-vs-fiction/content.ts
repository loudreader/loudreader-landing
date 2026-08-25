// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against:
//   - components/money/site.ts (VOICES, DIFFERENTIATORS, PRICING, CLONING):
//     23 studio narrators across 10 languages, 11 English voices, free tier
//     is one voice with unlimited listening, Premium unlocks the full roster
//     plus speed control 0.3x to 3.0x.
//   - data/voices.ts (VOICE_LANGUAGES): the English roster names and blurbs
//     used below (James, Grace, Arthur, Ivy, Henry) are read directly from
//     this file, not invented.
//   - LoudReader_mac/LoudReader/ReaderView.swift (toggleVoice, voiceMenuContent):
//     confirms a reader can switch narrators from inside the player, so the
//     "try it on the actual chapter you're about to read" advice in this
//     article describes a real, in-app action, not a hypothetical.
// No study or statistic about "which voice type suits which genre" is cited
// anywhere in this article, because none was found that is specific to
// synthetic narration; the guidance here is editorial judgment from using
// the app, stated as such, not research.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a single best TTS voice for nonfiction?",
    a: "No, and treat any answer that names one voice as marketing rather than advice. What nonfiction needs is a narrator that stays flat and steady through dense material, an even pace and clear consonants so numbers, names, and technical terms don't blur together. Which specific voice delivers that for you is a matter of taste, so listen to a few candidates on your own material before deciding.",
  },
  {
    q: "Does fiction really need a different voice than nonfiction?",
    a: "It benefits from a different one, though nothing stops you from using one voice for everything. Fiction rewards a narrator with more range, someone who can carry dialogue and let a scene breathe, while nonfiction rewards restraint: a voice that gets out of the way of the argument. The difference is about what the material asks the voice to do, not a rule you have to follow.",
  },
  {
    q: "How do I actually compare narrators instead of guessing?",
    a: "Listen to them read, not a description of how they sound. LoudReader's voices page plays every narrator reading a real sample in their own language, so you can compare two or three candidates back to back before picking one for your book.",
  },
  {
    q: "Can I switch voices for different books in my library?",
    a: "Yes. LoudReader remembers a voice per session and you can change it from the player at any time, so a technical manual and a novel can use two different narrators without any extra setup. The full mechanics of switching mid-book are covered in changing your narrator voice mid-book.",
  },
  {
    q: "Are LoudReader's voices free to try?",
    a: "The free tier includes one natural offline voice with unlimited listening on every book, no word quota, so you can hear how narration feels on real chapters before paying anything. Premium unlocks all 23 studio narrators across 10 languages plus speed control from 0.3x to 3.0x, a sleep timer, ambient soundscapes, and notes.",
  },
];
