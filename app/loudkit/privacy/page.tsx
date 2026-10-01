import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "loudkit Privacy Policy",
  description:
    "Privacy policy for loudkit and its plugin for ChatGPT and Codex. loudkit runs on your computer and sends us nothing.",
  alternates: { canonical: "/loudkit/privacy" },
};

export default function LoudkitPrivacyPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="text-center py-16 md:py-24 px-6 w-full bg-gradient-to-b from-softBeige via-white to-softBeige">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            loudkit Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: 1 October 2026</p>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What this policy covers</h2>
            <p>
              This policy covers <Link href="/loudkit" className="underline">loudkit</Link>: the
              open-source library, the <code>loudkit</code> command, the voice profiles, and the
              loudkit plugin for ChatGPT and Codex. The LoudReader app has{" "}
              <Link href="/privacy" className="underline">its own privacy policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What we collect</h2>
            <p>
              <strong>Nothing.</strong> loudkit runs on your own computer. We operate no server
              that receives your text, your audio, your recordings or your voice profiles, and
              loudkit sends no usage data, analytics or crash reports to us.
            </p>
            <p className="mt-4">
              The ONNX Runtime that the ONNX backends load has telemetry of its own. loudkit turns
              it off before the runtime starts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What stays on your computer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The text you synthesise and the audio loudkit makes.</li>
              <li>
                Recordings you clone a voice from, and the voice profiles that cloning writes.{" "}
                <code>loudkit clone</code> saves a profile readable by its owner only on macOS and
                Linux.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Network connections</h2>
            <p>loudkit connects to other services only to fetch software and models:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Hugging Face</strong> (huggingface.co), to download the model, the voices
                and the cloning models. Loading a model by name can also ask Hugging Face whether a
                newer revision exists. Load a local release directory instead and no request is
                made.
              </li>
              <li>
                <strong>Package registries</strong> (PyPI, npm, crates.io, the Go module proxy,
                GitHub for Swift packages), when you install loudkit.
              </li>
            </ul>
            <p className="mt-4">
              These services see the request, including your IP address, as with any download.
              Their own privacy policies apply. loudkit sends them no text, audio or recordings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The plugin for ChatGPT and Codex</h2>
            <p>
              The plugin contains instructions only. It has no server, and we receive nothing when
              you use it.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                In a coding agent with a shell, the plugin runs loudkit where that shell runs: on
                your computer, or in a cloud environment you chose, such as a Codex cloud task.
                Either way, nothing is sent to us.
              </li>
              <li>In ChatGPT, the plugin gives you code and commands to run locally.</li>
            </ul>
            <p className="mt-4">
              Your conversation, including any text or file you share in it, is processed by
              OpenAI under its own privacy policy, not by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">This website</h2>
            <p>
              Pages on loudreader.io, including this one, follow the website section of the{" "}
              <Link href="/privacy" className="underline">LoudReader privacy policy</Link>:
              analytics load only after you allow them in the banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children</h2>
            <p>loudkit is a developer tool and is not directed at children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes and contact</h2>
            <p>
              We publish changes to this policy on this page and update the date above. Questions:
              open an issue at{" "}
              <a href="https://github.com/loudreader/loudkit/issues" className="underline">
                github.com/loudreader/loudkit/issues
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
