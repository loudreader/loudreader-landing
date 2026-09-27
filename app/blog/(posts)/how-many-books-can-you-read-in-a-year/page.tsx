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
      <Tldr><p>Estimate from your own schedule, not an “average reader” target. Multiply usable listening minutes per week by the number of weeks you expect to listen, divide by sixty, then compare that time with the lengths of your chosen books. Playback speed changes the arithmetic, while pauses, rereading and missed sessions reduce the result. For example, 100 minutes a week over 46 weeks is about 77 hours. If the books you choose each take ten hours, that is capacity for roughly seven complete books, with time left over—not a promise.</p></Tldr>
      <ArticleIllustration variant="devices" caption="Use your own minutes, weeks and book lengths." />
      <QuestionSection question="How do you find a realistic weekly number?"><p>For one ordinary week, note when you actually listened and for how long. Include only time when you could follow the book. Do not count a full commute if half of it involved transfers, conversations or navigation. Avoid counting the same half-hour under both walking and commuting.</p><p>Use that total as a starting point, then choose how many weeks to plan for. Holidays, illness, deadlines and changing interests are normal. A plan with spare time is more useful than one requiring a perfect year.</p></QuestionSection>
      <QuestionSection question="What is the calculation?"><p><strong>Annual hours = minutes per week × listening weeks ÷ 60.</strong> Then divide those hours by the normal-speed duration of the books you intend to read. For a mixed list, add their actual durations rather than assuming that every book has the same length.</p><ul className="list-disc pl-6 space-y-2"><li>100 minutes × 46 weeks ÷ 60 = 76.7 hours.</li><li>At ten hours per selected book, 76.7 ÷ 10 = 7.67 book-lengths.</li><li>At twenty hours per selected book, the same time is only 3.83 book-lengths.</li></ul><p>These ten- and twenty-hour lengths are chosen examples, not measured averages. Count complete books separately from spare hours, and leave room for repeating a chapter.</p></QuestionSection>
      <QuestionSection question="How does playback speed change the estimate?"><p>For a fixed recording, listening time is approximately its listed duration divided by the speed multiplier. A twelve-hour recording at 1.5× takes eight hours before pauses. The reverse calculation is available time multiplied by speed, then divided by the book’s normal duration.</p><p>A higher speed does not guarantee that you understand the same amount in less time. If you pause and rewind more, the saving may disappear. TTS duration also varies with the voice and how the text is spoken, so a catalogue estimate is only a guide.</p></QuestionSection>
      <QuestionSection question="What would a book a week require?"><p>First choose what “a book” means in this plan. One ten-hour book each week would require ten hours weekly at normal speed. A five-hour commute plus two one-hour weekend sessions totals seven hours, not ten. Choose shorter books, allow more time or set a lower target.</p><p>Short stories, poetry and long novels all deserve a place without becoming a contest over counts. You might prefer a minutes-per-week target or a list of a few books you care about finishing.</p></QuestionSection>
      <QuestionSection question="How can you use this without turning reading into work?"><p>Review the estimate after a month. If you enjoyed the books but finished fewer than planned, adjust the plan. If you were playing audio without following it, reduce the pace or find a quieter slot. For practical habits, see <Link href="/blog/do-audiobooks-help-you-read-more" className="text-loudBlue hover:underline">whether audio helps you read more</Link>.</p><p>For supported ebooks in <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, speed control from 0.3× to 3× is Premium. Use your real listening experience, not the maximum setting, in the calculation.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Make room for the books you choose" subline="Try a manageable session before setting an annual target." />
    </ArticleLayout>
  );
}
