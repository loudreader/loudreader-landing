import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import ComparisonTable from "@/components/money/ComparisonTable";
import { FAQS, COMPARISON_COLUMNS, COMPARISON_ROWS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function LibrivoxAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If a LibriVox recording does not suit you, first look for another
          edition of the same book. A solo recording keeps one reader; a
          collaborative recording may change readers between chapters. If you
          would rather choose a synthetic voice, a TTS reader can narrate a
          supported ebook instead. LoudReader offers that workflow on Apple
          devices. The key choice is whether you want a downloadable recording
          or a reading app that speaks the text. Neither guarantees the voice
          you will prefer, and a public-domain listing in the US does not settle
          a book&apos;s status everywhere else.
        </p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Try a different edition before deciding you need a different way to listen." />

      <QuestionSection question="Can I find a different reader without leaving LibriVox?">
        <p>
          Search by author and title, then inspect the reader credits and sample
          chapters. The <a href="https://wiki.librivox.org/index.php/Recording_%26_Text_Policies" className="text-loudBlue hover:underline">LibriVox project policies</a>{" "}
          allow multiple versions of a work, including solo and collaborative
          projects. A voice change is a possibility, not a feature of every
          recording. Check an early and a later chapter if a consistent reader
          matters to you.
        </p>
        <p>
          Also compare the underlying edition. Two recordings with similar
          titles may use different translations or include different material.
          Match the author, translator and language before judging pronunciation
          or pacing. Read a short passage alongside the audio to check that it
          is the text you expected. You may find that another volunteer edition
          already solves the problem, with no new app or subscription.
        </p>
      </QuestionSection>

      <QuestionSection question="When does text to speech make more sense?">
        <p>
          TTS is useful when you have an ebook but cannot find a suitable
          recording, or when choosing the voice matters more to you than hearing
          a particular performance. The same chosen voice can read successive
          chapters. That does not guarantee uniform delivery: difficult names,
          dialogue and unusual punctuation can still sound different or need
          checking against the text.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
          imports supported DRM-free EPUBs and PDFs, and generates narration on
          the device with word-following highlighting. It also lets you browse
          and download Project Gutenberg books. That catalogue overlaps with
          LibriVox, but the two are not identical collections and every listed
          edition is not guaranteed to be available in the app.
        </p>
        <p>
          Try a difficult passage with <Link href="/voices" className="text-loudBlue hover:underline">a voice you like</Link>{" "}
          before committing to a long book. {FREE_TIER.full} Premium expands
          continuing voice access and adds controls such as adjustable speed.
          The Mac option runs the iPad app on compatible Apple Silicon hardware;
          it is not a separate native Mac player.
        </p>
      </QuestionSection>

      <QuestionSection question="What if I specifically want downloadable audio?">
        <p>
          Choose a service that provides the recording in the format your player
          accepts. LibriVox offers downloadable recordings, which can be useful
          for a separate music player or a listening app of your choice. A text
          reader&apos;s in-app narration is a different workflow; do not assume
          importing an ebook gives you a portable audiobook file.
        </p>
        <p>
          Another collection is the <a href="https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/index.html" className="text-loudBlue hover:underline">Project Gutenberg Open Audiobook Collection</a>.
          Project Gutenberg, Microsoft and MIT created it using synthetic speech.
          Its downloadable recordings are worth sampling when you want finished
          audio rather than generating speech as you read. Check the actual
          chapter files and download options for your chosen title, and keep the
          source information with any files you save.
        </p>
        <ComparisonTable caption="Choose by the listening workflow you need" columns={COMPARISON_COLUMNS} rows={COMPARISON_ROWS} />
      </QuestionSection>

      <QuestionSection question="Are these books free to use in my country?">
        <p>
          Both <a href="https://librivox.org/pages/public-domain/" className="text-loudBlue hover:underline">LibriVox</a>{" "}
          and <a href="https://www.gutenberg.org/help/copyright.html" className="text-loudBlue hover:underline">Project Gutenberg</a>{" "}
          explain that their US copyright basis does not resolve every other
          country&apos;s rules. Check the exact work and translation where you
          live. A later translation can have a different status from the original.
          A freely accessible download button is not proof of worldwide permission.
        </p>
        <p>
          For an uncomplicated first comparison, choose an edition you already
          know you can use. Listen to the same chapter as a volunteer recording
          and as TTS, at a comfortable volume. Notice whether you prefer the
          interpretation, whether names are intelligible and whether you can
          resume easily. Those observations are more useful than a blanket
          ranking of human and synthetic voices.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Choose a voice for a classic you want to read" subline="Try on-device narration with a supported ebook. Check the edition and local availability before downloading." />
    </ArticleLayout>
  );
}
