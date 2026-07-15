import { ImageResponse } from "next/og";

import {
  genreOf,
  getAllBooks,
  getBook,
} from "@/components/listen/catalog";
import { coverColors } from "@/components/listen/coverPalette";

/*
 * Per-book Open Graph image: the same typographic cover as
 * components/listen/BookCover.tsx (title + author + genre color), laid out for
 * the 1200x630 share card. No external image, generated at build time for
 * every catalog slug, so each /listen/<slug> page shares its own cover.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Free audiobook on LoudReader";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export default async function BookOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug)!;
  const genre = genreOf(book);
  const { bg, accent, ink } = coverColors(genre);

  const titleLen = book.title.length;
  const titleSize = titleLen > 58 ? 66 : titleLen > 34 ? 82 : 100;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: bg,
        }}
      >
        {/* Genre kicker + accent rule */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: accent,
            }}
          >
            {genre}
          </div>
          <div
            style={{
              width: 96,
              height: 6,
              borderRadius: 3,
              backgroundColor: accent,
              marginTop: 20,
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            color: ink,
            maxWidth: 1040,
          }}
        >
          {book.title}
        </div>

        {/* Author + play-triangle wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 40, color: ink, opacity: 0.85 }}>
            {`by ${book.author}`}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill={accent}>
              <path d="M8 5v14l11-7z" />
            </svg>
            <div
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: ink,
                opacity: 0.7,
                marginLeft: 12,
              }}
            >
              LoudReader
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
