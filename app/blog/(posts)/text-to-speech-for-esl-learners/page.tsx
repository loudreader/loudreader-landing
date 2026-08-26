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

export default function TextToSpeechForEslLearnersArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Learning English means reading in English, and reading in a second
          language is slow. You hit unfamiliar words, lose the thread of long
          sentences, and spend more time in the dictionary than in the story.
          Text-to-speech changes that by giving you two channels at once: the
          voice reads aloud while the text highlights word by word, so you
          hear the pronunciation and see the spelling simultaneously.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) does this
          with natural offline voices on any DRM-free EPUB or PDF. It is
          fully on-device and private, your library never leaves your device.
          The free tier covers unlimited listening with no word quota.
          Word-by-word highlighting is free. Speed control from 0.3x to 3.0x
          is Premium, and slower speeds are genuinely useful for language
          learning. All 23 studio narrators are free to try for 8 hours. One honest
          note: English is where the roster is deepest — 11 of the 23
          narrators — so you have plenty of accents to shadow.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Listen and read together. The voice says it, the highlight shows it, and the connection sticks."
      />

      <QuestionSection question="Why is reading in English so hard for learners?">
        <p>
          Three things slow you down, and they compound each other:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Unknown vocabulary.</strong>{" "}
            Every unfamiliar word is a speed bump. You stop, you look it up
            or guess from context, and you lose momentum.
          </li>
          <li>
            <strong className="text-gray-900">Uncertain pronunciation.</strong>{" "}
            You know the word in writing but have never heard it spoken. You
            guess at the sound, and sometimes the guess is wrong, which
            means you are practicing an incorrect pronunciation in your
            head.
          </li>
          <li>
            <strong className="text-gray-900">Sentence complexity.</strong>{" "}
            Long sentences with embedded clauses are hard to parse when you
            are also translating. By the time you reach the end, you have
            forgotten the beginning.
          </li>
        </ul>
        <p>
          Text-to-speech attacks the second two directly. You hear every
          word pronounced correctly, so you stop guessing. The voice keeps
          the sentence moving at a steady pace, which trains your ear for
          natural English rhythm and prevents the stall-and-restart cycle
          that makes reading exhausting.
        </p>
      </QuestionSection>

      <QuestionSection question="How does word-by-word highlighting help language learning?">
        <p>
          It connects sound to spelling in real time. When the voice says
          &ldquo;through&rdquo; and the highlight is on that word, your brain
          links the sound to the letters automatically. You do not need to
          stop and sound it out. Over hundreds of pages, this passive
          exposure builds a solid mental map of English spelling-to-sound
          patterns.
        </p>
        <p>
          This is the same mechanic that makes{" "}
          <Link
            href="/blog/read-and-listen-at-the-same-time"
            className="text-loudBlue hover:underline"
          >
            reading and listening at the same time
          </Link>{" "}
          effective for comprehension generally, but for ESL learners the
          pronunciation mapping is an extra benefit that native speakers do
          not need.
        </p>
      </QuestionSection>

      <QuestionSection question="What speed should I use as a learner?">
        <p>
          Slower than a native speaker would. Starting at 0.8x or 0.9x gives
          your brain slightly more processing time per word without the voice
          sounding unnatural. As your listening comprehension improves, nudge
          the speed up toward 1.0x. The goal is to reach a speed where you
          understand comfortably, not the fastest speed you can tolerate.
        </p>
        <p>
          In LoudReader, speed control from 0.3x to 3.0x is a Premium
          feature; the free tier plays at normal speed. The slower end of the
          range (0.5x to 0.9x) is genuinely useful for language learning and
          is not something most TTS apps optimize for. You can also use the
          15-second skip back on the lock screen to replay sentences you did
          not catch.
        </p>
      </QuestionSection>

      <QuestionSection question="What books should I start with?">
        <p>
          Start with something you already know the story of. A book you read
          in your native language, or a familiar classic where the plot holds
          no surprises. This lets you focus entirely on the English instead
          of splitting attention between language and plot.
        </p>
        <p>
          From there, graded readers and young adult novels use simpler
          vocabulary and shorter sentences by design. The 70,000+ free
          classics built into LoudReader include many titles that work as
          starting points. For a curated list of recommendations, see our
          guide to{" "}
          <Link
            href="/blog/easy-english-books-to-listen-to"
            className="text-loudBlue hover:underline"
          >
            easy English books to listen to
          </Link>
          .
        </p>
        <p>
          Once you are comfortable, move to books you actually want to read.
          The motivation of a good story keeps you going through the hard
          pages in a way that a textbook never will. For practical strategies
          on getting through English books as a non-native reader, we covered
          that in{" "}
          <Link
            href="/blog/reading-english-books-non-native"
            className="text-loudBlue hover:underline"
          >
            reading English books as a non-native speaker
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Can I use text-to-speech for pronunciation practice?">
        <p>
          Yes. Shadowing is a well-known language-learning technique: you
          listen to a sentence, pause, and repeat it aloud, trying to match
          the speaker's rhythm, intonation, and pronunciation. TTS makes
          shadowing available with any text you import.
        </p>
        <p>
          The workflow in LoudReader: play a sentence, pause, shadow it
          aloud. The 15-second skip back button on the lock screen lets you
          replay the same sentence as many times as you need. It is more
          flexible than a fixed audio recording because you control the pace
          and can slow the voice down for tricky passages. We wrote a full
          guide on this in{" "}
          <Link
            href="/blog/english-shadowing-practice"
            className="text-loudBlue hover:underline"
          >
            English shadowing practice
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How do I make listening a daily habit?">
        <p>
          Attach it to something you already do. Listen during your commute,
          while cooking, while walking. The app works with the screen locked
          and needs no internet connection, so you can listen anywhere your
          phone goes.
        </p>
        <p>
          Start with 15 minutes a day. That is a chapter of a graded reader
          or a few pages of a novel. At 15 minutes daily, you absorb roughly
          90 hours of English listening per year, which is enough to move the
          needle on comprehension and vocabulary without feeling like a
          chore. For a broader look at using TTS for English learning, see{" "}
          <Link
            href="/blog/learn-english-by-listening-to-books"
            className="text-loudBlue hover:underline"
          >
            learn English by listening to books
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read and listen your way to better English"
        subline="Import any English book, press play, and follow the highlighting. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
