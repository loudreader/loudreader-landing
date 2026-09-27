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
      <Tldr><p>If you want to try a book on a run, set it up before moving and start with a short, familiar route where listening is appropriate. Keep the controls simple and pause for crossings, navigation, other people or any stretch that needs your full attention. A book is optional company, not a training aid. If you cannot follow the story comfortably or stay aware of the route, save it for another time.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Prepare the audio before moving and pause when the route needs attention." />
      <QuestionSection question="What is a useful first experiment?"><p>Choose one short chapter or familiar story rather than a long technical passage. Decide on the starting point while stationary. On your first attempt, notice whether you are following the book or frequently needing to rewind.</p><p>You do not have to keep the same audio for every kind of run. A session requiring instructions, pace changes or unfamiliar navigation may be better without a book. We make no claim that listening improves endurance, speed or workout quality.</p></QuestionSection>
      <QuestionSection question="How do you prepare offline playback?"><ol className="list-decimal pl-6 space-y-2"><li>Download an audiobook, or import your ebook into a local TTS reader.</li><li>Open the selected book and make sure its voice resources are ready.</li><li>Try playback briefly without a connection, then restore your normal phone settings.</li><li>Check battery, volume and the headphone pause control before setting off.</li></ol><p>Downloaded recordings also support offline use. Local TTS is another route when you want your own compatible text spoken. It does not mean the whole app has no network features or analytics.</p></QuestionSection>
      <QuestionSection question="How does LoudReader work on a run?"><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads supported DRM-free EPUBs and PDFs on your iPhone. Background playback lets you lock the screen and put the phone in a secure pocket or holder. You still need the phone; this guide does not promise a standalone watch version.</p><p>Once the book and required voice resources are available on the device, narration works offline. Downloads and web imports still need a connection.</p><p>Its playback speed control is Premium. Start at a pace you can follow rather than treating a faster setting as a target. If you are repeatedly missing passages, change the circumstances before increasing the speed.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="What should you do at crossings or interruptions?"><p>Pause when the route needs your attention. Headphone transparency modes or an open ear do not remove distraction, and no equipment setup makes every route appropriate for listening. Follow local conditions and any event rules.</p><p>If you want to search, change a chapter or repair your position, stop somewhere suitable first. The lock screen reduces the steps needed to control audio; it is not a reason to inspect the phone while moving.</p></QuestionSection>
      <QuestionSection question="How do you keep your place between runs?"><p>Stop at a natural break if convenient and note the chapter heading. When you return, replay a short section if you need context. There is no benefit in counting unheard minutes as reading.</p><p>If exercise does not suit the book, try a passenger journey or a quiet walk instead. Our <Link href="/blog/listen-to-books-on-your-commute" className="text-loudBlue hover:underline">commute setup guide</Link> covers preparing a title for unreliable signal. Keep the listening option that feels useful, and leave the rest.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a short chapter on your own terms" subline="Prepare the file and controls before you set off." />
    </ArticleLayout>
  );
}
