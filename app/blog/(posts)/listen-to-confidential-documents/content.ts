// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Imported files are processed and stored locally on the device:
//     BookImportService.swift, FileManager .documentDirectory (line ~89);
//     EPUBs are copied into that container (copyItem), PDFs are converted
//     to EPUB on-device by PDFImportPipeline.swift (no network, no OCR of
//     image-only PDFs, hence the "pure scans" concession in the copy).
//   - Deleting a book removes the file (and its cover) from local storage:
//     BookImportService.swift deleteBook(_:) via FileManager.removeItem on the
//     book file and cover image.
//   - Playback with the screen locked: LoudReader/Info.plist declares
//     UIBackgroundModes = ["audio", "processing"] (same verification as the
//     listen-to-books-while-driving article).
//   - Offline playback / airplane mode: speech is synthesized on-device
//     (local TTS engines in the app source); consistent with the vetted
//     airplane-mode claim on app/(seo)/private-text-to-speech-no-cloud/.
//   - No account / no sign-up: components/money/site.ts PRICING ("No
//     account") and the private-TTS money page ("no sign-up, no login, no
//     profile").
//   - DRM-free EPUB/PDF scope: consistent with existing pages (the app
//     reads DRM-free files; DRM'd files are conceded as unsupported).
//   - Requirements (iOS 18+, macOS 15+ Apple Silicon):
//     components/money/site.ts REQUIREMENTS.
// Deliberately NOT claimed: compliance with any specific regulation (HIPAA,
// GDPR, bar rules), because the article explicitly says it is not legal advice
// and defers to organizational policy; OCR of scanned/image-only PDFs; CarPlay;
// anything about device backups. Legal statements are generic ("check your
// obligations"), never jurisdiction-specific.
// No studies are cited in this article.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I use text to speech on documents under NDA?",
    a: "That depends on your NDA and your organization's rules, and this is not legal advice. The structural point: uploading a document to a cloud TTS service places a copy on a third party's infrastructure, which is exactly the kind of disclosure confidentiality reviews flag. On-device text to speech never transmits the document, so no third party receives anything. If your policy allows the document on your device at all, on-device narration adds no new recipient.",
  },
  {
    q: "How do I verify an app isn't sending my files anywhere?",
    a: "Turn off Wi-Fi and cellular, then press play. An app that keeps reading with no connection is synthesizing speech on the device, and there is no way to fake that. An app that stops or errors was sending your text to a server. Run the test once before you trust any app with sensitive material.",
  },
  {
    q: "Does LoudReader work in airplane mode?",
    a: "Yes. The voices are generated on your device, so playback of imported documents works with all connectivity off, and that is the basis of the airplane-mode test. The only things that need a connection are optional downloads you ask for, like fetching a free classic from the built-in Project Gutenberg catalog.",
  },
  {
    q: "Do I need an account to use LoudReader?",
    a: "No. There is no sign-up, no login, and no profile. Nothing you read is tied to an identity because the app never asks for one.",
  },
  {
    q: "Where are imported documents stored?",
    a: "In the app's local storage on your device. Importing copies the file into LoudReader's own container; nothing is uploaded. Deleting the book from your library removes the file from that storage, so the import-listen-delete loop starts and ends on your device.",
  },
];
