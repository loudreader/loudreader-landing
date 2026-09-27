// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - LoudReader/ReaderView.swift at release_v1.12 inspected 2026-09-28: lines189–192 selection display vs next sentence,1746–1792 voice cycle and picker,607+ foreign-language confirmation
//   - LoudReader/TTSPreferences.swift at release_v1.12: app-wide selectedVoiceIdentifier UserDefaults setting
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "Can I change narrator partway through a book?", a: "Yes. Tap the reader’s voice control to cycle through accessible voices for the book’s language, or press and hold to choose from the picker. You do not need to restart the book." },
  { q: "Why do I still hear the old voice immediately after choosing another?", a: "The selection display changes immediately, but narration switches at the next sentence. The sentence already playing finishes in the previous voice." },
  { q: "Does choosing a voice in another language translate the book?", a: "No. It changes the narrator, not the written text. The picker asks for confirmation if the selected voice language differs from the book’s language." },
  { q: "Do I need Premium for every mid-book voice change?", a: "No. You can switch among voices your access allows. After the trial, the free selection is Stella or Rio, with Bella also available on supported devices. Locked studio voices require Premium." },
  { q: "Is the chosen voice saved separately for each book?", a: "No. The selected narrator is an app-wide preference. Changing it affects subsequent listening until you switch again." },
];
