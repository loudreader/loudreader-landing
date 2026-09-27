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

export default function ListenToTxtFilesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader does not import .txt files directly. To listen to a saved
          plain-text file in its library, make a PDF copy first: open the file in
          TextEdit on a Mac and choose File → Export as PDF. On iPhone or iPad,
          copy the text into a Pages document and export that document as PDF.
          Import the resulting file into LoudReader, check a paragraph, and press
          play. Keep the original .txt as your editable source. The conversion is
          useful for notes, transcripts and prose drafts; tables, code and raw
          logs often need some cleanup before they make sense as audio.
        </p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Keep the editable text file; use a PDF copy for your listening pass." />

      <QuestionSection question="What is worth checking before converting plain text?">
        <p>
          Plain text carries characters and line breaks, but not an agreed page
          layout or heading structure. The editor supplies the font, page size and
          wrapping when it creates the PDF. That is a good reason to inspect the
          export instead of assuming every file will read identically.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-gray-900">Drafts and notes:</strong> keep meaningful paragraph breaks and add short section titles if the document is long.</li>
          <li><strong className="text-gray-900">Interview transcripts:</strong> decide whether repeated speaker labels and timestamps will help or interrupt the listening.</li>
          <li><strong className="text-gray-900">Older files:</strong> check accented letters and punctuation. If they already look broken in the editor, fix the text encoding before export.</li>
          <li><strong className="text-gray-900">Logs and data:</strong> extract the relevant section instead of narrating thousands of repeated timestamps, paths or identifiers.</li>
        </ul>
        <p>
          A text file being easy to open says nothing about permission to reuse
          its contents. For downloaded books or transcripts, keep the source and
          any applicable usage terms with your original file.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I make the PDF on a Mac?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the .txt in TextEdit and inspect the beginning and ending.</li>
          <li>Choose File → Export as PDF, give the copy a recognisable name and save it.</li>
          <li>Open the PDF and check that long lines wrap instead of disappearing off the page.</li>
          <li>Import that PDF into LoudReader on your listening device.</li>
        </ol>
        <p>
          Apple documents this in the{" "}{" "}
          <a href="https://support.apple.com/guide/textedit/create-open-and-convert-documents-txtee6663a0e/mac" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">TextEdit conversion guide</a>.
          LoudReader itself runs on iPhone and iPad, and on compatible Apple
          Silicon Macs as an iPad app. You can also make the PDF on a computer
          and transfer the copy to your phone.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I do it on iPhone or iPad?">
        <p>
          Copy the file&apos;s text from an app that can open it, then paste it
          into a blank Pages word-processing document. In Pages, use Share →
          Export and Send → PDF, then save the copy to Files or share it to
          LoudReader. Menu placement can vary by Pages version; Apple&apos;s{" "}{" "}
          <a href="https://support.apple.com/en-ca/guide/pages-iphone/tan78c0ddfdb/ios" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">export instructions</a>{" "}
          describe the available formats.
        </p>
        <p>
          A large transcript may be easier to prepare on a computer. For a
          sensitive note, also check where the editing app saves it: an iCloud
          folder is different from local storage. LoudReader&apos;s narration is
          generated on-device, but that does not change the storage or sync
          behaviour of the app used to create the PDF.
        </p>
      </QuestionSection>

      <QuestionSection question="How should I handle hard line breaks and awkward audio?">
        <p>
          Some older text files insert a newline after every short line. Try a
          short sample before editing the whole file. If the imported result has
          broken sentences, remove those mechanical wraps while keeping real
          paragraph breaks. Do not flatten poetry, addresses or dialogue into one
          continuous paragraph just to make the file look tidy.
        </p>
        <p>
          Speech is also a poor substitute for inspecting code or aligned tables.
          A voice can say the characters without conveying indentation, columns
          or the difference between similarly sounding symbols. Keep those parts
          available visually and use the listening copy for the surrounding prose.
          If the file is too cumbersome to navigate, split it at meaningful
          section boundaries rather than promising one enormous PDF will be easy
          to use on every device.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I use the result for proofreading?">
        <p>
          Listen to one section while keeping the original draft open. Mark
          repeated words, awkward transitions or passages you want to revisit,
          then edit the original file. A new PDF export will be a snapshot of
          those changes; the previously imported copy does not update itself.
          Listening can reveal phrasing you overlooked, but it does not replace
          checking spelling, references or layout.
        </p>
        <p>
          Our <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading-by-listening guide</Link>{" "}
          covers that review pass. For the import stage, see{" "}{" "}
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">how to listen to a PDF on iPhone</Link>.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Listen to a copy of your draft" subline="Export to PDF, import it, and check a short passage before the full listening pass." />
    </ArticleLayout>
  );
}
