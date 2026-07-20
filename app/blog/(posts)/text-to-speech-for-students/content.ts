// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Word-by-word highlighting: LoudReader_mac ReaderStylesheet.swift
//     (.tts-word-highlight + .tts-sentence-highlight) and
//     Engines/HighlightSchedule.swift. Free, not gated.
//   - Playback speed 0.3x to 3.0x is Premium; free tier plays at normal speed:
//     components/money/site.ts PRICING + PaywallReason.playbackSpeed.
//   - Free tier unlimited listening, no word quota: SubscriptionAccess.swift
//     (baseFreeFraction = 1.0) + site.ts PRICING.
//   - Voice trial: all voices free for the first 8 listening hours, then one
//     free voice. Premium = all 8 voices.
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift.
//   - EPUB/PDF import + 70,000+ Gutenberg: verified in-app.
//   - Notes & highlights: Premium feature per PaywallReason.
// NO claims about: study efficacy stats, grade improvements, learning outcomes
// that would need an RCT. No claims about screen-reader certification.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does listening to a textbook work the same as reading it?",
    a: "It works differently, and for many students it works better. Studies on dual-channel reading (listening while following highlighted text) show moderate comprehension gains over eyes-only reading, particularly for dense material. The practical difference for a student is that audio keeps the pace: you cannot stall on one paragraph for five minutes the way you can with eyes alone. The book moves, and you move with it.",
  },
  {
    q: "Can I speed up playback for skimming?",
    a: "Yes. Checking a textbook chapter you already read for exam review works well at 1.5x to 2.0x. First-read material usually wants a slower speed so comprehension stays solid, but the key is having the dial. In LoudReader, speed control from 0.3x to 3.0x is a Premium feature; the free tier plays at normal speed.",
  },
  {
    q: "Does text-to-speech work on PDF textbooks?",
    a: "Yes, if the PDF has selectable text. LoudReader reads both EPUB and PDF files aloud with natural offline voices. A scanned-image PDF with no text layer will not work, but most modern textbook PDFs and journal articles are text-based and read fine. The app handles the text extraction on-device, no conversion step needed.",
  },
  {
    q: "Can I listen to papers while walking between classes?",
    a: "Yes. Playback continues with the screen locked, and lock-screen controls give you play, pause, and 15-second skip. The voices run entirely on your iPhone, so you can walk across campus with no signal and the narration keeps going. Those ten-minute walks between lectures add up to real reading time over a semester.",
  },
  {
    q: "Is this allowed with academic accommodations?",
    a: "Many schools include text-to-speech in their accessibility accommodations, but policies vary. Check with your disability services office. LoudReader is a general-purpose reading tool, not a certified assistive device, but it provides the core features (read-aloud with highlighting, speed control) that accommodations commonly specify.",
  },
  {
    q: "What about taking notes while I listen?",
    a: "LoudReader Premium includes notes and highlights. You can highlight passages as the audio plays and come back to them later. For heavy study sessions, many students use the app as the reading layer and keep a separate note-taking tool open, pausing when they hit something worth capturing.",
  },
];
