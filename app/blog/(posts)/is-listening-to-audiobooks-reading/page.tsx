import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>For a personal reading list, it is reasonable to count a book you listened to. You engaged with its story or ideas, and you can say you listened when the format matters. That does not mean listening and reading are identical skills or always produce the same result. Research finds no reliable overall comprehension difference across some comparisons, alongside advantages for reading in particular conditions. Choose the format around your purpose: enjoying a novel, analysing a passage, learning written words or checking a diagram are different tasks. A study of a short passage also cannot certify every audiobook app or distracted commute.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Choose the format around what you want to do with the text." />

      <QuestionSection question="What does the comparison research actually show?">
        <p>A <a href="https://journals.sagepub.com/doi/10.3102/00346543211060871" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">2022 meta-analysis by Virginia Clinton-Lisell</a> combined 46 studies with 4,687 participants. It found no statistically reliable overall comprehension difference between reading and listening, but reading advantages in some conditions, including self-paced reading and inferential questions. That is a qualified average, not proof that every person or task is equivalent.</p><p>In <a href="https://journals.sagepub.com/doi/10.1177/2158244016669550" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">a 2016 experiment by Rogowsky, Calhoun and Tallal</a>, 91 adults read, listened to, or both read and listened to the same nonfiction material. The groups did not differ significantly on immediate or two-week comprehension tests. The participants were a selected group of college-educated adults, and the task used a preface and chapter under controlled conditions.</p>
      </QuestionSection>

      <QuestionSection question="What would be too much to conclude from that?">
        <ul className="list-disc pl-6 space-y-2">
          <li>That you will remember equally well while doing any other task.</li>
          <li>That audio trains every skill involved in reading written language.</li>
          <li>That combining audio and text must be better than either alone.</li>
          <li>That a particular TTS app has been tested by those studies.</li>
          <li>That a fluent narration accurately conveys every formula, chart or layout.</li>
        </ul><p>The studies above compare ways of receiving text. They do not test LoudReader, establish a treatment for a learning difficulty or settle whether a particular setting lets you concentrate.</p>
      </QuestionSection>

      <QuestionSection question="When does the format matter most?">
        <p>For enjoyment, choose the edition and delivery you want to spend time with. For close analysis, keep the text available so you can revisit wording and inspect structure. For a task involving spelling, decoding written words or page layout, audio alone cannot display the thing being practised.</p><p>For coursework or an assessment, check the assignment and any agreed accessibility arrangements. For your own reading log, there is no need to defend a format choice as morally better or worse. “I listened to it” is a useful description, not an apology.</p>
      </QuestionSection>

      <QuestionSection question="How can I check whether I followed a passage?">
        <p>After a short section, pause and explain its main point in your own words. Identify one question or uncertainty. If you cannot, replay or reread with fewer distractions; change the pace or format if that helps. This is a practical self-check, not a standardised comprehension test.</p><p>If a passage depends on a table, open the table. If it relies on a distinction between similarly sounding terms, look at the spelling. Switching formats is allowed; there is no prize for forcing an entire book through one channel.</p>
      </QuestionSection>

      <QuestionSection question="What about reading and listening together?">
        <p>Try it on a short section and decide whether the two streams help you follow it or feel redundant. A moving highlight can locate the spoken text, but that feature does not guarantee attention or retention. The <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">read-and-listen guide</Link> explains a practical setup.</p><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> provides local narration and word-following highlighting for supported imports. Its role is to offer another way to access a book; it has not been evaluated in the studies discussed here.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
