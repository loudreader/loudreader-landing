import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import Disclosure from "@/components/blog/Disclosure";
import { FREE_TIER, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function IsSpeechifyWorthItArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Speechify is worth considering if its reading tools solve a problem
          you regularly have: moving between devices, scanning documents,
          using a particular language or working with browser content.
          Its advertised US Premium price was $29 per month when checked on
          28 September 2026. Whether that is good value depends on the
          features you actually use and the offer at checkout. Try a realistic
          reading session before committing to an annual plan; a large voice
          catalogue alone does not tell you how well your own documents will work.
        </p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Judge the subscription against your normal reading week." />

      <QuestionSection question="What are you buying beyond basic read-aloud?">
        <p>
          <a href="https://speechify.com/pricing/" className="text-loudBlue hover:underline">Speechify&apos;s current Premium page</a>
          lists scanning, AI summaries and chat, cloud-drive integrations and
          a larger voice/language selection. Its free plan lists ten basic
          voices and a maximum speed of 1.5×. That is a feature distinction,
          not evidence that the free voices cannot read a whole book.
        </p>
        <p>
          Make a short list of the features you would miss without it.
          Scanning is valuable if your reading arrives on paper. Browser
          tools matter if your queue is mostly web pages. A preferred voice
          may justify paying if you listen for hours each week. Features that
          sound interesting but never enter your routine add little value.
        </p>
      </QuestionSection>

      <QuestionSection question="Does Premium mean unlimited premium voices?">
        <p>
          Speechify&apos;s <a href="https://speechify.com/usage-limits/" className="text-loudBlue hover:underline">usage policy</a>
          guarantees a total of 1,000,000 premium-voice words per month during
          2026 and also states a 150,000-word contractual baseline. The smaller
          number is not the current 2026 cap. Do not assume either figure is
          the final offer for a later year: recheck the current policy before renewing.
        </p>
        <p>
          For ordinary use, the useful question is whether your own reading
          approaches the applicable allowance. Look at your actual usage in
          the app. A single long book does not automatically exhaust a
          million-word allowance, and hypothetical maximum usage is a poor
          reason to reject an app that comfortably handles your real month.
        </p>
      </QuestionSection>

      <QuestionSection question="How can you test the value before subscribing?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Import one ordinary document and one difficult one, such as a scan or multi-column report.</li>
          <li>Listen with your preferred voice for a full chapter, checking names and numbers.</li>
          <li>Try the exact workflow you need: browser import, switching devices, or prepared offline listening.</li>
          <li>Check which of those actions require Premium in your account.</li>
          <li>Read the total billed amount, renewal date and cancellation instructions.</li>
        </ol>
        <p>
          Compare the result with a free tool you already have. If you only
          needed selected paragraphs spoken aloud, a system reading feature
          may be sufficient. If you repeatedly lose time importing and
          managing documents, a paid workflow that fixes that friction may
          matter more than saving a few dollars.
        </p>
      </QuestionSection>

      <QuestionSection question="When might LoudReader fit instead?">
        <Disclosure />
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>
          {" "}focuses on local narration of books and saved articles. It runs
          on iPhone and iPad, and as an iPad app on compatible Apple Silicon
          Macs. {FREE_TIER.full} The current US Premium choices are
          {" "}{PRICING.premiumMonthly}, {PRICING.premiumYearly}, or
          {" "}{PRICING.premiumLifetime}.
        </p>
        <p>
          The trade-offs matter: LoudReader does not automatically sync your
          library across devices, and narrator availability depends on
          hardware. Its free voice selection is English. Premium is needed
          for controls such as adjustable speed and the sleep timer.
          Compare these details with your needs, not just the subscription price.
        </p>
        <p>
          Books are not uploaded for narration, but LoudReader sends
          crash/performance diagnostics and usage analytics. Release 1.12 has
          no visible in-app switch for them. Our
          <Link href="/speechify-alternative-for-mac" className="text-loudBlue hover:underline"> Mac alternative guide</Link>
          {" "}explains the platform distinction in more detail.
        </p>
      </QuestionSection>

      <QuestionSection question="What is a sensible decision rule?">
        <p>
          Subscribe when a feature you have tested improves a task you do
          often enough to justify its total cost. Stay free when the free
          voices and controls already cover your reading. If you are unsure,
          avoid paying for a long billing period merely because the monthly
          equivalent looks lower. No reader is worth paying for solely on
          the strength of a comparison article, including this one.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Compare with LoudReader on your own books" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
