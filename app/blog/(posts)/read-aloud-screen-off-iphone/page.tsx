import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ReadAloudScreenOffIphoneArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader supports reading with your iPhone locked. Start the book,
          wait for narration, then press the side button. Playback can continue
          while you use another app too. The lock screen offers play/pause and
          skip controls, though the controls available on headphones or a car
          stereo depend on what commands that accessory sends. Background audio
          does not prevent every interruption: calls, a disconnected headset or
          another app starting audio can still affect playback.
        </p>
      </Tldr>

      <ArticleIllustration variant="offline" caption="Start narration, lock your iPhone, then check the controls you plan to use." />

      <QuestionSection question="How do I set up screen-off listening?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open your book or saved article in LoudReader and choose an available voice.</li>
          <li>Connect your headphones if you use them, then press play and wait until you hear narration.</li>
          <li>Lock the screen. Let it run long enough to move beyond the first sentence.</li>
          <li>Wake the lock screen without opening the app and try pause, resume and skip. Test your headphone buttons separately.</li>
        </ol>
        <p>
          Do this before a journey or workout. To listen without internet, also
          check that the imported book and chosen voice work with Wi-Fi and
          mobile data disabled. Screen-off playback and offline readiness are
          different things.
        </p>
      </QuestionSection>

      <QuestionSection question="Which controls should I expect?">
        <p>
          LoudReader supplies the book title and author to iOS, with artwork and
          timing information when available. Its media controls support play,
          pause, and 15-second skip requests in both directions. Do not assume
          that a displayed progress bar supports dragging to any point in the
          book: the app&apos;s remote controls do not provide that seeking action.
        </p>
        <p>
          A headset&apos;s play/pause button can send the matching media command.
          A next-track button is different: LoudReader disables next/previous
          track commands, so a car stereo&apos;s track buttons are not guaranteed
          to become 15-second skips. Try the actual accessory you will use.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I check if playback stops?">
        <p>
          First, reopen LoudReader and see whether it is paused, finished or
          showing an error. Check the selected audio output, try the phone&apos;s
          speaker, and confirm another app has not taken over playback. If a
          sleep timer was enabled, check whether it expired; LoudReader&apos;s
          timer is a Premium feature.
        </p>
        <p>
          If it keeps happening, note your iPhone model, iOS version, voice,
          book and whether headphones were connected. Try another short text to
          distinguish a document-specific issue from a general playback problem.
          One interruption does not prove an app lacks background support.
        </p>
        <p>
          For apps in general, both the audio session and background capability
          need suitable configuration. Apple describes this in its <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MediaPlaybackGuide/Contents/Resources/en.lproj/ConfiguringAudioSettings/ConfiguringAudioSettings.html" className="text-loudBlue hover:underline">media playback guide</a>.
          It is something the developer implements, rather than a permission
          you can add to an arbitrary app in Settings.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I use Apple’s Speak Screen instead?">
        <p>
          Yes, it is worth trying for text already open in another app. Apple&apos;s
          <a href="https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios" className="text-loudBlue hover:underline"> Speak Screen guide</a> explains
          how to enable it in Accessibility, choose voices and use its speech
          controller. Swipe down with two fingers from the top to start reading.
          Settings names vary by iOS version.
        </p>
        <p>
          Test your particular app and lock-screen workflow before relying on
          it for a long listen. We have not established a universal screen-off
          guarantee or failure for Speak Screen. For imported books and a saved
          reading position, <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">LoudReader&apos;s book player</Link> is
          another option. For listening away from a desk, see the <Link href="/blog/listen-to-books-while-running" className="text-loudBlue hover:underline">running setup guide</Link>.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Let the book play with your phone put away" subline="Local narration with background playback and supported iOS media controls." />
    </ArticleLayout>
  );
}
