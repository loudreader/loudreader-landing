import type { CatalogBook } from "./catalog";
import { genreOf } from "./catalog";
import { coverColors, wrapTitle } from "./coverPalette";

/**
 * Typographic book cover (pure server component, inline SVG).
 *
 * No external image, so there is zero licensing risk: the cover is drawn
 * entirely from the book's title, author, and a deterministic genre color
 * (see coverPalette.ts). Reuses the site's cream + accent palette and the
 * Inter font (via the --font-inter CSS variable, which resolves for inline
 * SVG in the page). The same design is mirrored, at 1200x630, by
 * app/listen/[slug]/opengraph-image.tsx.
 *
 * The SVG has a fixed 300x450 (2:3) viewBox and no intrinsic pixel size, so
 * callers scale it with `className` (a small thumbnail on the /listen index,
 * a larger cover at the top of each book page).
 */
export default function BookCover({
  book,
  className,
}: {
  book: CatalogBook;
  className?: string;
}) {
  const { bg, accent, ink } = coverColors(genreOf(book));
  const titleLines = wrapTitle(book.title, 15, 4);
  const authorLines = wrapTitle(book.author, 24, 2);

  const W = 300;
  const H = 450;
  const PAD = 28;

  const titleSize = titleLines.length <= 2 ? 33 : titleLines.length === 3 ? 29 : 25;
  const titleLead = titleSize * 1.14;
  const titleTop = 150;

  // Author block sits just above the wordmark, growing upward.
  const wordmarkY = H - 30;
  const authorLead = 20;
  const authorBottom = wordmarkY - 30;
  const authorTop = authorBottom - (authorLines.length - 1) * authorLead;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={`${book.title} by ${book.author}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        // Keep the 2:3 proportions from `width` alone (callers set width), and
        // don't let a flex row stretch the height and letterbox the artwork.
        display: "block",
        height: "auto",
        aspectRatio: `${W} / ${H}`,
        alignSelf: "flex-start",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <rect width={W} height={H} rx="10" fill={bg} />
      {/* Thin inner keyline for a bound-cover feel. */}
      <rect
        x="10"
        y="10"
        width={W - 20}
        height={H - 20}
        rx="5"
        fill="none"
        stroke={accent}
        strokeOpacity="0.28"
        strokeWidth="1"
      />

      {/* Genre kicker + accent underline. */}
      <text
        x={PAD}
        y="66"
        fill={accent}
        fontSize="13"
        fontWeight="600"
        letterSpacing="1.6"
        style={{ textTransform: "uppercase" }}
      >
        {genreOf(book)}
      </text>
      <rect x={PAD} y="80" width="42" height="3" rx="1.5" fill={accent} />

      {/* Title. */}
      <text
        x={PAD}
        fill={ink}
        fontSize={titleSize}
        fontWeight="700"
        letterSpacing="-0.5"
      >
        {titleLines.map((line, i) => (
          <tspan key={i} x={PAD} y={titleTop + i * titleLead}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Author. */}
      <text x={PAD} fill={ink} fillOpacity="0.82" fontSize="16" fontWeight="500">
        {authorLines.map((line, i) => (
          <tspan key={i} x={PAD} y={authorTop + i * authorLead}>
            {i === 0 ? `by ${line}` : line}
          </tspan>
        ))}
      </text>

      {/* Play-triangle wordmark. */}
      <g transform={`translate(${PAD}, ${wordmarkY - 9})`} fill={accent}>
        <path d="M0 0 L0 11 L9 5.5 Z" />
        <text x="16" y="9" fill={ink} fillOpacity="0.6" fontSize="12" fontWeight="600" letterSpacing="0.4">
          LoudReader
        </text>
      </g>
    </svg>
  );
}
