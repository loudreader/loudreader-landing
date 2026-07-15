// FACT PROVENANCE, every claim verified on 2026-07-14 against:
//   - Research citation: Wood, S. G., Moxley, J. H., Tighe, E. L., &
//     Wagner, R. K. (2018). "Does Use of Text-to-Speech and Related
//     Read-Aloud Tools Improve Reading Comprehension for Students With
//     Reading Disabilities? A Meta-Analysis." Journal of Learning
//     Disabilities, 51(1), 73 to 84. DOI 10.1177/0022219416688170. Random
//     effects model: average weighted effect size .35 (95% CI .14 to .56,
//     p < .01) on reading comprehension. Verified via
//     journals.sagepub.com/doi/10.1177/0022219416688170 and PubMed 28112580.
//     This is the ONLY study cited; framed as moderate/assistive, not a cure.
//   - Microsoft Immersive Reader concession: support.microsoft.com pages
//     ("Use Immersive Reader in Word", Edge learning center). Free, built
//     into Word/OneNote/Outlook/Teams/Edge; "Read Aloud highlights each word
//     as it reads your document"; Line Focus; text spacing; syllables.
//   - Read&Write concession: texthelp.com / everway.com Read&Write for
//     Education pages. Literacy support toolbar, TTS with dual-color
//     highlighting, school/LMS deployments, free for K-12 teachers.
//   - Speechify facts: reuse of this repo's provenance in
//     app/(seo)/speechify-alternative-for-mac/content.ts (checked 2026-07-14
//     against speechify.com/pricing and /usage-limits): free tier = 10
//     standard voices at up to 1.5x speed; Premium $29/month; Premium word
//     allowance metered (1,000,000 words/month guaranteed for 2026;
//     150,000/month contractual baseline). Word-for-word highlighting:
//     speechify.com blog "How do I enable text highlighting" + App Store
//     listing ("active text highlighting").
//   - LoudReader word-by-word highlighting is free: LoudReader_mac
//     ReaderStylesheet.swift (.tts-word-highlight + .tts-sentence-highlight),
//     Engines/HighlightSchedule.swift (per-word timing). No paywall gate on
//     highlighting (PaywallReason.swift gates voices, speed, sleep timer,
//     ambient, notes, reading style, not read-along highlighting).
//   - Free tier = unlimited listening, no word quota: SubscriptionAccess.swift
//     (baseFreeFraction = 1.0, canImportBook always true) + site.ts PRICING.
//   - Voice trial: all voices free for the first 8 hours of listening, then
//     one free voice (SubscriptionAccess.voiceTrialLimitSeconds = 8h).
//   - PDF support: PDFImportPipeline.swift converts PDFs with a selectable
//     text layer to the reader format (scanned image-only PDFs are rejected
//     with a "no text layer" error).
//   - Speed 0.3x to 3.0x is Premium: site.ts PRICING.
// Claims you may NOT make until verified: that TTS remediates/improves
// decoding skill; that highlighting specifically (vs read-aloud generally)
// has strong independent evidence; languages other than English; OCR claims
// beyond "PDFs need a text layer".

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does text to speech actually help with dyslexia?",
    a: "The best available evidence says yes, moderately. A 2018 meta-analysis in the Journal of Learning Disabilities (Wood, Moxley, Tighe & Wagner) found text-to-speech and related read-aloud tools improved reading comprehension for students with reading disabilities, with an average effect size of .35. TTS is assistive, not a cure. It does not teach decoding, and it works best alongside proper reading instruction, not instead of it.",
  },
  {
    q: "Why does word highlighting matter for dyslexic readers?",
    a: "Because it locks eyes and ears together. When each word lights up as it is spoken, the reader always knows exactly where they are in the text. No losing the line, no expensive re-finding after a glance away. The printed word is paired with its sound on every single word, which is exactly the connection dyslexia makes effortful.",
  },
  {
    q: "Is LoudReader's word highlighting free?",
    a: "Yes. Word-by-word highlighting works on every book on the free tier, and free listening is unlimited: whole books, cover to cover, with no word quota. What is paid: Premium adds all 8 voices, playback speed control, sleep timer, soundscapes, and notes. After an 8-hour all-voices trial, free users keep one natural offline voice.",
  },
  {
    q: "What reading speed should a dyslexic student start with?",
    a: "Start at normal speed (1.0x) or slower, and let comfort decide. The goal is comprehension, not throughput. Many readers nudge the speed up as the voice becomes familiar. In LoudReader, speed control from 0.3x to 3.0x is a Premium feature, and the free tier plays at normal speed.",
  },
  {
    q: "Does LoudReader work for school PDFs and textbooks?",
    a: "Yes, if the PDF has selectable text. LoudReader converts the text layer into its reader format, and the same word-by-word highlighting applies. The honest exception is scanned, image-only PDFs with no text layer. Those cannot be read aloud as-is. DRM-protected school platform books also cannot be imported.",
  },
];
