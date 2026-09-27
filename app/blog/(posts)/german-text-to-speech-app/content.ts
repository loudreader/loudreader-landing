// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), Engines/ChatterboxVoice.swift — named studio roster and language mapping; canonical source audit 2026-09-28.
// - LoudReader_mac release_v1.12, VoiceRegistry.swift:105–119 and ReadingLanguagesSheet.swift — library languages plus Settings selection; inspected 2026-09-28.
// - LoudReader_mac release_v1.12, SubscriptionAccess.swift and SubscriptionManager.swift — 8 cumulative listening hours, English free selection afterwards; source audit 2026-09-28.
// - LoudReader_mac release_v1.12, DeviceCapability.swift, PDFImportPipeline.swift and PaywallReason.swift — device-dependent studio access, fallible OCR and Premium speed; source audit 2026-09-28.
// - data/voices.ts and public/voices — narrator names and browser sample references checked 2026-09-28.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "How many German studio voices are there?",
    "a": "One: Klaus. Availability depends on device support. The app does not expose selectable Austrian, Swiss and standard-German versions of this voice."
  },
  {
    "q": "Why is German missing from my voice list?",
    "a": "Add German to your reading languages in Settings or import a German-language book. Also check whether your device supports studio voices; language selection does not remove a hardware limitation."
  },
  {
    "q": "Is the German voice free forever?",
    "a": "No. Available voices can be tried during the first eight hours of cumulative listening. Klaus requires Premium afterwards; the ongoing free selection is English."
  },
  {
    "q": "Can LoudReader read a scanned German PDF?",
    "a": "It can attempt on-device text recognition during PDF import. Check spelling, reading order and numbers against the original, especially in old or unclear scans. Recognition is not guaranteed."
  },
  {
    "q": "Will choosing German translate an English book?",
    "a": "No. This feature narrates text; choosing a German narrator is not a translation workflow. Import German-language material."
  }
];
