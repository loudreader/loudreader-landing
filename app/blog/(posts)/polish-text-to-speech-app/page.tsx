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

export default function PolishTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads
          Polish EPUBs and PDFs aloud with one Polish narrator, Tomasz. One
          voice, not a roster to pick from, and it's worth saying that
          plainly instead of implying a choice that isn't there. The narrator
          runs entirely on your device, so it's fully on-device and private,
          your library never leaves your device, and it works offline once
          you've imported a book. Import any DRM-free Polish EPUB or PDF, or
          grab a Polish classic from the 70,000+ free Project Gutenberg books
          built into the app, and the voice shows up in the narrator picker
          once your library has a Polish book in it. You can hear Tomasz
          before you install anything on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          , where every narrator has a real audio sample.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Polish text, read aloud, on your device."
      />

      <QuestionSection question="Does LoudReader actually speak Polish?">
        <p>
          Yes. <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          ships a Polish narrator named Tomasz as part of its 10-language
          roster. Import a DRM-free Polish EPUB or PDF and the app reads it
          aloud, word by word, with the same import-and-play flow it uses for
          English books. There's no separate Polish app or mode to find. It's
          built into the same reader, and the narrator appears in the voice
          picker automatically once your library has a Polish-language book
          in it.
        </p>
      </QuestionSection>

      <QuestionSection question="How many Polish voices can I choose from?">
        <p>
          One. That's worth saying plainly rather than letting you assume
          there's a lineup. English has 11 narrators and Spanish has 4, but
          Polish, like German, French, Italian, Dutch, Portuguese, Swedish,
          and Danish, ships with a single voice. If you want to hear exactly
          what Tomasz sounds like before you commit to anything, the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          has a real recorded sample, not a description. Listening beats
          reading an adjective like "calm" or "clear" and hoping it matches
          your ear.
        </p>
      </QuestionSection>

      <QuestionSection question="Is Polish text to speech hard to get right?">
        <p>
          Polish has a reputation among language learners for consonant
          clusters and a case system that changes word endings constantly,
          which is a fair reason to worry about whether a synthetic voice can
          keep up. The honest answer is that you should listen and judge for
          yourself rather than take a marketing claim about it. The{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          plays Tomasz reading real Polish sentences, so you can hear how it
          handles your language before you rely on it for study or for a
          Polish-language book you actually want to finish.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you actually import and listen to?">
        <p>
          LoudReader reads any DRM-free EPUB or PDF, in Polish or any of its
          other languages. That covers books you already own as files,
          documents you write yourself, and study material. It also has
          70,000+ free Project Gutenberg books built in, including
          Polish-language classics, so you can test the Polish voice on a
          real book without hunting down your own file first. One concession
          worth making here: LoudReader reads the text layer of a document. A
          PDF that's really a scanned image of a printed page has no text for
          the app to read, in Polish or anything else.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the Polish voice cost?">
        <p>
          The app itself is free with unlimited listening, cover to cover, no
          account and no word quota. The free tier's one chosen voice comes
          from the English lineup, not Tomasz, so hearing the Polish
          narrator needs Premium, which adds all 23 studio narrators across
          10 languages along with playback speed from 0.3x to 3.0x, a sleep
          timer, soundscapes, and notes and highlights. Either way, the
          Polish narrator itself never streams anything to a server. It runs
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
          to try it, or listen to Tomasz first on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear the Polish narrator for yourself"
        subline="One voice, real samples, no account needed to listen."
      />
    </ArticleLayout>
  );
}
