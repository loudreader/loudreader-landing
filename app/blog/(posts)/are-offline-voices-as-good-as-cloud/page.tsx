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
        Offline and cloud describe where speech is generated, not how good it sounds. Compare the particular voice, language and passage you would actually use. A cloud service may offer controls or a narrator a local app does not; a local voice may be the one you prefer for a whole book. For a useful comparison, judge sound separately from internet requirements, document handling, storage and cost. LoudReader generates narration on your device, but that does not make every app function offline or imply that the app sends no diagnostics. Here is how to compare those trade-offs without inventing a universal quality score.
      </p></Tldr>
      <ArticleIllustration variant="offline" caption="Local narration changes where speech is generated. Voice quality still needs a listening test." />
      <QuestionSection question="How should I compare the sound?">
        <p>Use the same short passage with each voice, at comfortable volume and a similar speaking pace. Include the material that matters to you: names and numbers in a report, dialogue in a novel, or unfamiliar vocabulary in another language. A provider’s polished greeting tells you little about how its voice will handle your document.</p>
        <ul className="list-disc pl-6 space-y-2"><li><strong>Pronunciation:</strong> are words and names intelligible, and are important numbers read correctly?</li><li><strong>Phrasing:</strong> do pauses and emphasis help you follow the sentence?</li><li><strong>Longer listening:</strong> after the short comparison, do you still want to hear that voice for a chapter?</li><li><strong>Controls:</strong> can you adjust the features you actually need, on your device and plan?</li></ul>
        <p>Do not reduce the result to an unsupported percentage. We have not run a controlled listener study comparing LoudReader with cloud services. The <Link href="/voices" className="text-loudBlue hover:underline">voice samples</Link> and your own book are starting points for a personal choice, not proof that one processing location wins.</p>
      </QuestionSection>
      <QuestionSection question="What changes when speech is generated locally?">
        <p>The narration model processes text on your device, so that text does not need to be sent to a speech server for synthesis. Once the required book and voice resources are ready, local narration can continue without an internet connection. Before travel, open the book and test the voice you intend to use offline.</p>
        <p>Local processing uses your device’s compute, memory and storage. Startup time and battery use depend on the model and hardware; we do not have a comparative battery benchmark to claim that it always beats streaming. A cloud service can also offer downloaded or cached audio, so a loss of signal does not necessarily stop every cloud-based product.</p>
      </QuestionSection>
      <QuestionSection question="Does offline speech mean the whole app collects no data?">
        <p>No. Speech processing and the rest of an app’s network activity are separate questions. LoudReader synthesises speech and recognises scanned PDF text locally. It also sends crash/performance diagnostics and usage analytics. Analytics is enabled by default; version 1.12 does not expose a user-facing switch to disable it. Downloading books, saving web articles and App Store purchases also involve network access.</p>
        <p>For a cloud service, check which text or audio it receives, its retention policy and any relevant account settings. For a local app, check diagnostics, backup and sync behaviour as well. Turning off Wi-Fi demonstrates that a prepared book can play offline; it does not audit an app’s behaviour when it reconnects.</p>
      </QuestionSection>
      <QuestionSection question="Which setup fits my reading?">
        <p>Choose around the actual constraint. If you need a specific language or accent, compare available samples first. If you need dependable narration on a journey, test an offline book before leaving. If the text is sensitive, assess the app’s full data handling rather than relying on an offline badge. If you listen for many hours, compare ongoing limits and local resource requirements.</p>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> has 23 studio narrators across 10 languages, with availability depending on the device. {FREE_TIER.full} For the mechanics, see <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device text to speech explained</Link>. For judging book-length narration itself, see <Link href="/blog/are-ai-voices-good-enough-for-books" className="text-loudBlue hover:underline">testing an AI voice on a whole book</Link>.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
