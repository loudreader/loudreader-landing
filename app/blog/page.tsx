import type { Metadata } from "next";
import Link from "next/link";

import { formatArticleDate, getAllArticles } from "@/components/blog/articles";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on listening to books, EPUBs, and PDFs, written by the developer of LoudReader, the fully on-device text-to-speech reader for Mac and iPhone.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog",
    description:
      "Practical guides on listening to books, EPUBs, and PDFs, written by the developer of LoudReader.",
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

  return (
    <MoneyPageLayout>
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          Blog
        </h1>
        <p className="text-gray-600 text-[17px] leading-relaxed">
          Practical guides on listening to books, articles, and PDFs, written
          by the developer of <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>,
          the text-to-speech reader that is fully on-device and private, your
          library never leaves your device.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block rounded-2xl border border-gray-200/70 bg-gray-50/50 p-6 md:p-8 hover:border-loudBlue/40 transition-colors"
          >
            <p className="text-xs text-gray-400 mb-2">
              {formatArticleDate(article.publishedAt)}
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </MoneyPageLayout>
  );
}
