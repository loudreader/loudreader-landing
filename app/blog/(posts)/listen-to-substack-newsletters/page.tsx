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
        Start with the play button in the Substack app. Substack supports
        text-to-speech for many English posts, as well as recordings supplied
        by writers. If you want an independent reading copy, LoudReader can
        import a public article link or a PDF you have saved from the post or
        email. Subscriber access still matters: a URL alone may expose only
        the public preview. Choose the workflow for the way the newsletter
        actually reaches you, rather than exporting every post automatically.
      </p><p className="text-sm">We make LoudReader; this guide also covers Substack’s own listening option.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="A newsletter may already have audio. A saved copy is an optional second route." />
      <QuestionSection question="Can I listen directly in Substack?">
        <p>Open a post in the Substack app and try its play icon. Substack’s
        help page says text-to-speech is available for most, but not all,
        publications, and currently for English posts. An older or ineligible
        post may report that audio is unavailable. Playback can continue in
        the background. See <a href="https://support.substack.com/hc/en-us/articles/7265753724692-How-do-I-listen-to-a-Substack-post" className="text-loudBlue hover:underline">Substack’s listening instructions</a>.</p>
        <p>Writers can also add their own voiceovers. When offered, that can
        be a useful choice if you want to hear the writer’s delivery. Substack
        explains the distinction in its <a href="https://support.substack.com/hc/en-us/articles/7265784112916-How-do-I-add-a-voiceover-to-my-Substack-post" className="text-loudBlue hover:underline">voiceover documentation</a>.</p>
      </QuestionSection>
      <QuestionSection question="How do I save a public newsletter for local listening?">
        <p>Copy the post’s article URL and choose <strong>Paste a Link</strong>{" "}
        in LoudReader, or use its share extension. Import while online, then
        compare the saved text with the source. Headings, the last paragraph,
        and a passage near the middle are useful checks.</p>
        <p>This is a general article importer, not a Substack account
        integration. It does not subscribe to publications, monitor your inbox
        or fetch each new post automatically. A page that exposes too little
        text or requires JavaScript can fail to import.</p>
        <p>LoudReader runs on iPhone and iPad, and as an iPad app on compatible
        Apple Silicon Macs. The <Link href="/listen-to-articles-mac" className="text-loudBlue hover:underline">article listening guide</Link>{" "}
        explains the Mac option.</p>
      </QuestionSection>
      <QuestionSection question="What about posts I receive as a paying subscriber?">
        <p>A link copied from an authenticated browser does not necessarily
        carry that login into another app. If the importer receives a preview,
        it cannot read the missing text. Open the complete post using your
        authorised access, then use your browser’s PDF or print export if it
        produces a readable copy. Alternatively, save the complete newsletter
        email as a PDF.</p>
        <p>Inspect that PDF before importing it. Look for a subscription
        prompt in place of the ending, clipped text, and repeated headers.
        A PDF export is not a paywall workaround. The separate <Link href="/blog/listen-to-long-emails-aloud" className="text-loudBlue hover:underline">long-email guide</Link>{" "}
        covers handling email copies without connecting LoudReader to an inbox.</p>
      </QuestionSection>
      <QuestionSection question="What should I keep on screen?">
        <p>A newsletter may make its point through a chart, screenshot or
        embedded video. Narration of the surrounding paragraphs will not
        necessarily explain those elements. Review them before listening, or
        pause and return to the original when the author refers to a visual.</p>
        <p>Comments, linked discussions and later corrections are also
        separate from the saved article. Keep the source link with your notes.
        If you save several editions of an ongoing series, name them with the
        date and topic so you can tell which version you heard.</p>
      </QuestionSection>
      <QuestionSection question="How do I make a manageable newsletter queue?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the few posts you intend to hear this week; leave quick announcements in the inbox.</li>
          <li>Use the existing audio if it suits you. Save a local copy only when that adds something useful.</li>
          <li>Check each import before going offline, including the voice you plan to use.</li>
          <li>After listening, keep the source and any notes you need, then remove redundant reading copies.</li>
        </ol>
        <p>LoudReader generates speech on device, but downloading a new post
        uses the network. It also includes diagnostics and usage analytics;
        local narration is a narrower claim than an entirely network-free
        application. Unlimited article saving is a Premium feature after the
        free allowance. The <Link href="/" className="text-loudBlue hover:underline">LoudReader overview</Link>{" "}
        describes the app alongside its book-reading features.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try your own document in LoudReader" subline="Import a supported file and check a short passage before a longer listening session." />
    </ArticleLayout>
  );
}
