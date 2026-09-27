import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function MultilingualTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader offers 23 studio narrators across 10 languages: English,
          Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish
          and Danish. You can keep books in different languages in one library
          and choose a suitable narrator for each listening session. That is
          different from translating a book or promising seamless voice changes
          inside bilingual sentences. Start with the languages you actually
          read, audition their <Link href="/voices" className="text-loudBlue hover:underline">voice samples</Link>
          {' '}and test your own documents. Studio availability depends on your device. Non-English studio voices require
          Premium after the initial voice trial. The app runs on iPhone and
          iPad; compatible Apple Silicon Macs can run its iPad build.
        </p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Choose a narrator for the language of the text you want to hear." />

      <QuestionSection question="Which languages and voices can I choose?">
        <p>
          The studio catalogue has 11 English narrators and four Spanish
          narrators. German, French, Italian, Dutch, Polish, Portuguese, Swedish
          and Danish each have one. The <Link href="/voices" className="text-loudBlue hover:underline">full voice directory</Link>
          {' '}lists the names and lets you hear a sample in each language.
        </p>
        <p>
          A language count is only a starting point. Audition the voices in
          every language you need, using representative passages. If you need a
          specific regional accent, check whether it is explicitly offered;
          a language label alone does not establish that match.
        </p>
      </QuestionSection>

      <QuestionSection question="Why can I only see English voices at first?">
        <p>
          English is available by default. Other languages become available
          when the app finds books in those languages in your library, or when
          you mark them in Settings → Languages You Read. Marking a language
          adds its shipped narrator or narrators to the picker; it does not
          replace the languages already represented by your books.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Mark the languages you read in Settings, or import a book in each language.</li>
          <li>Open a book and select a narrator for that language.</li>
          <li>Play a paragraph while checking that the imported text and chosen voice are right.</li>
          <li>When moving to a different-language book, check the narrator again before a long listen.</li>
        </ol>
        <p>
          If a language is absent from the supported list, adding it in the
          text or changing a document label will not create a new voice.
          Making a narrator visible also does not bypass the trial or Premium
          requirement.
        </p>
      </QuestionSection>

      <QuestionSection question="Does multilingual mean automatic translation or code-switching?">
        <p>
          No translation is provided: a French book remains French. Support for
          several languages also does not guarantee that a selected narrator
          will handle an English quotation inside a French paragraph well.
          Test the actual mixed passage, rather than assuming a smooth change
          of language or narrator within a sentence.
        </p>
        <p>
          For a bilingual lesson, listening to one language&apos;s section at a
          time makes the result easier to check. For a novel with occasional
          foreign phrases, decide whether those passages remain understandable
          enough for your purpose. If automatic language switching is essential,
          make that an explicit part of your app comparison.
        </p>
      </QuestionSection>

      <QuestionSection question="How should I test a multilingual library?">
        <p>
          Choose one short, familiar passage per language, then a more demanding
          page containing dialogue, dates, abbreviations or names. Assess
          intelligibility and pacing separately from whether you like the
          sound of the voice. Keep the passages consistent when comparing apps.
        </p>
        <p>
          For PDFs, inspect the imported text as well as the audio. LoudReader
          supports on-device OCR for scanned PDF pages, but recognition may be
          incomplete and can misread characters. Read import warnings and check
          accents and reading order against the original. A DRM-free EPUB or a
          clean text PDF is a useful starting point when troubleshooting a
          problem that could come from either extraction or narration.
        </p>
        <p>
          You can use the same small set of documents to check offline
          readiness: prepare the books and required voice resources while
          connected, then test playback without a connection. This checks
          whether that reading setup is ready for travel, not whether the
          entire app has no network activity.
        </p>
      </QuestionSection>

      <QuestionSection question="What stays free after the voice trial?">
        <p>
          {FREE_TIER.full} Continuing with non-English studio narrators requires
          Premium. Premium also includes playback-speed controls, the sleep
          timer and soundscapes. Notes and highlights are available without
          Premium. Check the current in-app price for your storefront before
          subscribing for a particular language.
        </p>
        <p>
          Speech is generated on your device, including when you switch among
          supported language voices. The app also has diagnostics, analytics
          and features that need a connection; local narration is a narrower
          claim than saying no data ever leaves the device. The <Link href="/" className="text-loudBlue hover:underline">LoudReader overview</Link>
          {' '}covers the rest of the reader, while the language-learning
          <Link href="/blog/text-to-speech-for-esl-learners" className="text-loudBlue hover:underline"> listening guide</Link>
          {' '}focuses on study routines.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the languages you actually read" subline="Audition the samples, then compare a short passage in each language." />
    </ArticleLayout>
  );
}
