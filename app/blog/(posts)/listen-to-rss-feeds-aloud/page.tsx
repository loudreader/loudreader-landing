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
        Keep using the RSS reader you like. If it has a listening feature
        that suits you, there is no need to add another app. For a LoudReader
        queue, open an item’s original article and use <strong>Paste a Link</strong>{" "}
        or the share extension. If the page cannot be extracted, save a
        readable PDF from your browser and import it. LoudReader does not
        subscribe to RSS feeds or automatically download new entries. This
        is a way to choose a few articles for local listening, not an
        automatic conversion of a whole feed into a podcast.
      </p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Use RSS for discovery and choose individual articles for a listening queue." />
      <QuestionSection question="How do I move an RSS article into LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>In your RSS reader, open the article’s original page rather than copying the feed subscription URL.</li>
          <li>Share that article link to LoudReader, or paste it using the app’s link-import option.</li>
          <li>Wait for import while online. Compare the saved text with the source, including the ending.</li>
          <li>Play a short section. If extraction is incomplete, inspect a browser PDF export as a fallback.</li>
        </ol>
        <p>The distinction between a feed URL and an article URL matters.
        The former describes a stream of items; it is not a request that
        LoudReader will follow and keep synchronised. The <Link href="/listen-to-articles-mac" className="text-loudBlue hover:underline">article listening guide</Link>{" "}
        covers saved web content on a compatible Mac.</p>
      </QuestionSection>
      <QuestionSection question="What if the feed contains only a summary?">
        <p>A summary in an RSS reader and the full page on the publisher’s
        site are different sources. Opening the original article may provide
        more text, but it may also require a subscription or sign-in. Check
        the actual imported copy rather than assuming the feed’s description
        is the full article.</p>
        <p>A link importer does not automatically inherit your browser
        session. If you are authorised to view a complete article but the
        import contains a teaser, try saving a PDF from the readable page.
        Confirm the PDF contains the full text before importing it. Neither
        method supplies access you do not already have.</p>
      </QuestionSection>
      <QuestionSection question="How do I keep the queue useful instead of growing another backlog?">
        <p>Start with three items that have a clear purpose: one report you
        need for work, one long essay and one topic you want to explore.
        Short announcements usually take longer to organise than to read.
        Prefer articles whose argument is mainly in the prose.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use a title that identifies the source and subject.</li>
          <li>Keep the source URL for references and later corrections.</li>
          <li>Check diagrams and tables before going away from the screen.</li>
          <li>Remove completed copies you do not need to keep.</li>
        </ul>
        <p>A library of saved articles is not necessarily an automatic
        playlist. Choose what to play and verify how navigation works for
        your own queue. Unlimited article saving is Premium; the app has
        a free article allowance to try the workflow first.</p>
      </QuestionSection>
      <QuestionSection question="Which parts can work offline?">
        <p>Fetching a feed and downloading a new article require access to
        those sources. Once a readable copy and the needed voice resources
        are available locally, LoudReader can generate its speech offline.
        Test that specific article and voice without a connection before
        a trip.</p>
        <p>This does not make the entire chain private by default. Your
        RSS reader’s sync provider, the publisher and any cloud file storage
        have their own handling of data. LoudReader itself includes diagnostics
        and usage analytics. Its local speech path means the article is not
        uploaded to a speech server for narration; it is not a promise that
        no service sees any activity.</p>
      </QuestionSection>
      <QuestionSection question="Do I need a different RSS app?">
        <p>Usually not just for this workflow. First check whether your
        current reader can open or share the original article URL and whether
        its own read-aloud option meets your needs. A useful comparison is
        one real article with headings, a quotation and an image—not a
        general claim that one category of voices sounds better.</p>
        <p>We make <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>.
        Its role here is saving and narrating selected text, while your RSS
        app remains responsible for subscriptions and unread counts. For
        newsletters delivered through a platform, the <Link href="/blog/listen-to-substack-newsletters" className="text-loudBlue hover:underline">Substack guide</Link>{" "}
        starts with that platform’s own audio options.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}
