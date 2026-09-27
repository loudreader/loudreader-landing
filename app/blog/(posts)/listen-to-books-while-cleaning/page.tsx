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
        <p>Books can fit alongside some household jobs, especially quiet, familiar tasks such as folding laundry. They are a poor match for a task that needs concentration or drowns out the narration. Prepare the book, put the phone somewhere dry and test a pause control before your hands are occupied. Pause for the vacuum, a conversation or anything that needs your attention instead of turning the volume up to compete. The point is to enjoy part of a book while doing a suitable chore, not to make every minute of housework count as reading.</p>
      </Tldr>

      <ArticleIllustration variant="devices" caption="Use the quiet tasks for listening. Pause for the noisy ones." />

      <QuestionSection question="Which chores make a sensible listening slot?">
        <p>Try a task whose next step you already know and that leaves room to follow a story. Sorting clean clothes, dusting a familiar room or tidying a shelf may suit you. Reading labels, following a new recipe, using tools or dealing with something unexpected asks for more attention.</p><p>Test one short section rather than assuming the whole cleaning session will work. If you keep rewinding, either the book or the task needs a different setting.</p>
      </QuestionSection>

      <QuestionSection question="How should I set up the phone and audio?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose and start the passage with clean, dry hands. Test the speaker or headphones at a comfortable volume.</li>
          <li>Put the phone on a stable, dry surface away from splashes, cleaning products and the area you are working on. A plastic bag is not a substitute for a suitable location.</li>
          <li>Test your accessory’s play/pause control. Commands vary by model; do not assume every button gesture works the same way.</li>
          <li>Lock the screen and try a short task. Pause before moving equipment or doing anything that needs your full attention.</li>
        </ol><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> supports background playback and standard media controls on iPhone. That provides the playback capability; compatibility with a particular speaker or button still deserves a quick test.</p>
      </QuestionSection>

      <QuestionSection question="What should I do during the noisy parts?">
        <p>Pause. If narration is being drowned out by the vacuum or running water, raising it to compete is not a useful listening strategy. Resume afterwards and rewind a little if the last sentence was lost.</p><p>You can group quiet tasks into one listening session if that is convenient, but there is no reason to reorganise all the housework around a chapter. Noise cancelling may alter what you hear around you; it does not remove the need to notice alarms, people or the job itself.</p>
      </QuestionSection>

      <QuestionSection question="Which books are easiest to return to?">
        <p>Choose a familiar story, a short essay or anything whose thread survives a pause for you. A novel with a large cast may work well if you know it; a seemingly simple book may not if you are distracted. Sample the actual book rather than treating a genre as a guarantee.</p><p>Save passages that require a diagram, careful note-taking or verification for a <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">focused read-and-listen session</Link>. You can keep a separate light listening choice for chores without abandoning your more demanding reading.</p>
      </QuestionSection>

      <QuestionSection question="How do I use my own ebook?">
        <p>Import a supported DRM-free EPUB or PDF into LoudReader and check a page before beginning. Local narration can continue without a connection once the book and required voice resources are available; test that setup first if your home has a dead zone.</p><p>When switching to music or another app, pause the book yourself rather than assuming the app switch will stop audio. Resume from a passage you recognise afterwards. See <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the import walkthrough</Link> if the file is new to you.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
