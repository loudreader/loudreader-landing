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

export default function ReadAloudForVisualFatigueArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Visual fatigue is what happens when your eyes have done a full
          shift and you ask them to work overtime. After eight hours of
          screens, reading for pleasure feels harder than it should because
          your focusing muscles are spent. Text-to-speech gives you a way to
          keep reading without asking anything more from the part that is
          already worn out.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          EPUB or PDF aloud with natural offline voices, so you can press
          play, close your eyes, and let the book happen. It is fully
          on-device and private, your library never leaves your device. The
          free tier covers unlimited listening with no word quota and no
          account. Word-by-word highlighting is free. Speed control (0.3x to
          3.0x), a sleep timer, and ambient soundscapes are Premium. This is
          not medical advice. It is a practical answer to a daily problem:
          your eyes are done, but you are not.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Screen off, book on. Give your eyes the evening off without giving up the chapter."
      />

      <QuestionSection question="What does visual fatigue actually feel like?">
        <p>
          It is not pain, it is resistance. Your eyes feel heavy. The text
          seems to move slightly. You rub your eyes more. You squint at
          sentences you could read easily this morning. The light from the
          screen, even at low brightness, feels like it is pushing back.
        </p>
        <p>
          Visual fatigue is cumulative. It builds through the day from every
          screen you look at: work monitor, phone, tablet, TV. By evening, the
          ciliary muscles that control your eye focus are tired from staying
          contracted at near distance for hours. Reading asks them to keep
          contracting, and they protest. The result is not dramatic, just a
          quiet refusal to cooperate that makes reading feel like effort
          instead of rest.
        </p>
        <p>
          This is the specific problem we explored in{" "}
          <Link
            href="/blog/too-tired-to-read"
            className="text-loudBlue hover:underline"
          >
            too tired to read
          </Link>
          . Visual fatigue is the most mechanical piece of that puzzle, and
          it has the most direct workaround.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does read-aloud work when your eyes say no?">
        <p>
          Because it routes around the tired part entirely. Your eye muscles
          are fatigued, not your ability to absorb language. Listening uses a
          completely different sensory pathway. Your eyes can close, relax,
          and recover while your ears do the work.
        </p>
        <p>
          The practical difference is immediate. You import a book into
          LoudReader, press play, and close your eyes. The narration
          continues. You are still reading, still following the story, still
          making progress through the book. What you are not doing is
          contracting your ciliary muscles for another hour. That is the
          whole trick, and it is a good one.
        </p>
      </QuestionSection>

      <QuestionSection question="Is this a break from reading or a different kind of reading?">
        <p>
          It is reading through a different channel. The book is the same
          book. The information, the story, the ideas all reach you. What
          changes is the input mechanism. Some people worry that listening is
          &ldquo;not really reading,&rdquo; which is a fair question that we
          addressed in{" "}
          <Link
            href="/blog/is-listening-to-audiobooks-reading"
            className="text-loudBlue hover:underline"
          >
            is listening to audiobooks reading
          </Link>
          . The pragmatic answer for a tired-eyed reader: does the chapter
          get into your head? Then you read it.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you build a fatigue-aware reading habit?">
        <p>
          The key is switching modes before your eyes give out, not after.
          Once eye strain sets in, reading of any kind feels harder. The
          better pattern:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Read visually during the day when your eyes are fresh. Use
            LoudReader's word-by-word highlighting (free) to follow along if
            dual-channel helps your focus.
          </li>
          <li>
            Around 8 PM or whenever you feel the first twinge of eye
            fatigue, switch to audio-only. Same book, same place, different
            mode. Press play, lock the screen, close your eyes.
          </li>
          <li>
            Use the sleep timer (Premium) to stop playback after 30 or 60
            minutes so you do not lose your place if you drift off. Ambient
            soundscapes (also Premium) add a calming background that makes
            the transition from reading to rest feel natural.
          </li>
        </ul>
        <p>
          This pattern respects what your eyes can handle and still gets you
          through books. It is not a compromise, it is a schedule that
          matches your actual energy.
        </p>
      </QuestionSection>

      <QuestionSection question="What about listening at work to prevent fatigue?">
        <p>
          Prevention works better than recovery. If your job involves heavy
          screen reading, inserting short listening breaks through the day
          reduces the fatigue that accumulates by evening.
        </p>
        <p>
          The practical version: save a long article or report as PDF, import
          into LoudReader, and listen for 10 minutes while you lean back and
          look away from your screens. Your eyes get a real break (not just 20
          seconds of looking at a wall), and you absorb the information you
          needed. Because the app is fully on-device and private, your
          library never leaves your device, this works on a work machine
          without routing company documents through a cloud service.
        </p>
        <p>
          For a deeper look at the privacy architecture, see{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Does voice quality matter for fatigued listeners?">
        <p>
          Yes, and more than you would expect. When your senses are already
          worn out, a harsh or robotic voice is actively unpleasant. A
          smooth, natural voice is easier to tolerate for extended listening
          and helps you relax into the book rather than brace against the
          sound.
        </p>
        <p>
          LoudReader uses natural offline voices that are closer to a human
          narrator than older synthetic speech. You can try all 23 studio narrators free
          for the first 8 hours of listening. Take the time to find the one
          that feels gentlest to your ears. This choice matters more at 10 PM
          than it does at 10 AM.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your eyes are done. Your book is not."
        subline="Import any EPUB or PDF, press play, and listen with your eyes closed. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
