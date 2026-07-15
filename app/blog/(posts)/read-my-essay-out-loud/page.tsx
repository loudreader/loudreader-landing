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

export default function ReadMyEssayOutLoudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If you just need your essay read out loud once, your computer can
          already do it. macOS reads selected text aloud, and Word has a
          Read Aloud button. But if you want to hear your essay so you can{" "}
          <strong>edit it</strong>, use a reader built for a listening pass.
          Export the essay to PDF, open it in{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps), and press
          play. It reads with natural offline voices, highlights each word as
          it speaks, and lets you pause, fix, and reread a paragraph as many
          times as you need. There's no paste box and no length limit (the
          free tier is unlimited listening with no word quota), and it's
          fully on-device and private, your library never leaves your
          device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Your essay, read back exactly as written, mistakes included."
      />

      <QuestionSection question="What is the fastest way to have your essay read out loud?">
        <p>
          The honest answer: for a quick one-shot pass, you don't need a new
          app at all. Every option below reads text out loud today:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Built into your system.</strong>{" "}
            macOS can speak any selected text (Spoken Content in System
            Settings), and Microsoft Word has a Read Aloud command on the
            Review tab. Free, already installed, fine for a paragraph.
          </li>
          <li>
            <strong className="text-gray-900">Web essay readers.</strong>{" "}
            Paste-a-box websites read whatever you paste. They work, but
            they're built for a single pass: many free web readers cap how much
            text you can paste or listen to per day, the voices are often
            robotic, and your essay is sent to someone else&apos;s server.
          </li>
          <li>
            <strong className="text-gray-900">A dedicated reader.</strong>{" "}
            An app like{" "}
            <Link href="/" className="text-loudBlue hover:underline">
              LoudReader
            </Link>{" "}
            treats your essay like a document you're working on, not a string
            you pasted: it keeps your place, highlights each word as it reads,
            and never sends the text anywhere.
          </li>
        </ul>
        <p>
          The first two answer &ldquo;read my essay out loud.&rdquo; The third
          answers the question you're actually asking, which is usually
          &ldquo;help me hear what's wrong with it.&rdquo;
        </p>
      </QuestionSection>

      <QuestionSection question="Why does a proper listening pass beat a web essay reader?">
        <p>
          Editing by ear is a loop, not a single playback: listen, wince,
          pause, fix, reread the sentence, continue. A paste box breaks that
          loop in three ways.
        </p>
        <p>
          <strong className="text-gray-900">Length.</strong> Paste limits
          punish exactly the essays that need a listening pass most, the long
          ones. LoudReader&apos;s free tier has no word quota: a whole thesis
          chapter is unlimited listening, the same as a paragraph.
        </p>
        <p>
          <strong className="text-gray-900">The edit loop.</strong> When you
          fix a sentence in a web reader, you re-paste and start over.
          LoudReader keeps your position, so you can jump back a sentence,
          hear the fix in context, and move on.
        </p>
        <p>
          <strong className="text-gray-900">Privacy.</strong> A college
          application essay or a personal statement is personal by definition.
          LoudReader is fully on-device and private, your library never
          leaves your device. No account, no upload. It reads your essay in
          the library, on a plane, anywhere, offline.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to your essay in LoudReader?">
        <p>
          One honest constraint up front: LoudReader reads EPUB and PDF files,
          not .docx, so the first step is a ten-second export.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Export your essay to PDF.</strong>{" "}
            In Google Docs: File &rarr; Download &rarr; PDF. In Word: File
            &rarr; Save As and choose PDF. In Pages: File &rarr; Export To
            &rarr; PDF.
          </li>
          <li>
            <strong className="text-gray-900">Import it.</strong> Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            (free, no account), then open the PDF. On the Mac use the import
            button, on iPhone use the Files app or the share sheet.
          </li>
          <li>
            <strong className="text-gray-900">Press play and follow along.</strong>{" "}
            LoudReader highlights each word as it reads, so when something
            sounds wrong your eyes are already on it. Pause, note the fix (or
            switch to your editor and make it), then resume.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What should you listen for while it reads?">
        <p>
          A text-to-speech voice has one great editorial virtue: it reads
          exactly what's on the page, with none of the goodwill your own eyes
          extend to your own writing. Listen for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Missing and doubled words</strong>:
            an absent &ldquo;not&rdquo; or a &ldquo;the the&rdquo; is nearly
            invisible on screen and unmissable out loud.
          </li>
          <li>
            <strong className="text-gray-900">Run-on sentences</strong>: if
            the voice goes on uncomfortably long without a pause, so will your
            reader&apos;s breath.
          </li>
          <li>
            <strong className="text-gray-900">Clunky rhythm and echoes</strong>:
            the same word twice in two sentences, three sentences in a row
            with identical shape.
          </li>
          <li>
            <strong className="text-gray-900">Arguments that skip a step</strong>:
            transitions that read fine but sound abrupt.
          </li>
        </ul>
        <p>
          Why your eyes miss these in the first place is its own story. Your
          brain reads what it meant to write, not what it wrote. We cover the
          psychology in{" "}
          <Link
            href="/blog/catch-typos-in-your-own-writing"
            className="text-loudBlue hover:underline"
          >
            why you miss typos in your own writing
          </Link>
          , and the full technique, aimed at manuscripts rather than essays,
          in{" "}
          <Link
            href="/blog/proofread-by-listening"
            className="text-loudBlue hover:underline"
          >
            proofread by listening
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Can you edit by ear on both Mac and iPhone?">
        <p>
          Yes, LoudReader ships as native Mac and iPhone apps, and the split
          works well for essays: write at the desk on the Mac, then do the
          listening pass on the iPhone with headphones, away from the
          keyboard, where you can't fiddle-edit mid-sentence. One honest
          note: there's no cloud between the devices, and that's the point of
          the privacy model, so AirDrop the PDF to the device where you want
          to listen and import it there. Either way the narration is generated
          locally with natural offline voices, so the listening pass works
          anywhere your library card does.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear your essay the way a reader will"
        subline="Export to PDF, press play, edit by ear. Free, on-device, no word limits."
      />
    </ArticleLayout>
  );
}
