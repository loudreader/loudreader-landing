// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - Arithmetic checked 2026-09-28: duration/multiplier and words/pace/60; example pace and word counts are assumptions, not empirical averages
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "How long does a ten-hour audiobook take at 1.5x?", a: "About six hours forty minutes before pauses and replays. Divide ten hours by 1.5. If your player already adjusts its remaining-time display, do not divide that adjusted number again." },
  { q: "How do I estimate listening time from word count?", a: "Divide words by narration words per minute, then by 60 for hours. Divide by the playback multiplier if your pace measurement was made at 1x. Treat assumed pace as an estimate." },
  { q: "Does every book take around ten hours?", a: "No. Ten hours in this article is a worked example: 90,000 words at an assumed 150 words per minute. Books, voices, languages and playback settings vary." },
  { q: "Can I calculate an exact duration from page count?", a: "No. Layout, images, font size and dialogue all change words per page. Sample several pages if you have no word count and report a rough range rather than an exact duration." },
  { q: "How many listening sessions will I need?", a: "Divide remaining listening minutes by your planned session length, then allow for breaks and repeated sections. Six hours would be twelve uninterrupted thirty-minute sessions." },
];
