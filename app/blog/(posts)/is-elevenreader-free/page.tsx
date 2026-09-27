import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import Disclosure from "@/components/blog/Disclosure";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function IsElevenReaderFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Yes. ElevenReader has a free plan with 10 hours of new text-to-audio
          generation each month. That is not a ten-hour cutoff on every kind
          of listening: replaying audio already generated and listening to
          free Explore titles do not use those hours. If you regularly import
          more new text, compare extra-hour packs with Ultra, its paid plan.
          The details below were checked against ElevenReader&apos;s own
          pricing and help pages on 28 September 2026.
        </p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="The free allowance concerns new audio generation, not every replay." />

      <QuestionSection question="What counts against the free allowance?">
        <p>
          The <a href="https://help.elevenlabs.io/hc/en-us/articles/35971782968465-How-do-ElevenReader-hours-work" className="text-loudBlue hover:underline">official hour guide</a>
          distinguishes converting your imported text from playing it again.
          Free hours reset monthly, so keep an eye on the remaining allowance
          when adding a new book. The stated hours use normal playback speed
          as a reference; turning narration up does not make more text free.
        </p>
        <p>
          Avoid converting the allowance into a fixed page count. A page of
          dialogue and a dense textbook page contain different amounts of
          text. Try a chapter of the material you actually read and check the
          usage display before deciding whether the plan covers your month.
        </p>
      </QuestionSection>

      <QuestionSection question="What does Ultra cost, and what are its limits?">
        <p>
          ElevenReader&apos;s <a href="https://elevenreader.io/" className="text-loudBlue hover:underline">current site</a>
          lists Ultra at US $11 monthly or $99 annually. Check your local
          checkout for taxes, offers and renewal terms. Ultra adds offline
          downloads and custom voices. It also includes premium catalogue
          access with a separate 20-hour monthly allowance; do not treat the
          catalogue as unlimited simply because imported text has a different limit.
        </p>
        <p>
          For your imports, <a href="https://elevenreader.io/pricing" className="text-loudBlue hover:underline">the plan details</a>
          define Ultra&apos;s unlimited offer as up to 24 hours of generated
          audio per day at normal speed. Offline downloads have their own
          conditions, and downloaded audio stays inside ElevenReader rather
          than becoming a shareable export. Read these distinctions before
          paying specifically for travel or audio-file creation.
        </p>
      </QuestionSection>

      <QuestionSection question="Do you have to subscribe when the free hours run out?">
        <p>
          Not necessarily. ElevenLabs documents extra-hour packs that can be
          bought without an active subscription. A pack may fit an occasional
          long book; a recurring plan may fit regular use. Compare the offer
          shown in your account, including expiry, rather than assuming
          Ultra is the only way to add capacity.
        </p>
        <p>
          Before paying, decide whether you are buying more generation or a
          feature such as offline downloads. Extra hours do not automatically
          unlock every subscription feature. Likewise, a trial that becomes
          a paid subscription is different from remaining on the free plan.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you use ElevenReader on a Mac or without internet?">
        <p>
          ElevenReader offers <a href="https://help.elevenlabs.io/hc/en-us/sections/26165356474897-ElevenReader" className="text-loudBlue hover:underline">web/desktop access as well as mobile apps</a>.
          You can therefore use its web reader on a Mac; the absence of a
          particular native app would not mean the service is unavailable
          there. Files are associated with your ElevenReader account.
        </p>
        <p>
          Its offline-download feature prepares audio before you disconnect.
          That is a different workflow from generating a new book&apos;s speech
          on your own device. Test a prepared chapter before travelling and
          check download availability on the device you intend to carry.
          For sensitive documents, review the service&apos;s upload and privacy
          terms before importing them.
        </p>
      </QuestionSection>

      <QuestionSection question="What if you want ongoing free local book listening?">
        <Disclosure />
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>
          {" "}is another option for DRM-free EPUBs and PDFs on iPhone and iPad,
          including compatible Apple Silicon Macs running the iPad app.
          {" "}{FREE_TIER.full} It does not automatically sync libraries or
          positions across devices.
        </p>
        <p>
          Narration runs locally, so your book is not uploaded for speech
          generation. The app nevertheless sends crash/performance diagnostics
          and usage analytics; release 1.12 has no visible in-app switch for
          them. Choose based on the workflow and voices you need, rather than
          equating a free download with identical features or privacy practices.
        </p>
        <p>
          Our <Link href="/elevenreader-alternative" className="text-loudBlue hover:underline">ElevenReader alternative page</Link>
          {" "}covers the different reading workflows. Sample both with a real
          chapter before deciding which allowance, device support and narrator
          selection suit you.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try local narration with LoudReader" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
