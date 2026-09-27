// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12, LoudReader/PDFImportPipeline.swift:150–218 — on-device OCR triggers, 300 OCR-page cap and partial results; inspected 2026-09-28.
// - LoudReader_mac release_v1.12, LoudReader/ContentView.swift fileImporter and PDFImportPipeline locked-PDF check — EPUB/PDF imports and DRM/locked-file limits; source audit reviewed 2026-09-28.
// - LoudReader_mac release_v1.12, Info.plist and PlayerService.swift — background audio; source audit reviewed 2026-09-28.
// - Shipping app product audit, 2026-09-28: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), not the older checkout HEAD. No runtime test was performed for this editorial pass.
// - LoudReader/Subscription/SubscriptionAccess.swift and SubscriptionManager.swift — eight cumulative listening hours, limited English free selection afterwards, unrestricted book imports/listening.
// - LoudReader/Subscription/PaywallReason.swift:125–148 — Premium speed and timer; notes/highlights are not Premium-only. Source inspected 2026-09-28.
// - LoudReader/LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift — local speech plus diagnostics/analytics; no exposed analytics opt-out promised. Source-auditor report reviewed 2026-09-28.
// - App target and App Store record — iPhone/iPad, iPad compatibility on Apple Silicon Macs. Studio voice availability depends on hardware; no native macOS claim.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can an app read my textbook PDF aloud?",
    "a": "Often, if you have a supported, DRM-free file. Check the imported text and reading order on a sample page. Keep the original for figures, equations and exercises that speech cannot fully convey."
  },
  {
    "q": "What if my textbook is scanned?",
    "a": "LoudReader includes an on-device OCR fallback during PDF import. OCR processes at most 300 pages per import and may return partial results. Check the recognised text against the scan: numbers, specialist terms and complex layouts can be wrong. A clean digital or accessible edition may work better."
  },
  {
    "q": "Can I speed up textbook narration?",
    "a": "Playback-speed control from 0.3x to 3.0x requires LoudReader Premium. Choose speed based on whether you can explain the material, and pause for examples or unfamiliar concepts."
  },
  {
    "q": "Can I import a textbook from a protected course platform?",
    "a": "Only if the platform or publisher provides a file that can be used in another reader. LoudReader does not remove DRM. Ask your course team or accessibility service about an accessible copy when necessary."
  },
  {
    "q": "Will listening prepare me for an exam?",
    "a": "Audio can be part of revision, but finishing playback is not evidence of understanding. Use course questions, practice problems and explanations in your own words to check what you know."
  }
];
