import Image from "next/image";

/**
 * Author byline (server component).
 * The wording is deliberate and real: LoudReader is built by one person, and
 * "built by the developer" is the honest substitute for a fake authors page.
 * Do NOT invent named staff writers. This byline is the only author credit.
 */
export default function Byline() {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-gray-500">
      <Image
        src="/logo2.png"
        alt=""
        width={18}
        height={18}
        className="opacity-80"
      />
      Built by the developer of LoudReader
    </span>
  );
}
