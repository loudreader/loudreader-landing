import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ItalianTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads
          Italian EPUBs and PDFs aloud with one Italian narrator, Marco. One
          voice, not a roster to pick from, and it's worth saying that
          plainly instead of implying a choice that isn't there. The narrator
          runs entirely on your device, so it's fully on-device and private,
          your library never leaves your device, and it works offline once
          you've imported a book. Import any DRM-free Italian EPUB or PDF, or
          grab an Italian classic from the 70,000+ free Project Gutenberg
          books built into the app, and the voice shows up in the narrator
          picker once your library has an Italian book in it. You can hear
          Marco before you install anything on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          , where every narrator has a real audio sample.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Italian text, read aloud, on your device."
      />

      <QuestionSection question="Does LoudReader actually speak Italian?">
        <p>
          Yes. <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          ships an Italian narrator named Marco as part of its 10-language
          roster. Import a DRM-free Italian EPUB or PDF and the app reads it
          aloud, word by word, with the same import-and-play flow it uses for
          English books. There's no separate Italian app or mode to find.
          It's built into the same reader, and the narrator appears in the
          voice picker automatically once your library has an
          Italian-language book in it.
        </p>
      </QuestionSection>

      <QuestionSection question="How many Italian voices can I choose from?">
        <p>
          One. That's worth saying plainly rather than letting you assume
          there's a lineup. English has 11 narrators and Spanish has 4, but
          Italian, like German, French, Dutch, Polish, Portuguese, Swedish,
          and Danish, ships with a single voice. If you want to hear exactly
          what Marco sounds like before you commit to anything, the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          has a real recorded sample, not a description. Listening beats
          reading an adjective like "warm" or "natural" and hoping it matches
          your ear.
        </p>
      </QuestionSection>

      <QuestionSection question="Is one voice enough for learning Italian by ear?">
        <p>
          For learning, one consistent narrator is arguably a feature. You
          get used to Marco's pacing and pronunciation instead of
          re-adjusting to a new voice every book, which is closer to how a
          language tutor sounds over a semester than how an audiobook
          catalog is built. The honest limit: if your goal is comparing
          accents or hearing multiple native speakers, LoudReader's Italian
          roster won't get you there. One narrator is what's on offer, and
          the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          lets you judge whether that one voice works for you before you rely
          on it for study time.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you actually import and listen to?">
        <p>
          LoudReader reads any DRM-free EPUB or PDF, in Italian or any of its
          other languages. That covers books you already own as files,
          documents you write yourself, and study material. It also has
          70,000+ free Project Gutenberg books built in, including
          Italian-language classics, so you can test the Italian voice on a
          real book without hunting down your own file first. One concession
          worth making here: LoudReader reads the text layer of a document. A
          PDF that's really a scanned image of a printed page has no text for
          the app to read, in Italian or anything else.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the Italian voice cost?">
        <p>
          The app itself is free with unlimited listening, cover to cover, no
          account and no word quota. The free tier's one chosen voice comes
          from the English lineup, not Marco, so hearing the Italian
          narrator needs Premium, which adds all 23 studio narrators across
          10 languages along with playback speed from 0.3x to 3.0x, a sleep
          timer, soundscapes, and notes and highlights. Either way, the
          Italian narrator itself never streams anything to a server. It runs
          on your phone or Mac, so listening stays fully on-device and
          private, your library never leaves your device.
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
          to try it, or listen to Marco first on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear the Italian narrator for yourself"
        subline="One voice, real samples, no account needed to listen."
      />
    </ArticleLayout>
  );
}
