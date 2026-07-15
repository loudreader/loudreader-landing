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

export default function ListenToConfidentialDocumentsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The documents you most want read aloud (a 60-page contract, a case
          file, a due-diligence report) are exactly the ones you must not
          upload to a cloud service. The secure workflow is on-device text to
          speech: import the file into{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          (native Mac and iPhone apps), where it is copied into the
          app&apos;s local storage; turn on airplane mode if you want proof;
          press play and listen with natural offline voices; delete it from
          the library when you are done. The whole loop is fully on-device
          and private, your library never leaves your device. No account,
          no upload, and a one-minute verification step that does not require
          trusting anyone&apos;s privacy policy: if it still reads with all
          connectivity off, nothing is being sent anywhere.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="The rule for confidential material: no copy you don't control."
      />

      <QuestionSection question="Why can't you just use any TTS app on confidential files?">
        <p>
          Because most text-to-speech apps generate their voices in the
          cloud, and cloud synthesis has one unavoidable step: your text is
          transmitted to the provider&apos;s servers. For a novel, that is a
          non-issue. For a document covered by an NDA, attorney-client
          privilege, HR confidentiality, or a client engagement letter, it
          means a third party&apos;s infrastructure now holds a copy of the
          material you promised to protect, before you have heard a single
          sentence.
        </p>
        <p>
          This is the professional&apos;s version of a very common trap: the
          longer and more tedious the document, the more you want it read
          aloud, and the more likely it is to be the one document that must
          not leave your machine.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the actual threat model when you upload a document?">
        <p>
          No FUD, just the mechanics of where copies end up:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Retention.</strong> The service
            holds at least a processing copy, and depending on its terms may
            keep your text longer, tied to an account, a library feature, or
            a log.
          </li>
          <li>
            <strong className="text-gray-900">Subprocessors.</strong> Cloud
            services run on other companies&apos; infrastructure. Your
            document&apos;s journey usually involves parties you have never
            evaluated, in jurisdictions you did not choose.
          </li>
          <li>
            <strong className="text-gray-900">Breach surface.</strong> Every
            server-side copy is one more system whose security you now depend
            on. A copy that never exists cannot leak.
          </li>
          <li>
            <strong className="text-gray-900">Terms drift.</strong> Policies
            get updated. A promise that holds today is a document you must
            re-read after every revision, and your protection is contractual,
            not structural.
          </li>
        </ul>
        <p>
          One sentence to carry out of this section: every copy of a document
          that exists outside your control is a copy you must account for.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to a confidential document without uploading it?">
        <p>The on-device workflow, start to finish:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            with no account, so there is nothing to sign up for and nothing
            your reading is tied to. It runs on iPhone and iPad (iOS 18+) and
            Apple Silicon Macs (macOS 15+).
          </li>
          <li>
            <strong>Import the document locally.</strong> Share or open the
            DRM-free PDF or EPUB from the Files app (or Finder on Mac). The
            file is processed on the device and stored in LoudReader&apos;s
            own local storage. Importing is local work, not an upload. The
            same flow works for{" "}
            <Link
              href="/listen-to-pdf-iphone"
              className="text-loudBlue hover:underline"
            >
              PDFs on your iPhone
            </Link>
            .
          </li>
          <li>
            <strong>Optionally: airplane mode on.</strong> If the document is
            sensitive enough that you want proof rather than promises, cut
            connectivity before you press play.
          </li>
          <li>
            <strong>Listen.</strong> Natural offline voices read the document
            while each word highlights; playback continues with the screen
            locked, so a long report works like a podcast on a commute or a
            walk.
          </li>
          <li>
            <strong>Delete when done.</strong> Removing the book from your
            library deletes the file from the app&apos;s local storage. The
            loop starts and ends on your device.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How do you verify the app isn't sending your files anywhere?">
        <p>
          The airplane-mode test: turn off Wi-Fi and cellular, then press
          play. An app that keeps reading with no connection is generating
          the speech on your device, and there is no way to fake that. An app
          that stops, errors, or degrades needed a server, which means your
          document was traveling. LoudReader passes this test on both Mac and
          iPhone; it is the audit anyone can run in under a minute, no
          network inspector required.
        </p>
        <p>
          For the fuller background on what cloud TTS does with files, and
          what to check in a privacy policy when you do evaluate one, see{" "}
          <Link
            href="/blog/are-text-to-speech-apps-safe"
            className="text-loudBlue hover:underline"
          >
            are text-to-speech apps safe
          </Link>{" "}
          and the architecture page on{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What are the honest limits?">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">This is not legal advice.</strong>{" "}
            Whether a document may be on your personal device at all is a
            question for your NDA, your firm&apos;s policy, or your
            compliance team. On-device narration adds no new recipient, but
            it does not override a policy that says the file stays on the
            case-management system.
          </li>
          <li>
            <strong className="text-gray-900">Your device becomes the perimeter.</strong>{" "}
            The point of on-device is that there is nothing else to secure,
            which means your passcode, screen lock, and disk encryption are
            now the whole story. Treat the device accordingly.
          </li>
          <li>
            <strong className="text-gray-900">DRM-free files only.</strong>{" "}
            LoudReader reads DRM-free EPUBs and PDFs. Documents locked with
            DRM, and PDFs that are pure scans with no text layer, are not
            what it is built for.
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen to sensitive documents without uploading them"
        subline="Import locally, verify in airplane mode, listen, delete. No account, no cloud, no copy you don't control."
      />
    </ArticleLayout>
  );
}
