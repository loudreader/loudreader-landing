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
// Official source checked 2026-09-28: https://www.sra.org.uk/solicitors/guidance/confidentiality-client-information/

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is LoudReader automatically approved for client files?",
    "a": "No. It is a general reader. Your firm must assess the app and the complete data-handling workflow for the particular material."
  },
  {
    "q": "Does local speech mean no information is sent from the app?",
    "a": "No. Speech and OCR are local, but the app includes diagnostics and default-enabled usage analytics. No independent network audit is claimed."
  },
  {
    "q": "Can listening verify a contract or citation?",
    "a": "No. Check the original text, references and legal effect through the appropriate professional review."
  },
  {
    "q": "Does deleting the app copy remove every copy?",
    "a": "Not necessarily. Exports, downloads, source-system copies and backups are separate. Follow the organisation’s retention and deletion process."
  }
];
