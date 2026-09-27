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
        <p>Marco is the Italian studio narrator in <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>. On supported devices, he can read DRM-free Italian EPUBs and PDFs with text highlighting. Add Italian to your reading languages in Settings or import an Italian book to bring the language into the voice list. There is one Italian studio voice, so listen to its <Link href="/voices" className="text-loudBlue hover:underline">sample</Link> and test your own passage before deciding whether it suits you. Marco can supply repeatable narration for reading practice; he is not a tutor, a pronunciation assessor or a range of regional speakers. Continuing to use the Italian studio voice after the initial allowance requires Premium.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="A familiar Italian passage is a useful first test of the voice and the imported text." />
      <QuestionSection question="How do you make Italian appear in the voice picker?">
        <p>The picker uses languages found in your library together with those you select in Settings. You can select Italian before adding a book. If Marco still does not appear, check studio-voice availability on your device.</p>
        <p>LoudReader is an iPhone and iPad app that can also run on compatible Apple Silicon Macs as an iPad app. Narrator availability varies by hardware, so check the in-app options rather than assuming the entire studio roster is available on every supported device.</p>
      </QuestionSection>
      <QuestionSection question="What makes a useful first Italian passage?">
        <p>Choose text you understand reasonably well. A short paragraph from a familiar story lets you check narration without simultaneously trying to decode unfamiliar vocabulary. If you are testing a work document, choose a passage with the terminology, names and numbers that you actually need to hear.</p>
        <p>Compare the imported text with the original. Check accented letters, apostrophes and sentence breaks, then listen. If a word sounds surprising, consult a reliable dictionary recording or human speaker before treating the synthetic pronunciation as a model.</p>
        <p>There is no need to commit to a full book first. Check how comfortably you can follow several paragraphs, then try a longer section if the result works for you.</p>
      </QuestionSection>
      <QuestionSection question="How can you use narration for Italian practice?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Read the passage once.</strong> Identify words whose meaning would otherwise interrupt your listening.</li>
          <li><strong>Listen with the text visible.</strong> Use the highlight to locate the passage rather than trying to memorise every sentence immediately.</li>
          <li><strong>Replay a sentence you want to practise.</strong> Repeat it if speaking is your goal, or explain its meaning in your own words if comprehension is your goal.</li>
          <li><strong>Check against another source.</strong> Use human recordings and conversation practice to hear speakers beyond the app&apos;s one Italian narrator.</li>
        </ol>
        <p>One consistent voice can make a passage easy to revisit, but that is a convenience, not evidence that it teaches better than several speakers. The app does not assess your pronunciation, explain grammar or translate text merely because you select Italian.</p>
      </QuestionSection>
      <QuestionSection question="What happens with PDFs and scanned pages?">
        <p>DRM-free EPUBs and PDFs are supported. EPUB prose often offers a straightforward reading sequence; a PDF may contain columns, footnotes or figures that need checking after import. Keep the original for material whose meaning depends on its layout.</p>
        <p>LoudReader includes on-device OCR for scanned PDFs. A scan can still produce missing accents, broken words or an incorrect reading order, so inspect a sample before relying on it. If your source is a poor photograph, a cleaner scan or accessible digital edition may be more useful than repeated imports.</p>
      </QuestionSection>
      <QuestionSection question="What is included before and after the voice allowance?">
        <p>Try {FREE_TIER.trial}. Marco requires Premium afterwards; free book listening continues with the English voice selection. Premium also includes adjustable playback speed from 0.3x to 3.0x. The voice allowance does not mean that every Premium control is free during that period.</p>
        <p>Narration is generated locally. Import the book, make the desired voice available and test playback before relying on it without a connection. Diagnostics and analytics are separate from local speech; the app should not be described as making no network requests.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Hear Italian text in Marco’s voice" subline="Check the sample and your device’s voice list. Continued Italian studio narration requires Premium after the allowance." />
    </ArticleLayout>
  );
}
