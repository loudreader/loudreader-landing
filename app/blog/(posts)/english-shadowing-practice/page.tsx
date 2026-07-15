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

export default function EnglishShadowingPracticeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Shadowing is a speaking exercise. You play natural English audio and
          repeat it out loud almost at the same time, copying the
          speaker&apos;s rhythm, stress, and intonation. You can do it with any
          book instead of hunting for podcast transcripts.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          (native Mac and iPhone apps) reads any book aloud with natural
          offline voices while highlighting each word, so your eyes, ears, and
          mouth stay on the same sentence, and tapping any sentence replays it
          from the start. Premium adds playback speed from 0.3x to 3.0x for
          slow, careful passes. One honest limit up front: LoudReader models
          natural English pronunciation for you to imitate, but it doesn&apos;t
          listen to you or grade your speech. A dedicated pronunciation app
          does that.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Shadowing: your voice runs half a second behind the narrator's, copying its shape."
      />

      <QuestionSection question="What is the shadowing technique and why does it work?">
        <p>
          Shadowing is simple to describe and surprisingly hard to do. You
          play spoken audio and <strong>speak along with it</strong>, staying
          about half a second behind the voice. You copy the words and the
          melody underneath them: which syllables the speaker leans on, where
          the pitch rises, how words run together. It has long been used in
          interpreter training, and language learners use it because it
          attacks the part of speaking that silent study never touches, the
          physical habit of English rhythm.
        </p>
        <p>
          Reading grammar rules won&apos;t make your mouth produce
          &ldquo;com-FOR-ta-ble&rdquo; as two-and-a-half quick syllables
          instead of four careful ones. Repeating a native-paced voice, dozens
          of times, will. That&apos;s the whole trick. Shadowing is
          pronunciation practice disguised as listening.
        </p>
      </QuestionSection>

      <QuestionSection question="Why shadow with a book instead of a podcast?">
        <p>
          Most shadowing guides point you at podcast snippets. Those work, but
          books have three practical advantages for deliberate practice:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The full text is in front of you.</strong>{" "}
            No transcript hunting. In LoudReader each word highlights as it is
            spoken, so you always know exactly which word the voice is on, and
            when your mouth falls behind, your eyes catch you up.
          </li>
          <li>
            <strong className="text-gray-900">Sentences repeat on demand.</strong>{" "}
            A tricky sentence can be replayed from its exact start, five times
            in a row, without scrubbing a timeline hoping to land in the right
            place.
          </li>
          <li>
            <strong className="text-gray-900">You choose the difficulty.</strong>{" "}
            A children&apos;s classic gives you short, clean sentences; a
            novel gives you longer ones. Our list of{" "}
            <Link
              href="/blog/easy-english-books-to-listen-to"
              className="text-loudBlue hover:underline"
            >
              easy English books you can listen to for free
            </Link>{" "}
            is a good source of shadowing material.
          </li>
        </ul>
        <p>
          The honest trade-off: books give you narrative English, not
          conversation. Podcasts contain hesitations, slang, and interruptions
          that no novel has. Shadow books for clean, deliberate practice, and
          keep listening to real conversations too.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you run a shadowing session in LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            (free, no account) and open a book: import any DRM-free EPUB or
            PDF, or pick one of the 70,000+ free Project Gutenberg classics
            built in.
          </li>
          <li>
            <strong>Pick a short passage.</strong> A paragraph is plenty. New
            material should be slightly easy for you, because the challenge is
            supposed to be in your mouth, not your vocabulary.
          </li>
          <li>
            <strong>Listen once without speaking</strong>, following the
            highlighted words, so you know where the sentence is going.
          </li>
          <li>
            <strong>Play it again and speak along</strong>, half a second
            behind the voice. Match the stress and the melody, not the words
            alone. Mumbling counts at first, and precision comes with
            repetition.
          </li>
          <li>
            <strong>Repeat the hard sentences.</strong> Tap a sentence to jump
            playback back to its start. (While playing with the controls
            hidden, the first tap just brings the control bar back, so tap the
            sentence after that.) The 15-second back button also always lands
            at the start of a sentence, on screen and on the lock screen.
          </li>
        </ol>
        <p>
          The narration is fully on-device and private, your library never
          leaves your device. The whole loop works offline: on a plane, on the
          subway, anywhere you&apos;re willing to talk to yourself quietly.
        </p>
      </QuestionSection>

      <QuestionSection question="What speed should you shadow at?">
        <p>
          Slower than feels impressive. If word endings are dropping off, so
          you get &ldquo;walk&rdquo; instead of &ldquo;walked&rdquo;, the audio
          is too fast to be teaching you anything. A common pattern is to start
          a new passage around 0.6x to 0.8x and climb back to 1.0x as it
          becomes familiar. Some learners then push a mastered passage slightly
          above 1.0x as a finishing stretch. Why slower playback helps
          comprehension, and when it stops helping, is covered in{" "}
          <Link
            href="/blog/slow-down-audiobook-speed"
            className="text-loudBlue hover:underline"
          >
            how to slow down audiobook speed
          </Link>
          .
        </p>
        <p>
          Honesty about the product: playback speed control (0.3x to 3.0x) is
          part of LoudReader Premium, and the free tier plays at normal speed.
          If you&apos;re on the free tier, choose material with short, simple
          sentences instead of slowing the voice. That&apos;s exactly why
          children&apos;s classics make good shadowing texts. More on choosing
          the right difficulty in{" "}
          <Link
            href="/blog/reading-english-books-non-native"
            className="text-loudBlue hover:underline"
          >
            reading English books as a non-native speaker
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What will shadowing with LoudReader not do?">
        <p>
          Two honest limits. First, LoudReader gives you a consistent, natural
          English model to imitate, but it doesn&apos;t listen to your voice,
          and it can&apos;t tell you that your &ldquo;th&rdquo; came out as
          &ldquo;z&rdquo;. Apps built for pronunciation coaching record your
          speech and score it. If you want that feedback loop, use one
          alongside shadowing. Second, shadowing trains fluency and
          pronunciation, not conversation. It&apos;ll make the sentences you
          can already build sound better, but only real interaction teaches you
          to build new ones under pressure.
        </p>
        <p>
          Within those limits, it&apos;s one of the highest-return exercises in
          language learning: ten minutes, any book, no partner required. And
          it pairs naturally with the listening-first approach in{" "}
          <Link
            href="/blog/learn-english-by-listening-to-books"
            className="text-loudBlue hover:underline"
          >
            learn English by listening to books
          </Link>
          . Shadow a passage, then let the rest of the chapter wash over you.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Shadow any book, anywhere"
        subline="Natural offline voices with word-by-word highlighting. Tap any sentence to repeat it. Free, no account."
      />
    </ArticleLayout>
  );
}
