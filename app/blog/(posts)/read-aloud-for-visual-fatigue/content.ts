// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), SubscriptionAccess.swift, SubscriptionManager.swift and PaywallReason.swift — free voice allowance, unrestricted book listening, speed/timer gates and free notes; checked via canonical 2026-09-28 source audit and PaywallReason source inspection.
// - LoudReader_mac release_v1.12, PDFImportPipeline.swift:150–218 — OCR fallback, 300-page OCR cap and reported partial results; inspected 2026-09-28.
// - LoudReader_mac release_v1.12, Info.plist, PlayerService.swift and app target — background audio and iPad-app compatibility on Apple Silicon, not a native Mac build; canonical source audit 2026-09-28.
// - LoudReader_mac release_v1.12, LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift — local narration plus Sentry diagnostics/TelemetryDeck analytics; no exposed analytics opt-out is promised. Source audit 2026-09-28; no independent network audit.
// - https://www.nei.nih.gov/eye-health-information/healthy-vision/how-eyes-work/keep-your-eyes-healthy — regular computer-viewing breaks, checked 2026-09-28.
// - https://www.nhs.uk/symptoms/dry-eyes/ — recurrent/persistent discomfort warrants eye-care advice; checked 2026-09-28.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can I listen without following the highlighted words?",
    "a": "Yes. Start narration and lock your iPhone or iPad. You can return to the text when useful, but you do not need to watch it for audio playback to continue."
  },
  {
    "q": "Does read-aloud treat visual fatigue?",
    "a": "It changes how you access a book and can let you spend less time looking at text. It is not a treatment or a guarantee of symptom relief. Recurring discomfort is a reason to speak with an eye-care professional."
  },
  {
    "q": "Do I need Premium to listen with the screen locked?",
    "a": "No. Basic background book listening does not require Premium. The sleep timer, soundscapes and playback-speed adjustment are separate Premium features."
  },
  {
    "q": "Will the sleep timer know when I fall asleep?",
    "a": "No. It stops playback after the interval you set. You may need to return to the last part of the book you remember hearing."
  },
  {
    "q": "What if I am too tired to follow the audio?",
    "a": "Pause or stop. Audio is an option for enjoying a book without looking at it, not an obligation to keep reading when you need rest."
  }
];
