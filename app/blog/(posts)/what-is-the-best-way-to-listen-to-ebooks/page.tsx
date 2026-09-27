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
        <p>The best route depends on the book and the job. Choose an audiobook recording if you want that performance; try your device’s built-in speech for accessible text you already have open; use a dedicated reader when you want an imported ebook library and convenient book playback. Check file access before comparing voices: a store purchase may not be an exportable EPUB or PDF. Then test a chapter transition, pause/resume, offline readiness and the passages that matter to you. No category guarantees the best voice or supports every protected book. This guide is published by LoudReader’s developer.</p>
      </Tldr>

      <ArticleIllustration variant="devices" caption="Test the book, the controls and the terms—not only the voice demo." />

      <QuestionSection question="When is an existing audiobook the straightforward option?">
        <p>When there is a recording you like and you can obtain it on terms that suit you. Sample the narration, check whether the edition is complete and decide whether you want to buy, subscribe or borrow. A performance with deliberate character voices may be a reason to choose that edition.</p><p>A participating library may offer ebooks and audiobooks through <a href="https://www.overdrive.com/apps/libby" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Libby</a>. Access depends on your library and its collection. Check availability rather than assuming every title is included or immediately borrowable.</p>
      </QuestionSection>

      <QuestionSection question="When should I try built-in speech first?">
        <p>If the text is already accessible in an app and you only need to hear a passage, start with your device’s speech tools. Apple’s <a href="https://support.apple.com/guide/iphone/hear-whats-on-the-screen-or-typed-iph96b214f0/ios" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">iPhone speech guide</a> documents Speak Screen, Speak Selection, highlighting, voice choice and speaking-rate controls. These tools should not be dismissed as lacking highlighting or useful settings.</p><p>Feature names vary by OS version, and results depend on what the source app exposes. Test the actual book, a page transition and what happens when you leave or lock the app. Do not assume system speech can open a protected file in a different reader.</p>
      </QuestionSection>

      <QuestionSection question="What is a dedicated ebook reader useful for?">
        <p>An app that imports and organises books can keep the text, navigation and playback together. Evaluate the workflow you need: saved position, chapter handling, visible text, notes and access without a connection. A pleasant ten-second voice demo tells you little about those longer-session details.</p><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> is one option for DRM-free EPUBs and PDFs. Speech and OCR are processed locally; scans and complex layouts still need checking. It runs on iPhone and iPad, and on compatible Apple Silicon Macs as an iPad app. It does not automatically sync its library or position between devices.</p>
      </QuestionSection>

      <QuestionSection question="What should I check before choosing or paying?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Confirm that the exact title or file is available to you. A store login and an importable ebook are different things.</li>
          <li>Sample a few minutes with the names, dialogue or technical language your book contains.</li>
          <li>Test a chapter transition and pause/resume. For PDFs, compare reading order with the page.</li>
          <li>Check the free allowance, recurring or one-off purchase terms, and which controls require payment.</li>
          <li>If privacy or offline use matters, inspect the processing policy and test the prepared book offline. Do not use a disconnected playback test as proof of no telemetry.</li>
        </ol><p>LoudReader generates speech without uploading the book for narration, while also including crash/performance diagnostics and usage analytics. Usage analytics is enabled by default, and version 1.12 has no visible switch to disable it. Its <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link> covers the current feature boundaries.</p>
      </QuestionSection>

      <QuestionSection question="What is free in LoudReader?">
        <p>Try every available voice for your first 8 hours of listening. Afterwards, a free English voice selection remains available with unlimited book listening. The free selection is limited; it is not a promise to keep any studio narrator you choose. Notes and highlights are free, while full available-voice access, adjustable playback speed, sleep timer and soundscapes are Premium features.</p><p>Check the in-app purchase sheet for your storefront’s current price. You can test imports and ordinary listening before deciding whether a paid control matters for your routine.</p>
      </QuestionSection>

      <QuestionSection question="Can one approach cover everything?">
        <p>You do not need it to. Use a recorded performance for one novel, system speech for a short accessible passage and a dedicated reader for your own files. If an ebook cannot be exported, check the original service’s available listening options rather than expecting another app to unlock it.</p><p>For the import route, start with <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the EPUB/PDF walkthrough</Link>. Choose the tool that handles the book in front of you, then reuse it when the same need comes up.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
