"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

/**
 * Client leaf: shows a QR code to the App Store, but ONLY on non-Apple
 * desktops (Windows / Linux / ChromeOS), where the visitor needs to hand off
 * to an iPhone. Hidden on Apple devices (the badge link opens the App Store
 * directly) and on Android phones (a QR wouldn't help, their phone IS the
 * device). Renders nothing during SSR, so no visible copy depends on it and
 * crawlers still see the working badge link next to it.
 */
export default function QrFallback({ url }: { url: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    // Modern iPadOS reports "Macintosh", which is fine, Apple either way.
    const isApple = /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    if (!isApple && !isAndroid) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
        <QRCodeSVG value={url} size={132} bgColor="#ffffff" fgColor="#1d1d1f" level="M" />
      </div>
      <p className="text-sm text-gray-500 max-w-xs">
        On Windows or Linux? Scan with your iPhone camera to open LoudReader
        on the App Store.
      </p>
    </div>
  );
}
