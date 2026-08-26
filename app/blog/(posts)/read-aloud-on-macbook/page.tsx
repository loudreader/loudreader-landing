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

export default function ReadAloudOnMacbookArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Your MacBook already reads text aloud through macOS Spoken Content
          (select text, Option+Esc). For books and long documents, the built-in
          option is limited: one system voice, one speed slider for everything,
          no bookmarking, and it stops when you switch windows.{" "}
          <strong>LoudReader</strong> runs on Apple Silicon Macs and reads
          EPUBs and PDFs aloud with natural offline voices, remembers your
          place, and keeps playing in the background. One thing to be straight
          about: it is an iPhone and iPad app, installed on a Mac from the Mac
          App Store&apos;s &ldquo;iPhone &amp; iPad Apps&rdquo; tab, so it runs
          in a fixed-size window rather than a resizable Mac one. The speech
          engine is the real thing and runs on your Mac&apos;s own silicon. It
          is fully on-device and private, your library never leaves your
          device. The app costs nothing to try, and the free tier includes
          unlimited listening with a standard voice. Premium adds all eight
          neural voices, speed control from 0.3x to 3.0x, a sleep timer,
          ambient soundscapes, and notes and highlights.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Runs on Apple Silicon Macs. Import an EPUB or PDF and press play."
      />

      <QuestionSection question="What is the built-in way to read aloud on a MacBook?">
        <p>
          macOS has a feature called Spoken Content that reads selected text
          aloud. It lives in System Settings under Accessibility, and once
          enabled, you can select text in any app and press Option+Esc to
          hear it. You can also set it to read the item under the pointer when
          you press a key, or read the entire screen with a keyboard shortcut.
        </p>
        <p>
          It works. It is free and built in, and for reading a paragraph or a
          short email, it gets the job done. Here is what it does not do:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            There is one voice and one speed slider for the entire system. If
            you want a different voice for fiction and non-fiction, you change
            it globally every time.
          </li>
          <li>
            There is no bookmarking. If you stop listening and come back, you
            find your place manually.
          </li>
          <li>
            It reads the selected text or the item under the pointer. If the
            text scrolls off screen or the window loses focus, the reading
            stops. It was not designed for long-form content.
          </li>
          <li>
            It uses the system accessibility voice. Apple ships some good
            neural voices (Samantha, Daniel, etc.), but you get one voice
            system-wide with no per-document settings.
          </li>
        </ul>
        <p>
          For books, research papers, long articles, and any content where
          you want a proper listening experience, a dedicated reader closes the
          gap.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a dedicated read-aloud app add on Mac?">
        <p>
          The difference between Spoken Content and a dedicated app is the
          difference between a text selection tool and a book player. A
          dedicated app like{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          adds:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Natural offline voices.</strong>{" "}
            Eight neural voices designed for long-form reading, not a generic
            system voice. You can switch voices per book without touching
            system settings.
          </li>
          <li>
            <strong className="text-gray-900">Place bookmarking.</strong>{" "}
            Stop listening, close the app, restart your Mac, and the book opens
            where you left off. This is the single feature that makes the
            difference between a tool and a player.
          </li>
          <li>
            <strong className="text-gray-900">Speed control per book.</strong>{" "}
            Set a faster speed for light non-fiction and a slower one for dense
            technical text. The range is 0.3x to 3.0x with LoudReader Premium.
          </li>
          <li>
            <strong className="text-gray-900">Sleep timer.</strong> Set the
            app to stop after a set interval. Useful for falling asleep to a
            book without it playing all night.
          </li>
          <li>
            <strong className="text-gray-900">Word highlighting.</strong>{" "}
            Each word lights up as it is spoken. This helps with focus and
            makes it easier to follow along, especially for dense or technical
            material.
          </li>
        </ul>
        <p>
          These features turn a MacBook into a proper audiobook player for
          content that has no recorded edition. For the full rundown of
          reading EPUBs on Mac, see{" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            reading EPUB aloud on Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Why does it matter that the app is native and not a web wrapper?">
        <p>
          Because the difference is audible and practical:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Voice processing.</strong>{" "}
            A native app running on Apple Silicon uses the Neural Engine on
            the M-series chip directly. Voice generation is faster, uses less
            battery, and sounds better than an Electron app routing through
            a web-based speech API. On a MacBook running on battery, this
            matters: native voice processing can run for hours without a
            noticeable battery hit.
          </li>
          <li>
            <strong className="text-gray-900">Offline reliability.</strong>{" "}
            LoudReader is fully on-device and private, your library never
            leaves your device. There is no connection to drop, no server to
            time out, and no cloud dependency. A web-based app that streams
            voices from a server stops working the moment your WiFi flickers.
          </li>
          <li>
            <strong className="text-gray-900">System integration.</strong>{" "}
            Native apps respond to media keys, show up in the menu bar, and
            feel like part of macOS. Drag-and-drop import, standard file
            dialogs, and the Share menu all work the way they do in every other
            Mac app.
          </li>
        </ul>
        <p>
          If you work with confidential documents, the privacy angle alone
          makes the native route the right one. See{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text-to-speech on Mac
          </Link>{" "}
          for more on why this matters.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the honest limits of reading aloud on a MacBook?">
        <p>
          No article about MacBooks is honest without listing the friction
          points:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Lid-closed listening does not work.</strong>{" "}
            macOS stops audio when the lid closes. LoudReader cannot override
            this. If you want to close the lid and keep listening, use an
            iPhone instead. The two devices complement each other: MacBook for
            desk listening with visual follow-along, iPhone for portable,
            screen-off listening.
          </li>
          <li>
            <strong className="text-gray-900">Intel Macs are not supported.</strong>{" "}
            LoudReader requires Apple Silicon (M1 or newer). MacBooks from 2020
            and earlier with Intel chips cannot run it.
          </li>
          <li>
            <strong className="text-gray-900">No playback position sync.</strong>{" "}
            If you start a book on your MacBook and want to continue on your
            iPhone, you need to remember or note the chapter. The app does
            not sync playback position between devices. You can share EPUB
            and PDF files between devices via iCloud Drive or AirDrop, but you
            manually find your place.
          </li>
        </ul>
        <p>
          These are real tradeoffs. Whether they matter depends on how you
          listen. For desk-based reading and document review, the MacBook is
          the best screen in the house. For portable listening, the iPhone
          takes over.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your MacBook, now a reading machine"
        subline="Import EPUBs and PDFs, press play, and hear them with natural voices. Apple Silicon Macs, iPhone and iPad. Fully offline."
      />
    </ArticleLayout>
  );
}
