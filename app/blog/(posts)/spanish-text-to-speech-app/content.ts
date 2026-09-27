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
    "q": "How many Spanish studio narrators are there?",
    "a": "Four: Sofía, Hector, Diego and Valentina. Their availability depends on your device, so check the app as well as the website samples."
  },
  {
    "q": "How do I show Spanish in the voice list?",
    "a": "Add Spanish to your reading languages in Settings or import a Spanish-language book. Studio voices also require supported hardware."
  },
  {
    "q": "Can I choose a specific regional Spanish accent?",
    "a": "The app lists these four narrators without a selectable country or regional-accent classification. Listen to the samples and use an appropriate human reference if regional pronunciation matters."
  },
  {
    "q": "Are Spanish voices free after the allowance?",
    "a": "Continued access to the Spanish studio narrators requires Premium after the first eight hours of cumulative listening. Ongoing free book listening uses an English voice selection."
  },
  {
    "q": "Does a Spanish voice translate my books or assess my speaking?",
    "a": "No. It narrates the supplied text. It does not translate a book simply because Spanish is selected, and it does not listen to or assess your spoken Spanish."
  }
];
