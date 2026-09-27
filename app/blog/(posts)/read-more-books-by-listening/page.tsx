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
        <p>Listening can give you another place for books in your week, but it does not turn every spare minute into usable attention. Plan one or two suitable sessions, keep a small queue and choose a book you can follow in those settings. Use the time actually available to estimate progress, then leave room for interruptions and replays. A short enjoyable book counts; a demanding book may deserve much longer. If you already read regularly, audio can complement that routine rather than replace it or push you towards a larger annual total.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="A small queue and realistic sessions beat an imaginary timetable." />

      <QuestionSection question="How much listening time do I actually have?">
        <p>Start with last week rather than an ideal timetable. Which moments were both available and suitable for following a book? Quiet household tasks or public transport may work. Conversations, demanding work and times when you wanted silence should not be counted automatically.</p><p>For illustration, four 20-minute sessions add up to 80 minutes. A recording with eight hours remaining would take six such weeks if every minute were used once. Pauses, missed sessions and re-listening change that estimate. This is arithmetic for planning, not a prediction about a “typical novel”.</p>
      </QuestionSection>

      <QuestionSection question="What should be in my active queue?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>One current listening book:</strong> something you want to resume without another decision.</li>
          <li><strong>One possible next book:</strong> sampled and accessible, so finishing does not require a long search.</li>
          <li><strong>A separate focused-reading choice if needed:</strong> for diagrams, dense arguments or material you want to annotate carefully.</li>
        </ul><p>Keep the rest in a wish list. A huge active queue can make every session a selection task. You can abandon or pause a book without replacing it immediately.</p>
      </QuestionSection>

      <QuestionSection question="How do I combine eyes and ears in the same book?">
        <p>A reader that narrates its own text avoids switching between two editions. In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, you can read an imported EPUB or PDF and then play from the reader’s current passage. Check the starting sentence when switching modes so that you resume where you intend.</p><p>This is a same-device workflow. LoudReader does not automatically sync your library or reading position between devices. If you move a copy to another device, note the chapter and a distinctive phrase yourself.</p>
      </QuestionSection>

      <QuestionSection question="Should I increase playback speed?">
        <p>Only if you prefer the result. Try a short passage and check whether you can still follow it without repeatedly rewinding. There is no required speed for finishing more books, and the right pace can change with the material and setting.</p><p>LoudReader’s adjustable playback speed is Premium. Ordinary book listening remains available free with a limited English voice selection after the first 8 hours of available-voice listening. See <Link href="/blog/how-fast-should-you-listen-to-audiobooks" className="text-loudBlue hover:underline">choosing a listening pace</Link> for a more focused approach.</p>
      </QuestionSection>

      <QuestionSection question="How do I avoid a queue that becomes another obligation?">
        <p>Review it occasionally. Remove books you no longer want to read, separate titles needed for a deadline from leisure choices and stop counting a half-heard session as progress you have to preserve. Replaying something interesting is still time well spent.</p><p>If you are starting from no regular sessions, the <Link href="/blog/how-to-build-a-reading-habit" className="text-loudBlue hover:underline">small reading-habit experiment</Link> comes first. If a particular ebook has no recording you want, <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">TTS can provide a listening route</Link> for a supported DRM-free copy. The aim is access to books you value, not a competition with your previous total.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
