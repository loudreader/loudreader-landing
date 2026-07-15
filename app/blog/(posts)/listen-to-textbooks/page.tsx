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

export default function ListenToTextbooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If your textbook is a digital PDF or EPUB with real text in it, an
          app can read it aloud, and that turns every commute, walk, and gym
          session into study time. <strong>LoudReader</strong> (native Mac and
          iPhone apps) imports course PDFs and EPUBs, reads them with natural
          offline voices, and highlights each word as it&apos;s spoken, so your
          eyes and ears stay locked to the same sentence. Listening is free
          and unlimited, with no word quota and no account. Two honest limits.
          A scanned, image-only PDF has no text layer and needs OCR first, and
          playback speed control is a Premium feature. Everything runs fully
          on-device and private, your library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="A course PDF becomes a lecture you can replay."
      />

      <QuestionSection question="Can an app really read a textbook aloud?">
        <p>
          Yes. A textbook is just text, and text-to-speech has gotten good
          enough that listening to a chapter feels like a recorded lecture
          rather than a robot reciting words. The piece that matters most for
          studying, especially if you have dyslexia or ADHD, is{" "}
          <strong className="text-gray-900">synced highlighting</strong>.
          LoudReader lights up each word as the voice reads it, so when your
          attention drifts, the highlight shows you exactly where the voice
          is. You never lose your place, and you never re-read the same
          paragraph three times trying to find it.
        </p>
        <p>
          The other piece is cost. Course reading is measured in hundreds of
          pages a week, which is exactly where per-word quotas and monthly
          caps on many TTS apps fall apart. LoudReader&apos;s free tier is
          unlimited listening on every document, cover to cover, with no word
          quota to budget against a syllabus.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you get a course PDF or EPUB into the app?">
        <p>It takes about a minute per file:</p>
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
            </a>
            . Free, no account needed.
          </li>
          <li>
            Download the PDF or EPUB from your course portal (Canvas, Moodle,
            Blackboard, a publisher site) to your device.
          </li>
          <li>
            On iPhone, share the file to LoudReader from the Files app,
            Safari, or Mail. On Mac, use the import button and pick the file.
          </li>
          <li>
            Press play. The app remembers your position, so tomorrow&apos;s
            session starts where today&apos;s ended.
          </li>
        </ol>
        <p>
          LoudReader imports EPUB and PDF. If your course materials are Word
          documents or slides, export them to PDF first. Every word processor
          and slide app can do that. For the full iPhone walkthrough, see{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            how to listen to a PDF on iPhone
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What if your textbook is a scanned PDF?">
        <p>
          This is the honest limit, and it applies to every text-to-speech
          app. A scanned PDF that is just photographs of pages contains no
          text, only pictures of text, so there is nothing for a voice to
          read. LoudReader reads the PDF&apos;s embedded text layer and
          doesn&apos;t do OCR.
        </p>
        <p>
          The quick test: open the PDF and try to select and copy a sentence.
          If you can, it&apos;ll read aloud fine. If you can&apos;t, run the
          file through an OCR tool first (many scanner apps and PDF editors
          have one built in) and import the OCR&apos;d result. One pass of
          OCR turns a dead scan into a textbook you can listen to all
          semester.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you study long chapters by listening?">
        <p>
          A textbook chapter is long, so the trick is treating it like a
          podcast series instead of a single sitting:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">First pass, eyes and ears.</strong>{" "}
            Listen at your desk with the text on screen and follow the
            highlight. This is the pass where the material actually lands.
          </li>
          <li>
            <strong className="text-gray-900">Re-listen on the commute.</strong>{" "}
            Because the voices run on your device, the chapter plays on the
            subway, on a plane, or in a dead zone, with no downloads to manage
            and no stream to drop. Playback keeps going with the screen locked,
            with play, pause, and skip on the lock screen.
          </li>
          <li>
            <strong className="text-gray-900">Jump back to the hard parts.</strong>{" "}
            The app remembers where you are, and you can re-listen to any
            section as many times as you need before an exam. Repetition is
            free.
          </li>
          <li>
            <strong className="text-gray-900">Speed is a Premium tool.</strong>{" "}
            Honest note: changing playback speed (0.3x to 3.0x) requires
            LoudReader Premium. Slow helps dense material sink in, and fast
            works for revising chapters you already know. The free tier plays
            at normal speed, unlimited.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Do your course materials stay private?">
        <p>
          Yes, and this matters more than students usually expect. Course
          PDFs are often licensed, drafts of your own essays are unpublished
          work, and lecture notes can contain things you&apos;d rather not
          upload to a server you&apos;ve never heard of. LoudReader is fully
          on-device and private, your library never leaves your device. The
          narration is generated locally, there is no account, and nothing
          you import is uploaded anywhere. More detail is in the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your textbooks into lectures"
        subline="Import a course PDF or EPUB and press play. Free unlimited listening, no account, fully on-device."
      />
    </ArticleLayout>
  );
}
