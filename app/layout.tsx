import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Analytics from "@/components/analytics/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://loudreader.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LoudReader - Every text is an audiobook.",
    template: "%s · LoudReader",
  },
  description: "23 natural AI narrators in 10 languages read any book aloud with word-by-word highlighting — or clone your own voice on device. Unlimited listening, free. No quotas, no account. Import any EPUB or PDF, or browse 70,000+ free classics. Completely offline and private.",
  applicationName: "LoudReader",
  openGraph: {
    type: "website",
    siteName: "LoudReader",
    title: "LoudReader - Every text is an audiobook.",
    description: "Natural AI voices read any book aloud with word-by-word highlighting. Unlimited listening, free. No limits, no quotas, no account. Completely offline and private.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' }
    ]
  },
  manifest: '/site.webmanifest',
};

// GA4 measurement ID. NEXT_PUBLIC_ vars are inlined at build time. When the
// var is absent (local dev, preview without env), the <Analytics /> island is
// not rendered and zero analytics code ships. Consent gating + event contract
// live in components/analytics/Analytics.tsx and docs/analytics-events.md.
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        {gaId ? <Analytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
