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

export default function ListenToWordDocumentArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          There are two good ways to listen to a Word document. For a quick
          pass while you edit, use Word&apos;s built-in feature: select{" "}
          <strong>Review &rarr; Read Aloud</strong> and it reads from your
          cursor. It&apos;s free, already installed, and perfectly adequate for
          a paragraph or two. For real listening, like a report on a walk or a
          manuscript over a weekend, export the document to PDF (File &rarr;
          Save As &rarr; PDF, about ten seconds) and open it in{" "}
          <strong>LoudReader</strong>, which reads it with natural offline
          voices on native Mac and iPhone apps, highlights each word as it
          speaks, and is fully on-device and private, your library never
          leaves your device. One honest note. LoudReader doesn&apos;t import
          .docx directly, so the PDF export <em>is</em> the workaround, and
          this article walks through it.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="One quick export turns a .docx into something you can genuinely listen to."
      />

      <QuestionSection question="Does Word have a built-in read-aloud feature?">
        <p>
          Yes, and credit where due: it is good at what it is for. On the{" "}
          <strong className="text-gray-900">Review tab</strong>, the{" "}
          <strong className="text-gray-900">Read Aloud</strong> command reads
          the document from wherever your cursor sits, with play, pause, and
          skip-a-paragraph controls and a reading-speed slider.{" "}
          <a
            href="https://support.microsoft.com/en-us/office/listen-to-your-word-documents-5a2de7f3-1ef4-4795-b24e-64fc2731b001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Microsoft&apos;s documentation
          </a>{" "}
          lists it as available in Office 2019, Office 2021, and Microsoft
          365, across Windows, Mac, the web, and the mobile apps. If you are
          mid-edit and want to hear the paragraph you just rewrote, nothing
          beats a button that is already in the ribbon.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does Word's Read Aloud fall short?">
        <p>
          The limits show up the moment listening stops being a proofing step
          and starts being <em>reading</em>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Voices.</strong> Per
            Microsoft&apos;s docs, Read Aloud uses device-built or Microsoft
            service voices. The natural-sounding ones generally depend on a
            connection, and what you get offline varies by platform.
          </li>
          <li>
            <strong className="text-gray-900">It lives inside Word.</strong>{" "}
            The document has to be open in Word, on a device with your Office
            license. It is a proofing tool bolted to a word processor, not a
            listening app: no library of documents queued up, no
            audiobook-style experience for a 200-page manuscript.
          </li>
          <li>
            <strong className="text-gray-900">Subscription coupling.</strong>{" "}
            Read Aloud comes with Office 2019/2021 or Microsoft 365. If your
            documents outlive your subscription, so should your way of
            listening to them.
          </li>
        </ul>
        <p>
          None of this makes Read Aloud bad. It makes it a five-minute tool,
          and long documents deserve a dedicated reader.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you convert a Word document to PDF?">
        <p>
          LoudReader reads EPUB and PDF files and doesn&apos;t import .docx
          directly, so the bridge between Word and better listening is one
          export:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">In Word:</strong> File &rarr;
            Save As, choose <strong>PDF</strong> as the format (on Windows,
            File &rarr; Export works too).
          </li>
          <li>
            <strong className="text-gray-900">In Google Docs:</strong> File
            &rarr; Download &rarr; PDF Document.
          </li>
          <li>
            <strong className="text-gray-900">Optional but worth it:</strong>{" "}
            turn off running headers, footers, and page numbers first. In a
            PDF they become ordinary text, and skipping them keeps the
            narration clean.
          </li>
        </ol>
        <p>
          The export is lossless where it matters: your words. Nothing gets
          rewritten, summarized, or sent anywhere.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to it in LoudReader?">
        <p>
          Download{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader from the App Store
          </a>{" "}
          (free, no account), then import the PDF: on the Mac via the import
          button or by opening the file, on iPhone via the Files app or the
          share sheet. Press play. From there it behaves like an audiobook of
          your own document: natural offline voices, word-by-word
          highlighting so your eyes can follow along, and your place is kept
          between sessions.
        </p>
        <p>
          Two properties matter especially for work documents. First, it is
          fully on-device and private, your library never leaves your device.
          A contract draft, a performance review, an unpublished chapter:
          none of it touches a cloud server, because there is no cloud.
          Second, it works offline entirely, the same on a plane as at your
          desk. That combination is the whole pitch of{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text to speech on the Mac
          </Link>
          , and it extends to the iPhone app unchanged. One honest limit:
          there is no sync between your devices (no cloud, remember), so
          AirDrop the PDF to whichever device you want to listen on.
        </p>
      </QuestionSection>

      <QuestionSection question="Which option should you use when?">
        <p>
          Use both, since they are different tools. Mid-edit, cursor in the
          paragraph, quick sanity check: Word&apos;s Read Aloud, no contest.
          For anything longer, like a report you would rather hear on a walk, a
          manuscript listening pass, or a document you want on your iPhone with
          the screen locked, export to PDF and let{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          treat it like a book. The free tier is unlimited listening with no
          word quota, so trying the workflow costs nothing but the ten-second
          export.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your documents, read like audiobooks"
        subline="Export to PDF, import, press play. Natural offline voices on Mac and iPhone."
      />
    </ArticleLayout>
  );
}
