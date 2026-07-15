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

export default function IsListeningToAudiobooksReadingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          For comprehension, which is what most people mean by
          &ldquo;counting,&rdquo; yes. A 2022 meta-analysis of 46 studies
          covering 4,687 participants found no reliable overall difference
          between reading and listening comprehension, and a 2016 experiment
          that gave adults the same non-fiction chapter as an audiobook, an
          e-text, or both found no significant difference either, even two
          weeks later. Print keeps a small edge when material demands
          inference and you control your own pace. Audio wins when the
          alternative is not reading at all. For many readers the best answer
          is both at once: eyes on the text, ears on a voice, which is exactly
          what synced word-by-word highlighting in an app like{" "}
          <strong>LoudReader</strong> gives you.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Same words, different channel, and the story arrives either way."
      />

      <QuestionSection question="What does the research actually say?">
        <p>
          This question has real research behind it, and the results are more
          boring, in a good way, than the debate suggests.
        </p>
        <p>
          In a 2016 experiment,{" "}
          <a
            href="https://journals.sagepub.com/doi/10.1177/2158244016669550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Rogowsky, Calhoun and Tallal
          </a>{" "}
          randomly assigned 91 adults to take in the same non-fiction chapter
          three ways: as a digital audiobook, as an e-text, or both at once.
          Everyone took the same comprehension test afterward, and again two
          weeks later. There were no statistically significant differences
          between the groups, not immediately, and not at the two-week
          retention test.
        </p>
        <p>
          The bigger picture agrees.{" "}
          <a
            href="https://journals.sagepub.com/doi/10.3102/00346543211060871"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Clinton-Lisell&apos;s 2022 meta-analysis
          </a>{" "}
          in <em>Review of Educational Research</em> pooled 46 studies with
          4,687 participants and found overall reading and listening
          comprehension were not reliably different. The author&apos;s own
          conclusion was practical: both audio and written options are needed
          for accessible instruction.
        </p>
      </QuestionSection>

      <QuestionSection question="When does print still have an edge?">
        <p>
          Honesty matters here, because the research does find real
          advantages for print, small ones, in specific situations:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Inference-heavy material.</strong>{" "}
            In the meta-analysis, reading beat listening on inferential
            questions, the kind where you connect ideas across a passage,
            while literal comprehension showed no difference at all.
          </li>
          <li>
            <strong className="text-gray-900">Controlling your own pace.</strong>{" "}
            Self-paced reading showed a small advantage over listening. Eyes
            can slow down, loop back, and re-scan a sentence instantly, and
            audio moves at the narrator&apos;s speed unless you stop it.
          </li>
        </ul>
        <p>
          So for a dense textbook chapter you&apos;ll be tested on, print (or
          print plus audio) is a reasonable default. For a novel on your
          commute, the modality difference is noise.
        </p>
      </QuestionSection>

      <QuestionSection question="Is listening to a book cheating?">
        <p>
          Only if you think the point of a book is the eye movement. The
          &ldquo;cheating&rdquo; framing quietly swaps the goal (the story,
          the argument, the ideas) for the mechanism. A person who listened
          to a novel and a person who read it can have the same conversation
          about it, and the comprehension research above is the evidence.
          Listening to a book is reading it with your ears.
        </p>
        <p>
          Where the distinction genuinely matters is skill-building: a child
          learning to decode written words still needs eyes-on-text practice,
          and listening alone doesn&apos;t train that. But that&apos;s an
          argument for combining the two, not for gatekeeping the word
          &ldquo;reading.&rdquo;
        </p>
      </QuestionSection>

      <QuestionSection question="Does audio help struggling readers?">
        <p>
          There&apos;s direct evidence it can. In a small controlled study,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/19725019/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Milani, Lorusso and Molteni (2010)
          </a>{" "}
          followed two groups of 20 adolescents with dyslexia for five
          months. The group using audiobooks improved in reading accuracy and
          showed fewer emotional and behavioural difficulties and greater
          school motivation than the control group using print alone. It&apos;s
          one small study, not a settled field, but it points the same
          direction as everyday experience: audio removes the decoding
          bottleneck that sits between a struggling reader and the ideas.
        </p>
      </QuestionSection>

      <QuestionSection question="Is listening while reading better than either alone?">
        <p>
          For skilled adult readers, the honest answer is: not measurably.
          The 2016 study&apos;s dual-modality group did no better on the test
          than the readers or the listeners. For beginner language learners,
          a 26-week study by{" "}
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0346251X15000846"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Chang and Millett (2015)
          </a>{" "}
          found reading while listening improved reading rates and
          comprehension substantially more than silent reading.
        </p>
        <p>
          The benefit most people actually feel, though, is attention:
          a voice plus a moving highlight makes it much harder for your mind
          to wander, because the moment it does, the highlight shows you
          exactly where the voice is. That&apos;s what{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          is built around: natural offline voices with word-by-word
          highlighting on any EPUB or PDF, fully on-device and private, your
          library never leaves your device. If you want to try the method,
          the how-to is in{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            how to read and listen at the same time
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read it with your ears, or with both"
        subline="Any EPUB, PDF, or free classic, read aloud with synced highlighting. Free unlimited listening."
      />
    </ArticleLayout>
  );
}
