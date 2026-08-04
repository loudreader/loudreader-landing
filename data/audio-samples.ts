/*
 * What audio the site can play, and where it came from.
 *
 * ONE VOICE ON THE SITE: James, the flagship narrator. The app ships 23, and
 * the copy says so, but everything a visitor hears here is James — the sample
 * on the home page and the opening of every catalog book. A single voice
 * across the whole site is a decision, not a limitation: it is the voice the
 * product is levelled against, and eleven pills of near-identical English
 * narrators asks a stranger to audition a roster before they have heard one
 * sentence.
 *
 * Two provenances, kept apart deliberately:
 *
 *  - JAMES_CLIP: rendered on a physical iPhone through the shipping engine
 *    (the app's showcase dump), then bundled with the app. What a listener
 *    hears is exactly what the app produces.
 *  - BOOK_SAMPLES: rendered offline from the same flagship reference voice.
 *    Same narrator, same character; the render path differs, so treat these as
 *    representative rather than byte-identical to the app.
 *
 * Filenames deliberately carry no engine or model name — see
 * components/money/site.ts.
 */

/**
 * The flagship narrator's showcase clip. The other ten English clips exist in
 * the app bundle and are deliberately not published here; add one only if the
 * site gains a reason to let people compare voices.
 */
export const JAMES_CLIP = {
  file: "/voices/james.m4a",
  name: "James",
  /** The character note the app's own picker shows under his name. */
  blurb: "Warm and even — the flagship narrator",
  seconds: 10.4,
} as const;

/**
 * What he reads in that clip. It opens with his name ("Hi, I'm James."), which
 * is why the quoted line below starts at the second sentence.
 */
export const JAMES_SCRIPT =
  "The lamps came on along the quiet street, and somewhere a piano began to play — slow and unhurried, as if the city had finally decided to rest.";

/**
 * Book samples, keyed by the same slug as /listen/[slug], every one of them
 * read by James. Five of the hundred catalog books have one so far; the rest
 * render in batches, in the same voice (see docs/audio-samples.md).
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
