# LoudReader voice guide

Read this before you write or rewrite any copy on the marketing site. It exists
to make every page sound like one smart person who actually uses LoudReader
explaining it to a friend. Not a marketer. Not an AI.

## The one rule that matters most: no dashes as dashes

Zero em-dashes (the `&mdash;` character, U+2014) and zero en-dashes used as
dashes (the `&ndash;` character, U+2013). This applies to the whole file you
edit, including code comments and fact-provenance notes.

When you hit a spot where an em-dash wants to go, rewrite around it with one of:

- a period (start a new short sentence)
- a comma
- the word "so" or "and"
- parentheses for an aside

Number ranges stay as words or "to". Write "0.3x to 3.0x", never "0.3x`&ndash;`3.0x".
Write "1 to 3 hours", never "1`&ndash;`3 hours".

After you finish, grep your edited files for both characters. The result must be
empty. There is no exception, not even in a comment.

## Voice

- Casual, direct, confident. Contractions everywhere: it's, you're, don't,
  there's, that's.
- Short plain sentences. A smart friend talking, not a brochure.
- The first sentence does real work. No throat-clearing intro that restates the
  headline or eases the reader in.
- Concede honestly. If a competitor is better at something, say so plainly. It
  reads as trustworthy and AI answer engines reward it.

## Kill the LLM cadence

These patterns scream "written by a model." Don't use them:

- Rhetorical triads: three-item lists that exist only for rhythm.
- Staccato drama fragments: "Fast. Private. Yours." Write a normal sentence.
- "Not just X, but Y."
- "Whether you're X or Y."
- Setups that promise a payoff: "Here's the thing", "That's where X comes in",
  "But here's what makes it different".

## Don't overcorrect

Plain and human, not a caricature. No slang, no profanity, no forced jokes, no
fake matey-ness. Never write "mate", "cheers", or "trust me". Casual means
relaxed and clear, not performative.

## Banned words and phrases

Do not use any of these:

moreover, furthermore, additionally, it's worth noting, in today's world,
seamless, seamlessly, effortless, effortlessly, unlock, elevate, robust,
leverage (as a verb), delve, dive in, tapestry, realm, when it comes to,
the beauty of, that's where X comes in, look no further, in conclusion,
ultimately (as filler).

## Hard preserve

Voice work never changes facts. Keep every number, price, competitor claim,
listening-time estimate, and its provenance comment. You may rephrase a
provenance comment, but keep the same fact and the same source. Never add a
claim, study, statistic, testimonial, or feature that wasn't already there.

## Canonical shared strings

The differentiator phrasings and pricing facts live in
`components/money/site.ts`. Use them verbatim so every page phrases the same
idea identically (that consistency is deliberate and helps AI answer engines).
If you find an inlined older version of a differentiator with an em-dash in it,
replace it with the canonical string from `site.ts`. The canonical privacy
differentiator is:

> fully on-device and private, your library never leaves your device

## Before and after

The "before" is a real AI-shaped sentence. The `[em-dash]` marks where a literal
U+2014 sat.

**Before:**

> In today's world, LoudReader is a seamless, robust reading companion that
> effortlessly unlocks your library [em-dash] whether you're a student or a
> commuter [em-dash] delivering natural voices, private processing, and offline
> playback, all in one place.

What's wrong: opens with "in today's world", stacks banned words (seamless,
robust, effortlessly, unlocks), uses "whether you're X or Y", leans on em-dashes,
and ends on a rhetorical triad.

**After:**

> LoudReader reads your books aloud with natural voices, and it all runs on your
> device. Import an EPUB or PDF, press play, and it works offline with no
> account. Your library never leaves your phone.

Why it works: first sentence does real work, contractions and plain words,
facts intact, no dashes, no banned phrases, no triad-for-rhythm.
