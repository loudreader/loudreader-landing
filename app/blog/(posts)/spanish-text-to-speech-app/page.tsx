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

export default function SpanishTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads
          Spanish-language books and PDFs aloud with four Spanish narrators:
          Sofía, Hector, Diego, and Valentina. That is the widest non-English
          voice roster in the app. Every other language it supports besides
          English, from German to Polish to Portuguese, has exactly one
          narrator, so if Spanish is what you need, you have more choice than
          any other language gets. All four voices are natural offline
          voices that run entirely on your device, so there&apos;s nothing to
          upload and nothing that needs a connection once a book is imported.
          You can hear each one read a real sample on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          before you commit. Honest note: this article covers narration of
          Spanish text, not a Spanish-language version of the app&apos;s own
          menus, which isn&apos;t claimed here.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Four Spanish narrators, ready for any Spanish EPUB or PDF."
      />

      <QuestionSection question="Does LoudReader actually read Spanish text aloud?">
        <p>
          Yes. Import any DRM-free Spanish-language EPUB or PDF into{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          and one of its four Spanish narrators reads it, with the same
          player, the same word highlighting, and the same offline behavior
          as an English book gets. The app is {DIFFERENTIATORS.private}, so
          the text of a Spanish novel or a Spanish-language PDF never leaves
          the device it&apos;s read on. If you&apos;re learning Spanish, or
          you already read it and just prefer listening, that privacy model
          is the same either way: nothing about the book gets sent anywhere
          to be narrated.
        </p>
      </QuestionSection>

      <QuestionSection question="How many Spanish voices are there, and who are they?">
        <p>
          Four: Sofía, Hector, Diego, and Valentina. Each one has its own
          character, described the same way LoudReader describes it in the
          app itself, in Spanish: Sofía is c&aacute;lida y clara (warm and
          clear), Hector is grave y pausada (deep, unhurried), Diego is firme
          con buen ritmo (steady, good pace), and Valentina is suave y muy
          cercana (soft, close to the mic). Four is a genuinely useful number
          of options: it&apos;s enough to find one that fits a given book,
          without turning the picker into a chore.
        </p>
        <p>
          For comparison, every other non-English language in the app, German,
          French, Italian, Dutch, Polish, Portuguese, Swedish, and Danish,
          ships exactly one narrator. Spanish is the one language outside
          English where LoudReader gives you an actual choice, and that&apos;s
          worth knowing before you assume every language gets the same
          treatment.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you hear the Spanish voices before choosing one?">
        <p>
          Yes, and you should, rather than guessing from a description. The{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          plays every narrator in the app reading a real sample, in their own
          language, right in the browser. Pull up Sofía, Hector, Diego, and
          Valentina back to back, listen to a few seconds of each, and pick
          the one whose pace and tone actually fits the book you have in
          mind. It&apos;s the same page LoudReader points every reader to for
          any language, and for Spanish it&apos;s the fastest way to settle a
          choice between four real options instead of one.
        </p>
      </QuestionSection>

      <QuestionSection question="Is a Spanish voice available on the free tier?">
        <p>
          Not directly. LoudReader&apos;s free tier gives you one natural
          offline voice with unlimited listening on every book, no word
          quota, but that one keepable voice is chosen from a small set of
          English voices, not from the Spanish roster. You can still import
          and listen to a Spanish-language book on the free tier; what
          changes with Premium is access to the four Spanish narrators
          themselves, alongside the rest of the app&apos;s full voice roster,
          playback speed from 0.3x to 3.0x, a sleep timer, ambient
          soundscapes, and notes.
        </p>
        <p>
          This is the honest tradeoff: free gets you unlimited listening on
          any Spanish text with no cost and no time limit, and Premium is
          what buys you a voice that actually sounds native in Spanish.
        </p>
      </QuestionSection>

      <QuestionSection question="What Spanish content can you import?">
        <p>
          Anything you have as a DRM-free EPUB or PDF: novels, textbooks,
          manuscripts, or Spanish-language documents you&apos;re working
          through for study.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Download LoudReader
          </a>
          , share the file to it from the Files app, Safari, or Mail, and
          it&apos;s in your library, ready for one of the four Spanish
          narrators the moment it&apos;s a Spanish-language book.
          LoudReader&apos;s built-in Project Gutenberg catalog is
          English-heavy, so classic Spanish-language literature isn&apos;t
          guaranteed to be in it; the reliable path for Spanish reading
          material is importing your own files.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear four Spanish narrators before you pick one"
        subline="Sofía, Hector, Diego and Valentina, playable on the voices page. Free listening on every book, on-device, no account."
      />
    </ArticleLayout>
  );
}
