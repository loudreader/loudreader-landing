// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. Plain .txt is not in the
//     UTImportedTypeDeclarations in Info.plist and is not handled by
//     DocumentPicker.swift.
//   - The honest workflow described here (save .txt as PDF, then import)
//     is the actual route: any text editor on Mac (TextEdit) and iPhone
//     (Notes, Pages) can export as PDF. No feature is invented.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: direct .txt import into LoudReader.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader open .txt files directly?",
    a: "No, LoudReader imports EPUB and PDF files. A plain text file needs a quick conversion step first: open it in any text editor (TextEdit on Mac, Notes or Pages on iPhone), export it as a PDF, then import the PDF into LoudReader. The text reads exactly as written, with all line breaks preserved.",
  },
  {
    q: "Will I lose formatting when I convert a .txt to PDF?",
    a: "A .txt file has no formatting to lose. That is the format's strength for this use case. Plain text has no fonts, no bold, no italics, no margins. When you export it to PDF, the words appear in whatever default font your text editor uses, and LoudReader reads them in the order they appear on the page. If the .txt file uses a fixed-width layout, line breaks are preserved.",
  },
  {
    q: "Can I use this to proofread my writing?",
    a: "Yes, and it is one of the best use cases for plain-text read-aloud. Save a draft of a blog post, essay, or chapter as .txt, export it to PDF, and let LoudReader read it back to you. Hearing your own words catches awkward sentences, repeated words, and rhythm problems that your eyes skip over. Many writers find it more effective than reading silently on screen.",
  },
  {
    q: "Does this work with very long .txt files like logs or data dumps?",
    a: "Yes, as long as the resulting PDF stays within workable page dimensions. LoudReader reads PDFs cover to cover with no word limit. For extremely long files, you might want to split the text into smaller chunks and create a separate PDF for each one, so you can jump between sections.",
  },
  {
    q: "Is the conversion to PDF private?",
    a: "Yes, and in two layers. First, the conversion happens entirely on your own device using a built-in text editor. Second, once the PDF is in LoudReader, it stays there. LoudReader is fully on-device and private, your library never leaves your device, and no account is needed.",
  },
];
