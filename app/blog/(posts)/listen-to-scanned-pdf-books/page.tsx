import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ListenToScannedPdfBooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Scanned PDFs come in two types, and only one works with
          text-to-speech. If your PDF has a text layer (the words are
          selectable when you click on them), <strong>LoudReader</strong> reads
          it aloud with natural offline voices. If the PDF is image-only with
          no selectable text, LoudReader produces no audio because there is
          nothing to read. The app does not do OCR. It is fully on-device and
          private, your library never leaves your device. For image-only scans,
          you need to run OCR first using Apple&apos;s built-in Live Text
          (free, copies text from images) or a dedicated OCR tool. For PDFs
          that already have a text layer (most library scans, academic PDFs,
          and OCR-enabled personal scans), import and press play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Selectable text means the PDF will read. Image-only means it will not. Test before you import."
      />

      <QuestionSection question="Why do some scanned PDFs work with TTS and others don't?">
        <p>
          A scanned PDF is a container. What is inside the container determines
          whether TTS works. There are two possibilities:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">PDF with a text layer.</strong>{" "}
            Behind the page image, invisible to your eyes, is a layer of
            selectable text that OCR software generated when the scan was
            created. This text is what TTS engines read. You can test for it
            by trying to select a word with your cursor. If it highlights and
            you can copy it, the text layer exists.
          </li>
          <li>
            <strong className="text-gray-900">Image-only PDF.</strong> The
            PDF contains page images and nothing else. Each page is a
            photograph of printed text, not text itself. Clicking on a word
            does nothing, or selects a rectangular region of the image. No
            text means nothing for TTS to read.
          </li>
        </ul>
        <p>
          This distinction is the whole article. Everything downstream depends
          on which type of PDF you have.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I test if my PDF can be read aloud?">
        <p>
          The test takes five seconds and works on any device:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open the PDF in Preview (Mac), the Files app (iPhone), or any PDF
            viewer.
          </li>
          <li>
            Try to select a word by clicking and dragging over it with your
            cursor or finger.
          </li>
          <li>
            If the word highlights, the PDF has a text layer. It will work in
            LoudReader.
          </li>
          <li>
            If nothing highlights and you get a crosshair or a rectangular
            selection, the PDF is image-only. It will not produce audio in
            LoudReader.
          </li>
        </ol>
        <p>
          This is the single most useful thing you can do before importing a
          scanned PDF into any TTS app, not just LoudReader. Every TTS engine
          needs actual text to work with.
        </p>
      </QuestionSection>

      <QuestionSection question="What do I do with an image-only scanned PDF?">
        <p>
          You need to run OCR on it. The goal is to add a text layer to the
          existing page images so that a TTS engine has something to read.
          Here are the options, from simplest to most thorough:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Apple Live Text (free, built in).</strong>{" "}
            Open the image-only PDF in Preview on Mac. Click and drag to
            select the area with text. If the text is clear enough, Live Text
            recognizes it and lets you copy it. Paste the copied text into a
            text editor, save as a new PDF, and import into LoudReader. This
            works for short documents but is tedious for a 300-page book.
          </li>
          <li>
            <strong className="text-gray-900">Adobe Acrobat Pro (paid).</strong>{" "}
            Open the PDF, go to Scan and OCR, then Recognize Text. Acrobat
            processes the entire document and adds a text layer behind each
            page image. The result works in any TTS app, including LoudReader.
          </li>
          <li>
            <strong className="text-gray-900">Tesseract OCR (free, open source).</strong>{" "}
            Tesseract is a command-line OCR engine. It requires some setup
            but produces good results for clear, well-lit scans. The command
            is something like{" "}
            <code className="text-sm bg-gray-100 px-1 rounded">tesseract scan.pdf output pdf</code>
            . The output is a new PDF with a text layer.
          </li>
        </ul>
        <p>
          After OCR, test the new PDF by selecting text. If text is
          selectable, import into{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          and press play. For more on the import workflow, see{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            listening to PDFs on iPhone
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How good will the reading sound after OCR?">
        <p>
          The voice quality is the same natural neural voice LoudReader always
          uses. But OCR accuracy varies a lot, and the errors become audible:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Clean scans produce clean audio.</strong>{" "}
            A well-lit, high-resolution scan of a modern printed book, run
            through good OCR software, might have 99% accuracy. One error per
            hundred words is barely noticeable when listening.
          </li>
          <li>
            <strong className="text-gray-900">Poor scans produce noisy audio.</strong>{" "}
            A faded, skewed, or low-resolution scan of an old paperback with
            tight margins produces OCR errors that the TTS voice reads as
            garbled text. &quot;cl&quot; becomes &quot;d&quot;, &quot;rn&quot;
            becomes &quot;m&quot;, and sentences containing these errors sound
            like a book full of typos. This is not a LoudReader limitation. It
            is an OCR limitation, and no TTS engine can fix bad input text.
          </li>
        </ul>
        <p>
          The honest advice: if you are scanning books for TTS listening,
          invest in a good scan first. Flatbed scanner, high resolution, good
          lighting, and OCR software with a preview step so you can correct
          common errors. A clean scan takes more time upfront but makes the
          difference between a listenable audiobook and a frustrating one.
        </p>
      </QuestionSection>

      <QuestionSection question="Where do I find PDFs that already have text layers?">
        <p>
          Most professionally produced PDFs from the last two decades include a
          text layer because it enables search, copy, and accessibility
          features. These sources reliably produce text-layer PDFs:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The Internet Archive.</strong>{" "}
            Millions of scanned public domain books with OCR text layers
            already applied. Download the PDF and test text selection. Most
            work with LoudReader.
          </li>
          <li>
            <strong className="text-gray-900">Google Books.</strong> Public
            domain books on Google Books are available as PDFs with text
            layers. The OCR quality is generally good.
          </li>
          <li>
            <strong className="text-gray-900">Academic databases.</strong>{" "}
            JSTOR, PubMed, and university repositories distribute PDFs with
            text layers. These are designed for text extraction and work
            reliably with TTS.
          </li>
          <li>
            <strong className="text-gray-900">Library scans.</strong> Many
            public and university libraries scan their collections with OCR
            enabled. The resulting PDFs are searchable and listenable.
          </li>
        </ul>
        <p>
          For books that are already in the public domain,{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            turning any book into an audiobook
          </Link>{" "}
          covers the full path from file to audio. The same principles apply to
          scanned PDFs with text layers.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear your scanned books read aloud"
        subline="Test for selectable text, import into LoudReader, and press play. Natural voices, offline, no account."
      />
    </ArticleLayout>
  );
}
