import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { COMPARISON_COLUMNS, COMPARISON_ROWS, FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function BestLocalAiAppsMacArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Choose a local AI app by the job you want to do and the features
          that actually run on your Mac. <strong>LM Studio</strong> and{" "}
          <strong>Ollama</strong> run downloaded language models;{" "}
          <strong>MacWhisper</strong> transcribes audio with local models;{" "}
          <strong>Draw Things</strong> generates images locally; and{" "}
          <strong>LoudReader</strong> reads books and documents with natural
          offline voices. Some also offer cloud features, so &ldquo;local&rdquo;
          describes a particular workflow, not every button in the app. Below
          are five starting points, the network boundaries to check, and the
          separate developer tools from LoudReader: Loudkit for building with
          speech, and Loudkit for agents for adding voice to an existing bot.
          Start with one task and test it on your own files.
        </p>
        <Disclosure />
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Download what you need, then check which features work without a network."
      />

      <QuestionSection question="What counts as a local AI workflow?">
        <p>
          The model processes your input on your own hardware. Downloading
          models and checking for updates may still require a connection.
          An app may also offer remote models, web search, or external tools.
          Selecting a local model does not automatically make those other
          services local.
        </p>
        <p>
          Running the core feature with Wi-Fi off is a useful availability
          test. It does not prove that an app never communicates when it is
          online. Read its documentation and settings as well, especially
          before processing confidential material. LoudReader, for example,
          generates narration locally but also sends crash/performance diagnostics
          and usage analytics. Local inference alone is not a complete description
          of an app&apos;s data handling.
        </p>
      </QuestionSection>

      <QuestionSection question="Which local AI apps should I look at for each job?">
        <p>
          These entries describe the vendors&apos; documented local workflows,
          checked on September 28, 2026. This is a practical shortlist, not a
          benchmark ranking or a report of hands-on tests.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">LM Studio: local chat.</strong>{" "}
            Download a compatible language model and use it for conversations
            or questions about documents. Its{" "}
            <a href="https://lmstudio.ai/docs/app/offline" className="text-loudBlue hover:underline">offline documentation</a>{" "}
            distinguishes local chat and document processing from model
            discovery, downloads, and update checks that require a network.
          </li>
          <li>
            <strong className="text-gray-900">Ollama: a model runner for apps and tools.</strong>{" "}
            Run a model locally and connect software to it. Ollama also has
            cloud models and web search; its{" "}
            <a href="https://docs.ollama.com/faq#how-do-i-disable-ollama-cloud-features" className="text-loudBlue hover:underline">FAQ explains how to disable cloud features</a>{" "}
            if you want a local-only configuration.
          </li>
          <li>
            <strong className="text-gray-900">MacWhisper: transcription.</strong>{" "}
            Use local speech models to turn recordings into text. Its{" "}
            <a href="https://www.macwhisper.com/" className="text-loudBlue hover:underline">feature page</a>{" "}
            also lists cloud transcription and AI integrations. Check the
            selected provider before using a recording; a local transcript
            and a cloud-generated summary are different processing steps.
          </li>
          <li>
            <strong className="text-gray-900">Draw Things: image generation.</strong>{" "}
            Its <a href="https://drawthings.ai/" className="text-loudBlue hover:underline">local generation workflow</a>{" "}
            runs image models on supported Apple devices. Download the model
            first and choose local generation when you want that processing
            to happen on your Mac.
          </li>
          <li>
            <strong className="text-gray-900">LoudReader: reading and text to speech.</strong>{" "}
            Listen to supported DRM-free EPUBs, PDFs and saved web articles.
            Speech is generated on the device; book downloads, diagnostics and
            usage analytics are separate network activity. LoudReader runs on iPhone,
            iPad, and Apple Silicon Macs; the Mac version is the iPad app
            running in Apple&apos;s compatibility mode. Start with{" "}
            <Link href="/voices" className="text-loudBlue hover:underline">the voice samples</Link>{" "}
            or <a href={APP_STORE_URL} className="text-loudBlue hover:underline">the App Store listing</a>.
          </li>
        </ul>
        <ComparisonTable
          caption="Local AI workflows: what runs on your Mac and what to check separately"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          highlightColumn={4}
        />
      </QuestionSection>

      <QuestionSection question="Where do Loudkit and voice-enabled agents fit?">
        <p>
          <a href="https://loudkit.loudreader.io/" className="text-loudBlue hover:underline">Loudkit</a>{" "}
          is the open-source speech framework from LoudReader, for people
          building their own apps and tools. It provides a CLI and SDKs for
          Python, Swift, TypeScript, Go, and Rust. After the model download,
          speech runs locally. The framework is licensed under Apache-2.0;
          it is a separate project from the LoudReader reading app.
        </p>
        <p>
          <a href="https://loudkit.loudreader.io/agents/" className="text-loudBlue hover:underline">Loudkit for agents</a>{" "}
          adds a voice service to an existing agent. The current developer
          preview runs speech synthesis and transcription on an Apple Silicon
          Mac. Hermes and OpenClaw speech-provider integrations have local
          tests; full delivery through real messaging accounts still needs
          validation. Your agent&apos;s language model and the messenger may
          use online services, with their own costs and data handling.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I check a local setup before relying on it?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Identify the provider.</strong>{" "}
            Check which model is selected and whether it is downloaded or
            hosted remotely. Review separate settings for search, tools,
            transcription, and summaries.
          </li>
          <li>
            <strong className="text-gray-900">Finish setup while online.</strong>{" "}
            Download the models and runtimes, then try the exact task you
            want to repeat offline.
          </li>
          <li>
            <strong className="text-gray-900">Disconnect and repeat.</strong>{" "}
            Use a sample file with no sensitive information. Check that the
            model, file access, and output all work without the connection.
          </li>
          <li>
            <strong className="text-gray-900">Review connected behaviour.</strong>{" "}
            Documentation and an outbound network monitor can help you
            understand online requests. An offline test by itself is not a
            security audit.
          </li>
        </ol>
        <p>
          The speech-specific version of this checklist is in{" "}
          <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device text to speech, explained</Link>.
        </p>
      </QuestionSection>

      <QuestionSection question="Does every local AI app need Apple Silicon?">
        <p>
          Requirements depend on the app, model, and runtime. Do not assume
          all local AI uses the Neural Engine: different tools can use the
          CPU, GPU, or other supported acceleration. Check the vendor&apos;s
          supported hardware and allow enough memory and storage for the
          model you choose. LoudReader specifically requires macOS 15 or
          later on Apple Silicon; our{" "}
          <Link href="/offline-text-to-speech-mac" className="text-loudBlue hover:underline">Mac reading guide</Link>{" "}
          explains the app&apos;s requirements.
        </p>
      </QuestionSection>

      <QuestionSection question="What do I give up by going local?">
        <p>
          You take responsibility for the model files, device capacity,
          updates, and setup. Which quality trade-offs you notice depends on
          the task and model; there is no universal local-versus-cloud score.
          Compare the tools on a recording, document, or prompt you actually
          use. A setup that handles that job well is more useful than a
          broad promise about every possible AI task.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta
        headline="The local AI app for your reading"
        subline="Books and PDFs, read aloud with natural offline voices. Try the samples, then listen on your own device."
      />
    </ArticleLayout>
  );
}
