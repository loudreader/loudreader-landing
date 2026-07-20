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

export default function ListenToBooksWhileCleaningArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Cleaning takes up real hours every week and demands almost nothing
          from your brain. That makes it perfect audiobook territory. Your
          hands scrub, fold, sweep, and wipe while your ears get through a
          chapter or three.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices. It is fully
          on-device and private, your library never leaves your device, so
          playback keeps going through every room in the house, including the
          basement with no signal. The lock screen and your headphone button
          handle pause and resume, which means you can stop the book with wet
          hands without touching your phone. Chores become something you almost
          look forward to.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Folding laundry is reading time. The phone sits locked on the dresser."
      />

      <QuestionSection question="Why pair audiobooks with chores?">
        <p>
          Chores and books solve each other&apos;s problem. The problem with
          chores is that they are boring; the problem with reading is that it
          needs time you do not have. Pair them and boredom vanishes while
          reading volume climbs.
        </p>
        <p>
          The math is better than you think. A weekly cleaning session of two
          hours is two hours of audiobook time. At normal speed, that is roughly
          a quarter of a typical novel. Over a month, you finish a book doing
          something you were going to do anyway. The chores did not get longer.
          Your reading simply moved into time your eyes could never use.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the best setup for cleaning and listening?">
        <p>
          A Bluetooth speaker on a shelf or counter is the right tool for most
          cleaning. It fills the room and you do not wear anything in your ears,
          which is helpful when you are moving between rooms, reaching into
          cabinets, or working with water. Earbuds or headphones work too, but a
          speaker makes the audio ambient rather than tethered.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
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
            Import any DRM-free EPUB or PDF, or pick a free classic from the
            70,000+ built-in Project Gutenberg library.
          </li>
          <li>
            Connect to a Bluetooth speaker, press <strong>play</strong>, lock
            the screen, and leave the phone on a counter or charger.
          </li>
          <li>
            Start cleaning. The book plays from the speaker, and your headphone
            or speaker button pauses it when you run the vacuum or need a
            moment of quiet.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="How do you handle the noisy parts of cleaning?">
        <p>
          Vacuuming, blending, and running water are loud enough to drown out a
          speaker. The practical solution has two parts:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Pause the book.</strong> Tap your
            headphone or speaker button before you start the noisy task. The
            book pauses exactly where it was. No hunting for your place later.
          </li>
          <li>
            <strong className="text-gray-900">Group noisy tasks together.</strong>{" "}
            Do all the vacuuming at once, all the blending at once, all the
            scrubbing at once. That way you pause once, do the loud stuff, and
            resume for the rest of the session.
          </li>
        </ul>
        <p>
          If you use earbuds with active noise cancelling instead of a speaker,
          the vacuum problem largely disappears. The narration cuts through. But
          noise cancelling while home alone has its own trade-offs. You may not
          hear the doorbell or a timer going off in the kitchen.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of books work best while cleaning?">
        <p>
          The same books that work on a walk or a run. Narrative-driven fiction
          and story-driven non-fiction. Memoirs, popular history, true crime,
          thrillers, and any book where the plot pulls you forward without
          requiring you to stop and think through a complex argument.
        </p>
        <p>
          Reference books, textbooks, and anything that expects you to flip
          back, check footnotes, or study diagrams are poor cleaning companions.
          Your hands are occupied and your attention is split. Save those for{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            focused reading-and-listening sessions
          </Link>{" "}
          and use chore time for the books that reward momentum. For a deeper
          look at fitting listening into your routine,{" "}
          <Link
            href="/blog/read-more-books-by-listening"
            className="text-loudBlue hover:underline"
          >
            how to read more books by listening
          </Link>{" "}
          covers the strategy end to end.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Chores plus chapters, zero schedule math"
        subline="Import any EPUB or PDF, connect a speaker, and clean. Free unlimited listening, no account."
      />
    </ArticleLayout>
  );
}
