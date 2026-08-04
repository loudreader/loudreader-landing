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

export default function TextToSpeechForWritersArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          You wrote the sentence, so you know what it is supposed to say.
          That is exactly why your eyes miss the mistake. Hearing your draft
          read aloud by a different voice short-circuits your brain's
          auto-correct and exposes what is actually on the page. Repetition,
          run-ons, rhythm problems, missing words: they survive silent
          proofreading but do not survive a listen.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) turns any
          EPUB or PDF draft into an audio proofread with natural offline
          voices. Export your manuscript, import it, press play, and listen
          with your eyes off the screen. It is fully on-device and private,
          your library never leaves your device, so your unpublished draft
          stays on your machine. Word-by-word highlighting is free; speed
          control from 0.3x to 3.0x is Premium. One chapter, no screen, and
          you will catch things you have read past ten times.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Your ears catch what your eyes forgive. The draft sounds different when someone else reads it."
      />

      <QuestionSection question="Why do writers miss errors in their own work?">
        <p>
          It is not carelessness, it is how reading works. When you read your
          own writing silently, your brain supplies the intended meaning, not
          the actual text. The word you meant to type fills in for the word
          you actually typed. The sentence that made sense in your head reads
          fine because your head is still narrating the version you intended.
        </p>
        <p>
          A voice reading aloud breaks that loop. It reads what is there. The
          clunky transition, the word repeated three times in two paragraphs,
          the sentence that runs out of syntactic breath halfway through: all
          of it becomes audible. Your ears are not in on the conspiracy. They
          receive the text as written, and they report it honestly.
        </p>
      </QuestionSection>

      <QuestionSection question="What specific problems does listening catch?">
        <p>
          Writers who proofread by ear tend to notice the same categories of
          error over and over:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Repetition.</strong> You used
            &ldquo;just&rdquo; three times in one paragraph and never noticed
            because your eyes treat common words as invisible. A voice does
            not.
          </li>
          <li>
            <strong className="text-gray-900">Run-on sentences.</strong> On
            the page, a long sentence looks fine. Spoken aloud, you run out
            of breath before the period and realize it is two sentences
            crammed together.
          </li>
          <li>
            <strong className="text-gray-900">Awkward rhythm.</strong> Prose
            has a cadence. When it is off, reading silently hides it. Hearing
            it exposes the bump immediately.
          </li>
          <li>
            <strong className="text-gray-900">Stiff dialogue.</strong> Words
            that look natural in quotation marks can sound wooden and
            unnatural when spoken. If a character's line makes you wince
            aloud, rewrite it.
          </li>
          <li>
            <strong className="text-gray-900">Missing words.</strong> Your
            brain fills the gap silently. A voice skips over it and the
            sentence breaks.
          </li>
        </ul>
        <p>
          We covered this in more detail in{" "}
          <Link
            href="/blog/proofread-by-listening"
            className="text-loudBlue hover:underline"
          >
            proofread by listening
          </Link>
          , with a step-by-step workflow for making audio proofreading part
          of your editing process.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen-proof a full manuscript?">
        <p>
          The practical workflow is simpler than it sounds:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Export your current draft as an EPUB. Most word processors
            (Word, Scrivener, Google Docs, Pages) can export to EPUB
            directly. PDF works too, but EPUB preserves chapter structure
            better.
          </li>
          <li>
            Import into{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader
            </a>
            . Free, no account.
          </li>
          <li>
            Pick a neutral voice. Natural offline voices are clearer and less
            distracting than robotic TTS. You can try all 23 studio narrators free for
            the first 8 hours.
          </li>
          <li>
            Set speed around 1.15x to 1.3x. Slightly faster than natural
            speech keeps the flow without sacrificing clarity. Speed control
            is a Premium feature.
          </li>
          <li>
            Press play and do not look at the screen. Keep a notes app open
            or a notebook nearby. Pause when you catch something and write it
            down.
          </li>
          <li>
            Do one chapter per session. Listening fatigue is real, and after
            45 minutes your ears start to glaze over the same way your eyes
            do.
          </li>
        </ol>
        <p>
          For a deeper look at why reading and listening together improves
          catch rate, see{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            read and listen at the same time
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What speed and voice work best for proofreading?">
        <p>
          Speed is personal, but most writers land between 1.15x and 1.3x for
          proofreading. Slower than 1.0x makes the voice sound unnatural and
          distracts from the prose. Faster than 1.5x and you start missing the
          rhythm problems you are listening for. The goal is hearing the shape
          of your sentences, not speed-listening your draft.
        </p>
        <p>
          Voice choice matters more than you would think. A harsh or nasal
          voice makes a 90-minute proofreading session unbearable. A clear,
          neutral voice lets you focus on the words rather than the delivery.
          In{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>
          , all 23 studio narrators are free to try for the first 8 listening hours.
          Speed control from 0.3x to 3.0x is a Premium feature; the free tier
          plays at normal speed.
        </p>
      </QuestionSection>

      <QuestionSection question="Does this replace a copyeditor?">
        <p>
          No, and it does not claim to. It replaces the first two proofreading
          passes you would do yourself. It catches mechanical problems:
          repetition, rhythm, missing words, typos that spellcheck skips
          because the wrong word is still a correctly spelled word. It does not
          catch plot holes, timeline inconsistencies, factual errors, or
          structural problems. A human editor still does the heavy lifting.
        </p>
        <p>
          What audio proofreading does is make the passes you do before
          sending to an editor much more effective. You catch the obvious
          stuff by ear, which means your editor catches the subtle stuff
          instead of flagging that you used &ldquo;perhaps&rdquo; four times
          on one page.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear what you actually wrote"
        subline="Export your draft, import it, and listen. Catch the errors your eyes have forgiven a dozen times. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
