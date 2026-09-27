import type { Metadata } from "next";
import Link from "next/link";

import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import StoreCta from "@/components/money/StoreCta";
import VoiceRoster from "@/components/voices/VoiceRoster";
import { ALL_VOICES, VOICE_LANGUAGES } from "@/data/voices";
import { faqAnchor } from "@/app/faq/faq-data";
import { APP_NAME, CLONING, FREE_TIER, PRIVACY, SITE_URL, VOICES } from "@/components/money/site";

/*
 * /voices: every narrator, grouped by language, each one playable.
 *
 * The home page deliberately plays ONE voice — auditioning eleven near-identical
 * English narrators before you have heard a sentence is a worse first minute
 * than hearing one good one. This is the page for the visitor who has heard
 * that sentence and now wants the roster, and it is the only place on the site
 * where comparing voices is the point.
 *
 * Every clip is the narrator reading in their OWN language, because the claim
 * being demonstrated is "a narrator who actually speaks the language, not an
 * English voice with an accent". A Polish narrator reading English would
 * disprove the very line it sits under.
 *
 * Static: the roster is a constant, the audio is in public/. The only client
 * code is <VoiceRoster />, which owns the single shared <audio> element.
 */

/** The FAQ entry that answers cloning, linked verbatim so the anchor holds. */
const CLONING_QUESTION = "Can I use my own voice?";

const languageCount = VOICE_LANGUAGES.length;
const voiceCount = ALL_VOICES.length;

const title = `All ${voiceCount} ${APP_NAME} Narrators: Hear Every Voice`;
const description = `Preview ${voiceCount} ${APP_NAME} studio narrators across ${languageCount} languages. Hear samples in each narrator's language, explore on-device voice cloning, and check voice availability in the app.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/voices` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/voices`,
    type: "website",
  },
};

export default function VoicesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Voices", item: `${SITE_URL}/voices` },
    ],
  };

  return (
    <MoneyPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          Hear every narrator
        </h1>
        <p className="text-gray-600 text-[17px] leading-relaxed">
          {APP_NAME} offers {VOICES.headline}. Speech is generated on your
          device; your books are not uploaded for narration. Press play on any
          name below to hear a sample in that narrator&apos;s language.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed">
          {VOICES.availability} In the app, {VOICES.lazyLanguages}, while this
          page shows the studio roster at once.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed">
          {PRIVACY.summary}
        </p>
        <nav aria-label="Languages" className="flex flex-wrap gap-2 mt-2">
          {VOICE_LANGUAGES.map((language) => (
            <a
              key={language.code}
              href={`#${language.code}`}
              className="inline-block rounded-full bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 hover:bg-loudBlue/10 hover:text-loudBlue transition-colors"
            >
              {language.name}{" "}
              <span className="text-gray-400">{language.voices.length}</span>
            </a>
          ))}
        </nav>
      </header>

      <VoiceRoster />

      <section className="rounded-2xl border border-gray-200/70 bg-gray-50/70 p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Or clone your own
        </h2>
        <p className="mt-3 text-gray-600 text-[17px] leading-relaxed">
          {CLONING.long} Use your clone to narrate books in your library
          alongside the studio voices available on your device.
        </p>
        <p className="mt-3 text-gray-500 text-[15px]">
          {CLONING.trial}{" "}
          <Link
            href={`/faq#${faqAnchor(CLONING_QUESTION)}`}
            className="text-loudBlue hover:underline"
          >
            {CLONING_QUESTION}
          </Link>
          .
        </p>
      </section>

      <StoreCta
        headline={`Get ${APP_NAME} and hear them read a book`}
        subline={FREE_TIER.full}
        source="voices-cta"
      />

      <p className="text-[13px] text-gray-400 leading-relaxed">
        These clips are sample previews of the studio narrators. Playback in
        the current app can differ with the text, language, voice settings and
        app version. Check the in-app voice list for your device&apos;s options.
      </p>
    </MoneyPageLayout>
  );
}
