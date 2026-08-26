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

export default function TextToSpeechAdhdArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Reading with ADHD usually fails the same way: your eyes keep moving
          after your attention has left, and you surface a page later having
          kept none of it. Text to speech attacks that mechanic directly by
          making reading <strong>dual-channel</strong>. A voice reads while
          the text highlights word by word, so the pace is set externally and
          a drift costs one glance instead of a page.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) does this
          on any EPUB or PDF with natural offline voices: highlighting is
          free on every book with no word quota, playback continues with the
          screen locked so you can pace or do dishes, and it is fully
          on-device and private, your library never leaves your device. The
          honest note up front: ADHD-specific research on TTS is thin, so
          this is mechanics, and it either works for you in one chapter or it
          doesn&apos;t.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="A voice that keeps moving is a pace your attention can borrow."
      />

      <QuestionSection question="Why is reading with ADHD so exhausting?">
        <p>
          Silent reading is a single-channel activity that quietly demands
          everything from that channel: hold the line, decode the words,
          assemble the meaning, and suppress the forty-seven other things your
          brain would rather consider. For an ADHD reader the fragile part is
          the <em>holding</em>. Attention dips for two seconds, and the page
          does nothing about it. Your eyes keep sliding along the lines,
          unaccompanied. You come back, realize nothing landed, scan backwards
          for the last sentence you actually read, and pay the re-reading tax.
          Again.
        </p>
        <p>
          Books punish this loop harder than feeds and group chats do, because
          a chapter is a long dependency chain: miss one paragraph of setup
          and the next three confuse you. The exhaustion is not the reading.
          It is the constant re-entry.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does listening while following the text help?">
        <p>Dual-channel reading changes two mechanics at once:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The pace is external.</strong>{" "}
            A voice does not stall the way eyes do. You cannot silently reread
            the same sentence four times, because the narration has already
            moved, and your attention tends to move with it.
          </li>
          <li>
            <strong className="text-gray-900">Re-entry becomes free.</strong>{" "}
            With word-by-word highlighting, the current word is always lit.
            When you drift and come back, there is no backwards scan. Your
            eyes land on the highlight and you are in the book again.
          </li>
        </ul>
        <p>
          Filling both channels also leaves less idle bandwidth for the brain
          to wander off with, the same reason many people with ADHD doodle
          through meetings they actually want to follow.
        </p>
        <p>
          The honest part: the solid research on read-aloud tools was done on
          reading disabilities broadly, not ADHD, and{" "}
          <a
            href="https://journals.sagepub.com/doi/10.1177/0022219416688170"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            a 2018 meta-analysis in the Journal of Learning Disabilities
          </a>{" "}
          found moderate comprehension gains from text-to-speech for students
          with reading disabilities. ADHD-specific evidence is thinner than
          TTS marketing tends to admit, and we would rather say so than invent
          a statistic. The cheap experiment beats the literature here: run one
          real chapter dual-channel and see whether you finish it. (If your
          challenge is dyslexia rather than attention, the mechanics differ,
          and that case is covered in{" "}
          <Link
            href="/blog/text-to-speech-dyslexia"
            className="text-loudBlue hover:underline"
          >
            text to speech for dyslexia
          </Link>
          .)
        </p>
      </QuestionSection>

      <QuestionSection question="What playback speed keeps an ADHD brain engaged?">
        <p>
          Speed is the most personal dial in TTS, and for many ADHD listeners
          it is the difference-maker: at 1x some narration is slow enough that
          spare attention wanders off between sentences, while a slightly
          brisker pace keeps the channel full. Others need the opposite,
          slower speeds for dense textbooks. There is no correct number. There
          is only having the dial and moving it until the drifting stops.
        </p>
        <p>
          Stated plainly: in{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>
          , speed control from 0.3x to 3.0x is part of Premium, and the free
          tier plays at normal speed. Everything else this article describes
          is free: word-by-word highlighting, whole books with no word quota,
          and screen-off listening.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you listen while moving?">
        <p>
          Yes, and for restless readers this may matter more than any feature
          inside the app. A book that lives in your ears works while you pace,
          fold laundry, walk the long way home, or sit on a gym bike.
          Occupying your hands and body with something mindless is often
          exactly what lets the book keep the rest. Press play, lock the
          screen, and playback continues, with play, pause, and 15-second
          skips on the lock screen. The voices run entirely on your device, so
          none of this needs a connection.
        </p>
        <p>
          Start with something you already want to read:{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            download LoudReader free
          </a>
          , import an EPUB or PDF (or grab a built-in Project Gutenberg
          classic), and give one chapter the dual-channel treatment.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Give your attention two channels"
        subline="Narration plus word-by-word highlighting on any book. Free, on-device, no account. Test it on one real chapter."
      />
    </ArticleLayout>
  );
}
