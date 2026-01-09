import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support",
  description:
    "Get help with my MINK. Find answers to frequently asked questions about account management, posts, messaging, payments, and technical support.",
  openGraph: {
    title: "Help & Support | my MINK",
    description:
      "Get help with my MINK. Find answers to frequently asked questions about account management, posts, messaging, payments, and technical support.",
    url: "https://mymink.com.au/help",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/help",
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
