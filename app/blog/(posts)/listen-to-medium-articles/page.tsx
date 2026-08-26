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

export default function ListenToMediumArticlesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Medium has no built-in text-to-speech button for articles. A few
          authors record their own narrations, and those articles show a Listen
          button at the top. For every other Medium article, the path is: open
          it in Safari, activate Reader view to strip the Medium interface,
          export as PDF, and import into <strong>LoudReader</strong> (iPhone, iPad, and Mac). LoudReader reads the article aloud with natural
          offline voices, remembers your place, and works offline. It is fully
          on-device and private, your library never leaves your device. If the
          article is behind Medium&apos;s member paywall, you need an active
          membership and you must be logged in when you export. Otherwise the
          PDF captures the paywall preview, not the full text.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Safari Reader strips the noise. LoudReader reads the article. The paywall still applies."
      />

      <QuestionSection question="Does Medium let me listen to articles?">
        <p>
          It depends on the author. In 2020, Medium added the ability for
          writers to record audio narrations of their own articles. When an
          author does this, a Listen button appears at the top of the article
          page, and you can play the recording in the browser or the Medium
          app. The quality depends on the author&apos;s recording setup. It is
          a human reading, not TTS.
        </p>
        <p>
          For the vast majority of Medium articles, there is no Listen button
          because the author did not record one. Medium does not automatically
          generate audio from article text. If you want to hear those articles,
          you need to bring your own text-to-speech tool.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to a Medium article step by step?">
        <p>
          The workflow takes about 30 seconds per article once you know the
          steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Open the article in Safari.</strong>{" "}
            Use Safari on iPhone or Mac rather than the Medium app. If the
            article requires a Medium membership, make sure you are logged
            into your Medium account in Safari.
          </li>
          <li>
            <strong className="text-gray-900">Activate Reader view.</strong>{" "}
            Tap or click the Reader button in Safari&apos;s address bar.
            Reader view strips the Medium clap button, the sidebar, the
            &quot;Keep reading&quot; prompts, and the footer. You get a clean
            page with just the title and the article text.
          </li>
          <li>
            <strong className="text-gray-900">Export as PDF.</strong> On Mac:
            File then Export as PDF. On iPhone: tap the share button, find
            Print, pinch outward on the preview to open it as a PDF, then
            save it to Files or share it directly to LoudReader.
          </li>
          <li>
            <strong className="text-gray-900">Import into LoudReader.</strong>{" "}
            Open LoudReader, tap the import button, find the PDF, and press
            play. The app reads the article aloud from headline to final
            paragraph.
          </li>
        </ol>
        <p>
          For more on the import workflow, see{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            listening to PDFs on iPhone
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What about Medium's member paywall?">
        <p>
          Medium lets non-members read a limited number of articles per month
          for free. After that, articles show a truncated preview and a
          &quot;Keep reading with a Medium membership&quot; prompt. When you
          export the page as PDF, the PDF captures whatever is visible on the
          screen. If you are a member and logged in, the PDF contains the full
          article. If you are not a member, the PDF contains the paywall
          preview.
        </p>
        <p>
          LoudReader does not bypass the paywall. It reads the PDF you give it.
          There is no Medium integration, no special access, and no workaround.
          If the content matters to you, a Medium membership gives you the
          articles plus the ability to capture them as full-text PDFs for
          listening.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I queue up a week's worth of Medium articles?">
        <p>
          Yes, and the queue is a folder of PDFs. Here is a workflow that works
          well for people who follow a lot of Medium writers:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            During the week, use Medium&apos;s bookmark feature to save
            articles you want to read later.
          </li>
          <li>
            Once or twice a week, open your saved articles, export each one
            as a PDF from Safari Reader, and save them to a dedicated folder.
          </li>
          <li>
            Import the folder into LoudReader. The app lists the PDFs in its
            library, and you can play them in any order. Each one remembers
            its own playback position.
          </li>
          <li>
            Listen through the queue during commutes, walks, or chores.
            Delete each PDF from LoudReader when you are done, or keep them
            as a reference archive.
          </li>
        </ol>
        <p>
          This is a manual queue. It is not automatic and it takes a few
          minutes of prep per batch. But it keeps your reading fully offline
          and private. LoudReader is fully on-device and private, your library
          never leaves your device. No service knows which articles you saved
          or how much of each one you listened to.
        </p>
        <p>
          If you listen to books this way too, the{" "}
          <Link
            href="/blog/listen-to-books-while-driving"
            className="text-loudBlue hover:underline"
          >
            guide to listening while driving
          </Link>{" "}
          covers the playback side in more detail.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your Medium reading list, out loud"
        subline="Export articles as PDFs, import into LoudReader, and listen offline with natural voices. No account needed."
      />
    </ArticleLayout>
  );
}
