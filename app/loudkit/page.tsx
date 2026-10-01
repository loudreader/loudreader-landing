import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "loudkit: open-source offline text to speech",
  description:
    "loudkit is the open-source speech engine behind LoudReader. It runs on your own computer, with open weights, no account and no cloud API.",
  alternates: { canonical: "/loudkit" },
};

const links = [
  { href: "https://github.com/loudreader/loudkit", label: "Source code on GitHub" },
  { href: "https://loudkit.loudreader.io/", label: "Documentation" },
  { href: "https://loudkit.loudreader.io/demo/", label: "Voice gallery" },
  { href: "https://huggingface.co/loudreader/loudr-1", label: "Model weights on Hugging Face" },
];

export default function LoudkitPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="text-center py-16 md:py-24 px-6 w-full bg-gradient-to-b from-softBeige via-white to-softBeige">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">loudkit</h1>
          <p className="text-lg text-gray-600">
            Open-source text to speech that runs on your own computer.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What it is</h2>
            <p>
              loudkit is the speech engine behind LoudReader, released as open source with open
              weights. It reads text aloud in 28 voices and 10 languages, and clones a voice from
              a few seconds of a recording you have the right to use. It runs in Python,
              JavaScript, Rust, Go and Swift. After a one-time model download it works offline,
              with no account and no per-request cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Plugin for ChatGPT and Codex</h2>
            <p>
              The loudkit plugin helps you add offline speech to an app and pick a voice. In a
              coding agent with a shell, it also makes audio files from text and clones a voice.
              The plugin has no server: your text and recordings are never sent to us.
            </p>
            <p className="mt-4">
              To install it in Codex:{" "}
              <code className="bg-gray-100 rounded px-1">codex plugin marketplace add loudreader/loudkit</code>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Links</h2>
            <ul className="list-disc pl-6 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="underline">{l.label}</a>
                </li>
              ))}
              <li>
                <Link href="/loudkit/privacy" className="underline">loudkit privacy policy</Link>
              </li>
              <li>
                <a href="https://github.com/loudreader/loudkit/issues" className="underline">Support and bug reports</a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
