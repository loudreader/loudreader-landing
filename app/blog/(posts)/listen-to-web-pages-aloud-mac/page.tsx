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
        A Mac can speak selected webpage text using its built-in accessibility
        controls. For a saved reading copy, LoudReader can import an article
        link or a PDF exported from the browser. Choose the first route for
        text you want to hear immediately, and the second when you want the
        article in a separate library. LoudReader runs on compatible Apple
        Silicon Macs as an iPad app; it is not a separate native macOS reader.
        Both methods depend on getting the right text, so check the selection
        or imported article before a long session.
      </p><p className="text-sm">We make LoudReader. Start with the Mac’s existing controls if they already meet your needs.</p></Tldr>
      <ArticleIllustration variant="devices" caption="Read a selection now, or keep an article copy for later." />
      <QuestionSection question="How do I make macOS speak selected text?">
        <p>Open System Settings → Accessibility and find <strong>Read &amp;
        Speak</strong> (called Spoken Content on older macOS versions). Enable
        Speak selection and check its shortcut; the default is Option–Esc.
        Select a passage in the browser and use the shortcut. The available
        controller can adjust rate and move through speech. Apple’s <a href="https://support.apple.com/guide/mac-help/mh27448/mac" className="text-loudBlue hover:underline">spoken-text guide</a>{" "}
        covers these settings.</p>
        <p>This is a system feature, not a guarantee that every webpage
        exposes its content equally well. If menus or unrelated text are
        spoken, make a more precise selection or use the browser’s Reader
        view where available. Try the voices offered by your Mac before
        deciding whether you need a separate app.</p>
      </QuestionSection>
      <QuestionSection question="How do I import a webpage into LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Copy the URL of the article itself, rather than a homepage or search results page.</li>
          <li>In LoudReader, choose <strong>Paste a Link</strong>, paste the address, and import it while online.</li>
          <li>Open the resulting article. Check the opening, a middle paragraph and the ending.</li>
          <li>Choose a voice and listen to a sample before adding more articles.</li>
        </ol>
        <p>The app’s share extension provides another way to hand over
        supported content. This is web extraction, so a JavaScript-only
        page, authentication screen or sparse preview can fail. It does not
        make LoudReader a browser, and it does not synchronise later edits
        to the original page. See <Link href="/listen-to-articles-mac" className="text-loudBlue hover:underline">the article listening overview</Link>{" "}
        for more context.</p>
      </QuestionSection>
      <QuestionSection question="What if the link does not import the whole article?">
        <p>Open the page in your browser with your normal access. If Reader
        view is available, inspect it, then use the browser’s print or PDF
        export. On macOS, the print dialog can save a PDF. Check the resulting
        file before importing: a successful save can still contain a clipped
        column or only a subscription prompt.</p>
        <p>A PDF is a snapshot of available content, not an authentication
        workaround. A signed-in page can be readable in Safari while a
        separate link importer sees only a preview. For visual material,
        keep the original page or PDF nearby: a chart, formula or screenshot
        can carry information that narration does not convey.</p>
      </QuestionSection>
      <QuestionSection question="What do I gain from a saved article library?">
        <p>You can return to an imported copy without reopening the live
        page, and LoudReader keeps your reading position. Local speech means
        an imported article can be narrated without sending its text to a
        speech server. Prepare the app, article and desired voice before
        testing offline playback.</p>
        <p>Premium covers adjustable playback speed, the sleep timer and
        unlimited article saving. The free article allowance lets you try
        the process. Do not choose an app solely from a feature list: test
        an article whose structure resembles what you actually read.</p>
        <p>macOS speech remains useful for a short passage that does not
        need a saved copy. Keeping both routes available is often simpler
        than forcing every page through one workflow.</p>
      </QuestionSection>
      <QuestionSection question="Does local speech mean nothing uses the internet?">
        <p>No. Opening the website and importing a link require network
        access. Cloud folders and browser services have their own settings.
        LoudReader also includes diagnostics and usage analytics. Its local
        speech engine is specifically about where narration is generated.</p>
        <p>If you handle internal work documents, first check that saving
        them in another app is permitted. The <Link href="/offline-text-to-speech-mac" className="text-loudBlue hover:underline">offline Mac guide</Link>{" "}
        discusses preparing a local listening session. The <Link href="/" className="text-loudBlue hover:underline">LoudReader overview</Link>{" "}
        lists the app’s platform requirements.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}
