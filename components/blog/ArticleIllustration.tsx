/**
 * Inline SVG article illustrations (server component, zero dependencies).
 *
 * Raster image generation is not available in this pipeline, so articles use
 * these hand-drawn line-art vignettes instead: decorative, brand-colored,
 * and content-relevant. Pick the variant that matches the article's topic and
 * (optionally) add a caption. The SVG itself is aria-hidden. It is
 * decoration, not information; anything a reader must know belongs in copy.
 *
 * Adding a variant: extend `IllustrationVariant` and `VARIANTS` below.
 * That is a shared-file edit, so do it in its own change, not inside an
 * article PR. Keep new drawings in the same palette (gray strokes,
 * loudBlue #2EC7F6 accents) and the same 480×160 viewBox.
 */

export type IllustrationVariant =
  | "waveform"
  | "book-to-audio"
  | "drive"
  | "offline"
  | "devices";

const GRAY_LIGHT = "#e5e7eb"; // gray-200
const GRAY = "#d1d5db"; // gray-300
const GRAY_DARK = "#9ca3af"; // gray-400
const BLUE = "#2EC7F6"; // loudBlue

function Bars({
  xs,
  halfHeights,
  centerY,
  width,
  color = BLUE,
}: {
  xs: number[];
  halfHeights: number[];
  centerY: number;
  width: number;
  color?: string;
}) {
  return (
    <>
      {xs.map((x, i) => (
        <line
          key={x}
          x1={x}
          y1={centerY - halfHeights[i]}
          x2={x}
          y2={centerY + halfHeights[i]}
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

const VARIANTS: Record<IllustrationVariant, React.ReactNode> = {
  /** An audio waveform, the generic "this text is now sound" motif. */
  waveform: (
    <>
      <Bars
        xs={[90, 115, 140, 165, 190]}
        halfHeights={[10, 22, 34, 48, 60]}
        centerY={80}
        width={8}
        color={GRAY}
      />
      <Bars
        xs={[215, 240, 265]}
        halfHeights={[68, 72, 68]}
        centerY={80}
        width={8}
      />
      <Bars
        xs={[290, 315, 340, 365, 390]}
        halfHeights={[60, 48, 34, 22, 10]}
        centerY={80}
        width={8}
        color={GRAY}
      />
    </>
  ),

  /** An open book turning into sound, the "book becomes audiobook" motif (imports, TTS). */
  "book-to-audio": (
    <>
      <path
        d="M125 58 C108 48 78 46 60 52 L60 108 C78 102 108 104 125 114 Z"
        stroke={GRAY_DARK}
        strokeWidth={3}
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M125 58 C142 48 172 46 190 52 L190 108 C172 102 142 104 125 114 Z"
        stroke={GRAY_DARK}
        strokeWidth={3}
        strokeLinejoin="round"
        fill="none"
      />
      <line x1={125} y1={58} x2={125} y2={114} stroke={GRAY_DARK} strokeWidth={3} />
      <line
        x1={220}
        y1={84}
        x2={258}
        y2={84}
        stroke={GRAY}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <path
        d="M250 74 L262 84 L250 94"
        stroke={GRAY}
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Bars
        xs={[300, 322, 344, 366, 388]}
        halfHeights={[14, 30, 44, 30, 14]}
        centerY={84}
        width={7}
      />
    </>
  ),

  /** A car with sound waves, for commutes, drives, listening on the road. */
  drive: (
    <>
      <line
        x1={50}
        y1={132}
        x2={430}
        y2={132}
        stroke={GRAY_LIGHT}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M118 118 L118 106 Q118 94 130 94 L156 94 L172 72 Q176 66 184 66 L240 66 Q248 66 252 72 L268 94 L296 94 Q308 94 308 106 L308 118"
        stroke={GRAY_DARK}
        strokeWidth={3}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <line x1={212} y1={94} x2={212} y2={66} stroke={GRAY} strokeWidth={3} />
      <circle cx={152} cy={118} r={12} stroke={GRAY_DARK} strokeWidth={3} fill="none" />
      <circle cx={274} cy={118} r={12} stroke={GRAY_DARK} strokeWidth={3} fill="none" />
      <path
        d="M338 94 a14 14 0 0 1 0 -20"
        stroke={BLUE}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M352 102 a26 26 0 0 1 0 -36"
        stroke={BLUE}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M366 110 a38 38 0 0 1 0 -52"
        stroke={BLUE}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),

  /** A phone playing with the cloud crossed out, for on-device, offline, private. */
  offline: (
    <>
      <rect
        x={150}
        y={30}
        width={68}
        height={104}
        rx={14}
        stroke={GRAY_DARK}
        strokeWidth={3}
        fill="none"
      />
      <line
        x1={174}
        y1={42}
        x2={194}
        y2={42}
        stroke={GRAY}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Bars
        xs={[166, 176, 186, 196, 206]}
        halfHeights={[8, 18, 26, 18, 8]}
        centerY={88}
        width={5}
      />
      <path
        d="M285 100 a17 17 0 0 1 8 -32 a23 23 0 0 1 44 -6 a15 15 0 0 1 3 38 Z"
        stroke={GRAY}
        strokeWidth={3}
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1={268}
        y1={116}
        x2={352}
        y2={44}
        stroke={GRAY_DARK}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </>
  ),

  /** Mac and iPhone both playing, the native-apps, cross-device motif. */
  devices: (
    <>
      <rect
        x={80}
        y={30}
        width={170}
        height={100}
        rx={12}
        stroke={GRAY_DARK}
        strokeWidth={3}
        fill="none"
      />
      <path
        d="M148 130 L142 148 L188 148 L182 130"
        stroke={GRAY}
        strokeWidth={3}
        strokeLinejoin="round"
        fill="none"
      />
      <Bars
        xs={[125, 145, 165, 185, 205]}
        halfHeights={[10, 22, 30, 22, 10]}
        centerY={80}
        width={7}
      />
      <rect
        x={300}
        y={42}
        width={62}
        height={106}
        rx={14}
        stroke={GRAY_DARK}
        strokeWidth={3}
        fill="none"
      />
      <line
        x1={320}
        y1={138}
        x2={342}
        y2={138}
        stroke={GRAY}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Bars
        xs={[316, 326, 336, 346]}
        halfHeights={[8, 18, 18, 8]}
        centerY={92}
        width={5}
      />
    </>
  ),
};

export default function ArticleIllustration({
  variant,
  caption,
}: {
  variant: IllustrationVariant;
  /** Optional visible caption under the drawing. */
  caption?: string;
}) {
  return (
    <figure>
      <div className="rounded-2xl border border-gray-200/70 bg-gray-50/50 px-6 py-8">
        <svg
          viewBox="0 0 480 160"
          aria-hidden="true"
          className="w-full h-auto max-w-md mx-auto"
        >
          {VARIANTS[variant]}
        </svg>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
