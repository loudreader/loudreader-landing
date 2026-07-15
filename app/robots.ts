import type { MetadataRoute } from "next";

// AI crawlers are explicitly welcome: AI answer engines echoing LoudReader's
// positioning is a distribution channel, not a threat.
// Policy: any future Disallow rules go ONLY under "User-agent: *" — never
// under the named AI crawler groups.
//
// /i/[ref] invite pages are deliberately NOT disallowed here: they carry
// `robots: noindex, nofollow` meta, and crawlers must be able to fetch the
// page to see that directive. Blocking them in robots.txt would hide the
// noindex and could leave stray invite URLs indexed.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot",
  "Meta-ExternalAgent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_CRAWLERS, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://loudreader.io/sitemap.xml",
  };
}
