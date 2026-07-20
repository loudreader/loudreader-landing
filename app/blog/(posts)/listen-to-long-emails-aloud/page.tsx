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

export default function ListenToLongEmailsAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Your mail app can save any email as a PDF. On Mac: File then Export
          as PDF. On iPhone: tap the reply button, find Print, pinch outward
          on the preview to open it as a PDF, then save or share to{" "}
          <strong>LoudReader</strong>. Import the PDF and press play. LoudReader
          reads the email aloud with natural offline voices, remembers your
          place, and works with the screen locked. It is fully on-device and
          private, your library never leaves your device. There is no mailbox
          integration and no account. For long emails, detailed threads, and
          email newsletters, this turns a screen-only task into something you
          can do while walking, commuting, or giving your eyes a rest.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Save the email as a PDF, import it, and listen. The email never touches a server."
      />

      <QuestionSection question="How do I listen to a long email without staring at the screen?">
        <p>
          Most people do not think of emails as something to listen to because
          most emails are short. But some emails are not: project briefs,
          detailed feedback, legal summaries, board updates, investor letters,
          and detailed technical explanations can run to several printed pages.
          Reading those on screen leads to skimming after the first few
          paragraphs.
        </p>
        <p>
          The export-and-import workflow takes about 15 seconds and you get a
          proper listening experience instead of a screen skim:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Export the email as PDF.</strong>{" "}
            On Mac, open the email in Apple Mail and go to File then Export as
            PDF. Save it somewhere you can find it. On iPhone, open the email,
            tap the reply arrow, scroll to Print, and pinch outward on the
            print preview thumbnail. This opens the email as a PDF. Tap the
            share button and save it to Files or share it directly to
            LoudReader.
          </li>
          <li>
            <strong className="text-gray-900">Import into LoudReader.</strong>{" "}
            Open{" "}
            <Link href="/" className="text-loudBlue hover:underline">
              LoudReader
            </Link>{" "}
            on your iPhone or Mac, tap the import button, find the PDF, and
            press play. The app reads from the top of the email (including the
            subject line and sender) through the body text.
          </li>
        </ol>
        <p>
          This manual workflow is a reasonable tradeoff for emails you
          genuinely want to absorb, especially when the alternative is
          half-reading them on screen and missing details.
        </p>
      </QuestionSection>

      <QuestionSection question="Is this safe for confidential or work emails?">
        <p>
          Yes, and the safety is worth understanding in detail because it is
          one of the few areas where a manual workflow outclasses a cloud-based
          one.
        </p>
        <p>
          When you save an email as a PDF on your device, the operation is
          local. The PDF is a file on your disk with whatever encryption your
          device uses. When you import it into LoudReader, the file stays on
          your device. LoudReader is fully on-device and private, your library
          never leaves your device. There is no account, no cloud sync, no
          analytics, and no text uploaded to a server for processing. The voice
          generation runs on your device&apos;s neural engine.
        </p>
        <p>
          Compare this to forwarding a confidential email to a cloud
          text-to-speech service. That email passes through your mail server,
          the service&apos;s ingestion pipeline, and their text extraction
          layer. They may log it, train on it, or retain it. The manual PDF
          route skips all of that. For professionals reading legal documents,
          HR communications, financial reports, or anything covered by an NDA,
          the manual route is the only route that preserves confidentiality.
        </p>
        <p>
          For more on the privacy model, see{" "}
          <Link
            href="/blog/listen-to-confidential-documents"
            className="text-loudBlue hover:underline"
          >
            listening to confidential documents
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How well does TTS handle email formatting?">
        <p>
          Emails are messier than books. The TTS engine reads what is in the
          PDF in document order, and emails have a lot of non-prose content.
          Here is what to expect:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Headers.</strong> The subject
            line, sender name, date, and recipient appear at the top of the
            PDF and get read first. This is actually useful because it tells
            you which email you are listening to.
          </li>
          <li>
            <strong className="text-gray-900">Threaded replies.</strong> If
            you export an entire thread, quoted replies appear as indented text
            with the sender&apos;s name and a timestamp prefix. The voice
            reads through them in order. There is no audio cue for &quot;now
            a different person is talking,&quot; which can get confusing in a
            long thread with multiple participants. Listen to threads in
            chronological order (oldest first) rather than reverse
            chronological.
          </li>
          <li>
            <strong className="text-gray-900">Signatures and disclaimers.</strong>{" "}
            Email signatures (name, title, phone, company boilerplate) and
            legal disclaimers get read as part of the email body. They sound
            like noise appended to every message. If you are exporting a batch
            of emails, consider trimming the PDF in Preview before importing
            to remove repeated signature blocks.
          </li>
          <li>
            <strong className="text-gray-900">Inline images.</strong>{" "}
            Images in the email body appear in the PDF but produce no audio.
            Alt text and captions get read if the sender included them.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What about email newsletters?">
        <p>
          Email newsletters are the best fit for this workflow because they
          are essentially long articles delivered by email. Save the newsletter
          as a PDF and import it into LoudReader, and you are listening to a
          long-form article with natural voices. The same privacy advantages
          apply: the newsletter PDF stays on your device, and no third party
          knows you opened it or how much of it you listened to.
        </p>
        <p>
          This works alongside the web-based export approach described in other
          guides. Some newsletters are easier to open in a browser and export
          from Safari Reader. Others are easier to save directly as a PDF from
          your mail app. The result is the same: a PDF in LoudReader that reads
          aloud. For more on the privacy side of text-to-speech, see{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text-to-speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen to long emails instead of skimming them"
        subline="Save any email as a PDF, import into LoudReader, and absorb every word. Private, offline, no account."
      />
    </ArticleLayout>
  );
}
