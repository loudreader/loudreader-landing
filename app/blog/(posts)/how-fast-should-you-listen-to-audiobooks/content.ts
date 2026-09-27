// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - LoudReader/TTSPreferences.swift at release_v1.12: playback limits; all example times are duration divided by multiplier, not measured sessions
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "How fast should I listen to an audiobook?", a: "Use a pace that lets you follow and enjoy it. Start near the original pace and make small changes. There is no requirement to work towards a particular multiplier." },
  { q: "Is 1.5x the same speaking rate for every voice?", a: "No. It multiplies that voice’s original pace. A slowly narrated recording at 1.5x may still differ substantially from another at the same setting." },
  { q: "Do I need to keep one speed for a whole book?", a: "No. Change the setting when the voice, material or listening conditions call for it. You can also pause and read a difficult section." },
  { q: "How long does a ten-hour audiobook take at 1.5x?", a: "About six hours forty minutes, excluding pauses and replays. Divide the original duration by 1.5. This calculation says nothing about comprehension." },
  { q: "Can I adjust speed for free in LoudReader?", a: `Speed adjustment from 0.3x to 3.0x is Premium. The free tier supports normal-speed book listening. ${FREE_TIER.full}` },
];
