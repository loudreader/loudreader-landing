import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, VOICES } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function MultilingualTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads text
          aloud in 10 languages: {VOICES.languageList}. That's{" "}
          {VOICES.headline}, but the roster isn't even across languages.
          English carries 11 narrators and Spanish carries 4; the other eight
          languages, German, French, Italian, Dutch, Polish, Portuguese,
          Swedish, and Danish, each ship with exactly one voice. Every
          narrator runs entirely on your device, so the app is fully
          on-device and private, your library never leaves your device, and
          there's no account to set up first. Narrators for a language show
          up in the picker once your library has a book in that language.
          You can hear every one of them, in their own language, on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          before you install anything.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="One reader, 10 languages, 23 narrators."
      />

      <QuestionSection question="What languages does LoudReader actually cover?">
        <p>
          Ten of them: English, Spanish, German, French, Italian, Dutch,
          Polish, Portuguese, Swedish, and Danish. Import a DRM-free EPUB or
          PDF in any of those languages and{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          reads it aloud with a narrator who actually speaks that language,
          not an English voice doing an accent. The full roster is{" "}
          {VOICES.headline}, and the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          plays a real sample of every one of them, each narrator reading in
          their own language.
        </p>
      </QuestionSection>

      <QuestionSection question="Is the roster the same depth in every language?">
        <p>
          No, and the honest answer matters more than a rounded-up marketing
          number. English has 11 narrators, which is a genuine lineup: warm,
          bright, deep, husky, and everything between. Spanish has 4. Every
          other language on the list, German, French, Italian, Dutch,
          Polish, Portuguese, Swedish, and Danish, ships with exactly one
          narrator. If you're choosing LoudReader because you want to
          compare several native voices in, say, Portuguese or Swedish,
          that's not what's on offer today. What's on offer is one solid
          narrator per language, and you can judge each one for yourself on
          the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          rather than take a description of it on faith.
        </p>
      </QuestionSection>

      <QuestionSection question="How does the app decide which voices to show you?">
        <p>
          The picker is lazy by language: {VOICES.lazyLanguages}. Import an
          English novel and you'll see all 11 English narrators. Add a
          German document and Klaus, the German narrator, appears alongside
          them. You never scroll past 23 names looking for the two or three
          that apply to what you're actually reading; the list grows with
          your library instead of dumping the whole roster on you at once.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you actually import in each language?">
        <p>
          Any DRM-free EPUB or PDF, in any of the 10 supported languages.
          That covers books you already own as files, documents you write
          yourself, and study material in a language you're learning.
          LoudReader also has 70,000+ free Project Gutenberg books built in,
          with classics in several of these languages, so you can test a
          narrator on a real book without hunting down your own file first.
          One concession worth making here: LoudReader reads the text layer
          of a document. A PDF that's really a scanned image of a printed
          page has no text for the app to read, in any language.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the multilingual roster cost?">
        <p>
          The app itself is free with unlimited listening, cover to cover,
          no account and no word quota. The free tier's one chosen voice
          comes from the English lineup, not the other nine languages.
          Hearing the other 22 narrators across all 10 languages requires
          Premium, which also adds playback speed from 0.3x to 3.0x, a sleep
          timer, soundscapes, and notes and highlights. Every narrator, free
          or Premium, runs on your phone or Mac rather than a server, so
          nothing you listen to leaves the device.
        </p>
        <p>
          Download{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader from the App Store
          </a>{" "}
          to try it, or start with the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          and listen to the roster before you decide.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear all 10 languages for yourself"
        subline="23 narrators, real samples, no account needed to listen."
      />
    </ArticleLayout>
  );
}
