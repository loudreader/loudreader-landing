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
// Official source checked 2026-09-28: https://support.apple.com/en-gb/guide/mac-help/mh27448/mac
// Official source checked 2026-09-28: https://support.microsoft.com/en-us/word/listen-to-your-word-documents

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need a dedicated app to hear an essay?",
    "a": "No. Try Word Read Aloud or your system’s speech feature first. A separate reader is an optional workflow choice."
  },
  {
    "q": "Can LoudReader edit my Word document?",
    "a": "It is a reader, not a Word editor. Export a supported file, make revisions in the original document and re-export for another listening pass."
  },
  {
    "q": "Will narration check my citations?",
    "a": "No. Check quotation wording, sources and citation formatting against the original materials."
  },
  {
    "q": "Can I move between Mac and iPhone automatically?",
    "a": "LoudReader does not provide automatic library or position sync. Transfer and import the file on the device you intend to use."
  }
];
