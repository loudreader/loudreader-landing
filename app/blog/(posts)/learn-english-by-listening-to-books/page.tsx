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

export default function LearnEnglishByListeningToBooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Listening to books is a real way to learn English, with one
          condition: <strong>read along while you listen</strong>.
          Research on second-language learners has found that
          reading-while-listening beats listening alone for building
          vocabulary. Your ears get the pronunciation while your eyes get
          the spelling, and in English those two disagree constantly.{" "}
          <strong>LoudReader</strong> is built for exactly this loop. It
          highlights each word the moment it is spoken, includes 70,000+
          free Project Gutenberg classics built in as unlimited practice
          material, and its natural offline voices run on iPhone, iPad, and Apple Silicon Macs with no account, no upload, and offline playback. One
          honest note on the voices: English is the deepest part of the
          roster, 11 narrators of the 23, which for this goal is exactly what
          you want.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Eyes on the words, ears on the voice. The two channels teach each other."
      />

      <QuestionSection question="Is listening to books an effective way to learn English?">
        <p>
          Yes, and this is one of the corners of language learning where the
          research is concrete. In{" "}
          <a
            href="https://www2.hawaii.edu/~readfl/rfl/October2008/brown/brown.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            a 2008 study in <em>Reading in a Foreign Language</em>
          </a>
          , Brown, Waring and Donkaewbua had 35 Japanese university students
          meet new words through three modes (reading,
          reading-while-listening, and listening only) using graded readers.
          On immediate translation tests, reading-while-listening came out on
          top, about 16% of the target words learned, versus roughly 15% for
          reading alone, while listening without text trailed far behind at
          about 2%. Just as telling: across every mode, the words met most
          often were the words most likely to stick.
        </p>
        <p>
          Two practical rules fall straight out of that. First, keep the text
          in front of you, because audio alone is the weakest mode for new
          vocabulary. Second, volume matters more than perfection. The
          repeated encounters do the teaching, so you want a method you can
          keep up for months, and books are the cheapest source of repeated
          encounters ever invented.
        </p>
      </QuestionSection>

      <QuestionSection question="Why should you read along while you listen?">
        <p>
          Because English&apos;s hardest mapping is between spelling and
          sound. <em>Though</em>, <em>through</em>, and <em>tough</em> share
          four letters and no pronunciation. A learner who only reads never
          hears the difference, and a learner who only listens never sees why
          the words look different at all. Reading while listening welds the
          two together, word by word.
        </p>
        <p>
          The mechanical problem is keeping your place. Eyes drift, and the
          moment they lose the narration the welding stops. Synced
          highlighting solves that.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          highlights each word at the exact moment the voice speaks it, so
          your eyes and ears stay locked together and you never burn any
          attention on navigation. Every sentence quietly becomes a
          pronunciation lesson for words you thought you already knew.
        </p>
      </QuestionSection>

      <QuestionSection question="Which books should you start with?">
        <p>
          Easier ones than you think. The method runs on comprehension. The
          study above used graded readers precisely so learners understood
          the stories, so the right level is one you can follow without
          reaching for a dictionary every line. A good ladder from the free
          Project Gutenberg catalog (LoudReader has 70,000+ free Project
          Gutenberg classics built in):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Starting out:</strong>{" "}
            Aesop&apos;s fables and fairy-tale collections, with short
            familiar plots and simple sentences.
          </li>
          <li>
            <strong className="text-gray-900">Comfortable:</strong>{" "}
            children&apos;s classics like <em>The Wonderful Wizard of Oz</em>{" "}
            or <em>Alice&apos;s Adventures in Wonderland</em>.
          </li>
          <li>
            <strong className="text-gray-900">Stretching:</strong> Sherlock
            Holmes short stories, with adult vocabulary in self-contained,
            plot-driven doses.
          </li>
        </ul>
        <p>
          The full import walkthrough, including your own EPUBs and PDFs,
          is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . If a book feels like homework three pages in, it is the wrong
          level, not the wrong method. Drop down and keep going.
        </p>
      </QuestionSection>

      <QuestionSection question="Should you slow the narration down?">
        <p>
          At the start, almost certainly. Native-speed English runs words
          together (<em>going to</em> becomes <em>gonna</em> in everything
          but spelling), and a learner&apos;s ear needs time to find the word
          boundaries. LoudReader&apos;s playback speed goes from 0.3x to
          3.0x. The low end is far below where most audiobook apps stop, slow
          enough to hear every syllable land on its highlighted word.
          (Honest pricing note: speed control is part of LoudReader Premium at
          $7.99/month, $49.99/year, or $199.99 once. The free tier plays at
          normal speed with unlimited listening.)
        </p>
        <p>
          Why slower helps, and when to speed back up, gets its own article:{" "}
          <Link
            href="/blog/slow-down-audiobook-speed"
            className="text-loudBlue hover:underline"
          >
            why slowing down audiobooks helps you understand more
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What does a simple daily routine look like?">
        <p>Twenty minutes, most days, beats two hours on Sunday:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader
            </a>{" "}
            and pick up where the book left off. It remembers your place.
          </li>
          <li>
            Listen with your eyes on the highlighted words. Don&apos;t stop for
            every unknown word; if you can follow the story, keep moving.
          </li>
          <li>
            When a sentence defeats you, replay it once, slower if you have
            Premium. Then let it go. The study&apos;s frequency finding is on
            your side, and important words will come back.
          </li>
          <li>
            Optionally, re-listen to yesterday&apos;s chapter at a faster
            speed. Familiar text at higher speed trains your ear for
            connected speech safely.
          </li>
        </ol>
        <p>
          Questions about voices, formats, or the free tier are covered
          honestly in the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Practice English with 70,000+ free classics"
        subline="Synced word highlighting, natural offline voices, unlimited free listening."
      />
    </ArticleLayout>
  );
}
