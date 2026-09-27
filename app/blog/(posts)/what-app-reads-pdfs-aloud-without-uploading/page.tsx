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

export default function PdfWithoutUploadingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader can read a PDF aloud without uploading the document to a
          speech server. PDF text extraction, scanned-page recognition and voice
          generation happen on your device. That is a specific privacy property,
          not a promise that the entire app never connects to the internet.
          LoudReader also uses Sentry for crash/performance diagnostics and
          TelemetryDeck for usage analytics. Usage analytics is enabled by default
          in the current release. If the document is sensitive,
          check its source, storage location and your organisation&apos;s rules as
          well as the reader: a locally generated voice does not undo an earlier
          upload to an online editor, converter or synced folder.
        </p>
      </Tldr>
      <ArticleIllustration variant="offline" caption="The document-to-speech pipeline runs locally. Storage, downloads and diagnostics are separate questions." />

      <QuestionSection question="What does 'without uploading' need to cover?">
        <p>
          A reader can extract text locally but send that text away to generate
          speech. Another can recognise scans on a server before returning text
          to a local voice. Ask about both stages. Also distinguish sending the
          full PDF from sending its extracted text: for a confidential report,
          either can expose the contents.
        </p>
        <p>
          Check the provider&apos;s current documentation rather than assuming all
          cloud readers retain documents or use them for training. Storage,
          retention and use of content vary. The useful question is what your
          chosen workflow sends, for what purpose, and under which settings.
        </p>
      </QuestionSection>

      <QuestionSection question="Which parts does LoudReader perform locally?">
        <p>
          The app opens the PDF on-device, extracts available text and creates
          the reading copy used by its player. For image-based PDFs, it can use
          Apple&apos;s Vision text recognition locally. Its speech engine then
          turns the recovered words into audio on the same device. A speech
          service does not need a copy of the document to perform these steps.
        </p>
        <p>
          Install and open the app, import a sample and check your intended voice
          before relying on it offline. Successfully playing in airplane mode
          demonstrates that the prepared setup can work without a connection;
          it does not audit what an app sends when connectivity returns. Our{" "}{" "}
          <Link href="/private-text-to-speech-no-cloud" className="text-loudBlue hover:underline">guide to local speech processing</Link>{" "}
          explores that distinction.
        </p>
      </QuestionSection>

      <QuestionSection question="What information can still leave the app?">
        <p>
          The shipping app includes crash and performance reporting through
          Sentry, plus usage analytics through TelemetryDeck. Usage analytics is
          on by default, and the current release does not expose its usage-statistics
          switch. Do not assume that using the app offline disables reporting
          when it reconnects.
          An offline reader may also make network requests for downloads,
          purchases and other services unrelated to generating speech.
        </p>
        <p>
          No LoudReader account is required to import and listen. This removes a
          sign-up step, but it does not establish that no device information or
          diagnostic identifier exists. Consult the current{" "}{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link>{" "}
          when evaluating the app. The source review behind this article is not
          an independent network audit or a certification for regulated data.
        </p>
      </QuestionSection>

      <QuestionSection question="Can scanned and complex PDFs be read locally too?">
        <p>
          Yes, OCR is part of LoudReader&apos;s local PDF import, but it has limits.
          It is attempted when at least half the pages lack text or the total
          extracted text is very small, and it recognises at most 300 image pages
          per import. The app reports partial results. A few scanned inserts in
          an otherwise searchable document can still be missed.
        </p>
        <p>
          A text layer also does not guarantee sensible narration. Multi-column
          layouts, diagrams, footnotes and tables can lose their relationships
          when turned into a sequence of words. Check a representative section
          against the original. See <Link href="/blog/listen-to-scanned-pdf-books" className="text-loudBlue hover:underline">the scanned-PDF guide</Link>{" "}
          for recognising incomplete imports and improving difficult scans.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I check before importing a sensitive PDF?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-gray-900">The source:</strong> download or copy the file using a method appropriate for the document. Avoid an unnecessary online conversion step.</li>
          <li><strong className="text-gray-900">Storage and backup:</strong> a Files picker can include iCloud or other providers. Local narration does not determine their sync or backup behaviour.</li>
          <li><strong className="text-gray-900">Device access:</strong> consider who can unlock the device, view the library or hear playback.</li>
          <li><strong className="text-gray-900">The rules that apply to the document:</strong> for work material, use an approved workflow. This article does not establish compliance with a contract or a regulatory requirement.</li>
        </ul>
        <p>
          Once the workflow is appropriate, the practical steps are straightforward:
          choose the PDF, wait for import and check the reading copy. The{" "}{" "}
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening walkthrough</Link>{" "}
          covers those steps. LoudReader is available on iPhone and iPad, and runs
          on compatible Apple Silicon Macs as an iPad app.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Listen with speech generated on your device" subline="Try a sample PDF and review the privacy policy before importing sensitive material." />
    </ArticleLayout>
  );
}
