/*
 * What audio the site can play, and where it came from.
 *
 * Two different provenances, kept apart deliberately:
 *
 *  - NARRATORS: rendered on a physical iPhone through the shipping engine
 *    (the app's showcase dump), then bundled with the app. What a listener
 *    hears here is exactly what the app produces. Every narrator speaks the
 *    same script, so they can be compared directly.
 *  - BOOK_SAMPLES: rendered offline from the same flagship reference voice.
 *    Same narrator (James), same character; the render path differs, so treat
 *    these as representative rather than byte-identical to the app.
 *
 * Filenames deliberately carry no engine or model name — see
 * components/money/site.ts.
 */

export type Narrator = {
  /** Filename base under /public/voices and the id used in analytics. */
  id: string;
  name: string;
  /** One line, matching the blurb the app's own picker shows. */
  blurb: string;
};

/**
 * The English roster, James first — he is the flagship, and the order matches
 * the app's picker. The other 12 narrators (Spanish, German, French, Italian,
 * Dutch, Polish, Portuguese, Swedish, Danish) ship in the app but have no
 * showcase clip yet, so the site cannot preview them honestly. Add them here
 * the moment their clips exist.
 */
export const NARRATORS: Narrator[] = [
  { id: "james", name: "James", blurb: "Warm and even — the flagship narrator" },
  { id: "nora", name: "Nora", blurb: "Bright and engaged, carries a story" },
  { id: "clara", name: "Clara", blurb: "Soft-spoken, steady" },
  { id: "emma", name: "Emma", blurb: "Clear and light" },
  { id: "alice", name: "Alice", blurb: "Gentle, unhurried" },
  { id: "grace", name: "Grace", blurb: "Even and precise" },
  { id: "ivy", name: "Ivy", blurb: "Warm, a little husky" },
  { id: "oliver", name: "Oliver", blurb: "Deep and calm" },
  { id: "henry", name: "Henry", blurb: "Rich and close to the mic" },
  { id: "arthur", name: "Arthur", blurb: "Classic storyteller" },
  { id: "hugo", name: "Hugo", blurb: "Low and relaxed" },
];

/**
 * The line every narrator reads, so the clips are directly comparable. Each
 * clip opens with the narrator's own name ("Hi, I'm James."), which is why the
 * script below starts at the second sentence.
 */
export const NARRATOR_SCRIPT =
  "The lamps came on along the quiet street, and somewhere a piano began to play — slow and unhurried, as if the city had finally decided to rest.";

/**
 * Book samples, keyed by the same slug as /listen/[slug]. Five of the hundred
 * catalog books have one so far; the rest render in batches (see
 * docs/audio-samples.md).
 */
export const BOOK_SAMPLES: Record<string, { file: string; seconds: number }> = {
  "moby-dick": { file: "/samples/moby-dick.mp3", seconds: 15.8 },
  "pride-and-prejudice": { file: "/samples/pride-and-prejudice.mp3", seconds: 17.0 },
  dracula: { file: "/samples/dracula.mp3", seconds: 26.3 },
  frankenstein: { file: "/samples/frankenstein.mp3", seconds: 26.4 },
  "the-adventures-of-sherlock-holmes": {
    file: "/samples/the-adventures-of-sherlock-holmes.mp3",
    seconds: 23.9,
  },
};

export function bookSample(slug: string) {
  return BOOK_SAMPLES[slug] ?? null;
}
