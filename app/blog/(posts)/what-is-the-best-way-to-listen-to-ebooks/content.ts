// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Three routes to ebook listening (official audiobooks, TTS apps, built-in
//     options) are generic categories with honest trade-offs. No specific pricing
//     or feature claims about third-party services that could go stale.
//   - Audible, Apple Books, Libby, Hoopla, Spotify: generic descriptions of
//     well-known services with no specific pricing or feature claims.
//   - LoudReader features from site.ts: imports EPUB/PDF, 70,000+ Gutenberg,
//     natural offline voices, word-by-word highlighting, free unlimited listening,
//     fully on-device, iPhone, iPad, and Apple Silicon Macs, Premium features.
//   - macOS Spoken Content: a real built-in feature; described generically.
//   - No fabricated study claims, testimonials, or statistics.
// Claims you may NOT make: specific pricing for third-party services, that any
// one route is best for everyone, DRM removal capabilities.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the easiest way to listen to an ebook?",
    a: "If the book has an official audiobook edition, buying or borrowing it is the easiest route. You get a professionally recorded human narration, no setup, and it just works in whatever audiobook app you already use. The catch: most books do not have audiobook editions, and the ones that do cost money. If your book has no recording or you already own it as an EPUB or PDF, a TTS app is the easiest second route.",
  },
  {
    q: "How do TTS apps compare to official audiobooks?",
    a: "Official audiobooks win on quality: a human narrator with performance skill, produced in a studio. TTS apps win on availability: anything you can get as a DRM-free EPUB or PDF becomes an audiobook instantly. TTS voices are natural enough now that for non-fiction and most fiction, the difference is small. For books where the narration is part of the art, human recordings are still better. The honest trade is quality vs universality.",
  },
  {
    q: "Can I use my phone's built-in text-to-speech for ebooks?",
    a: "Yes, but it is basic. iPhones and Macs have Spoken Content, a system-level feature that reads selected text aloud. It is free and works offline, but it was built for accessibility, not book reading. It does not remember your place in a book, does not highlight words as it reads, does not handle EPUB or PDF navigation well, and the built-in voices are older and less natural than modern neural TTS. It works in a pinch, but a dedicated app is a much better experience for book-length listening.",
  },
  {
    q: "What does LoudReader do that the built-in options do not?",
    a: "LoudReader is purpose-built for book listening. It imports EPUBs and PDFs directly, remembers your place, highlights each word as it speaks, and uses natural offline voices powered by Apple Silicon's Neural Engine. It comes with 70,000+ free Project Gutenberg classics. It runs fully on-device and private, your library never leaves your device, so there is no internet dependency and no account to create. The free tier gives you unlimited listening with one voice.",
  },
  {
    q: "Do I need to convert my EPUBs to audio files?",
    a: "Not with a TTS reader like LoudReader. You import the EPUB or PDF once and press play. The narration is generated live on your device, so there are no audio files to manage and no conversion step. Your place is saved automatically whether you read or listen, and you can switch between reading and listening in the same book at any time.",
  },
];