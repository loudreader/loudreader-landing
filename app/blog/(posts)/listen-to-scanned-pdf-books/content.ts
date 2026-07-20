// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files and reads the text layer
//     using the system speech engine. Image-only PDFs (no selectable text)
//     produce no audio because there is nothing for the TTS engine to
//     read.
//   - LoudReader has no OCR capability. There is no image-to-text
//     processing anywhere in the app source.
//   - The honest advice (test if text is selectable, use external OCR
//     tools if needed) is accurate and verifiable.
//   - Apple's built-in OCR (Live Text, available system-wide since
//     iOS 15 / macOS 12) is mentioned as a free option for extracting
//     text from images. This is a system feature, not a LoudReader
//     feature.
//   - The claim that PDFs from services like Google Books, Internet
//     Archive, and academic databases often include a text layer is
//     verifiable by opening those PDFs in any PDF reader.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: OCR in LoudReader, scanning feature, image
// recognition.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can LoudReader read scanned PDFs?",
    a: "It depends entirely on the PDF. If the scan includes a text layer (selectable, highlightable text behind the image), yes. LoudReader reads the text layer and ignores the image overlay. If the scan is image-only with no selectable text, no. LoudReader has no OCR capability and cannot extract text from images. The PDF will appear in the app but produce no audio because there is nothing to read.",
  },
  {
    q: "How do I check if my scanned PDF has a text layer?",
    a: "Open the PDF in any PDF viewer (Preview on Mac, the Files app on iPhone, or Adobe Reader). Try to select a word by clicking and dragging over it. If the text highlights and you can copy it, the PDF has a text layer. If you click and nothing selects, or you get a crosshair cursor that selects a rectangular region of the image, the PDF is image-only. Only the first type works with LoudReader.",
  },
  {
    q: "What can I do with an image-only scanned PDF?",
    a: "You need to run OCR (optical character recognition) on it first. Apple's built-in Live Text can extract text from images in Preview, Photos, and Quick Look. Open the scanned PDF in Preview, select the area with text, and copy it. Paste into a text editor and export as a new PDF. For book-length scans, a dedicated OCR tool like Adobe Acrobat Pro or the open-source Tesseract engine produces better results with page structure preserved.",
  },
  {
    q: "Can LoudReader read old books I scanned myself?",
    a: "If you scanned them with software that includes OCR (most scanning apps and all-in-one printers offer this as a checkbox), the resulting PDF likely has a text layer. Test by selecting text in the PDF. If text is selectable, LoudReader reads it aloud. If you scanned as image-only (JPEG or TIFF embedded in a PDF container), the test will fail and you need to OCR the file first.",
  },
  {
    q: "How good is the TTS quality on scanned PDFs?",
    a: "The voice quality is the same natural neural voice LoudReader always uses. But OCR accuracy affects what words the TTS engine sees. OCR errors (sc as so, rn as m, cl as d) produce misread words. A cleanly OCR'd book reads well. A messy scan with lots of OCR errors sounds like a book full of typos. There is no way around this: the output is only as good as the OCR that produced the text layer.",
  },
  {
    q: "Where do I find PDFs that already have a text layer?",
    a: "Publications from academic databases (JSTOR, PubMed), Google Books, the Internet Archive, and most modern ebook platforms include a text layer by default. Library scans of public domain books almost always have a text layer because adding OCR is the difference between a useful archive and a stack of unsearchable images. If you are downloading a PDF to listen to, prefer these sources. If you are scanning your own books, enable OCR in your scanning software before saving.",
  },
];
