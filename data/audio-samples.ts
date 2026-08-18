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
 * read by James. The whole tier-1 catalog (100 books) has one — one opening
 * passage per book, rendered in batches in the same voice with the same
 * locked seed (see docs/audio-samples.md).
 */
export const BOOK_SAMPLES: Record<string, { file: string; seconds: number }> = {
  "a-farewell-to-arms": { file: "/samples/a-farewell-to-arms.mp3", seconds: 16.8 },
  "a-journey-to-the-centre-of-the-earth": { file: "/samples/a-journey-to-the-centre-of-the-earth.mp3", seconds: 27.9 },
  "a-midsummer-nights-dream": { file: "/samples/a-midsummer-nights-dream.mp3", seconds: 14.5 },
  "a-pair-of-blue-eyes": { file: "/samples/a-pair-of-blue-eyes.mp3", seconds: 20.2 },
  "a-room-with-a-view": { file: "/samples/a-room-with-a-view.mp3", seconds: 12.7 },
  "a-study-in-scarlet": { file: "/samples/a-study-in-scarlet.mp3", seconds: 27.2 },
  "a-tale-of-two-cities": { file: "/samples/a-tale-of-two-cities.mp3", seconds: 20.7 },
  "adventures-of-huckleberry-finn": { file: "/samples/adventures-of-huckleberry-finn.mp3", seconds: 19.5 },
  "alices-adventures-in-wonderland": { file: "/samples/alices-adventures-in-wonderland.mp3", seconds: 13.2 },
  "anarchism-and-other-essays": { file: "/samples/anarchism-and-other-essays.mp3", seconds: 28.3 },
  "around-the-world-in-eighty-days": { file: "/samples/around-the-world-in-eighty-days.mp3", seconds: 25.9 },
  "as-you-like-it": { file: "/samples/as-you-like-it.mp3", seconds: 24.4 },
  "autobiography-of-a-yogi": { file: "/samples/autobiography-of-a-yogi.mp3", seconds: 20.4 },
  "autobiography-of-benjamin-franklin": { file: "/samples/autobiography-of-benjamin-franklin.mp3", seconds: 25.0 },
  "biographia-literaria": { file: "/samples/biographia-literaria.mp3", seconds: 22.2 },
  "camille-la-dame-aux-camelias": { file: "/samples/camille-la-dame-aux-camelias.mp3", seconds: 20.1 },
  "carmen": { file: "/samples/carmen.mp3", seconds: 10.9 },
  "catriona": { file: "/samples/catriona.mp3", seconds: 25.7 },
  "cranford": { file: "/samples/cranford.mp3", seconds: 26.2 },
  "crime-and-punishment": { file: "/samples/crime-and-punishment.mp3", seconds: 28.1 },
  "de-profundis": { file: "/samples/de-profundis.mp3", seconds: 27.1 },
  "dracula": { file: "/samples/dracula.mp3", seconds: 21.9 },
  "four-arthurian-romances": { file: "/samples/four-arthurian-romances.mp3", seconds: 25.3 },
  "frankenstein": { file: "/samples/frankenstein.mp3", seconds: 24.4 },
  "grimms-fairy-tales": { file: "/samples/grimms-fairy-tales.mp3", seconds: 24.4 },
  "gullivers-travels": { file: "/samples/gullivers-travels.mp3", seconds: 23.2 },
  "history-of-tom-jones-a-foundling": { file: "/samples/history-of-tom-jones-a-foundling.mp3", seconds: 26.4 },
  "i-am-a-woman": { file: "/samples/i-am-a-woman.mp3", seconds: 27.4 },
  "incidents-in-the-life-of-a-slave-girl": { file: "/samples/incidents-in-the-life-of-a-slave-girl.mp3", seconds: 23.2 },
  "jane-eyre": { file: "/samples/jane-eyre.mp3", seconds: 19.0 },
  "lady-audleys-secret": { file: "/samples/lady-audleys-secret.mp3", seconds: 19.9 },
  "life-on-the-mississippi": { file: "/samples/life-on-the-mississippi.mp3", seconds: 24.9 },
  "little-women": { file: "/samples/little-women.mp3", seconds: 19.9 },
  "lorna-doone": { file: "/samples/lorna-doone.mp3", seconds: 15.4 },
  "love-and-freindship": { file: "/samples/love-and-freindship.mp3", seconds: 26.6 },
  "manon-lescaut": { file: "/samples/manon-lescaut.mp3", seconds: 14.3 },
  "meditations": { file: "/samples/meditations.mp3", seconds: 22.6 },
  "middlemarch": { file: "/samples/middlemarch.mp3", seconds: 27.6 },
  "moby-dick": { file: "/samples/moby-dick.mp3", seconds: 14.8 },
  "narrative-of-the-life-of-frederick-douglass": { file: "/samples/narrative-of-the-life-of-frederick-douglass.mp3", seconds: 22.3 },
  "paul-clifford": { file: "/samples/paul-clifford.mp3", seconds: 17.7 },
  "peter-pan": { file: "/samples/peter-pan.mp3", seconds: 25.3 },
  "pride-and-prejudice": { file: "/samples/pride-and-prejudice.mp3", seconds: 16.9 },
  "romeo-and-juliet": { file: "/samples/romeo-and-juliet.mp3", seconds: 28.2 },
  "sense-and-sensibility": { file: "/samples/sense-and-sensibility.mp3", seconds: 23.6 },
  "sonnets-from-the-portuguese": { file: "/samples/sonnets-from-the-portuguese.mp3", seconds: 18.4 },
  "the-adventures-of-ferdinand-count-fathom": { file: "/samples/the-adventures-of-ferdinand-count-fathom.mp3", seconds: 28.1 },
  "the-adventures-of-roderick-random": { file: "/samples/the-adventures-of-roderick-random.mp3", seconds: 19.2 },
  "the-adventures-of-sherlock-holmes": { file: "/samples/the-adventures-of-sherlock-holmes.mp3", seconds: 27.9 },
  "the-adventures-of-tom-sawyer": { file: "/samples/the-adventures-of-tom-sawyer.mp3", seconds: 22.2 },
  "the-blue-castle": { file: "/samples/the-blue-castle.mp3", seconds: 14.1 },
  "the-blue-lagoon": { file: "/samples/the-blue-lagoon.mp3", seconds: 22.8 },
  "the-brothers-karamazov": { file: "/samples/the-brothers-karamazov.mp3", seconds: 28.6 },
  "the-complete-works-of-william-shakespeare": { file: "/samples/the-complete-works-of-william-shakespeare.mp3", seconds: 28.9 },
  "the-confessions-of-st-augustine": { file: "/samples/the-confessions-of-st-augustine.mp3", seconds: 26.5 },
  "the-count-of-monte-cristo": { file: "/samples/the-count-of-monte-cristo.mp3", seconds: 25.5 },
  "the-countess-of-pembrokes-arcadia": { file: "/samples/the-countess-of-pembrokes-arcadia.mp3", seconds: 21.9 },
  "the-diary-of-samuel-pepys": { file: "/samples/the-diary-of-samuel-pepys.mp3", seconds: 16.5 },
  "the-enchanted-april": { file: "/samples/the-enchanted-april.mp3", seconds: 15.7 },
  "the-expedition-of-humphry-clinker": { file: "/samples/the-expedition-of-humphry-clinker.mp3", seconds: 22.1 },
  "the-extraordinary-adventures-of-arsene-lupin": { file: "/samples/the-extraordinary-adventures-of-arsene-lupin.mp3", seconds: 27.7 },
  "the-germany-and-the-agricola-of-tacitus": { file: "/samples/the-germany-and-the-agricola-of-tacitus.mp3", seconds: 24.2 },
  "the-great-gatsby": { file: "/samples/the-great-gatsby.mp3", seconds: 18.8 },
  "the-hound-of-the-baskervilles": { file: "/samples/the-hound-of-the-baskervilles.mp3", seconds: 23.4 },
  "the-house-on-the-borderland": { file: "/samples/the-house-on-the-borderland.mp3", seconds: 22.1 },
  "the-innocence-of-father-brown": { file: "/samples/the-innocence-of-father-brown.mp3", seconds: 25.4 },
  "the-interesting-narrative-of-the-life-of-olaudah-equiano": { file: "/samples/the-interesting-narrative-of-the-life-of-olaudah-equiano.mp3", seconds: 23.7 },
  "the-king-in-yellow": { file: "/samples/the-king-in-yellow.mp3", seconds: 28.7 },
  "the-lady-of-the-lake": { file: "/samples/the-lady-of-the-lake.mp3", seconds: 18.2 },
  "the-lives-of-the-twelve-caesars": { file: "/samples/the-lives-of-the-twelve-caesars.mp3", seconds: 24.4 },
  "the-man-who-was-thursday": { file: "/samples/the-man-who-was-thursday.mp3", seconds: 28.9 },
  "the-memoirs-of-sherlock-holmes": { file: "/samples/the-memoirs-of-sherlock-holmes.mp3", seconds: 18.4 },
  "the-merry-adventures-of-robin-hood": { file: "/samples/the-merry-adventures-of-robin-hood.mp3", seconds: 20.4 },
  "the-monk": { file: "/samples/the-monk.mp3", seconds: 21.5 },
  "the-moonstone": { file: "/samples/the-moonstone.mp3", seconds: 28.9 },
  "the-murder-of-roger-ackroyd": { file: "/samples/the-murder-of-roger-ackroyd.mp3", seconds: 11.6 },
  "the-mysteries-of-udolpho": { file: "/samples/the-mysteries-of-udolpho.mp3", seconds: 29.3 },
  "the-mysterious-affair-at-styles": { file: "/samples/the-mysterious-affair-at-styles.mp3", seconds: 21.1 },
  "the-mystery-of-edwin-drood": { file: "/samples/the-mystery-of-edwin-drood.mp3", seconds: 23.8 },
  "the-odyssey": { file: "/samples/the-odyssey.mp3", seconds: 26.0 },
  "the-phantom-of-the-opera": { file: "/samples/the-phantom-of-the-opera.mp3", seconds: 24.2 },
  "the-picture-of-dorian-gray": { file: "/samples/the-picture-of-dorian-gray.mp3", seconds: 28.1 },
  "the-red-lily": { file: "/samples/the-red-lily.mp3", seconds: 30.2 },
  "the-return-of-sherlock-holmes": { file: "/samples/the-return-of-sherlock-holmes.mp3", seconds: 24.6 },
  "the-romance-of-tristan-and-iseult": { file: "/samples/the-romance-of-tristan-and-iseult.mp3", seconds: 15.6 },
  "the-secret-of-chimneys": { file: "/samples/the-secret-of-chimneys.mp3", seconds: 29.8 },
  "the-sign-of-the-four": { file: "/samples/the-sign-of-the-four.mp3", seconds: 27.3 },
  "the-sorrows-of-young-werther": { file: "/samples/the-sorrows-of-young-werther.mp3", seconds: 28.6 },
  "the-strange-case-of-dr-jekyll-and-mr-hyde": { file: "/samples/the-strange-case-of-dr-jekyll-and-mr-hyde.mp3", seconds: 26.9 },
  "the-string-of-pearls": { file: "/samples/the-string-of-pearls.mp3", seconds: 21.6 },
  "the-turn-of-the-screw": { file: "/samples/the-turn-of-the-screw.mp3", seconds: 16.8 },
  "the-valley-of-fear": { file: "/samples/the-valley-of-fear.mp3", seconds: 27.9 },
  "the-woman-in-white": { file: "/samples/the-woman-in-white.mp3", seconds: 20.0 },
  "the-wonderful-wizard-of-oz": { file: "/samples/the-wonderful-wizard-of-oz.mp3", seconds: 21.3 },
  "thuvia-maid-of-mars": { file: "/samples/thuvia-maid-of-mars.mp3", seconds: 21.8 },
  "treasure-island": { file: "/samples/treasure-island.mp3", seconds: 24.1 },
  "twenty-years-after": { file: "/samples/twenty-years-after.mp3", seconds: 27.5 },
  "undine": { file: "/samples/undine.mp3", seconds: 24.8 },
  "war-and-peace": { file: "/samples/war-and-peace.mp3", seconds: 20.4 },
  "wuthering-heights": { file: "/samples/wuthering-heights.mp3", seconds: 23.3 },
};

export function bookSample(slug: string) {
  return BOOK_SAMPLES[slug] ?? null;
}
