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

export default function PdfWithoutUploadingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> reads a PDF aloud without ever sending
          the file anywhere. Import a PDF and the app opens it, pulls the
          text, and generates the narration all on your iPhone or Mac. There
          is no upload step because there is no server to upload to: it is
          fully on-device and private, your library never leaves your
          device. That also means it works with your phone in airplane mode,
          and it means the PDF you import is not sitting in a queue on
          someone else's infrastructure while it gets converted. The one
          honest limit: LoudReader reads a PDF's existing text layer, not
          scanned pages saved as images, so a document that has never been
          OCR'd will not read reliably. No account, no login, free to try
          with unlimited listening on every book.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="The PDF stays on your device from open to playback."
      />

      <QuestionSection question="Why does 'upload' matter for a PDF reader?">
        <p>
          Plenty of read-aloud apps and browser tools work by sending your
          file to a server, generating audio there, and streaming it back.
          For a grocery list that is a non-issue. For a signed contract, a
          medical record, an unpublished manuscript, or anything under an
          NDA, it is a real question: where does the file actually go, and
          who can see it while it is there.
        </p>
        <p>
          The honest answer for most cloud-based readers is that your
          document passes through a company's servers, at least briefly, and
          in some cases is retained for logging or model improvement. That
          might be fine for a news article. It is a different calculation
          for anything confidential.
        </p>
      </QuestionSection>

      <QuestionSection question="How does LoudReader read a PDF without an upload step?">
        <p>
          There is no upload step because the whole pipeline runs on the
          device you are already holding. LoudReader opens the PDF locally,
          reads the text layer the same way a normal PDF viewer would, and
          generates speech with{" "}
          <Link href="/offline-text-to-speech-mac" className="text-loudBlue hover:underline">
            natural offline voices
          </Link>{" "}
          running on-device. None of that requires a network connection, and
          none of it involves a server holding a copy of your file. The app
          is fully on-device and private, your library never leaves your
          device, whether that device is an iPhone or a Mac (iPhone, iPad, and Mac).
        </p>
        <p>
          You can check this yourself: switch your phone to airplane mode,
          import a PDF, and press play. It works exactly the same, because
          there is nothing in the pipeline that needed a connection in the
          first place.
        </p>
      </QuestionSection>

      <QuestionSection question="What kind of PDFs does this work for?">
        <p>
          LoudReader reads a PDF's existing selectable text, the text you
          could already highlight and copy in Preview or Adobe Reader. That
          covers the large majority of PDFs people actually want read aloud:
          reports, papers, ebooks exported as PDF, contracts, manuscripts.
        </p>
        <p>
          It does not include image-only PDFs, like a document that was
          scanned as a photo of each page with no text layer underneath.
          Reading those aloud requires OCR first, and LoudReader's PDF
          pipeline does not run OCR. If your file opens in a PDF viewer and
          you can select and copy the words with your finger or cursor, it
          will read fine. If you can't select the text, it won't.
        </p>
      </QuestionSection>

      <QuestionSection question="What does 'no account' add on top of 'no upload'?">
        <p>
          The two go together, but they are not the same guarantee. An app
          could avoid uploading your file for narration while still asking
          you to create an account, which means a server somewhere still
          knows who you are and what you have imported. LoudReader has no
          account system at all: no sign-up, no login, and nowhere for a
          list of your documents to accumulate on a server, because there is
          no server-side record of your library in the first place. Your PDF
          lives in your local library the same way a file lives in your
          Files app.
        </p>
      </QuestionSection>

      <QuestionSection question="Where can you get the step-by-step version?">
        <p>
          This article is about the privacy question specifically: whether
          your file leaves your device at all. If you want the walkthrough
          for actually getting a PDF into LoudReader and listening to it,{" "}
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">
            how to listen to a PDF on iPhone
          </Link>{" "}
          covers the steps and compares LoudReader against iOS's built-in
          Speak Screen feature. And if privacy is the reason you're reading
          this in the first place, the same question applies across
          everything LoudReader reads, not only PDFs,{" "}
          <Link href="/private-text-to-speech-no-cloud" className="text-loudBlue hover:underline">
            this breakdown of on-device text to speech
          </Link>{" "}
          covers the same question for EPUBs, articles, and every other file
          type the app handles.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read a PDF aloud without it ever leaving your device"
        subline="Free, on-device, no account. Import a PDF and press play."
      />
    </ArticleLayout>
  );
}
