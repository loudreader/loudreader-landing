import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HearYourNovelReadAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Before your novel goes to beta readers or agents, give it a{" "}
          <strong>listening pass</strong>: have a voice read the whole
          manuscript aloud while you do nothing but listen. Your ears will
          catch what four screen passes missed: dialogue that only worked in
          your head, the word you used five times in one chapter, scenes
          where the pacing quietly sags. The tool question has one hard
          requirement: an unpublished manuscript should not be uploaded to
          anyone&apos;s server. <strong>LoudReader</strong> (native Mac and
          iPhone apps) reads your exported EPUB or PDF with natural offline
          voices, fully on-device and private, your library never leaves your
          device. No account, no cloud, and it works in airplane mode.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Your manuscript, read aloud, with no server in the loop."
      />

      <QuestionSection question="What does a listening pass catch that reading misses?">
        <p>
          By the final draft you don&apos;t read your novel anymore, you
          recognize it. Your eyes skim sentences they have seen fifty times,
          and your inner narrator performs the dialogue exactly as you
          intended it. A voice that isn&apos;t you breaks that spell.
          Listening, you will catch:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Dialogue that clunks.</strong>{" "}
            Spoken aloud by a neutral voice, stilted exchanges and
            speechifying characters are unmistakable. If it sounds wrong in
            one voice, it reads wrong in a stranger&apos;s head.
          </li>
          <li>
            <strong className="text-gray-900">Echo words.</strong> The
            &ldquo;just&rdquo;, &ldquo;suddenly&rdquo;, or a character&apos;s
            name repeated three times in a paragraph, nearly invisible on
            screen, impossible to miss by ear.
          </li>
          <li>
            <strong className="text-gray-900">Pacing drift.</strong> Scenes
            that overstay their welcome announce themselves when you have to
            sit through them in real time instead of skimming.
          </li>
          <li>
            <strong className="text-gray-900">Sentence-level stumbles.</strong>{" "}
            Run-ons, missing words, and tangled clauses, the same mechanics
            covered in the companion guide to{" "}
            <Link
              href="/blog/proofread-by-listening"
              className="text-loudBlue hover:underline"
            >
              proofreading by listening
            </Link>
            .
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Is it safe to put an unpublished manuscript into a TTS app?">
        <p>
          This is the question that stops most writers, and it deserves a
          precise answer: it depends on where the speech is generated. A
          cloud TTS service synthesizes audio on its servers, which means
          your manuscript is transmitted, processed, and handled under terms
          of service that vary by provider and can change after you agreed
          to them. Whether any given service uses uploaded text for model
          training is a question only its current terms can answer. And for
          a novel you haven&apos;t published yet, &ldquo;go read the terms and
          hope they don&apos;t change&rdquo; is a lot of trust to extend.
        </p>
        <p>
          The alternative is structural, not contractual: use a reader where
          the text never leaves your machine. LoudReader generates its
          narration entirely on your Mac or iPhone. It&apos;s fully on-device
          and private, your library never leaves your device. There&apos;s no
          account to create and no server ever sees a word of the manuscript.
          You can turn on airplane mode and the book keeps reading. The full
          privacy picture is on{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text-to-speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How do you run a listening pass?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Export a listening copy.</strong>{" "}
            Compile to EPUB from Scrivener, or export PDF from Word, Google
            Docs, or Pages. EPUB reflows more cleanly, and PDF always works.
          </li>
          <li>
            <strong className="text-gray-900">Import it into LoudReader.</strong>{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              Download it from the App Store
            </a>{" "}
            (free, no account), then import the file on Mac or share it to
            the app on iPhone.
          </li>
          <li>
            <strong className="text-gray-900">Listen away from the keyboard.</strong>{" "}
            The first listening pass works best as a reader, not an editor:
            go for a walk, keep a notebook, and jot chapter numbers where
            something snagged. Resist fixing as you go. You&apos;re here to
            hear the shape of the book.
          </li>
          <li>
            <strong className="text-gray-900">Work in chapters.</strong>{" "}
            LoudReader remembers your position between sessions, so a
            90,000-word manuscript becomes a few weeks of commutes and
            evening walks rather than one heroic sitting.
          </li>
          <li>
            <strong className="text-gray-900">Then edit from your notes.</strong>{" "}
            Back at the desk, fix the flagged scenes in your master document.
            The listening copy is disposable and never edited directly.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Should the voice perform the book?">
        <p>
          No, and to be clear, LoudReader won&apos;t. The narration follows
          your punctuation with a single, consistent, neutral narrator: pauses
          at commas, full stops at periods, natural sentence contours. It
          doesn&apos;t do character voices or acted dialogue, the way a hired
          audiobook narrator would.
        </p>
        <p>
          For an editing pass, that neutrality is exactly what you want. A
          performance can rescue flat dialogue, but a neutral read can&apos;t,
          so flat dialogue stays audibly flat. That&apos;s the information you
          came for. The manuscript that survives a plain reading is the one
          that&apos;s ready for other people&apos;s heads.
        </p>
      </QuestionSection>

      <QuestionSection question="When in the process should the listening pass happen?">
        <p>
          Last, after your own screen edits are done and before other
          people see it. The listening pass is the cheapest full read your
          book will ever get: it costs you hours, not a favor from a beta
          reader or a first impression with an agent. Many writers do two:
          one pass for scenes and pacing after the structural edit, and one
          final pass for sentences just before submission. With unlimited
          free listening and a manuscript that never leaves your device,
          the only real cost is the walk you take while listening.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear your novel before anyone else does"
        subline="Import your manuscript as EPUB or PDF. Read aloud on-device, never uploaded, no account."
      />
    </ArticleLayout>
  );
}
