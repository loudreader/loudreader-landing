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

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>Klaus is LoudReader&apos;s German studio narrator. On devices that support studio voices, you can use him to listen to supported DRM-free German EPUBs and PDFs. Hear the browser sample on the <Link href="/voices" className="text-loudBlue hover:underline">voices page</Link>, then test a passage from your own book: a sample cannot establish how every name, abbreviation or specialised term will sound. German can be added to your reading languages in Settings; importing a German book is another way to make the language appear. Studio availability depends on the device, and continuing with Klaus after the initial voice allowance requires Premium. The app does not offer a choice of German regional accents.</p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Check the voice with the German material you actually want to hear." />
      <QuestionSection question="How do you find the German narrator?">
        <p>In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, the voice list reflects languages in your library and languages you select in Settings. Add German there if you want to inspect the available voices before importing a book. If Klaus is missing, check your device&apos;s studio-voice support as well as the language selection.</p>
        <p>The app runs on iPhone and iPad, and its iPad build can run on compatible Apple Silicon Macs. That platform support does not mean every device exposes the same narrators. Use the in-app list to establish what is available on your hardware before purchasing for a particular voice.</p>
      </QuestionSection>
      <QuestionSection question="Is Klaus a standard, Austrian or Swiss German voice?">
        <p>Klaus is listed as a German narrator, without a selectable regional-accent setting. There is one German studio voice. We do not label it as a substitute for every regional variety or an authoritative pronunciation model for an exam.</p>
        <p>If accent is important, compare the sample with the speech you need to understand or produce. A course recording, dictionary audio or teacher can be a better reference for a particular pronunciation. Narration is useful for hearing a text repeatedly; it does not provide language coaching or correct your speaking.</p>
      </QuestionSection>
      <QuestionSection question="What should you test in a German book?">
        <p>Use a paragraph containing the features that matter in your actual material. For a novel, that may be dialogue and character names. For a report, include abbreviations, dates and numbers. For a technical chapter, include the specialist vocabulary rather than testing only its introduction.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Import the file and compare the first passage with the original.</li>
          <li>Check that umlauts, ß and punctuation have survived extraction.</li>
          <li>Listen for places where a name, abbreviation or long word needs checking.</li>
          <li>Keep the original available for tables, figures and footnotes.</li>
        </ol>
        <p>A voice that suits one novel may be less useful for a specialist document. It is better to discover that in a short sample than halfway through a long listening session.</p>
      </QuestionSection>
      <QuestionSection question="Can you use scanned German PDFs or translated books?">
        <p>LoudReader imports DRM-free EPUBs and PDFs. PDF import includes on-device text recognition for scans, but recognition errors can change spelling or reading order. Old typefaces, unclear scans and complex layouts need checking; a clean digital edition is often easier to use.</p>
        <p>Selecting a German voice does not translate a book into German. Start with German text. Likewise, narration does not turn a chart into a spoken explanation of its meaning. Review any visually structured material separately.</p>
      </QuestionSection>
      <QuestionSection question="What does German narration cost, and does it work offline?">
        <p>Try {FREE_TIER.trial}. Continuing with Klaus afterwards requires Premium; the ongoing free English voice selection is separate from German studio access. Speed adjustment from 0.3x to 3.0x also requires Premium. Check the current in-app price for your storefront.</p>
        <p>Speech is generated on your device rather than by uploading the book for narration. Download or import the book and make sure the desired voice is available before testing offline playback. The app also has diagnostics and analytics, so local speech should not be confused with an app that never uses the network.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try German narration with a real passage" subline="Listen to the sample, then check Klaus on your device. German studio access requires Premium after the voice allowance." />
    </ArticleLayout>
  );
}
