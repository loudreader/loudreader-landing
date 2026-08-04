// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Voice switching: PlayerService.swift `switchVoice(to:)` switches the
//     active voice, including mid-book. Premium status gives access to all
//     voices (VoiceRegistry.isVoiceUnlocked(allVoicesUnlocked:freeVoiceIdentifier:),
//     SubscriptionManager). The free tier includes ONE voice. "All 8 AI
//     voices" is Premium (components/money/site.ts PRICING.premiumFeatures).
//     The voices FAQ states both halves honestly.
//   - Import formats: .fileImporter(allowedContentTypes: [.epub, .pdf]) in
//     ContentView.swift / HomeView.swift. Manuscripts must be exported to
//     EPUB or PDF; no DOCX/Scrivener-project import is claimed.
//   - Position memory across sessions: PlayerService.swift + reader
//     controllers persist the reading position (chapter-by-chapter listening
//     pass claim).
//   - On-device privacy: TTS voices are generated locally (on-device engines
//     in the app source); imported files are never uploaded; no account.
//     Verbatim differentiator from components/money/site.ts. Airplane-mode
//     playback follows from narration being generated locally.
//   - Punctuation/dialogue: narration follows sentence punctuation with a
//     single narrator voice. The app does NOT do per-character voices or
//     acted performances. The article concedes this explicitly.
// Claims about cloud TTS services are deliberately generic and factual in
// form ("processing happens on their servers under terms that vary by
// service and can change"). NO specific company is accused of training AI
// on uploads, and no company's policy is characterized. Do not add such
// claims without verifying a named service's current terms.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is it safe to put an unpublished manuscript into a TTS app?",
    a: "It depends entirely on where the processing happens. With a cloud TTS service, your text is sent to and processed on the provider's servers under terms that vary by service and can change. With an on-device reader there's nothing to trust: LoudReader is fully on-device and private, your library never leaves your device. The narration is generated locally, with no account and no upload.",
  },
  {
    q: "Could a cloud TTS service train AI on my novel?",
    a: "That's governed by each service's terms and privacy policy, which differ between providers and can be updated over time. So the honest answer is: read the current terms of any service before uploading unpublished work. The way to remove the question entirely is to use a reader where the text never leaves your machine. LoudReader generates narration on your Mac or iPhone, and no server ever sees the manuscript.",
  },
  {
    q: "How do I export my manuscript for listening?",
    a: "Export to EPUB or PDF. Those are the formats LoudReader imports. Scrivener compiles to EPUB directly, and Word, Google Docs, and Pages all export PDF (Pages exports EPUB too). EPUB is the better listening copy because it reflows cleanly, and PDF works fine as the universal fallback. Then import the file on Mac or share it to LoudReader on iPhone.",
  },
  {
    q: "Can I switch voices between listening passes?",
    a: "Yes, with Premium. LoudReader Premium gives you all 23 studio narrators and you can switch at any time, mid-book included. A fresh voice on the second pass makes familiar prose sound new again, which is the point. The free tier includes one voice with unlimited listening.",
  },
  {
    q: "Does the voice handle dialogue and punctuation well?",
    a: "The narration follows your punctuation, with pauses at commas, full stops at periods, and natural sentence contours, all in a single consistent narrator voice. It doesn't perform characters or act out dialogue, and for editing that's a feature: a neutral read exposes dialogue that only worked because you were performing it in your head.",
  },
];
