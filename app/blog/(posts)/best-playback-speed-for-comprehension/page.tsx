import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        There is no playback multiplier that guarantees comprehension. A useful speed lets you explain what you heard, including the details you need later. Start with a comfortable baseline, listen to a short unfamiliar section, and check your understanding before increasing the pace. For study, include a second check later: following a sentence now and remembering its argument tomorrow are different tasks. A 1.5x setting can suit one voice and feel rushed on another because their original speaking rates differ. This guide focuses on checking understanding; it does not prescribe a speed by diagnosis, genre, or age.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Choose a speed by what you can explain afterwards, not by the number on the player." />
      <QuestionSection question="What does speed research actually tell us?">
        <p>One relevant study is <a href="https://castel.psych.ucla.edu/wp-content/uploads/sites/111/2021/11/ACP-Lecture-Speed-Murphy-2021-in-press.pdf" className="text-loudBlue hover:underline">Murphy and colleagues’ study of lecture-video speed</a>. In its first experiment, comprehension scores did not differ significantly between 1x, 1.5x and 2x, while performance was lower at 2.5x than at 1x. These were particular lecture videos, participants and comprehension tests, including a delayed test.</p>
        <p>That finding does not establish a universal audiobook limit. It does not test every language, voice, listening environment or learning need, and a lecture with visuals is not the same task as following a novel or studying an equation by ear. Treat a study result as context for experimentation, not permission to stop checking your own understanding.</p>
      </QuestionSection>
      <QuestionSection question="How can I check understanding without turning reading into an exam?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Choose a short, unfamiliar section.</strong> Use material similar to the reading you want to do. A passage you already know can hide what you missed.</li>
          <li><strong>Listen at a comfortable speed.</strong> Starting at 1x is convenient, but it is a reference setting rather than a biological optimum.</li>
          <li><strong>Pause and explain it.</strong> For a story, say who did what and why. For an argument, state the claim, its support and any exception.</li>
          <li><strong>Check against the text.</strong> Look for missing connections, not just familiar words. If you heard the terms but cannot explain the reasoning, reduce the speed or read the passage.</li>
          <li><strong>Try a small change on another comparable section.</strong> Avoid repeatedly accelerating a passage you are memorising. Repeat across several sessions before adopting a default.</li>
        </ol>
        <p>This is an informal self-check, not a controlled experiment or a diagnosis. For assessed work, practice the task you will actually need to perform, such as explaining a concept or solving a problem.</p>
      </QuestionSection>
      <QuestionSection question="What are useful signs to slow down or pause?">
        <p>Frequent rewinds, losing track of a pronoun, or recognising technical terms without understanding their relationship are reasons to adjust. Slowing down is only one option: pause for a diagram, look up a term, or read a difficult paragraph on screen. More time between words cannot supply missing background knowledge.</p>
        <p>Also separate sound quality from pace. An unfamiliar pronunciation or poorly extracted PDF may remain confusing at every speed. Try a clearer source or a different narrator before assuming you need to train yourself to listen faster.</p>
      </QuestionSection>
      <QuestionSection question="Should I use a different rule for text to speech?">
        <p>Compare the actual voice. We have not established that synthetic narration becomes harder to understand at a particular multiplier than human narration. Pauses, pronunciation and the original pace vary within both groups. Recheck your speed when changing voice or book.</p>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> Premium has adjustable playback from 0.3x to 3.0x. The available range is a control, not a recommendation to use its extremes. For everyday listening choices, see <Link href="/blog/how-fast-should-you-listen-to-audiobooks" className="text-loudBlue hover:underline">how to choose an audiobook pace</Link>; for replaying difficult passages, see <Link href="/blog/slow-down-audiobook-speed" className="text-loudBlue hover:underline">slowing down playback</Link>.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
