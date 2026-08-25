#!/usr/bin/env node
/**
 * IndexNow deploy ping for loudreader.io
 *
 * Submits the site's indexable URLs to https://api.indexnow.org (which fans
 * out to Bing, Yandex, and other IndexNow-participating engines) so new
 * deploys get crawled quickly. Key ownership is proven by
 * public/32c9a2d34b72efd870e9093d32cea41c.txt being served at the site root.
 *
 * HOW THIS RUNS
 * -------------
 * Chained into the "build" script in package.json:
 *     "build": "next build && node scripts/indexnow-ping.mjs"
 *
 * WHY not a `postbuild` lifecycle hook: Vercel (and other hosts) may invoke
 * the build tool directly or otherwise skip package-manager lifecycle hooks,
 * so `postbuild` is not guaranteed to run. Putting the ping inside the build
 * command itself is the reliable option.
 *
 * TODO(user): after the next production deploy, open the Vercel build logs
 * and confirm a "[indexnow]" line appears. If it doesn't, set the project's
 * Build Command in Vercel settings to `npm run build` (a dashboard override
 * of just `next build` would bypass this script).
 *
 * WHERE THE URL LIST COMES FROM
 * -----------------------------
 * The sitemap this build produced, not a list kept here. `app/sitemap.ts`
 * assembles four sources at build time: the fixed routes, the money pages
 * under `app/(seo)/<slug>/meta.json`, the blog manifest and the Gutenberg
 * catalog. Publishing an article or adding a money page deliberately does not
 * require editing that file, so a second copy of the route list in this script
 * could only ever drift — and did. It named 6 paths while the sitemap had
 * grown to 201, so every blog article and every /listen page went unsubmitted.
 *
 * `next build` prerenders the sitemap to `.next/server/app/sitemap.xml.body`,
 * so reading that file submits exactly what this build published. Fetching the
 * live sitemap would instead describe the *previous* deploy, which is wrong in
 * precisely the case the ping exists for: a page that is new in this one.
 *
 * The script never fails the build: any error is logged and swallowed.
 * It only pings on production deploys (VERCEL_ENV === "production").
 */

import fs from "node:fs";
import path from "node:path";

const HOST = "loudreader.io";
const KEY = "32c9a2d34b72efd870e9093d32cea41c";

// IndexNow accepts at most 10,000 URLs per request. The catalog is far from
// that today, but app/sitemap.ts already anticipates growing past a few
// thousand books, and a silent rejection on the first deploy that crosses the
// line is the kind of failure nobody goes looking for.
const MAX_URLS_PER_REQUEST = 10_000;

const SITEMAP_BODY = path.join(
  process.cwd(),
  ".next",
  "server",
  "app",
  "sitemap.xml.body"
);

if (process.env.VERCEL_ENV !== "production") {
  console.log(
    `[indexnow] skipped: VERCEL_ENV is "${process.env.VERCEL_ENV ?? ""}" (only pings on production)`
  );
  process.exit(0);
}

/** Every <loc> in the sitemap this build just wrote. */
function builtUrls() {
  const relative = path.relative(process.cwd(), SITEMAP_BODY);
  if (!fs.existsSync(SITEMAP_BODY)) {
    throw new Error(`${relative} not found, so next build did not run first`);
  }
  const urls = [...fs.readFileSync(SITEMAP_BODY, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter(Boolean);

  // Both checks exist so a changed sitemap shape reports itself instead of
  // producing a cheerful "submitted 0 URLs" that reads like success.
  if (urls.length === 0) {
    throw new Error(`${relative} contained no <loc> entries`);
  }
  const foreign = urls.find((url) => !url.startsWith(`https://${HOST}/`));
  if (foreign) {
    throw new Error(`sitemap lists a URL outside ${HOST}: ${foreign}`);
  }
  return urls;
}

try {
  const urlList = builtUrls();

  for (let i = 0; i < urlList.length; i += MAX_URLS_PER_REQUEST) {
    const batch = urlList.slice(i, i + MAX_URLS_PER_REQUEST);
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: batch,
      }),
    });
    // 200 is accepted, 202 is accepted with key validation still pending.
    // Print the status either way so anything else is visible in the log.
    console.log(`[indexnow] submitted ${batch.length} URLs — HTTP ${res.status}`);
  }
} catch (err) {
  console.warn(`[indexnow] ping failed (non-fatal): ${err?.message ?? err}`);
}
process.exit(0);
