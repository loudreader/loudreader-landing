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
    "q": "Does LoudReader have a Polish narrator?",
    "a": "Yes, the Polish studio narrator is Tomasz. Studio availability depends on the device. Add Polish in reading-language settings or import a Polish book to include the language in the voice list."
  },
  {
    "q": "Can I choose between Polish accents?",
    "a": "There is one Polish studio voice and no selectable regional-accent range. Listen to its sample and test your own material."
  },
  {
    "q": "Will it correct Polish grammar or pronunciation?",
    "a": "No. It narrates the text you provide. Listening may help you inspect a passage, but the app does not check grammar or assess your spoken Polish, and synthetic pronunciation can be inaccurate."
  },
  {
    "q": "Can it read Polish scans with diacritics?",
    "a": "It can attempt on-device OCR, but you should compare recognised letters, words and numbers with the original scan. Poor images and complicated layouts can produce mistakes."
  },
  {
    "q": "Can I keep Tomasz free after the voice allowance?",
    "a": "Tomasz requires Premium after the first eight hours of cumulative listening. The continuing free voice selection is English, with unlimited book listening."
  }
];
