import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        Google Docs now offers audio generation with Gemini on eligible
        Google Workspace or Google AI plans. On a computer, look for
        <strong> Tools → Audio → Listen to this tab</strong>. If you prefer
        a separate local reading copy, export the document as EPUB or PDF
        and import it into LoudReader. That copy does not stay in sync with
        Docs. For proofreading, keep the editable original open, listen to
        the snapshot, and make corrections in the original as you go.
      </p><p className="text-sm">This guide is published by LoudReader’s developer; Google’s own audio may suit your workflow.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Use the live document’s audio option or listen to a clearly dated export." />
      <QuestionSection question="What can Google Docs read aloud itself?">
        <p>Eligible accounts can generate audio for a document tab, request
        an audio summary and change the player’s voice or speed. A summary
        is not a word-for-word proofreading pass. Check <a href="https://support.google.com/docs/answer/16386234?hl=en" className="text-loudBlue hover:underline">Google’s audio-generation help</a>{" "}
        for your plan’s availability and the current controls.</p>
        <p>Docs also supports screen readers. They serve a wider purpose,
        including navigating and editing a document; voice preference is not
        a reason to dismiss them. Choose a tool according to whether you want
        document navigation, a quick overview, or a sustained listening pass.</p>
      </QuestionSection>
      <QuestionSection question="How do I export a copy for LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the document on a computer. Finish the edits you want included in this listening pass.</li>
          <li>Choose <strong>File → Download</strong> and select EPUB or PDF from the available formats.</li>
          <li>Save the file with a recognisable version or date. Open it once to check its content.</li>
          <li>Transfer it to your listening device if needed, then use LoudReader’s file importer.</li>
          <li>Play a paragraph and check a heading or list before reviewing the whole document.</li>
        </ol>
        <p>Google documents the download command in its <a href="https://support.google.com/docs/answer/49114?hl=en" className="text-loudBlue hover:underline">file export instructions</a>.
        The owner’s sharing permissions may restrict downloads. Do not make
        a private document publicly accessible just to obtain a usable link.</p>
        <p>LoudReader is available on iPhone and iPad and runs as an iPad app
        on compatible Apple Silicon Macs. It has no Google Docs login or live
        document-sync connection. See <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">listening to PDFs on iPhone</Link>{" "}
        for the import side.</p>
      </QuestionSection>
      <QuestionSection question="Should I choose EPUB or PDF?">
        <p>For mostly prose, try EPUB first: a reflowable copy is a useful
        starting point for paragraphs and headings. Choose PDF when you need
        a stable visual reference or the EPUB export is not suitable. Neither
        format guarantees that a complicated layout will become a sensible
        spoken sequence.</p>
        <p>Check tables, multi-column sections, footnotes and text boxes
        explicitly. Do not assume comments or suggested edits are included
        in the export. Keep those in Docs for review. A chart’s caption may
        be readable while the chart’s actual evidence still needs a visual
        inspection.</p>
      </QuestionSection>
      <QuestionSection question="How do I proofread without losing track of changes?">
        <p>Work on one section at a time. Put the editable Google Doc beside
        your listening controls and keep a short list of issues: missing
        words, awkward transitions, repeated sentences and inconsistent names.
        Pause when something sounds wrong, locate it in the original, and
        decide whether it needs a change.</p>
        <p>When you revise substantially, export a new copy and mark the old
        one as superseded. Otherwise you can spend time fixing a sentence
        that is already gone. Listening can offer a different perspective
        on your draft, but it does not guarantee that every typo, factual
        error or citation problem will be audible. The <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading-by-listening guide</Link>{" "}
        explains how to combine it with visual checks.</p>
      </QuestionSection>
      <QuestionSection question="What does local playback change about privacy?">
        <p>After import, LoudReader generates speech on your device instead
        of uploading the document to a speech service. The Google Doc itself
        remains subject to your Google account and sharing settings, and any
        transfer through cloud storage has its own data handling. LoudReader
        also includes diagnostics and usage analytics; local speech does not
        mean no network activity.</p>
        <p>For work material, check whether exporting a copy to another app
        is permitted. Use <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
        for a listening snapshot, not as a replacement for the source
        document’s permissions, change history or collaboration tools.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}
