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

export default function ListenToWordDocumentArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Start with Word&apos;s own Read Aloud if you want to hear a document
          while editing it. On supported desktop versions, look under Review;
          Word for the web uses Immersive Reader. You can also export a PDF copy
          and import it into LoudReader for a separate listening library on
          iPhone, iPad or a compatible Apple Silicon Mac. LoudReader does not open
          .docx files directly, and the PDF will not stay in sync with later Word
          edits. Choose the workflow around that trade-off: live editing in Word,
          or a portable listening copy with on-device narration.
        </p>
        <p className="text-sm">Disclosure: this guide is written by LoudReader&apos;s developer. Word may already meet your needs.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Use the original for editing and a clearly named PDF copy for a separate listening pass." />

      <QuestionSection question="How do I use Word's own reading tools?">
        <p>
          On supported desktop versions, select Review → Read Aloud. The controls
          let you pause, move between paragraphs and adjust speed. On the web, use
          View → Immersive Reader, then play. Mobile menus differ; follow{" "}{" "}
          <a href="https://support.microsoft.com/en-us/office/listen-to-your-word-documents-5a2de7f3-1ef4-4795-b24e-64fc2731b001" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Microsoft&apos;s platform-specific instructions</a>{" "}
          if your ribbon looks different.
        </p>
        <p>
          This keeps listening beside the editable document. If you hear a phrase
          you want to change, stop and fix it without making another file. There
          is no general reason a long manuscript cannot be reviewed this way;
          whether you prefer it to a dedicated reader depends on your device,
          voice preference and listening routine.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I check about voices and connectivity?">
        <p>
          Microsoft says available voices depend on the platform and may come
          from the device or a Microsoft service. Its neural-voice troubleshooting
          calls for internet access and a Microsoft 365 sign-in. Check the voice
          you intend to use before relying on it offline. Microsoft also states
          that Read Aloud does not store the content or audio it processes for
          this feature; consult the same support page for its privacy details.
        </p>
        <p>
          LoudReader generates narration on-device. Install and open the app,
          import your document and test your chosen voice offline before a trip.
          The app separately uses crash/performance diagnostics and usage
          analytics; the latter is on by default. Local speech generation describes how the words become
          audio, not every network interaction of the app.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I create a PDF that is pleasant to listen to?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong className="text-gray-900">Save the editable original.</strong> Make any cleanup in a separate copy if you need to preserve review markup.</li>
          <li><strong className="text-gray-900">Decide what belongs in the listening version.</strong> Check tracked changes, comments, running headers and footnotes. A review copy and a clean reading copy serve different purposes.</li>
          <li><strong className="text-gray-900">Export PDF.</strong> In desktop Word, use File → Save As or Save a Copy and select PDF; some versions also offer File → Export.</li>
          <li><strong className="text-gray-900">Inspect the output.</strong> Check a heading, a page boundary and any table or text box. Those are the places where visual layout can become an awkward spoken sequence.</li>
        </ol>
        <p>
          Microsoft&apos;s <a href="https://support.microsoft.com/en-gb/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">PDF export guide</a>{" "}
          explains platform options, including whether markup is included. If the
          source is confidential, check whether you are saving locally or into a
          synced folder, and avoid choosing an online conversion service by
          accident. Exporting a PDF is not itself a promise that the document
          has never been stored in the cloud.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to the exported copy in LoudReader?">
        <p>
          Save the PDF where your listening device can access it, then choose it
          through LoudReader&apos;s import control or share it from Files. Wait
          for conversion, open the imported document and play a short sample.
          The app offers word-following highlighting and keeps your place; check
          the imported text against the original before relying on a full report
          or manuscript. Our <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF-on-iPhone walkthrough</Link>{" "}
          covers the import stage in more detail.
        </p>
        <p>
          LoudReader runs on iPhone and iPad; on compatible Apple Silicon Macs
          it runs as an iPad app. It does not automatically sync the library or
          reading position between devices. Transfer and import the PDF on the
          device you plan to use. Give successive exports a date or version in
          their filenames so you do not accidentally review yesterday&apos;s draft.
        </p>
      </QuestionSection>

      <QuestionSection question="When is a separate listening copy worthwhile?">
        <p>
          Stay in Word when you are revising frequently and want the spoken text
          to reflect your latest edit. Try a PDF in a reader when you want a
          document alongside your other books, or prefer that app&apos;s narration
          and playback controls. Try one chapter or a few pages before exporting
          a whole project. Voice preference is personal, and the quality of the
          PDF extraction matters as much as the voice.
        </p>
        <p>
          For a structured review pass, see{" "}{" "}
          <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading by listening</Link>.
          Listening can help you notice phrasing, but keep checking references,
          numerical details and layout in the original document.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a listening copy of your document" subline="Export a PDF, import a few pages and compare the result with your Word original." />
    </ArticleLayout>
  );
}
