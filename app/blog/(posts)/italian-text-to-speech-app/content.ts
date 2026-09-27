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
    "q": "How many Italian studio voices does LoudReader offer?",
    "a": "One, named Marco. Check that studio narration is supported on your device. There is no selectable range of Italian regional accents."
  },
  {
    "q": "Can I try Italian before importing a book?",
    "a": "Yes. Add Italian to your reading languages in Settings to include it in the voice list, subject to device support. The website also has a browser sample."
  },
  {
    "q": "Can Marco teach or assess my Italian pronunciation?",
    "a": "No. You can listen and repeat a passage, but the app does not assess your speech. Synthetic pronunciation can be wrong; use human recordings, a dictionary or a teacher when accuracy matters."
  },
  {
    "q": "Does the Italian voice remain free after the trial?",
    "a": "Marco requires Premium after the first eight hours of cumulative voice listening. Free book listening continues with a limited English selection. Speed adjustment is a separate Premium feature."
  },
  {
    "q": "Can I import a scanned Italian PDF?",
    "a": "LoudReader can attempt on-device OCR during PDF import. Check accents, punctuation and reading order against the original. Complex layouts and poor scans may need a better source file."
  }
];
