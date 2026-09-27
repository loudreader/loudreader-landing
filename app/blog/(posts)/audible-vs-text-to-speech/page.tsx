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
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function AudibleVsTextToSpeechArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Choose an audiobook service when you want a particular recorded edition;
          choose text to speech when you already have readable text and want to
          hear it. Audible sells and licenses recordings. A TTS app such as
          LoudReader generates speech from supported, DRM-free files you import.
          Neither route gives you every book: catalogue rights limit the first,
          while file access and text extraction limit the second. You can use
          both. Compare an actual audiobook sample with a chapter of your ebook,
          then decide whether the performance, convenience and price justify
          buying a separate recording.
        </p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="A recorded edition and a voice reading your text are two different ways to listen." />

      <QuestionSection question="When is a recorded audiobook the better fit?">
        <p>
          A recording gives you a finished interpretation: a narrator&apos;s
          timing, characterisation and pronunciation, sometimes with a cast or
          sound design. Those choices can matter as much as the text. Listen to
          the sample of the exact edition, particularly for dialogue-heavy fiction,
          poetry or a memoir read by its author. Different editions of the same
          book can offer very different experiences.
        </p>
        <p>
          Search the title, author, narrator and language together. Check whether
          the recording is abridged, and whether it is available in your region.
          A familiar title appearing in a search result does not guarantee that
          it is the edition you wanted. If the sample works for you and you would
          rather press play than manage an ebook file, the recording is a sensible
          purchase. TTS does not need to replace something you already enjoy.
        </p>
      </QuestionSection>

      <QuestionSection question="What can TTS read that an audiobook catalogue cannot supply?">
        <p>
          Your own manuscript, a report, a course handout or a DRM-free ebook may
          not have a recording you can obtain. TTS lets you listen to that text
          without commissioning a narrator. It can also be useful for comparing
          a draft against the words on screen, because you control the underlying
          document rather than following a separate audio edition.
        </p>
        <p>
          Start with the file, not the app&apos;s voice count. Can you download a
          supported, unprotected copy? Does its text appear in the right order?
          A complicated PDF can mix columns, repeat page furniture or contain
          recognition mistakes. Preview a difficult page before trusting an entire
          chapter. Owning access to a Kindle or Audible title does not by itself
          provide an EPUB that another reader can import.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
          reads supported DRM-free books and documents with on-device speech.
          It is an iPhone and iPad app; compatible Apple Silicon Macs run the
          iPad build. See the <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import walkthrough</Link>{" "}
          before buying a file specifically to use in it.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens if I cancel Audible?">
        <p>
          Do not confuse purchases with subscription access. Audible&apos;s{" "}
          <a href="https://help.audible.com/s/article/cancel-membership?language=en_US" className="text-loudBlue hover:underline">cancellation guidance</a>{" "}
          says titles bought with money or credits remain in your library after
          cancellation. Access to included subscription titles is different and
          ends with the relevant membership entitlement. Check your regional plan,
          especially if it offers monthly selections rather than purchase credits.
        </p>
        <p>
          Keeping a purchased recording in an Audible library is also different
          from having an unrestricted audio file for any player. Likewise,
          “DRM-free” describes a file&apos;s protection, not permission to redistribute
          the book. Keep backups of files you are entitled to use, and check the
          licence or store terms when choosing where to buy.
        </p>
      </QuestionSection>

      <QuestionSection question="Which option costs less for my reading list?">
        <p>
          Compare the books you actually expect to finish. Add the cost of any
          ebooks needed for TTS, the app features you want, and any recordings you
          still want to buy. An app subscription does not include a commercial
          bookstore. A credit is useful only when you want the title you redeem
          it for. Regional prices, promotions and billing arrangements make a
          universal “books per year” break-even point misleading.
        </p>
        <p>
          LoudReader offers a continuing free tier: {FREE_TIER.full} Premium
          adds the full voice roster and controls including playback speed and
          the sleep timer. Use the current in-app offer for your local price;
          compare a chapter first, rather than paying for a promised voice-quality
          advantage.
        </p>
      </QuestionSection>

      <QuestionSection question="Can my library cover the books I want?">
        <p>
          Check your library before buying. Where your membership includes Libby,
          you can borrow the recordings it licenses; unavailable copies can have
          holds. Its <a href="https://help.libbyapp.com/en-us/6289.htm" className="text-loudBlue hover:underline">getting-started guide</a>{" "}
          explains borrowing and mobile downloads. Other services depend on your
          library and country. Catalogue selection, loan periods and borrowing
          allowances matter more than the name of the app.
        </p>
        <p>
          A useful mixed approach is to borrow a recording when available, buy a
          performance you particularly want, and use TTS for suitable files you
          already have. For listening without a connection, download the recording
          or prepare the book and voices before leaving. Local speech generation
          is separate from book downloads, account services and app diagnostics.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a chapter from your own bookshelf" subline="Import a supported DRM-free book and compare the voice with the recording you had in mind." />
    </ArticleLayout>
  );
}
