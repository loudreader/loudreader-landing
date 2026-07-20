import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ListenToMarkdownFilesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Markdown files are plain text under the hood, and the route to
          listening is a two-step pipeline. Render your .md file to a PDF
          with any Markdown tool (Pandoc, Marked, iA Writer, Obsidian, or even
          a VS Code extension). Then import the PDF into{" "}
          <strong>LoudReader</strong> on your iPhone or Mac and press play.
          LoudReader reads the rendered text aloud with natural offline
          voices, remembers your place, and works offline. It is fully
          on-device and private, your library never leaves your device. This is
          useful for proofreading drafts written in Markdown, reviewing
          documentation, or listening to personal notes and journals kept in
          plain text.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Render Markdown to PDF, import, press play. The text reads cleanly because the markup stays behind."
      />

      <QuestionSection question="Why would a Markdown user want text-to-speech?">
        <p>
          Markdown is the default writing format for a lot of people who live
          in plain text: developers writing READMEs and docs, bloggers drafting
          posts for static sites, researchers keeping notes in Obsidian, and
          writers who prefer the simplicity of a format that works in any text
          editor. These files accumulate. Listening to them turns a screen-only
          workflow into something you can do while walking, commuting, or
          resting your eyes.
        </p>
        <p>
          The most common use case is proofreading. When you write in Markdown,
          you see the rendered output in a preview pane, and your brain fills
          in the gaps. Hearing the text read aloud by a different voice catches
          errors that survive both the source view and the preview. For more on
          this, see{" "}
          <Link
            href="/blog/proofread-by-listening"
            className="text-loudBlue hover:underline"
          >
            how to proofread by listening
          </Link>
          .
        </p>
        <p>
          Another use case is reviewing your own notes. If you keep a Markdown
          knowledge base or journal, listening back to entries helps you spot
          patterns and ideas you forgot you had. The voice is neutral and
          consistent, so you hear the content, not your own handwriting or
          formatting choices.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I render Markdown to PDF for listening?">
        <p>
          The tool does not matter much. The PDF just needs to contain readable
          text in a single-column layout. Here are the options that produce
          clean output:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Pandoc (free, cross-platform).</strong>{" "}
            Run <code className="text-sm bg-gray-100 px-1 rounded">pandoc file.md -o file.pdf</code>{" "}
            in a terminal. Pandoc renders headings, lists, bold, italics, and
            code blocks correctly. The PDF is plain but perfectly readable.
          </li>
          <li>
            <strong className="text-gray-900">Marked 2 (Mac, paid).</strong>{" "}
            Marked is a dedicated Markdown previewer that exports clean PDFs
            with good typography. Open your .md file, pick a style, and export.
            The PDF looks like a printed document.
          </li>
          <li>
            <strong className="text-gray-900">iA Writer (Mac, iPhone, paid).</strong>{" "}
            iA Writer exports Markdown to PDF directly from the app. The output
            uses iA Writer&apos;s distinctive typography and reads well.
          </li>
          <li>
            <strong className="text-gray-900">Obsidian (free, cross-platform).</strong>{" "}
            Install a PDF export community plugin, or use the &quot;Print to
            PDF&quot; option in the system print dialog. Output varies by
            theme, but the text is always there.
          </li>
        </ul>
        <p>
          Once you have the PDF, open it in{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>
          , import the file, and press play. The app reads the rendered text.
          Headings get natural pauses. Lists get read as sequential items.
          Bold and italic text look different in the PDF but sound the same.
        </p>
      </QuestionSection>

      <QuestionSection question="What gets lost when Markdown becomes audio?">
        <p>
          A few things, and it helps to know them upfront:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Links.</strong> The PDF shows
            linked text, but a TTS voice reads the link text without
            indicating it is a link. &quot;Click here&quot; sounds like two
            words, not an invitation. Write descriptive link text (the thing
            the link points to) if listening matters.
          </li>
          <li>
            <strong className="text-gray-900">Images.</strong> Images in the
            Markdown render into the PDF but produce no audio. Alt text and
            captions get read, which helps. If an image is essential to
            understanding the document, describe it in the surrounding text.
          </li>
          <li>
            <strong className="text-gray-900">Code blocks.</strong> Code
            blocks render as monospaced text in the PDF. The TTS voice reads
            each line as prose. A short example is fine. A 50-line function
            sounds like someone reading code aloud, which is only useful if
            you are reviewing it for correctness.
          </li>
          <li>
            <strong className="text-gray-900">Tables.</strong> Markdown
            tables render as visual tables in the PDF. The TTS voice reads
            them in document order (cell by cell, left to right, top to
            bottom), which rarely matches how a human would scan a table. For
            table-heavy docs, listen to the prose and review tables on screen.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Can I proofread Markdown drafts this way?">
        <p>
          Yes, and the pipeline works well for it. Write your draft in
          Markdown, render it to PDF, import into LoudReader, and listen while
          you have the original .md file open in a separate window. When you
          hear a problem, pause playback and fix the source file. When you want
          to re-check a section, re-render and re-import.
        </p>
        <p>
          This catches a specific class of errors that visual proofreading
          misses. Consider this sentence from a real draft: &quot;The function
          accepts a parameter and returns the result to the caller after
          processing the input.&quot; Reading it silently, your eyes skip
          through. Hearing it read aloud, you notice it is 18 words that say
          almost nothing. This is the kind of discovery that listening
          produces.{" "}
          <Link
            href="/blog/catch-typos-in-your-own-writing"
            className="text-loudBlue hover:underline"
          >
            Catching typos in your own writing
          </Link>{" "}
          covers more techniques for this.
        </p>
        <p>
          The whole pipeline runs on your device. LoudReader is fully on-device
          and private, your library never leaves your device. No draft is
          uploaded to a server, no text is processed in the cloud. For writers
          working on unpublished material, this matters.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear your Markdown files read back"
        subline="Render to PDF, import into LoudReader, and press play. Proofread, review, or listen hands-free with natural voices."
      />
    </ArticleLayout>
  );
}
