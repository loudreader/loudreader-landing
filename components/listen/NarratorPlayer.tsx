"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NARRATORS, NARRATOR_SCRIPT } from "@/data/audio-samples";

/*
 * "Hear the narrators" — one <audio> element reused for every clip, because a
 * dozen preloading elements is a dozen requests for audio nobody may play.
 * Nothing is fetched until the first click (preload="none").
 *
 * Every clip is the same script in a different voice, so they can be compared
 * by ear rather than by adjective.
 */
export default function NarratorPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const clear = () => setPlaying(null);
    el.addEventListener("ended", clear);
    el.addEventListener("pause", clear);
    return () => {
      el.removeEventListener("ended", clear);
      el.removeEventListener("pause", clear);
    };
  }, []);

  const toggle = useCallback(
    (id: string) => {
      const el = audioRef.current;
      if (!el) return;
      if (playing === id) {
        el.pause();
        return;
      }
      el.src = `/voices/${id}.m4a`;
      setFailed(false);
      // A rejected play() is almost always an autoplay-policy or decode error;
      // either way the honest response is to stop claiming a voice is playing.
      el.play().then(
        () => setPlaying(id),
        () => {
          setPlaying(null);
          setFailed(true);
        }
      );
    },
    [playing]
  );

  return (
    <div className="mt-8">
      <audio ref={audioRef} preload="none" />
      <p className="text-sm text-gray-500 mb-4">
        Hear them for yourself — same line, eleven English narrators, each clip
        recorded in that voice on an iPhone.
      </p>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {NARRATORS.map((n) => {
          const isPlaying = playing === n.id;
          return (
            <button
              key={n.id}
              type="button"
              onClick={() => toggle(n.id)}
              aria-pressed={isPlaying}
              aria-label={
                isPlaying ? `Stop ${n.name}` : `Play a sample of ${n.name}`
              }
              title={n.blurb}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] transition-all duration-200 ${
                isPlaying
                  ? "border-loudBlue bg-loudBlue text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                {isPlaying ? (
                  <path d="M6.75 5.25h3.5v13.5h-3.5zM13.75 5.25h3.5v13.5h-3.5z" />
                ) : (
                  <path d="M6.3 3.8a.75.75 0 0 1 1.14-.64l12 8.2a.75.75 0 0 1 0 1.28l-12 8.2A.75.75 0 0 1 6.3 20.2z" />
                )}
              </svg>
              {n.name}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-[13px] text-gray-400 max-w-md mx-auto lg:mx-0 italic">
        &ldquo;Hi, I&apos;m James. {NARRATOR_SCRIPT}&rdquo;
      </p>
      {failed && (
        <p className="mt-2 text-[13px] text-gray-500" role="status">
          That clip wouldn&apos;t play here. Tap it again, or try another
          browser.
        </p>
      )}
    </div>
  );
}
