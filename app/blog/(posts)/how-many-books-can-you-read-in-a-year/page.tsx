import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowManyBooksCanYouReadInAYearArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The math is straightforward: a 30-minute-each-way commute gives you
          5 hours of listening per week, about 260 hours per year. At 1x speed
          with an average book running 9 hours, that is roughly 29 books. At
          1.5x speed, your effective listening time jumps to about 390 hours,
          or roughly 43 books. Add in chores, walks, and exercise, and the
          number climbs further. This is rough math, not a promise, but it
          shows how dead time adds up.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) turns any
          DRM-free EPUB or PDF into an audiobook with natural offline voices,
          fully on-device and private, your library never leaves your device.
          Speed control from 0.3x to 3.0x is part of {PRICING.premiumMonthly}{" "}
          Premium; the free tier gives you unlimited listening at normal speed.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="260 hours a year from commuting alone. That is the math, not a stretch goal."
      />

      <QuestionSection question="How many books can you realistically listen to in a year?">
        <p>
          Let us work through the math. Start with the time you already have:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Commuting:</strong> 30 minutes
            each way, 5 days a week, 50 weeks a year (accounting for
            vacation). That is 250 hours.
          </li>
          <li>
            <strong className="text-gray-900">Chores:</strong> cooking, cleaning,
            laundry. Conservatively, 2 hours per week. Another 100 hours a year.
          </li>
          <li>
            <strong className="text-gray-900">Exercise and walks:</strong> 3
            hours per week. 150 hours a year.
          </li>
        </ul>
        <p>
          Total: 500 hours of listening time per year, from activities you are
          already doing. At an average book length of 9 hours, that is about
          55 books at 1x speed. At 1.5x, your effective time becomes 750
          hours, or about 83 books. These are rough estimates. Your actual
          numbers depend on your schedule, book lengths, and speed choices.
          But the core insight holds: most people have 1 to 2 hours of usable
          listening time every day without changing a single thing about their
          routine.
        </p>
      </QuestionSection>

      <QuestionSection question="How much does speed adjustment add?">
        <p>
          A lot. Going from 1x to 1.5x effectively gives you 50 percent more
          reading time from the same real-world minutes. A 12-hour book becomes
          an 8-hour listen. Over a year of 500 listening hours, that is the
          difference between 55 books and 83 books. The trade is comprehension,
          and the research on that is covered in our companion guide to{" "}
          <Link
            href="/blog/best-playback-speed-for-comprehension"
            className="text-loudBlue hover:underline"
          >
            best playback speed for comprehension
          </Link>
          . For light fiction and familiar non-fiction, 1.5x is a free upgrade
          that costs you almost nothing in understanding.
        </p>
      </QuestionSection>

      <QuestionSection question="Where do people actually find the time?">
        <p>
          The trick is not adding new time. It is stacking books onto time
          you already spend doing other things. Most people have 1 to 2 hours
          per day where their body is busy but their mind is underutilized:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The daily commute, whether driving or on transit</li>
          <li>Walking the dog or going for a run</li>
          <li>Cooking dinner and cleaning up after</li>
          <li>Folding laundry or doing household chores</li>
          <li>Waiting in lines, at appointments, or during errands</li>
        </ul>
        <p>
          None of these require adding anything to your day. They just require
          swapping the default (music, podcasts, silence) for a book. That
          swap is where the math works. You do not need more hours. You need
          to fill the hours you already have.
        </p>
      </QuestionSection>

      <QuestionSection question="Is a book a week actually realistic?">
        <p>
          Math-wise, yes. A typical novel runs 8 to 12 audio hours. Nine hours
          per week of listening gets you there. That is a 30-minute-each-way
          commute plus one hour of weekend chores or walking. If you listen at
          1.5x, a 9-hour book becomes 6 hours, and you only need 6 hours of
          listening per week.
        </p>
        <p>
          The harder part is not the math. It is finding books that hold your
          attention, avoiding the temptation to scroll instead, and building
          the habit. But the time is there, waiting to be filled. A book a
          week is less about ambition and more about swapping audio sources.
        </p>
      </QuestionSection>

      <QuestionSection question="What about the books that have no audiobook edition?">
        <p>
          The math above assumes every book you want exists as an audiobook.
          It does not. Most books ever written were never recorded, including
          backlist titles, niche non-fiction, self-published works, and the
          EPUBs and PDFs already on your hard drive. A text-to-speech reader
          like LoudReader closes that gap entirely. Import any DRM-free EPUB
          or PDF and press play. Natural offline voices narrate it from start
          to finish, fully on-device and private, your library never leaves
          your device. Your entire library becomes available for your 500
          annual hours, not just the fraction that got a studio recording.
        </p>
        <p>
          The full walkthrough is in{" "}
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
        headline="Your commute is hundreds of books waiting to happen"
        subline="Natural offline voices, speed control, and unlimited free listening. Fill the time you already have."
      />
    </ArticleLayout>
  );
}