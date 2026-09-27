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
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/14838
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/21
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/55
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/11
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/271
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/215
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/1661
// Source checked 2026-09-28: https://www.gutenberg.org/ebooks/45
// Source checked 2026-09-28: https://www.gutenberg.org/policy/permission.html
// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Which book should I try first?",
    "a": "Sample The Tale of Peter Rabbit for a short complete story, or one Aesop fable. For a longer narrative, try a chapter of The Wonderful Wizard of Oz. Choose based on your understanding of the sample."
  },
  {
    "q": "Is Alice in Wonderland easy English?",
    "a": "Its wordplay and invented language can be challenging despite its children’s-book format. It is better treated as an option for readers who enjoy language play than as a guaranteed beginner text."
  },
  {
    "q": "Are the editions free in my country?",
    "a": "The linked Project Gutenberg editions are listed as public domain in the United States. Check local copyright for your location and the particular edition or translation."
  },
  {
    "q": "How long will a book take to listen to?",
    "a": "That depends on the edition, narrator, speed and your pauses. Start with a small section and use its actual listening time to plan the next session."
  },
  {
    "q": "Should I use a classic or a graded reader?",
    "a": "Either can be useful. Graded readers are adapted for learners; an old children’s classic can still contain difficult vocabulary or wordplay. Sample both if you are unsure."
  }
];
