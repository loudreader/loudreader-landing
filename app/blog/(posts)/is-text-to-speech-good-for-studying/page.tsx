import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function IsTextToSpeechGoodForStudyingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Text to speech is a solid study tool, but it is not a magic bullet.
          The evidence shows it works best for review and initial exposure to
          material, especially when combined with reading (dual-coding theory).
          For deep study that requires note-taking, working through diagrams,
          or active recall, TTS alone falls short. The honest take: use TTS to
          get more reps with the material, not to replace active engagement.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads your
          EPUBs and PDFs aloud with natural offline voices and word-by-word
          highlighting, giving you the dual-channel benefit of reading while
          listening. It is fully on-device and private, your library never
          leaves your device. Free unlimited listening; notes and highlights
          are part of {PRICING.premiumMonthly} Premium.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Eyes on the text, ears on the voice: two channels encode better than one."
      />

      <QuestionSection question="What does the research say about TTS and studying?">
        <p>
          A concept from cognitive psychology called dual-coding theory
          explains why TTS can help. When you process information through two
          channels at once (visual and auditory), your brain creates two
          separate mental representations of the same material. That gives you
          two paths to retrieve it later, which improves encoding and recall.
          This is not a new or contested idea. It is a well-established
          framework that has been studied for decades.
        </p>
        <p>
          The practical implication: reading while listening, with synced
          word-by-word highlighting like LoudReader provides, gives your brain
          both channels simultaneously. For students who struggle to stay
          focused on dense text, that second channel can be the difference
          between finishing the chapter and zoning out after two paragraphs.
        </p>
      </QuestionSection>

      <QuestionSection question="When is TTS most effective for studying?">
        <p>
          TTS earns its keep in three studying scenarios:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Review.</strong> You already read
            the chapter. Now you listen to it while walking to class or doing
            laundry. The second pass through a different channel reinforces
            what you learned, and you get it done in time that would otherwise
            be dead.
          </li>
          <li>
            <strong className="text-gray-900">Initial exposure.</strong> Some
            students find it easier to absorb a chapter by listening first,
            then reading in detail. The audio pass gives you the structure and
            main ideas; the reading pass fills in the details. This works
            especially well for narrative-heavy material like history or
            literature.
          </li>
          <li>
            <strong className="text-gray-900">Accessibility.</strong> For
            students with dyslexia, ADHD, or visual fatigue, TTS removes the
            friction of decoding text. The cognitive load shifts from
            &ldquo;reading the words&rdquo; to &ldquo;understanding the
            ideas,&rdquo; which is the part that actually matters.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="When does TTS fall short for studying?">
        <p>
          Three honest limits you should know before relying on TTS for exam
          prep:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Diagrams, formulas, and
            visuals.</strong> Audio cannot convey a chart, a chemical
            structure, or a mathematical derivation. If your material is
            visually dense, you need your eyes on it at some point.
          </li>
          <li>
            <strong className="text-gray-900">Passive vs active learning.</strong>{" "}
            Decades of research on learning consistently show that active
            recall (testing yourself, explaining concepts, answering practice
            questions) produces stronger, longer-lasting learning than passive
            re-exposure. Listening to a chapter is passive. It helps, but it
            does not replace active study methods.
          </li>
          <li>
            <strong className="text-gray-900">Divided attention.</strong> If
            you are multitasking while listening (scrolling, texting, doing
            other work), comprehension drops. TTS works for studying when you
            give it most of your attention, not when it is background noise.
          </li>
        </ul>
        <p>
          The honest strategy: use TTS as one tool in a larger study system.
          Read the chapter first. Listen to it later for review. Take notes
          actively. Quiz yourself. TTS multiplies your study reps; it does not
          replace the ones that matter most.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you use LoudReader for studying?">
        <p>
          LoudReader is set up to support studying without adding friction:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              Get it free from the App Store
            </a>
            , no account needed. Import any DRM-free EPUB or PDF textbook,
            article, or set of notes.
          </li>
          <li>
            Read normally with your eyes. Word-by-word highlighting is free
            and shows you exactly where you are at all times.
          </li>
          <li>
            When you want to study by ear, press play. The natural offline
            voices pick up from where you left off. No conversion, no audio
            files.
          </li>
          <li>
            For active studying, {PRICING.premiumMonthly} Premium adds notes
            and highlights. Mark key passages as you listen and build a
            study guide right inside the book.
          </li>
        </ol>
        <p>
          The full picture of turning your study materials into audio is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . And because everything is fully on-device and private, your
          library never leaves your device, you can use it with sensitive
          course materials without worrying about where your documents end up.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Study with your eyes and your ears"
        subline="Natural offline voices, word-by-word highlighting, and unlimited free listening. Notes and highlights on Premium."
      />
    </ArticleLayout>
  );
}