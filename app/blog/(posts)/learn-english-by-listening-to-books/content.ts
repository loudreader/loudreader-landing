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
// Source checked 2026-09-28: https://nflrc.hawaii.edu/rfl/item-detail/174
// Source checked 2026-09-28: https://www2.hawaii.edu/~readfl/rfl/October2008/brown/brown.pdf
// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can I learn English by listening to books?",
    "a": "Listening to suitable books is one source of practice. Combine it with checking meaning, revisiting useful phrases and producing your own English. Passive listening alone does not guarantee fluency."
  },
  {
    "q": "Is reading with audio better than reading alone?",
    "a": "Not necessarily. The Brown, Waring and Donkaewbua study cited here found no significant vocabulary-test advantage for reading with audio over reading alone. Choose the format that helps you follow your material."
  },
  {
    "q": "Should beginners start with old children’s classics?",
    "a": "Only if a sample feels manageable. Familiar plots may help, but old vocabulary and wordplay can be difficult. Graded readers designed for a learner level are another option."
  },
  {
    "q": "Can I slow down narration in LoudReader?",
    "a": "Yes, Premium includes 0.3x to 3.0x speed control. You can also pause and replay at normal speed. Choose a pace at which you understand the passage."
  },
  {
    "q": "Are synthetic voices a reliable pronunciation reference?",
    "a": "They are useful practice sources but can make mistakes. Check uncertain words, names and dialect-specific pronunciations against a dictionary recording or a knowledgeable speaker."
  }
];
