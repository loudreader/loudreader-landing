import type { Metadata } from "next";
import Link from "next/link";

import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import StoreCta from "@/components/money/StoreCta";
import BookCover from "@/components/listen/BookCover";
import { APP_NAME, SITE_URL } from "@/components/money/site";
import {
  formatListeningTime,
  genreAnchor,
  getAllBooks,
  getGenreGroups,
} from "@/components/listen/catalog";

/*
 * /listen: index of the programmatic book catalog (tier 1: 100 books,
 * see docs/catalog-rollout.md). Pure SSG, plain server components.
 */

const bookCount = getAllBooks().length;

const PAGE_TITLE = `${bookCount} Free Audiobook Classics: Listen on Mac and iPhone`;
const PAGE_DESCRIPTION = `Browse ${bookCount} public-domain classics by genre. Every one is a free audiobook in ${APP_NAME}, read with natural offline voices on Mac and iPhone. No account, no quota.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/listen" },
  openGraph: { url: "/listen", title: PAGE_TITLE, description: PAGE_DESCRIPTION },
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
  ],
};

export default function ListenIndexPage() {
  const groups = getGenreGroups();

  return (
    <MoneyPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          Free audiobook classics
        </h1>
        <p className="text-gray-600 text-[17px] leading-relaxed">
          Every book below is in the public domain, courtesy of{" "}
          <a
            href="https://www.gutenberg.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg
          </a>{" "}
          and every one is a free audiobook in {APP_NAME}. Download the app,
          pick a title from the built-in catalog, and press play: natural
          offline voices read it with word-by-word highlighting, fully
          on-device and private, your library never leaves your device.{" "}
          {APP_NAME} ships native Mac and iPhone apps, and listening is
          unlimited on the free tier. These {bookCount} classics are a curated
          start. The app itself carries the whole 70,000+ book catalog.
        </p>
        <nav aria-label="Genres" className="flex flex-wrap gap-2 mt-2">
          {groups.map(({ genre, books }) => (
            <a
              key={genre}
              href={`#${genreAnchor(genre)}`}
              className="inline-block rounded-full bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 hover:bg-loudBlue/10 hover:text-loudBlue transition-colors"
            >
              {genre} <span className="text-gray-400">{books.length}</span>
            </a>
          ))}
        </nav>
      </header>

      {groups.map(({ genre, books }) => (
        <section key={genre} id={genreAnchor(genre)}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6">
            {genre}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {books.map((book) => (
              <li key={book.slug}>
                <Link
                  href={`/listen/${book.slug}`}
                  className="flex h-full gap-4 rounded-2xl border border-gray-200/70 p-5 hover:border-loudBlue/40 hover:bg-loudBlue/[0.03] transition-colors"
                >
                  <BookCover
                    book={book}
                    className="w-16 shrink-0 rounded-md shadow-sm"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 leading-snug">
                      {book.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {book.author} &middot;{" "}
                      {formatListeningTime(book.listening_hours)}
                    </p>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {book.hook}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <StoreCta
        headline="Listen free on Mac and iPhone"
        subline={`All ${bookCount} classics, and 70,000+ more, are built into ${APP_NAME}. Natural offline voices, word-by-word highlighting, no account.`}
      />
    </MoneyPageLayout>
  );
}
