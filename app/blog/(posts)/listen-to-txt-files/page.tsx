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

export default function ListenToTxtFilesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A .txt file is the simplest document format there is, and getting it
          read aloud takes one extra step. <strong>LoudReader</strong> reads
          EPUB and PDF files, so the workflow is: open your .txt file in any
          text editor, export it as a PDF, and import that PDF into LoudReader
          on your iPhone or Mac. That is it. The app reads the text with
          natural offline voices, remembers your place, and needs no account.
          It is fully on-device and private, your library never leaves your
          device. This is useful for proofreading drafts, reviewing notes,
          listening to long logs, or turning any plain-text document into audio
          for hands-free listening.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Plain text is the most straightforward format. Export it as a PDF and press play."
      />

      <QuestionSection question="Why would anyone need text-to-speech for .txt files?">
        <p>
          Plain text turns up more often than you might think, and in contexts
          where eyes-free listening is genuinely useful:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Writers proofreading drafts.</strong>{" "}
            Hearing a chapter read back catches errors that silent reading
            misses. Awkward sentences, repeated words, and dead rhythm become
            obvious when spoken.
          </li>
          <li>
            <strong className="text-gray-900">Reading logs and transcripts.</strong>{" "}
            Server logs, meeting notes, interview transcripts, and data exports
            often arrive as .txt. Listening while glancing at the file helps
            spot patterns you would miss scrolling.
          </li>
          <li>
            <strong className="text-gray-900">Legacy documents and old ebooks.</strong>{" "}
            Project Gutenberg and older ebook collections include .txt
            versions. These are DRM-free by definition and convert in seconds.
          </li>
          <li>
            <strong className="text-gray-900">Private notes and journals.</strong>{" "}
            If you keep a plain-text journal or note system, you can listen
            back to entries during a commute or walk.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do I export a .txt as a PDF?">
        <p>
          On Mac, open the .txt in TextEdit (the built-in app). Go to File,
          then Export as PDF. Pick a name, save it, and the file is ready. On
          iPhone, you can open the .txt in Notes, tap the share button, and
          choose Print. Pinch outward on the print preview to open it as a PDF,
          then save it to Files or share it directly to LoudReader.
        </p>
        <p>
          The whole process takes about ten seconds once you have done it once.
          After that, importing into{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          is a single tap: open the app, tap the import button, find your PDF,
          and press play. The full import walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Does text-to-speech work well with unformatted text?">
        <p>
          It works better than you might expect, precisely because the text is
          unformatted. There are no columns, tables, or layout quirks for the
          speech engine to trip over. LoudReader reads the text in the order it
          appears, line by line, and pauses at paragraph breaks. The voices
          handle plain prose naturally. Lists, code snippets, and other
          non-prose text still get read, but they sound like lists and code,
          which is fine for review but not great for long-form listening.
        </p>
        <p>
          One practical tip: if your .txt file uses hard line breaks at 80
          columns (common in older files), the speech will pause slightly at
          each break. You can avoid this by removing the hard wraps in a text
          editor before exporting. Most modern editors have a reflow or unwrap
          command that makes the text a single continuous paragraph.
        </p>
      </QuestionSection>

      <QuestionSection question="Can this workflow work for proofreading?">
        <p>
          Yes, and it is where plain-text read-aloud shines. Writing errors
          fall into two categories: errors your eyes catch (misspelled words,
          missing punctuation) and errors your ears catch (clunky rhythm,
          repeated phrases, sentences that are grammatically correct but sound
          unnatural). Proofreading by listening catches the second category,
          which is the one that makes prose feel rough.
        </p>
        <p>
          If you write in any app that can export plain text, the workflow is
          frictionless: write your draft, export as .txt, convert to PDF, and
          listen. You will hear problems you did not know were there. For more
          on this, see{" "}
          <Link
            href="/blog/proofread-by-listening"
            className="text-loudBlue hover:underline"
          >
            how to proofread by listening
          </Link>
          .
        </p>
        <p>
          You can also listen to other formats this way. If you write in a
          richer format and want a stripped-down read-aloud,{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            listening to PDFs on iPhone
          </Link>{" "}
          covers the import side in detail.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear your text read back to you"
        subline="Export any .txt as a PDF, import into LoudReader, and press play. Natural voices, offline, no account."
      />
    </ArticleLayout>
  );
}
