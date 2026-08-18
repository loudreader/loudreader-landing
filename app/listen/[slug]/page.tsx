import type { Metadata } from "next";
import Link from "next/link";

import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import StoreCta from "@/components/money/StoreCta";
import BookCover from "@/components/listen/BookCover";
import SamplePlayer from "@/components/listen/SamplePlayer";
import { bookSample } from "@/data/audio-samples";
import { APP_NAME, SITE_URL } from "@/components/money/site";
import {
  booksByAuthor,
  formatListeningTime,
  formatWordCount,
  genreAnchor,
  genreOf,
  getAllBooks,
  getBook,
  getBookEntity,
  gutenbergUrl,
  isoDuration,
  relatedBooks,
} from "@/components/listen/catalog";

/*
 * /listen/[slug]: programmatic catalog page for one public-domain book
 * (tier 1: 100 books, see docs/catalog-rollout.md).
 *
 * Pure SSG: every page is rendered at build time from
 * data/gutenberg-catalog.json. Plain server components only, no
 * framer-motion, no "use client" anywhere in this tree except the shared
 * <QrFallback /> leaf inside <StoreCta /> (which renders nothing on the
 * server, so no visible copy depends on it).
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug)!;
  const title = `Listen to ${book.title} by ${book.author}: Free Audiobook`;
  const description = `${book.hook} Listen to this free public-domain audiobook with natural offline voices in ${APP_NAME} on Mac and iPhone.`;
  return {
    title,
    description,
    alternates: { canonical: `/listen/${slug}` },
    openGraph: { url: `/listen/${slug}`, title, description },
  };
}

export default async function ListenBookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug)!;
  const genre = genreOf(book);
  const related = relatedBooks(book);
  const moreByAuthor = booksByAuthor(book);
  const entity = getBookEntity(book.slug);
  const pageUrl = `${SITE_URL}/listen/${book.slug}`;
  const paragraphs = book.synopsis.split(/\n\n+/);
  // Every catalog book has a rendered sample; the block appears for all of
  // them and is only absent if a slug is ever missing from BOOK_SAMPLES.
  const sample = bookSample(book.slug);

  /*
   * Verified entity links only. Every URL below was checked against Wikidata
   * and is null when it could not be verified; we NEVER emit a guessed
   * entity. filter(Boolean) drops any null so no empty/false sameAs ships.
   */
  const authorSameAs = [entity?.author_wikipedia, entity?.author_wikidata].filter(
    (u): u is string => Boolean(u)
  );
  const workSameAs = [entity?.work_wikipedia, entity?.work_wikidata].filter(
    (u): u is string => Boolean(u)
  );

  /*
   * Book + Audiobook structured data. Honesty rules (site-wide contract):
   * every field is real, verifiable data from the Project Gutenberg catalog
   * or this page's own copy. `duration` is the same word-count-derived
   * estimate the visible page states IS an estimate. Never add
   * aggregateRating, review, or invented publisher/date fields.
   *
   * author: each name becomes a Person; the VERIFIED author's Person carries
   * sameAs (Wikipedia + Wikidata). For a single-author book that is the only
   * name; for a multi-author string we attach only to the name that matches
   * the verified entity's canonical author_name (never guess for the others).
   */
  const authorNames = book.author.split(" and ");
  const audiobookJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Book", "Audiobook"],
    name: book.title,
    author: authorNames.map((name) => {
      const attach =
        authorSameAs.length > 0 &&
        (authorNames.length === 1 || name === entity?.author_name);
      return attach
        ? { "@type": "Person", name, sameAs: authorSameAs }
        : { "@type": "Person", name };
    }),
    description: book.hook,
    inLanguage: "en",
    bookFormat: "https://schema.org/AudiobookFormat",
    genre: book.subjects,
    duration: isoDuration(book.listening_hours),
    isAccessibleForFree: true,
    url: pageUrl,
    // Project Gutenberg source plus the work's own verified Wikipedia/Wikidata.
    sameAs: [gutenbergUrl(book), ...workSameAs],
    // The rendered opening, when one exists. A real file with a real duration
    // — never emitted for a book whose sample has not been rendered.
    ...(sample
      ? {
          audio: {
            "@type": "AudioObject",
            name: `${book.title} — opening, read aloud`,
            contentUrl: `${SITE_URL}${sample.file}`,
            encodingFormat: "audio/mpeg",
            duration: `PT${Math.round(sample.seconds)}S`,
            isAccessibleForFree: true,
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free Classics",
        item: `${SITE_URL}/listen`,
      },
      { "@type": "ListItem", position: 3, name: book.title, item: pageUrl },
    ],
  };

  return (
    <MoneyPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(audiobookJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="flex flex-col gap-4">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/listen"
            className="hover:text-gray-900 transition-colors"
          >
            Free Classics
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{book.title}</span>
        </nav>
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <BookCover
            book={book}
            className="w-32 sm:w-40 shrink-0 rounded-lg shadow-md"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
              {book.title}
            </h1>
            <div>
              <p className="text-lg text-gray-500">
                by{" "}
                <span className="text-gray-700 font-medium">{book.author}</span>
                {book.author_years ? ` (${book.author_years})` : null}
              </p>
              {entity?.author_wikipedia ? (
                <p className="text-sm mt-1">
                  <a
                    href={entity.author_wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-loudBlue hover:underline"
                  >
                    More about {entity.author_name ?? book.author} on Wikipedia
                  </a>
                </p>
              ) : null}
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-snug">
              {book.hook}
            </p>
            <ul className="flex flex-wrap gap-2 mt-1">
              <li>
                <Link
                  href={`/listen#${genreAnchor(genre)}`}
                  className="inline-block rounded-full bg-loudBlue/10 text-loudBlue text-sm font-medium px-3 py-1 hover:bg-loudBlue/20 transition-colors"
                >
                  {genre}
                </Link>
              </li>
              {book.subjects.slice(0, 6).map((subject) => (
                <li
                  key={subject}
                  className="inline-block rounded-full bg-gray-100 text-gray-500 text-sm px-3 py-1"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {sample ? (
        <SamplePlayer
          src={sample.file}
          title={book.title}
          seconds={sample.seconds}
        />
      ) : null}

      <section className="rounded-2xl border border-gray-200/70 bg-gray-50/70 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Listening time
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {formatListeningTime(book.listening_hours)}
          </p>
          <p className="text-xs text-gray-400 mt-1">estimate, at 1x speed</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Length
          </p>
          <p className="text-lg font-semibold text-gray-900">
            ~{formatWordCount(book.word_count_estimate)} words
          </p>
          <p className="text-xs text-gray-400 mt-1">{book.era}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Price
          </p>
          <p className="text-lg font-semibold text-gray-900">Free</p>
          <p className="text-xs text-gray-400 mt-1">
            public domain &middot;{" "}
            <a
              href={gutenbergUrl(book)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 underline decoration-gray-300"
            >
              Gutenberg #{book.gutenberg_id}
            </a>
          </p>
        </div>
      </section>

      <StoreCta
        headline="Listen free on Mac and iPhone"
        subline={`${book.title} is in the built-in catalog. Get ${APP_NAME} and press play: natural offline voices, word-by-word highlighting, no account.`}
        source="listen-book-top"
        icon="play"
      />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
          What is {book.title} about?
        </h2>
        <div className="text-gray-600 text-[17px] leading-relaxed space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
          How long is {book.title} as an audiobook?
        </h2>
        <div className="text-gray-600 text-[17px] leading-relaxed space-y-4">
          <p>
            At roughly {formatWordCount(book.word_count_estimate)} words,{" "}
            {book.title} runs {formatListeningTime(book.listening_hours)} at 1x
            narration speed. That figure is an estimate based on a typical
            narration pace. The exact length depends on the voice and the
            playback speed you choose.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
          How can I listen to {book.title} for free?
        </h2>
        <div className="text-gray-600 text-[17px] leading-relaxed space-y-4">
          <p>
            {book.title} is in the public domain, so the complete text is free
            on{" "}
            <a
              href={gutenbergUrl(book)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              Project Gutenberg
            </a>{" "}
            and {APP_NAME} has the entire Project Gutenberg catalog built in.
            To listen:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Download {APP_NAME} for Mac or iPhone (free, no account).</li>
            <li>
              Search for &ldquo;{book.title}&rdquo; in the built-in catalog and
              add it to your library.
            </li>
            <li>
              Press play. A natural offline voice reads the book while each
              word highlights on screen, and your place is saved between
              sessions.
            </li>
          </ol>
          <p>
            {APP_NAME} reads with natural offline voices, so the whole book
            works on a plane or underground. It is fully on-device and
            private, your library never leaves your device. Listening is
            unlimited on the free tier.
          </p>
        </div>
      </section>

      {moreByAuthor.length > 0 ? (
        <section>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6">
            More by {book.author}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moreByAuthor.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/listen/${other.slug}`}
                  className="flex h-full gap-4 rounded-2xl border border-gray-200/70 p-5 hover:border-loudBlue/40 hover:bg-loudBlue/[0.03] transition-colors"
                >
                  <BookCover
                    book={other}
                    className="w-14 shrink-0 rounded-md shadow-sm"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 leading-snug">
                      {other.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatListeningTime(other.listening_hours)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Related books to listen to next
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((rel) => (
              <li key={rel.slug}>
                <Link
                  href={`/listen/${rel.slug}`}
                  className="block h-full rounded-2xl border border-gray-200/70 p-5 hover:border-loudBlue/40 hover:bg-loudBlue/[0.03] transition-colors"
                >
                  <p className="font-semibold text-gray-900 leading-snug">
                    {rel.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {rel.author} &middot;{" "}
                    {formatListeningTime(rel.listening_hours)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 mt-4">
            Or browse the full{" "}
            <Link href="/listen" className="text-loudBlue hover:underline">
              catalog of {getAllBooks().length} free classics
            </Link>
            .
          </p>
        </section>
      ) : null}

      <StoreCta
        headline="Listen free on Mac and iPhone"
        subline={`${book.title} is ready to play in ${APP_NAME}'s built-in Project Gutenberg catalog. Natural offline voices, word-by-word highlighting, no account.`}
      />
    </MoneyPageLayout>
  );
}
