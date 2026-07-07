"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const CODE = "FREEMONTH";
const APP_ID = "6758149478";
const REDEEM_URL = `https://apps.apple.com/redeem?ctx=offercodes&id=${APP_ID}&code=${CODE}`;
const APP_STORE_URL = `https://apps.apple.com/app/loudreader/id${APP_ID}`;

/* ─── Apple logo mark (matches the landing's App Store button) ─── */
function AppleMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function InviteView({ inviteRef }: { inviteRef: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent;
    const iOS =
      /iPhone|iPad|iPod/.test(ua) ||
      (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
    setIsIOS(iOS);
    setPageUrl(window.location.href);
    track("invite_view");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function track(event: string) {
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
      "event",
      event,
      { ref: inviteRef, code: CODE }
    );
  }

  function revealAndCopy() {
    setRevealed(true);
    navigator.clipboard?.writeText(CODE).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
    track("code_reveal");
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 py-16 bg-[#f7f5f2]">
      {/* soft accent glow, same language as the hero */}
      <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-loudBlue/10 rounded-full blur-[130px]" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center animate-fade-in-up">
        <Image
          src="/logo2.png"
          alt="LoudReader"
          width={52}
          height={52}
          className="mb-6 drop-shadow-md"
          priority
        />

        <span className="inline-flex items-center gap-2 rounded-full bg-loudBlue/10 border border-loudBlue/20 px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-loudBlue mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-loudBlue opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-loudBlue" />
          </span>
          You&apos;ve been invited
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter leading-[1.02] text-gray-900 mb-4">
          A free month of<br />LoudReader Premium
        </h1>
        <p className="text-[15px] md:text-base text-gray-400 leading-relaxed max-w-sm mb-8">
          Listen to any book, PDF, or article in natural AI voices — every voice,
          any speed, sleep timer and more. Fully offline and private.
        </p>

        {/* Code card */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-3">
            Your code
          </p>
          <button
            onClick={revealAndCopy}
            className="group w-full flex items-center justify-center gap-2"
            aria-label="Reveal and copy code"
          >
            <span className="font-mono text-2xl font-bold tracking-[0.2em] text-gray-900 transition-colors group-hover:text-loudBlue">
              {revealed ? CODE : "FREE••••"}
            </span>
            <svg
              className="w-4 h-4 text-gray-300 group-hover:text-loudBlue transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          </button>
          <p className="mt-3 text-[13px] font-medium text-loudBlue">
            {copied ? "Copied to clipboard" : "Active for the next 2 weeks"}
          </p>
        </div>

        {/* Primary action: iOS redeems in place, desktop shows a QR to open on iPhone */}
        {isIOS ? (
          <a
            href={REDEEM_URL}
            onClick={() => track("redeem_click")}
            className="w-full inline-flex items-center justify-center px-7 py-4 rounded-[14px] bg-loudBlue text-white text-lg font-semibold shadow-lg shadow-loudBlue/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mb-3"
          >
            Redeem free month
          </a>
        ) : (
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 flex flex-col items-center mb-3">
            {pageUrl && (
              <div className="rounded-xl bg-white p-2">
                <QRCodeSVG value={pageUrl} size={148} bgColor="#ffffff" fgColor="#1d1d1f" level="M" />
              </div>
            )}
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-[16rem]">
              Scan with your iPhone camera to redeem your free month.
            </p>
          </div>
        )}

        {/* Download on the App Store */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("download_click")}
          className="w-full inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-[14px] bg-black text-white shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <AppleMark className="w-6 h-6" />
          <div className="flex flex-col items-start -space-y-0.5">
            <span className="text-[10px] font-normal leading-tight opacity-80">Download on the</span>
            <span className="text-lg font-semibold leading-tight tracking-tight">App Store</span>
          </div>
        </a>

        {/* Steps */}
        <div className="mt-9 grid grid-cols-3 gap-3 w-full">
          {[
            { n: "1", t: "Get the app" },
            { n: "2", t: "Tap Redeem" },
            { n: "3", t: "Free month" },
          ].map((s) => (
            <div key={s.n} className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-loudBlue/10 text-loudBlue text-sm font-semibold">
                {s.n}
              </span>
              <span className="text-xs text-gray-400">{s.t}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[12px] text-gray-400">
          New subscribers get 1 month free, then $7.99/month. Cancel anytime.
        </p>
        <div className="mt-3 flex items-center gap-5 text-[12px] text-gray-400">
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="/" className="hover:text-gray-900 transition-colors">loudreader.io</a>
        </div>
      </div>
    </main>
  );
}
