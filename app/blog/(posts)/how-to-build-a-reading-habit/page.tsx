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

export default function HowToBuildAReadingHabitArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Building a reading habit is less about willpower and more about
          lowering the barrier to start. Listening to books makes starting
          trivially easy: press play while brushing your teeth, walking to the
          car, or waiting for coffee. Stack listening onto routines you already
          have. Start small: one chapter or ten minutes per day. The habit
          forms around the repetition, not the volume.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) removes
          nearly every friction point: no account, no conversion, no word
          quotas. Import any DRM-free EPUB or PDF or pick from 70,000+ free
          classics and press play. Natural offline voices, fully on-device and
          private, your library never leaves your device. Free unlimited
          listening makes the habit cost nothing to start.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The habit forms when starting is easier than skipping."
      />

      <QuestionSection question="Why is starting so hard?">
        <p>
          Because reading asks for a lot upfront. A quiet place. Good light.
          Uninterrupted time. A book within arm's reach. Enough mental energy
          to focus on small text. That is a higher bar than most people realize,
          especially at the end of a long day. The result: you want to read,
          you intend to read, and then the evening slips away and you have read
          zero pages.
        </p>
        <p>
          Listening changes the equation. All it asks for is your ears. You can
          start a book while doing something you were going to do anyway:
          brushing your teeth, walking to the car, folding laundry. The barrier
          drops from &ldquo;set aside dedicated time&rdquo; to &ldquo;press
          play.&rdquo; That is the whole trick: make starting so easy you
          cannot talk yourself out of it.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you stack reading onto existing routines?">
        <p>
          Habit stacking is a well-known behavioral strategy: you attach a new
          habit to something you already do every day. The existing routine
          becomes the trigger, and the new habit rides along until it sticks on
          its own. For reading via audio, the best anchors are:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The morning routine.</strong>{" "}
            Press play while making coffee, brushing teeth, or getting dressed.
            You get a chapter in before the day starts competing for your
            attention.
          </li>
          <li>
            <strong className="text-gray-900">The commute.</strong> Book on as
            soon as you pull out of the driveway or step onto the train. This
            is the single biggest daily block of guaranteed listening time for
            most people.
          </li>
          <li>
            <strong className="text-gray-900">Daily chores.</strong> Cooking
            dinner, washing dishes, folding laundry. Your hands are busy but
            your mind is free. Swap the podcast for a book.
          </li>
          <li>
            <strong className="text-gray-900">Exercise and walks.</strong>{" "}
            Running, walking the dog, at the gym. Movement pairs perfectly with
            audio because the physical activity keeps you alert.
          </li>
        </ul>
        <p>
          The key is picking one anchor to start. Do not try to stack onto
          everything at once. One routine, one book, one chapter. Consistency
          beats ambition.
        </p>
      </QuestionSection>

      <QuestionSection question="How much is enough to build the habit?">
        <p>
          Way less than you think. The goal is not volume. The goal is
          repetition. Ten minutes a day, every day, builds a stronger habit
          than two hours on Sunday that never happen. Pick an amount so small
          it feels silly to skip. One chapter. Ten minutes. Five pages if
          you are reading print. The habit forms around the streak, not the
          page count.
        </p>
        <p>
          Once the daily repetition is locked in, volume takes care of itself.
          You will naturally extend sessions on days when the book has its
          hooks in you. But the foundation is the minimum viable habit, the
          thing you can do even on the worst day. Protect that floor at all
          costs.
        </p>
      </QuestionSection>

      <QuestionSection question="What if I keep falling off?">
        <p>
          The fix is usually one of two things: the habit is too big, or the
          anchor is wrong.
        </p>
        <p>
          If the habit is too big, shrink it. Thirty minutes felt like too
          much, so you skipped it. Try ten. Ten still felt like effort? Try
          five. Keep shrinking until the thought of skipping feels genuinely
          silly. &ldquo;I do not have five minutes&rdquot; is a harder
          excuse to sell yourself than &ldquo;I do not have an hour.&rdquot;
        </p>
        <p>
          If the anchor is wrong, try a different routine. Listening during
          your commute might not work if you need that time to mentally
          transition. Try attaching it to the first thing you do when you get
          home instead. Or the last thing before bed. The anchor needs to be
          automatic, something you do not decide to do, so the habit does not
          require a decision either.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader make the habit easier to start?">
        <p>
          The app is built to remove friction at every step:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">No account.</strong> You open the
            app and you are in. No sign-up, no password, no email verification.
            One less barrier between you and starting.
          </li>
          <li>
            <strong className="text-gray-900">No conversion.</strong> Import
            any DRM-free EPUB or PDF directly. No converting to audio files, no
            managing downloads. The book is the audiobook.
          </li>
          <li>
            <strong className="text-gray-900">Built-in library.</strong>{" "}
            70,000+ free Project Gutenberg classics are ready to go. If you do
            not have a book handy, pick one and start listening in seconds.
          </li>
          <li>
            <strong className="text-gray-900">Works anywhere.</strong> Natural
            offline voices run fully on-device and private, your library never
            leaves your device. No internet needed means no dead zones, no
            buffering, no excuses.
          </li>
          <li>
            <strong className="text-gray-900">Free unlimited listening.</strong>{" "}
            No word quota, no time limit, no trial that expires. You can build
            the habit over weeks and months without a meter running.
          </li>
        </ul>
        <p>
          The full picture of turning your books into audio is at{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . The quick start:{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            get LoudReader from the App Store
          </a>
          , pick a book, press play during your morning coffee. That is the
          habit. Everything else is just doing it again tomorrow.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start the habit with zero friction"
        subline="Import a book, press play, and stack it onto your morning routine. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}