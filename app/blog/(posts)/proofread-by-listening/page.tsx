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

export default function ProofreadByListeningArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The fastest way to catch the typos your eyes keep missing is to
          stop reading your draft and start <strong>listening</strong> to it.
          You wrote the sentences, so your eyes read what you <em>meant</em>.
          A text-to-speech voice reads what's actually on the page, so missing
          words, doubled words, run-ons, and rhythm problems all become
          audible. The workflow: export your draft as a PDF or EPUB, import
          it into <strong>LoudReader</strong> (iPhone, iPad, and Mac),
          press play with the manuscript open in your editor, and pause, fix,
          and resume as errors surface. Your draft stays fully on-device and
          private, your library never leaves your device, which matters
          when the text is unpublished work.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="A voice reads what's on the page, not what you meant to write."
      />

      <QuestionSection question="Why do your ears catch what your eyes autocorrect?">
        <p>
          Every writer has had the experience: three careful read-throughs,
          and a beta reader still finds &ldquo;the the&rdquo; in the second
          paragraph. It's not carelessness, it's familiarity. You know
          what each sentence is supposed to say, so your reading is really a
          confirmation pass. The eyes skim, and the brain fills in the
          missing &ldquo;of&rdquo;, merges the doubled &ldquo;and&rdquo;, and
          glides over the sentence that never actually ends.
        </p>
        <p>
          A text-to-speech voice can't do any of that. It has no idea what
          you meant, so it reads the page verbatim, at a steady pace, without
          skimming. That makes it the most honest first reader you'll
          ever have. When a word is missing, you hear the sentence stumble. A
          run-on makes the voice run out of shape, and a paragraph with bad
          rhythm just drones.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a TTS proofreading workflow look like?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Export the draft.</strong> Save
            your manuscript as a PDF or EPUB. Word, Google Docs, Scrivener,
            and Pages all export at least PDF. EPUB reflows more cleanly if
            your tool offers it.
          </li>
          <li>
            <strong className="text-gray-900">Import it into LoudReader.</strong>{" "}
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            (free, no account), then import the file on your Mac, or share
            it to LoudReader on your iPhone.
          </li>
          <li>
            <strong className="text-gray-900">Listen with the editor open.</strong>{" "}
            Keep the real manuscript open in your writing tool while the app
            reads. The word-by-word highlight shows exactly where the voice
            is, so finding the matching spot in your editor takes a second.
          </li>
          <li>
            <strong className="text-gray-900">Pause, fix, resume.</strong>{" "}
            When something clunks, pause, make the edit in your editor, and
            press play. LoudReader remembers its position, so you resume
            mid-chapter without hunting. The fix goes in your source
            document, and the listening copy is just the map.
          </li>
          <li>
            <strong className="text-gray-900">Do a second pass for flow.</strong>{" "}
            The first pass catches mechanical errors; a second pass at normal
            speed, ideally a day later, catches pacing and repetition.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What playback speed should you use?">
        <p>
          Slower than you think for the typo pass. At a slightly reduced
          speed, every word gets its own moment, and small mechanical errors
          (a dropped article, a wrong verb ending) have nowhere to hide.
          For the rhythm pass, normal speed is right. You're listening for
          how the prose moves, and that only shows at reading tempo.
        </p>
        <p>
          The honest pricing note: in LoudReader, playback speed control
          (0.3x to 3.0x) is part of Premium, at $7.99/month, $49.99/year, or
          $199.99 once for lifetime. The free tier plays at normal speed with
          unlimited listening, which covers the flow pass completely. The
          slow-motion typo pass is the part that needs Premium.
        </p>
      </QuestionSection>

      <QuestionSection question="Should the voice be natural or robotic?">
        <p>
          Old-school advice said to use the flattest robot voice available,
          on the theory that prose which survives a monotone is genuinely
          good. There's something to it, but a monotone across 80,000 words
          is exhausting, and fatigue makes you stop noticing errors long
          before the manuscript ends.
        </p>
        <p>
          The practical middle: a <em>neutral, natural</em> voice. Natural
          enough to listen to for hours, neutral enough that it's not
          performing your dialogue for you. LoudReader&apos;s natural offline
          voices sit in exactly that register, a calm read that neither
          fights the prose nor flatters it. (If you're polishing a novel
          rather than an essay, the companion piece on{" "}
          <Link
            href="/blog/hear-your-novel-read-aloud"
            className="text-loudBlue hover:underline"
          >
            hearing your novel read aloud
          </Link>{" "}
          covers dialogue and pacing passes.)
        </p>
      </QuestionSection>

      <QuestionSection question="Does your draft stay private?">
        <p>
          With LoudReader, yes, and for unpublished work this is the
          headline feature, not a footnote. The app is fully on-device and
          private, your library never leaves your device. The voices are
          generated locally on your Mac or iPhone, there's no account to
          create, and the manuscript you import is never uploaded to any
          server. It reads in airplane mode, which is the easiest privacy
          audit there is. If you've ever hesitated before pasting a chapter
          into a cloud TTS website, this is the alternative:{" "}
          <Link href="/offline-text-to-speech-mac" className="text-loudBlue hover:underline">
            offline text-to-speech on your Mac
          </Link>
          , with{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          doing the reading.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Give your draft its most honest reader"
        subline="Export to PDF or EPUB, import, press play. Your manuscript stays on your device."
      />
    </ArticleLayout>
  );
}
