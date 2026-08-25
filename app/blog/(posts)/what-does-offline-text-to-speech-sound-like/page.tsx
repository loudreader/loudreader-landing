import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, DIFFERENTIATORS } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function WhatDoesOfflineTTSArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Words can&apos;t answer this honestly, so we won&apos;t try to
          describe a sound to you. Offline text-to-speech today sounds like a
          calm, clear person reading, not the flat, choppy robot voice older
          screen readers made famous. It has real limits: it doesn&apos;t
          give characters distinct voices, and it doesn&apos;t bring the
          emotional performance a skilled human narrator gives a great scene.
          What it does well is make any book, including the ones no
          audiobook company ever recorded, actually listenable.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) runs its{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            23 studio narrators across 10 languages
          </Link>{" "}
          entirely on-device, and every one of them is playable on that page
          right now, no download needed. Go listen, then judge for yourself
          whether the honest gap we describe below matters for what you want
          to read.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Runs on your device. Listen to it before you decide."
      />

      <QuestionSection question="What does offline text-to-speech sound like today?">
        <p>
          Better than most people expect if their reference point is an old
          GPS voice or a screen reader from a decade ago. Modern on-device
          narration has natural rhythm, reasonable pacing around punctuation,
          and none of the robotic monotone that used to be the whole
          category&apos;s reputation. It sounds like a person reading
          steadily, not a machine spelling out words.
        </p>
        <p>
          It is still, honestly, synthetic. Listen closely across a long
          stretch and you can tell it isn&apos;t a human performance. That
          doesn&apos;t make it unpleasant to listen to, and for most reading
          it disappears into the background the way any narrator does once
          you&apos;re following the story instead of the voice. But the
          description ends here, because a description is the wrong tool for
          this question.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does describing a voice fail, and what's the better test?">
        <p>
          Adjectives about sound are lossy in a way adjectives about almost
          anything else aren&apos;t. &quot;Natural&quot; and
          &quot;offline&quot; and &quot;calm&quot; all narrow the field, but
          none of them tells your ear what it will actually hear, and your
          ear is the only judge that matters here.
        </p>
        <p>
          So instead of more adjectives, here&apos;s the actual answer:{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            go to /voices
          </Link>{" "}
          and play a narrator. Every one of the 23 voices runs right in your
          browser, no app download, no account, no signup. It&apos;s{" "}
          {DIFFERENTIATORS.private}, and the samples on that page are
          generated the same way the app generates them, so what you hear is
          exactly what you&apos;d get reading a real book.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does offline narration fall short of a performed audiobook?">
        <p>
          This is the part worth being upfront about, because pretending
          otherwise wastes your time. A professional audiobook narrator does
          things synthetic voices don&apos;t yet do: distinct voices for
          different characters, comic timing, the kind of emotional shading
          that comes from a trained performer interpreting a scene rather
          than reading it. If you&apos;ve heard a genuinely great audiobook
          performance, on-device narration is not going to replace that
          particular experience.
        </p>
        <p>
          What it&apos;s for is different, and arguably bigger. Most books
          never get a performed audiobook at all: backlist titles, technical
          books, self-published novels, the EPUB or PDF already sitting in
          your files. For all of those, the honest choice isn&apos;t
          &quot;synthetic voice versus great performance,&quot; it&apos;s
          &quot;synthetic voice versus not reading it out loud at all.&quot;
          Judged against that real alternative, offline narration clears the
          bar comfortably.
        </p>
      </QuestionSection>

      <QuestionSection question="Does running offline change the sound quality?">
        <p>
          Not for the worse. LoudReader&apos;s narration is generated
          entirely on your device rather than in the cloud, which means{" "}
          {DIFFERENTIATORS.private} and playback keeps working without a
          connection. That&apos;s a privacy and reliability choice, not a
          quality tradeoff: the voices you hear on{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            /voices
          </Link>{" "}
          are the same ones reading your book on the plane, in a tunnel, or
          with your phone in airplane mode. For a closer look at how
          on-device voices actually compare to cloud-generated ones, see{" "}
          <Link
            href="/blog/are-offline-voices-as-good-as-cloud"
            className="text-loudBlue hover:underline"
          >
            are offline voices as good as cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What if none of the built-in narrators sound right to you?">
        <p>
          Play through the roster first, English alone has 11 voices with
          real range. If none of them land, LoudReader Premium includes
          on-device voice cloning: read a few sentences aloud, about ten
          seconds, and the app builds a narrator from your own voice. The
          recording and the model stay on your device.
        </p>
        <p>
          Download{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader from the App Store
          </a>{" "}
          once you&apos;ve heard a voice you like, or start with the samples.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Stop reading about the sound and hear it"
        subline="23 narrators across 10 languages, playable right now at /voices. No download, no account, no cost to listen."
      />
    </ArticleLayout>
  );
}
