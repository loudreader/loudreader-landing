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
        <p>LoudReader&apos;s Spanish studio roster has four narrators: Sofía, Hector, Diego and Valentina. Compare their <Link href="/voices" className="text-loudBlue hover:underline">browser samples</Link>, then try a passage from the Spanish book or document you actually want to hear. Voice availability depends on the device. Add Spanish to your reading languages in Settings or import a Spanish book to include the language in the picker. All four are part of the initial allowance when available on your hardware; continued Spanish studio narration requires Premium afterwards. These are narration choices, not a promise of four named regional accents, a translated interface or automatic translation of an English book.</p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Compare the same Spanish passage before choosing a narrator for a long book." />
      <QuestionSection question="How should you compare the four voices?">
        <p>Begin with the samples for Sofía, Hector, Diego and Valentina on the voices page. Listen for the qualities that matter to you: whether you can follow the phrasing, whether the tone suits the material and whether you want to hear it for more than a short demo.</p>
        <p>Next, compare the same passage in the app using the available voices. A familiar paragraph helps separate your opinion of the voice from difficulty with the text. If the book contains dialogue, include dialogue; if it contains technical vocabulary, include that too.</p>
        <p>We do not assign these voices to specific Spanish-speaking countries. If a regional pronunciation is central to your goal, compare with an appropriate human recording or course resource. A pleasant sample alone does not establish pronunciation accuracy across a whole book.</p>
      </QuestionSection>
      <QuestionSection question="Why might Spanish be missing from the picker?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> builds its language list from your library and your reading-language choices in Settings. Select Spanish there before importing if you want to inspect the voices first.</p>
        <p>Language selection and device support are separate. The app runs on iPhone and iPad and can run on compatible Apple Silicon Macs as an iPad app; the studio roster is not guaranteed on every device. Check the options on the device you intend to use.</p>
      </QuestionSection>
      <QuestionSection question="What Spanish material can you import?">
        <p>Use supported DRM-free EPUBs and PDFs: novels, your own documents or study material you can legitimately download into another reader. Protected files from a separate book platform cannot be unlocked by LoudReader.</p>
        <p>Check the imported text for accents, ñ, punctuation and reading order. PDF import can attempt on-device OCR for scans, but unclear print, columns and footnotes may produce errors. Keep the original for tables or diagrams and verify names, dates and specialist terms.</p>
        <p>A Spanish narrator reads the supplied text; choosing one does not translate an English book. For a document that switches languages, test the mixed passage itself instead of assuming that one voice will pronounce everything as intended.</p>
      </QuestionSection>
      <QuestionSection question="How can learners use the narration?">
        <p>Take a short section you mostly understand. Listen while following the text, pause to explain the meaning, and replay a sentence when you want to inspect its phrasing. Use another source to check unfamiliar pronunciation rather than learning an uncertain synthetic rendering by repetition.</p>
        <p>Keep human conversations and recordings in your practice as well. Four synthetic voices do not cover the range of speakers, situations or accents you may encounter. LoudReader does not listen to your response or assess your Spanish.</p>
      </QuestionSection>
      <QuestionSection question="What is free, and what needs a connection?">
        <p>Try {FREE_TIER.trial}. Sofía, Hector, Diego and Valentina require Premium after that allowance. Free book listening continues with an English voice selection. Playback-speed adjustment from 0.3x to 3.0x is also Premium; the voice allowance should not be confused with access to every paid control.</p>
        <p>Narration runs locally once the required files are available. Import or download the book and check the desired voice before testing offline playback. Books are not uploaded to a speech server for narration, but the app also has separate diagnostics and analytics.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Find the Spanish narrator that suits your book" subline="Compare the samples, check your device and test a real passage during the initial voice allowance." />
    </ArticleLayout>
  );
}
