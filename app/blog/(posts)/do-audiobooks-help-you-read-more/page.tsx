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
      <Tldr><p>Audiobooks can give you another time and place to engage with a book: a quiet walk, a train journey or a familiar household task. Whether that leads to more reading depends on your attention, the material and whether you enjoy the habit. Adding playback minutes is not the same as finishing or understanding more books. Try one regular slot for a week, notice what you remember, and keep it only if it helps. You do not need to turn every spare minute into a reading target.</p></Tldr>
      <ArticleIllustration variant="devices" caption="Try one listening slot and see whether it helps your reading." />
      <QuestionSection question="What does “more reading” mean for you?"><p>Choose a useful measure before changing your routine. You might want to finish a novel you keep putting down, spend more time with books, or understand one difficult chapter. Book count alone treats a short story and a long history as equal, so it may not reflect your goal.</p><p>Write down the goal in ordinary terms: “I want to enjoy twenty minutes with this book on the train.” That is easier to evaluate than a promise to become a fifty-book-a-year reader.</p></QuestionSection>
      <QuestionSection question="Where could a listening session fit?"><p>Pick a slot where you can pause freely. A passenger journey or folding laundry may work; a new recipe, navigation or a demanding task may compete with the text. If you repeatedly lose the thread, change the activity, the book or the pace.</p><p>For illustration, twenty minutes on five days gives you one hour and forty minutes a week. That is potential listening time, before pauses and missed days. It is not a prediction of how many books you will finish. Our <Link href="/blog/how-many-books-can-you-read-in-a-year" className="text-loudBlue hover:underline">listening-time calculation guide</Link> shows how to make your own estimate.</p></QuestionSection>
      <QuestionSection question="How can you tell whether you are following the book?"><p>At a natural stopping point, try describing what just happened or the main point in a sentence. If you cannot, go back without treating it as a failure. Some chapters need a quieter setting or the text in front of you.</p><p>This is a practical self-check, not a comprehension test. We are not claiming that audio and print produce identical learning outcomes or that listening trains your attention. Your experience with this book matters more than a general slogan.</p></QuestionSection>
      <QuestionSection question="Can you alternate between listening and reading?"><p>Yes, when your tools and editions support it. In a TTS reader, the displayed text and narration come from the same imported file. In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, a supported EPUB or PDF can be read and heard in one app. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs.</p><p>With a separately purchased audiobook and ebook, chapter divisions and translations may differ. Keep a chapter title or short note as a reference instead of assuming the two copies synchronise.</p></QuestionSection>
      <QuestionSection question="What should you try this week?"><ol className="list-decimal pl-6 space-y-2"><li>Choose one book you want to spend time with, not one you feel obliged to count.</li><li>Prepare its download or local voice resources before your listening slot.</li><li>Try a short session at a comfortable speed.</li><li>Pause when the surroundings or task need your attention.</li><li>At the end of the week, decide whether the habit added enjoyment, understanding or useful continuity.</li></ol><p>If you use LoudReader for your own files, once the book and required voice resources are available on the device, narration works offline. downloads and web imports still need a connection.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Add a listening option to your reading" subline="Use a supported ebook and try a short session at your own pace." />
    </ArticleLayout>
  );
}
