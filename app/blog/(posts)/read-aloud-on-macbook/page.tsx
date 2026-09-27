import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import Disclosure from "@/components/blog/Disclosure";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>A MacBook can read selected text aloud using macOS accessibility controls. If you want to keep a collection of books and return to your place later, a reading app adds a different workflow. LoudReader can run on an Apple Silicon Mac, but it is the iPad app in Apple&apos;s compatibility mode, not a separate native Mac app. Use its free listening tier to check how the interface and import process suit your desk setup. Intel Macs cannot install this build; they can still use compatible system speech or other local tools. Hardware compatibility does not decide which voice you will prefer.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="devices" caption="Check both the voice and the iPad-style interface on your Mac." />
      <QuestionSection question="How do I use the built-in Mac speech controls?">
        <p>In System Settings → Accessibility, open Read &amp; Speak, or Spoken Content on older macOS releases. Enable Speak Selection, select text and use the configured shortcut; the default is Option–Esc. Apple&apos;s <a href="https://support.apple.com/guide/mac-help/mh27448/mac" className="text-loudBlue hover:underline">Mac speech guide</a> explains the controller and highlighting settings.</p>
        <p>Try this first for an email, an extract or proofreading. Test the actual document rather than assuming every application exposes its text the same way. If a PDF reads in the wrong order, changing the voice will not repair the document layout.</p>
      </QuestionSection>
      <QuestionSection question="What does LoudReader add for books?">
        <p>A library keeps imported EPUBs and PDFs together. Saved reading progress makes it possible to return to the same local book, and word highlighting lets you follow the narration. The <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">EPUB reading guide</Link> covers the file-based workflow.</p>
        <p>Premium adds controls including adjustable playback speed and a sleep timer. {FREE_TIER.full} Try the available voices on your Mac before upgrading: the studio roster is subject to device capability, and a feature list is not a substitute for a listening sample.</p>
      </QuestionSection>
      <QuestionSection question="How do I install and check the Mac version?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Check that your Mac uses Apple Silicon and meets the App Store&apos;s current compatibility requirements.</li>
          <li>Find LoudReader among the compatible iPhone and iPad apps in the Mac App Store.</li>
          <li>Import a DRM-free book and try a chapter with the mouse or trackpad.</li>
          <li>Check pausing, reopening and background playback in your own setup before moving a large library.</li>
        </ol>
        <p>Apple explains how <a href="https://support.apple.com/guide/app-store/fird2c7092da/mac" className="text-loudBlue hover:underline">iPad apps run on compatible Macs</a>. Do not expect every Mac-specific menu, window behaviour or keyboard shortcut from an app designed for iPad. We have not verified every one of those interactions in this release.</p>
      </QuestionSection>
      <QuestionSection question="Can I close the lid or continue on my iPhone?">
        <p>Putting a Mac to sleep can interrupt playback. A typical laptop closes into sleep; external-display arrangements and power settings can behave differently. Test your setup, and use a phone for listening that needs to continue while the laptop is packed away.</p>
        <p>LoudReader does not automatically sync its library or reading position between devices. Keeping a source EPUB in iCloud Drive makes the file accessible for import; it does not transfer the app&apos;s playback progress. Note a chapter or a short phrase before changing devices, then find it in the other copy.</p>
      </QuestionSection>
      <QuestionSection question="Does local speech make the whole app offline?">
        <p>Speech is generated on the Mac rather than by uploading each passage to a speech service. Installation, new books and articles, purchases, diagnostics and analytics can still use the network. Version 1.12 enables crash diagnostics and usage analytics by default.</p>
        <p>For travel, open your chosen voice and book once, disconnect and test a passage you have not already played. For confidential work, check the <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> and your organisation&apos;s requirements before importing a document. Being an installed app does not by itself prove a privacy or battery advantage.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a book in LoudReader" subline="Import a DRM-free EPUB or PDF and choose a voice available on your device." />
    </ArticleLayout>
  );
}
