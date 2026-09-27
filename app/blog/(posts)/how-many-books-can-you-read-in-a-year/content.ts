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
    "q": "Is there an average number I should aim for?",
    "a": "This guide does not set one. Your available time, chosen books and purpose are better inputs than an unsupported average."
  },
  {
    "q": "What is the basic formula?",
    "a": "Multiply listening minutes per week by planned listening weeks and divide by 60. Compare the resulting hours with the duration of the books you choose."
  },
  {
    "q": "Does 1.5× speed give me 50% more books?",
    "a": "It increases the amount of fixed audio played per minute by 50%, before pauses. Actual completed books depend on comprehension, rewinding, book lengths and your routine."
  },
  {
    "q": "Should I use all 52 weeks?",
    "a": "Only if that fits your plan. Leaving room for breaks and missed sessions makes the estimate less fragile."
  }
];
