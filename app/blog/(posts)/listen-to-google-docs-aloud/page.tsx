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

export default function ListenToGoogleDocsAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Google Docs does not have a built-in read-aloud button with a natural
          voice, so you need an export step. Go to File, Download, and pick PDF
          or EPUB. Then open that file in <strong>LoudReader</strong> on your
          iPhone or Mac, press play, and the doc is read to you with natural
          offline voices. There is no live Google Docs integration. LoudReader
          does not connect to your Google account and does not sync with the
          doc while you edit. It is fully on-device and private, your library
          never leaves your device. This workflow is especially useful for
          proofreading, where hearing your text catches problems your eyes skip
          over, and for reviewing long documents without staring at a screen.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Export your doc as a file, then press play. No browser tab stays open."
      />

      <QuestionSection question="Why doesn't Google Docs just have a read-aloud button?">
        <p>
          It sort of does, but not the kind most people want. Google Docs works
          with screen readers like ChromeVox for accessibility. That is a
          robotic voice designed to let visually impaired users navigate and
          operate the entire browser interface. It can read your document
          aloud, but it reads everything else too, and the voice is functional
          rather than pleasant.
        </p>
        <p>
          For people who just want to hear their document read back in a
          natural-sounding voice, the screen reader route is not a good answer.
          Google has tested text-to-speech features internally and even demoed
          them, but as of mid-2026 there is no built-in &quot;read this page
          aloud&quot; button like the one Safari and Edge have for web pages.
          The export-and-import path with a dedicated reader is the clean
          option.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I export a Google Doc and listen to it?">
        <p>
          The export side happens in your browser. The listening side happens
          in LoudReader. Here is the full workflow:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open your Google Doc in a browser. Go to <strong>File</strong> then{" "}
            <strong>Download</strong>.
          </li>
          <li>
            Pick <strong>EPUB Publication (.epub)</strong> if available. EPUB
            preserves the document structure (headings, paragraphs) better than
            PDF. If EPUB is not an option, pick{" "}
            <strong>PDF Document (.pdf)</strong>. Both work.
          </li>
          <li>
            The file downloads to your computer. Send it to your iPhone via
            AirDrop, iCloud Drive, email, or any file transfer method you
            already use.
          </li>
          <li>
            On your iPhone or Mac, open the file in{" "}
            <Link href="/" className="text-loudBlue hover:underline">
              LoudReader
            </Link>
            . Tap the import button, find the file, and it loads.
          </li>
          <li>Press play. The app reads the doc aloud from beginning to end.</li>
        </ol>
        <p>
          Once imported,{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            LoudReader reads PDFs on iPhone
          </Link>{" "}
          the same way it reads books. No account, no subscription required for
          the free tier.
        </p>
      </QuestionSection>

      <QuestionSection question="Why listen to a Google Doc instead of reading it on screen?">
        <p>
          Three reasons that cover most real use cases:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Proofreading.</strong> Your brain
            autocorrects errors when you read silently. It fills in missing
            words, smooths awkward sentences, and skips duplicated phrases.
            Hearing the text read aloud by a different voice bypasses that
            autocorrect. You hear the actual words on the page, not the words
            you meant to write. This is why{" "}
            <Link
              href="/blog/proofread-by-listening"
              className="text-loudBlue hover:underline"
            >
              proofreading by listening
            </Link>{" "}
            catches errors that survive multiple silent passes.
          </li>
          <li>
            <strong className="text-gray-900">Long-document review.</strong>{" "}
            Reading a 40-page report or contract on screen leads to skimming
            after about page three. Listening forces you to hear every
            sentence. You can do it while taking a walk or doing dishes, and
            you can take notes on paper as you go.
          </li>
          <li>
            <strong className="text-gray-900">Eye strain.</strong>{" "}
            If you already spend all day on a screen, adding another hour of
            document review at night is genuinely uncomfortable. Listening
            gives your eyes a break. The app remembers your place, so you can
            stop and resume without hunting for where you were.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What are the limits of this workflow?">
        <p>
          The honest list, not the marketing list:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">No live sync.</strong> If you
            edit the Google Doc after exporting, the changes do not appear in
            LoudReader. You must re-export and re-import. For proofreading
            sessions, just export once at the start and make edits in the
            original doc as you listen.
          </li>
          <li>
            <strong className="text-gray-900">Comments and suggestions are invisible.</strong>{" "}
            LoudReader reads the document text, not the Google Docs comment
            sidebar or suggested edit markup. Exporting to PDF usually strips
            these, and EPUB definitely strips them. If you need feedback on
            comments, read those on screen first.
          </li>
          <li>
            <strong className="text-gray-900">Tables can sound messy.</strong>{" "}
            A table in a Google Doc exports to PDF or EPUB as text in reading
            order, which rarely matches how a human would scan a table. The
            speech engine reads cell by cell in order, and the result sounds
            unnatural. For table-heavy documents, listen to the prose
            sections and review tables on screen.
          </li>
          <li>
            <strong className="text-gray-900">No images or charts.</strong>{" "}
            LoudReader reads text, full stop. An image-heavy doc exports fine
            but the images themselves produce no audio. Captions get read,
            which helps.
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear your Google Docs out loud"
        subline="Export as EPUB or PDF, import into LoudReader, and press play. Proofread, review, or listen hands-free."
      />
    </ArticleLayout>
  );
}
