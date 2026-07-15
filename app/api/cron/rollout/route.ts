import { NextResponse } from "next/server";

/**
 * Scheduled content rollout trigger.
 *
 * getAllArticles() (components/blog/articles.ts) gates blog posts on
 * publishedAt <= build date, so future-dated articles only become visible
 * after a fresh build. The Vercel cron in vercel.json hits this route once a
 * day; it triggers a redeploy through a Deploy Hook so each day's scheduled
 * articles go live automatically, with no manual push. Money pages and the
 * /listen catalog are not gated, so they all ship in the first deploy.
 *
 * ONE-TIME SETUP (see MANUAL_CHECKLIST.md):
 *   1. Vercel -> Settings -> Git -> Deploy Hooks -> create a hook on branch
 *      main (e.g. "daily-rollout"); copy the URL.
 *   2. Add it as the DEPLOY_HOOK_URL environment variable (Production).
 *   3. (Optional) set CRON_SECRET; Vercel sends it to cron routes as a Bearer
 *      token, which this route then requires.
 *
 * Until DEPLOY_HOOK_URL is set, the route no-ops (200) and the rollout simply
 * does not advance on its own; a manual redeploy any day still reveals that
 * day's scheduled articles.
 */
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
  }

  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) {
    return NextResponse.json(
      { ok: false, note: "DEPLOY_HOOK_URL not set; scheduled rollout is paused" },
      { status: 200 }
    );
  }

  const res = await fetch(hook, { method: "POST" });
  return NextResponse.json({ ok: res.ok, triggered: true, hookStatus: res.status });
}
