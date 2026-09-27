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

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do the website samples run the app in my browser?",
    "a": "No. They play audio samples. Test the app on your own device and text to evaluate the complete reading workflow."
  },
  {
    "q": "Does offline always sound worse than cloud speech?",
    "a": "No universal ranking follows from where speech is generated. Compare the specific voices, languages and text you care about."
  },
  {
    "q": "Are all 23 studio voices available on every device?",
    "a": "No. Availability depends on device support. Check the installed app’s voice choices."
  },
  {
    "q": "Can I try cloning before paying?",
    "a": "The all-voices allowance permits up to three clone creations. Existing clones lock when that allowance ends unless Premium is active; use your own or permissioned speech."
  }
];
