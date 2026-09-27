// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - Editorial preference guide only; no gender-comprehension study, preference survey or universal ranking claimed
//   - data/voices.ts and app/voices/page.tsx: samples and language roster, not evidence of listener preferences
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "Should I choose a male or female audiobook narrator?", a: "Choose the individual voice you enjoy and can follow. A category label is not a guarantee of clarity or suitability for a particular book." },
  { q: "Must the narrator match the main character?", a: "It can be a preference, especially for first-person stories, but you can decide by listening to a scene. A voice selection alone does not promise a separate narrator for each character." },
  { q: "How do I compare voices fairly?", a: "Use the same passage at comfortable volume and a similar pace. Listen for pronunciation and pauses, then try a longer section with the voice you prefer." },
  { q: "Does every LoudReader language offer several voice choices?", a: "No. The studio roster has multiple English and Spanish voices, and one narrator for each of the other eight supported languages. Device support and access affect availability." },
  { q: "Can I change narrator after choosing one?", a: "Yes. LoudReader lets you change the voice from its reader controls. The selection is app-wide rather than a separate preference saved for each book." },
];
