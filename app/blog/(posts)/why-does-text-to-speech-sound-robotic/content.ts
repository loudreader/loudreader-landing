// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - https://research.google/pubs/transformer-based-models-of-text-normalization-for-speech-applications/ (opened 2026-09-28; context-dependent written-number normalisation)
//   - https://research.google/pubs/tacotron-towards-end-to-end-speech-synthesis/ (opened 2026-09-28; example neural generative TTS research, not claimed LoudReader architecture)
//   - LoudReader/TTSPreferences.swift and BaseTTSEngine.swift release_v1.12: playback rate controls; no listening benchmark performed
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Why does text to speech sound robotic?", a: "The description can cover flat delivery, odd pauses, pronunciation mistakes or playback artefacts. Identify the specific problem, then check language, source text and speed before comparing voices." },
  { q: "Can a modern neural voice still mispronounce words?", a: "Yes. Learned speech generation does not guarantee correct names, abbreviations, numbers or ambiguous words. Test the voice on representative text." },
  { q: "Why does my PDF sound worse than an ebook?", a: "The extracted PDF text may contain broken words, repeated headers, OCR mistakes or the wrong reading order. Inspect the text before assuming a different narrator will fix it." },
  { q: "Will cloud speech always sound less robotic than offline speech?", a: "No universal quality ranking follows from where synthesis runs. Compare the particular voice, language and passage you would use." },
  { q: "How do I try a different LoudReader voice?", a: `Use the reader’s voice picker or start with the browser samples at /voices. Voice availability depends on your device and access. ${FREE_TIER.full}` },
];
