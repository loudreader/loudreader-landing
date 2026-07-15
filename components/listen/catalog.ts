import rawCatalog from "@/data/gutenberg-catalog.json";
import rawEntities from "@/data/book-entities.json";

/**
 * Data access + derived data for the /listen programmatic catalog
 * (tier 1: 100 books — see docs/catalog-rollout.md before adding more).
 *
 * Single source of truth is data/gutenberg-catalog.json, produced by
 * scripts/build-gutenberg-catalog.mjs and enriched by
 * scripts/merge-synopses.mjs. Everything here is deterministic and runs at
 * build time only (pages are SSG via generateStaticParams).
 */

export type CatalogBook = {
  gutenberg_id: number;
  slug: string;
  title: string;
  author: string;
  /** e.g. "1819–1891", "b. 1932", "750 BC–650 BC" — or null when unknown. */
  author_years: string | null;
  year: number | null;
  era: string;
  subjects: string[];
  download_count: number;
  word_count_estimate: number;
  /** Estimated hours of narration at 1x speed, derived from word count. */
  listening_hours: number;
  estimated: boolean;
  synopsis: string;
  hook: string;
};

const CATALOG = rawCatalog as CatalogBook[];

/**
 * Sitemap lastmod for every /listen page. Bump ONLY when catalog content
 * actually changes (new tier, rewritten synopses) — never per build.
 */
export const CATALOG_LAST_MODIFIED = "2026-07-14";

export function getAllBooks(): CatalogBook[] {
  return CATALOG;
}

const bySlug = new Map(CATALOG.map((book) => [book.slug, book]));

export function getBook(slug: string): CatalogBook | undefined {
  return bySlug.get(slug);
}

export function gutenbergUrl(book: CatalogBook): string {
  return `https://www.gutenberg.org/ebooks/${book.gutenberg_id}`;
}

/* ------------------------------------------------------------------ */
/* Verified entity links (Wikidata / Wikipedia)                        */
/* ------------------------------------------------------------------ */

/**
 * Wikidata/Wikipedia links for a book and its author, keyed by slug in
 * data/book-entities.json (built by scripts/merge-entities.mjs). Every URL/QID
 * here is VERIFIED against Wikidata; any field that could not be verified is
 * null. The page layer must treat null as "omit" and NEVER emit a guessed
 * entity into JSON-LD or a visible link.
 */
export type BookEntity = {
  author_name: string | null;
  author_qid: string | null;
  author_wikipedia: string | null;
  author_wikidata: string | null;
  work_qid: string | null;
  work_wikipedia: string | null;
  work_wikidata: string | null;
};

const ENTITIES = rawEntities as Record<string, BookEntity>;

export function getBookEntity(slug: string): BookEntity | undefined {
  return ENTITIES[slug];
}

/* ------------------------------------------------------------------ */
/* Genres                                                              */
/* ------------------------------------------------------------------ */

/**
 * Display order of genre sections on /listen. Derived from Library of
 * Congress subject headings in the Gutenberg data via keyword rules below —
 * first matching rule wins, so more specific genres are listed first.
 */
export const GENRES = [
  "Adventure & the Sea",
  "Mystery & Detective",
  "Gothic & Horror",
  "Science Fiction & Fantasy",
  "Children's Classics",
  "Romance & Society",
  "Historical Fiction",
  "Literary Fiction",
  "Myth, Legend & Epic",
  "Poetry & Drama",
  "Biography, Memoir & Letters",
  "Philosophy & Ideas",
] as const;

export type Genre = (typeof GENRES)[number];

/** First matching rule wins (checked in this order, not GENRES order). */
const GENRE_RULES: Array<[Genre, string[]]> = [
  ["Children's Classics", ["Juvenile fiction", "Children's stories"]],
  [
    "Mystery & Detective",
    [
      "Detective and mystery",
      "Mystery fiction",
      "Mystery and detective",
      "Private investigators",
    ],
  ],
  [
    "Gothic & Horror",
    ["Horror tales", "Gothic fiction", "Ghost stories", "Vampires"],
  ],
  [
    "Science Fiction & Fantasy",
    [
      "Science fiction",
      "Fantasy fiction",
      "Fantasy literature",
      "Fairy tales",
      "Mars (Planet)",
    ],
  ],
  [
    "Myth, Legend & Epic",
    [
      "Epic poetry",
      "Arthurian romances",
      "Legends",
      "Legendary character",
      "Folklore",
      "Tales, Medieval",
      "Mythological",
    ],
  ],
  [
    "Philosophy & Ideas",
    [
      "Ethics",
      "Stoics",
      "Anarchism",
      "Feminism",
      "Criticism",
      "Aesthetics",
      "Essays",
      "Social and moral questions",
    ],
  ],
  [
    "Poetry & Drama",
    ["Drama", "drama", "Comedy plays", "Sonnets", "Love poetry", "Tragedies"],
  ],
  ["Biography, Memoir & Letters", ["Biography", "Diaries"]],
  [
    "Adventure & the Sea",
    [
      "Adventure stories",
      "Sea stories",
      "Pirates",
      "Castaways",
      "Voyages around the world",
      "Picaresque",
      "Shipwrecks",
      "Travelers",
    ],
  ],
  [
    "Romance & Society",
    [
      "Love stories",
      "Courtship",
      "Domestic fiction",
      "Man-woman relationships",
      "Romance fiction",
      "Unrequited love",
      "Elopement",
      "Mate selection",
      "Courtesans",
      "First loves",
    ],
  ],
  [
    "Historical Fiction",
    ["Historical fiction", "Napoleonic Wars", "Revolution", "History"],
  ],
];

/**
 * Hand corrections where LoC subject keywords mislead (e.g. Dorian Gray
 * carries a "History" heading but is a Gothic novel; De Profundis is a
 * letter). Checked before the keyword rules.
 */
const GENRE_OVERRIDES: Record<string, Genre> = {
  "the-picture-of-dorian-gray": "Gothic & Horror",
  "love-and-freindship": "Romance & Society",
  "de-profundis": "Biography, Memoir & Letters",
  "the-countess-of-pembrokes-arcadia": "Literary Fiction",
  "grimms-fairy-tales": "Children's Classics",
  "peter-pan": "Children's Classics",
};

export function genreOf(book: CatalogBook): Genre {
  const override = GENRE_OVERRIDES[book.slug];
  if (override) return override;
  const joined = book.subjects.join(" | ");
  for (const [genre, keywords] of GENRE_RULES) {
    if (keywords.some((keyword) => joined.includes(keyword))) {
      // "History" alone marks nonfiction history, not historical fiction.
      if (genre === "Historical Fiction" && !joined.includes("iction")) continue;
      return genre;
    }
  }
  return "Literary Fiction";
}

export function genreAnchor(genre: Genre): string {
  return genre
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Books grouped by genre in GENRES order; most-downloaded first per group. */
export function getGenreGroups(): Array<{ genre: Genre; books: CatalogBook[] }> {
  const groups = new Map<Genre, CatalogBook[]>(GENRES.map((g) => [g, []]));
  for (const book of CATALOG) groups.get(genreOf(book))!.push(book);
  return GENRES.map((genre) => ({
    genre,
    books: groups
      .get(genre)!
      .sort((a, b) => b.download_count - a.download_count),
  })).filter((group) => group.books.length > 0);
}

/* ------------------------------------------------------------------ */
/* Related books                                                       */
/* ------------------------------------------------------------------ */

/** Subjects too generic to signal a real content relationship. */
const GENERIC_SUBJECTS = new Set([
  "Fiction",
  "British",
  "England",
  "Great Britain",
  "United States",
  "France",
  "Italy",
  "Germany",
  "Russia",
  "Scotland",
  "Spain",
  "Canada",
  "India",
  "London (England)",
  "Paris (France)",
  "Social life and customs",
  "History",
]);

/**
 * 4–6 related books (we return 5), ranked by shared specific LoC subjects,
 * with bonuses for same author and same genre; popularity breaks ties.
 * Deterministic — computed at build time for each page.
 */
export function relatedBooks(book: CatalogBook, count = 5): CatalogBook[] {
  const genre = genreOf(book);
  const specific = new Set(
    book.subjects.filter((subject) => !GENERIC_SUBJECTS.has(subject))
  );
  return CATALOG.filter((candidate) => candidate.slug !== book.slug)
    .map((candidate) => {
      const shared = candidate.subjects.filter((subject) =>
        specific.has(subject)
      ).length;
      const score =
        shared * 10 +
        (candidate.author === book.author ? 8 : 0) +
        (genreOf(candidate) === genre ? 3 : 0);
      return { candidate, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.candidate.download_count - a.candidate.download_count ||
        a.candidate.slug.localeCompare(b.candidate.slug)
    )
    .slice(0, count)
    .map((entry) => entry.candidate);
}

/**
 * Other books in the catalog by the exact same author string (excludes the
 * given book), most-downloaded first. Powers the "More by <author>" internal
 * linking block. Empty when the author has no other catalog titles.
 */
export function booksByAuthor(book: CatalogBook): CatalogBook[] {
  return CATALOG.filter(
    (candidate) =>
      candidate.slug !== book.slug && candidate.author === book.author
  ).sort(
    (a, b) =>
      b.download_count - a.download_count || a.slug.localeCompare(b.slug)
  );
}

/* ------------------------------------------------------------------ */
/* Formatting                                                          */
/* ------------------------------------------------------------------ */

/** "about 23½ hours" / "about 3 hours" / "about 1 hour" — always at 1x. */
export function formatListeningTime(hours: number): string {
  const whole = Math.floor(hours);
  const half = hours - whole >= 0.25;
  if (whole === 0) return "under an hour";
  if (whole === 1 && !half) return "about 1 hour";
  return `about ${whole}${half ? "½" : ""} hours`;
}

/** ISO 8601 duration for JSON-LD, e.g. 23.5 → "PT23H30M". */
export function isoDuration(hours: number): string {
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  return minutes > 0 ? `PT${whole}H${minutes}M` : `PT${whole}H`;
}

export function formatWordCount(words: number): string {
  return words.toLocaleString("en-US");
}
