import type { Metadata } from "next";
import Link from "next/link";

import { formatArticleDate, getAllArticles, type ArticleMeta } from "@/components/blog/articles";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";

export const metadata: Metadata = {
  title: "Blog — News, guides and local speech",
  description:
    "Product news from LoudReader and Loudkit, practical listening guides, and notes on building with local speech and voice-enabled agents.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Notes from LoudReader",
    description:
      "Product news, practical listening guides, and what we are building with local speech.",
  },
};

/**
 * Blog index (server component).
 * Articles are discovered automatically from each app/blog/(posts)/<slug>/meta.json
 * via the build-time manifest in components/blog/articles.ts. Publishing a new
 * article never requires editing this file (see docs/article-contract.md).
 */
export default function BlogIndexPage() {
  const articles = getAllArticles();
  const releases = articles
    .filter((article) => article.kind === "release")
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  const guides = articles.filter((article) => article.kind !== "release");
  const startingPoints = [
    "on-device-text-to-speech-explained",
    "best-local-ai-apps-mac",
    "are-ai-voices-good-enough-for-books",
  ].flatMap((slug) => {
    const article = guides.find((entry) => entry.slug === slug);
    return article ? [article] : [];
  });

  return (
    <MoneyPageLayout>
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          Notes from LoudReader.
        </h1>
        <p className="text-gray-600 text-[17px] leading-relaxed">
          Product news, practical listening guides, and what we are building
          with local speech. Read with{" "}
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>,
          build with{" "}
          <a href="https://loudkit.loudreader.io/" className="text-loudBlue hover:underline">Loudkit</a>,
          or explore{" "}
          <a href="https://loudkit.loudreader.io/agents/" className="text-loudBlue hover:underline">voice notes for your agent</a>.
        </p>
        <nav aria-label="Blog sections" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-900">
          {releases.length > 0 && <a href="#product-news" className="hover:text-loudBlue">Product news &darr;</a>}
          {startingPoints.length > 0 && <a href="#start-here" className="hover:text-loudBlue">Start here &darr;</a>}
          <a href="#guides" className="hover:text-loudBlue">All guides &darr;</a>
        </nav>
      </header>

      {releases.length > 0 && (
        <section aria-labelledby="product-news" className="flex flex-col gap-5">
          <h2 id="product-news" className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Product news</h2>
          <div className="flex flex-col gap-4">
            {releases.map((article) => <ArticleCard key={article.slug} article={article} announcement />)}
          </div>
        </section>
      )}

      {startingPoints.length > 0 && (
        <section aria-labelledby="start-here" className="flex flex-col gap-5">
          <div>
            <h2 id="start-here" className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Start here</h2>
            <p className="mt-2 text-gray-500">A few useful places to get to know local speech.</p>
          </div>
          <div className="flex flex-col gap-4">
            {startingPoints.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </section>
      )}

      <section aria-labelledby="guides" className="flex flex-col gap-5">
        <h2 id="guides" className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Listening & building guides</h2>
        <div className="flex flex-col gap-4">
          {guides.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </MoneyPageLayout>
  );
}

function ArticleCard({ article, announcement = false }: { article: ArticleMeta; announcement?: boolean }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`block rounded-2xl border p-6 md:p-8 transition-colors hover:border-loudBlue/40 ${announcement ? "border-loudBlue/20 bg-[#f7f5f2]" : "border-gray-200/70 bg-gray-50/50"}`}
    >
      <p className="text-xs text-gray-500 mb-2">
        {announcement ? "RELEASE · " : ""}
        <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        {!announcement && article.lastModified > article.publishedAt && (
          <> · Updated <time dateTime={article.lastModified}>{formatArticleDate(article.lastModified)}</time></>
        )}
      </p>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-2">{article.title}</h3>
      <p className="text-gray-500 leading-relaxed">{article.description}</p>
    </Link>
  );
}
