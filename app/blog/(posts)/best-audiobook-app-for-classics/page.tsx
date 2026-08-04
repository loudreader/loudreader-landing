import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function BestAudiobookAppForClassicsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          You have three honest routes into public domain classics.{" "}
          <strong>LibriVox</strong> gives you free human-narrated audiobooks
          with real performances, but covers only a fraction of the
          catalog and recording quality varies.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) builds
          in the entire Project Gutenberg catalog of 70,000+ books, read
          by natural offline voices. It is fully on-device and private,
          your library never leaves your device, and the free tier gives
          you {PRICING.free} That covers every Gutenberg classic with no
          word cap. Premium adds all 23 studio narrators, playback speed (0.3x to
          3.0x), sleep timer, ambient soundscapes, and notes and highlights
          for {PRICING.premiumMonthly} or {PRICING.premiumYearly}.{" "}
          <strong>Commercial audiobooks</strong> from Audible or Apple Books
          give you professional performances of popular classics, but you
          pay per title.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="70,000+ classics, ready to listen. Instant, free, offline."
      />

      <QuestionSection question="Why do public domain classics matter?">
        <p>
          Every book published before a certain year (generally 1929 and
          earlier in the United States) enters the public domain. That
          means the copyright has expired and the text is free for anyone
          to read, copy, and distribute. Project Gutenberg has spent
          decades digitizing these works. The result is a library of over
          70,000 free ebooks: every major novel, play, poem, philosophical
          treatise, and historical text you were supposed to read in
          school, plus thousands of obscure, fascinating works you have
          never heard of.
        </p>
        <p>
          This is the largest free library in human history, and most of
          it has no audiobook edition. That gap is what we are solving here.
        </p>
      </QuestionSection>

      <QuestionSection question="LibriVox: free human narration, limited catalog">
        <p>
          LibriVox is a volunteer project that records public domain books
          as free audiobooks. Real people read real books into real
          microphones. The recordings are completely free, downloadable,
          and often very good. For the most famous classics like Pride and
          Prejudice, Moby Dick, or The Great Gatsby, you will find multiple
          LibriVox recordings to choose from, some of which are genuinely
          excellent performances.
        </p>
        <p>
          The trade-offs are honest. LibriVox covers only a fraction of
          Project Gutenberg&apos;s catalog. The most popular classics have
          multiple recordings; the deeper catalog works and lesser-known
          authors often have none. Recording quality varies because
          volunteers have different equipment, environments, and skill
          levels. One narrator might have a warm, professional delivery.
          Another might have a refrigerator humming in the background. You
          do not know until you listen.
        </p>
        <p>
          For the core canon of world literature, LibriVox is a treasure.
          For exploring beyond the canon, it runs out of road quickly.
        </p>
      </QuestionSection>

      <QuestionSection question="LoudReader: the full Gutenberg catalog, TTS-read">
        <p>
          LoudReader takes a different approach to the same problem.
          Instead of relying on volunteer recordings, it reads the Gutenberg
          texts directly with natural offline voices. The trade is clear:
          you lose the human performance of a LibriVox volunteer, but you
          gain the entire catalog of 70,000+ books, instantly accessible
          with one tap. No waiting for a recording to exist. No hoping the
          narrator is good.
        </p>
        <p>
          The built-in Gutenberg browser lets you search by title, author,
          or subject. Tap a book, and it opens immediately. LoudReader
          remembers your place, highlights words as it reads, and
          continues playback with the screen locked. The voice quality is
          consistent across every book: natural offline voices that handle
          long-form reading without fatigue.
        </p>
        <p>
          This is the strongest use case for TTS in general. Public domain
          classics have no rights holder to produce an audiobook. Most
          will never get one. TTS is the only way to listen to the vast
          majority of these books at all. LoudReader is fully on-device
          and private, your library never leaves your device, and the free
          tier covers unlimited listening with no quotas.{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks through TTS
          </Link>{" "}
          is, for most books in the catalog, the only available listening
          method.
        </p>
      </QuestionSection>

      <QuestionSection question="What about commercial audiobooks of classics?">
        <p>
          Many famous classics have professional audiobook productions
          available on Audible, Apple Books, and other stores. These are
          full performances by professional narrators, sometimes with
          multiple voice actors. For a beloved book you want to experience
          at its best, a commercial audiobook is the premium option.
        </p>
        <p>
          The downside is cost. Each classic you buy from a store costs
          money, either directly or through a subscription credit. Given
          that the text is free in the public domain, paying $15 to $30 per
          title adds up fast if you are a heavy reader of classics. And
          again, only a subset of the catalog has been professionally
          recorded.
        </p>
      </QuestionSection>

      <QuestionSection question="Which approach should you take?">
        <p>
          For the most famous classics, try LibriVox first. It is free and
          the recordings for popular titles are often excellent. A human
          narrator reading Jane Austen or Fyodor Dostoevsky brings
          understanding to the text that TTS cannot match.
        </p>
        <p>
          For everything else in the Gutenberg catalog, or when a
          LibriVox recording is poor quality, use LoudReader. Instant
          access to 70,000+ books with consistent voice quality. Free
          unlimited listening. No account required.{" "}
          <Link
            href="/blog/librivox-alternative"
            className="text-loudBlue hover:underline"
          >
            As a LibriVox alternative
          </Link>
          , it covers the books LibriVox misses.
        </p>
        <p>
          For a beloved classic you want to savor, buy the commercial
          audiobook. It is the premium experience and worth the money for
          books you truly love.
        </p>
        <p>
          The three approaches complement each other. LibriVox for the
          best volunteer performances. LoudReader for the full catalog with
          natural offline voices. Commercial audiobooks for the premium
          experience on special favorites. You do not have to pick just
          one.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="70,000+ classics, one app, free"
        subline="Browse Gutenberg, pick a book, press play. Natural voices, offline, no account."
      />
    </ArticleLayout>
  );
}