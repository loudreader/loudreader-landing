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

export default function PortugueseTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader can read Portuguese EPUBs and PDFs using Rafael, its
          Portuguese studio narrator. It does not offer a Brazilian/European
          Portuguese switch, so audition the <Link href="/voices" className="text-loudBlue hover:underline">sample</Link>
          {' '}and a passage from your own material before choosing it for a
          particular accent. Studio voice availability depends on your device. Portuguese narration is included in the voice
          trial and requires Premium afterwards. The app is available on
          iPhone and iPad, with the iPad build usable on compatible Apple
          Silicon Macs. Speech runs locally and can work offline once the book
          and required voice resources are ready.
        </p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Start with one representative page, then check a longer Portuguese passage." />

      <QuestionSection question="How do I check whether the Portuguese voice suits my reading?">
        <p>
          Begin with the kind of text you plan to use. A reader listening to a
          Brazilian novel, a student working through a Portuguese course and
          someone reviewing a work report may want different things from the
          same voice. Pick a short paragraph whose meaning and pronunciation
          you already know, then one with unfamiliar names, numbers or dialogue.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Can you follow the rhythm without looking at every word?</li>
          <li>Are names and recurring terms clear enough for this document?</li>
          <li>Do pauses separate sentences and speakers sensibly?</li>
          <li>After a few minutes, is the voice still comfortable to listen to?</li>
        </ul>
        <p>
          These checks are a practical audition, not a claim that Rafael has
          passed a regional pronunciation assessment. LoudReader lists the
          narrator as Portuguese without a selectable regional variant. If an
          exact accent is the main requirement, compare it with a source that
          explicitly identifies the variety you need.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I turn on Portuguese in the app?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Import a DRM-free Portuguese EPUB or PDF.</li>
          <li>Choose Rafael in the narrator picker. Voices become available through the languages found in your library.</li>
          <li>If Portuguese is not shown, go to Settings → Languages You Read and mark Portuguese.</li>
          <li>Play your test passage and follow the displayed text before starting a longer session.</li>
        </ol>
        <p>
          You can mark Portuguese in Settings before importing anything. This
          reveals the voice; the trial or Premium entitlement still determines
          access. The <Link href="/voices" className="text-loudBlue hover:underline">voice directory</Link>
          {' '}lets you hear Rafael without installing the app first.
        </p>
      </QuestionSection>

      <QuestionSection question="Should I use an EPUB, a PDF or a scan?">
        <p>
          Use a DRM-free EPUB when you have a choice of editions, and check a
          PDF&apos;s extracted text before a long listen. The current app also
          recognises text from scanned PDF pages using on-device OCR, but
          recognition can miss words or pages. Review import warnings and
          compare a sample with the original, especially accents, line breaks,
          columns and footnotes. A narrator cannot repair text that was
          extracted incorrectly.
        </p>
        <p>
          An ebook locked inside another service is a different issue:
          LoudReader does not remove DRM. Start with a supported file you are
          entitled to use. See the <Link href="/" className="text-loudBlue hover:underline">reader overview</Link>
          {' '}for the app&apos;s general import and listening features.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I use it to practise Portuguese?">
        <p>
          Try a short listen-read-listen cycle: hear a paragraph, read it while
          listening, then replay it without looking. Make a note of the words
          that caused difficulty instead of repeatedly restarting the entire
          chapter. If pronunciation is your focus, check those words against
          your course audio or another reliable spoken reference.
        </p>
        <p>
          TTS adds a repeatable way to hear written material. It does not
          assess your spoken Portuguese, provide conversation practice or
          translate the book. The <Link href="/blog/text-to-speech-for-esl-learners" className="text-loudBlue hover:underline">listening practice guide</Link>
          {' '}has more ideas for combining text and audio; its routine can be
          adapted to Portuguese.
        </p>
      </QuestionSection>

      <QuestionSection question="Is Portuguese narration free, and can I listen offline?">
        <p>
          {FREE_TIER.full} Rafael requires Premium after the trial. Premium also
          adds playback-speed controls, the sleep timer and ambient soundscapes;
          notes and highlights remain available without Premium. Current prices
          are shown in the app for your storefront.
        </p>
        <p>
          Import the book and prepare the voice while connected, then try a
          chapter offline before a journey. Speech processing is local; book
          downloads and other online services still need a connection. The app
          also uses diagnostics and analytics, so local narration should not be
          read as a claim that the whole app sends no data.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try Rafael with a Portuguese passage" subline="Hear the sample, then check the text and accent against your own material." />
    </ArticleLayout>
  );
}
