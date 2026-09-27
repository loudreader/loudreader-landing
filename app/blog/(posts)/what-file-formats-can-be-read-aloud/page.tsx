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

export default function WhatFileFormatsCanBeReadAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader&apos;s file importer accepts DRM-free EPUB and PDF. PDFs can
          include scanned pages: the app has on-device text recognition, with
          limits on when it runs and how many image pages it processes. TXT,
          Markdown, Word documents and MOBI files need conversion to a supported
          format before file import. Web article links use a separate saving
          workflow. If you can choose an edition, start with a well-structured
          EPUB for a book or a text-based PDF for a document. A filename extension
          tells you the container; readable text, sensible structure and access
          restrictions determine whether it will be a useful listening copy.
        </p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Choose EPUB or PDF for file import, then check what the conversion actually preserved." />

      <QuestionSection question="Which file formats can I import directly?">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="pb-3 text-left text-gray-600">LoudReader file import, checked against release 1.12</caption>
            <thead><tr><th className="p-3">Source</th><th className="p-3">Route</th><th className="p-3">Check before listening</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3">DRM-free EPUB</td><td className="p-3">Import directly</td><td className="p-3">Chapters, reading order and any image-only content</td></tr>
              <tr className="border-t"><td className="p-3">PDF with text</td><td className="p-3">Import directly</td><td className="p-3">Columns, footnotes and missing or repeated passages</td></tr>
              <tr className="border-t"><td className="p-3">Image-based PDF</td><td className="p-3">Import; local OCR may run</td><td className="p-3">Import notices, recognition errors and incomplete pages</td></tr>
              <tr className="border-t"><td className="p-3">TXT, Markdown, DOCX</td><td className="p-3">Export or convert to EPUB/PDF first</td><td className="p-3">Line breaks, headings and exported review markup</td></tr>
              <tr className="border-t"><td className="p-3">DRM-free MOBI</td><td className="p-3">Convert to EPUB first</td><td className="p-3">Conversion quality and chapter navigation</td></tr>
              <tr className="border-t"><td className="p-3">DRM-protected ebook</td><td className="p-3">Not a supported import</td><td className="p-3">Look for an authorised DRM-free edition or use its supported reading app</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          PDF import produces a reading copy internally. That does not promise an
          exact spoken version of the page layout: a diagram or a table can be
          visible in the source while its relationships are difficult to express
          as continuous narration. Keep the original for reference. Password-locked
          PDFs need an unlocked copy you are authorised to use.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I do with TXT, Markdown or Word documents?">
        <p>
          Export a clean reading copy from the application that understands the
          source. A plain-text editor can produce a PDF; a Markdown editor can
          render headings and lists before export; Word can save a PDF. For a
          book-length manuscript, a well-made EPUB may preserve navigation more
          usefully than page breaks. None of these steps requires renaming an
          extension: changing “.docx” to “.pdf” does not convert the document.
        </p>
        <p>
          Read the relevant walkthrough for{" "}{" "}
          <Link href="/blog/listen-to-txt-files" className="text-loudBlue hover:underline">TXT</Link>,{" "}{" "}
          <Link href="/blog/listen-to-markdown-files" className="text-loudBlue hover:underline">Markdown</Link>{" "}
          or <Link href="/blog/listen-to-word-document" className="text-loudBlue hover:underline">Word documents</Link>.
          Keep the editable source. If you revise it later, export a new listening
          copy; importing a PDF does not connect it to the original editor.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I convert MOBI or other ebook formats?">
        <p>
          For a DRM-free file,{" "}{" "}
          <a href="https://manual.calibre-ebook.com/faq.html#what-formats-does-calibre-support-conversion-to-from" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">calibre&apos;s official format list</a>{" "}
          includes MOBI input and EPUB output. Add the source, convert a copy to
          EPUB and inspect the chapters before importing it into LoudReader.
          Conversion quality depends on the source; it cannot recreate structural
          information that was never there.
        </p>
        <p>
          Do not assume every Kindle purchase has the same download format or
          protection. What matters here is whether you have an accessible,
          DRM-free file supported by the converter. LoudReader does not remove
          DRM or open a purchased title simply because it appears in another
          app&apos;s library. The <Link href="/blog/listen-to-mobi-files" className="text-loudBlue hover:underline">MOBI guide</Link>{" "}
          covers the conversion workflow.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens with a scanned PDF?">
        <p>
          LoudReader can recognise text on-device when at least half the pages
          lack text, or the total extracted text is very small. It attempts up
          to 300 image pages per import and reports partial or unreadable results.
          A mostly searchable document with a few image-only inserts may not
          trigger recognition, so compare those pages with the imported copy.
        </p>
        <p>
          Faint scans, unusual typefaces and complicated layouts need closer
          checking. If an existing text layer is badly recognised, importing it
          does not guarantee those words will be corrected. Our{" "}{" "}
          <Link href="/blog/listen-to-scanned-pdf-books" className="text-loudBlue hover:underline">scanned-book guide</Link>{" "}
          explains when external OCR or a cleaner edition is worth the effort.
        </p>
      </QuestionSection>

      <QuestionSection question="Are web pages and photographs also file imports?">
        <p>
          They use different workflows. LoudReader can save supported web articles
          from links, which requires downloading the page. It also includes
          camera-based scanning on supported devices, with local recognition.
          These features do not mean the file picker accepts arbitrary HTML,
          JPEG, TXT or Word files. Use the import route intended for the source.
        </p>
        <p>
          Once a book is imported and the desired voice is available, narration
          runs locally. Downloads, purchases and diagnostics are separate network
          activities; local speech does not make an online source available
          without first fetching it.
        </p>
      </QuestionSection>

      <QuestionSection question="Which format should I choose if several are available?">
        <p>
          Prefer a clean EPUB for continuous prose with chapters. Prefer a text
          PDF when the document is supplied that way and you need its page layout
          as a visual reference. Use a scan when it is the best available source,
          accepting the recognition checks it needs. In each case, test a short
          passage with a heading and a page or chapter boundary before committing
          to a long listen. Our <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF import guide</Link>{" "}
          is the next step if you already have your file ready.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Start with a file you already have" subline="Import a DRM-free EPUB or PDF and check a short passage before the full book." />
    </ArticleLayout>
  );
}
