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
      <Tldr><p>
        Choose a narrator by hearing it read the material you care about. Start with the book’s language, compare a few available voices on the same passage, then try a longer section with the one you prefer. Listen for clear pronunciation, useful pauses and a pace you can comfortably follow. You may like one voice for everything or different voices for different books; neither choice needs a genre rule. LoudReader’s <Link href="/voices" className="text-loudBlue hover:underline">browser samples</Link> let you hear its studio roster before downloading. In the app, voice availability depends on your device and access, so confirm that your favourite is available where you will listen.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="A sample creates a shortlist; a passage from your book helps you choose." />
      <QuestionSection question="What should I listen for in a sample?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Clarity.</strong> Can you follow words and sentence boundaries without straining? Include a name or number from your own material if those are important.</li>
          <li><strong>Pacing.</strong> Notice pauses within a sentence and between paragraphs. A voice you like in a greeting may feel different in long prose.</li>
          <li><strong>Tone.</strong> Do you enjoy hearing it? Descriptions such as warm or bright are only shortcuts; your response to the sound matters more.</li>
          <li><strong>Consistency.</strong> Try several paragraphs and a difficult sentence rather than choosing solely from the cleanest demo.</li>
        </ul>
        <p>Use a similar comfortable volume for comparisons. If you change the speed and voice at the same time, it becomes harder to tell which change helped. Pick a voice first, then fine-tune playback if your plan supports it.</p>
      </QuestionSection>
      <QuestionSection question="Should fiction and nonfiction use different voices?">
        <p>They can, but there is no rule that fiction needs drama or nonfiction needs a flat delivery. Try a dialogue scene if you read novels; try definitions and numbers if you read reports. The question is whether that voice helps you follow those passages and remains comfortable to hear.</p>
        <p>A recorded audiobook also offers a particular narrator’s interpretation. If that performance is part of the appeal, TTS may be a different choice rather than a substitute you must prefer. See <Link href="/blog/are-ai-voices-good-enough-for-books" className="text-loudBlue hover:underline">how to judge an AI voice for a whole book</Link> for a longer listening checklist.</p>
      </QuestionSection>
      <QuestionSection question="What voice choices does LoudReader offer?">
        <p>The studio roster has 23 narrators across ten languages: eleven English, four Spanish, and one each for German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish. This is the roster, not a guarantee that every device exposes every voice. Check the in-app picker on your device.</p>
        <p>Languages become visible when they are present in your library or selected in Settings. If you do not see your language, check those settings before assuming there are only English voices. A voice’s language is not a translation setting: use text in the language you want to hear.</p>
        <p>{FREE_TIER.full} The permanent free selection is limited English narration, rather than a promise that you may retain any studio voice from the trial. Premium keeps the full selection supported by your device available afterwards.</p>
      </QuestionSection>
      <QuestionSection question="Can I change my mind after starting a book?">
        <p>Yes. In LoudReader’s reader controls, tap the voice button to cycle through available unlocked voices for the book’s language, or press and hold for the picker. You do not need to restart the book. A voice change takes effect for the next sentence.</p>
        <p>The selected voice is an app-wide preference, not a separate saved narrator for each book. If you switch it while testing a report, remember that choice when returning to your novel. The change does not require deleting the book or importing it again.</p>
      </QuestionSection>
      <QuestionSection question="What if none of the available voices suits me?">
        <p>You can try another reader or a recorded edition; you do not owe a voice a long trial if it is uncomfortable. On supported devices, LoudReader’s Voice Studio can also create a local narrator from about ten seconds of speech. Use your own voice or one you have permission to use. Creating a clone is not a guarantee of perfect pronunciation or an identical performance.</p>
        <p>The all-voices trial allows up to three clone creations; Premium removes that creation quota. Saved clones remain stored when the allowance ends, but their playback access locks without the required access. Start with <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> and its existing samples before deciding whether custom narration is useful for you.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
