// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), SubscriptionAccess.swift, SubscriptionManager.swift and PaywallReason.swift — free voice allowance, unrestricted book listening, speed/timer gates and free notes; checked via canonical 2026-09-28 source audit and PaywallReason source inspection.
// - LoudReader_mac release_v1.12, PDFImportPipeline.swift:150–218 — OCR fallback, 300-page OCR cap and reported partial results; inspected 2026-09-28.
// - LoudReader_mac release_v1.12, Info.plist, PlayerService.swift and app target — background audio and iPad-app compatibility on Apple Silicon, not a native Mac build; canonical source audit 2026-09-28.
// - LoudReader_mac release_v1.12, LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift — local narration plus Sentry diagnostics/TelemetryDeck analytics; no exposed analytics opt-out is promised. Source audit 2026-09-28; no independent network audit.
// - https://www.nei.nih.gov/eye-health-information/healthy-vision/how-eyes-work/keep-your-eyes-healthy — 20-20-20 guidance; checked 2026-09-28.
// - https://aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain — prolonged device discomfort and screen adjustments; checked 2026-09-28.
// - https://www.nhs.uk/symptoms/dry-eyes/ — seek care for persistent symptoms; checked 2026-09-28.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does text-to-speech cure eye strain?",
    "a": "No. It can let you access text without continually viewing it, but it does not identify or treat the cause of eye symptoms. Get eye-care advice for persistent or recurring discomfort."
  },
  {
    "q": "Can I replace regular screen breaks with audio?",
    "a": "Audio can be one way to spend time away from a visible document, but it should not become a reason to skip breaks or keep working when you need rest. Continuing to scroll another screen does not meet that aim."
  },
  {
    "q": "What documents work well without a screen?",
    "a": "Try continuous prose first. Keep the original available for charts, tables, equations and important details that require visual verification."
  },
  {
    "q": "Can LoudReader continue with the screen locked?",
    "a": "Yes, on iPhone and iPad. Prepare the book and voice beforehand and test pause and resume. Background listening is separate from the Premium sleep timer and speed controls."
  },
  {
    "q": "Does local speech make every work document appropriate to import?",
    "a": "No. Follow your organisation’s policies. Local narration means books are not uploaded for speech generation; the app also has diagnostics and analytics, and that is not a compliance certification."
  }
];
