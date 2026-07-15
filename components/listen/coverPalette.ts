import type { Genre } from "./catalog";

/**
 * Deterministic genre -> color palette for the typographic book covers
 * (components/listen/BookCover.tsx and app/listen/[slug]/opengraph-image.tsx).
 *
 * No external images, so zero licensing risk: every cover is drawn from the
 * book's title, author, and its genre color. `bg` is a deep, rich background;
 * `accent` is a lighter tone from the same family for the rule and the play
 * mark; `ink` is the cream text color, kept constant for a coherent set.
 *
 * Keep these in sync between the on-page SVG and the OG image so a book's
 * cover looks identical in the browser and when shared.
 */
export type CoverColors = {
  bg: string;
  accent: string;
  ink: string;
};

const INK = "#F7F5F2"; // softBeige, the site's cream

const PALETTE: Record<Genre, Omit<CoverColors, "ink">> = {
  "Adventure & the Sea": { bg: "#0E5A6E", accent: "#2EC7F6" },
  "Mystery & Detective": { bg: "#26303F", accent: "#8AA0BC" },
  "Gothic & Horror": { bg: "#3A1420", accent: "#C86B7E" },
  "Science Fiction & Fantasy": { bg: "#2C1A55", accent: "#9B8CE0" },
  "Children's Classics": { bg: "#8A4B12", accent: "#F5B454" },
  "Romance & Society": { bg: "#6E1836", accent: "#E38FA8" },
  "Historical Fiction": { bg: "#5A3410", accent: "#D6A15C" },
  "Literary Fiction": { bg: "#1F3450", accent: "#7FA0C4" },
  "Myth, Legend & Epic": { bg: "#5E4611", accent: "#D4B45A" },
  "Poetry & Drama": { bg: "#123A2A", accent: "#6FBF97" },
  "Biography, Memoir & Letters": { bg: "#1E335F", accent: "#7E96C8" },
  "Philosophy & Ideas": { bg: "#2B2622", accent: "#B8A98F" },
};

export function coverColors(genre: Genre): CoverColors {
  return { ...PALETTE[genre], ink: INK };
}

/**
 * Greedy word-wrap for a cover title into at most `maxLines` lines of about
 * `maxChars` characters. Deterministic (runs at build time). A word longer
 * than the line budget still gets its own line; if the title overflows the
 * last allowed line, it is trimmed to a whole word and an ellipsis is added.
 * Shared by BookCover.tsx and the OG image so wrapping matches exactly.
 */
export function wrapTitle(
  title: string,
  maxChars: number,
  maxLines: number
): string[] {
  const words = title.trim().split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars || current === "") {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);

  if (lines.length <= maxLines) return lines;

  // Overflow: keep the first maxLines and end the last one with an ellipsis.
  const kept = lines.slice(0, maxLines);
  let last = kept[maxLines - 1];
  while (last.length > maxChars - 1 && last.includes(" ")) {
    last = last.slice(0, last.lastIndexOf(" "));
  }
  kept[maxLines - 1] = `${last}…`;
  return kept;
}
