// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - LoudReader_mac release_v1.12, LoudReader/ContinuousReaderView.swift:1662–1682 — sentence tap and first-tap chrome reveal; source inspected 2026-09-28.
// - LoudReader_mac release_v1.12, LoudReader/ContinuousReaderController.swift:2412–2448 — approximately timed, sentence-based skips; source inspected 2026-09-28.
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
    "q": "What is English shadowing?",
    "a": "You repeat spoken English shortly after the speaker while the recording continues, paying attention to rhythm, stress and phrasing. If that is too difficult, pause after a short sentence and repeat it first."
  },
  {
    "q": "Are books better than podcasts for shadowing?",
    "a": "A book gives you an exact text to consult. Human conversation recordings offer a different kind of speech, with interruptions and varied speakers. Choose material that matches your goal and use more than one source."
  },
  {
    "q": "What speed should a beginner use?",
    "a": "Choose a pace you can follow without losing words. Shorten the passage or try listen-and-repeat before slowing it heavily. LoudReader speed adjustment requires Premium; free playback uses normal speed."
  },
  {
    "q": "How do I repeat a sentence in LoudReader?",
    "a": "Tap the sentence to return playback to its start. If playback controls are hidden, first tap to reveal them, then tap the sentence. This is manual replay, not an automatic repeat-sentence mode."
  },
  {
    "q": "Will LoudReader correct my pronunciation?",
    "a": "No. It does not assess your shadowing or grade pronunciation. Synthetic narration can also mispronounce words. Use a teacher, fluent speaker or suitable human recording for feedback and pronunciation checks."
  }
];
