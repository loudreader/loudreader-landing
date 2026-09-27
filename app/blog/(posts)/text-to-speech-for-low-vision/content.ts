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
// Source checked 2026-09-28: https://support.apple.com/en-gb/guide/iphone/iph3e2e415f/ios
// Source checked 2026-09-28: https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios
// Practical routines are editorial suggestions, not measured learning outcomes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is LoudReader a screen reader?",
    "a": "No. It narrates supported books and documents. VoiceOver is Apple’s system screen reader for navigation and spoken feedback and can also read content."
  },
  {
    "q": "Has LoudReader been fully tested with VoiceOver?",
    "a": "This guide does not claim an end-to-end VoiceOver test or accessibility certification. Check import, playback, navigation and error recovery using the setup you depend on before relying on the app."
  },
  {
    "q": "Can I listen without keeping the screen on?",
    "a": "Yes, LoudReader supports background playback and system lock-screen media controls. This does not guarantee that every in-app setup action is accessible without sight."
  },
  {
    "q": "Can it read a scanned PDF?",
    "a": "The current app includes local OCR for scanned PDFs. Recognition and reading order depend on the document, and images, diagrams or poor scans may still need an accessible alternative."
  },
  {
    "q": "Can I use the same library on iPhone and Mac automatically?",
    "a": "No automatic library or reading-position sync is provided. Compatible Apple Silicon Macs run the iPad build; import the files separately on the devices you use."
  }
];
