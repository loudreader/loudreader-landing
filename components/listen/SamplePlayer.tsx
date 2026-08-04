"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/*
 * The opening of one book, read by James. A client leaf on an otherwise fully
 * static page: preload="none", so a page nobody listens on costs nothing extra.
 */
export default function SamplePlayer({
  src,
  title,
  seconds,
}: {
  src: string;
  title: string;
  seconds: number;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const clear = () => setPlaying(false);
    el.addEventListener("ended", clear);
    el.addEventListener("pause", clear);
    return () => {
      el.removeEventListener("ended", clear);
      el.removeEventListener("pause", clear);
    };
  }, []);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      return;
    }
    setFailed(false);
    el.play().then(
      () => setPlaying(true),
      () => {
        setPlaying(false);
        setFailed(true);
      }
    );
  }, [playing]);

  return (
    <div className="rounded-2xl border border-loudBlue/20 bg-loudBlue/5 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <audio ref={audioRef} src={src} preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          playing ? `Stop the sample` : `Play the opening of ${title}`
        }
        className="inline-flex items-center gap-3 rounded-full bg-loudBlue px-6 py-3 text-white font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {playing ? (
            <path d="M6.75 5.25h3.5v13.5h-3.5zM13.75 5.25h3.5v13.5h-3.5z" />
          ) : (
            <path d="M6.3 3.8a.75.75 0 0 1 1.14-.64l12 8.2a.75.75 0 0 1 0 1.28l-12 8.2A.75.75 0 0 1 6.3 20.2z" />
          )}
        </svg>
        {playing ? "Stop" : "Listen to a sample"}
      </button>
      <div className="text-sm text-gray-500">
        <p>
          The opening of {title}, read by James — {Math.round(seconds)} seconds.
        </p>
        {failed ? (
          <p className="mt-1" role="status">
            That wouldn&apos;t play here. Tap again, or try another browser.
          </p>
        ) : (
          <p className="mt-1 text-gray-400">
            In the app the whole book reads like this, offline.
          </p>
        )}
      </div>
    </div>
  );
}
