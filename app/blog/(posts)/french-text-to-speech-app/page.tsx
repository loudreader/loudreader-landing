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

export default function FrenchTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader reads French books and documents aloud with Antoine, its
          French studio narrator. Start with the <Link href="/voices" className="text-loudBlue hover:underline">voice sample</Link>,
          then try a page from the material you actually want to hear: a novel,
          a university handout or your own writing. The app offers one French
          studio voice and no regional-accent selector. Studio voice availability depends on your device. French narration is
          available during the voice trial and requires Premium afterwards.
          LoudReader runs on iPhone and iPad; its iPad build also runs on
          compatible Apple Silicon Macs. Speech is generated locally and can
          work offline after the book and required voice resources are ready.
        </p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Test a French passage you know before committing to a whole book." />

      <QuestionSection question="How do I find the French narrator?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Import a DRM-free French EPUB or PDF you have permission to use.</li>
          <li>Open the narrator picker and look for Antoine. A French-language book in your library makes the French narrator available.</li>
          <li>If the voice is missing, open Settings → Languages You Read and mark French. You can do this before importing a book, too.</li>
          <li>Select Antoine and play a short passage while following the text.</li>
        </ol>
        <p>
          Adding French to the list makes the narrator visible; it does not
          unlock Premium or translate an English book. For the broader list of
          supported languages, see <Link href="/voices" className="text-loudBlue hover:underline">all narrators and samples</Link>.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I listen for in a French sample?">
        <p>
          Use two different passages. Choose a straightforward paragraph first,
          then a trickier one with dialogue, names, dates or abbreviations. Check
          whether pauses follow the meaning, whether recurring names remain
          understandable and whether you can follow a few minutes comfortably.
          A pleasant opening sentence cannot tell you how a narrator will handle
          the rest of your document.
        </p>
        <p>
          If you are learning French, compare unfamiliar pronunciations with
          audio from your course or a trusted dictionary. Synthetic narration
          is useful for replaying material, but it should not be your only
          pronunciation reference. Our <Link href="/blog/text-to-speech-for-esl-learners" className="text-loudBlue hover:underline">language-learning listening routine</Link>
          {' '}suggests ways to alternate listening and reading without treating
          faster playback as the goal.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I choose French from France, Quebec or Belgium?">
        <p>
          Antoine is listed as a French narrator; the app does not offer a
          France, Quebec or Belgium switch. Listen to the sample and your own
          test passage before relying on it for a regional pronunciation task.
          If matching a particular variety is essential, choose a service or
          recorded source that explicitly identifies that variety and audition
          it with the same passage.
        </p>
      </QuestionSection>

      <QuestionSection question="Will it read a scanned French PDF?">
        <p>
          The current app can use on-device optical character recognition
          (OCR) to extract text from scanned PDF pages. Prefer a clean EPUB or
          selectable-text PDF when you have one: a scan can introduce missing
          accents, joined words or a confusing reading order. Before a long
          listen, compare the imported text with a page containing accents,
          apostrophes and any footnotes. Read import warnings about incomplete
          recognition rather than assuming every page was recovered.
        </p>
        <p>
          If the displayed text is wrong, that is an import problem to resolve
          before judging the narrator. If the displayed text is correct but the
          spoken result is awkward, test another sentence containing the same
          word. LoudReader does not remove DRM from protected ebooks.
        </p>
      </QuestionSection>

      <QuestionSection question="What does French listening cost, and what works offline?">
        <p>
          {FREE_TIER.full} Continuing with Antoine after the trial requires
          Premium. Premium also includes adjustable playback speed, the sleep
          timer and ambient soundscapes; notes and highlights do not require
          Premium. Check the in-app offer for pricing in your storefront.
        </p>
        <p>
          Download your material and finish voice setup while connected, then
          test a chapter offline before travelling. Local speech processing is
          separate from app diagnostics and analytics, which the app also uses.
          It is not a promise that every app feature makes no network requests.
          The <Link href="/" className="text-loudBlue hover:underline">LoudReader overview</Link>
          {' '}covers the reader beyond French narration.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try French narration with your own text" subline="Hear Antoine first, then test a page from the book you want to read." />
    </ArticleLayout>
  );
}
