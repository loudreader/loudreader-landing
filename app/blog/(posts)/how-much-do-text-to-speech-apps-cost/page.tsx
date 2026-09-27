import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import Disclosure from "@/components/blog/Disclosure";
import ComparisonTable from "@/components/money/ComparisonTable";
import { FREE_TIER, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowMuchDoTextToSpeechAppsCostArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Text-to-speech can cost nothing with built-in reading tools, or
          involve a subscription, a one-time purchase or a usage allowance.
          Compare the amount actually billed, the voice you want and any
          word, character or generation limit. A higher price does not prove
          better narration for your books, and an annual plan advertised
          &quot;per month&quot; is still an upfront annual payment.
          The examples below were checked on 28 September 2026 and use US
          dollars; local storefronts and offers can differ.
        </p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Compare total cost and usable allowances, not just the monthly headline." />

      <QuestionSection question="What can you use without paying?">
        <p>
          Try your device&apos;s built-in reading controls first. Apple offers
          <a href="https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios" className="text-loudBlue hover:underline"> Read &amp; Speak on iPhone</a>
          {" and "}
          <a href="https://support.apple.com/en-au/guide/mac-help/mh27448/26/mac/26" className="text-loudBlue hover:underline">Speak selection on Mac</a>
          . These are different from VoiceOver, the broader screen reader
          used to navigate the interface. You do not need to turn on VoiceOver
          just to have a selected paragraph read aloud.
        </p>
        <p>
          Dedicated apps can offer a permanent free voice, a renewable
          allowance or a time-limited trial. Those options have different
          value for occasional articles and long books.
          {" "}<strong>LoudReader:</strong> {FREE_TIER.full} For other choices, see our
          <Link href="/blog/best-free-text-to-speech-app" className="text-loudBlue hover:underline"> free TTS guide</Link>.
        </p>
      </QuestionSection>

      <QuestionSection question="What do paid reader plans cost?">
        <ComparisonTable
          caption="Selected US-dollar reader prices checked 28 September 2026; these are examples, not every available offer"
          columns={["Monthly billing", "Annual billing", "What to check"]}
          highlightColumn={-1}
          rows={[
            { label: "LoudReader Premium", cells: [PRICING.premiumMonthly, PRICING.premiumYearly, "Available voices depend on your device"] },
            { label: "Speechify Premium", cells: ["$29", "Confirm current annual checkout", "Premium voice usage allowance"] },
            { label: "ElevenReader Ultra", cells: ["$11", "$99 upfront", "Import generation and premium catalogue have separate limits"] },
            { label: "NaturalReader Lite", cells: ["$13.90", "$79 upfront", "Plus and Pro voices belong to higher plans"] },
            { label: "Voice Dream", cells: ["Offer varies", "Multiple annual offers listed", "Check the actual in-app offer for your account"] },
          ]}
        />
        <p>
          Sources: <a href="https://speechify.com/pricing/" className="text-loudBlue hover:underline">Speechify</a>,{" "}
          <a href="https://elevenreader.io/" className="text-loudBlue hover:underline">ElevenReader</a>,{" "}
          <a href="https://help.naturalreaders.com/en/articles/8854700-plans-pricing-personal-version" className="text-loudBlue hover:underline">NaturalReader personal plans</a>, and{" "}
          <a href="https://apps.apple.com/us/app/voice-dream-natural-reader/id496177674" className="text-loudBlue hover:underline">Voice Dream&apos;s US listing</a>.
          Voice Dream lists several subscription products; that is not
          enough evidence to declare one universal price for every new user.
        </p>
      </QuestionSection>

      <QuestionSection question="How should you compare monthly and annual billing?">
        <p>
          Multiply a monthly subscription by the number of months you expect
          to use it, then compare that with the upfront annual charge.
          LoudReader&apos;s current US monthly price totals $95.88 over twelve
          months, versus $49.99 for an annual plan. The annual plan costs less
          for that full year, but a single month costs less if that is all you need.
        </p>
        <p>
          Apply the same calculation to your actual local checkout, including
          any applicable tax. A temporary introductory discount should not
          be treated as the renewal price. Check the renewal date and
          cancellation route before starting a paid trial.
        </p>
      </QuestionSection>

      <QuestionSection question="What usage limits change the value of a plan?">
        <p>
          A listening hour, a generated audio hour and a character allowance
          are not interchangeable. ElevenReader&apos;s
          <a href="https://help.elevenlabs.io/hc/en-us/articles/35971782968465-How-do-ElevenReader-hours-work" className="text-loudBlue hover:underline"> hour guide</a>
          explains that repeated playback of already converted text does not
          consume new generation hours. Speechify documents a separate
          <a href="https://speechify.com/usage-limits/" className="text-loudBlue hover:underline"> premium voice allowance</a>.
          Check the voice and activity covered by a limit before comparing numbers.
        </p>
        <p>
          Keep a simple estimate of your normal use: new books imported,
          articles saved and any audio you need to download. You do not need
          to convert every word into an exact monthly forecast. You do need
          to know whether a limit can interrupt the particular job you are buying.
        </p>
      </QuestionSection>

      <QuestionSection question="Are one-time purchases still available?">
        <p>
          Yes. LoudReader offers {PRICING.premiumLifetime} alongside its
          subscriptions. NaturalReader also advertises separate
          <a href="https://www.naturalreaders.com/software.html" className="text-loudBlue hover:underline"> desktop software with a perpetual licence</a>
          ; that is a different product from its personal web/mobile plans.
          Check current operating-system compatibility and the included voices
          before treating different editions as equivalent.
        </p>
        <p>
          At the current US price, LoudReader&apos;s lifetime purchase costs
          about as much as four annual payments. Whether that is worthwhile
          depends on how long you expect to use the app and whether the
          present features meet your needs. A one-time licence is not a
          guarantee that every future device or operating system will be supported.
        </p>
      </QuestionSection>

      <QuestionSection question="Does a higher price buy a better voice?">
        <p>
          Price alone cannot tell you. An app may bundle scanning, languages,
          browser tools, voice generation or other features you never use.
          Audition the same passage and try your hardest document before
          paying. For LoudReader&apos;s current plans and supported devices,
          start at the <Link href="/" className="text-loudBlue hover:underline">product page</Link>.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Start with the free book reader" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
