// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), SubscriptionAccess.swift, SubscriptionManager.swift and PaywallReason.swift — free voice allowance, unrestricted book listening, speed/timer gates and free notes; checked via canonical 2026-09-28 source audit and PaywallReason source inspection.
// - LoudReader_mac release_v1.12, PDFImportPipeline.swift:150–218 — OCR fallback, 300-page OCR cap and reported partial results; inspected 2026-09-28.
// - LoudReader_mac release_v1.12, Info.plist, PlayerService.swift and app target — background audio and iPad-app compatibility on Apple Silicon, not a native Mac build; canonical source audit 2026-09-28.
// - LoudReader_mac release_v1.12, LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift — local narration plus Sentry diagnostics/TelemetryDeck analytics; no exposed analytics opt-out is promised. Source audit 2026-09-28; no independent network audit.
// - https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/presbyopia — near-focus changes and need for appropriate vision care; checked 2026-09-28.
// - https://www.gutenberg.org/policy/permission.html — public-domain territorial limitation; checked 2026-09-28.
// - LoudReader_mac release_v1.12 app entitlements and AddContentSheet.swift — no automatic library sync; Files/iCloud import is separate, canonical source audit 2026-09-28.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is text-to-speech only for people with poor eyesight?",
    "a": "No. Anyone may prefer listening for a particular book or situation. Audio is one option alongside larger text, print and other accessible formats; it is not a treatment for an eye condition."
  },
  {
    "q": "How can I help a relative get started?",
    "a": "Use a familiar device and one short passage. Let them choose the voice, practise pause and resume, and return to the book themselves. Check the actual workflow instead of assuming it will be easy for everyone."
  },
  {
    "q": "Can the voice be slowed down?",
    "a": "LoudReader Premium includes speed adjustment from 0.3x to 3.0x. Free playback uses normal speed. If slower narration is essential, check the current in-app price before relying on it."
  },
  {
    "q": "Does the library sync from iPhone to iPad or Mac?",
    "a": "No. There is no automatic library or reading-position sync. Import the file separately on each device and return to the relevant passage. Mac support uses the iPad app on compatible Apple Silicon hardware."
  },
  {
    "q": "Is LoudReader a screen reader for the whole device?",
    "a": "No. It narrates supported reading material inside the app. If someone needs help navigating the whole device, use the appropriate system accessibility tools and test how the app works with their setup."
  }
];
