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

export default function MakeIphoneReadBooksAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Your iPhone can read books aloud four ways. The built-in routes:{" "}
          <strong>Speak Screen</strong> (Settings → Accessibility → Spoken
          Content, then a two-finger swipe down) reads whatever is on screen;{" "}
          <strong>VoiceOver</strong> is the full screen reader; and the
          Kindle app&apos;s <strong>Assistive Reader</strong> reads Kindle
          books with highlighting. All three work, and all three share the
          same friction: system voices that sound robotic over a whole book,
          plus fiddly gestures. The purpose-built route is{" "}
          <strong>LoudReader</strong>, a reading app with natural offline
          voices that narrates any DRM-free EPUB or PDF with word-by-word
          highlighting, remembers your place, keeps playing with the screen
          locked, and is fully on-device and private, your library never
          leaves your device. Free, with unlimited listening.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Any page of text can become narration. The question is how pleasant the voice is."
      />

      <QuestionSection question="How do you turn on Speak Screen on iPhone?">
        <p>
          Speak Screen is the fastest built-in route, and it is genuinely
          useful for short reads:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open <strong>Settings → Accessibility → Spoken Content</strong>{" "}
            and turn on <strong>Speak Screen</strong>.
          </li>
          <li>
            Open the page you want read, like an ebook, an article, or an email.
          </li>
          <li>
            Swipe down from the top of the screen{" "}
            <strong>with two fingers</strong>. An on-screen controller
            appears with pause and speed controls.
          </li>
        </ol>
        <p>
          The honest friction: it reads what is on the screen, in a system
          voice. Whether it continues past the visible page depends on the
          app you are reading in, there is no library or saved listening
          position, and the two-finger swipe is easy to fumble. For a
          paragraph it is great; for chapter after chapter it turns into
          per-page babysitting.
        </p>
      </QuestionSection>

      <QuestionSection question="Can VoiceOver read a whole book aloud?">
        <p>
          Yes. VoiceOver is Apple&apos;s full screen reader, designed for
          blind and low-vision users, and it can read continuously through
          most apps. But it is a complete accessibility environment, not a
          reading mode. Turning it on changes what every standard touch
          gesture does, it announces buttons and interface elements along
          with your book, and it takes real practice to drive. If you only
          want your book read aloud, VoiceOver is the most powerful and the
          least comfortable of the built-in options.
        </p>
      </QuestionSection>

      <QuestionSection question="What about the Kindle app's Assistive Reader?">
        <p>
          If your books live in the Kindle app, Amazon&apos;s built-in{" "}
          <strong>Assistive Reader</strong> reads them aloud with
          synchronized highlighting. Two limits worth knowing. It uses your
          device&apos;s system text-to-speech voices, the same robotic
          narration problem as Speak Screen, and it only exists inside the
          Kindle app, for Kindle-store books. Because Kindle purchases are
          DRM-locked, no third-party app can read them instead. That
          concession cuts both ways, and it is why the rest of this guide is
          about the books you own as files.
        </p>
      </QuestionSection>

      <QuestionSection question="When is a purpose-built reading app worth it?">
        <p>
          The moment you want to listen to <em>books</em> rather than
          screens. The built-in features read a page; a reading app treats
          the book as an audiobook.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          is built exactly for that, as{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            native Mac and iPhone apps
          </Link>
          :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Natural offline voices.</strong>{" "}
            Neural narration generated on your iPhone, built for long-form
            listening rather than system announcements.
          </li>
          <li>
            <strong className="text-gray-900">A real library.</strong>{" "}
            Import any DRM-free EPUB or PDF, or browse 70,000+ free Project
            Gutenberg classics built in. Every book remembers your place.
          </li>
          <li>
            <strong className="text-gray-900">
              Word-by-word highlighting
            </strong>{" "}
            synced to the narration, so you can read along or glance back
            without losing the thread.
          </li>
          <li>
            <strong className="text-gray-900">Pocket-friendly playback.</strong>{" "}
            Narration continues with the screen locked, with play, pause,
            and skip controls on the lock screen.
          </li>
          <li>
            <strong className="text-gray-900">Private by architecture.</strong>{" "}
            Fully on-device and private, your library never leaves your
            device. No account, no upload, works in airplane mode.
          </li>
        </ul>
        <p>
          The free tier is unlimited listening, with no word quota and no
          monthly cap. If your reading is mostly PDFs, the dedicated
          walkthrough is{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            how to listen to a PDF on your iPhone
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Give your iPhone a voice worth listening to"
        subline="Natural offline voices, word-by-word highlighting, unlimited free listening. No account."
      />
    </ArticleLayout>
  );
}
