import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function FinishTheBooksYouStartArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Most abandoned books are not bad books. They are books that ran into a
          busy week and never recovered. Eye-reading has a momentum problem: if
          you miss a few days, the thread breaks, and picking it back up feels
          heavier than starting something new. Listening fixes the momentum
          problem by filling the gaps.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads any
          DRM-free EPUB or PDF aloud with natural offline voices, fully
          on-device and private, your library never leaves your device. Read
          chapter three with your eyes when you have time. Listen to chapter
          four on tomorrow&apos;s walk. The book position is saved either way.
          One file, two formats, no break in continuity. The book stays alive in
          your attention because it does not depend on your eyes being available
          every day. When a busy week hits, the book keeps moving through your
          ears instead of stalling on the nightstand.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The book doesn't stop moving just because your eyes are busy. Your ears carry it."
      />

      <QuestionSection question="Why do you keep abandoning books?">
        <p>
          The honest answer for most people is not that the book was bad. It is
          that life interrupted the rhythm and the rhythm never came back. You
          read three chapters in a weekend, then work got heavy, then three days
          passed, then a week. The book is still sitting there. You still want
          to read it. But restarting from a cold stop feels like a chore, and
          starting a new book feels exciting.
        </p>
        <p>
          Eye-reading has no mechanism for bridging gaps. If your eyes are not
          on the page, the book is frozen. No progress, no forward motion, no
          reminder that the story is still waiting. The longer the gap, the
          heavier the restart. Listening breaks that cycle because the book can
          move forward through gaps your eyes cannot cover.
        </p>
      </QuestionSection>

      <QuestionSection question="How does listening prevent the gap from forming?">
        <p>
          The gap forms because eye-reading depends on uninterrupted sitting
          time. When your week does not have that, the book stalls. Listening
          does not need sitting time. It needs any time where your ears are free.
          The walk to the train. The dishes after dinner. The ten minutes
          waiting for a meeting to start.
        </p>
        <p>
          A chapter a day through any channel keeps the book alive in your
          attention. You do not need a dedicated hour. You need the story to
          keep moving forward so it stays warm in your head. Even 15 minutes of
          listening during a walk is enough to maintain continuity. The book
          that gets a chapter a day through any channel is a book that gets
          finished.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you set it up so the book never stalls?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Download{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            on your iPhone. Free, no account.
          </li>
          <li>
            Import any DRM-free EPUB or PDF. Or start with one of the 70,000+
            free Project Gutenberg classics built in.
          </li>
          <li>
            Read with your eyes when you have time. When you do not, press{" "}
            <strong>play</strong> and listen. The same book, the same position.
          </li>
          <li>
            The lock screen gives you play, pause, and 15-second skip. Your
            headphone button handles the rest. The book keeps moving regardless
            of which format you use.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What if I do not want to listen and read the same book?">
        <p>
          You do not have to commit to both for the whole book. The system works
          best when you use each format for the time it fits. Eyes for the quiet
          evening hour when you can sit still. Ears for the commute, the walk,
          the chores, the moments between. You do not need to split chapters
          evenly. You just need the book to stay in motion.
        </p>
        <p>
          Some people read the first few chapters with their eyes to get
          oriented and then switch to mostly listening for the middle stretch.
          Others listen during the week and read on weekends. The format ratio
          does not matter. What matters is that the book never goes more than a
          day or two without forward progress. Momentum is the goal, not
          methodology.
        </p>
      </QuestionSection>

      <QuestionSection question="What if the book still is not grabbing me after trying both formats?">
        <p>
          Then the book might genuinely not be for you, and that is fine.
          Listening is a tool for keeping momentum on books you want to finish,
          not a cure for books you do not enjoy. If a change of format does not
          re-engage you after a few chapters, the problem is probably the book
          itself, not the delivery method. Give it back to the library, delete
          the file, and start something that pulls you forward.
        </p>
        <p>
          The goal of the two-format approach is not to force yourself through
          books you dislike. It is to prevent books you genuinely want to read
          from dying on the nightstand because your week got busy. If the
          interest was real and the book was a victim of circumstance, listening
          bridges the gap. If the interest was never there, no format will
          create it.
        </p>
      </QuestionSection>

      <QuestionSection question="What else helps with finishing more books?">
        <p>
          A few practical habits that make the listening safety net stronger:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">One book at a time.</strong>{" "}
            Splitting attention across three books makes all three vulnerable to
            the gap. One book across two formats is easier to finish than three
            books across one.
          </li>
          <li>
            <strong className="text-gray-900">Use dead time intentionally.</strong>{" "}
            Your commute, your walk, your chores. These are the moments that
            keep the book alive when life gets busy. For the full dead-time
            strategy, see{" "}
            <Link
              href="/blog/read-more-books-by-listening"
              className="text-loudBlue hover:underline"
            >
              how to read more books by listening
            </Link>
            .
          </li>
          <li>
            <strong className="text-gray-900">Do not pressure yourself to
            finish.</strong>{" "}
            The goal is to finish books you want to finish, not to turn reading
            into another obligation. If a book is not working after an honest try
            in both formats, let it go.
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Finish the books you start"
        subline="Import any EPUB or PDF, read with your eyes, listen with your ears. One book, no gaps."
      />
    </ArticleLayout>
  );
}
