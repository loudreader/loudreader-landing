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
        <p>Shadowing means repeating spoken language shortly after the speaker, trying to follow the rhythm, stress and phrasing. For a first session, choose a short passage you already understand, listen once, then try speaking along. If keeping up is difficult, pause after each sentence and repeat it before attempting continuous shadowing. A book gives you the text to check. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> can narrate supported EPUBs and PDFs with highlighting and sentence replay; Premium adds speed control. Its synthetic narration can also make pronunciation mistakes, and it does not assess your speaking. Use reliable human recordings or a teacher when you need a pronunciation model or feedback.</p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Listen first, then follow a short passage with your own voice." />
      <QuestionSection question="How is shadowing different from repeating a sentence?">
        <p>In shadowing, the recording continues while you speak just behind it. In listen-and-repeat practice, you pause the recording and say the sentence afterwards. Both are usable exercises; the second gives you more time to work out unfamiliar sounds and wording.</p>
        <p>Do not worry about achieving a precise half-second delay. Choose a short phrase, notice where the speaker stresses a word or pauses, and try to reproduce that feature. If you are dropping whole words, use a shorter phrase or listen again without speaking. The purpose is deliberate practice, not keeping the audio moving at all costs.</p>
      </QuestionSection>
      <QuestionSection question="What kind of material should you choose?">
        <p>Choose a paragraph you can mostly understand without a dictionary. Dialogue, a short explanation or a familiar story can work. Check that the language is relevant to the situations you want to speak in: an older novel may contain wording you would not use in a current conversation.</p>
        <p>A book provides a stable text and an easy place to return to. A recording of a real conversation exposes you to interruptions, different speakers and informal phrasing. Neither replaces the other. Synthetic narration is convenient for your own text, but names, unusual spellings and regional pronunciation deserve checking against a reliable recording or dictionary.</p>
        <p>Our <Link href="/blog/easy-english-books-to-listen-to" className="text-loudBlue hover:underline">English book suggestions</Link> can help you find reading material. Pick a passage for its language and difficulty, rather than assuming a children&apos;s classic must be easy.</p>
      </QuestionSection>
      <QuestionSection question="What does a short practice session look like?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Prepare the passage.</strong> Read it once and check the meaning of words that would otherwise stop you mid-sentence.</li>
          <li><strong>Listen without speaking.</strong> Follow the text and notice one feature, such as which word receives the strongest stress.</li>
          <li><strong>Repeat one sentence.</strong> Pause and say it in your own voice. Return to the recording when you are unsure.</li>
          <li><strong>Try shadowing.</strong> Play the passage again and speak slightly behind it. A few sentences are enough for a first attempt.</li>
          <li><strong>Compare one feature.</strong> If you choose to record yourself in a separate recording app, compare the stress or phrasing you were practising. Ask a teacher or fluent speaker when you cannot hear the difference.</li>
          <li><strong>Use the language.</strong> Make your own sentence with one useful phrase. Copying a recording and producing a new thought are different tasks.</li>
        </ol>
        <p>Five or ten minutes is a reasonable starting plan, not a researched prescription. Stop when the practice becomes rushed or uncomfortable, and return to a shorter passage next time.</p>
      </QuestionSection>
      <QuestionSection question="How do sentence replay and speed work in LoudReader?">
        <p>Import a supported DRM-free EPUB or PDF, open it and start narration. The app highlights the text as it plays. Tap a sentence to return to its start. When the controls are hidden during playback, the first tap reveals them; then tap the sentence you want to hear.</p>
        <p>The backward skip seeks by sentences around the requested interval, so it is useful for a quick replay but is not a precise loop button. There is no dedicated automatic sentence-repeat exercise. For concentrated practice, tap the specific sentence again.</p>
        <p>Playback-speed control from 0.3x to 3.0x requires Premium. Begin near normal speed and reduce it if necessary, keeping in mind that the version you eventually want to follow is natural-paced speech. Free playback uses normal speed, so a shorter sentence may be more useful than a difficult paragraph. See <Link href="/blog/slow-down-audiobook-speed" className="text-loudBlue hover:underline">the playback-speed guide</Link> for the controls.</p>
      </QuestionSection>
      <QuestionSection question="What can the app help with, and what is missing?">
        <p>LoudReader supplies repeatable narration and a visible text. It does not listen to your shadowing, score an accent or tell you whether you produced a sound correctly. Voice cloning is a separate feature and is not pronunciation assessment. A successful imitation of one passage also does not establish that you can hold a conversation on a new topic.</p>
        <p>{FREE_TIER.full} The app is for iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. Download or import what you need before an offline session. Speech generation is on-device, while the app also has separate diagnostics and analytics.</p>
        <p>Combine focused speaking practice with the broader reading routine in <Link href="/blog/reading-english-books-non-native" className="text-loudBlue hover:underline">reading English books as a non-native speaker</Link>.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Practise with a passage you want to read" subline="Use highlighting and sentence replay. Playback-speed adjustment requires Premium." />
    </ArticleLayout>
  );
}
