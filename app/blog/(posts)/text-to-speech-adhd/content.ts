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
// Source checked 2026-09-28: https://www.nhs.uk/conditions/adhd-adults/
// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can text to speech treat ADHD?",
    "a": "This guide makes no treatment claim. TTS offers a different reading format with playback and navigation controls. Whether it helps you complete a particular reading task is something to assess in context."
  },
  {
    "q": "Does narration always improve focus?",
    "a": "No. It may provide a useful pace and location cue, or it may add distraction. Try a short passage and check whether you understood it rather than measuring only how long you kept listening."
  },
  {
    "q": "What speed is best for ADHD readers?",
    "a": "There is no universal setting recommended here. Start at a comfortable pace, change one thing at a time and check the meaning. Adjustable speed in LoudReader is a Premium feature."
  },
  {
    "q": "Can I listen with the screen locked?",
    "a": "Yes. LoudReader supports background playback and lock-screen controls. Make the book and required voice assets available before relying on offline listening."
  },
  {
    "q": "What if reading and listening together feels overwhelming?",
    "a": "Use one format at a time or choose a smaller passage. You do not need to persist with a setup that makes the task harder. Another format or additional support may suit you better."
  }
];
