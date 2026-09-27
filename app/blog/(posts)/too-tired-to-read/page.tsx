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
        <p>If you want the story but do not want to look at a page, try a short listening session. If following words in any form feels like work, stop and return later. Being too tired to read does not have one explanation, and audio does not remove the need for attention or rest. A reader that can narrate the same ebook makes switching convenient: find the current passage, press play and put the screen away. Keep the session optional, and do not mistake a saved playback position for a record of everything you understood.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Try a different format if you want it. Leave the book for tomorrow if you do not." />

      <QuestionSection question="Do I want a different format, or do I want to stop?">
        <p>Ask that before installing or configuring anything. If you are interested in the next scene but tired of holding a book or looking at a display, audio may be worth a brief try. If you keep losing the thread or do not want more information, another format may not be what you need.</p><p>This is a choice about an evening routine, not a diagnosis of why you are tired. There is no need to explain it as a failure of your eyes, motivation or discipline.</p>
      </QuestionSection>

      <QuestionSection question="How can I try listening without committing to another chapter?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose a passage you recognise and a short stopping point.</li>
          <li>Use a familiar voice or recording rather than spending the evening comparing settings.</li>
          <li>Listen for a few minutes with the screen away. Check whether you actually want to continue.</li>
          <li>Pause when you stop following it. If you return tomorrow, rewind to the last part you remember.</li>
        </ol><p>A familiar book can be easier to leave unfinished, but you can choose any book that suits you. The experiment is allowed to end with switching the audio off.</p>
      </QuestionSection>

      <QuestionSection question="Can I use the same ebook rather than buy another edition?">
        <p>Yes, if you have a supported DRM-free copy. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> narrates the imported EPUB or PDF shown in its reader. Check the current passage, press play and confirm the first sentence before locking the screen. The narration and displayed text come from the same import.</p><p>An import is not a promise of perfect layout or pronunciation. Test a new PDF before relying on it for a quiet session. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook listening guide</Link> explains the setup.</p>
      </QuestionSection>

      <QuestionSection question="What if I expect to fall asleep?">
        <p>Use a timer if your player provides one. LoudReader’s Premium timer offers 15, 30 or 60 minutes and pauses playback at the cutoff. It does not detect sleep or preserve the last sentence you heard, so you may need to replay some of the interval.</p><p>You can also choose to stop now and leave the book ready for tomorrow. The <Link href="/blog/fall-asleep-to-audiobooks" className="text-loudBlue hover:underline">bedtime listening guide</Link> focuses on managing that setup rather than promising a sleep effect.</p>
      </QuestionSection>

      <QuestionSection question="What if I still prefer looking at the page?">
        <p>Choose the format and surroundings you find comfortable, or read at another time. You can keep a demanding book for a more attentive session and a short, familiar one for an evening when you want something lighter. That is a reading preference, not a lesser version of the habit.</p><p>If the goal is specifically to spend less time looking at a device, see <Link href="/blog/reduce-screen-time-with-audiobooks" className="text-loudBlue hover:underline">the screen-off session guide</Link>. If the goal is more regular reading, choose a time when you want to read rather than making the last minutes before sleep carry the whole plan.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
