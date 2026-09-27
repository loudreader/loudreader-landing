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
        <p>Tomasz is LoudReader&apos;s Polish studio narrator, available on devices that support studio voices. You can use him for supported DRM-free Polish EPUBs and PDFs, whether you want to listen to a book or hear a document you are checking. Start with the <Link href="/voices" className="text-loudBlue hover:underline">browser sample</Link>, then test text containing your own names, numbers and specialist vocabulary. Add Polish in the app&apos;s reading-language settings or import a Polish book to include the language in the voice list. Polish studio narration requires Premium after the initial voice allowance. Narration reads the supplied wording; it is not a translation, grammar checker or guarantee of correct pronunciation.</p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Check both the Polish text and how the narrator reads it." />
      <QuestionSection question="How do you find Tomasz?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> uses languages in your library plus the reading languages you choose in Settings. Select Polish there if you want to see the options before importing a book. There is one Polish studio narrator, not a choice of regional voices.</p>
        <p>The app supports iPhone and iPad and can run as an iPad app on compatible Apple Silicon Macs. Studio voices have additional hardware requirements. If Tomasz is unavailable after selecting Polish, check your device&apos;s voice support before purchasing specifically for Polish narration.</p>
      </QuestionSection>
      <QuestionSection question="What should you check in a Polish file?">
        <p>Compare a paragraph in the reader with the original before judging the voice. Incorrect extraction can make correct narration sound wrong because the text itself has changed.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Diacritics:</strong> check letters such as ą, ć, ę, ł, ń, ó, ś, ź and ż after PDF extraction or OCR.</li>
          <li><strong>Line endings:</strong> watch for words split by line-break hyphens or sentences interrupted by page headers.</li>
          <li><strong>Names and abbreviations:</strong> test the actual examples in your document, not only a generic sample.</li>
          <li><strong>Numbers and references:</strong> verify dates, units, legal references or citations visually when precision matters.</li>
        </ul>
        <p>A familiar paragraph makes these checks easier. For unfamiliar terms, consult a reliable reference or fluent speaker rather than assuming synthetic output is authoritative.</p>
      </QuestionSection>
      <QuestionSection question="Can you use it to proofread Polish writing?">
        <p>Hearing a passage can give you another way to inspect it. For example, you may notice a repeated sentence or an awkward transition when you listen. Pause and compare the passage with your editable source document before making a change.</p>
        <p>The voice does not determine whether grammar, spelling or meaning is correct. Some mistakes are audible, some are not, and a pronunciation error can originate in the synthesiser rather than your writing. Keep a visual proofreading pass and any subject-specific checks you need.</p>
        <p>If you are learning Polish, listening and repeating can be one exercise. It does not replace conversation or feedback from someone who can hear and assess your speaking.</p>
      </QuestionSection>
      <QuestionSection question="What about scanned Polish books?">
        <p>LoudReader&apos;s PDF import can use on-device OCR when a scan lacks usable text. Check the recognised text before a long session, especially on faint pages, older typefaces and multi-column documents. A cleaner scan or a digital edition can give a better starting point.</p>
        <p>DRM-free EPUBs and PDFs are the file formats to use. A protected ebook from another service is not made importable by choosing a Polish voice. Charts, tables and other visual information still need the original page.</p>
      </QuestionSection>
      <QuestionSection question="Is Polish narration free or offline?">
        <p>Try {FREE_TIER.trial}. After that, Tomasz requires Premium. Ongoing free book listening uses an English selection, so it should not be advertised as unlimited free Polish studio narration. Adjustable speed from 0.3x to 3.0x is also Premium.</p>
        <p>Speech is generated on your device rather than by uploading the book for narration. Have the book and desired voice ready, then test playback without a connection before travel. This local speech path is separate from the app&apos;s diagnostics and analytics.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try Tomasz with your own Polish text" subline="Check a short passage and your device’s voice availability before committing to a longer book." />
    </ArticleLayout>
  );
}
