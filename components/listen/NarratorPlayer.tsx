"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { JAMES_CLIP, JAMES_SCRIPT } from "@/data/audio-samples";

/*
 * One voice, one button. The clip is the app's own showcase recording for
 * James, rendered on a phone through the shipping engine — so this is the
 * product speaking, not a studio approximation of it.
 *
 * preload="none": a visitor who never presses play downloads nothing.
 */
export default function NarratorPlayer() {
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
    // A rejected play() is almost always an autoplay-policy or decode error;
    // either way the honest response is to stop claiming a voice is playing.
    el.play().then(
      () => setPlaying(true),
      () => {
        setPlaying(false);
        setFailed(true);
      }
    );
  }, [playing]);

  return (
    <div className="mt-8">
      <audio ref={audioRef} src={JAMES_CLIP.file} preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          playing ? "Stop the sample" : `Play a sample of ${JAMES_CLIP.name}`
        }
        className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3.5 text-white font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {playing ? (
            <path d="M6.75 5.25h3.5v13.5h-3.5zM13.75 5.25h3.5v13.5h-3.5z" />
          ) : (
            <path d="M6.3 3.8a.75.75 0 0 1 1.14-.64l12 8.2a.75.75 0 0 1 0 1.28l-12 8.2A.75.75 0 0 1 6.3 20.2z" />
          )}
        </svg>
        {playing ? "Stop" : `Hear ${JAMES_CLIP.name}`}
      </button>
      <p className="mt-4 text-[13px] text-gray-400 max-w-md mx-auto lg:mx-0 italic">
        &ldquo;Hi, I&apos;m {JAMES_CLIP.name}. {JAMES_SCRIPT}&rdquo;
      </p>
      <p className="mt-2 text-[13px] text-gray-400 max-w-md mx-auto lg:mx-0">
        Recorded on an iPhone, by the app itself.
      </p>
      {failed && (
        <p className="mt-2 text-[13px] text-gray-500" role="status">
          That wouldn&apos;t play here. Tap it again, or try another browser.
        </p>
      )}
    </div>
  );
}
