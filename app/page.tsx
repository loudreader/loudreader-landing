import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const appStoreUrl = "https://apps.apple.com/app/loudreader/id6758149478";

/*
 * SoftwareApplication structured data.
 * Every value below is verifiable against the App Store listing
 * (apps.apple.com/app/loudreader/id6758149478) or this site's pricing section.
 * Do NOT add aggregateRating until there are real, verifiable ratings to cite.
 */
const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LoudReader",
  alternateName: "LoudReader: Text to Speech",
  description:
    "LoudReader turns any EPUB, PDF, or Project Gutenberg classic into an audiobook with natural offline voices. Fully on-device and private, your library never leaves your device. Native Mac and iPhone apps.",
  url: "https://loudreader.io",
  installUrl: appStoreUrl,
  // applicationCategory matches Apple's own structured data for this listing.
  applicationCategory: "Books",
  operatingSystem: "iOS 18.0 or later, iPadOS 18.0 or later, macOS 15.0 or later (Apple Silicon)",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description:
        "Unlimited listening cover to cover, unlimited library, word-by-word highlighting, Project Gutenberg catalog. Every voice free for the first 8 hours, then one natural offline voice. No account needed.",
    },
    {
      "@type": "Offer",
      name: "Premium (monthly)",
      price: "7.99",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Premium (yearly)",
      price: "49.99",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Premium (lifetime)",
      price: "199.99",
      priceCurrency: "USD",
    },
  ],
  featureList: [
    "23 studio narrators across 10 languages, all text-to-speech runs on-device",
    "Native narrators for English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish",
    "On-device voice cloning: read one paragraph aloud and the app builds a narrator from it (Premium)",
    "Word-by-word highlighting synced to narration",
    "Import any EPUB or PDF",
    "70,000+ free Project Gutenberg classics built in",
    "Works 100% offline, no account, no cloud",
    "Adjustable playback speed (0.3x to 3.0x), sleep timer, soundscapes (Premium)",
  ],
  author: {
    "@type": "Person",
    name: "Jeremi Podlasek",
  },
  // TODO(user): add the Wikidata entity URL here once created,
  // e.g. "https://www.wikidata.org/wiki/Q...".
  sameAs: [appStoreUrl, "https://www.linkedin.com/company/135327066/", "https://www.wikidata.org/wiki/Q140563771"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
