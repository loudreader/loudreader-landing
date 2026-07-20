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

export default function ReadMoreBooksByListeningArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The way to read more books is not to find more reading time. It is to
          put books into time you already spend on other things. Your commute,
          your walk, your chores, your gym session. Your eyes cannot read during
          those minutes, but your ears have nothing else to do.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) turns any
          DRM-free EPUB or PDF into an audiobook with natural offline voices,
          fully on-device and private, your library never leaves your device.
          Import the book once. Press play during dead time. Lock the screen.
          Your reading volume climbs without a single extra minute carved out of
          your calendar. A 30-minute commute each way is 5 hours a week. A
          20-minute dog walk is nearly 2.5 hours. You already have the time. You
          just cannot use your eyes during it. Your ears solve that.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The books are already on your shelf. The reading time is already in your day."
      />

      <QuestionSection question="Where does the extra reading time actually come from?">
        <p>
          It does not come from anywhere new. It comes from the gaps in your day
          that are already spoken for by activities your hands and body do
          without your brain. Commuting, walking, cooking, cleaning, folding
          laundry, waiting in line, sitting in waiting rooms. These minutes are
          real and they add up fast.
        </p>
        <p>
          An honest look at a typical weekday:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>30-minute commute each way: 5 hours per week</li>
          <li>20-minute dog walk: ~2.3 hours per week</li>
          <li>30-minute dinner prep 5 nights a week: 2.5 hours per week</li>
          <li>Weekend cleaning and laundry: ~2 hours per week</li>
        </ul>
        <p>
          That is nearly 12 hours a week, or about one full audiobook, from time
          that was never going to be eye-reading time anyway. You do not need to
          find new hours. You need to put a book into the hours you already
          have.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you actually do it?">
        <p>
          The setup is simpler than the strategy sounds:
        </p>
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
            on your iPhone. Free, no account required.
          </li>
          <li>
            Import any DRM-free EPUB or PDF, or pick from the 70,000+ free
            Project Gutenberg classics built in.
          </li>
          <li>
            When a dead-time moment arrives, commute, walk, dishes, gym, press{" "}
            <strong>play</strong> and lock the screen.
          </li>
          <li>
            That is it. The book runs. The lock screen gives you play, pause,
            and 15-second skip. Your position is saved regardless of when or how
            you listen.
          </li>
        </ol>
        <p>
          You can also read with your eyes during dedicated reading time and
          switch to listening during dead time. The book in LoudReader is one
          file. Read chapter three in the evening, listen to chapter four on
          tomorrow&apos;s commute. No syncing, no position hunting.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of books are you actually going to finish this way?">
        <p>
          Narrative-driven books work best for dead-time listening. Fiction,
          memoirs, narrative non-fiction, popular history, true crime. Books
          that pull you forward with story and voice rather than demanding you
          stop, think, and re-read. The forward momentum of the book matches the
          forward momentum of the activity.
        </p>
        <p>
          Dense non-fiction, textbooks, and reference-heavy material are harder
          to absorb in short listening bursts. If your reading list is evenly
          split, the practical approach is: save the heavy stuff for{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            focused reading-and-listening sessions
          </Link>{" "}
          with the screen on and your full attention. Use dead time for the
          books that reward forward motion. Both stacks get shorter.
        </p>
      </QuestionSection>

      <QuestionSection question="Does speed matter for getting through more books?">
        <p>
          Speed is a lever you can pull, but it is optional, not required. Even
          at 1.0x, filling dead time with books adds significant volume. A
          commute, a walk, and a cooking session at normal speed are still hours
          of reading you did not have before.
        </p>
        <p>
          Some listeners nudge the speed up slightly once their ear adjusts.
          Speed control from 0.3x to 3.0x is a LoudReader Premium feature, and
          the free tier plays at normal speed. The honest recommendation: do not
          chase speed. Chase consistency. A chapter a day during dead time at
          1.0x will finish more books in a year than a sprint at 2.0x that you
          abandon after a week. For more on finding your pace, see{" "}
          <Link
            href="/blog/how-fast-should-you-listen-to-audiobooks"
            className="text-loudBlue hover:underline"
          >
            how fast should you listen to audiobooks
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Does this work with books that have no audiobook edition?">
        <p>
          This is the gap that makes the strategy work for your actual reading
          list. Most books were never recorded. Backlist titles, independent
          press books, self-published novels, technical books, the PDFs and
          EPUBs sitting in your files. They have no audiobook edition and never
          will.
        </p>
        <p>
          LoudReader reads those books aloud anyway. Import the file and press
          play. The natural offline voices narrate the text itself. There is no
          conversion step and no audio files to manage. The full walkthrough is
          in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="You already have the time. Put a book in it."
        subline="Import any EPUB or PDF and press play during dead time. Free unlimited listening, no account."
      />
    </ArticleLayout>
  );
}
