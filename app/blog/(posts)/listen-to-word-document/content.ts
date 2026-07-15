// FACT PROVENANCE. Verified on 2026-07-14.
// Microsoft Word Read Aloud facts, verified against Microsoft Support,
// "Listen to your Word documents":
// https://support.microsoft.com/en-us/office/listen-to-your-word-documents-5a2de7f3-1ef4-4795-b24e-64fc2731b001
//   - Read Aloud lives on the Review tab; play/pause/skip-paragraph controls;
//     a Reading speed slider; voice selection.
//   - Available on Windows, macOS, Word for the web, iOS, and Android, but
//     "only available for Office 2019, Office 2021, and Microsoft 365".
//   - Voices: "uses device-built or Microsoft service voices", i.e. the
//     natural service voices generally depend on a connection; the article
//     states offline behavior varies rather than claiming a hard rule.
// Word/Docs export flows are described at the generic menu level only
// (Word: File > Save As / Export to PDF; Google Docs: File > Download > PDF).
// App-behavior claims verified against the LoudReader app source
// (LoudReader_mac repo, main branch):
//   - LoudReader does NOT import .docx. Import formats are EPUB + PDF only:
//     ContentView.swift:827 / News/HomeView.swift:138 fileImporter
//     allowedContentTypes [.epub, .pdf]; Info.plist document types are
//     org.idpf.epub-container and com.adobe.pdf. The export step IS the
//     article's workaround and is stated as such.
//   - Word-by-word highlighting: ContinuousReaderView.swift:4383-4388.
//   - Fully on-device, works offline, no account: local TTS engines; no
//     CloudKit/NSUbiquitous/upload code in the app source.
//   - No cross-device sync. The article says to AirDrop the file, never
//     claims sync or continuity.
//   - Pricing facts from components/money/site.ts.
// Claims you may NOT make until verified: .docx import, Word mobile voice
// quality specifics, Word Read Aloud word-by-word highlighting behavior.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does Microsoft Word have a built-in read-aloud feature?",
    a: "Yes. In Word, select Review, then Read Aloud, and it reads the document from your cursor with play, pause, and skip-paragraph controls plus a reading-speed slider. Microsoft's documentation says it's available in Office 2019, Office 2021, and Microsoft 365, on Windows, Mac, the web, iOS, and Android. For a quick proofing pass inside Word, it's genuinely the fastest option.",
  },
  {
    q: "How do I convert a Word document to PDF for listening?",
    a: "In Word: File, then Save As, and choose PDF as the format (on Windows, File then Export also works). In Google Docs: File, then Download, then PDF Document. The export takes seconds and nothing about the text changes. Then import the PDF into LoudReader on your Mac or iPhone and press play.",
  },
  {
    q: "Can I listen to my Word document on my phone?",
    a: "Two ways. The Word mobile app includes Read Aloud, which is fine for a quick pass. For longer listening, export the document to PDF, AirDrop or save it to your iPhone, and open it in LoudReader. You get natural offline voices, word-by-word highlighting, and playback that works with the screen locked, with no account and no upload.",
  },
  {
    q: "Do Word's voices work offline?",
    a: "It depends. Microsoft's documentation says Read Aloud uses device-built or Microsoft service voices. The basic device voices work offline, while the more natural service voices generally rely on a connection. LoudReader's voices are natural offline voices by design. The narration is generated on your device, so it sounds the same in airplane mode as it does on Wi-Fi.",
  },
  {
    q: "Will formatting like headings and footnotes be read aloud?",
    a: "Read-aloud tools read the text they find in order, so page furniture can leak into the narration. If your document has running headers, footers, or page numbers, they become plain text in a PDF export, so turn them off before exporting for the cleanest listen. Headings are real text and will be read, which is usually what you want, since they tell you where you are.",
  },
];
