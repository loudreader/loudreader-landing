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

export default function BestTtsForClassicLiteratureArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Text to speech works fine on classic literature, with two honest
          caveats. Older prose runs long, sometimes a full paragraph in one
          sentence strung together with semicolons, which gives a synthetic
          voice fewer natural places to pause. And archaic spelling and
          vocabulary, words like &quot;thou&quot;, &quot;shew&quot;, or a name
          out of a saga, are more likely than ordinary modern words to get
          mispronounced by any voice, not just one app&apos;s. Neither problem
          makes a book unlistenable. Slowing playback down helps with long
          sentences, and reading along with word highlighting catches the
          rare mispronunciation before it derails you. <strong>LoudReader</strong>{" "}
          (iPhone, iPad, and Mac) has a built-in catalog of 70,000+
          Project Gutenberg classics, reads them aloud with natural offline
          voices, and it&apos;s fully on-device and private, your library
          never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Old sentences, read the way a narrator would break them."
      />

      <QuestionSection question="What does old prose actually do to a synthetic voice?">
        <p>
          Two specific things, and they&apos;re worth naming instead of
          hand-waving. The first is sentence length. Writers before roughly
          the mid-twentieth century used the semicolon and the comma far more
          freely than modern style guides recommend, so a single sentence in{" "}
          <em>Moby Dick</em> or <em>Middlemarch</em> can run for several
          lines with three or four clauses stacked on top of each other. A
          text-to-speech engine mostly finds its pauses at punctuation, so a
          long, comma-heavy sentence reads as one long breath rather than a
          series of shorter, easier-to-follow phrases. It&apos;s not wrong,
          exactly, it&apos;s just more to hold in your head at once.
        </p>
        <p>
          The second is vocabulary. Any synthetic voice is best at the words
          it&apos;s heard most, which means modern, common English. Archaic
          spelling (&quot;shew&quot; for &quot;show&quot;), archaic pronouns
          (&quot;thou&quot;, &quot;thee&quot;), invented character and place
          names, and the occasional Latin or French phrase left untranslated
          are all more likely to come out slightly wrong than an everyday
          sentence would. That&apos;s true of every synthetic voice on the
          market, not a quirk of one app.
        </p>
      </QuestionSection>

      <QuestionSection question="Does that mean classics are a bad fit for text to speech?">
        <p>
          No. It means classics are a slightly harder fit than a contemporary
          thriller, the same way a dense legal contract is harder to read
          aloud than a text message. The overwhelming majority of any classic
          novel is ordinary narrative prose that reads perfectly well. The
          rough spots are a handful of long sentences and the occasional
          unfamiliar word, not the book from cover to cover.
        </p>
        <p>
          A narrator would run into the exact same two problems, and human
          audiobook narrators do slow down for dense passages and occasionally
          stumble over an unusual name on a first read. Text to speech
          doesn&apos;t get tired on page 300, but it also doesn&apos;t
          rehearse. Knowing the trade-off going in is the whole point of this
          article.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you make long, old-fashioned sentences easier to follow?">
        <p>
          Slow down. That single change does more for comprehension than
          anything else. LoudReader Premium lets you set playback speed
          anywhere from 0.3x to 3.0x, and for eighteenth and nineteenth
          century prose, dropping below your usual speed gives your brain
          time to track a long sentence&apos;s clauses instead of losing the
          thread halfway through. The free tier plays at normal speed, which
          is still perfectly listenable for most classics; the speed control
          is for when a specific book or a specific chapter is fighting you.
        </p>
        <p>
          Reading along helps too. LoudReader highlights each word on screen
          as it&apos;s spoken, so if a voice mispronounces an archaic word or
          a name, you can see the correct spelling right there instead of
          guessing what you just heard. It also means you never lose your
          place: the app remembers exactly where you stopped, down to the
          word, across sessions.
        </p>
      </QuestionSection>

      <QuestionSection question="Where do you actually find classic books to listen to?">
        <p>
          LoudReader has a built-in catalog of 70,000+ Project Gutenberg
          books, all public domain, browsable by genre and author from inside
          the app with no separate download or file conversion step. You can
          also see a curated slice of it, with real listening-time estimates,
          on{" "}
          <Link href="/listen" className="text-loudBlue hover:underline">
            the free classics catalog
          </Link>
          . If a book isn&apos;t in the built-in list, you can still import
          any DRM-free EPUB or PDF and get the same treatment, covered in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Is a synthetic voice as good as a professional audiobook narrator for a classic?">
        <p>
          For a book that already has a great recorded performance, honestly,
          often not. A skilled narrator brings interpretation, character
          voices, and pacing choices a synthetic voice doesn&apos;t attempt.
          Where text to speech wins is coverage: the vast majority of public
          domain books never got a professional recording at all, and never
          will. For those, the choice isn&apos;t between a synthetic voice
          and a great narrator. It&apos;s between a synthetic voice and not
          listening at all.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear the classics your way"
        subline="Browse 70,000+ free public-domain books, press play, and slow it down when a sentence earns it."
      />
    </ArticleLayout>
  );
}
