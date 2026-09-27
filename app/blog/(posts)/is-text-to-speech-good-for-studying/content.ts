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
// Source checked 2026-09-28: https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x
// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does listening to a textbook count as studying?",
    "a": "It can be part of studying. Check whether you can explain the argument or answer a practice question afterwards; finishing the audio alone does not show understanding."
  },
  {
    "q": "Does reading while listening guarantee better memory?",
    "a": "No. It provides spoken words alongside the text and may make navigation easier, but that is not a guarantee of better recall. Try it on your actual material and check what you can explain."
  },
  {
    "q": "Should I use TTS for formulas and diagrams?",
    "a": "Keep the original visible and work through it directly. Narration and PDF extraction can miss layout, symbols and relationships shown in figures."
  },
  {
    "q": "How can I make listening more active?",
    "a": "Pause after a short section, describe the main idea without looking, then compare your account with the source. Use course questions or worked problems where appropriate."
  },
  {
    "q": "Which study features are paid in LoudReader?",
    "a": "Speed control from 0.3x to 3.0x is a Premium feature. Notes, highlights and word-following highlighting are free. Word highlighting accompanies narration, and the app offers an eight-hour voice trial followed by its permanent free voice tier."
  }
];
