"use client";

/**
 * Website-only analytics island (GROWTH_PROMPT Part C4).
 *
 * WHAT THIS IS
 * ------------
 * GA4 via gtag.js, gated twice:
 *   1. Build-time: this component is only rendered by app/layout.tsx when
 *      NEXT_PUBLIC_GA_MEASUREMENT_ID is set. No env var → no analytics code
 *      in the page at all.
 *   2. Consent: Google Consent Mode v2, "basic" implementation. gtag.js is
 *      NOT loaded until the visitor accepts the banner. Decline (or no
 *      choice) = ZERO requests to Google, no cookieless pings, nothing.
 *      This is deliberately stricter than "advanced" consent mode because
 *      LoudReader's whole positioning is privacy; a declined visitor who
 *      opens the network tab must see no Google traffic.
 *
 * The LoudReader APP has no analytics of any kind. This island is
 * website-only, and the banner copy says so.
 *
 * EVENTS (contract: docs/analytics-events.md, update it when touching this)
 * -------------------------------------------------------------------------
 * - page_view   sent manually on every App Router pathname change
 *               (config uses send_page_view: false; keep GA4 Enhanced
 *               Measurement "page changes based on browser history" OFF or
 *               views double-count).
 * - store_click sent by a single delegated click listener for ANY anchor
 *               whose href points at apps.apple.com, covers every App Store
 *               badge/CTA site-wide, including pages that never imported
 *               this file. Params: `cta_source` (from the nearest
 *               data-store-source attribute, fallback "inline") and
 *               `page_path`. De-duplicated per (path, cta_source) per session
 *               via sessionStorage so repeat clicks / remounts can't poison
 *               per-page CTR, the site's #1 KPI.
 *
 * Consent can be revoked from the privacy page (button clears the stored
 * choice and reloads, which re-shows this banner).
 */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** localStorage key for the visitor's consent choice ("granted" | "denied"). */
export const CONSENT_STORAGE_KEY = "lr-analytics-consent";

const CLICK_GUARD_PREFIX = "lr-store-click:";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

let gaLoaded = false;

// Events fired before gtag exists (e.g. a page's mount effect runs before this
// island's effect boots gtag, even with consent already stored). Queued locally
// and flushed by loadGa AFTER the config command, so gtag.js replays them with
// a configured destination and granted consent. Never granted → never sent.
const pendingEvents: [string, Record<string, unknown>][] = [];

/**
 * Fire a GA4 event now, or queue it until consent boots gtag. The ONLY way
 * page components should send events; calling window.gtag directly from a
 * mount effect silently drops the event (child effects run before this
 * island defines the stub).
 */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (window.gtag) {
    window.gtag("event", event, params);
  } else {
    pendingEvents.push([event, params]);
  }
}

/** Boot gtag with Consent Mode v2 and inject the GA4 script. Idempotent. */
function loadGa(gaId: string) {
  if (gaLoaded) return;
  gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  // GA4 requires the IArguments object (not an array) to be pushed.
  // eslint-disable-next-line prefer-rest-params
  const gtag: GtagFn = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag = gtag;

  // Consent Mode v2 defaults must be queued before the tag loads.
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  // Visitor accepted analytics. Ad-related consent stays denied forever.
  // This site runs no ads and shares nothing with Google's ad products.
  gtag("consent", "update", { analytics_storage: "granted" });

  gtag("js", new Date());
  gtag("config", gaId, {
    send_page_view: false, // page_view is sent manually on route change
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  // Flush events that fired before boot. Must stay after the config push:
  // gtag.js replays the queue in order, and events queued before any config
  // have no destination and are dropped.
  for (const [event, params] of pendingEvents.splice(0)) {
    gtag("event", event, params);
  }

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  script.async = true;
  document.head.appendChild(script);
}

function readStoredConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export default function Analytics({ gaId }: { gaId: string }) {
  // null = not yet hydrated (render nothing, avoids SSR/CSR mismatch);
  // "unset" = no stored choice → show the banner.
  const [consent, setConsent] = useState<"granted" | "denied" | "unset" | null>(
    null
  );
  const pathname = usePathname();

  // On mount: honor a previously stored choice, else show the banner.
  useEffect(() => {
    const stored = readStoredConsent();
    if (stored === "granted") loadGa(gaId);
    setConsent(stored ?? "unset");
  }, [gaId]);

  // Manual page_view on every App Router navigation (and once after GA boots).
  useEffect(() => {
    if (consent !== "granted" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, consent]);

  // Site-wide store_click: ONE delegated listener (capture phase) instead of
  // per-CTA onClick handlers, so re-renders can never attach duplicates and
  // future CTAs are covered automatically.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href*="apps.apple.com"]');
      if (!anchor || !window.gtag) return;

      const path = window.location.pathname;
      // NOTE: this is sent as `cta_source`, NOT `source`. `source` is a GA4
      // RESERVED traffic-source parameter: sending it on an event overrides the
      // session's real source, so CTA labels (e.g. "listen-book-top") showed up
      // as traffic sources and buried the true referrer (google / chatgpt.com).
      // Never rename this back to `source`.
      const ctaSource =
        anchor
          .closest("[data-store-source]")
          ?.getAttribute("data-store-source") || "inline";

      // Session de-dup per (page, cta): first click counts, repeats don't.
      const guardKey = `${CLICK_GUARD_PREFIX}${path}:${ctaSource}`;
      try {
        if (sessionStorage.getItem(guardKey)) return;
        sessionStorage.setItem(guardKey, "1");
      } catch {
        // sessionStorage unavailable (private mode edge cases), still send;
        // a rare overcount beats silently dropping the KPI event.
      }

      window.gtag("event", "store_click", {
        cta_source: ctaSource,
        page_path: path,
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  function decide(choice: "granted" | "denied") {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Storage blocked: treat as session-only choice.
    }
    if (choice === "granted") loadGa(gaId);
    setConsent(choice);
  }

  if (consent !== "unset") return null;

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-black/10"
    >
      <p className="text-sm text-gray-700 leading-relaxed">
        <span className="font-semibold text-gray-900">
          Allow anonymous visit stats?
        </span>{" "}
        This website (only) uses Google Analytics to count visits and App
        Store clicks. The LoudReader app itself has no analytics. Your
        library never leaves your device. Decline and nothing loads.
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => decide("denied")}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={() => decide("granted")}
          className="flex-1 px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Allow
        </button>
      </div>
    </div>
  );
}
