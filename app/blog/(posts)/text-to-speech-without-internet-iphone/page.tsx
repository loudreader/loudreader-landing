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
        <p>An iPhone can read aloud without the internet when both the text and a usable voice are stored locally. You can try Apple&apos;s accessibility speech controls for a passage, or a dedicated reader for a library of books. LoudReader generates narration on the phone and saves reading progress locally. The setup still matters: finish any downloads, make sure cloud files are actually on the device and test the narrator you want. This guide helps separate a missing file, an unavailable voice and a connection-dependent feature. It does not treat a successful offline listen as proof that an app has no analytics or other network activity.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="offline" caption="A local file and a ready voice are the two essentials." />
      <QuestionSection question="How do I try the built-in iPhone route?">
        <p>Find Read &amp; Speak in Accessibility settings; older iOS releases call it Spoken Content. Choose a voice and try speaking text in your preferred app. Download any extra voice resources while connected. See <a href="https://support.apple.com/guide/iphone/iph96b214f0/ios" className="text-loudBlue hover:underline">Apple&apos;s speech controls guide</a> for your iOS version.</p>
        <p>Before adding another app, check whether this meets your need. If a passage is inaccessible, try text that you can select in another document. That separates a document-access issue from a voice or connection problem.</p>
      </QuestionSection>
      <QuestionSection question="When is a book reader useful?">
        <p>A dedicated reader can keep files in a library, save your position and provide controls intended for longer listening. LoudReader imports DRM-free EPUBs and PDFs, including scanned PDFs through local text recognition. It also supports background narration and word highlighting.</p>
        <p>Read a page from the middle before trusting an entire file. A damaged EPUB, a locked PDF or a badly recognised scan will not become readable just because the phone is offline. The <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF guide</Link> covers those document checks.</p>
      </QuestionSection>
      <QuestionSection question="What should I prepare while connected?">
        <p>Install and open the app, import your chosen file, select the narrator and wait for any resource setup to finish. If your source file lives in iCloud Drive or another provider, confirm it has downloaded. Check purchases or restore them before you need to leave the network.</p>
        <p>LoudReader&apos;s normal narration is local. That does not justify a promise that every model in every release is always bundled or that all optional features are ready immediately after installation. A brief check on your actual device is the useful standard.</p>
      </QuestionSection>
      <QuestionSection question="What if playback works online but fails offline?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Try another local book. If that works, check whether the first file finished downloading or importing.</li>
          <li>Try another voice available on your device. If only one fails, reconnect and check its preparation and access state.</li>
          <li>Check that audio is not routed to a disconnected speaker and that the output volume is audible.</li>
          <li>Test a fresh passage. A previously played section may be cached even when new speech cannot be generated.</li>
        </ol>
        <p>Record the app version, device, voice and the step that fails before contacting support. Avoid sending a confidential document just to reproduce a playback problem; a harmless sample may show the same issue.</p>
      </QuestionSection>
      <QuestionSection question="What remains online, paid or device-dependent?">
        <p>New book and article downloads, purchases and other connected services still need the network. LoudReader 1.12 also includes crash diagnostics and usage analytics enabled by default. Review the <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> if this matters to your choice.</p>
        <p>{FREE_TIER.full} Speed adjustment and the sleep timer are Premium features. Hardware affects which voices are available, so choose and test on the phone you will actually carry. For a departure checklist, use <Link href="/blog/text-to-speech-airplane-mode" className="text-loudBlue hover:underline">the airplane-mode guide</Link>; for a Mac, see <Link href="/offline-text-to-speech-mac" className="text-loudBlue hover:underline">offline speech on Mac</Link>.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a book in LoudReader" subline="Import a DRM-free EPUB or PDF and choose a voice available on your device." />
    </ArticleLayout>
  );
}
