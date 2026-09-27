// EDITORIAL AUDIT — 2026-09-28. Product claims reconciled with the release_v1.12
// shipping source release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0
// in loudreader/LoudReader_mac (product fact audit, source references below).
// Release version verified using https://itunes.apple.com/lookup?id=6758149478&country=us.
// This editorial review includes source inspection, not a runtime accessibility test.
// LoudReader iOS/iPadOS app; compatible Apple Silicon Macs run the iPad build.
// Word/sentence highlighting and replay: ContinuousReaderView.swift,
// ContinuousReaderController.swift and HighlightSchedule.swift.
// Premium speed; notes/highlights are free: Subscription/PaywallReason.swift118–148
// and TTSPreferences.swift.
// EPUB/PDF and local scanned-PDF OCR: PDFImportPipeline.swift90,155–218
// plus release_v1.12 product audit; OCR/reading-order quality is not guaranteed.
// Playback/background controls: PlayerService.swift and Info.plist audio mode.
// Free access copy is imported from components/money/site.ts FREE_TIER.
// Speech is generated locally after downloads; this is not a promise of no
// diagnostics, analytics, networking, automatic sync or accessibility certification.

// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can TTS replace reading a textbook?",
    "a": "It can read suitable prose, but keep diagrams, equations and source references available. Use the format that lets you understand and complete the assignment."
  },
  {
    "q": "Can LoudReader handle scanned textbook PDFs?",
    "a": "The current app supports local OCR for scanned PDFs. Check recognition and reading order against the original; scans with equations, columns or poor image quality may need another format."
  },
  {
    "q": "Is faster playback a better study strategy?",
    "a": "Not necessarily. Use a speed at which you can explain the material. LoudReader’s speed control is a Premium feature; normal-speed narration is available on the free tier."
  },
  {
    "q": "Can I listen offline between classes?",
    "a": "Yes, after importing or downloading the book and required voice assets. Background playback and lock-screen controls allow listening with the screen locked."
  },
  {
    "q": "Can I use LoudReader in an exam?",
    "a": "Check the rules with your institution in advance. This article does not establish exam permission or accessibility approval for a particular course."
  },
  {
    "q": "Can I take notes while listening?",
    "a": "Yes. Pause to record a claim, evidence and source location in your preferred notes tool. LoudReader also includes notes and highlights on the free tier."
  }
];
