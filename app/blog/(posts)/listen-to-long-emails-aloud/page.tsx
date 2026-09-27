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
        For an occasional long email, try your device’s read-aloud controls
        first. To keep a listening copy in LoudReader, save the message as a
        PDF, check that its text is complete, and import it. Apple Mail on
        Mac provides <strong>File → Export as PDF</strong>. Other mail apps
        may offer a print-to-PDF route. LoudReader does not connect to your
        mailbox or keep the saved copy updated. The useful preparation is
        deciding which part of a thread you need to hear and removing
        duplicate quoted replies from a separate working copy.
      </p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Keep the original email; prepare a separate copy for listening." />
      <QuestionSection question="How do I save an email I can listen to?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the message or conversation and expand the parts you need.</li>
          <li>In Mail on Mac, select the message and use File → Export as PDF. In another app, inspect its print or export options.</li>
          <li>Open the saved PDF. Check that the body text, ending and relevant sender/date information are present.</li>
          <li>Import the PDF into <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> and listen to a short sample.</li>
        </ol>
        <p>Apple’s <a href="https://support.apple.com/guide/mail/mlhlp1044/mac" className="text-loudBlue hover:underline">Mail export instructions</a>{" "}
        distinguish PDF exports from message files such as EML. LoudReader’s
        file importer accepts EPUB and PDF, not an EML mailbox archive.</p>
        <p>The app runs on iPhone and iPad, and as an iPad app on compatible
        Apple Silicon Macs. For a phone workflow, see <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening on iPhone</Link>.
        Prepare the file and selected voice before relying on offline listening.</p>
      </QuestionSection>
      <QuestionSection question="How do I stop a reply chain from repeating itself?">
        <p>A thread can contain the same original message inside every
        reply. If you hear the discussion several times, the exported text
        may actually contain those repetitions. Narration does not know
        which quotation you intended to skip.</p>
        <p>For a long discussion, make a separate reading copy with the
        messages in chronological order. Keep sender names and dates, remove
        repeated quoted material, and retain any qualification that changes
        the meaning. Do not overwrite the original correspondence. If the
        thread is part of a formal record, listen to the unchanged copy and
        accept the repetition rather than treating an edited version as evidence.</p>
        <p>There is no promise of different speaker voices for different
        correspondents. Short labels such as “Tuesday, reply from Sam” are
        easier to follow than an unexplained jump between messages.</p>
      </QuestionSection>
      <QuestionSection question="Are attachments and screenshots included?">
        <p>Not necessarily. An email PDF may show an attachment’s name or
        icon without including its contents. Save a supported attachment
        separately and import it as its own document. Review a chart or
        screenshot visually if it carries information absent from the body.</p>
        <p>Likewise, do not assume an image’s alt text will appear in the
        PDF. Check the exported text. A visible caption can help, but it is
        not a description of every detail inside an image.</p>
      </QuestionSection>
      <QuestionSection question="What should I consider for work or confidential mail?">
        <p>First check whether you may save that message in another app.
        Local speech generation is useful, but it does not by itself make
        a workflow compliant with an employer’s rules. The email provider,
        any cloud folder used for transfer, device backups and the extra
        saved copy all have separate implications.</p>
        <p>LoudReader generates speech on device and does not upload the
        email PDF to a speech server for narration. It also includes crash
        and performance diagnostics and usage analytics. Avoid interpreting
        “local narration” as “the app sends no data.” More context is in
        the <Link href="/private-text-to-speech-no-cloud" className="text-loudBlue hover:underline">local speech privacy guide</Link>.</p>
        <p>When finished, remove unneeded listening copies from the places
        where you saved them. Deleting one PDF does not delete the source
        email or a separate cloud copy.</p>
      </QuestionSection>
      <QuestionSection question="When is this worth the preparation?">
        <p>A single detailed brief, essay-length newsletter or draft message
        can be a good candidate. A thread dominated by tables, screenshots
        and short acknowledgements often needs more visual context than
        narration provides.</p>
        <p>For newsletters, a public “view in browser” link may be easier
        to import than the email itself. Private links can contain access
        tokens, so treat them as part of the message rather than publishing
        or forwarding them casually. See <Link href="/blog/listen-to-substack-newsletters" className="text-loudBlue hover:underline">newsletter listening options</Link>{" "}
        for the choice between built-in audio, links and saved PDFs.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}
