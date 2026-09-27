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

export default function ListenToConfidentialDocumentsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          To listen to a confidential document, first establish whether you
          may copy it into a reading app on that device. Then choose a
          workflow that fits those rules: local speech generation can avoid
          uploading text for narration, but device backups, diagnostic
          services and audible playback still matter. In LoudReader, imports,
          PDF text recognition and speech processing happen locally. The app
          also sends usage analytics and crash/performance diagnostics, so it
          is not a zero-network tool. Start with a non-sensitive sample,
          check the extracted text, use headphones, and remove working copies
          when your organisation&apos;s retention rules allow it.
        </p>
      </Tldr>

      <ArticleIllustration variant="offline" caption="A confidential listening workflow includes the file, the device and the room." />

      <QuestionSection question="What should you establish before importing anything?">
        <p>
          A document being available to read does not necessarily mean you
          can copy it into another app or onto a personal phone. Use an
          approved device and check the rules for the particular information.
          If the file must remain in a managed document system, use that
          system&apos;s approved reading or accessibility tools.
        </p>
        <p>
          For a cloud voice, ask whether transmitting the relevant text is
          permitted and whether the provider&apos;s retention and access
          terms fit. For a local voice, ask where imports, extracted text,
          audio caches and backups live. Neither label makes the whole
          decision for you, and this article does not certify a tool for a
          professional or regulated use.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you prepare a document for local listening?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Try a harmless sample first.</strong> Install and open the
            app, select the voice and test a document with a similar layout.
            For offline use, repeat that test with connectivity disabled.
          </li>
          <li>
            <strong>Import an authorised copy.</strong> LoudReader accepts
            DRM-free EPUB and PDF files. Its library is local; selecting a
            file from iCloud Drive can still require downloading the source
            file from Apple first.
          </li>
          <li>
            <strong>Check reading order.</strong> Compare the beginning,
            headings and a few later paragraphs with the original. Tables,
            columns, footnotes and scanned numbers need particular attention.
            Listening should not replace checking the original wording where
            the exact value or qualification matters.
          </li>
          <li>
            <strong>Listen somewhere appropriate.</strong> Use headphones,
            check the selected audio output and avoid leaving the document
            visible on an unlocked screen. A private processing path does not
            prevent someone nearby hearing a speaker.
          </li>
          <li>
            <strong>Manage the working copies.</strong> Delete the item from
            the reading library when appropriate and check for an original
            in Files, email attachments or your document system. Removing one
            app copy is not a secure-erasure guarantee for every copy or backup.
          </li>
        </ol>
        <p>
          The <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening guide</Link>
          {" "}covers the basic import flow. LoudReader runs on iPhone and iPad,
          and on compatible Apple Silicon Macs as an iPad app.
        </p>
      </QuestionSection>

      <QuestionSection question="Can LoudReader read a scanned confidential PDF?">
        <p>
          Version 1.12 includes on-device text recognition for image-based
          PDFs. It can attempt OCR when an imported PDF contains little
          extractable text; there is no need to upload a scan solely for this
          step. Recognition can still miss words or scramble complex layouts,
          and the import processes at most 300 OCR pages. Check any partial
          import warning and compare the resulting text with the original.
        </p>
        <p>
          If a scan needs cleanup or another OCR tool, evaluate that tool&apos;s
          processing and storage separately. A local narration app cannot
          change where an earlier conversion took place.
        </p>
      </QuestionSection>

      <QuestionSection question="What does local speech leave out of the privacy picture?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>
          {" "}does not upload a book to a speech service for narration. Its
          release 1.12 also uses TelemetryDeck for usage statistics and Sentry
          for crash/performance diagnostics, with analytics enabled by default
          and no exposed Settings switch. These reports are designed to
          exclude reading text; this source-level review is not an independent
          audit of every network payload. Read the{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">privacy disclosure</Link>
          {" "}before deciding whether the app fits your requirements.
        </p>
        <p>
          An airplane-mode check tells you whether your prepared workflow
          works offline. It does not reveal earlier uploads, future queued
          requests or what a system backup contains. For a broader evaluation,
          see <Link href="/blog/are-text-to-speech-apps-safe" className="text-loudBlue hover:underline">the TTS privacy checklist</Link>.
          If your requirement is an approved environment with no external
          diagnostics, do not infer that approval from the phrase
          &ldquo;on-device.&rdquo;
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Evaluate local narration with a sample document" subline="Check your document rules, extracted text and privacy requirements before importing sensitive material." />
    </ArticleLayout>
  );
}
