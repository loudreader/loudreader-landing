import Link from "next/link";
import { formatArticleDate, getAllArticles } from "./articles";

/**
 * "Keep reading" block (server component).
 * Driven entirely by the build-time article manifest (components/blog/articles.ts
 * globs each app/blog/(posts)/<slug>/meta.json), so writers never edit a central
 * related-articles list. Shows the newest articles other than the current one; renders
 * nothing while the blog has a single article.
 */
export default function RelatedArticles({
  currentSlug,
  max = 3,
}: {
  currentSlug: string;
  max?: number;
}) {
  const related = getAllArticles()
    .filter((article) => article.slug !== currentSlug)
    .slice(0, max);

  if (related.length === 0) return null;

  return (
    <section aria-labelledby="keep-reading">
      <h2
        id="keep-reading"
        className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6"
      >
        Keep reading
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block rounded-2xl border border-gray-200/70 bg-gray-50/50 p-6 hover:border-loudBlue/40 transition-colors"
          >
            <p className="text-xs text-gray-400 mb-2">
              {formatArticleDate(article.publishedAt)}
            </p>
            <h3 className="text-[17px] font-semibold text-gray-900 mb-1">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
