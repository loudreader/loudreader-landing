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
        Yes. In LoudReader, tap the reader’s voice button to cycle through available unlocked narrators for the book’s language, or press and hold to open the picker. A change takes effect on the next sentence; you do not need to restart the book or wait for a chapter break. The selected voice is an app-wide preference, so remember the change when returning to another book. Which voices appear depends on your device, library languages and language settings. {FREE_TIER.full} After the trial, switching remains possible within your free selection; locked voices require Premium.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Choose another narrator in the reader; the change takes effect for the next sentence." />
      <QuestionSection question="How do I change the voice while reading?">
        <ol className="list-decimal pl-6 space-y-2"><li><strong>Open the reader controls.</strong> Find the control showing the current voice.</li><li><strong>Tap to cycle.</strong> The quick cycle stays within the detected language of the book and uses voices you can currently access.</li><li><strong>Press and hold to choose directly.</strong> The picker groups voices by language and marks the active voice.</li><li><strong>Select the narrator and continue.</strong> If a voice is locked, the app offers the relevant upgrade instead of silently changing your selection.</li></ol>
        <p>If a tap seems to do nothing, the book’s language may have only one available unlocked voice. Open the picker to inspect the options. You can hear the studio roster in the <Link href="/voices" className="text-loudBlue hover:underline">browser samples</Link>, but confirm availability on the device you will use.</p>
      </QuestionSection>
      <QuestionSection question="When will I hear the new narrator?">
        <p>The player reflects your selection immediately, while the speech transition is scheduled for the next sentence. The sentence already playing finishes in the previous voice. Give it that boundary before assuming the change failed; a long sentence may make the delay more noticeable.</p>
        <p>Changing the narrator does not require restarting or importing the book again. It changes the voice setting rather than creating a new copy of the book. You can select the previous voice again if you prefer it.</p>
      </QuestionSection>
      <QuestionSection question="Why can I not see another language?">
        <p>The list follows languages present in your library or selected in Settings, as well as device support. Check your reading-language settings if you expected more options. A studio roster of 23 narrators across ten languages does not mean every device and language has the same number of choices.</p>
        <p>The quick cycle uses the book’s detected language. Choosing a different-language voice deliberately in the picker prompts for confirmation. That changes how the existing text is pronounced; it does <strong>not</strong> translate the book. If the detected language is wrong, inspect the book’s text and settings rather than using a foreign-language voice as a translation shortcut.</p>
      </QuestionSection>
      <QuestionSection question="Which voices can I switch between for free?">
        <p>{FREE_TIER.full} The permanent choice is Stella or Rio, with Bella also available on supported devices. It is not an unrestricted choice of any studio narrator. Premium keeps the full voice selection supported by your device available after the trial.</p>
        <p>The picker can show locked voices as well as usable ones, so visible does not always mean unlocked. Check the access indicator before assuming a missing switch is a playback error. Notes and ordinary word-following highlighting are not Premium-only features.</p>
      </QuestionSection>
      <QuestionSection question="Does each book remember its own narrator?">
        <p>No. LoudReader stores the selected narrator as an app-wide preference. If you change it for a report, the new selection also affects subsequent listening elsewhere until you switch again. This differs from your saved place in each book.</p>
        <p>If you are comparing several voices, use the same passage and choose one before changing playback speed. Our <Link href="/blog/how-to-choose-a-narrator-voice" className="text-loudBlue hover:underline">narrator selection guide</Link> explains what to listen for. The <Link href="/" className="text-loudBlue hover:underline">LoudReader app</Link> runs on iPhone and iPad, and on Apple Silicon Macs as an iPad app.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
