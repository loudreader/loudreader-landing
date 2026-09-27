import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>Yes, if you can obtain a supported file or the service where you bought the book offers its own listening feature. For LoudReader, the import route is a DRM-free EPUB or PDF. A purchase in a store library is not automatically an exportable file, but the store name alone does not settle the question either. Check the download options for that exact title. In 2026, eligible Kindle purchases can have EPUB/PDF downloads when the publisher has confirmed DRM-free distribution. If the file is protected, use the authorised reader’s available features or obtain a compatible edition.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Check the title’s actual download options, then test the file." />

      <QuestionSection question="What should I check before installing another app?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the book’s order or library page on the seller’s website. Look for file downloads and the listed format.</li>
          <li>Check whether that specific edition is marked DRM-free. An .epub or .pdf filename does not by itself prove that.</li>
          <li>Download the file offered for your purchase. A sample, web shortcut or licence file is not necessarily the book.</li>
          <li>Import a short test and inspect both the text and playback. An import error can also mean damage, an unsupported format or a PDF password; it does not diagnose DRM by itself.</li>
        </ol><p>Keep your original download. Renaming a filename extension does not convert its contents.</p>
      </QuestionSection>

      <QuestionSection question="What changed for Kindle purchases?">
        <p>Amazon’s <a href="https://kdp.amazon.com/en_US/help/topic/GDDXGH9VR22ACM8U" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">current KDP guidance</a> says verified purchasers can download EPUB/PDF copies of confirmed DRM-free titles from Manage Your Content and Devices. The option began on 20 January 2026. It depends on the publisher’s choice; borrowed Kindle Unlimited titles do not qualify.</p><p>If the option is absent, do not assume that installing another reader will reveal it. Check the title’s available download actions and Amazon’s help. This is an authorised download path for eligible purchases, not a way to open every Kindle file.</p>
      </QuestionSection>

      <QuestionSection question="What about other ebook shops and library loans?">
        <p><a href="https://help.kobo.com/hc/en-us/articles/360019527954-Download-books-from-your-Kobo-account-to-export-to-another-device-or-app" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Kobo’s export documentation</a> distinguishes DRM-free EPUB/PDF downloads from protected downloads that require Adobe Digital Editions. Check the format supplied for your own title rather than assuming all Kobo purchases behave alike.</p><p>For another store or a library loan, start with that service’s help and accessibility options. A loan entitlement is not the same as an unprotected copy to import elsewhere. LoudReader does not unlock protected ebooks or extend a loan.</p>
      </QuestionSection>

      <QuestionSection question="Can Calibre tell me whether a file will work?">
        <p><a href="https://manual.calibre-ebook.com/drm.html" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Calibre does not open DRM-protected books</a>. It can be useful for inspecting and converting supported unprotected files, but a failed open is not a complete diagnosis. Read the error and check the format before deciding why it failed.</p><p>A book opening successfully also does not grant new rights to redistribute it. File compatibility and permission to copy or share are separate questions.</p>
      </QuestionSection>

      <QuestionSection question="How do I listen once I have a compatible copy?">
        <p>Import the DRM-free EPUB or PDF into <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> and play a page you can compare with the original. Speech is generated locally. Scanned PDFs can use on-device text recognition, but reading order and recognition errors still need checking. A clean ebook will usually be a simpler starting point than a complex scan.</p><p>See <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the import walkthrough</Link> for the listening setup. If the file cannot be exported, check the original app’s read-aloud support or look for a separate audiobook edition through a retailer or library.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
