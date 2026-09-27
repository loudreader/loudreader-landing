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
        Medium already has a Listen feature: its current help page describes
        computer-generated narration for English stories, available with an
        active membership. Try that first if you want to stay inside Medium.
        LoudReader is another route when you want to keep a local reading
        copy: try importing the article link, or save a readable PDF from
        your browser and import that. Neither route bypasses a paywall, and
        a successful import should be checked for missing paragraphs.
      </p><p className="text-sm">We make LoudReader. Medium’s own audio may be all you need.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Use Medium’s player, or prepare a local article copy for another reader." />
      <QuestionSection question="How do I use Medium’s own Listen button?">
        <p>Look for Listen near the story title in the browser or app. Medium
        provides voice and playback-speed controls. If the button is missing,
        check your membership and the story’s language; the help page currently
        specifies English. <a href="https://help.medium.com/hc/en-us/articles/4635049283351-About-audio" className="text-loudBlue hover:underline">Medium’s audio instructions</a>{" "}
        are the source for current availability.</p>
        <p>That is the shortest route for someone already reading within
        Medium. You avoid maintaining a second copy, and you can return to the
        original page for links, comments and any later corrections.</p>
      </QuestionSection>
      <QuestionSection question="Can I send a Medium link to LoudReader?">
        <p>LoudReader has a <strong>Paste a Link</strong> option and a share
        extension. Try the article URL while online, then open the imported
        text and compare its beginning and ending with the original. This
        uses the ordinary web-article importer, not a dedicated Medium
        integration.</p>
        <p>An article that is readable in your signed-in browser may not be
        readable by a separate downloader. A paywall, a sign-in requirement,
        or a page that requires JavaScript can leave only a preview or cause
        an import error. Do not assume that sharing the URL also shares your
        browser’s membership session.</p>
      </QuestionSection>
      <QuestionSection question="When is a PDF a better fallback?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the story in your browser with the access your account provides.</li>
          <li>If Reader view is available, use it to reduce page furniture.</li>
          <li>Use the browser’s print or PDF export command. Inspect the preview and saved file: check that the ending is present.</li>
          <li>Import the PDF into <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> and play a short passage.</li>
        </ol>
        <p>A PDF can preserve content already available to you, but it is
        still an extraction of a page. It may contain duplicated pull quotes,
        newsletter prompts, page numbers or missing embeds. If the saved
        file contains only a preview, the narrator cannot recover the rest.</p>
        <p>The <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF import guide</Link>{" "}
        covers listening on iPhone. The same app is available for iPad and
        runs as an iPad app on compatible Apple Silicon Macs.</p>
      </QuestionSection>
      <QuestionSection question="What should I check before listening away from the screen?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Completeness:</strong> compare a paragraph near the middle and the last paragraph, not just the headline.</li>
          <li><strong>Visual arguments:</strong> open charts, screenshots and code examples separately. Extracted captions are not full image descriptions.</li>
          <li><strong>Duplicate passages:</strong> a pull quote can repeat a sentence already present in the body.</li>
          <li><strong>Freshness:</strong> an imported copy does not update when the writer edits the story.</li>
        </ul>
        <p>Keep the source URL with any research notes. If a claim matters,
        follow the author’s references from the live page rather than treating
        a spoken copy as a complete research record.</p>
      </QuestionSection>
      <QuestionSection question="Can I keep an offline article queue?">
        <p>Save a small set of articles and test the chosen voice without a
        connection before travelling. LoudReader synthesises speech locally;
        fetching new links still requires internet access. Article saving has
        a free allowance, while unlimited article saving requires Premium.</p>
        <p>Local narration also does not mean that every part of the app is
        network-free: LoudReader includes diagnostics and usage analytics.
        Browser access and the publisher’s own services are separate from
        the local reading copy. See the <Link href="/blog/listen-to-web-pages-aloud-mac" className="text-loudBlue hover:underline">Mac web-reading workflow</Link>{" "}
        for the broader choice between a browser and a saved library.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}
