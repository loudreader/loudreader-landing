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
      <Tldr><p>Try a book during a part of your gym session where you can follow it comfortably, such as an easy warm-up or a familiar cardio routine. Pause for equipment setup, instructions and sets that need your concentration. Prepare the book and test playback before you arrive, so a connection or control problem does not interrupt your session. Listening is optional: if you keep missing either the book or what is happening around you, a different time may work better.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Pause the book when the session needs your attention." />
      <QuestionSection question="Which parts of a session suit a book?"><p>Start with a short segment rather than committing to the entire workout. A story you already know can be easier to return to after an interruption than a technical chapter. Notice whether you can still follow the exercise and remember the paragraph you just heard.</p><p>Rest periods are not necessarily long enough to settle into a passage. You may prefer to leave the book paused through a block of sets and resume for a longer, quieter interval. This is a listening preference, not a claim that audio improves fitness or performance.</p></QuestionSection>
      <QuestionSection question="What should you prepare before leaving home?"><ol className="list-decimal pl-6 space-y-2"><li>Download a recording, or import the ebook and prepare the voice resources for a local TTS reader.</li><li>Open the exact book and play a sample; do not assume that downloading an app downloads the book.</li><li>Check play/pause and volume on your own headphones. Gestures and skip controls differ by model.</li><li>Choose a starting chapter, secure your phone and leave the controls easy to reach when stationary.</li></ol><p>Downloaded audiobooks can also work offline. TTS is useful if you want to hear your own compatible EPUB or PDF, rather than because every alternative requires streaming.</p></QuestionSection>
      <QuestionSection question="How does LoudReader fit this workflow?"><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads supported DRM-free EPUBs and PDFs on iPhone and iPad, with the iPad build also available on compatible Apple Silicon Macs. On iPhone, background playback and lock-screen controls let you put the screen away during listening.</p><p>Once the book and required voice resources are available on the device, narration works offline. Downloads and web imports still need a connection.</p><p>Standard media controls are supported, but test how your headphones map their buttons before relying on them. Do not assume this is a standalone Apple Watch app.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="How should you handle interruptions and noise?"><p>Pause when someone speaks to you, an instructor gives directions, or you need to adjust equipment. Return to a convenient sentence or paragraph afterwards. If noise keeps masking the voice, wait for a quieter moment instead of continually raising the volume.</p><p>A missed passage is not a problem to solve in the middle of a difficult set. Finish what needs your attention, then use the playback controls. You can also keep the book for your journey home.</p></QuestionSection>
      <QuestionSection question="What makes a good first choice?"><p>Try a familiar novel, a short story or a chapter with a clear narrative. The point is to find something you personally follow with interruptions, not to match a genre to your heart rate. Save diagrams, detailed instructions or material requiring notes for a setting where you can inspect the page.</p><p>For another outdoor use case, see <Link href="/blog/listen-to-books-while-running" className="text-loudBlue hover:underline">listening while running</Link>. The same principle applies: the surroundings and activity decide when to pause.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Prepare a book before your next session" subline="Try a short section and test your playback controls first." />
    </ArticleLayout>
  );
}
