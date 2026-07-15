import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { BOOK_TABLE_COLUMNS, BOOK_TABLE_ROWS, FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function EasyEnglishBooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The easiest English books to listen to for free are public-domain
          classics with plain prose: start with{" "}
          <em>The Tale of Peter Rabbit</em> (about 7 minutes),{" "}
          <em>Aesop&apos;s Fables</em> (one-minute stories), then{" "}
          <em>The Wonderful Wizard of Oz</em> and{" "}
          <em>Alice&apos;s Adventures in Wonderland</em>, and work up to{" "}
          <em>Black Beauty</em> and the <em>Sherlock Holmes</em> stories. All
          nine books below are on Project Gutenberg, and{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          has that catalog built in, so you browse, download, and press play,
          with each word highlighted as it is read by natural offline voices. The
          free tier is unlimited listening with no word quota, so a slow,
          careful learner pace costs nothing. Word counts below were measured
          from the actual Gutenberg editions; listening times assume a typical
          150-words-per-minute narration pace.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Every public-domain classic is a free audiobook once a reader can narrate it."
      />

      <QuestionSection question="Which easy English books should you start with?">
        <p>
          Nine books, ordered roughly from easiest to hardest. The word counts
          are measured from the Project Gutenberg plain-text editions (and
          rounded); the listening times assume about 150 words per minute, a
          typical audiobook narration pace. The difficulty labels are my
          editorial judgment as a reader, not a formal grading system, so
          treat them as a starting order, not a verdict.
        </p>
        <ComparisonTable
          caption="Nine easy public-domain English books with approximate word counts, estimated listening times at a 150-words-per-minute narration pace, and editorial difficulty labels"
          columns={BOOK_TABLE_COLUMNS}
          rows={BOOK_TABLE_ROWS}
          highlightColumn={-1}
        />
        <p>A few notes on why these earn their spots:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The Wonderful Wizard of Oz</strong>{" "}
            is the best first novel on the list. Baum wrote deliberately
            plain sentences for children, and the story is one you probably
            already know, which is half the comprehension battle.
          </li>
          <li>
            <strong className="text-gray-900">Aesop&apos;s Fables</strong>{" "}
            are complete stories in about a minute each, perfect when a whole
            book feels like too much commitment.
          </li>
          <li>
            <strong className="text-gray-900">Black Beauty</strong> is told in
            the first person by a horse, in short, calm sentences, longer
            than Oz but rarely harder.
          </li>
          <li>
            <strong className="text-gray-900">Alice</strong> has simple
            sentence structure but plenty of invented words and wordplay,
            fine to enjoy without understanding every joke.
          </li>
          <li>
            <strong className="text-gray-900">Sherlock Holmes</strong> is the
            step up: each story is a self-contained hour with some Victorian
            vocabulary, and the plots pull you through it.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Why start with classics instead of graded readers?">
        <p>
          Graded readers (books rewritten for a specific vocabulary level)
          are genuinely good tools, and if you have access to them, use them.
          The case for these classics is practical: they are free, they are
          real unabridged English rather than simplified English, and with a
          text-to-speech reader every one of them is instantly an audiobook.
          There is no per-book cost, so abandoning one that turns out too hard
          costs you nothing.
        </p>
        <p>
          The honest caveat: books this old contain some old-fashioned
          language, so you will meet &ldquo;shan&apos;t&rdquo; and
          &ldquo;whereupon&rdquo;. Treat those like furniture in the
          background. They are rarely the words that block the plot, and the
          strategy in{" "}
          <Link
            href="/blog/reading-english-books-non-native"
            className="text-loudBlue hover:underline"
          >
            reading English books as a non-native speaker
          </Link>{" "}
          is exactly about not stalling on them.
        </p>
      </QuestionSection>

      <QuestionSection question="How long does an easy classic take to finish?">
        <p>
          Less time than it feels like it should. At 20 minutes of listening a
          day (one commute, one chore session),{" "}
          <em>The Wonderful Wizard of Oz</em> takes under two weeks and{" "}
          <em>The Call of the Wild</em> about ten days. That math matters for
          motivation: finishing your first real English book is a milestone,
          and picking a 40,000-word book instead of a 200,000-word one makes
          the milestone reachable this month. It is also why the table above
          is ordered by effort, not by fame.
        </p>
        <p>
          If you use LoudReader Premium&apos;s speed control, your times will
          differ. Slowing to 0.8x for comfort adds about a quarter to each
          estimate, and that is a perfectly good trade.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you read along while you listen?">
        <p>
          Listening while reading is the learner&apos;s version of training
          wheels. The audio sets the pace and the pronunciation, the text
          shows you the spelling.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader (free on the App Store)
          </a>{" "}
          is built around exactly that: as the voice reads, each word
          highlights in the text, and tapping any sentence plays it again from
          the start. The Project Gutenberg catalog is built into the app, so
          every book above is a search away. Download once, then listen fully
          offline. Everything is fully on-device and private, your library
          never leaves your device, and the voices are natural offline
          voices, English-only today, which for learning English is precisely
          what you want. How the free catalog works, and what else is in it,
          is covered in{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What should you read after these?">
        <p>
          When the &ldquo;moderate&rdquo; rows feel comfortable, you have
          outgrown the list, and the same tool keeps working. Any DRM-free
          EPUB or PDF you own becomes listening material the moment you import
          it; the walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . Modern novels, non-fiction, even work documents: the
          read-along-while-listening loop is the same whether the book is from
          1900 or last year.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="70,000+ free classics, read aloud"
        subline="Browse the built-in Project Gutenberg catalog and listen with word-by-word highlighting. Free, unlimited, no account."
      />
    </ArticleLayout>
  );
}
