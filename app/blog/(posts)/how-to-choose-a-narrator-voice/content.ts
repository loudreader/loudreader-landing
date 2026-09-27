// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - LoudReader/TTSPreferences.swift and ReaderView.swift at release_v1.12 inspected 2026-09-28: single UserDefaults voice setting, cycle/picker and next-sentence transition
//   - data/voices.ts and app/voices/page.tsx: browser roster samples; studio counts cross-checked by canonical release audit
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "How should I choose a text-to-speech narrator?", a: "Start with the correct language. Compare a few voices on the same passage for pronunciation, pauses, pace and comfort, then listen to a longer section before settling on one." },
  { q: "How many studio voices does LoudReader have?", a: "The roster has 23 narrators across ten languages. Availability depends on your device. English has eleven studio voices, Spanish four, and the other eight supported languages one each." },
  { q: "Why can I not see a language in the voice picker?", a: "The voice list follows languages in your library or languages selected in Settings. Check those settings and the voices supported on your device. Selecting a voice does not translate a book." },
  { q: "Can I save a different narrator for each book?", a: "LoudReader’s selected voice is an app-wide preference. You can change it from the reader controls, but it is not a separate per-book narrator setting." },
  { q: "Can I make a narrator from my own voice?", a: "On supported devices, Voice Studio uses about ten seconds of speech. The all-voices trial allows up to three clone creations; Premium removes that quota. Use your own or a permissioned voice. Clones remain stored but lock when the relevant access expires." },
];
