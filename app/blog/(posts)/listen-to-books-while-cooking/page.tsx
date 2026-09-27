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
      <Tldr><p>A book can fit around familiar kitchen tasks, but it needs an easy pause button. Start playback before your hands are occupied, keep the phone away from heat and splashes, and stop the narration when a recipe or noisy appliance needs your attention. Choose a section you can return to after interruptions. A listening timer is not a cooking timer, and finishing a chapter should never decide when you check the food.</p></Tldr>
      <ArticleIllustration variant="devices" caption="Set up first, and let the book pause around the cooking." />
      <QuestionSection question="Which part of cooking works for listening?"><p>Try a familiar preparation or washing-up task first. A new recipe with several pans, measurements or timed steps may leave little attention for a story. Pause and continue later instead of letting whole paragraphs pass unheard.</p><p>A short essay, a familiar novel or a story with clear chapter breaks may suit the interruptions. Technical material that needs diagrams or notes is easier to save for a different setting. This is about matching the book to your routine, not a promise that multitasking improves either activity.</p></QuestionSection>
      <QuestionSection question="How should you place the phone and speaker?"><p>Set the equipment up before you begin. Put the phone on a stable surface away from water, heat and food preparation. If you use a separate speaker, check that you can pause it without handling the phone with wet or messy hands.</p><p>Keep narration at a level where you can still notice timers and people around you. A louder speaker does not guarantee intelligible speech over an extractor or blender. Pausing is often simpler than competing with the noise.</p></QuestionSection>
      <QuestionSection question="What should you do before pressing play?"><ol className="list-decimal pl-6 space-y-2"><li>Open the book and choose the section you want to hear.</li><li>Check the audio output: make sure it is playing on the intended speaker or headphones.</li><li>Test the device’s play/pause control; gestures vary.</li><li>Set any cooking timer separately, using the recipe and the appropriate appliance.</li><li>Start the book, then leave the phone somewhere stable and accessible.</li></ol><p>If you are using <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> for your own supported EPUB or PDF, prepare the file and selected voice resources first. Its iPhone playback can continue with the screen locked. Once the book and required voice resources are available on the device, narration works offline. Downloads and web imports still need a connection.</p></QuestionSection>
      <QuestionSection question="How do you recover after missing a passage?"><p>Pause at the first convenient moment and go back to a sentence you remember. Avoid repeatedly rewinding while the same task keeps taking your attention; leave the book paused until that step is finished.</p><p>Do not reorganise a recipe to serve the audiobook. Keep the cooking sequence you intended, and let listening fit into the quieter parts. The book can wait.</p></QuestionSection>
      <QuestionSection question="What can LoudReader’s timer and controls do?"><p>LoudReader’s sleep timer is a Premium listening feature. It stops audio after a chosen interval, but it should not replace an alarm you rely on for cooking. Standard media controls support pausing and resuming; test your particular speaker or headphones.</p><p>LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. Notes and highlights are free if you want to mark a passage later. For a quieter session with the text visible, see <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">reading and listening together</Link>.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Keep a book ready for a quiet kitchen task" subline="Import a supported file and test the controls before you start." />
    </ArticleLayout>
  );
}
