import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, VOICES } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ChangeNarratorVoiceMidBookArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Yes, you can change the narrator voice partway through a book, and
          you don&apos;t need to restart or wait for a chapter break.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) has a voice
          button right in the player: tap it to cycle to the next narrator,
          or press and hold to open a full picker of every voice, grouped by
          language. The switch takes effect on the next sentence, so the line
          currently playing finishes in the old voice and the very next one
          starts in the new one. Your place in the book, your notes, and your
          progress are untouched. The free tier includes one voice with
          unlimited listening; switching between the rest of the roster of{" "}
          {VOICES.headline} needs Premium. See every narrator, and hear each
          one read a real sample, on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          .
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="One tap swaps the narrator without losing your place."
      />

      <QuestionSection question="Can you switch narrators without starting the book over?">
        <p>
          Yes. This is a genuinely common thing to want: you picked a voice
          before hearing much of the book, and three chapters in it&apos;s not
          working for you, or you just want a change. LoudReader is built for
          this. The voice control sits in the player alongside play, pause,
          and speed, not buried in a separate settings screen you have to
          leave the book to reach.
        </p>
        <p>
          A tap on the voice button cycles to the next available narrator in
          the book&apos;s own language, one voice at a time. If you want to
          jump straight to a specific narrator instead of cycling through
          them, press and hold the same button. That opens a full picker with
          every voice in the roster, organized by language, with a checkmark
          showing which one is currently reading to you. Tap any voice in the
          list and it takes over.
        </p>
      </QuestionSection>

      <QuestionSection question="When does the new voice actually start?">
        <p>
          On the next sentence, not the next chapter and not instantly
          mid-word. Whatever sentence is playing when you make the switch
          finishes in the original voice, and the sentence right after it
          starts in the new one. That&apos;s a deliberate design choice: an
          abrupt cut mid-sentence would sound broken, while waiting for a
          whole chapter to end would make the feature feel too heavy to use
          casually. A one-sentence handoff is the middle ground, and in
          practice it&apos;s barely noticeable, just a change of narrator
          between one line and the next.
        </p>
      </QuestionSection>

      <QuestionSection question="What if you pick a narrator in a different language?">
        <p>
          LoudReader checks with you before it does that. The one-tap cycle
          deliberately stays inside the book&apos;s own language, so a casual
          tap can&apos;t accidentally hand an English novel to a Spanish
          narrator. If you use the full picker and choose a voice in a
          different language on purpose, the app asks first, with a plain
          confirmation: read this book in that language? Only if you confirm
          does the switch happen. Language detection isn&apos;t perfect, and
          being read to in a language you didn&apos;t expect, mid-chapter, is
          the kind of surprise nobody wants, so this step exists to catch it
          before it happens rather than after.
        </p>
        <p>
          For readers actually looking for a narrator in a specific language
          rather than switching by accident, the full roster and what&apos;s
          available in each one is on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          , where you can hear every narrator read a sample in their own
          language before you go looking for them in the book.
        </p>
      </QuestionSection>

      <QuestionSection question="Do you need Premium to switch narrators mid-book?">
        <p>
          To switch back to your free voice, no. The free tier includes one
          natural offline voice with unlimited listening on every book, and
          you can cycle back to it from the player at any time at no cost.
          Switching to any of the other studio narrators is a Premium
          feature. If you tap a locked voice in the full picker, LoudReader
          opens the paywall instead of switching, so you can see the whole
          roster is there without it silently working around your plan.
        </p>
        <p>
          Premium unlocks {VOICES.premium}, along with playback speed from
          0.3x to 3.0x, a sleep timer, ambient soundscapes, and notes. If
          you&apos;re trying to decide which narrator to pick before
          upgrading,{" "}
          <Link
            href="/blog/best-voice-for-nonfiction-vs-fiction"
            className="text-loudBlue hover:underline"
          >
            the guide to picking a voice for nonfiction vs fiction
          </Link>{" "}
          walks through what to listen for.
        </p>
      </QuestionSection>

      <QuestionSection question="Does switching voices affect your progress or notes?">
        <p>
          No. The voice is purely how the book sounds, not what page
          you&apos;re on. Your reading position, any notes or highlights
          you&apos;ve added, and your listening history all stay exactly
          where they were. Switching narrators is a low-stakes thing to try:
          worst case, you tap it again and go back.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Switch narrators without losing your place"
        subline="One tap in the player changes the voice mid-book. Free tier included, no account needed."
      />
    </ArticleLayout>
  );
}
