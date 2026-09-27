import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function NaturalReaderAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Looking for a NaturalReader alternative starts with identifying which
          NaturalReader product you use. Its online personal reader and its
          downloadable desktop software have different voices, plans and features.
          LoudReader is worth trying if you want to narrate books locally on an
          iPhone or iPad, or use that iPad app on a compatible Apple Silicon Mac.
          It is not a replacement for every NaturalReader workflow: document
          formats, exported audio and access from Windows may matter more than a
          different voice. Compare those requirements before moving your library,
          then listen to a few pages of your own material in both apps.
        </p>
        <Disclosure />
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Start with the documents you actually read, then compare the workflow." />

      <QuestionSection question="Which NaturalReader are you replacing?">
        <p>
          NaturalReader&apos;s <a href="https://help.naturalreaders.com/en/articles/8584530-what-is-naturalreader-ai-text-to-speech-personal-version" className="text-loudBlue hover:underline">personal reader</a>
          {" "}works through the web, iOS and Android apps, and a browser extension.
          Its supported inputs include Word documents and DRM-free EPUBs as well as
          PDFs. Those are meaningful advantages if your reading arrives in several
          formats or you work across different operating systems.
        </p>
        <p>
          Separately, <a href="https://www.naturalreaders.com/software.html" className="text-loudBlue hover:underline">NaturalReader Software</a>
          {" "}offers downloadable desktop products, including paid perpetual
          licences. It would be inaccurate to describe the whole NaturalReader
          range as subscription-only. Check the product name on your current plan
          before comparing its cost or replacing features you already own.
        </p>
      </QuestionSection>

      <QuestionSection question="Does offline mean downloaded audio or local narration?">
        <p>
          These solve different problems. A downloaded recording can play with no
          signal, but its voice and wording are already fixed. Local narration
          generates speech from the text on the device. For a flight either can
          be useful; for switching between unread chapters without preparing
          recordings, local generation is the feature to look for.
        </p>
        <p>
          NaturalReader documents <a href="https://help.naturalreaders.com/en/articles/11543218-working-with-text-and-audio-personal-version" className="text-loudBlue hover:underline">MP3 conversion for offline listening</a>
          {" "}for subscribers, with conversion limits. It therefore is not fair to
          say NaturalReader cannot be used offline. LoudReader narrates imported
          books locally. Install it, open your chosen book and voice, then test a
          previously unread section without a connection before relying on it for
          travel. That checks playback readiness; it does not audit an app&apos;s
          privacy practices.
        </p>
      </QuestionSection>

      <QuestionSection question="What changes when you move to LoudReader?">
        <p>
          LoudReader imports DRM-free EPUB and PDF files and saves web articles
          from links or the share extension. Scanned PDFs have on-device text
          recognition, although columns, damaged scans and tables can still read
          poorly. Keep a sample with the hardest layout in your trial: a clean
          novel does not tell you how a reader will handle your research paper.
        </p>
        <p>
          There is no native Word-document importer, so a DOCX-heavy workflow needs
          conversion first. There is also no automatic library or reading-position
          sync between LoudReader devices. Importing a file from iCloud Drive does
          not make the app&apos;s reading position sync. On a Mac, you are using the
          iPad app in Apple&apos;s compatibility mode, not a separate native Mac app.
          Our <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening guide</Link>
          {" "}and <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">EPUB guide for Mac</Link>
          {" "}cover the basic import workflows.
        </p>
      </QuestionSection>

      <QuestionSection question="What should you check about price and privacy?">
        <p>
          {FREE_TIER.full} LoudReader Premium unlocks every available narrator,
          adjustable speed, a sleep timer, soundscapes and unlimited article saving.
          Monthly, yearly and lifetime options are shown in the app; check your
          storefront price. Compare that with the exact NaturalReader plan you
          need, including any audio-conversion limits, rather than comparing two
          headline prices with different features.
        </p>
        <p>
          LoudReader does not upload books to a speech server for narration, but
          that does not mean it has no network activity or telemetry. It sends
          crash/performance diagnostics and usage analytics. Downloads and
          purchases also use a connection. For sensitive work, check the complete
          data policy of whichever app and voice service you select.
        </p>
      </QuestionSection>

      <QuestionSection question="When is switching actually worth it?">
        <p>
          Stay with NaturalReader if its document handling, browser workflow or
          audio export already solves your problem. Try LoudReader when local
          narration of your own books on Apple devices is the priority. A fair
          comparison uses the same document, language and comfortable speed, with
          a few names, headings and numbers included. Listen long enough to notice
          repeated pronunciation errors or awkward pauses; a promotional sample
          cannot make that decision for you.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try local narration with your own book" subline="Import an EPUB or PDF and compare the reading experience before choosing a plan." />
    </ArticleLayout>
  );
}
