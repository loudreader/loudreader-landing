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
        <p>Listening can reduce the time you spend looking at a display if it replaces reading or scrolling with the screen off. Adding audio while continuing to use another screen does not make that swap. Choose one session, prepare the book, lock the phone and see whether you can leave it alone for the interval you intended. Count setup, notes and other devices honestly if you track the result. This guide is about how you spend screen time, not a claim that audio improves eye health, sleep or concentration.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Measure the session you changed, including the moments you look back." />

      <QuestionSection question="Which screen-time goal am I trying to change?">
        <p>“Less phone use”, “fewer interruptions” and “a break from looking at a display” are related but different goals. Listening while browsing a laptop might reduce phone use without reducing time looking at screens. A silent paperback may suit a display break just as well.</p><p>Pick one observable aim, such as putting the phone down during a particular reading session. You do not need to label all screen use as bad or all audio time as good to make that choice.</p>
      </QuestionSection>

      <QuestionSection question="How do I set up a session with the screen locked?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Select the book and starting passage in advance. Finish downloads and voice setup before the session.</li>
          <li>Press play and lock the phone. Check once that playback continues through your chosen speaker or headphones.</li>
          <li>Put the device somewhere convenient for listening but not automatically in your hand.</li>
          <li>If you need to look at a diagram or make a note, pause and do it deliberately, then decide whether to resume with the screen locked.</li>
        </ol><p>On iPhone, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> supports background narration and system playback controls. A locked phone can still show notifications or an always-on display depending on your device settings; locking it is not a promise that the display stays dark in every configuration.</p>
      </QuestionSection>

      <QuestionSection question="How can I tell whether the change worked?">
        <p>Compare the particular session you meant to change. Did you look at a screen less, keep picking it up, or move to another device? Use your device’s activity summary if helpful, but combine it with what actually happened rather than treating one app’s total as the whole story.</p><p>For example, replacing a 20-minute ebook session with 15 minutes of listening and five minutes of on-screen notes changes that session; it does not prove a 20-minute reduction in your whole day. Keep the example separate from a promised outcome.</p>
      </QuestionSection>

      <QuestionSection question="Can I still follow difficult passages on screen?">
        <p>Yes. A screen-time goal need not prohibit useful reading. Keep visual sections—tables, maps, illustrations, unfamiliar spellings—for times when you want to look at them. In a TTS reader, you can return to the same text instead of hunting through a separate audio edition.</p><p>The <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">read-and-listen guide</Link> covers sessions where seeing the text is the point. If the main difficulty is automatically reopening a feed, <Link href="/blog/listen-to-books-instead-of-scrolling" className="text-loudBlue hover:underline">try one planned scrolling swap</Link> rather than measuring only reading-app minutes.</p>
      </QuestionSection>

      <QuestionSection question="What about an evening screen break?">
        <p>Prepare the session before settling down, choose audio you are content to stop and keep the display out of the routine. If you expect to drift off, a timer can limit how far playback continues; LoudReader’s timer is Premium. See <Link href="/blog/fall-asleep-to-audiobooks" className="text-loudBlue hover:underline">the bedtime listening setup</Link>.</p><p>Do not force an extra chapter because it is now screen-free. If you want to stop reading, stop. The useful outcome is a routine that suits your goal, not replacing one compulsory activity with another.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
