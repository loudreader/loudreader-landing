// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - PDF text extraction runs locally with no network call: LoudReader/PDFImportPipeline.swift
//     opens the file with PDFKit and pulls the embedded text layer on-device.
//     There is no URLSession or upload code path anywhere in that file.
//   - No OCR: PDFImportPipeline.swift only reads a PDF's existing selectable
//     text layer (minTextualPageRatio check + PDFKit text extraction). A
//     scanned, image-only PDF with no text layer will not read reliably.
//   - No account, no server sync: there is no CloudKit or account code in the
//     app source at all (grepped the full LoudReader/ tree). Nothing about a
//     PDF you import is sent anywhere.
//   - Speech generation runs on-device: LoudReader/Engines/BaseTTSEngine.swift
//     and the CoreML-based TTS pipeline run locally; no network call happens
//     to produce audio.
//   - Background playback with the screen locked: LoudReader/Info.plist
//     declares UIBackgroundModes = ["audio", "processing"].
//   - Pricing, free-tier, and voice facts come from components/money/site.ts
//     (single source of truth, synced with the App Store listing).
// Claims NOT made here: CarPlay, Android, Windows, live cloud integrations,
// or reading image-only/scanned PDFs (that needs OCR, which this pipeline
// does not do).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader upload my PDF anywhere to read it aloud?",
    a: "No. LoudReader opens the PDF and generates the narration entirely on your iPhone or Mac. The file never leaves your device, there's no server in the pipeline, and the app works the same with your Wi-Fi off.",
  },
  {
    q: "Can a PDF reader really work without sending the file to a server?",
    a: "Yes, if the app does both steps locally: reading the PDF's text layer, and generating the audio. LoudReader does both on-device using Apple's PDFKit for extraction and on-device speech generation, so no PDF content or generated audio needs a network round trip.",
  },
  {
    q: "Does an app that reads PDFs offline need my PDF to have selectable text?",
    a: "Yes. LoudReader reads a PDF's existing text layer, the same text you could already select and copy in a normal PDF viewer. It doesn't run OCR, so a scanned page saved as an image with no text layer won't read reliably.",
  },
  {
    q: "Do I need an account to read a PDF aloud with LoudReader?",
    a: "No. There's no account, no login, and no sign-up screen. You open the app, import the PDF, and press play.",
  },
  {
    q: "Is a PDF I import into LoudReader stored anywhere except my device?",
    a: "No. The app has no account system and no cloud sync in its source code, so there's nowhere else for the file to go. It lives in your local library, the same as any file in your Files app.",
  },
];
