import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function FrenchTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads
          French EPUBs and PDFs aloud with one French narrator, Antoine. One
          voice, not a roster to pick from, and it's worth saying that plainly
          instead of implying a choice that isn't there. The narrator runs
          entirely on your device, so it's fully on-device and private, your
          library never leaves your device, and it works offline once you've
          imported a book. Import any DRM-free French EPUB or PDF, or grab a
          French classic from the 70,000+ free Project Gutenberg books built
          into the app, and the voice shows up in the narrator picker once
          your library has a French book in it. You can hear Antoine before
          you install anything on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          , where every narrator has a real audio sample.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="French text, read aloud, on your device."
      />

      <QuestionSection question="Does LoudReader actually speak French?">
        <p>
          Yes. LoudReader reads books aloud with natural offline voices, and
          Antoine, the French narrator, is one of them. He&apos;s part of the
          app&apos;s 10-language roster. Import a DRM-free French EPUB or PDF
          and the app
          reads it aloud, word by word, with the same import-and-play flow it
          uses for English books. There's no separate French app or mode to
          find. It's built into the same reader, and the narrator appears in
          the voice picker automatically once your library has a
          French-language book in it.
        </p>
      </QuestionSection>

      <QuestionSection question="How many French voices can I choose from?">
        <p>
          One. That's worth saying plainly rather than letting you assume
          there's a lineup. English has 11 narrators and Spanish has 4, but
          French, like German, Italian, Dutch, Polish, Portuguese, Swedish,
          and Danish, ships with a single voice. If you want to hear exactly
          what Antoine sounds like before you commit to anything, the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          has a real recorded sample, not a description. Listening beats
          reading an adjective like "measured" or "clear" and hoping it
          matches your ear.
        </p>
      </QuestionSection>

      <QuestionSection question="Is it Parisian French, Quebecois, or Belgian French?">
        <p>
          The app doesn't split that out as a setting. Antoine is labeled the
          French narrator, full stop, with no toggle for regional accent. If
          that distinction is important for your project, say studying for an
          exam or proofing French copy by ear, the honest move
          is to listen to the sample on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          and judge it against your own ear rather than assume either way.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you actually import and listen to?">
        <p>
          LoudReader reads any DRM-free EPUB or PDF, in French or any of its
          other languages. That covers books you already own as files,
          documents you write yourself, and study material. It also has
          70,000+ free Project Gutenberg books built in, including
          French-language classics, so you can test the French voice on a real
          book without hunting down your own file first. One concession worth
          making here: LoudReader reads the text layer of a document. A PDF
          that's really a scanned image of a printed page has no text for the
          app to read, in French or anything else.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the French voice cost?">
        <p>
          The app itself is free with unlimited listening, cover to cover, no
          account and no word quota. The free tier's one chosen voice comes
          from the English lineup, so hearing Antoine means Premium, which
          adds all 23 studio narrators across 10 languages along with
          playback speed from 0.3x to 3.0x, a sleep timer, soundscapes, and
          notes and highlights. Either way, the French
          narrator itself never streams anything to a server. It runs on your
          phone or Mac, so listening stays fully on-device and private, your
          library never leaves your device. If you're learning French rather
          than just reading it, our notes on{" "}
          <Link
            href="/blog/text-to-speech-for-esl-learners"
            className="text-loudBlue hover:underline"
          >
            using text-to-speech to learn a language
          </Link>{" "}
          cover pacing and repetition tricks that apply here too.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear the French narrator for yourself"
        subline="One voice, real samples, no account needed to listen."
      />
    </ArticleLayout>
  );
}
