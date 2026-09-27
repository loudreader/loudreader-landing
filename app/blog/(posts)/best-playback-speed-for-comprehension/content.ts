// FACT PROVENANCE — editorial review 2026-09-28.
//   - LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), source audit 2026-09-28, not a runtime test.
//     Product facts: SubscriptionAccess.swift / SubscriptionManager.swift / PaywallReason.swift (trial and gates),
//     VoiceRegistry.swift / ChatterboxVoice.swift / DeviceCapability.swift (roster and support),
//     PDFImportPipeline.swift (on-device OCR), Xcode iOS target (Mac compatibility).
//   - https://castel.psych.ucla.edu/wp-content/uploads/sites/111/2021/11/ACP-Lecture-Speed-Murphy-2021-in-press.pdf (opened 2026-09-28, abstract and Experiment 1; lecture videos, not universal audiobook results)
//   - LoudReader/TTSPreferences.swift at release_v1.12: minRate=0.3,maxRate=3.0; Premium gate from canonical audit
// Practical listening checks are editorial suggestions, not measured learning outcomes.
// No universal quality ranking, listening-speed threshold, or clinical benefit is claimed.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "What playback speed guarantees full comprehension?", a: "None. The multiplier does not account for the original narrator’s pace, the material, your knowledge or your setting. Check whether you can explain a section accurately rather than relying on a universal cutoff." },
  { q: "Does research prove 2x is suitable for every audiobook?", a: "No. A lecture-video study found similar comprehension at 1x, 1.5x and 2x for its tasks, but that does not establish a limit for all books, voices or listeners." },
  { q: "How can I tell whether faster listening is working?", a: "After a short unfamiliar section, pause and explain the main point and important details. Check the text for omissions. For study, check what you remember later as well." },
  { q: "Will slowing down solve every difficult passage?", a: "No. Unfamiliar concepts, unclear pronunciation, missing diagrams or extraction errors may need a different approach. Pause, read the source or look up the missing information." },
  { q: "Does LoudReader include speed adjustment?", a: `LoudReader Premium supports 0.3x to 3.0x playback. Free book listening continues at normal speed. ${FREE_TIER.full}` },
];
