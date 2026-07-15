import type { Metadata } from "next";
import ReleasesClient from "./ReleasesClient";

export const metadata: Metadata = {
  title: "Release Notes",
  description: "What's new in LoudReader — version history and release notes.",
  alternates: { canonical: "/releases" },
};

export default function ReleasesPage() {
  return <ReleasesClient />;
}
