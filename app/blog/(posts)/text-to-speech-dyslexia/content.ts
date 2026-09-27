// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), SubscriptionAccess.swift, SubscriptionManager.swift and PaywallReason.swift — free voice allowance, unrestricted book listening, speed/timer gates and free notes; checked via canonical 2026-09-28 source audit and PaywallReason source inspection.
// - LoudReader_mac release_v1.12, PDFImportPipeline.swift:150–218 — OCR fallback, 300-page OCR cap and reported partial results; inspected 2026-09-28.
// - LoudReader_mac release_v1.12, Info.plist, PlayerService.swift and app target — background audio and iPad-app compatibility on Apple Silicon, not a native Mac build; canonical source audit 2026-09-28.
// - LoudReader_mac release_v1.12, LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift — local narration plus Sentry diagnostics/TelemetryDeck analytics; no exposed analytics opt-out is promised. Source audit 2026-09-28; no independent network audit.
// - https://pubmed.ncbi.nlm.nih.gov/28112580/ — Wood et al. (2018) meta-analysis, effect 0.35 and limitations; checked 2026-09-28.
// - https://support.microsoft.com/en-US/edge/use-immersive-reader-in-microsoft-edge — Read aloud and pace controls; checked 2026-09-28.
// - https://www.everway.com/products/read-and-write-education/ — product scope and text-to-speech; checked 2026-09-28.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does text-to-speech cure dyslexia?",
    "a": "No. It can provide spoken access to text, but it is not a cure or a substitute for reading instruction. Benefits and preferences vary, so test it with the learner and their actual task."
  },
  {
    "q": "Is word highlighting essential?",
    "a": "No single display is essential for every reader. Highlighting can show the current word or passage, but try it rather than assuming it improves everyone’s comprehension or decoding."
  },
  {
    "q": "How do I judge whether a tool helps?",
    "a": "Use a representative passage, check understanding and ask about effort and comfort. Make sure the reader can pause and replay independently. For school accommodations, involve the relevant support team."
  },
  {
    "q": "Is LoudReader speed control free?",
    "a": "No. Speed adjustment from 0.3x to 3.0x is Premium. Basic book listening and read-along highlighting do not require Premium; voice availability changes after the initial allowance."
  },
  {
    "q": "Can it read scanned school PDFs?",
    "a": "It can attempt on-device OCR during PDF import. Check recognition and reading order against the original, and keep diagrams or equations available visually. DRM-protected platform books cannot be unlocked by the app."
  }
];
