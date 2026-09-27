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

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>To return to a book, first work out why you stopped. Lack of time needs a smaller reading slot; a lost thread may need a brief reread; difficult material may need slower, focused sessions; a book you no longer enjoy may not need finishing at all. Audio is one option for making the next session easier, not a cure for every unfinished book. Choose a manageable next step and leave yourself a clear place to restart.</p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Leave a clear next step, whether you return by page or by audio." />
      <QuestionSection question="Why did this particular book stall?"><p>Avoid treating every unfinished book as a failure of discipline. Check the last chapter you remember. Were you interested but interrupted, struggling with references, or simply bored? Those are different problems.</p><ul className="list-disc pl-6 space-y-2"><li>Interrupted: reserve one short session and resume near the last passage you recall.</li><li>Lost: reread a summary you wrote or a few previous pages; avoid plot summaries if you do not want spoilers.</li><li>Overloaded: choose a shorter section and keep the text visible.</li><li>Uninterested: set the book aside, or decide on one final chapter before choosing.</li></ul><p>There is no need to diagnose yourself from a reading habit. This is a way to choose the next action for one book.</p></QuestionSection>
      <QuestionSection question="How can you make restarting easier?"><p>End a session with a small marker: a chapter heading, a note about what happened, or a question you want answered. The next time you open it, you will have a starting point rather than a vague obligation to “read more”.</p><p>Keep the file or physical book easy to reach. A ten-minute session is an option, not a minimum that must happen every day. Missing a day does not require starting the book again.</p></QuestionSection>
      <QuestionSection question="When is switching to audio worth trying?"><p>Try it when you still want the book but have a better opportunity to listen than to sit with the page. A passenger journey or a familiar chore may provide that opportunity. If the text is dense or you keep missing details, return to a quiet reading session.</p><p>For your own supported DRM-free EPUB or PDF, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> provides text and narration in the same app. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. Prepare the file and voice before going offline. This avoids matching two separate editions, but it is not a promise of automatic progress synchronisation across devices.</p></QuestionSection>
      <QuestionSection question="What does a realistic two-format routine look like?"><ol className="list-decimal pl-6 space-y-2"><li>Choose the next section, rather than a deadline for the entire book.</li><li>Read or listen where it fits; keep the chapter heading as your reference.</li><li>Pause audio for interruptions instead of letting missed passages accumulate.</li><li>Leave a note for the next session. Notes and highlights in LoudReader are free.</li><li>If the book is still not working, decide whether to slow down, postpone it or stop.</li></ol><p>A sleep timer can limit a bedtime session, but it cannot know when you fell asleep or which sentence you understood. LoudReader’s timer is Premium. If you use it, check your place when you return.</p></QuestionSection>
      <QuestionSection question="Should you force yourself to finish?"><p>Only you can decide whether finishing serves your purpose. A required text may call for a different plan from a leisure novel. For leisure reading, putting a book aside leaves room for another one; you do not have to prove that it is a bad book.</p><p>For a broader routine, see <Link href="/blog/read-more-books-by-listening" className="text-loudBlue hover:underline">fitting listening into your reading</Link>. Use it to support the books you want to spend time with, not to create another daily score.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try listening to the next chapter" subline="Use the format that helps you return to a book you want to finish." />
    </ArticleLayout>
  );
}
