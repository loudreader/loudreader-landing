// FACT PROVENANCE — checked on 2026-09-27. This is a scheduled announcement,
// not a promise that additional integrations will be verified by publication.
// - loudreader/loudkit-voice at c984e6394596430a754340d481d686d1c4e95384:
//   README.md verifies Apache-2.0 source, free self-hosting, no access gate,
//   Apple Silicon macOS, Python 3.12–3.13, uv, FFmpeg, ~3 GB model download,
//   20 GB free-space requirement, local Loudkit TTS + Parakeet STT, and the
//   local launcher/setup page. Agent/model/messenger providers may charge.
// - Same revision: integrations/native/README.md and docs/verification.md
//   distinguish pinned Hermes/OpenClaw speech-provider tests from full
//   gateway validation and real messenger delivery. The latter remain
//   unverified; a Codex pipeline used a mocked Telegram transport.
// - Same revision: README.md and docs/agent-compatibility.md describe existing
//   agent sessions/memory/tools, CLI/API/MCP connection options, and the
//   limitations of MCP (it does not wake a stopped agent). Telegram, Discord,
//   WhatsApp Business Cloud API, Slack and BlueBubbles/iMessage adapters are
//   protocol-tested, not verified live accounts. No personal WhatsApp QR flow.
// - integrations/skills/loudkit-voice/SKILL.md in the Loudkit workspace, version
//   0.1.1, matches the public companion skill and documents compatibility-first
//   setup, preserving permissions, separate runtime installation, and local
//   speech versus potentially online agent/messenger services. Skill licence:
//   MIT-0. Published listing: https://clawhub.ai/pepinu/skills/loudkit-voice.
// - Human landing: https://loudkit.loudreader.io/agents/; authoritative agent
//   setup guide: https://loudkit.loudreader.io/agents/llms.txt. The article links
//   to these for evolving compatibility rather than promising future results.
// Claims NOT supported: all agents work, live messenger delivery is verified,
// phone-only runtime, everything is offline, free third-party model usage,
// skill installation starts the runtime, or new features by 2026-10-14.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is Loudkit Voice free and open source?",
    a: "Yes. The companion is Apache-2.0 software, free to self-host without a Loudkit account or access request. The setup skill is MIT-0. Your agent, model provider or messenger may have separate costs; model weights and dependencies have their own licences.",
  },
  {
    q: "Does the preview work with Hermes and OpenClaw?",
    a: "Their speech-provider code has been tested with real local Loudkit and Parakeet models at pinned revisions. Full gateway setup and delivery through real messenger accounts still need validation. Check the setup guide against your installed agent version.",
  },
  {
    q: "Can I run it entirely on my phone?",
    a: "No. The current speech runtime needs an Apple Silicon Mac. Your phone can be the messenger interface once its connection is configured and tested, but it does not replace the Mac running the companion.",
  },
  {
    q: "Does installing the skill enable voice automatically?",
    a: "No. The skill gives your agent setup instructions. The companion, dependencies and speech models must also be installed, and the service must stay running. MCP tools alone do not wake an inactive agent.",
  },
];
