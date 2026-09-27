// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - https://www.audible.com/ep/read-listen (opened 2026-09-28: naming, matching editions, Audible/Kindle flow, marketplace eligibility)
//   - https://journals.sagepub.com/doi/10.1177/2158244016669550 (opened 2026-09-28: adult nonfiction comprehension/retention; no universal modality benefit)
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "What does reading and listening at the same time mean?", a: "You follow the written text while hearing the same passage. Some tools highlight the spoken word; you can also follow a matching edition manually." },
  { q: "Do I need to buy a separate audiobook?", a: "Not for text-to-speech narration of a supported ebook. Audible Read & Listen uses a supported matching ebook and audiobook pair, so check what access you already have and what the title requires." },
  { q: "Is Whispersync the same name Audible uses now?", a: "Audible now calls Whispersync for Voice Read & Listen. Check for the Read & Listen badge on a supported title; availability depends on the editions and marketplace." },
  { q: "Does using both text and audio guarantee better memory?", a: "No. A 2016 adult study found no significant difference between reading, listening and both for its tested material. Try the method for your own task and check your understanding." },
  { q: "Can I read along with a scanned PDF in LoudReader?", a: "LoudReader can recognise text from scanned PDFs locally and narrate that text with highlighting. Check OCR accuracy and reading order before relying on it, especially for tables or columns." },
];
