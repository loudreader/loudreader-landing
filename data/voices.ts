/*
 * The narrator roster, as /voices presents it.
 *
 * Read out of the shipping app (the studio voice enum: roster, language map
 * and picker blurbs), not remembered. Audited 2026-08-20 against the same
 * source as components/money/site.ts VOICES.
 *
 * Counting rule, matching site.ts: 23 = 11 English + 4 Spanish + one each for
 * German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish. The
 * two QA references in the enum (David, Golden) never reach a user and are not
 * listed here.
 *
 * Blurbs are the app's own one-line character notes, verbatim — including the
 * non-English ones, which the app writes in the narrator's own language for
 * the same reason this page plays each narrator reading their own: a caption
 * in English under a Polish voice reads like a translation of the voice
 * rather than a description of it.
 *
 * Engine and model names are deliberately absent from this repo. See
 * components/money/site.ts.
 */

export type Voice = {
  /** Filename base in public/voices, and the app's own identifier. */
  id: string;
  name: string;
  /** The app's picker blurb, in the narrator's own language. */
  blurb: string;
};

export type VoiceLanguage = {
  code: string;
  /** English name, for headings and metadata. */
  name: string;
  /** The language's own name for itself, shown beside it. */
  endonym: string;
  voices: Voice[];
};

export const VOICE_LANGUAGES: VoiceLanguage[] = [
  {
    code: "en",
    name: "English",
    endonym: "English",
    voices: [
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
    ],
  },
  {
    code: "es",
    name: "Spanish",
    endonym: "Español",
    voices: [
      { id: "sofia", name: "Sofía", blurb: "Cálida y clara" },
      { id: "hector", name: "Hector", blurb: "Grave y pausada" },
      { id: "diego", name: "Diego", blurb: "Firme, buen ritmo" },
      { id: "valentina", name: "Valentina", blurb: "Suave, muy cercana" },
    ],
  },
  {
    code: "de",
    name: "German",
    endonym: "Deutsch",
    voices: [{ id: "klaus", name: "Klaus", blurb: "Ruhig und sachlich" }],
  },
  {
    code: "fr",
    name: "French",
    endonym: "Français",
    voices: [{ id: "antoine", name: "Antoine", blurb: "Posée, tout en nuance" }],
  },
  {
    code: "it",
    name: "Italian",
    endonym: "Italiano",
    voices: [{ id: "marco", name: "Marco", blurb: "Calda, ritmo naturale" }],
  },
  {
    code: "nl",
    name: "Dutch",
    endonym: "Nederlands",
    voices: [{ id: "daan", name: "Daan", blurb: "Rustig en helder" }],
  },
  {
    code: "pl",
    name: "Polish",
    endonym: "Polski",
    voices: [{ id: "tomasz", name: "Tomasz", blurb: "Spokojny, wyraźny" }],
  },
  {
    code: "pt",
    name: "Portuguese",
    endonym: "Português",
    voices: [{ id: "rafael", name: "Rafael", blurb: "Clara e pausada" }],
  },
  {
    code: "sv",
    name: "Swedish",
    endonym: "Svenska",
    voices: [{ id: "erik", name: "Erik", blurb: "Lugn och tydlig" }],
  },
  {
    code: "da",
    name: "Danish",
    endonym: "Dansk",
    voices: [{ id: "mads", name: "Mads", blurb: "Rolig og nær" }],
  },
];

export const ALL_VOICES: Voice[] = VOICE_LANGUAGES.flatMap((l) => l.voices);
