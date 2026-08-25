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

export default function DoesTextToSpeechDrainYourBatteryArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Text to speech does cost some battery, but not for the reason most
          people expect. Generating a sentence's audio takes more compute
          than just decoding a pre-made file, so the first pass through new
          text uses more power than the first pass through an audiobook.
          After that, it evens out fast. Two things matter far more than the
          synthesis itself: whether the app streams audio over the network
          (a cloud text to speech app has to keep a connection open and the
          radio is one of the hungriest parts of a phone) and whether you can
          lock the screen while listening (the display is usually the
          biggest single drain on any phone during active use). LoudReader
          runs synthesis fully on-device and private, your library never
          leaves your device, supports background audio so the screen can
          stay off, and caches every sentence it renders so replaying a book
          doesn't re-synthesize it. No specific battery percentage is claimed
          here, because none has been measured. What follows is what
          actually costs power and what doesn't.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Generating a sentence costs more than playing one back."
      />

      <QuestionSection question="What actually costs battery in a text to speech app?">
        <p>
          Three things, roughly in order of how much control you have over
          them:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The screen.</strong> On most
            phones the display is the single biggest power draw during
            active use, full stop. An app that lets you lock the screen and
            keep listening is already ahead on battery before synthesis
            enters the picture at all.
          </li>
          <li>
            <strong className="text-gray-900">The network radio.</strong> A
            cloud-based text to speech app has to keep sending audio over
            wifi or cellular for as long as you're listening. Radios are
            power-hungry, and a constant stream is a constant draw.
          </li>
          <li>
            <strong className="text-gray-900">The synthesis itself.</strong>{" "}
            Turning text into a waveform takes real compute, more than
            decoding an existing audio file. This cost is real but it's also
            the smallest and most bounded of the three: it only happens once
            per sentence, not once per listen.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Does generating speech use more battery than playing a recording?">
        <p>
          The first time through a sentence, yes. Building a waveform from
          text is more work than reading bytes off a pre-recorded file. But
          that cost is paid once. LoudReader caches every sentence it
          renders, so if you rewind, replay a chapter, or come back to a book
          the next day, you're not paying the synthesis cost again. You're
          just playing back audio, exactly as cheap as any podcast or
          audiobook app.
        </p>
        <p>
          Where this matters in practice: a book you're listening to for the
          first time costs a little more than a book you're re-listening to.
          A book you skip back through repeatedly, to catch something you
          missed, costs almost nothing extra after the first pass.
        </p>
      </QuestionSection>

      <QuestionSection question="Does cloud text to speech drain battery faster than offline?">
        <p>
          Structurally, cloud text to speech has a battery cost that
          on-device synthesis doesn't: it has to keep a network connection
          open and receive audio continuously for as long as you're
          listening. That's true whether you're on wifi or cellular, and
          cellular radios in particular are known to be one of the more
          power-hungry components in a phone.
        </p>
        <p>
          LoudReader runs synthesis{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            fully on-device and private, your library never leaves your
            device
          </Link>
          . There's no per-sentence request going out over the network while
          you listen. That doesn't mean LoudReader has published a number
          against any specific competitor's app, because it hasn't measured
          one. It means the biggest structural cost of streaming text to
          speech, the always-on network connection, simply isn't part of how
          it works.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to more without draining your battery?">
        <p>
          Two habits do most of the work, and neither depends on which app
          you use:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Lock the screen.</strong> Since the display is usually
            the biggest drain during active phone use, an app with
            background audio support lets you listen with the phone face
            down in a pocket or bag instead of lit up on a table.{" "}
            <Link
              href="/blog/listen-to-books-while-running"
              className="text-loudBlue hover:underline"
            >
              Listening while running
            </Link>{" "}
            or walking is exactly this: screen off, book playing, phone
            forgotten until it's time to pause.
          </li>
          <li>
            <strong>Set a sleep timer.</strong> A book that keeps playing
            for hours after you've stopped listening isn't just a lost place
            in the story, it's the app doing work nobody's benefiting from.
            A timer that pauses playback stops that waste along with
            protecting your spot.
          </li>
        </ol>
        <p>
          LoudReader supports background playback with the screen locked, so
          the narrator keeps going while the display stays dark. It's{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            native Mac and iPhone apps
          </a>
          , with natural offline voices that don't need a live connection to
          keep talking.
        </p>
      </QuestionSection>

      <ArticleIllustration
        variant="offline"
        caption="No live connection to keep open means no radio working in the background."
      />

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen for hours, not minutes"
        subline="On-device voices, background playback, no cloud connection eating your battery in the background."
      />
    </ArticleLayout>
  );
}
