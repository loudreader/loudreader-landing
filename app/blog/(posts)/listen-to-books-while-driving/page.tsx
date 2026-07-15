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

export default function ListenToBooksWhileDrivingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If the book you want has an audiobook edition, an audiobook store or
          a library app is the easiest way to listen in the car. The gap is
          every book that doesn&apos;t: most books you own as EPUB or PDF files
          were never recorded at all. A text-to-speech reader closes that gap.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) turns any
          DRM-free EPUB or PDF into an audiobook with natural offline voices.
          It is fully on-device and private, your library never leaves your
          device, so playback doesn&apos;t care about tunnels or dead zones on
          your route. Set everything up before you drive: import the book,
          press play, lock the screen. Playback continues, and play, pause,
          and 15-second skips work from the lock screen and your car&apos;s
          Bluetooth controls.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="drive"
        caption="Your commute is reading time, no connection required."
      />

      <QuestionSection question="What are your options for listening to books in the car?">
        <p>
          There are three honest routes, and they complement each other rather
          than compete:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Commercial audiobooks.</strong>{" "}
            Stores and streaming services like Audible, Apple Books, and
            Spotify offer professionally narrated recordings. When the book
            you want exists as an audiobook and a human performance matters to
            you, this is the premium option. You pay per book or through a
            subscription.
          </li>
          <li>
            <strong className="text-gray-900">Library apps.</strong> Apps like
            Libby and Hoopla let you borrow audiobooks free with a library
            card. The catalog depends on your library and popular titles often
            have waiting lists, but the price is unbeatable.
          </li>
          <li>
            <strong className="text-gray-900">Text-to-speech.</strong> For
            books that have no audiobook edition, or books you already own as
            files, a TTS reader narrates the text itself. This is the route
            the rest of this guide covers, because it is the one that works
            for <em>any</em> book.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What if your book has no audiobook edition?">
        <p>
          This is the real gap in car listening. Only a small fraction of
          books ever get a recorded edition. Backlist titles, technical
          books, niche non-fiction, self-published novels, public-domain
          classics, and the EPUBs and PDFs already sitting in your files
          mostly never will. If your reading list lives in those categories,
          no audiobook store can help you.
        </p>
        <p>
          A text-to-speech reader can.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          reads any DRM-free EPUB or PDF aloud with natural offline voices,
          highlights each word as it goes, and remembers your place, so the
          book behaves like an audiobook from the moment you import it. There
          is no conversion step and no audio files to manage; the narration is
          generated live on your device. The full walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          , but the short version is: import the file, press play.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you set up LoudReader before you drive?">
        <p>
          Everything on this list happens <strong>before</strong> you start
          the engine. That is the whole safety model, and it takes about a
          minute:
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
            on your iPhone (iOS 18+). Free, no account.
          </li>
          <li>
            Import the book. Share an EPUB or PDF to LoudReader from the
            Files app, Safari, or Mail, or pick one of the 70,000+ free
            Project Gutenberg classics built in.
          </li>
          <li>
            Connect your phone to the car&apos;s audio the way you would for
            music or podcasts, over Bluetooth or a cable. LoudReader plays
            through whatever your iPhone is connected to, like any audio app.
            (One honest note: there is no dedicated CarPlay app today.)
          </li>
          <li>
            Press <strong>play</strong>, then lock the screen and put the
            phone away. Playback continues, and the lock screen shows play,
            pause, and 15-second skip controls; play/pause also works from
            standard Bluetooth controls such as steering-wheel buttons.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What happens in tunnels and dead zones?">
        <p>
          Nothing, and that is the point. LoudReader&apos;s voices run
          entirely on your iPhone, so there is no stream to drop. The app is
          fully on-device and private, your library never leaves your device,
          so the narration keeps going through tunnels, parking garages,
          rural stretches, and airplane mode. If your commute has a dead zone
          that reliably kills streaming audio, an on-device reader simply does
          not have that failure mode.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you keep it safe and legal?">
        <p>
          The honest version, without pretending to be legal advice:
          listening to audio while driving is generally treated like
          listening to the radio and is legal in most places. What traffic
          laws actually restrict is <em>handling your phone</em>. Many
          jurisdictions ban handheld phone use outright, and the rules differ
          by country and state, so check what applies where you drive.
        </p>
        <p>The practical rules that keep you inside both the law and common sense:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Set up the book, the voice, and the volume before you drive.</li>
          <li>
            Control playback only from the lock screen, your car&apos;s
            buttons, or not at all. Never unlock the phone in traffic.
          </li>
          <li>Pull over if you want to switch books or change settings.</li>
          <li>
            Keep the playback speed comfortable enough that following the
            book takes no effort. The road always wins the attention
            contest.
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your drive into reading time"
        subline="Import any EPUB or PDF and press play before you pull out. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
