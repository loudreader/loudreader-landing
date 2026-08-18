// Post-processes every rendered WAV into public/samples/<slug>.mp3 using the
// standard marketing treatment (trim silence, cap 35s, compress, -16 LUFS,
// 96k mono) and writes data/sample-durations.json for data/audio-samples.ts.
//
// Usage: node scripts/postprocess-samples.mjs /tmp/marketing-batch
import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const POST = "/Users/pepi/Developer/LoudReader_mac/Scripts/postprocess_marketing_sample.sh";

const src = process.argv[2];
if (!src) {
  console.error("usage: node scripts/postprocess-samples.mjs <wavs-dir>");
  process.exit(2);
}

const samplesDir = join(REPO, "public", "samples");
mkdirSync(samplesDir, { recursive: true });

const durations = {};
let ok = 0, fail = 0;
for (const f of readdirSync(src).sort()) {
  if (!f.endsWith(".wav")) continue;
  const slug = f.slice(0, -4);
  const out = join(samplesDir, `${slug}.mp3`);
  try {
    execFileSync("zsh", [POST, join(src, f), out], { stdio: ["ignore", "pipe", "pipe"] });
    const d = execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", out], { encoding: "utf8" }).trim();
    durations[slug] = Number(d);
    console.log(`OK   ${slug}  ${d}s`);
    ok++;
  } catch {
    console.error(`FAIL ${slug}`);
    fail++;
  }
}

writeFileSync(join(REPO, "data", "sample-durations.json"), JSON.stringify(durations, null, 2) + "\n");
console.log(`\n${ok} ok, ${fail} failed -> data/sample-durations.json`);
