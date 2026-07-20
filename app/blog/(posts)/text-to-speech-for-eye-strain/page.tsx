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

export default function TextToSpeechForEyeStrainArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Eye strain from screens is cumulative. By evening, your eyes are
          done before your brain is, and the book you wanted to read feels
          like overtime. Text-to-speech gives you a way to keep reading
          without asking anything more from your eyes.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          EPUB or PDF aloud with natural offline voices. Press play, lock the
          screen, and your eyes get the rest of the night off while the book
          keeps going. It is fully on-device and private, your library never
          leaves your device. The free tier covers unlimited listening on
          every book with no word quota. Word-by-word highlighting is free.
          Speed control (0.3x to 3.0x), a sleep timer, and ambient
          soundscapes are Premium. This is not a medical fix, it is a
          practical one: your eyes are tired, so use your ears.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Screen off, eyes closed, book still going. The evening reading session your eyes were asking for."
      />

      <QuestionSection question="Why does eye strain kill evening reading?">
        <p>
          Eye strain is the accumulation of a full day of focus work. If you
          spend eight or more hours on a screen for work, your eye muscles
          have been contracting at near distance the entire time. By evening,
          focusing on text feels effortful. Letters blur slightly. You squint.
          The light from the screen, even with night mode on, feels harsher
          than it did at 9 AM.
        </p>
        <p>
          The result is not dramatic. It is just that reading, which should
          be relaxing, feels like work. You pick up the book and you put it
          down five minutes later because your eyes are protesting. You end
          up scrolling something mindless instead, which is gentler on
          comprehension but not on your eyes, or you give up on reading
          entirely for the night.
        </p>
        <p>
          We covered the broader version of this problem in{" "}
          <Link
            href="/blog/too-tired-to-read"
            className="text-loudBlue hover:underline"
          >
            too tired to read
          </Link>
          . Eye strain is one piece of it, but it is the piece that has the
          most direct fix: stop reading with your eyes.
        </p>
      </QuestionSection>

      <QuestionSection question="How does listening actually help tired eyes?">
        <p>
          It removes the visual demand entirely. When you listen instead of
          read, your eyes can do whatever they need: close, relax, look at
          something in the distance. The focusing muscles stop contracting.
          The screen is off. The book is still happening, just through a
          different channel.
        </p>
        <p>
          The practical setup: import your book into{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          (free, no account). Pick a voice you find gentle. Lie down, close
          your eyes, and press play. The sleep timer (Premium) stops playback
          after 30 or 60 minutes so you do not wake up hours later having
          lost your place. Ambient soundscapes (also Premium) add rain or
          white noise behind the narration, which some people find helps mask
          the kind of mental fatigue that makes focusing hard.
        </p>
      </QuestionSection>

      <QuestionSection question="Does this work during the workday too?">
        <p>
          Yes, and it is worth using as a deliberate screen break. The
          standard advice for eye strain is the 20-20-20 rule: every 20
          minutes, look at something 20 feet away for 20 seconds. It helps,
          but 20 seconds is not a break. Listening to a 10-minute article or
          a book chapter gives your eyes a meaningful rest while you still
          absorb information.
        </p>
        <p>
          The workflow for workday use:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Save a long-form article as PDF.</li>
          <li>Import it into LoudReader.</li>
          <li>Lean back, close your eyes, and listen.</li>
          <li>Ten minutes later, your eyes feel fresher and you absorbed the article.</li>
        </ul>
        <p>
          Because LoudReader is fully on-device and private, your library
          never leaves your device, this works on a work machine without
          sending company documents or reading material to a cloud service.
          For more on the privacy side, see{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What is the best device setup for eye-strain listening?">
        <p>
          iPhone with earbuds is the simplest. The screen stays locked, the
          lock-screen controls handle play and pause, and you can lie in any
          position. The Mac app works well for at-desk listening breaks: turn
          off your display or look away from it while the book plays through
          your computer's speakers.
        </p>
        <p>
          For bedtime listening specifically, combine the sleep timer with
          ambient soundscapes (both Premium features). Set the timer for 30
          minutes, pick a rain or ocean backdrop, and let the book fade out
          on its own. We covered the bedtime use case in detail in{" "}
          <Link
            href="/blog/fall-asleep-to-audiobooks"
            className="text-loudBlue hover:underline"
          >
            fall asleep to audiobooks
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What voice and speed work best when your eyes are tired?">
        <p>
          Comfort matters more than speed when you are already fatigued. Pick
          the clearest, most natural-sounding voice you can find. LoudReader
          offers 8 AI voices, all free to try for the first 8 listening hours.
          A voice that sounds slightly robotic or harsh is grating when your
          senses are already worn out.
        </p>
        <p>
          Speed is personal, but most people prefer slightly below their
          normal listening speed when their eyes are tired. If you normally
          listen at 1.5x, try 1.2x. The goal is absorption without effort.
          Speed control from 0.3x to 3.0x is a Premium feature; the free tier
          plays at normal speed.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Rest your eyes. Keep your book."
        subline="Import any EPUB or PDF, press play, and listen with the screen off. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
