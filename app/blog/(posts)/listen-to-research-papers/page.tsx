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

export default function ListenToResearchPapersArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Yes, you can listen to research papers, and for prose-heavy reading
          (introductions, surveys, discussion sections) it turns commutes and
          walks into a genuine first pass. Import the paper&apos;s PDF into{" "}
          <strong>LoudReader</strong> on Mac or iPhone and a natural offline
          voice reads it aloud, with your position saved and playback that
          works with no connection at all. The honest caveats. Two-column
          layouts read cleanly only when the PDF encodes them cleanly, inline
          citations get read aloud rather than skipped, and equations
          don&apos;t survive the trip to audio. Where LoudReader has no equal
          is confidential material. It&apos;s fully on-device and private, your
          library never leaves your device, which is exactly what an
          unpublished draft or a paper you&apos;re reviewing needs. Listening is
          free, with no word quota.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="A PDF on your desk becomes a first pass on your commute."
      />

      <QuestionSection question="Why listen to papers at all?">
        <p>
          Because the reading pile grows faster than desk time does. Listening
          doesn&apos;t replace careful reading. Nobody absorbs a methods section
          at walking pace. But it&apos;s remarkably good at the passes that come
          before it:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Triage.</strong> A first listen
            on the commute tells you whether the paper deserves an afternoon.
          </li>
          <li>
            <strong className="text-gray-900">Background and related work.</strong>{" "}
            Survey papers and literature reviews are mostly prose, the
            best-listening genre in academia.
          </li>
          <li>
            <strong className="text-gray-900">Re-reads.</strong> Hearing a
            paper you&apos;ve already read once refreshes the argument while
            your eyes are busy elsewhere.
          </li>
        </ul>
        <p>
          The realistic framing is that listening converts time you
          weren&apos;t going to spend reading into time you did. That&apos;s the
          entire value, and it&apos;s substantial.
        </p>
      </QuestionSection>

      <QuestionSection question="What reads well aloud, and what honestly doesn't?">
        <p>
          Academic PDFs are the hardest documents in text to speech, and any
          app that claims they all read perfectly is lying to you. Here&apos;s
          what actually happens when LoudReader imports one:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Two-column layouts.</strong>{" "}
            LoudReader reads the PDF&apos;s embedded text layer, so reading
            order depends on how the publisher&apos;s tools encoded it. Most
            modern journal PDFs encode column-by-column and read in the right
            order; some older ones interleave lines across columns. One minute
            of skim-listening tells you which you have.
          </li>
          <li>
            <strong className="text-gray-900">Headers, footers, page numbers.</strong>{" "}
            LoudReader strips repeating page furniture during import, so you
            don&apos;t hear the journal name forty times.
          </li>
          <li>
            <strong className="text-gray-900">Citations.</strong> Read aloud
            as text. &ldquo;(Smith et al., 2020)&rdquo; becomes audible
            background noise you learn to tune out. LoudReader doesn&apos;t skip
            them.
          </li>
          <li>
            <strong className="text-gray-900">Equations.</strong> The honest
            answer is that equations don&apos;t survive text to speech. When
            they&apos;re images, LoudReader extracts them as figures rather
            than reading them. When they&apos;re symbol text, they sound
            garbled. Math-dense papers are for your desk.
          </li>
          <li>
            <strong className="text-gray-900">Scanned PDFs.</strong> A scan
            with no text layer can&apos;t be read. LoudReader tells you rather
            than guessing, since it reads the text layer and doesn&apos;t do
            OCR.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do you get a paper into LoudReader?">
        <p>
          Import once, then listen anywhere. It&apos;s the same flow on both
          the native Mac and iPhone apps:
        </p>
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
            (free, no account, macOS 15+ on Apple Silicon or iOS 18+).
          </li>
          <li>
            Import the PDF. Share it to LoudReader from Files, Safari, or
            Mail on iPhone, or open it in the Mac app. The import converts
            the paper into clean reading sections and pulls out figures.
          </li>
          <li>
            Press play. A natural offline voice reads while each sentence
            stays visible on screen; your position is saved per paper, and
            playback continues with the screen locked.
          </li>
        </ol>
        <p>
          The same pipeline handles books and reports too. The details are in{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            how to listen to a PDF on iPhone
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What about unpublished drafts and papers you're reviewing?">
        <p>
          This is where the architecture stops being a preference and becomes
          a requirement. Take an advisor&apos;s draft, your own unsubmitted
          manuscript, or a paper you&apos;re refereeing under confidentiality.
          Uploading any of these to a cloud TTS service means a third-party
          server now holds a copy of a document you promised to keep private.
        </p>
        <p>
          LoudReader has no server to upload to. The voice is generated on
          your own device, there is no account, and the app is fully
          on-device and private, your library never leaves your device. An
          embargoed review copy is exactly as confidential after you listen to
          it as before. If that guarantee is the deciding factor for you, the
          full argument is laid out in{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="When is a purpose-built academic tool the better choice?">
        <p>
          Honest concession: if your listening is high-volume published-paper
          consumption and you don&apos;t mind the cloud,{" "}
          <a
            href="https://www.listening.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Listening.com
          </a>{" "}
          is purpose-built for exactly that. It understands academic paper
          structure and skips citations, which LoudReader doesn&apos;t. It&apos;s
          a subscription product, and it processes your documents server-side.
        </p>
        <p>
          Choose LoudReader when the trade runs the other way: free unlimited
          listening with no word quota or monthly cap, everything offline, and
          documents that must never touch a cloud server. For a grad student
          whose reading mixes published papers, drafts from the lab, and the
          occasional book, that combination is hard to beat at the price of
          zero.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your reading pile, on your commute"
        subline="Import a paper and press play. Free unlimited listening, fully on-device, so drafts and review copies stay private."
      />
    </ArticleLayout>
  );
}
