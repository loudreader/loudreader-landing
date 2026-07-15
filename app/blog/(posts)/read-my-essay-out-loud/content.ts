// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Import formats are EPUB and PDF ONLY: ContentView.swift:827 and
//     News/HomeView.swift:138 both use
//     .fileImporter(allowedContentTypes: [.epub, .pdf]); Info.plist
//     CFBundleDocumentTypes lists org.idpf.epub-container and com.adobe.pdf.
//     The article therefore tells readers to export their essay to PDF first
//     and never claims .docx/.txt/paste-text import.
//   - Word-by-word highlighting: ContinuousReaderView.swift:4383-4388 applies
//     a per-word `tts-word-highlight` class driven by TTSEngine word events
//     (TTSEngine.swift:22).
//   - On-device synthesis / works offline / no account: TTS engines run
//     locally (Engines/ directory); no CloudKit/NSUbiquitousKeyValueStore
//     anywhere in the app source, so nothing is uploaded.
//   - No cross-device sync exists (same search), so the article says to move
//     the file to the device yourself (AirDrop) and never claims sync.
//   - Pricing/free-tier facts imported from components/money/site.ts.
// Statements about web essay readers are deliberately hedged generalizations
// ("many free web readers cap...") with no named services or numbers.
// macOS Spoken Content and Word Read Aloud are described only at the level of
// "they exist and read a selection/document", with no version specifics here.
// Claims you may NOT make until verified: .docx import, paste-text import,
// cross-device position sync, grammar checking of any kind.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the fastest way to hear my essay read back?",
    a: "For a one-off pass, your computer can already do it: macOS reads any selected text aloud with Spoken Content, and Word has a built-in Read Aloud command. For a real editing pass, where you pause to fix, reread paragraphs, and listen to the whole draft, export the essay to PDF and open it in LoudReader, which reads it with natural offline voices and highlights each word as it goes. Import takes about a minute the first time and seconds after that.",
  },
  {
    q: "Do free web essay readers have length limits?",
    a: "Many free web readers cap how much text you can paste at once or how many words you can listen to per day, and the caps change often. LoudReader's free tier has no word quota: unlimited listening on every document, cover to cover, with no account. A 500-word paragraph and a 20-page thesis chapter are treated exactly the same.",
  },
  {
    q: "Will hearing my essay catch grammar mistakes?",
    a: "It catches a specific and valuable class of them: missing words, doubled words, wrong word forms, run-on sentences, and sentences that read fine but sound wrong. A text-to-speech voice reads exactly what's on the page, so errors your eyes autocorrect become audible. It's not a grammar checker (it won't flag comma rules), so use it alongside one, not instead of one.",
  },
  {
    q: "Can I do this on my Mac and my iPhone?",
    a: "Yes, LoudReader has native Mac and iPhone apps. A common pattern is writing on the Mac and doing the listening pass on the iPhone with headphones, away from the keyboard. There's no cloud between the devices (by design), so move the PDF over yourself (AirDrop takes seconds) and import it on the device where you want to listen.",
  },
  {
    q: "Is my essay uploaded to a server when LoudReader reads it?",
    a: "No. LoudReader is fully on-device and private, your library never leaves your device. The voices are generated locally on your Mac or iPhone, there's no account, and reading works in airplane mode. That matters for essays more than most documents: personal statements and application essays are personal by definition.",
  },
];
