// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - LoudReader/TTSPreferences.swift and LoudReader/Engines/BaseTTSEngine.swift at release_v1.12, inspected 2026-09-28: 0.3–3 rate, AVAudioUnitTimePitch.pitch=0 and per-item rate
//   - https://support.apple.com/guide/books/listen-to-audiobooks-ibks9a460640/mac (opened 2026-09-28; playback control, no claimed competitor limits)
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "How do I slow down an audiobook?", a: "Open the player’s speed control, often labelled 1x, and select a lower value. Replay a short section and adjust gradually. The control and minimum vary by app and device." },
  { q: "How slow can LoudReader play?", a: "LoudReader Premium supports a minimum of 0.3x and a maximum of 3.0x. Free book listening uses normal speed." },
  { q: "Will slower playback always make a passage clearer?", a: "No. A difficult concept, unclear pronunciation or OCR error may require checking the text or another source. Very slow playback can also sound stretched." },
  { q: "Does slowing LoudReader lower the narrator’s pitch?", a: "Its playback engine adjusts rate while holding pitch at the normal setting. Time stretching can still affect the sound, especially at extreme rates." },
  { q: "Should language learners always listen below 1x?", a: "No single setting suits all learners or materials. Try a short phrase at a comfortable pace, compare it with the text, and pause as needed. Slower playback is a practice option, not a proven universal prescription." },
];
