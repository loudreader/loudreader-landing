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

export default function ReadingEnglishBooksNonNativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Reading English books as a non-native speaker works when you get
          three things right. <strong>Level</strong> means picking a book where
          you know roughly 98% of the words, about one unknown word in fifty, a
          threshold that comes from second-language reading research.{" "}
          <strong>Tolerance</strong> means looking up only the words that block
          the plot or keep recurring, and letting the rest go.{" "}
          <strong>Momentum</strong> means using narration alongside the text so
          you keep moving instead of stalling.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          (iPhone, iPad, and Mac) reads any book aloud with natural
          offline voices while highlighting each word, which turns a hard page
          into a guided one. Start with a short, plain-prose classic (it's
          free) and finish it. Finishing is the whole strategy.
        </p>
      </Tldr>

      <QuestionSection question="How do you pick an English book at the right level?">
        <p>
          Use the one-page test: open the book anywhere and read a full page.
          Count the words you don't know. In second-language reading
          research,{" "}
          <a
            href="https://nflrc.hawaii.edu/rfl/item/43"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Hu &amp; Nation (2000)
          </a>
          , a widely cited study in <em>Reading in a Foreign Language</em>,
          found that comfortable unassisted comprehension of fiction generally
          required knowing about 98% of the running words. That's roughly one
          unknown word in fifty: on a typical 300-word page, around six.
        </p>
        <p>
          So the practical rule: a handful of unknown words per page is a book
          you can read alone. Ten or more means you either pick an easier book
          or bring support like audio, highlighting, and patience. Neither
          choice is failure. If you need candidates for the easier book, start
          with{" "}
          <Link
            href="/blog/easy-english-books-to-listen-to"
            className="text-loudBlue hover:underline"
          >
            easy English books you can listen to for free
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Should you look up every word you don't know?">
        <p>
          No, and this is the habit that kills more English reading than any
          grammar gap. Stopping for the dictionary every third sentence turns
          a story into a vocabulary worksheet, and nobody finishes a
          vocabulary worksheet for pleasure. Sort unknown words into three
          buckets instead:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Blockers</strong>: you can't
            follow the plot without this word. Look it up now. These are rarer
            than they feel.
          </li>
          <li>
            <strong className="text-gray-900">Repeaters</strong>: the third
            time the same word appears, it's earned a lookup. Words that
            recur are the ones worth owning.
          </li>
          <li>
            <strong className="text-gray-900">Everything else</strong>: skip
            it. Context will explain some, the story will survive the rest.
          </li>
        </ul>
        <p>
          A dictionary is a tool for the second encounter, not the first.
          Trust that a word that matters will come back.
        </p>
      </QuestionSection>

      <QuestionSection question="Does listening while you read make English books easier?">
        <p>
          It changes the physics of the problem. Reading alone, your eyes
          control the pace, which means every unknown word is an invitation
          to stall. With narration, the voice keeps walking and you walk with
          it, past the words you'd otherwise circle for a minute each.
          And you get pronunciation for free: years of silently misreading a
          word ends the first time you hear it spoken while looking at it.
        </p>
        <p>
          This is exactly what{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          is for: it reads the book with natural offline voices and highlights
          each word as it's spoken, so your ears and eyes stay locked on the
          same line, and tapping any sentence plays it again. Everything is
          fully on-device and private, your library never leaves your device,
          and eleven of the twenty-three narrators are English, which for this purpose is
          the point. On the free tier listening is unlimited with no word
          quota, and slowing the narration down (0.3x to 3.0x) is part of
          Premium, stated honestly.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you stay motivated through a long English novel?">
        <p>
          Momentum beats discipline, so engineer for momentum:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Finish something short first.</strong>{" "}
            A completed 40,000-word book does more for your confidence than
            being 15% into a 200,000-word masterpiece forever.
          </li>
          <li>
            <strong className="text-gray-900">Small daily sessions.</strong>{" "}
            Twenty minutes a day finishes a short classic in two weeks. Count
            chapters, not pages, since chapters end with a click of progress.
          </li>
          <li>
            <strong className="text-gray-900">Stay with an author.</strong>{" "}
            Writers repeat their own vocabulary; the second book by the same
            author is always easier than the first.
          </li>
          <li>
            <strong className="text-gray-900">Quit freely.</strong> Abandoning
            a book that isn't working is strategy, not defeat, especially
            when the book was free.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Are older classics harder for learners than modern books?">
        <p>
          Often yes, and it would be dishonest to pretend otherwise: a novel
          from 1890 carries phrasing no one will ever say to you in a meeting.
          But &ldquo;classic&rdquo; spans a huge range. <em>The Wonderful
          Wizard of Oz</em> and <em>Black Beauty</em> are plainer than plenty
          of contemporary literary fiction, while Dickens will happily spend
          forty words on a doorknob. The advantage of the classics is
          economic: they're free, unabridged, real English, and instantly
          listenable, so they're the cheapest reading practice that exists.
          Choose the plain-prose ones now and save the ornate ones as a
          someday reward. And when a modern book you own is the one you
          actually want to read, the same read-along loop works on it too.
          Questions about formats and what the app can and can't do are in
          the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            LoudReader FAQ
          </Link>
          .
        </p>
      </QuestionSection>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Audio as scaffolding: the voice keeps the pace so your eyes can do the learning."
      />

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read English books with a voice beside you"
        subline="Word-by-word highlighting, natural offline voices, and 70,000+ free classics. Free, no account."
      />
    </ArticleLayout>
  );
}
