import {
  APP_NAME,
  APP_STORE_URL,
  CLONING,
  DIFFERENTIATORS,
  FEATURES,
  LIBRARY,
  PRIVACY,
  PRICING,
  REQUIREMENTS,
  SITE_URL,
  SUPPORT_EMAIL,
  VOICES,
} from "@/components/money/site";

// Generate the summary from the same facts used on the website.
// This avoids a second, independently maintained cloning/pricing description.
export const dynamic = "force-static";

export function GET(): Response {
  const document = `# ${APP_NAME}

> ${APP_NAME} reads ${FEATURES.imports} aloud with ${DIFFERENTIATORS.voices}. It ${DIFFERENTIATORS.native}. Speech is generated locally.

## Key facts

- ${PRICING.free}
- Premium includes ${PRICING.premiumFeatures}: ${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}.
- All text-to-speech runs on-device, so downloaded books can be read aloud offline.
- ${LIBRARY.gutenberg}; download the selected book before offline use. Check the rights for your country and chosen edition.
- Word-by-word highlighting synced to the narration.
- ${VOICES.headline} (${VOICES.languageList}); ${VOICES.english}. ${VOICES.lazyLanguages}.
- On-device voice cloning: ${CLONING.long} ${CLONING.trial}
- Scanned PDFs support on-device OCR. Recognition depends on legibility and layout; complex tables and equations need checking.
- ${PRIVACY.summary}
- No automatic library or reading-position sync between devices.
- Requires ${REQUIREMENTS}.
- App Store: ${APP_STORE_URL}
- Made by solo developer Jeremi Podlasek.

## Pages

- [Home](${SITE_URL}/): product overview, screenshots, pricing
- [Voices](${SITE_URL}/voices): narrator samples and the voice roster
- [FAQ](${SITE_URL}/faq): importing books, voices, offline use, Premium, privacy
- [Speechify alternative for Mac](${SITE_URL}/speechify-alternative-for-mac): LoudReader vs Speechify comparison for Mac users
- [Blog](${SITE_URL}/blog): practical listening guides written by the developer
- [Release Notes](${SITE_URL}/releases): version history
- [Support](${SITE_URL}/support): help and contact
- [Privacy Policy](${SITE_URL}/privacy): on-device processing and privacy information
- [Terms of Use](${SITE_URL}/terms)

## Open-source tools from LoudReader

- [Loudkit](https://loudkit.loudreader.io/): on-device speech framework, documentation and source code
- [Loudkit for agents](https://loudkit.loudreader.io/agents/): voice companion setup for people and their agents
- [Agent setup instructions](https://loudkit.loudreader.io/agents/llms.txt): installation and supported integrations

## Contact

- Email: ${SUPPORT_EMAIL}
`;

  return new Response(document, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
