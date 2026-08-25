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

export default function WhyDoesTextToSpeechSoundRoboticArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The robotic sound comes from how the audio gets built, not from a
          voice being inherently mechanical. Older text-to-speech systems
          generated words from fixed acoustic rules or spliced together small
          pre-recorded fragments, and neither approach models how pitch and
          rhythm flow across a real sentence, so the output comes out flat
          with audible seams between sounds. Modern neural text-to-speech
          generates the waveform from a model trained on human speech, which
          captures much more of that natural flow, so a lot of what people
          call &quot;robotic TTS&quot; today is really a different problem:
          the system mispronouncing a number, an abbreviation, or an
          ambiguous word. Clean source text and a modern voice engine mostly
          solve the flat-monotone problem that made TTS sound obviously
          synthetic for decades. <strong>LoudReader</strong> uses{" "}
          natural offline voices for exactly this reason.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Old TTS followed rules. Modern TTS learns from real speech."
      />

      <QuestionSection question="What actually made old text to speech sound robotic?">
        <p>
          Two older approaches, and both have the same underlying limit.{" "}
          <strong className="text-gray-900">Formant synthesis</strong> built
          speech from scratch using acoustic rules, essentially a set of
          instructions for how each sound should be shaped. It's efficient
          and endlessly flexible, but it has no real model of how a human
          voice's pitch rises and falls across a sentence, so it comes out
          sounding mechanical by construction, which is exactly the sound
          most people picture when they think of classic robotic TTS.{" "}
          <strong className="text-gray-900">Concatenative synthesis</strong>{" "}
          took the opposite approach: splicing together tiny recorded
          fragments of real human speech. That fixed some of the
          mechanical tone, but introduced a different flaw, audible seams
          where fragments meet, because the fragments were recorded in
          isolation and don't naturally flow into whatever word comes next.
        </p>
        <p>
          Neither method has anything resembling a real understanding of the
          sentence being spoken. They're following rules or gluing clips
          together, not modeling how a person actually paces a thought out
          loud.
        </p>
      </QuestionSection>

      <QuestionSection question="Why do modern voices sound different?">
        <p>
          Modern neural text-to-speech is trained on large amounts of real
          human speech, and it generates the audio waveform as a continuous
          process rather than assembling it from rules or pre-recorded
          pieces. That training lets it pick up the patterns that make speech
          sound natural: how pitch tends to rise before a comma and fall at
          the end of a sentence, where a speaker naturally pauses to breathe,
          how stress shifts across a longer clause. None of that is hand-coded
          the way it was in the older systems. It's learned from the data, in
          the same general sense that any modern machine-learning system
          learns patterns from examples rather than following an explicit
          rulebook.
        </p>
        <p>
          The practical effect is that the gap between old-style TTS and
          modern neural TTS is a lot bigger than the gap between modern
          neural TTS and an actual human voice. Whether that remaining gap
          matters for a whole book is a separate question, one we answer
          honestly in{" "}
          <Link
            href="/blog/are-ai-voices-good-enough-for-books"
            className="text-loudBlue hover:underline"
          >
            are AI voices good enough for books
          </Link>
          . This article is about the cause of the robotic sound, not a
          verdict on whether today's voices clear that bar.
        </p>
      </QuestionSection>

      <QuestionSection question="If the voice is modern, why does it still stumble sometimes?">
        <p>
          Because a lot of what sounds &quot;robotic&quot; in a modern system
          isn&apos;t the voice at all, it&apos;s the text confusing it.
          Numbers, dates, and abbreviations have to be expanded into words
          correctly (is &quot;Dr.&quot; a doctor or a street called
          Drive?), and a wrong guess produces an odd-sounding word even from
          an otherwise smooth voice. Homographs cause the same problem: a
          word like &quot;read&quot; or &quot;lead&quot; is pronounced
          differently depending on grammar the system has to infer from
          context, and it doesn&apos;t always guess right. Messy source text,
          a scanned PDF with broken line breaks, or an auto-generated
          transcript with no real punctuation, gives the system fewer clues
          to work with, and the result sounds rougher even though the
          underlying voice hasn&apos;t changed. Clean, well-punctuated text
          is the single biggest lever you have over how natural a passage
          ends up sounding.
        </p>
      </QuestionSection>

      <QuestionSection question="Does running the voice on-device instead of in the cloud make it worse?">
        <p>
          Not the way it used to. On-device voice quality has closed most of
          the distance to cloud-based voices, largely because phones and
          laptops now ship with dedicated hardware built for running these
          models efficiently, without needing a data center behind them.
          There can still be a small edge for cloud voices in expressiveness
          and variety, since those models don&apos;t have to fit on a device.
          We go through that trade in more detail in{" "}
          <Link
            href="/blog/are-offline-voices-as-good-as-cloud"
            className="text-loudBlue hover:underline"
          >
            are offline voices as good as cloud
          </Link>
          , but for straightforward narration, the difference is small enough
          that most listeners couldn&apos;t reliably tell which is which. The
          upside of staying on-device is a real trade you can weigh for
          yourself: it&apos;s{" "}
          fully on-device and private, your library never leaves your device,
          and it keeps working with no connection at all.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear a modern voice for yourself"
        subline="One natural offline voice, free, with unlimited listening. No account needed."
      />
    </ArticleLayout>
  );
}
