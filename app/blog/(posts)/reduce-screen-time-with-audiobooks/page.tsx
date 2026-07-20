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

export default function ReduceScreenTimeWithAudiobooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If reading is part of your screen time, switching from eyes to ears
          cuts that block to zero. The same chapter, the same book, but the
          screen is off and locked the entire time.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices. It is fully
          on-device and private, your library never leaves your device. Press
          play, lock the screen, and listen. The lock screen shows play, pause,
          and 15-second skip, so you control playback without opening the phone.
          The best move: read with your eyes when your screen budget allows, and
          switch to listening when it does not. One book, one saved position, no
          progress lost. Your eyes get a break and the chapter keeps moving.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Same book, screen off. Your eyes rest while the chapter continues."
      />

      <QuestionSection question="Why swap reading off a screen?">
        <p>
          Reading on a phone, tablet, or laptop is still screen time. It may be
          a better use of screen time than scrolling a feed, but your eyes are
          still staring at a backlit display doing close-up focus work. If you
          are trying to reduce total screen hours for eye comfort, sleep
          quality, or just the mental weight of being on a device all day,
          reading is a block you can move off the screen without giving up the
          material.
        </p>
        <p>
          The swap is simpler than most screen-time changes because you do not
          lose the content. The same chapter, the same argument, the same story.
          It enters through your ears instead of your eyes. The screen is off.
          The phone can sit across the room. The book is still being read.
        </p>
      </QuestionSection>

      <QuestionSection question="How does listening with the screen off actually work?">
        <p>
          It is a three-step habit, not a technical hurdle:
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
            on your iPhone. Free, no account.
          </li>
          <li>
            Import any DRM-free EPUB or PDF, or pick a free classic from the
            70,000+ built-in Project Gutenberg library.
          </li>
          <li>
            Press <strong>play</strong>, lock the screen, and put the phone
            down. The narration runs with the screen locked and off. The lock
            screen shows basic controls if you need them.
          </li>
        </ol>
        <p>
          There is no streaming and no cloud dependency. The voices run locally
          on your device, and the app is fully on-device and private, your
          library never leaves your device. Screen-off playback is not a power
          user feature. It is the default.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you read with your eyes and then switch to listening?">
        <p>
          Yes, and this is the version of screen-time reduction that gives you
          the best of both approaches. Use your screen-time reading budget during
          the day or early evening. Read with your eyes while the screen budget
          is available. When it runs out, or when your eyes are done focusing,
          press play and listen with the screen locked.
        </p>
        <p>
          The book you read and the book that is narrated are the same imported
          file in LoudReader. Position is saved regardless of which mode you
          last used. Read chapter three with your eyes. Listen to chapter four
          with the screen off. No syncing step, no two-edition problem.
        </p>
        <p>
          For more on this dual-mode approach, see{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            how to read and listen at the same time
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Does listening also reduce screen time for other activities?">
        <p>
          Indirectly, yes, and this is the bonus most people do not expect.
          Putting a book on while you cook, clean, fold laundry, or walk means
          your phone is playing audio with the screen locked and off. Your hands
          are busy with something non-screen. The phone is not in your hand. You
          cannot absentmindedly open a feed while it is across the room narrating
          a chapter.
        </p>
        <p>
          The secondary cut to screen time comes from the habit itself. A
          listening session replaces whatever phone activity you might have
          drifted into during that time. For a deeper dive on the habit side,{" "}
          <Link
            href="/blog/listen-to-books-instead-of-scrolling"
            className="text-loudBlue hover:underline"
          >
            listen to books instead of scrolling
          </Link>{" "}
          goes into the swap in detail.
        </p>
      </QuestionSection>

      <QuestionSection question="What about reading in the dark or before bed?">
        <p>
          Evening reading is the biggest screen-time cut most people can make.
          If you currently read on a phone or tablet in bed, switching that
          session to listening with the screen off eliminates a block of
          close-range screen exposure right before sleep. Your phone goes on the
          nightstand, locked and dark. The book plays through a speaker or quiet
          earbuds. Your eyes close when they are ready.
        </p>
        <p>
          Night mode in LoudReader is free, so if you do read on screen in low
          light, one tap switches to a dark color scheme. But the bigger win is
          turning the screen off entirely. For more on evening listening habits,
          see{" "}
          <Link
            href="/blog/too-tired-to-read"
            className="text-loudBlue hover:underline"
          >
            listening when you are too tired to read
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn the screen off and keep reading"
        subline="Import any EPUB or PDF, press play, and close your eyes. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
