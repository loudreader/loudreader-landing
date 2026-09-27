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
// Official source checked 2026-09-28: https://www.gutenberg.org/help/copyright.html
// Official source checked 2026-09-28: https://www.gov.uk/government/publications/copyright-notice-duration-of-copyright-term/copyright-notice-duration-of-copyright-term
// Official source checked 2026-09-28: https://www.gov.uk/copyright/how-long-copyright-lasts
// Official source checked 2026-09-28: https://wiki.librivox.org/index.php/Copyright_and_Public_Domain

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is every Gutenberg ebook public domain?",
    "a": "No. Most are public domain in the US, but the project also includes copyrighted items under permission. Check the specific notice."
  },
  {
    "q": "Does US public-domain status apply in the UK?",
    "a": "Not automatically. Check UK rules and the particular edition, including any translation or added material."
  },
  {
    "q": "Does a free ebook mean every audiobook of it is free to reuse?",
    "a": "No. A recording and its performance require a separate check from the underlying text."
  },
  {
    "q": "Does using a local TTS app settle copyright questions?",
    "a": "No. Local processing describes where speech is generated, not what rights you have in the source or a recording you publish."
  }
];
