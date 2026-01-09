import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlausibleScript from "./components/PlausibleScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://mymink.com.au"),
  title: {
    default: "my MINK - Connect. Create. Share.",
    template: "%s | my MINK",
  },
  description:
    "Connect. Create. Share. The social network for connecting with your community. Download my MINK on iOS and Android.",
  keywords: [
    "social network",
    "connect",
    "create",
    "share",
    "my MINK",
    "social media",
    "community",
  ],
  authors: [{ name: "my MINK", url: "https://mymink.com.au" }],
  creator: "Takemade Pty Ltd",
  publisher: "Takemade Pty Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mymink.com.au",
    siteName: "my MINK",
    title: "my MINK - Connect. Create. Share.",
    description:
      "Connect. Create. Share. The social network for connecting with your community.",
    images: [
      {
        url: "/images/icons.png",
        width: 1200,
        height: 630,
        alt: "my MINK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "my MINK - Connect. Create. Share.",
    description:
      "Connect. Create. Share. The social network for connecting with your community.",
    images: ["/images/icons.png"],
  },
  icons: {
    icon: [
      { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/icons.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    // Add Google Search Console verification if you have it
    // google: "your-verification-code",
  },
  other: process.env.NEXT_PUBLIC_PLAUSIBLE_VERIFICATION
    ? {
        "plausible-verification":
          process.env.NEXT_PUBLIC_PLAUSIBLE_VERIFICATION,
      }
    : {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PlausibleScript />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
