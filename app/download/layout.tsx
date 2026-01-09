import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download my MINK",
  description:
    "Download my MINK on iOS and Android. Connect, create, and share with your community. Available now on the App Store and Google Play.",
  openGraph: {
    title: "Download my MINK - iOS & Android",
    description:
      "Download my MINK on iOS and Android. Connect, create, and share with your community.",
    url: "https://mymink.com.au/download",
    images: ["/images/icons.png"],
  },
  alternates: {
    canonical: "https://mymink.com.au/download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
