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

export default function WhatToListenToNextArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Pick by how much time you actually have, not by genre first. For
          under two hours, Elizabeth Barrett Browning&apos;s{" "}
          <strong>Sonnets from the Portuguese</strong> (about 1 hour) or
          Shakespeare&apos;s <strong>A Midsummer Night&apos;s Dream</strong>{" "}
          (about 2 hours) finish in one sitting. For a plot that pulls you
          along, Arthur Conan Doyle&apos;s{" "}
          <strong>The Adventures of Sherlock Holmes</strong> or Agatha
          Christie&apos;s <strong>The Murder of Roger Ackroyd</strong> both
          move fast. For a long book worth living inside, Alexandre
          Dumas&apos; <strong>The Count of Monte Cristo</strong> (about 51.5
          hours) or Tolstoy&apos;s <strong>War and Peace</strong> (about 62
          hours) are the biggest commitments in the catalog and both earn it.
          All of these, and 70,000+ more public domain books, are free to
          browse and listen to in <strong>LoudReader</strong> (iPhone, iPad, and Mac) with natural offline voices, no account needed. Times
          below are estimates at normal 1x speed.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="70,000+ books, sorted by how much time you actually have."
      />

      <QuestionSection question="What should I listen to if I only have an hour?">
        <p>
          Elizabeth Barrett Browning&apos;s{" "}
          <Link
            href="/listen/sonnets-from-the-portuguese"
            className="text-loudBlue hover:underline"
          >
            Sonnets from the Portuguese
          </Link>{" "}
          is a complete work, not an excerpt, at an estimated 1 hour. If you
          want a short story with an ending rather than poetry, Shakespeare&apos;s{" "}
          <Link
            href="/listen/a-midsummer-nights-dream"
            className="text-loudBlue hover:underline"
          >
            A Midsummer Night&apos;s Dream
          </Link>{" "}
          and Oscar Wilde&apos;s{" "}
          <Link
            href="/listen/de-profundis"
            className="text-loudBlue hover:underline"
          >
            De Profundis
          </Link>{" "}
          both run around 2 hours, short enough for a single commute or a
          lunch break, long enough to actually finish something.
        </p>
      </QuestionSection>

      <QuestionSection question="What if I want an evening-length book, not a whole project?">
        <p>
          A few hours is enough for a full, satisfying story. Lewis
          Carroll&apos;s{" "}
          <Link
            href="/listen/alices-adventures-in-wonderland"
            className="text-loudBlue hover:underline"
          >
            Alice&apos;s Adventures in Wonderland
          </Link>{" "}
          and Robert Louis Stevenson&apos;s{" "}
          <Link
            href="/listen/the-strange-case-of-dr-jekyll-and-mr-hyde"
            className="text-loudBlue hover:underline"
          >
            The Strange Case of Dr. Jekyll and Mr. Hyde
          </Link>{" "}
          both land around 3 hours. Stevenson&apos;s{" "}
          <Link
            href="/listen/treasure-island"
            className="text-loudBlue hover:underline"
          >
            Treasure Island
          </Link>{" "}
          and F. Scott Fitzgerald&apos;s{" "}
          <Link
            href="/listen/the-great-gatsby"
            className="text-loudBlue hover:underline"
          >
            The Great Gatsby
          </Link>{" "}
          run about 7.5 and 5.5 hours. Any of these fit into two or three
          listening sessions.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I listen to if I want a plot that keeps moving?">
        <p>
          Arthur Conan Doyle&apos;s{" "}
          <Link
            href="/listen/the-adventures-of-sherlock-holmes"
            className="text-loudBlue hover:underline"
          >
            The Adventures of Sherlock Holmes
          </Link>{" "}
          is built as short, self-contained cases, so it&apos;s easy to pick
          up for ten minutes or an hour without losing a longer thread. For
          one continuous mystery, Agatha Christie&apos;s{" "}
          <Link
            href="/listen/the-murder-of-roger-ackroyd"
            className="text-loudBlue hover:underline"
          >
            The Murder of Roger Ackroyd
          </Link>{" "}
          and Wilkie Collins&apos;{" "}
          <Link
            href="/listen/the-moonstone"
            className="text-loudBlue hover:underline"
          >
            The Moonstone
          </Link>{" "}
          hold their pace from the first page. If you want something gothic
          and unsettling instead of a puzzle, Bram Stoker&apos;s{" "}
          <Link href="/listen/dracula" className="text-loudBlue hover:underline">
            Dracula
          </Link>{" "}
          and Mary Shelley&apos;s{" "}
          <Link
            href="/listen/frankenstein"
            className="text-loudBlue hover:underline"
          >
            Frankenstein
          </Link>{" "}
          both deliver.
        </p>
      </QuestionSection>

      <QuestionSection question="What's a good long book to really live inside for a while?">
        <p>
          Alexandre Dumas&apos;{" "}
          <Link
            href="/listen/the-count-of-monte-cristo"
            className="text-loudBlue hover:underline"
          >
            The Count of Monte Cristo
          </Link>{" "}
          runs an estimated 51.5 hours, a book you return to over weeks
          rather than days, with enough plot to justify every hour. Leo
          Tolstoy&apos;s{" "}
          <Link
            href="/listen/war-and-peace"
            className="text-loudBlue hover:underline"
          >
            War and Peace
          </Link>{" "}
          is the single biggest commitment in the catalog at roughly 62
          hours. Fyodor Dostoyevsky&apos;s{" "}
          <Link
            href="/listen/the-brothers-karamazov"
            className="text-loudBlue hover:underline"
          >
            The Brothers Karamazov
          </Link>{" "}
          sits in between at about 38 hours. None of these need to be
          finished in a week. That&apos;s the point of a book this size: it
          becomes something you come back to.
        </p>
      </QuestionSection>

      <QuestionSection question="What if I don't know what mood I'm in?">
        <p>
          Don&apos;t start from a search box. Start from{" "}
          <Link href="/listen" className="text-loudBlue hover:underline">
            LoudReader&apos;s free classics catalog
          </Link>
          , which groups 100 curated titles by genre, with real estimated
          listening times next to each one. Skimming a shelf you can
          actually see the size of beats scrolling a search results page for
          a book you don&apos;t have a name for yet. The full library behind
          it runs to 70,000+ public domain books, all free, all built into
          the app.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Find your next listen"
        subline="Browse 70,000+ free classics by genre and estimated listening time. No account needed."
      />
    </ArticleLayout>
  );
}
