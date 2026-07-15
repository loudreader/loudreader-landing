import type { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with LoudReader: importing books, voices, offline listening, subscriptions, and refunds. Email jeremi@loudreader.io.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return <SupportClient />;
}
