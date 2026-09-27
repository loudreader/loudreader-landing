import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, FREE_TIER } from "@/components/money/site";
import Disclosure from "@/components/blog/Disclosure";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>Start with the book you want to hear. For selectable text, your iPhone already has Speak Screen and Speak Selection in Accessibility settings. For a book tied to a store, check that store&apos;s reading app first. For a DRM-free EPUB or PDF, a dedicated reader can add a library, saved progress and audio controls. LoudReader is one such option: it generates speech locally, highlights the current words and supports background playback. The useful difference is the workflow, not a promise that every system voice sounds worse. Try a passage with names and dialogue before choosing a narrator or paying for extra features.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Choose the reading route that fits the file you actually have." />
      <QuestionSection question="How do I try the built-in option?">
        <p>Open Settings → Accessibility and find <strong>Read &amp; Speak</strong>, called <strong>Spoken Content</strong> on older iOS versions. Enable Speak Screen, then swipe down from the top with two fingers. Apple&apos;s <a href="https://support.apple.com/guide/iphone/iph96b214f0/ios" className="text-loudBlue hover:underline">read-aloud guide</a> covers the controls.</p>
        <p>Test it in the app that holds your book. Text availability and navigation depend on that app and the document. Change the voice or speaking rate before deciding whether the built-in route suits you. A scanned page may need text recognition first; a complicated layout can produce an awkward reading order.</p>
      </QuestionSection>
      <QuestionSection question="Should I turn on VoiceOver?">
        <p>VoiceOver is a full screen reader, with its own navigation gestures. It is useful when you need spoken access to the interface as well as the text. If you only want an occasional passage narrated, try the simpler read-aloud controls first. If you already use VoiceOver, judge a reading app by how well its buttons, navigation and document structure work with your existing setup.</p>
      </QuestionSection>
      <QuestionSection question="What if the book is in Kindle or another store?">
        <p>Start inside the app where you bought or borrowed it. Read-aloud availability can depend on the title, app version and publisher settings. Do not assume a purchased book is an ordinary exportable EPUB. LoudReader cannot remove DRM or open a locked store file. If the publisher supplies a DRM-free EPUB or PDF you are entitled to use, you can try that file instead.</p>
      </QuestionSection>
      <QuestionSection question="How do I listen to my own book files?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader</a> on a compatible iPhone and open it once.</li>
          <li>Import an EPUB or PDF through the file picker or a supported Share action. Download cloud-stored files to the phone first.</li>
          <li>Check a page from the middle of the book, then select an available voice and press play.</li>
          <li>Pause, reopen the book and check the saved position. If you plan to listen in a pocket, also test playback with the screen locked.</li>
        </ol>
        <p>LoudReader can recognise text in scanned PDFs locally, but recognition errors and column order still need checking. Our <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF walkthrough</Link> covers that workflow in more detail. DRM protection and unreadable scans are different problems; OCR does not remove a store&apos;s protection.</p>
      </QuestionSection>
      <QuestionSection question="What should I know before relying on it?">
        <p>{FREE_TIER.full} Adjustable speed and the sleep timer are Premium features. Voice availability also depends on the device; the app does not expose every studio narrator on every supported iPhone.</p>
        <p>Books are not uploaded to a speech server for narration. The app also uses crash diagnostics and usage analytics, enabled by default in version 1.12. No LoudReader login is required, but that is separate from data collection and your Apple Account for purchases. See the <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> for the distinction.</p>
        <p>Prepare a short book first, using the same headphones and listening setup you intend to keep. That small check is more useful than committing a whole library before you know the import and controls suit you.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a book in LoudReader" subline="Import a DRM-free EPUB or PDF and choose a voice available on your device." />
    </ArticleLayout>
  );
}
