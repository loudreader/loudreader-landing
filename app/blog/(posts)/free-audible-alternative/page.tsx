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

export default function FreeAudibleAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          There are several ways to listen without an audiobook subscription.
          Your library may lend recordings through Libby, Hoopla or another
          service. LibriVox offers volunteer recordings of works it treats as
          public domain in the United States. A free text-to-speech tier can
          read suitable ebook files you already have; LoudReader is one option
          on Apple devices. Each route has limits: library eligibility and loans,
          the availability of a particular recording, or access to readable text.
          Start with the title you want, then choose the route that actually
          offers it. A free trial of a paid subscription is a different proposition.
        </p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Borrow a recording, choose a volunteer edition, or listen to a file you already have." />

      <QuestionSection question="How do I get audiobooks through my library?">
        <p>
          Look at your library&apos;s website for its digital services and
          membership requirements. If it uses Libby, add the library card, search
          for the audiobook format, and borrow an available copy or place a hold.
          A title being listed does not mean a copy is immediately available.
          Libby&apos;s <a href="https://help.libbyapp.com/en-us/6289.htm" className="text-loudBlue hover:underline">quick-start guide</a>{" "}
          explains the process; mobile loans can be downloaded before a journey.
        </p>
        <p>
          Hoopla also depends on a participating library. Its{" "}
          <a href="https://theloop.hoopladigital.com/support/articles/getting-started/borrow-flex-titles-for-popular-books/" className="text-loudBlue hover:underline">Instant and Flex explanation</a>{" "}
          matters: Instant titles have no title waitlist but use a monthly
          allowance, while Flex titles can have holds. Local borrowing and budget
          limits still apply. Check the allowance shown on your own account;
          another reader&apos;s library may offer a different deal.
        </p>
        <p>
          Before starting a long book, check the loan period and your place in
          any queue. Save a second available title for the gap rather than
          assuming an expired loan will renew immediately. You are borrowing
          access, so keep the loan in its supported player.
        </p>
      </QuestionSection>

      <QuestionSection question="When is LibriVox the useful option?">
        <p>
          For a classic with a volunteer recording, LibriVox lets you choose an
          audio edition without buying a book subscription. Search the author
          and title, then check the language and reader credits. Some recordings
          use one reader throughout; collaborative editions can change readers
          between chapters. If the first sample does not suit you, look for a
          different edition before abandoning the service.
        </p>
        <p>
          LibriVox&apos;s <a href="https://librivox.org/pages/public-domain/" className="text-loudBlue hover:underline">public-domain policy</a>{" "}
          is based on the United States. If you live elsewhere, check the status
          of the particular work and translation locally before downloading.
          A familiar story can have a much newer translation. Our{" "}
          <Link href="/blog/librivox-alternative" className="text-loudBlue hover:underline">LibriVox guide</Link>{" "}
          focuses on finding a suitable edition and when TTS is useful instead.
        </p>
      </QuestionSection>

      <QuestionSection question="What can a free TTS app add?">
        <p>
          TTS supplies the voice, not a licence to a commercial book. It is
          useful for DRM-free ebooks you already own, your own writing, and
          documents you are allowed to use. You need a readable supported file;
          a protected bookstore download or a badly extracted PDF is not the
          same thing. Check one representative chapter before importing a large
          collection.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
          reads supported EPUBs and PDFs on iPhone and iPad, with the iPad build
          also available on compatible Apple Silicon Macs. Speech generation
          happens on the device. The app includes a way to discover Project
          Gutenberg books, but books need downloading and the relevant edition
          still needs to be available for you to use. The catalogue is not a
          preinstalled library of every title.
        </p>
        <p>
          {FREE_TIER.full} Premium adds continuing access to the full studio
          voice roster and features such as adjustable speed and a sleep timer.
          Decide whether the continuing free voice suits you, not just whether
          you like a trial voice. The <Link href="/faq" className="text-loudBlue hover:underline">FAQ</Link>{" "}
          sets out the current offer and supported devices.
        </p>
      </QuestionSection>

      <QuestionSection question="What does free listening not include?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-gray-900">A universal book catalogue.</strong> A library may not license your title; a volunteer recording may not exist; a readable ebook may cost money.</li>
          <li><strong className="text-gray-900">Imported store entitlements.</strong> An Audible purchase is a recording for its supported service, not an EPUB. LoudReader cannot remove protection from other stores&apos; files.</li>
          <li><strong className="text-gray-900">Every voice and control.</strong> A continuing free tier may limit voice choice or features even when listening itself has no word allowance.</li>
          <li><strong className="text-gray-900">Automatic offline readiness.</strong> Download loans, books and required voices before travelling. Try playback without a connection while you still have time to fix setup.</li>
        </ul>
        <p>
          Offline playback also says nothing by itself about diagnostics,
          analytics or account data when an app is connected. Treat those as
          separate privacy questions rather than assuming “free and offline”
          means “collects no data”.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Listen to a book file you already have" subline="Try LoudReader with a supported DRM-free EPUB or PDF. The continuing free tier has limited voice choice." />
    </ArticleLayout>
  );
}
