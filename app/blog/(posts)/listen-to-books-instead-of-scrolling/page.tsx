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
        <p>If you want to scroll less, try replacing one specific session with listening rather than trying to change every phone habit at once. Choose a book in advance, open it to the next passage and play it at the moment you usually open a feed. Put the screen away for a short, chosen interval. Afterwards, decide whether you enjoyed the swap and want to repeat it. This is an experiment in how you spend a few minutes, not a treatment for compulsive use or a claim that books always make you feel better than social media.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Choose the next passage before the moment you usually open a feed." />

      <QuestionSection question="Which scrolling moment should I replace?">
        <p>Choose one you can recognise: sitting on the sofa after dinner, waiting before an appointment or the first few minutes of a train journey. Avoid a slot where you are actually trying to reply to a friend or get useful information. Those activities are different from opening a feed without deciding what you want from it.</p><p>Name the replacement narrowly: “I will listen for ten minutes after dinner.” The time is an example, not a prescribed dose. It should be short enough to try without feeling trapped in the book.</p>
      </QuestionSection>

      <QuestionSection question="What can I prepare before that moment?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose one book and test the first passage. Do the catalogue browsing at another time.</li>
          <li>Download or import what you need and check your chosen voice before depending on offline playback.</li>
          <li>Make the reading app easy to find. If it helps, move the feed app away from its usual first-screen position.</li>
          <li>Choose a comfortable stopping point or interval. Decide in advance that you can stop afterwards.</li>
        </ol><p>For a DRM-free ebook, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> can generate narration on the device and continue while the iPhone screen is locked. A recorded audiobook in an app you already use is equally suitable for testing the idea.</p>
      </QuestionSection>

      <QuestionSection question="What if I keep picking up the phone?">
        <p>Notice why. If you need to check a message, pause the book and do that deliberately. If playback is hard to follow, change the book or shorten the session. If the urge is simply to reopen the feed, put the phone a little farther away and see whether you still want the chapter.</p><p>Do not try to read a feed while following the book and then judge the book by what you missed. You can choose either activity; giving each a separate slot makes it easier to tell which one you want.</p>
      </QuestionSection>

      <QuestionSection question="How do I decide whether to keep the swap?">
        <p>After a few attempts, ask three questions: Did I start without a long setup? Did I follow enough to enjoy it? Do I want to return to this book? A “no” is information about the plan, not evidence that you lack willpower.</p><p>Keep, change or abandon the slot. There is no requirement to replace all scrolling, finish every started book or expand the session each week. If the listening part is working and you want more regularity, see <Link href="/blog/how-to-build-a-reading-habit" className="text-loudBlue hover:underline">building a reading habit</Link>.</p>
      </QuestionSection>

      <QuestionSection question="Can I save a passage without getting pulled back into the screen?">
        <p>Pause and make one deliberate note, then lock the screen again. In LoudReader, notes and highlights are available without Premium; the word-following highlight is a separate playback aid. You can also jot a chapter and phrase on paper and return later.</p><p>If your actual goal is fewer minutes looking at a display, measure that separately from the urge to scroll. The <Link href="/blog/reduce-screen-time-with-audiobooks" className="text-loudBlue hover:underline">screen-time guide</Link> explains how to keep those two goals distinct.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
