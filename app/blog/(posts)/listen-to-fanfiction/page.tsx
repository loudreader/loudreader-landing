import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>For an AO3 work you can access, use its Download menu to save an EPUB, then import that file into a compatible reader. The download is a snapshot of the work’s available chapters; it will not update when the author adds more. LoudReader can narrate supported EPUBs locally and keep a reading position in the imported copy. Restricted works may require an AO3 login, and a local narration app does not make your browsing, downloads or device backups invisible.</p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="A downloaded work is a snapshot; keep a note when you update it." />
      <QuestionSection question="How do you get the EPUB from AO3?"><ol className="list-decimal pl-6 space-y-2"><li>Open the work while signed in if access requires it.</li><li>Choose Download, then EPUB.</li><li>Save the file somewhere you can find again, such as Files or Downloads.</li><li>Keep the work’s title, author and source link with the file.</li></ol><p>AO3’s <a href="https://archive.transformativeworks.org/faq/downloading-fanworks?language_id=de" className="text-loudBlue hover:underline">official download FAQ</a> explains the format choices and the difference between a work download and later updates. Do not mistake a downloaded login or access-warning page for the story itself.</p></QuestionSection>
      <QuestionSection question="How do you listen to the downloaded file?"><p>Import the EPUB into <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, choose an available voice and test a passage. Check unusual names, acronyms and dialogue before settling in for a long session. TTS may pronounce fandom-specific vocabulary differently from how you imagine it.</p><p>LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs. The reader highlights spoken text and stores a reading position. Once the file and necessary resources are local, narration works offline. The <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">Mac EPUB guide</Link> covers the compatible iPad-app workflow.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="Why use a file rather than a live web page?"><p>A file can be useful for a long work because you can return to the same local copy without relying on the current page. A browser’s own reading feature may be sufficient for a short passage; its behaviour depends on the browser and page, so there is no universal winner.</p><p>An EPUB can still include author notes and other material around the story. Check the chapter list and start where you intend. A work’s availability for download is not a reason to repost it elsewhere or disregard the author’s wishes.</p></QuestionSection>
      <QuestionSection question="What happens when a work in progress updates?"><p>AO3 downloads contain the chapters available at the time of downloading. To get newer chapters, download an updated copy. Record your chapter and a short phrase before importing it; do not assume that a changed file will preserve the old copy’s exact reading position.</p><p>Keep the old copy until you have checked the new one. Use clear filenames or dates to avoid opening the wrong version. That is local file management, not automatic subscription tracking.</p></QuestionSection>
      <QuestionSection question="What is private about local narration?"><p>Speech is generated on device. That does not mean the whole app is network-free: LoudReader uses Sentry crash diagnostics and TelemetryDeck analytics. File transfers, device backups and any services you use before importing are separate parts of the workflow. In release 1.12, usage analytics is enabled by default and there is no in-app switch to disable it. Offline playback demonstrates that speech can run without a connection; it does not prove that no data is sent when the app is online.</p><p>Other people with access to your device, lock-screen notifications or shared storage may still see reading-related information. Choose storage and device settings that fit your situation.</p></QuestionSection>
      <QuestionSection question="What about other fiction sites?"><p>Use the author’s or site’s offered download where available, or its own supported reading feature. Check the site’s current access rules before choosing a third-party exporter. We do not promise an official EPUB export, universal URL import or automatic chapter updates for every platform.</p><p>If you already have an authorised compatible EPUB or PDF, the same import workflow applies.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Give an accessible EPUB a listening pass" subline="Import the file, check a sample and keep track of the edition you downloaded." />
    </ArticleLayout>
  );
}
