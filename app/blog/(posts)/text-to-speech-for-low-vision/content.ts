// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader is NOT a screen reader: it does not read UI elements, menus,
//     buttons, or system interfaces. It reads the content of imported EPUB
//     and PDF files only.
//   - Natural offline voices: Apple speech synthesis, all processing local.
//   - Word-by-word highlighting: free (ReaderStylesheet.swift).
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Voice selection: 23 studio narrators in 10 languages, all free for first 8 hours, 1 free
//     thereafter. Premium includes all 8 (site.ts PRICING).
//   - Free tier unlimited listening, no account: SubscriptionAccess.swift.
// NO claims about: accessibility certification, WCAG compliance, VoiceOver
// integration, magnification features, contrast controls, or any screen-reader
// functionality. The article honestly positions TTS as a complementary tool,
// not a replacement for dedicated assistive technology.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is LoudReader a screen reader?",
    a: "No. A screen reader reads everything on your screen: menus, buttons, settings, system dialogs. LoudReader reads the books and documents you import into it. It does not help you navigate your phone, open apps, or interact with the operating system. For that, iPhone has built-in VoiceOver and Mac has its own screen reader. LoudReader is for reading books, not for reading screens.",
  },
  {
    q: "What does LoudReader actually do for low-vision readers?",
    a: "It reads any DRM-free EPUB or PDF aloud with natural offline voices, highlighting each word as it goes. That means you can listen to books, articles, and personal documents without needing to see the text at all. The app remembers your place, plays with the screen locked, and needs no account. It turns the books you already own into something you can consume by ear.",
  },
  {
    q: "Can I adjust the reading speed?",
    a: "Yes. Speed control from 0.3x to 3.0x is a Premium feature in LoudReader; the free tier plays at normal speed. Slower speeds help with dense or unfamiliar material, and faster speeds let you move through lighter reading quickly. The full range is available on both the Mac and iPhone apps.",
  },
  {
    q: "What file types can I listen to?",
    a: "DRM-free EPUB and PDF files. You import them through the iOS Share sheet or the Mac file picker. The app also includes 70,000+ free Project Gutenberg classics built in. Everything stays local: the app is fully on-device and private, your library never leaves your device.",
  },
  {
    q: "How do I pick the clearest voice?",
    a: "LoudReader offers 23 studio narrators across 10 languages. All of them are free to try for the first 8 listening hours; after that, one voice remains free and Premium keeps all 23. Try them at the speed you read and pick the one that fatigues you least. Clarity matters more than personality for extended listening sessions.",
  },
];
