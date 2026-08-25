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

export default function PublicDomainAudiobooksLegalArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Yes, generally. A public domain book has no active copyright left
          to restrict reading it, copying it, or turning it into audio.
          Project Gutenberg, the largest source of these texts, only
          publishes books it has determined are in the public domain in the
          United States, and it's explicit that this is a U.S. determination:
          copyright terms vary by country, so a book that's clear in the U.S.
          isn't automatically clear everywhere. None of this is legal advice.
          If you generate your own audio reading of a public domain text for
          your own listening, the text itself carries no copyright to run
          into. <strong>LoudReader</strong> reads any of its 70,000+
          built-in Project Gutenberg books aloud live, on your device, with
          natural offline voices, and doesn&apos;t save or export an audio
          file. What you may do with a recording beyond private listening,
          like sharing or selling it, is a separate question outside what
          this article can settle.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="A public domain text, read privately on your own device."
      />

      <QuestionSection question="What does 'public domain' actually mean?">
        <p>
          It means a work's copyright has expired, or the rights holder
          released it, so no one holds exclusive rights over it anymore.
          Nobody's permission is required to read it, quote it, copy it, or
          adapt it into a new format, because there's no active copyright
          left to enforce. That's different from a book being merely free or
          out of print, which can still be fully under copyright.
        </p>
      </QuestionSection>

      <QuestionSection question="How does Project Gutenberg decide a book is public domain?">
        <p>
          Gutenberg checks the U.S. copyright status of each book before
          publishing it, using the standard expiration rules (works from
          before a certain publication date, or where the copyright term has
          simply run out) plus cases where an author or rights holder
          explicitly released a work. It publishes the result of that
          determination, which is exactly why the site can offer{" "}
          <Link href="/listen" className="text-loudBlue hover:underline">
            70,000+ free classics
          </Link>{" "}
          without licensing fees: every one of them has already been checked.
        </p>
      </QuestionSection>

      <QuestionSection question="Does U.S. public domain status apply everywhere?">
        <p>
          Not automatically, and this is the part worth being honest about.
          Copyright terms and rules differ by country. A book that's clearly
          public domain in the United States can still be under copyright in
          another country, and the reverse can also be true. If your
          location matters for how you plan to use a text, that's a question
          for your own country's copyright law, not one a blog article can
          answer for you.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you legally generate your own audio reading of a public domain book?">
        <p>
          If the underlying text is public domain, there's no text copyright
          standing in the way of turning it into audio for your own personal
          listening, because that copyright has already expired or was
          released. This is exactly what a text-to-speech reader does:{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            it turns the book you already have into narration
          </Link>
          , generated as you listen. LoudReader generates that narration live
          on your device and doesn&apos;t save an exportable audio file, so
          the question of what you could do with a saved recording (share it,
          post it, sell it) doesn&apos;t come up in normal use. If you're
          building something that does produce and distribute audio files
          from public domain text, that's a different situation with its own
          questions, and this article isn't the place to resolve them.
        </p>
      </QuestionSection>

      <QuestionSection question="Is a specific recording the same as the public domain text it's based on?">
        <p>
          No, and this trips people up. The text being public domain doesn't
          automatically mean every recording of it is free to use however you
          like. A volunteer narration on a site like LibriVox, a professional
          audiobook, and a synthetic reading generated by an app are each
          their own separate piece of work, sitting on top of the same public
          domain text, and each one can carry its own terms for reuse. Listen
          privately and you're on safe, simple ground. Reuse or redistribute
          a specific recording and you're asking a different question than
          the one this article answers.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen to public domain classics"
        subline="70,000+ free books, read aloud on your device with natural offline voices. No account needed."
      />
    </ArticleLayout>
  );
}
