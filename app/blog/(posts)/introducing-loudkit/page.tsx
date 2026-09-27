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

export default function IntroducingLoudkitArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Loudkit is the open-source speech engine behind LoudReader, available
          for developers to build into their own projects. It turns text into
          audio on your hardware, with 28 voices across 10 languages and SDKs
          for Python, Swift, Go, Rust and TypeScript. Download the models once,
          then generate speech offline. There is no Loudkit account or usage
          fee, and the engine sends no telemetry. The code and both model
          releases use Apache-2.0. You can choose a built-in voice or create a
          profile from a short recording you have permission to use. If you
          want to add speech to an app, a tool or a local service, this is the
          part of LoudReader you can now build with directly.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Your text, a voice you choose, audio generated on your hardware."
      />

      <QuestionSection question="Why make the speech engine its own project?">
        <p>
          I want speech to be something you can put inside your own software.
          A reader, a study tool or an accessibility feature should be able to
          speak without sending each passage to a hosted speech service. With
          Loudkit, you can inspect the code, keep the model locally and decide
          how speech fits into the rest of your product.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          brings that approach to reading books, articles and documents.
          Releasing the engine opens it to ideas beyond a reading app. You
          supply the interface and the workflow; Loudkit supplies the voice.
        </p>
      </QuestionSection>

      <QuestionSection question="What can you build with this release?">
        <p>
          Start with text and save spoken audio, or stream longer passages as
          they are generated. The SDKs let you bring that into the language
          your project already uses. Python has the reference implementation;
          Swift, Go, Rust and TypeScript have their own guides and runtime
          requirements.
        </p>
        <p>
          There are two models: <code>loudr-1</code> and{" "}
          <code>loudr-1-turbo</code>. They share the voice-profile format and
          public API. Begin with the default model, then compare Turbo using
          the text you actually want people to hear. The{" "}
          <a
            href="https://loudkit.loudreader.io/guides/11-choosing-a-model/"
            className="text-loudBlue hover:underline"
          >
            model guide
          </a>{" "}
          explains the choice without treating one speed measurement as a
          promise for every device.
        </p>
      </QuestionSection>

      <QuestionSection question="What does running locally mean in practice?">
        <p>
          After the initial model download, speech generation stays on your
          machine. You do not need a speech-service account or a per-character
          allowance. You do need room for the model and the dependencies for
          your chosen runtime. Those requirements vary by SDK and backend, so
          check the{" "}
          <a
            href="https://loudkit.loudreader.io/supported/"
            className="text-loudBlue hover:underline"
          >
            supported platforms and limits
          </a>{" "}
          before choosing a deployment target.
        </p>
        <p>
          Local speech is one part of an application. If your app fetches a web
          page or sends a prompt to an online model, those actions still use
          the network. Loudkit gives you control over where the speech itself
          happens.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you choose or make your own voice?">
        <p>
          Both model releases include 28 voices across 10 languages. Listen
          before choosing: English has been evaluated by ear; the other nine
          languages have automated checks but still need native-speaker review.
          Feedback on pronunciation and naturalness is useful, especially on
          the material you plan to read.
        </p>
        <p>
          You can also make a portable voice profile from roughly five to ten
          seconds of clean speech. Use your own recording or obtain the
          speaker&apos;s permission. The{" "}
          <a
            href="https://loudkit.loudreader.io/guides/03-cloning-a-voice/"
            className="text-loudBlue hover:underline"
          >
            voice-cloning guide
          </a>{" "}
          covers the additional models and input requirements. A saved profile
          works with either synthesis model.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you try Loudkit?">
        <p>
          The Python quickstart is a short route to a first audio file. In a
          Python environment that meets the{" "}
          <a
            href="https://loudkit.loudreader.io/guides/01-getting-started/"
            className="text-loudBlue hover:underline"
          >
            installation guide
          </a>
          &apos;s requirements, run:
        </p>
        <pre className="overflow-x-auto rounded-xl bg-gray-900 p-5 text-sm leading-relaxed text-gray-100">
          <code>{`pip install "loudkit[torch,audio,hub]"
loudkit speak --voice joe "Hello from Loudkit." --play -o hello.wav`}</code>
        </pre>
        <p>
          The first run fetches the model files. The command saves a WAV and
          asks your system player to play it. From there, try a passage from
          your own project and another voice. That is a better first test than
          judging a speech engine from a feature list.
        </p>
      </QuestionSection>

      <QuestionSection question="Where do LoudReader and agents fit?">
        <p>
          For a ready-made reading experience, LoudReader provides{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            natural offline voices
          </Link>{" "}
          on iPhone, iPad and compatible Apple Silicon Macs. Loudkit is for building your own
          experience. And{" "}
          <a
            href="https://loudkit.loudreader.io/agents/"
            className="text-loudBlue hover:underline"
          >
            Loudkit for agents
          </a>{" "}
          is a separate companion preview for talking to an agent you already
          use. That preview currently needs an Apple Silicon Mac; its setup
          page explains which integrations are tested. These are three ways
          into the same idea: speech that can run on your own hardware.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <section className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 md:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Build something that speaks
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Read the guides, try a voice and bring your questions or findings to
          the repository.
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href="https://loudkit.loudreader.io/overview/"
            className="inline-flex rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Read the Loudkit docs
          </a>
          <a
            href="https://github.com/loudreader/loudkit"
            className="inline-flex items-center font-semibold text-loudBlue hover:underline"
          >
            Get the source on GitHub →
          </a>
        </div>
      </section>
    </ArticleLayout>
  );
}
