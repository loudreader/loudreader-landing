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

export default function TextToSpeechWithoutInternetIphoneArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Your iPhone can read text aloud with no internet connection at all,
          and you have two honest options. For quick, occasional reading, iOS
          has a built-in <strong>Spoken Content</strong> feature (Settings{" "}
          &rarr; Accessibility) that speaks selected text or the whole screen
          with system voices stored on the phone. For books, PDFs, and long
          documents, a dedicated reader is the better tool:{" "}
          <strong>LoudReader</strong> generates natural offline voices entirely
          on your iPhone, keeps a library with saved positions and word-by-word
          highlighting, and is fully on-device and private, your library never
          leaves your device. Its voice models ship inside the app, so there is
          nothing extra to download: install it once and it works in airplane
          mode, in the subway, and anywhere else the signal dies.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="No stream, no signal, no problem. The voice is generated on the phone."
      />

      <QuestionSection question="Can an iPhone read text aloud without an internet connection?">
        <p>
          Yes, and it always could, in a limited way. What changed recently is
          the <em>quality</em> of what&apos;s possible offline. There are two
          routes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Built into iOS.</strong> Apple&apos;s
            Spoken Content feature reads selected text or the entire screen
            using system voices that live on the phone. It&apos;s free and
            works in any app.
          </li>
          <li>
            <strong className="text-gray-900">A dedicated offline reader.</strong>{" "}
            Apps like{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader
            </a>{" "}
            run a modern neural text-to-speech engine directly on the
            iPhone&apos;s chip, which is how you get natural offline voices
            rather than the robotic ones offline TTS was known for.
          </li>
        </ul>
        <p>
          Which one you want depends on whether you&apos;re reading a paragraph
          or a book. The rest of this guide covers both honestly.
        </p>
      </QuestionSection>

      <QuestionSection question="What can the built-in iOS Spoken Content do offline?">
        <p>
          Quite a lot, for free. Turn it on under{" "}
          <strong>Settings &rarr; Accessibility &rarr; Spoken Content</strong>,
          and you get Speak Selection (select text, tap Speak) and Speak Screen
          (swipe down from the top with two fingers to hear everything on
          screen). The voices are stored on the phone, and iOS offers
          higher-quality versions of some voices as downloads in Settings, so
          grab those while you still have a connection.
        </p>
        <p>The honest trade-offs, since this is a built-in accessibility tool rather than a reading app:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            It reads what&apos;s on the screen <em>right now</em>. There is no
            library, no saved position, and no &ldquo;resume where I left
            off&rdquo; for a 300-page book.
          </li>
          <li>
            System voices are serviceable but flat over long stretches;
            they&apos;re built for accessibility, not for disappearing into a
            novel.
          </li>
          <li>
            Long documents mean babysitting the screen rather than pressing
            play once.
          </li>
        </ul>
        <p>
          For a paragraph or an email, it&apos;s genuinely all you need. For
          anything book-shaped, read on.
        </p>
      </QuestionSection>

      <QuestionSection question="Why use a dedicated offline reader instead?">
        <p>
          Because a book is not a screenful of text. LoudReader treats offline
          listening as the whole product, not a fallback mode: import any
          DRM-free EPUB or PDF (or pick from 70,000+ free Project Gutenberg
          classics built in), press play, and a neural voice reads while each
          word highlights in sync. Your library keeps every book&apos;s
          position, playback continues with the screen locked, and play, pause,
          and 15-second skips work from the lock screen.
        </p>
        <p>
          The part that matters for the &ldquo;no internet&rdquo; question:
          LoudReader&apos;s voice models ship <em>inside the app</em>. There is
          no separate voice download after install, and the engine is built so
          it never touches the network. The same design that makes it work on
          a plane is what makes it private. The Mac version works the same way.
          If you split your reading between devices, see{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text to speech on Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Where does offline text to speech actually matter?">
        <p>
          More places than &ldquo;no Wi-Fi&rdquo; suggests, especially if your
          reading includes documents you&apos;d rather not stream through
          someone else&apos;s server:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Flights.</strong> Airplane mode
            on, eight hours over the Atlantic, and your whole library still
            plays: highlighting, positions, lock-screen controls, everything.
            Just import your books before boarding.
          </li>
          <li>
            <strong className="text-gray-900">Subways and trains.</strong>{" "}
            Streaming TTS apps stutter and die between stations. An on-device
            voice has no stream to drop, so the narration simply doesn&apos;t
            notice the tunnel.
          </li>
          <li>
            <strong className="text-gray-900">Fieldwork and travel.</strong>{" "}
            Rural sites, foreign SIM cards, metered roaming. Listening that
            costs zero data is listening you never have to think about.
          </li>
          <li>
            <strong className="text-gray-900">Sensitive reading.</strong> A
            contract, a case file, an unpublished draft. Offline isn&apos;t
            just resilience here. It&apos;s the guarantee. LoudReader is
            fully on-device and private, your library never leaves your
            device, because there is no server for it to leave to. PDFs are a
            first-class citizen: here&apos;s{" "}
            <Link
              href="/listen-to-pdf-iphone"
              className="text-loudBlue hover:underline"
            >
              how to listen to a PDF on iPhone
            </Link>
            .
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What are the honest limits?">
        <p>
          No offline app should pretend otherwise, so: LoudReader&apos;s voices
          cover ten languages rather than sixty, and it reads DRM-free files, so it cannot
          read books locked to another store&apos;s app. The free tier gives
          you unlimited listening on every book, cover to cover, with no word
          quota; playback speed control (0.3x to 3.0x) is part of Premium.
          And downloading <em>new</em> books from the built-in Project
          Gutenberg catalog does need a connection. The offline guarantee
          covers everything already in your library.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Reading that works where the signal doesn't"
        subline="Natural offline voices, generated on your iPhone. Free, no account, nothing to download after install."
      />
    </ArticleLayout>
  );
}
