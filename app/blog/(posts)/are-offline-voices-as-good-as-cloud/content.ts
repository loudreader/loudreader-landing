// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - LoudReader/Analytics.swift and LoudReaderApp.swift release_v1.12 as audited in canonical fact sheet: usage analytics default on plus crash/performance diagnostics.
//     SettingsSheet.swift:65 sets showsUsageStatisticsChoice=false; line483 hides the Privacy toggle.
//     The comment in Analytics.swift describing a Settings opt-out is stale in shipping 1.12.
//   - No comparative listener, latency or battery benchmark exists for this article
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Do cloud voices always sound better than offline voices?", a: "No universal ranking follows from the processing location. Compare the specific model, voice, language and passage, then listen for long enough to decide whether you like it." },
  { q: "Is local speech always faster or more battery-efficient?", a: "Not necessarily. Device hardware, model size, audio caching and connection conditions affect performance. This article reports no comparative latency or battery benchmark." },
  { q: "Does offline text to speech mean an app sends no data?", a: "No. LoudReader generates narration locally but also sends crash/performance diagnostics and usage analytics. Analytics is enabled by default; version 1.12 does not expose a user-facing switch to disable it." },
  { q: "Can I rely on offline narration while travelling?", a: "Prepare the book and desired voice resources beforehand, then test that combination without a connection. Installation, downloads and purchases still need network access." },
  { q: "How can I try LoudReader’s offline voices?", a: `Listen to browser samples at /voices, then try representative passages in your own book on a supported device. ${FREE_TIER.full}` },
];
