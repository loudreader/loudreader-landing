import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function FreeVsPaidTextToSpeechArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader&apos;s free plan can read a whole imported book; paying
          changes your choice of voices and controls. {FREE_TIER.full}
          Premium adds {PRICING.premiumFeatures}. Notes, highlights and normal
          background listening are not Premium-only features. This guide is
          specifically about LoudReader, rather than a promise that every
          text-to-speech app divides its plans the same way.
        </p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Separate access to your books from the voices and controls used to read them." />

      <QuestionSection question="What can you do on the permanent free plan?">
        <p>
          Import DRM-free EPUBs and PDFs and listen through to the end. There
          is no chapter paywall or word quota on book listening. The app saves
          your reading position on the device where you are reading, and can
          continue playback in the background. It does not automatically sync
          your library or position between devices.
        </p>
        <p>
          Ordinary word-following highlighting, notes and highlights do not
          require Premium. Some ways of adding content do have separate
          limits: free users can save up to 30 articles and use bulk import
          five times. That is a limit on batch-import actions, not a cap of
          five books in your library. Individual book imports remain unrestricted.
        </p>
        <p>
          LoudReader is an iPhone and iPad app; compatible Apple Silicon Macs
          run the iPad version. Try it with your own files on the device you
          plan to use, particularly if a PDF has columns, scans or tables.
        </p>
      </QuestionSection>

      <QuestionSection question="How does the eight-hour voice allowance work?">
        <p>
          The allowance counts cumulative listening, rather than eight hours
          from installation or eight hours every month. It lets you try every
          voice available on your device. The advertised studio roster is 23
          narrators across 10 languages, but hardware affects availability.
        </p>
        <p>
          After the allowance, you choose Stella or Rio as a free English
          voice; supported devices also retain Bella. Listening continues,
          but you do not get to keep any arbitrary studio narrator for free.
          If you read in a different language, evaluate its available voices
          during the trial and check Premium before planning ongoing use.
        </p>
        <p>
          The current release also offers a one-time three-hour voice bonus
          when you finish your first book. That bonus is separate from the
          standard allowance and does not require a review. A subscription
          introductory offer, if shown by the App Store, is a different offer
          with its own eligibility and renewal terms.
        </p>
      </QuestionSection>

      <QuestionSection question="What does Premium add?">
        <p>
          Premium unlocks the full available narrator selection, playback
          speed from 0.3× to 3.0×, a sleep timer, soundscapes, unlimited article
          saving and uncapped bulk-import use. Browse the
          <Link href="/voices" className="text-loudBlue hover:underline"> voice samples</Link>
          {" "}and check the choices actually offered on your device before buying.
        </p>
        <p>
          Voice Studio can create a narrator from about ten seconds of your
          own or permissioned speech. During the voice allowance you can
          create up to three clones; Premium removes that creation quota.
          Existing clones remain stored but become locked if your voice
          allowance ends without Premium. Do not mistake trial access for
          permanent free access to the cloned voice.
        </p>
        <p>
          Generating audio in advance is separate from normal offline
          narration. Some preparation features require Premium and a suitable
          installed engine. You do not need Premium merely to have the app
          generate ordinary narration locally from an existing book.
        </p>
      </QuestionSection>

      <QuestionSection question="When is paying worthwhile?">
        <p>
          Stay free if the English voice selection and standard playback
          suit your reading. Consider Premium for a particular narrator,
          another language, speed adjustment, bedtime controls or regular
          article saving. Test that feature in your own routine; a longer
          list of features is not itself a reason to buy.
        </p>
        <p>
          The current US prices are {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or {PRICING.premiumLifetime}. Other
          storefronts can differ. Compare the total billed amount and renewal
          terms on the purchase sheet, especially when evaluating the
          <Link href="/blog/text-to-speech-app-without-a-subscription" className="text-loudBlue hover:underline"> one-time purchase option</Link>.
        </p>
        <p>
          Both plans generate speech on your device. Neither price tier
          means the app has no telemetry: crash/performance diagnostics and
          usage analytics are separate from book narration.
          Release 1.12 has no visible in-app switch for these services.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the voices before choosing a plan" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
