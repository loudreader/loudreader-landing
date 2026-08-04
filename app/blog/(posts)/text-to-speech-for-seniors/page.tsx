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

export default function TextToSpeechForSeniorsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Reading changes as eyes age. Close focus gets harder, small text
          becomes a strain, and screen glare irritates faster than it used
          to. Text-to-speech offers a practical alternative: listen to the
          book instead of squinting at it.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices. You import
          the book, press play, and listen. No magnification, no screen
          adjustments, no eye strain at all. It is fully on-device and
          private, your library never leaves your device. The free tier gives
          unlimited listening with no account and no word quota. There are
          70,000+ free classics built in, and you can import books you
          already own. Speed control (0.3x to 3.0x) and all 23 studio narrators are
          Premium features; the free tier plays at normal speed with one
          voice after an 8-hour trial of all voices. It is not a screen
          reader, and it does not claim to be. It is a way to keep reading
          when your eyes would rather not.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="The same book on your iPhone, iPad, or Mac. Pick the screen that is easiest, or use none at all."
      />

      <QuestionSection question="Why does reading get harder with age?">
        <p>
          It is not a character flaw, it is physics. The lens inside your eye
          stiffens over time, a process called presbyopia. It starts in your
          40s and progresses. Close focus requires the lens to change shape,
          and a stiffer lens does not bend as easily. The result: small text
          blurs, reading glasses become non-negotiable, and long reading
          sessions leave your eyes tired.
        </p>
        <p>
          Add screen time to the equation, and the problem compounds. Many
          seniors who read on tablets or phones are dealing with both the
          natural stiffness of aging eyes and the accumulated fatigue of
          screen use. Large-print books help, but they are expensive, the
          selection is small, and they do nothing for the thousands of books
          and documents you already own in standard print or digital format.
        </p>
      </QuestionSection>

      <QuestionSection question="Is text-to-speech better than large print?">
        <p>
          It is not better, it is different, and it solves a different part of
          the problem. Large print makes text bigger, which helps if your
          issue is resolution. Text-to-speech removes the visual demand
          entirely, which helps if your issue is eye fatigue, glare
          sensitivity, or the simple desire to rest your eyes while still
          reading.
        </p>
        <p>
          The two approaches complement each other. Use large print or a
          well-lit screen when you want to sit and read visually. Switch to
          audio when your eyes are tired, when the lighting is poor, when you
          want to read while doing something else, or when the book you want
          does not exist in a large-print edition. Both are tools, not
          competing philosophies.
        </p>
      </QuestionSection>

      <QuestionSection question="What can I actually listen to?">
        <p>
          Three practical sources of listening material:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Books you already own as files.</strong>{" "}
            If you have purchased DRM-free EPUBs or PDFs over the years, import them
            into LoudReader and they become audiobooks on the spot. This includes
            books from stores like Smashwords, direct author purchases, and many
            technical publishers.
          </li>
          <li>
            <strong className="text-gray-900">Built-in classics.</strong>{" "}
            The app includes 70,000+ free Project Gutenberg books. Austen,
            Dickens, Twain, Doyle, and tens of thousands more. No import, no
            purchase, just pick and play.
          </li>
          <li>
            <strong className="text-gray-900">Documents and articles.</strong>{" "}
            Newsletters, long emails, articles saved as PDF. If it has text,
            LoudReader can read it. This is useful for the kind of reading
            that is not a book but still asks for your eyes.
          </li>
        </ul>
        <p>
          For the full walkthrough on how importing works, see{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How hard is it to set up and use?">
        <p>
          The core loop is two steps: get a book into the app, and press
          play. Neither requires a manual.
        </p>
        <p>
          Getting a book in: on iPhone, open the Files app, find your EPUB or
          PDF, tap the Share button, and tap LoudReader. Or open the built-in
          Gutenberg catalog and pick a classic. That is it. No account
          creation, no subscription signup, no settings to configure before
          you start.
        </p>
        <p>
          Once the book is in your library, tap it and press the play button
          at the bottom of the screen. The voice starts reading. Lock the
          screen, and playback continues with simple play, pause, and skip
          controls on the lock screen. If you want to change the voice or
          speed, those settings are one tap away, and the defaults work fine
          without touching them.
        </p>
        <p>
          The app is free to{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            download from the App Store
          </a>
          , and there is no time limit on the free tier. You can listen to
          full books cover to cover without ever paying.
        </p>
      </QuestionSection>

      <QuestionSection question="What about voice quality and choice?">
        <p>
          Voice quality has improved dramatically. Modern AI voices sound
          closer to a human narrator than the robotic speech of older
          technology. LoudReader uses natural offline voices that are clear
          and smooth for extended listening.
        </p>
        <p>
          You can try all 23 studio narrators free for the first 8 hours of listening.
          After that, one voice remains free, and Premium includes all 8. This
          trial period lets you find the voice that sounds best to you at the
          speed you prefer. Some voices are brighter, some are warmer, and
          personal preference matters a lot for comfort during long sessions.
        </p>
        <p>
          For readers with low vision specifically, we covered the voice and
          speed recommendations in more detail in{" "}
          <Link
            href="/blog/text-to-speech-for-low-vision"
            className="text-loudBlue hover:underline"
          >
            text to speech for low vision
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Can I listen on my computer instead of my phone?">
        <p>
          Yes. LoudReader has native Mac and iPhone apps, and it works on
          iPad as well. The library syncs across your devices through the
          app. Many seniors prefer a larger screen on iPad when they do need
          to look at the text, or the Mac for at-home listening because the
          speakers are better than a phone.
        </p>
        <p>
          On any device, the model is the same: import a book, press play,
          and the narration runs on-device with no internet needed. For more
          on using the app without a connection, see{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text to speech for Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read without the squint"
        subline="Import any book, press play, and listen. No eye strain, no small print, no account. Free."
      />
    </ArticleLayout>
  );
}
