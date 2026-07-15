import type { Metadata } from "next";
import InviteView from "./InviteView";

export const metadata: Metadata = {
  title: "2 weeks of Premium, free",
  description: "Redeem 2 free weeks of LoudReader Premium — listen to any book in natural AI voices.",
  // Personal invite links: keep them out of search.
  robots: { index: false, follow: false },
};

export default async function InvitePage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  return <InviteView inviteRef={ref} />;
}
