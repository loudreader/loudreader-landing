import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ListenToScannedPdfBooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A scanned book can be read aloud even when its PDF contains only page
          images. LoudReader 1.12 includes on-device optical character recognition
          (OCR): it attempts to recognise words in image-based PDFs, then generates
          speech locally. You no longer need to run every scan through a separate
          OCR app first. The important check is whether the imported text is
          complete and in the right order. Faint printing, curved pages and complex
          layouts can still produce missing or incorrect words. The current PDF
          importer recognises up to 300 image pages per import and warns about
          partial results. For a difficult or longer scan, a prepared searchable
          PDF remains useful.
        </p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="A page image needs text recognition before its words can become speech. LoudReader can do that recognition locally." />

      <QuestionSection question="What is the difference between a searchable PDF and an image-only scan?">
        <p>
          A searchable PDF contains actual text as well as, sometimes, an image of
          the original page. An image-only PDF contains the page photograph without
          those words stored as text. Speech software needs to extract existing
          text or recognise it from the image before reading it aloud.
        </p>
        <p>
          Copy a paragraph into a plain-text editor to see what your PDF viewer can
          extract. Some viewers recognise image text themselves, so successful
          selection is a useful preview, not proof of a clean text layer in the
          underlying file. Read the pasted paragraph: the words may be selectable
          yet scrambled, duplicated or full of recognition errors.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I import and check a scanned book?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong className="text-gray-900">Keep the original scan.</strong> Work from a copy so you can compare unclear passages later.</li>
          <li><strong className="text-gray-900">Import the PDF into LoudReader.</strong> Choose it from the app&apos;s file importer and allow the conversion to finish. Image recognition adds work, so a long scan can take longer than a text PDF.</li>
          <li><strong className="text-gray-900">Read any import notice.</strong> The app reports recognition and incomplete results; a book appearing in the library does not guarantee every page was recovered.</li>
          <li><strong className="text-gray-900">Check several passages.</strong> Compare the beginning, a page in the middle and the ending against the original. Include a page with a heading or column break.</li>
          <li><strong className="text-gray-900">Listen to a short sample.</strong> Look for missing paragraphs, repeated running headers and words that were recognised incorrectly before starting a long session.</li>
        </ol>
        <p>
          The general import steps are in our guide to{" "}{" "}
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">listening to PDFs on iPhone</Link>.
          This guide focuses on the extra checks a scanned document needs.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the limits of LoudReader's built-in OCR?">
        <p>
          Recognition starts when at least half the PDF&apos;s pages lack text, or
          the total extracted text is very small. A mostly searchable PDF with a
          few image-only inserts may therefore keep those inserts unreadable.
          Existing selectable text is preserved, which also means an existing but
          incorrect text layer may need repair outside the app.
        </p>
        <p>
          The current limit is 300 pages requiring OCR per import, rather than a
          blanket 300-page limit on all PDFs. A longer image-only book can import
          partially. Treat the warning as a reason to split a copy into manageable
          sections or prepare its text with another OCR tool, then verify the
          chapter boundaries. Equations, tables and page diagrams need visual
          checking; hearing some text from a page does not mean its meaning has
          survived the conversion.
        </p>
      </QuestionSection>

      <QuestionSection question="When is an external OCR tool useful?">
        <p>
          Use one when you want a searchable PDF for several apps, need to correct
          a bad text layer, or have a scan beyond the built-in import limit. For
          people comfortable installing command-line software,{" "}{" "}
          <a href="https://ocrmypdf.readthedocs.io/en/latest/cookbook.html" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">OCRmyPDF&apos;s official cookbook</a>{" "}
          documents PDF-to-PDF recognition. After installing it and the needed
          language data, a basic command is:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm"><code>ocrmypdf --skip-text input.pdf output.pdf</code></pre>
        <p>
          This keeps pages that already have text and recognises the other pages.
          It does not repair an existing bad text layer; consult the tool&apos;s
          separate redo options for that case. Always write to a new output file
          and inspect it before replacing a source. OCR software is a tool for
          recovering words, not a guarantee that the book is now error-free.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I make a difficult scan easier to listen to?">
        <ul className="list-disc pl-6 space-y-2">
          <li>Capture one flat page at a time where possible. Keep the page upright, in focus and evenly lit, with the text clear of the binding.</li>
          <li>Check similar letter shapes: “rn” can become “m”, and “cl” can become “d”. Names and unfamiliar vocabulary deserve a closer look.</li>
          <li>Listen alongside the original for dense tables, poetry, footnotes and mathematics. Those layouts may not have a sensible single reading order.</li>
          <li>Prefer a clean EPUB or publisher-supplied text PDF when one is available to you. It avoids recognising printed text from a photograph.</li>
        </ul>
        <p>
          LoudReader also includes camera-based document scanning on supported
          devices, using local recognition. For a whole book, a scanner or an
          existing digital edition may still be the more practical starting point.
          See the broader{" "}{" "}
          <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">book-to-listening workflow</Link>{" "}
          for choosing your source format.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a scanned chapter first" subline="Import your PDF, check the recognised text, then listen with on-device narration." />
    </ArticleLayout>
  );
}
