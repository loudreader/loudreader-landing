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
    "q": "What is a useful first TTS exercise for an English learner?",
    "a": "Listen to a short passage, note what you understood, then compare with the text. Identify whether a gap came from unfamiliar vocabulary, sound recognition or meaning, and replay that part."
  },
  {
    "q": "Does word highlighting teach pronunciation automatically?",
    "a": "No. It shows the current narration position. You still need to attend to the phrase, understand it and check doubtful pronunciation against another source."
  },
  {
    "q": "Is pausing and repeating the same as shadowing?",
    "a": "They are related practice formats. Pause-and-repeat separates listening from speaking; shadowing usually means speaking with or shortly behind the recording. Use the version you can manage."
  },
  {
    "q": "Can TTS correct my English writing?",
    "a": "It can help you notice awkward or repetitive passages, but it does not explain grammar or reliably identify errors. Check suspected problems in the original text."
  },
  {
    "q": "Will these exercises raise an IELTS or TOEFL score?",
    "a": "No score improvement is promised. Use official exam practice and the relevant test conditions alongside any general language practice."
  },
  {
    "q": "Are notes and slower playback free in LoudReader?",
    "a": "Notes and highlights are free. Adjustable playback speed from 0.3x to 3.0x is Premium; normal-speed narration and sentence replay can still be used for the exercises."
  }
];
