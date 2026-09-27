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

export default function HowMuchStorageDoOfflineVoicesNeedArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Offline speech needs model files on your device, but the app&apos;s
          download size is only part of its storage footprint. Imported books,
          saved articles, generated audio and voice recordings can add to it.
          For LoudReader, the most useful number is the storage shown on your
          own device after you have opened the app and used your chosen voice.
          We have not measured a complete installed footprint for each device,
          so this guide does not give a universal megabyte figure.
        </p>
      </Tldr>

      <ArticleIllustration variant="devices" caption="App files, your library and cached audio occupy different parts of the total." />

      <QuestionSection question="What takes up space besides the voice model?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>App and speech resources.</strong> These provide the reader and the models needed for local narration. Packaging can change with an update.</li>
          <li><strong>Your library.</strong> Imported EPUBs and PDFs, book artwork and saved content remain local. A heavily illustrated PDF can add much more than a short text-only book.</li>
          <li><strong>Generated audio.</strong> LoudReader caches speech for reuse. The cache grows as audio is generated and has a quota that removes older entries when needed.</li>
          <li><strong>Saved cloned voices.</strong> Voice Studio keeps local files for the voices you create. These are separate from the original book files.</li>
        </ul>
        <p>
          A model being unloaded from memory does not mean its files have been
          deleted from storage. Likewise, a voice disappearing from the picker
          does not prove that its resources were removed.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I check the real size on my phone?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Settings → General → iPhone Storage, then choose LoudReader. On iPad, use iPad Storage.</li>
          <li>Note the app and data figures before adding a large book.</li>
          <li>Import one representative document and listen, then compare the figures again after storage reporting updates.</li>
        </ol>
        <p>
          Apple&apos;s <a href="https://support.apple.com/en-gb/108429" className="text-loudBlue hover:underline">storage guide</a> explains
          these views and notes that cached or temporary data may not all appear
          in an app&apos;s reported usage. Treat the figures as a practical check,
          not a precise inventory of every model and audio file.
        </p>
      </QuestionSection>

      <QuestionSection question="Will every narrator need a separate download?">
        <p>
          You should not assume either that every voice is a separate download
          or that every resource is permanently bundled. We have not verified
          the installed App Store archive across devices well enough to promise
          that. LoudReader supports local narration once the required resources
          are available; a language shown in the picker is not a storage meter.
        </p>
        <p>
          Before travelling, install and open the app, import your book and test
          the actual voice with Wi-Fi and mobile data off. This checks readiness
          for that journey. It does not prove the app never uses the network.
          Our <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device speech guide</Link> explains
          that distinction.
        </p>
      </QuestionSection>

      <QuestionSection question="What can I remove if space is tight?">
        <p>
          Start with files you can replace: review old library imports and
          downloaded originals in Files. Keep a backup of anything irreplaceable
          before deleting it. LoudReader does not automatically synchronise your
          library between devices.
        </p>
        <p>
          In Voice Studio, deleting an unwanted clone removes its saved voice
          directory. Offloading an app through iOS keeps its documents and data;
          deleting the app removes associated data too. Neither is a sensible
          first step for a library without a backup. Check Apple&apos;s storage
          recommendations before making a large deletion.
        </p>
        <p>
          The <Link href="/" className="text-loudBlue hover:underline">LoudReader overview</Link> lists
          its supported formats and reading features. When planning space for a
          trip, allow for both the books you import and audio created while listening.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Keep your next book ready to read" subline="Import a book, test your voice offline and check storage before travelling." />
    </ArticleLayout>
  );
}
