import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>For a listening walk, prepare the book before leaving and choose a route where you can give your surroundings the attention they need. Test play and pause with the phone in your pocket; stop somewhere suitable before looking at the screen. A familiar story or short chapter can be easy to return to after crossings and conversations. You do not need to listen for the entire walk. LoudReader can narrate a prepared book locally on iPhone, but check the actual file, voice and battery before relying on it away from a connection.</p>
      </Tldr>

      <ArticleIllustration variant="devices" caption="Prepare the book first. Keep the walk responsive to your surroundings." />

      <QuestionSection question="What should I prepare before I leave?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the next passage and check that the book is present on the phone, not only in an online catalogue.</li>
          <li>Open the desired voice and test playback. If you expect poor signal, try it briefly offline before leaving.</li>
          <li>Test your headphones’ actual pause control, then lock the screen and put the phone in your pocket.</li>
          <li>Check battery level for your planned outing and other needs such as navigation. Do not infer a battery-life promise from offline playback.</li>
        </ol><p>If you are importing an ebook, <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">test the EPUB or PDF</Link> before setting off. An extraction problem is easier to diagnose at a desk than on a pavement.</p>
      </QuestionSection>

      <QuestionSection question="How much of the walk should be listening time?">
        <p>Only the parts that suit it. Pause near crossings, busy paths, unfamiliar terrain or when another person needs your attention. An open-ear design or one earbud may change what you can hear, but neither guarantees awareness of everything around you.</p><p>Leave some of the walk silent if you prefer. The walk does not have to justify itself by finishing a chapter, and listening is not a substitute for watching where you are going.</p>
      </QuestionSection>

      <QuestionSection question="How do I recover a missed sentence without staring at the screen?">
        <p>Use a pause or skip control you tested in advance when it is appropriate to do so. If you need to inspect the text or change settings, stop somewhere suitable away from the flow of people and traffic. Rejoin the story at a passage you recognise.</p><p>On iPhone, <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> can continue narration with the screen locked and exposes system playback controls. The exact gestures on headphones vary by accessory; do not assume a single tap always means the same command.</p>
      </QuestionSection>

      <QuestionSection question="Which books suit a walk?">
        <p>Try a book whose thread you can recover after a pause. That might be a novel, a memoir, an essay collection or a reread. Short chapters are convenient stopping points, but there is no genre that automatically works for everybody.</p><p>If the text repeatedly asks you to examine a figure, compare spellings or make detailed notes, give it a stationary session. The <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">read-and-listen setup</Link> is a better fit for those passages.</p>
      </QuestionSection>

      <QuestionSection question="What should I expect offline and on a long outing?">
        <p>Existing books can be narrated without streaming speech when the necessary voice resources are available. Book and resource downloads still need to happen beforehand, so test rather than assuming every voice is already ready.</p><p>Power use depends on the device, voice, settings, battery condition and other apps. This guide has no measured “hours per charge” result. For a longer outing, plan power around the phone functions you need and treat the book as optional. If the routine works for you, <Link href="/blog/how-to-build-a-reading-habit" className="text-loudBlue hover:underline">build on one suitable walk</Link> instead of trying to fill every journey with audio.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
