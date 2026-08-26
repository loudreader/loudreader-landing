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

export default function AudiobooksForBusyParentsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Parenting does not leave two-hour reading sessions. It leaves
          fragments: the 20 minutes while dinner cooks, the stroller walk to
          the park, the dark room where a baby is falling asleep on your
          chest. Text-to-speech turns those fragments into reading time.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads any
          DRM-free EPUB or PDF aloud with natural offline voices, so you can
          listen to the book you actually want during the chaos of the day.
          One earbud in, one ear free for kid sounds. It is fully on-device
          and private, your library never leaves your device, and playback
          continues with the screen locked. The free tier gives unlimited
          listening with no account. Speed control (0.3x to 3.0x), a sleep
          timer, and ambient soundscapes are Premium. This is not about
          finding time. It is about borrowing time from the activities where
          your hands are busy but your mind is free.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="drive"
        caption="One earbud, one free ear, and a chapter gets through. The book lives in the margins."
      />

      <QuestionSection question="Where does reading time actually come from when you have kids?">
        <p>
          It does not come from a quiet hour in the armchair. That hour
          stopped existing somewhere around the first night feed. Reading
          time comes from the cracks: the dishwasher cycle, the stroller
          walk, the nursing session, the drive to daycare, the five minutes
          while the pasta water boils. None of those cracks are long enough
          to sit down with a book. All of them are long enough to listen.
        </p>
        <p>
          The math is better than it seems. Six 10-minute listening sessions
          scattered through the day is an hour of reading. That is a chapter
          of most novels. Over a week, it is a book. Over a year, it is more
          books than most childless adults read. The trick is not finding a
          big block of time. It is recognizing that the small blocks are
          already there and putting a book in your ears during them.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you actually listen while parenting?">
        <p>
          The practical setup that most parents land on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">One earbud only.</strong>{" "}
            One ear gets the book, one ear stays open for kid sounds. Enable
            mono audio in iOS settings so both channels route to the single
            earbud and you do not miss half the narration.
          </li>
          <li>
            <strong className="text-gray-900">Lock-screen controls.</strong>{" "}
            You cannot use your phone while holding a baby. The lock
            screen gives you play, pause, and 15-second skip, which is all
            the control you need.
          </li>
          <li>
            <strong className="text-gray-900">Screen off.</strong>{" "}
            Playback continues with the screen locked, so a dark nursery
            stays dark and your phone stays in your pocket.
          </li>
          <li>
            <strong className="text-gray-900">Place memory.</strong>{" "}
            LoudReader remembers exactly where you stopped in every book,
            even if you paused mid-sentence three days ago. When the toddler
            interrupts, you lose nothing.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What books work best for fragmented listening?">
        <p>
          Plot-driven books work best. Thrillers, mysteries, romance, and
          page-turners survive interruption well because the forward momentum
          pulls you back in quickly. Dense literary fiction where every
          sentence carries structural weight is harder: you lose more when
          you pause mid-paragraph, and re-entry takes longer.
        </p>
        <p>
          Nonfiction splits the difference. Narrative nonfiction (biography,
          history, popular science) works nearly as well as fiction. Reference
          and how-to books are harder because they assume you are taking
          notes or following a sequence. Your parenting life already has
          enough instruction manuals. The books you listen to should be the
          ones you read for the pleasure of it.
        </p>
      </QuestionSection>

      <QuestionSection question="What if the book I want has no audiobook?">
        <p>
          This is the gap text-to-speech was built for. Most books were never
          recorded as audiobooks, and the ones that were tend to be
          bestsellers. If you want to read a midlist novel, a backlist title,
          a self-published book, or something you already own as an EPUB,
          there is no audiobook edition to buy.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          fills that gap. Import the EPUB or PDF, press play, and natural
          offline voices read it aloud on the spot. No conversion, no wait,
          no recording studio. The book you already own becomes the audiobook
          you need. The full process is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          , but the short version is: import, play, done.
        </p>
      </QuestionSection>

      <QuestionSection question="What about night feeds and bedtime?">
        <p>
          Night feeds are prime listening time. The room is dark, the baby is
          eating, and you are stationary for 20 to 40 minutes with nothing to
          do but hold still. One earbud, one book, and the feed becomes
          reading time instead of waiting time.
        </p>
        <p>
          For bedtime listening after the kids are down, the sleep timer
          (Premium) matters. Set it for 30 or 60 minutes, and the narration
          fades out on its own. If you fall asleep before it stops, you wake
          up with your place preserved at the timer cutoff instead of three
          chapters ahead. We covered the bedtime use case in more detail in{" "}
          <Link
            href="/blog/fall-asleep-to-audiobooks"
            className="text-loudBlue hover:underline"
          >
            fall asleep to audiobooks
          </Link>
          .
        </p>
        <p>
          Ambient soundscapes (also Premium) add white noise or rain behind
          the narration. This can mask the ambient kid sounds that would
          otherwise pull your attention during a sleepy listening session.
          The combination of voice, timer, and soundscape is a small luxury
          that makes a big difference at the end of a long parenting day.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I listen in the car during the school run?">
        <p>
          Yes, and the drive is one of the most reliable reading slots for
          parents. Drop-off, pick-up, and the commute in between are
          predictable daily pockets where you are alone in the car. Connect
          your phone to the car audio the way you would for music or
          podcasts, and the book plays through the speakers. Set everything
          up before you drive and control playback from the lock screen or
          steering-wheel buttons.
        </p>
        <p>
          We covered the car setup in detail in{" "}
          <Link
            href="/blog/listen-to-books-while-driving"
            className="text-loudBlue hover:underline"
          >
            listen to books while driving
          </Link>
          , including the safety rules that keep the focus on the road. The
          short version: setup before you turn the key, lock-screen controls
          only while moving.
        </p>
      </QuestionSection>

      <QuestionSection question="What speed should I use for distracted listening?">
        <p>
          Slightly slower than your focused listening speed. If you normally
          listen at 1.5x at your desk, try 1.1x to 1.3x when you are also
          doing dishes or pushing a stroller. Divided attention means you need
          a pace that absorbs without effort. For late-night sessions when
          you are tired, 0.9x to 1.0x can be more comfortable than pushing
          for speed.
        </p>
        <p>
          In LoudReader, speed control from 0.3x to 3.0x is a Premium
          feature; the free tier plays at normal speed. The full range is
          useful because a busy parent switches between modes: faster during
          a solo drive, slower during a distracted kitchen session, normal
          during a rare quiet moment.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read in the cracks of the day"
        subline="Import any book and listen during dishes, stroller walks, and night feeds. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
