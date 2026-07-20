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

export default function ReadAloudScreenOffIphoneArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Not every app that reads text aloud keeps playing when you lock your
          iPhone. iOS requires apps to explicitly declare background audio
          support, and many reading apps skip this. <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) declares the audio background mode, so
          playback continues with the screen locked. The lock screen shows the
          book title, author, elapsed time, and standard controls: play/pause
          and 15-second skip forward/backward. The same controls work from
          Bluetooth headphones, car stereos, and speakers. The app is fully
          on-device and private, your library never leaves your device. Press
          play, lock the screen, put the phone in your pocket, and the book
          keeps reading.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Lock the screen. Playback continues. The lock screen gives you play, pause, and skip."
      />

      <QuestionSection question="Why do some apps stop when I lock the screen?">
        <p>
          iOS has a rule: when the user locks the screen, apps are expected to
          stop doing work and go to sleep. This saves battery and prevents apps
          from running in the background without your knowledge. Audio is the
          main exception. An app can ask iOS for permission to keep playing
          audio while the screen is off or another app is in front. The
          developer adds a key to the app's configuration file (the
          UIBackgroundModes entry with the value &quot;audio&quot;), and iOS
          grants the permission.
        </p>
        <p>
          Many apps that happen to read text aloud were not built as audio
          players. A notes app, a PDF viewer with a TTS feature bolted on, or a
          browser that reads articles might not have the background audio
          declaration. When you lock the screen, the audio stops because iOS
          suspends the app, and the developer never asked for the audio
          exception.
        </p>
        <p>
          The fix is not something you can do as a user. The app has to declare
          the mode in its build. If screen-off listening matters to you, check
          whether the app supports it before relying on it.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you get on the lock screen with LoudReader?">
        <p>
          When LoudReader is playing, the lock screen looks similar to the
          music player, with book-specific information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Book title and author.</strong>{" "}
            Extracted from the EPUB or PDF metadata, shown at the top of the
            playback widget.
          </li>
          <li>
            <strong className="text-gray-900">Elapsed time and progress bar.</strong>{" "}
            Shows how far into the book or chapter you are. You can scrub
            forward and backward by dragging the progress bar.
          </li>
          <li>
            <strong className="text-gray-900">Play/pause button.</strong>{" "}
            The standard center button. Tap to pause, tap again to resume.
          </li>
          <li>
            <strong className="text-gray-900">Skip forward and skip back.</strong>{" "}
            Jumps 15 seconds in either direction. Useful for revisiting a
            sentence you missed or skipping ahead past a section you already
            know.
          </li>
        </ul>
        <p>
          These same controls work from Bluetooth devices. If your headphones
          have a play/pause button, it controls LoudReader playback. If your
          car stereo has track-skip buttons, they trigger the 15-second skips.
          This is standard iOS media control behavior, and LoudReader
          implements the system's media player interface so these controls work
          the same way they do for music and podcasts.
        </p>
      </QuestionSection>

      <QuestionSection question="What about iOS Speak Screen as a screen-off option?">
        <p>
          iOS has a system-wide feature called Speak Screen. Swipe down with
          two fingers from the top of the screen, and iOS reads whatever is on
          the screen aloud. It works in any app, and it sometimes continues
          with the screen locked.
        </p>
        <p>
          The honest experience: Speak Screen was not designed for screen-off
          listening. The voice is the system accessibility voice (a single
          voice for everything), the reading stops unpredictably when you
          switch apps or receive notifications, and there are no lock-screen
          playback controls. You cannot pause from the lock screen, skip back,
          or see which book you are listening to. For a short passage in an app
          that lacks its own TTS, Speak Screen is fine. For a book or a long
          article you want to listen to with the phone in your pocket, an app
          built for screen-off listening is the right tool.
        </p>
      </QuestionSection>

      <QuestionSection question="Does screen-off listening save battery?">
        <p>
          Yes, and the difference is significant. On most iPhones, the display
          is the single biggest power draw. When the screen is on at full
          brightness, it can consume several watts. When the screen is off,
          that draw goes to near zero.
        </p>
        <p>
          LoudReader's voice generation runs on the Neural Engine, a
          specialized part of the Apple Silicon chip that is designed for
          machine learning tasks and is very power-efficient. On a fully
          charged iPhone, you can expect many hours of screen-off listening
          before the battery runs low. The exact number depends on the iPhone
          model, battery health, and whether other apps are running in the
          background.
        </p>
        <p>
          If you listen while exercising, commuting, or doing chores, screen-off
          playback is the mode that makes the most sense. Set up the book, pick
          the voice, press play, lock the screen, and put the phone away.{" "}
          <Link
            href="/blog/listen-to-books-while-driving"
            className="text-loudBlue hover:underline"
          >
            Listening while driving
          </Link>{" "}
          covers the setup for a specific use case where screen-off and
          hands-free are essential.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I know if a TTS app supports screen-off listening before I download it?">
        <p>
          Most apps do not advertise this in their App Store description, which
          is frustrating. Here is how to check:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Download the app (preferably a free one, or a free trial).
          </li>
          <li>
            Import a short text or sample book and press play.
          </li>
          <li>
            Lock the screen. If playback stops within a second or two, the
            app does not support background audio.
          </li>
          <li>
            If playback continues, unlock the screen and check the lock
            screen: are the title and playback controls visible? If yes, the
            app has proper background audio support.
          </li>
        </ol>
        <p>
          This is the only reliable test. App Store descriptions can say
          &quot;plays in the background&quot; and still mean different things
          to different developers. Lock the screen and see for yourself.
        </p>
        <p>
          If you want an app you know passes this test out of the box,{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            LoudReader is built for it
          </Link>
          . Background audio is not a side feature. It is the core playback
          model.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Press play, lock the screen, put your phone away"
        subline="LoudReader keeps reading with the screen off. Lock-screen controls, Bluetooth support, all on-device and private."
      />
    </ArticleLayout>
  );
}
