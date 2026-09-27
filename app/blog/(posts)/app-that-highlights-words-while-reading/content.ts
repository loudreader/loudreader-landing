// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - https://support.microsoft.com/en-us/accessibility/word/use-immersive-reader-in-word (opened 2026-09-28: word-level Read Aloud)
//   - https://help.naturalreaders.com/en/articles/11585617-display-and-reading-appearance-personal-version (opened 2026-09-28: word/sentence/combined controls and Text View)
//   - https://speechify.com/chrome/ (opened 2026-09-28: text highlighting feature)
//   - LoudReader reader highlighting source provenance retained from original; no claim of exact timing accuracy or therapeutic efficacy
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "What should I search for in a highlighting app?", a: "Search for synchronised word highlighting or read-along highlighting. Annotation highlights and line-focus modes do different jobs and may not follow the narration." },
  { q: "Which apps document word-by-word read-along?", a: "Examples include LoudReader, Microsoft Word’s Immersive Reader, NaturalReader Personal and Speechify’s Chrome extension. Check the feature in the version and document view you intend to use." },
  { q: "Does highlighting guarantee better comprehension?", a: "No. It shows the current spoken passage, but that is not a guarantee of attention or learning benefits. Try it on your own material and check whether it helps you follow the text." },
  { q: "Does LoudReader highlight scanned PDFs?", a: "It can narrate and highlight text extracted from a scanned PDF using on-device OCR. Recognition and reading order depend on the scan; inspect the extracted text, especially with complex layouts." },
  { q: "Is word-following highlighting free in LoudReader?", a: `Yes. Adjustable playback speed is Premium, but word-following highlighting is free. ${FREE_TIER.full}` },
];
