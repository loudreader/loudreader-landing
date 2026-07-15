import Link from "next/link";

import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import { APP_NAME, SITE_URL } from "@/components/money/site";

import Byline from "./Byline";
import RelatedArticles from "./RelatedArticles";
import type { ArticleMeta } from "./articles";

/**
 * Shared shell for blog articles (server component).
 *
 * Reuses the money-page chrome (logo header, article column, contact row,
 * footer) and adds the blog-specific frame: "All articles" breadcrumb, H1,
 * author byline, "Last updated" stamp, BlogPosting JSON-LD, and the
 * manifest-driven "Keep reading" block after the article body.
 *
 * Usage (see docs/article-contract.md):
 *   import meta from "./meta.json";
 *   <ArticleLayout meta={meta}>…article body…</ArticleLayout>
 *
 * JSON-LD honesty rules: headline/description/dates come verbatim from the
 * article's own meta.json; the author is the real developer (publicly named
 * on loudreader.io/llms.txt). Never add aggregateRating, review, or image
 * fields here.
 */
export default function ArticleLayout({
  meta,
  children,
}: {
  meta: Pick<
    ArticleMeta,
    "slug" | "title" | "description" | "publishedAt" | "lastModified"
  >;
  children: React.ReactNode;
}) {
  const url = `${SITE_URL}/blog/${meta.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.lastModified,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: "Jeremi Podlasek",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      url: SITE_URL,
    },
  };

  return (
    <MoneyPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="flex flex-col gap-4">
        <nav aria-label="Breadcrumb">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            &larr; All articles
          </Link>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          {meta.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Byline />
          <span className="text-gray-300" aria-hidden="true">
            &middot;
          </span>
          <LastUpdated date={meta.lastModified} />
        </div>
      </header>

      {children}

      <RelatedArticles currentSlug={meta.slug} />
    </MoneyPageLayout>
  );
}
