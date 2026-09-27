import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER, REQUIREMENTS } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>Apple Silicon can run speech models locally, using the CPU, GPU or Neural Engine according to the model and runtime. That can remove a speech server from the listening workflow, but it does not automatically make an app faster, more private or better sounding. LoudReader&apos;s iPad app can run on compatible Apple Silicon Macs; it does not have a separate native macOS build. Developers can use the open-source Loudkit framework with several runtime options. Choose between those routes by what you want to do: read a document, add speech to software, or experiment with a model. Then check support on your exact device.</p>
      </Tldr>
      <ArticleIllustration variant="devices" caption="Choose a supported runtime, then test the voice and workload you need." />
      <QuestionSection question="What does the Neural Engine actually do?">
        <p>The Neural Engine is an accelerator for supported machine-learning operations. A speech pipeline includes several stages, and a runtime may distribute work rather than putting every operation on one processor. Apple&apos;s <a href="https://developer.apple.com/documentation/coreml/mlcomputeunits" className="text-loudBlue hover:underline">Core ML compute-unit documentation</a> describes options for the CPU, GPU and Neural Engine.</p>
        <p>For a listener, the processor label is less useful than whether a long passage plays smoothly. For a developer, it matters which model operations the backend supports and how the pipeline behaves on the target device. Neither audience should read a chip&apos;s advertised capability as a measured speech benchmark.</p>
      </QuestionSection>
      <QuestionSection question="What should I check before choosing an app?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Compatibility.</strong> Check the app&apos;s OS and hardware requirements, not just whether your Mac has an M-series chip.</li>
          <li><strong>The actual voice.</strong> Try names, numbers, dialogue and a longer passage in the language you need.</li>
          <li><strong>Setup requirements.</strong> Find out whether models need downloading and allow storage for them.</li>
          <li><strong>Behaviour offline.</strong> Try a new passage after disconnecting, once setup is complete.</li>
          <li><strong>Data handling.</strong> Read what the whole app sends, not only where speech generation happens.</li>
        </ul>
        <p>These checks help you judge a finished workflow. They do not require buying a newer computer just because its accelerator has a larger number in a specification sheet.</p>
      </QuestionSection>
      <QuestionSection question="How does LoudReader fit on a Mac?">
        <p>LoudReader is for listening to your books and documents. Its iPad build can run on a compatible Apple Silicon Mac through Apple&apos;s compatibility mode. Published requirements are {REQUIREMENTS}. The <Link href="/blog/read-aloud-on-macbook" className="text-loudBlue hover:underline">MacBook guide</Link> explains the interface and the absence of automatic progress sync.</p>
        <p>{FREE_TIER.full} Studio narrator availability depends on hardware, so check your installed voice picker. Narration is local, but version 1.12 also uses crash diagnostics and usage analytics enabled by default. That distinction matters more than calling the whole app “on the Neural Engine”.</p>
      </QuestionSection>
      <QuestionSection question="When would I use Loudkit instead?">
        <p><a href="https://loudkit.loudreader.io/" className="text-loudBlue hover:underline">Loudkit</a> is the open-source speech framework for developers. It offers Python, Swift, Go, Rust and TypeScript SDKs with backend-specific requirements. Apple-oriented Core ML support is one route; other runtimes target CPU and GPU execution on other platforms.</p>
        <p>Start with the <a href="https://loudkit.loudreader.io/supported/" className="text-loudBlue hover:underline">support matrix</a>, then follow the guide for your SDK. A runtime listed as supported is not a claim that every device, dependency version and long-form input has been measured. Test the same workload you plan to ship.</p>
      </QuestionSection>
      <QuestionSection question="Does this mean Intel Macs cannot run good local speech?">
        <p>No. LoudReader&apos;s Apple Silicon requirement describes that app, not a physical rule for every speech engine. Other local models and system voices have different requirements. Voice quality depends on the model, voice, language and text; performance also depends on the runtime and hardware.</p>
        <p>We have not published a battery or quality comparison establishing that Apple Silicon always wins. Compare the tools you can run on the computer you already have. For a broader explanation of the architecture, see <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device text to speech explained</Link>.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a book in LoudReader" subline="Import a DRM-free EPUB or PDF and choose a voice available on your device." />
    </ArticleLayout>
  );
}
