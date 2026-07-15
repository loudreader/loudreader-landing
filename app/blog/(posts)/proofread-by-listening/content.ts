// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Import formats: .fileImporter(allowedContentTypes: [.epub, .pdf]) in
//     ContentView.swift / HomeView.swift, so a draft must be exported to PDF
//     or EPUB first; the article says so (no DOCX/TXT/Markdown import claim).
//   - Position memory / resume after pause: PlayerService.swift + reader
//     controllers persist the reading position, the "pause, fix, resume"
//     workflow claim.
//   - Word-by-word highlighting while speaking:
//     ContinuousReaderController.swift, highlightWord(for:).
//   - On-device privacy: voices are generated locally (on-device TTS
//     engines in the app source); imported files are never uploaded. The
//     verbatim differentiator from components/money/site.ts.
//   - Playback speed (0.3x to 3.0x) is Premium; free tier plays at normal
//     speed; prices $7.99/month, $49.99/year, $199.99 lifetime, all from
//     components/money/site.ts PRICING (stated honestly in copy and FAQ).
//   - Native Mac and iPhone apps: components/money/site.ts DIFFERENTIATORS.
// The "why ears catch errors" section is presented as the shared experience
// of writers and an explanation from first principles (prediction /
// familiarity), NOT as a cited research finding. No study is cited anywhere
// in this article, deliberately.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why do I catch more errors when I hear my writing?",
    a: "Because you wrote it, you read it with the memory of what you meant. Your eyes skim familiar sentences and quietly supply missing words and smooth over doubled ones. A text-to-speech voice has no such memory. It reads exactly what's on the page, so a missing 'the', a duplicated 'and and', or a sentence that never ends becomes something you hear immediately.",
  },
  {
    q: "What playback speed is best for proofreading?",
    a: "Slightly slower than natural for a line-level typo pass, and normal speed for a rhythm-and-flow pass. In LoudReader, speed control (0.3x to 3.0x) is a Premium feature ($7.99/month, $49.99/year, or $199.99 lifetime). The free tier plays at normal speed, which works well for the flow pass.",
  },
  {
    q: "Should I use a natural or robotic voice for editing?",
    a: "Neutral and natural beats both extremes. A flat robotic voice exposes weak prose but is exhausting over a full manuscript, and an overly dramatic voice can paper over clunky sentences with performance. A calm, natural voice like LoudReader's natural offline voices reads what's there without selling it, and you can listen for hours without fatigue.",
  },
  {
    q: "How do I get my draft into LoudReader?",
    a: "Export it as a PDF or EPUB. Every writing tool can do at least PDF (Word, Google Docs, Scrivener, Pages), and most long-form tools export EPUB too. Then import the file into LoudReader on Mac or iPhone and press play. EPUB reflows more cleanly, and PDF is the universal fallback.",
  },
  {
    q: "Is my unpublished draft uploaded anywhere?",
    a: "No. LoudReader is fully on-device and private, your library never leaves your device. The narration is generated locally on your Mac or iPhone, there's no account, and no text you import is sent to any server. Playback even works in airplane mode.",
  },
];
