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
// Official AO3 German FAQ checked 2026-09-28 (English endpoint unavailable): https://archive.transformativeworks.org/faq/downloading-fanworks?language_id=de

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does an AO3 download include future chapters?",
    "a": "No. It is a snapshot of chapters available when downloaded. Download an updated copy for later additions."
  },
  {
    "q": "Do I always need an AO3 account?",
    "a": "Access depends on the work. Restricted works can require signing in; do not assume every work is available anonymously."
  },
  {
    "q": "Is local narration completely invisible?",
    "a": "No. Speech is local, but LoudReader includes diagnostics and default-enabled usage analytics. Browsing, storage, transfers and access to your device are separate considerations."
  },
  {
    "q": "Can I keep the old position in an updated EPUB?",
    "a": "Do not assume so. Note the chapter and a short phrase before importing a new version, and check the new copy before removing the old one."
  }
];
