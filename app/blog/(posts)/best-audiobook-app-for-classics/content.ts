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
// Official source checked 2026-09-28: https://wiki.librivox.org/index.php/Copyright_and_Public_Domain

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is every Project Gutenberg book public domain worldwide?",
    "a": "No. Gutenberg follows US copyright rules, and some items are included under permission. Check the specific ebook notice and the position in your country."
  },
  {
    "q": "Is TTS the same as a recorded audiobook?",
    "a": "No. TTS generates speech from the text you provide. A recording captures a particular narrator’s performance and may use another edition."
  },
  {
    "q": "Can I listen offline?",
    "a": "Download the recording, or import the ebook and prepare the required local voice resources, before leaving your connection. Test the selected book first."
  },
  {
    "q": "Which translation should I choose?",
    "a": "Use the translator and edition required by your course or reading group, or compare sample passages. An author’s original text being public domain does not settle the status of a later translation."
  }
];
