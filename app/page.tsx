import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { APP_STORE_URL, FREE_TIER, VOICES } from "@/components/money/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const appStoreUrl = APP_STORE_URL;

/*
 * SoftwareApplication structured data.
 * Product capabilities follow the shipping app; prices follow the US App Store
 * listing. Keep these values aligned with components/money/site.ts.
 * Do NOT add aggregateRating until there are real, verifiable ratings to cite.
 */
const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LoudReader",
  alternateName: "LoudReader: Text to Speech",
  description:
    "LoudReader reads DRM-free EPUBs, PDFs and saved web articles aloud with on-device voices. It includes local text recognition for scanned PDFs. Runs on iPhone and iPad, and on Apple Silicon Macs as an iPad app.",
  url: "https://loudreader.io",
  installUrl: appStoreUrl,
  // applicationCategory matches Apple's own structured data for this listing.
  applicationCategory: "Books",
  operatingSystem: "iOS 18.0 or later, iPadOS 18.0 or later, macOS 15.0 or later (Apple Silicon, iPad compatibility mode)",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description:
        `Unlimited book listening, individual book imports, notes and word-by-word highlighting. ${FREE_TIER.full}`,
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
    `${VOICES.headline}; availability depends on device and all speech is generated locally`,
    `Studio narrator languages: ${VOICES.languageList}`,
    "On-device voice cloning from about ten seconds of speech; up to three creations during the all-voices allowance, with Premium removing that creation limit",
    "Word-by-word highlighting synced to narration",
    "Import DRM-free EPUBs and PDFs, recognise text in scanned PDFs on device, and save web articles",
    "Browse and download 70,000+ Project Gutenberg classics, subject to local copyright",
    "Offline narration of books already on the device; no LoudReader account required",
    "Adjustable playback speed (0.3x to 3.0x), sleep timer, soundscapes (Premium)",
  ],
  author: {
    "@type": "Person",
    name: "Jeremi Podlasek",
  },
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
