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
// Official source checked 2026-09-28: https://help.audible.co.uk/s/article/understand-error-codes?language=en_GB
// Official source checked 2026-09-28: https://www.gutenberg.org/policy/permission.html
// Official source checked 2026-09-28: https://wiki.librivox.org/index.php/Copyright_and_Public_Domain

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does absence from Audible mean no audiobook exists?",
    "a": "No. Alternate titles, editions, regional availability and catalogue changes can affect what you find. Check the publisher and your library too."
  },
  {
    "q": "Can I ask for an audiobook to be made?",
    "a": "You can contact the publisher or author about planned editions and tell your library what you would like to borrow. None of those requests guarantees production or availability."
  },
  {
    "q": "Can LoudReader open a protected Kindle book?",
    "a": "No. It needs a supported accessible file; it does not remove DRM."
  },
  {
    "q": "Can a scanned PDF be read?",
    "a": "LoudReader includes OCR for scanned pages. Recognition and reading order can be imperfect, so check a sample, particularly names, numbers and columns."
  }
];
