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

export default function ListenToBooksOnYourCommuteArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A commute is reading time that has been hiding in plain sight. Your
          hands and eyes are mostly idle on a train, bus, or plane, and a
          half-hour each way adds up to 5 hours a week. That is a novel every
          two weeks, give or take, from time you were already spending in
          transit.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads any
          DRM-free EPUB or PDF aloud with natural offline voices. It is fully
          on-device and private, your library never leaves your device, so
          underground tunnels, dead zones, and airplane mode make no difference.
          Import your book at home, press play when you board, and lock the
          screen. The lock screen gives you play, pause, and 15-second skip. The
          subway is a reading room now. The plane is a library.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Underground, mid-flight, or in a dead zone. Your book keeps going."
      />

      <QuestionSection question="Why are commutes the best untapped reading time?">
        <p>
          Because you are already there, sitting or standing, and the minutes are
          spoken for regardless. A 30-minute commute each way is an hour a day,
          five hours a week, roughly 20 hours a month. At average narration
          speed, that is two novels or one long non-fiction book, every month,
          from time you were already spending in transit.
        </p>
        <p>
          The alternative for most people is scrolling, staring out a window, or
          listening to music. None of those are bad uses of transit time. But if
          you have a reading list that keeps getting longer and a calendar that
          keeps getting tighter, the commute is the single largest block of
          unscheduled time in your week. Filling it with a book costs you
          nothing.
        </p>
      </QuestionSection>

      <QuestionSection question="What about reading with your eyes on a train or bus?">
        <p>
          Reading a physical book or an e-reader on transit works well if you
          have a seat and decent lighting. But plenty of commutes do not offer
          that. Standing on a crowded train, riding a bus with jostling starts
          and stops, walking between transfers. Those are moments where
          eye-reading is awkward or impossible and ear-reading takes over.
        </p>
        <p>
          The practical combo a lot of commuters land on: read with your eyes
          when you have a seat and good light, then press play and listen with
          the screen locked when you are standing or walking. One book, one
          position, two formats. The transition is a single tap.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you set up LoudReader for a commute?">
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
            Import any DRM-free EPUB or PDF before you leave home. Or pick one
            of the 70,000+ free Project Gutenberg classics built in. No
            importing needed for those.
          </li>
          <li>
            Connect your headphones. Noise-cancelling over-ears make a real
            difference on trains and buses. Earbuds work anywhere.
          </li>
          <li>
            Board, press <strong>play</strong>, lock the screen, and your
            commute becomes reading time.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Does it work on the subway with no signal?">
        <p>
          Yes, and this is where an on-device reader makes the biggest practical
          difference. Streaming audiobooks need a connection. Subways, tunnels,
          basements, and rural stretches do not have one. A streamed book drops
          out. An on-device reader keeps going.
        </p>
        <p>
          LoudReader&apos;s voices run entirely on your iPhone. The app is fully
          on-device and private, your library never leaves your device. Tunnels,
          underground stations, and dead zones are transparent. The narration
          continues through all of it. No pre-downloading audio files, no
          buffering, no streaming dependency of any kind.
        </p>
      </QuestionSection>

      <QuestionSection question="What about listening on a plane?">
        <p>
          Planes are the ultimate offline use case. You are in airplane mode for
          hours with nothing but the seatback screen and whatever you brought.
          LoudReader works the entire flight because the voices are local to
          your device. Import your EPUBs and PDFs before takeoff, or load up on
          free Gutenberg classics, and you have a library in the air.
        </p>
        <p>
          One practical note: some airlines still ask you to turn off electronic
          devices during takeoff and landing. Follow the crew&apos;s
          instructions, then resume the book when devices are allowed. Your
          position is saved.
        </p>
        <p>
          For more on offline listening, check{" "}
          <Link
            href="/blog/text-to-speech-without-internet-iphone"
            className="text-loudBlue hover:underline"
          >
            text to speech without internet on iPhone
          </Link>
          . For the broader picture of what on-device means, see{" "}
          <Link
            href="/blog/on-device-text-to-speech-explained"
            className="text-loudBlue hover:underline"
          >
            on-device text to speech explained
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your commute is your reading room"
        subline="Import any EPUB or PDF, press play, and ride. Free, offline, no account."
      />
    </ArticleLayout>
  );
}
