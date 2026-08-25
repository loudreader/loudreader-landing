// FACT PROVENANCE. Every app-behavior claim verified on 2027-01-01 against
// the LoudReader app source (LoudReader_mac repo, main branch), same facts
// already verified and shipped in sibling articles listen-to-mobi-files,
// listen-to-scanned-pdf-books, listen-to-txt-files, and listen-to-markdown-files:
//   - Direct import formats: LoudReader/BookImportService.swift only branches
//     on .epub and .pdf ("Only EPUB and PDF files are supported" error string,
//     BookImportService.swift:163 and :177). No other format is accepted by
//     the file picker or the Share sheet.
//   - PDF-to-EPUB conversion on import: BookImportService.swift converts
//     imported PDFs into EPUB internally (see the "Transforming PDF to EPUB"
//     progress message), so PDF is a first-class import path, not a fallback.
//   - Plain text (.txt) and Markdown (.md) are not supported import formats
//     (not in Info.plist UTImportedTypeDeclarations, not handled by
//     DocumentPicker.swift). The workaround (export to PDF from any text
//     editor or Markdown renderer, then import) is the same one already
//     shipped in listen-to-txt-files and listen-to-markdown-files.
//   - MOBI is not a supported import format. DRM-free MOBI files convert to
//     EPUB with Calibre (free, open source) and then import normally.
//     DRM-locked MOBI/AZW3 from the Kindle Store cannot be opened; LoudReader
//     has no DRM circumvention code anywhere in the app source.
//   - Image-only PDFs (a scan with no selectable text layer) produce no
//     audio, because LoudReader reads the text layer of a PDF and has no
//     OCR capability anywhere in the app source. Apple's system-wide Live
//     Text (iOS 15+ / macOS 12+) is mentioned as a free way to get a text
//     layer, correctly attributed as a system feature, not a LoudReader one.
//   - 70,000+ Project Gutenberg books built into the app, and pricing/voice
//     facts, come from components/money/site.ts.
// Claims you may NOT make: direct .txt/.md/.mobi import, OCR, or DRM removal
// of any kind.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What file formats can LoudReader read aloud directly?",
    a: "EPUB and PDF. Those are the only two formats the app's file picker and Share sheet accept, and both work the same way: import the file, press play. Everything else on this list needs a conversion step first.",
  },
  {
    q: "Can it read a plain .txt file?",
    a: "Not directly. Open the .txt file in any text editor (TextEdit on Mac, Notes or Pages on iPhone), export it as a PDF, then import that PDF. The full workflow, including how formatting survives the trip, is in our guide to listening to .txt files.",
  },
  {
    q: "Can it read a Markdown (.md) file?",
    a: "Not directly, and not as raw syntax either. Render the Markdown to PDF first with a tool like Pandoc, Marked, iA Writer, or Obsidian's export, then import the PDF. That way you hear the formatted content, headings and lists included, instead of hash marks and asterisks. Details are in our guide to listening to Markdown files.",
  },
  {
    q: "Will it read a MOBI file from my Kindle?",
    a: "Only if the file is DRM-free. Convert it to EPUB with Calibre (free) and import the EPUB. If the MOBI or AZW3 file came from a Kindle Store purchase, it's DRM-locked and no app, LoudReader included, can open it without breaking that protection, which LoudReader doesn't attempt.",
  },
  {
    q: "Why won't it read my scanned PDF?",
    a: "Because a scan is a picture of a page, not text, unless someone ran OCR on it first. LoudReader reads the text layer of a PDF and has no OCR of its own, so an image-only scan produces silence. Check whether the PDF's text is selectable in any reader; if it is, LoudReader reads it. If not, run it through Apple's Live Text or a dedicated OCR tool first.",
  },
  {
    q: "What's the safest format to use if I have a choice?",
    a: "EPUB. It carries chapter structure, so LoudReader's chapter list and progress tracking line up cleanly with the book. PDF works well too, especially for documents that are already laid out as pages, but very complex PDF layouts (multi-column academic papers, dense tables) sometimes read out of visual order because the app follows the PDF's internal text order, not a human's eye path.",
  },
];
