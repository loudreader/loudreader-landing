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

export default function TextToSpeechForLawyersArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Legal work means reading: briefs, contracts, filings, transcripts,
          and the 47-page attachment opposing counsel sent at 4:55 PM. A lot
          of that reading is not drafting, it is absorption. You need the
          substance, not the line-by-line edit. Text-to-speech lets you
          absorb documents by ear during the commute, between calls, or while
          your eyes rest. The catch for lawyers is confidentiality: most TTS
          tools send your text to a cloud server to process, which is a
          non-starter for client documents.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) is
          different. It runs fully on-device and private, your library never
          leaves your device. No account, no upload, no third party ever sees
          the text. Import a PDF brief, press play, and natural offline
          voices read it aloud while the file stays in your app sandbox.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="On-device means the document never leaves your phone. No cloud, no exposure."
      />

      <QuestionSection question="Why is on-device processing the only acceptable option for legal documents?">
        <p>
          Most text-to-speech apps work like this: you send text to a remote
          server, the server generates audio, and it streams back to your
          phone. The text you sent lived on someone else's machine, however
          briefly. For a novel, nobody cares. For a client's merger agreement
          or a sealed filing, that is a confidentiality problem that most
          firms would flag immediately.
        </p>
        <p>
          On-device TTS runs the entire process locally. The file stays in
          the app sandbox on your iPhone or Mac. The voice generation happens
          on your device's processor. No network call is made for speech. No
          account is created. Nothing is uploaded anywhere. This is the
          fundamental distinction we covered in{" "}
          <Link
            href="/blog/on-device-text-to-speech-explained"
            className="text-loudBlue hover:underline"
          >
            on-device text to speech explained
          </Link>
          , and for legal work it is the difference between a tool you can
          use and one you cannot.
        </p>
        <p>
          One honest note: you should still follow your firm's data-handling
          policies. On-device processing removes the cloud exposure, but it
          does not override your compliance obligations. What it does is
          remove the third-party problem that rules out most TTS apps for
          legal use.
        </p>
      </QuestionSection>

      <QuestionSection question="What kinds of documents are worth listening to?">
        <p>
          Some legal documents are pure audio gold. Others are not. Here is a
          practical taxonomy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              Opposing counsel's filings.
            </strong>{" "}
            You need the argument and the key cases. Listening at 1.3x during
            your commute gives you the shape of their position before you sit
            down with it.
          </li>
          <li>
            <strong className="text-gray-900">Contracts at the review stage.</strong>{" "}
            After you have seen the template, you are scanning for
            deviations. Audio catches surprising clauses that eyes sometimes
            gloss over.
          </li>
          <li>
            <strong className="text-gray-900">
              Witness statements and depositions.
            </strong>{" "}
            Narrative text reads naturally aloud. You will hear
            inconsistencies that look fine on the page.
          </li>
          <li>
            <strong className="text-gray-900">Long emails and memos.</strong>{" "}
            Save them as PDF, import, and listen while you walk to court.
          </li>
          <li>
            <strong className="text-gray-900">
              Dense statutory text with heavy citations.
            </strong>{" "}
            This is harder. Audio does not handle nested statutory references
            well. Save these for screen reading.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do you set up a confidential listening workflow?">
        <p>The whole setup takes two minutes and creates no external copies:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Download{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            on your iPhone or Mac. Free, no account. No signup screen.
          </li>
          <li>
            Import the document. On iPhone, share the PDF to LoudReader from
            Files, Mail, or your document management app. On Mac, use the
            file picker or drag and drop. The file copies into the app
            sandbox and never leaves.
          </li>
          <li>
            Press play. Lock the screen. Playback continues, and the lock
            screen shows play, pause, and 15-second skip controls.
          </li>
          <li>
            When you are done, the file stays in your LoudReader library.
            Delete it from the app when the matter closes. No cloud sync to
            worry about, no copies on a server you do not control.
          </li>
        </ol>
        <p>
          For the Mac workflow specifically, see{" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            read EPUB aloud on Mac
          </Link>
          , and for PDFs on iPhone,{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            listen to PDF on iPhone
          </Link>
          . The privacy model is the same on both platforms: local only.
        </p>
      </QuestionSection>

      <QuestionSection question="What if my firm uses document management software?">
        <p>
          Most DMS platforms let you export a PDF copy of a document. Export
          to your device, import into LoudReader, and listen. The exported
          PDF is a local copy that stays in the app sandbox. Delete it from
          the app when you are finished. This is the same handling you would
          give any local copy of a document, and on-device processing means
          the app itself does not introduce a new exposure point.
        </p>
        <p>
          For the broader privacy model, our guide to{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>{" "}
          walks through what on-device actually means and what it does not.
        </p>
      </QuestionSection>

      <QuestionSection question="Does listening to a brief actually work for comprehension?">
        <p>
          It depends on the brief and the task. For a first-pass read of the
          argument section, yes. You get the flow, the key cases, the rhetorical
          shape. For the section where you are going to write a response, you
          will want the text in front of you. Audio is a first pass, not a
          replacement for the close read.
        </p>
        <p>
          The speed setting matters here. Legal prose is dense, and 1.0x is a
          sensible starting point. In LoudReader, speed control from 0.3x to
          3.0x is a Premium feature; the free tier plays at normal speed. Many
          lawyers find 1.1x to 1.3x comfortable for familiar document types
          and 0.9x helpful for dense statutory language.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Review documents by ear, not by cloud"
        subline="On-device text-to-speech for lawyers. Import a brief, press play, and nothing leaves your phone. Free, no account."
      />
    </ArticleLayout>
  );
}
