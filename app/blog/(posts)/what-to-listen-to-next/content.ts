// FACT PROVENANCE — reviewed 2026-09-28; no runtime test claimed.
// Product facts checked against shipping release_v1.12 (released 2026-09-22),
// commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0 in LoudReader_mac:
// - LoudReader/Subscription/SubscriptionAccess.swift and
//   LoudReader/Subscription/SubscriptionManager.swift:
//   eight cumulative listening hours, device-dependent free English choices.
// - LoudReader/Subscription/PaywallReason.swift: speed/timer gates; notes free.
// - LoudReader/PDFImportPipeline.swift: local OCR and layout/recognition limits.
// - LoudReader/Engines/ChatterboxVoice.swift and DeviceCapability.swift:
//   studio roster and hardware availability; iPad app on compatible Mac.
// - LoudReader/LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift:
//   Sentry diagnostics and default TelemetryDeck analytics; no visible off switch.
// - LoudReader/Engines/VoiceEnrollment.swift, ClonedVoiceStore.swift and
//   LoudReader/Subscription/SubscriptionManager.swift: permissioned cloning and trial/paid access.
// - LoudReader/PlayerService.swift: MPRemoteCommandCenter play/pause/skip,
//   inspected at release_v1.12 on 2026-09-28; Info.plist background audio.
// Local narration does not imply no telemetry or no system backups.
// Free-tier copy comes from components/money/site.ts; app listing checked via
// https://itunes.apple.com/lookup?id=6758149478&country=us on 2026-09-28.
// Practical workflow advice is editorial, not a measured or clinical outcome.
// Official source checked 2026-09-28: https://www.gutenberg.org/policy/permission.html
// Official source checked 2026-09-28: https://www.gov.uk/government/publications/copyright-notice-duration-of-copyright-term/copyright-notice-duration-of-copyright-term
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/2002
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/11
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/43
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/1661
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/155
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/1184
// Official source checked 2026-09-28: https://www.gutenberg.org/ebooks/2600
// Duration inputs checked in data/gutenberg-catalog.json: 2002=1h; 11=3h;43=3h;155=21h;1184=51.5h;2600=62h. Approximate rounded estimates, not app benchmarks. Book recommendations are editorial choices; bibliographic facts use source records, not their automatic summaries.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Are the listed times measured audiobook durations?",
    "a": "No. They are word-count-based catalogue estimates at normal speed. The voice, edition, pace and pauses change your actual listening time."
  },
  {
    "q": "What can I finish without a long commitment?",
    "a": "Try one poem or one detective story rather than treating the whole collection as a single session."
  },
  {
    "q": "Can I substitute a newer translation?",
    "a": "Choose the translation you prefer, but check its availability and rights separately. It will not necessarily match the wording or duration of the linked edition."
  },
  {
    "q": "Are these editions free to use worldwide?",
    "a": "No worldwide clearance is claimed. Gutenberg records US status; readers elsewhere need to check the relevant edition under their local rules."
  }
];
