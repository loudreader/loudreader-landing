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
 * The script never fails the build: any error is logged and swallowed.
 * It only pings on production deploys (VERCEL_ENV === "production").
 */

const HOST = "loudreader.io";
const KEY = "32c9a2d34b72efd870e9093d32cea41c";

// Keep in sync with app/sitemap.ts (indexable routes only — no /i/ invites).
const PATHS = ["/", "/faq", "/releases", "/support", "/terms", "/privacy"];

if (process.env.VERCEL_ENV !== "production") {
  console.log(
    `[indexnow] skipped: VERCEL_ENV is "${process.env.VERCEL_ENV ?? ""}" (only pings on production)`
  );
  process.exit(0);
}

const urlList = PATHS.map((p) => `https://${HOST}${p}`);

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });
  console.log(`[indexnow] submitted ${urlList.length} URLs — HTTP ${res.status}`);
} catch (err) {
  console.warn(`[indexnow] ping failed (non-fatal): ${err?.message ?? err}`);
}
process.exit(0);
