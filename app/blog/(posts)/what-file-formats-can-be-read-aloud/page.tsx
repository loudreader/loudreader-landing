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

export default function WhatFileFormatsCanBeReadAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> reads EPUB and PDF files directly: import
          one and press play, no conversion needed. Plain text (.txt) and
          Markdown (.md) files need one extra step, export them to PDF from
          any text editor or Markdown tool first, then import that PDF. MOBI
          files work the same way through EPUB, but only if they&apos;re
          DRM-free; a MOBI bought from the Kindle Store is locked and no app
          can open it. Scanned PDFs only work if the scan has a text layer
          underneath the image. An image-only scan produces no audio at all,
          because LoudReader has no OCR built in. EPUB and PDF cover the vast
          majority of what people actually try to import, and everything else
          on this list is a two-minute workaround, not a dead end.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="EPUB and PDF go straight in. Everything else takes one extra step."
      />

      <QuestionSection question="Which formats work without any conversion?">
        <p>
          Two: <strong className="text-gray-900">EPUB</strong> and{" "}
          <strong className="text-gray-900">PDF</strong>. Import either one
          through the Share sheet, Files app, or the built-in file picker, and
          LoudReader starts reading. EPUB carries real chapter structure, so
          the chapter list and your reading position line up cleanly with the
          book. PDF works too, and the app converts it internally so it
          behaves like an EPUB once it&apos;s in your library. For a straight
          page-laid-out document that&apos;s the smoothest path; a PDF with a
          dense multi-column academic layout can occasionally read out of
          visual order, because the app follows the text order baked into the
          file, not the order your eye would take across columns.
        </p>
        <p>
          The app also ships with <strong>70,000+ Project Gutenberg</strong>{" "}
          books built in, already in a format that just works, if you want to
          test the whole thing out before importing your own files.
        </p>
      </QuestionSection>

      <QuestionSection question="What about plain text and Markdown files?">
        <p>
          Neither is a format LoudReader opens directly. The fix is the same
          for both, and it takes about a minute: open the file in a tool that
          can export a PDF (TextEdit or Notes for .txt, a Markdown renderer
          like Pandoc, Marked, iA Writer, or Obsidian for .md), export it,
          then import that PDF into LoudReader. For .txt the exported PDF is
          just the words in a plain font, nothing lost. For Markdown, exporting
          first means you hear the rendered content, headings and lists read
          naturally, instead of the raw hash marks and asterisks. We walk
          through both conversions step by step in{" "}
          <Link
            href="/blog/listen-to-txt-files"
            className="text-loudBlue hover:underline"
          >
            listening to .txt files
          </Link>{" "}
          and{" "}
          <Link
            href="/blog/listen-to-markdown-files"
            className="text-loudBlue hover:underline"
          >
            listening to Markdown files
          </Link>
          . This is exactly the workflow a lot of writers use to proofread a
          draft by ear before sending it anywhere.
        </p>
      </QuestionSection>

      <QuestionSection question="Does it read MOBI files from a Kindle?">
        <p>
          Only through a conversion, and only if the file is DRM-free. MOBI
          isn&apos;t a supported import format, so the path is: convert the
          MOBI to EPUB with Calibre, a free and open-source tool, then import
          the resulting EPUB. That works cleanly for DRM-free MOBI files, the
          kind you get from publishers who sell ebooks without DRM, or from
          public-domain sources. It does not work for anything bought on the
          Kindle Store, because those files are DRM-locked to Amazon&apos;s
          own apps and devices, and LoudReader has no DRM circumvention
          anywhere in it, by design. The full breakdown of what converts and
          what doesn&apos;t is in{" "}
          <Link
            href="/blog/listen-to-mobi-files"
            className="text-loudBlue hover:underline"
          >
            listening to MOBI files
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Why doesn't it read my scanned PDF?">
        <p>
          Because a scan is a picture of a page. Somewhere behind that image
          there might be an invisible layer of selectable text, if the
          scanning software ran OCR (optical character recognition) when the
          PDF was created. LoudReader reads that text layer when it exists.
          When it doesn&apos;t, an image-only scan, LoudReader has nothing to
          read: there&apos;s no OCR built into the app, so the file imports
          fine but plays silence. To check, open the PDF in any reader and
          try to select a word. If you can highlight text, LoudReader can
          read it. If the cursor just draws a selection box over a picture,
          it can&apos;t, and you&apos;d need to run the file through Apple&apos;s
          built-in Live Text or a dedicated OCR tool first. More on this in{" "}
          <Link
            href="/blog/listen-to-scanned-pdf-books"
            className="text-loudBlue hover:underline"
          >
            listening to scanned PDF books
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What's the practical takeaway?">
        <p>
          EPUB and PDF are the formats to reach for whenever you have a
          choice, and together they cover almost everything people actually
          try to import: books, manuscripts, PDFs from research databases,
          articles saved as PDF, self-published files. Everything else on this
          list, .txt, Markdown, DRM-free MOBI, still gets you to an EPUB or
          PDF with one conversion step. The only real dead end is a
          DRM-locked file or an image-only scan with no text layer, and
          LoudReader is upfront about both rather than pretending to handle
          them. Once the file is in a format the app can read, everything else
          works the same: import it, press play, and it reads aloud with{" "}
          {" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            natural offline voices
          </Link>
          , fully on-device and private, your library never leaves your
          device.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Import your file and hear how it sounds"
        subline="EPUB and PDF work instantly. Free, on-device, no account."
      />
      <p className="text-sm text-gray-500">
        Get it from the{" "}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-loudBlue hover:underline"
        >
          App Store
        </a>
        .
      </p>
    </ArticleLayout>
  );
}
