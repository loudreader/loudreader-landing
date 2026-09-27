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
// Source checked 2026-09-28: https://nflrc.hawaii.edu/rfl/item/43
// Source checked 2026-09-28: https://onlinelibrary.wiley.com/doi/full/10.1111/lang.12622
// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is 98% familiar vocabulary a rule for choosing books?",
    "a": "No. It is a frequently discussed research estimate, not a universal threshold. Sample the actual book and check whether you can explain the passage, including the connections between ideas."
  },
  {
    "q": "Should I look up every unfamiliar word?",
    "a": "For pleasure reading, prioritise words that block meaning or recur usefully. For study or technical instructions, precision may require more checking. Do not assume a guessed meaning is correct."
  },
  {
    "q": "Does narration make a hard book easy?",
    "a": "It provides spoken text and can support pronunciation or pacing, but it does not explain unknown concepts or vocabulary. A simpler edition may still be the better choice."
  },
  {
    "q": "Should I finish a book I keep abandoning?",
    "a": "You can change the book, edition or session size. Interest, background knowledge and difficulty all affect whether a particular book fits your current purpose."
  },
  {
    "q": "Are all old classics good for beginners?",
    "a": "No. Wordplay, dialect and historical language can be difficult. Compare a sample with a graded reader or a modern book on a familiar subject before choosing."
  }
];
