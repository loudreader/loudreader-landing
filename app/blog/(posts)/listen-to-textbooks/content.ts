// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Import formats: ContentView.swift / HomeView.swift use
//     .fileImporter(allowedContentTypes: [.epub, .pdf]), EPUB and PDF only.
//   - PDF reading: PDFImportPipeline.swift extracts the PDF's embedded text
//     layer via PDFKit. There is NO OCR. A scanned, image-only PDF has no
//     text to read. The article and FAQ say so explicitly.
//   - Word-by-word highlighting: ContinuousReaderController.swift
//     (highlightWord(for:) driven by the speech engine's word-boundary
//     callbacks; wordHighlightWillChange publisher consumed by
//     ContinuousReaderView.swift).
//   - Offline playback: TTS voices run on-device (the Core ML synthesis
//     engines in the app source); no network needed for narration.
//   - Background playback with the screen locked: Info.plist declares
//     UIBackgroundModes = ["audio"]; lock-screen controls via
//     MPRemoteCommandCenter in PlayerService.swift.
//   - Position memory / resume: PlayerService.swift + reader controllers
//     persist and restore the reading position (same claim as the money
//     pages and the driving article).
//   - Pricing and free-tier facts: components/money/site.ts (single source
//     of truth, synced with the App Store listing). Free tier is unlimited
//     listening with no word quota; playback speed (0.3x to 3.0x) is Premium.
// Claims deliberately NOT made: OCR of scanned pages, DOCX/PPT import,
// annotation/flashcard features, multi-language voices (10 languages).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can an app read my textbook PDF aloud?",
    a: "Yes, as long as the PDF contains real text rather than photographed pages. LoudReader imports any DRM-free PDF or EPUB and reads it aloud with natural offline voices, highlighting each word as it's spoken. Listening is free and unlimited, with no word quota and no account, and it works on both Mac and iPhone.",
  },
  {
    q: "What if my textbook is a scanned PDF?",
    a: "A scanned PDF that's just images of pages has no text layer, so no text-to-speech app can read it directly, LoudReader included. Run the scan through an OCR tool first (many scanner apps and PDF editors include one), then import the OCR'd file. If you can select and copy text in the PDF, it'll read fine.",
  },
  {
    q: "Can I speed up textbook narration for revision?",
    a: "Playback speed control from 0.3x to 3.0x is part of LoudReader Premium ($7.99/month, $49.99/year, or $199.99 lifetime). The free tier plays at normal speed with unlimited listening. Slower speeds help when the material is dense, and faster speeds work well for re-listening to chapters you already know.",
  },
  {
    q: "Does LoudReader cost anything for students?",
    a: "The core is free. That's unlimited listening on every book or document, cover to cover, with no word quota and no account. Premium is optional and adds all 23 studio narrators, playback speed control, a sleep timer, ambient soundscapes, and notes & highlights.",
  },
  {
    q: "Can I listen to a chapter again offline before an exam?",
    a: "Yes. The voices run entirely on your device, so nothing is streamed. Narration works on the subway, on a plane, or anywhere without signal. LoudReader remembers your position, and you can jump back to any chapter and re-listen as many times as you want, free.",
  },
];
