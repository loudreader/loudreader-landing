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
        <p>To start reading more regularly, choose one book you want to return to and one realistic moment to open it. Make the first session small enough to try today: a few pages or five minutes of listening. Prepare the book beforehand, then review after a week whether the moment, format and book suited you. This is a practical experiment, not a guaranteed habit formula or a fixed number of days to success. Audio can help when looking at a page is inconvenient, but it still takes attention, and a quiet break is sometimes what you need instead.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="One book, one occasion, then a small adjustment." />

      <QuestionSection question="What should I choose before day one?">
        <p>Pick a book for interest, not because it looks like the book a regular reader ought to choose. Keep a longer wish list elsewhere. Your active choice should be obvious when the moment arrives, so that starting does not require another search.</p><p>Choose the format you can use comfortably. Print, an ebook and audio are all options. If you want to try audio, sample the voice and confirm you can access the whole book before building a routine around it.</p>
      </QuestionSection>

      <QuestionSection question="How do I choose a moment that can repeat?">
        <p>Write a concrete plan such as “after lunch, before I open messages, I will read for five minutes” or “while folding the clean laundry, I will play the next part”. It is easier to test a specific occasion than an intention to read more sometime this week.</p><ul className="list-disc pl-6 space-y-2">
          <li>Use a moment that actually exists in your current week.</li>
          <li>Leave demanding tasks, conversations and anything needing full attention free of narration.</li>
          <li>Prepare downloads and playback before a journey; set up a car session while safely parked.</li>
          <li>Allow the session to end at the small amount you chose. Continuing is optional.</li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What should I track?">
        <p>For the first week, a simple mark for “tried it” is enough. Add one short note if useful: enjoyed it, too noisy, wrong time, or wanted to keep going. You are testing whether the plan fits, not creating a score for how disciplined you were.</p><p>A long session on Saturday can be worthwhile even if weekday sessions did not happen. There is no need to protect a streak at the cost of sleep, work or enjoyment.</p>
      </QuestionSection>

      <QuestionSection question="What if I miss several days?">
        <p>Look for a specific obstacle before making the goal smaller by default. Was the file not downloaded? Did the chosen moment disappear? Was the book difficult to resume? Did you actually want quiet? Each calls for a different change.</p><p>Try one adjustment for the next week: prepare the file, move the slot, choose shorter chapters, change the book, or read less often. A routine can be useful without happening every day. Do not turn a missed session into a backlog to repay.</p>
      </QuestionSection>

      <QuestionSection question="How can listening fit without becoming another project?">
        <p>Use the player you already have if it does the job. For your own DRM-free EPUB or PDF, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> can combine text and local narration in one app. Open a sample, test the voice, lock the screen and confirm you can resume before the first planned session.</p><p>Try every available voice for your first 8 hours of listening. Afterwards, a free English voice selection remains available with unlimited book listening. If audio is the format you prefer, <Link href="/blog/read-more-books-by-listening" className="text-loudBlue hover:underline">planning a small listening queue</Link> covers the next step. If your main obstacle is an automatic reach for a feed, try <Link href="/blog/listen-to-books-instead-of-scrolling" className="text-loudBlue hover:underline">replacing one scrolling slot</Link> instead of changing your whole day.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
