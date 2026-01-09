import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about my MINK - a social network platform for connecting, creating, and sharing with your community. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "About Us | my MINK",
    description:
      "Learn about my MINK - a social network platform for connecting, creating, and sharing with your community.",
    url: "https://mymink.com.au/about",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/about",
  },
};

export default function About() {
  return (
    <>
      <LegalPageHeader title="About Us" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black ">
                    About Us
                  </h1>
                </div>

                <div>
                  <p className="text-base md:text-lg">
                    <strong>my MINK</strong> is a social platform built for
                    people who want to share, connect, and grow communities in a
                    simple and modern way. It combines core social networking
                    features with real engagement tools like messaging, calls,
                    reels, live interactions, pages, business profiles, and
                    creator support.
                  </p>
                  <p className="mt-4 text-base md:text-lg">
                    We designed my MINK to feel familiar and easy — but stronger
                    behind the scenes. From privacy controls and reporting, to
                    moderation and account safety, we're building a platform
                    that can scale while still protecting users and the
                    community.
                  </p>
                </div>

                {/* What my MINK is for */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    What my MINK is for
                  </h2>
                  <p className="mb-2">my MINK is for:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      People who want a clean place to post images, videos, and
                      text updates
                    </li>
                    <li>Creators who want engagement and support features</li>
                    <li>
                      Communities that want discussions, global chat, and
                      interactive experiences
                    </li>
                    <li>
                      Businesses and pages that want a profile and presence
                      without needing a full website
                    </li>
                  </ul>
                </div>

                {/* What you can do on my MINK */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    What you can do on my MINK
                  </h2>
                  <p className="mb-2">
                    Depending on how you use the app, you can:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      Create and share{" "}
                      <strong>
                        image posts, video posts (reels), and text posts
                      </strong>
                    </li>
                    <li>
                      Add captions, interact with content, and engage with
                      others
                    </li>
                    <li>
                      <strong>Like, comment, reply, save, and share</strong>{" "}
                      posts
                    </li>
                    <li>Discover content through feeds and search</li>
                    <li>
                      Connect with people through{" "}
                      <strong>direct messaging</strong>
                    </li>
                    <li>
                      Make <strong>audio and video calls</strong> and
                      communicate in real time
                    </li>
                    <li>
                      Join and engage with interactive features such as{" "}
                      <strong>live streaming</strong>
                    </li>
                    <li>
                      Use <strong>Pages</strong> and{" "}
                      <strong>Business Profiles</strong> for public presence
                    </li>
                    <li>
                      Participate in extra community experiences like
                      discussions and other social modules
                    </li>
                  </ul>
                </div>

                {/* Profiles for different needs */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Profiles for different needs
                  </h2>
                  <p className="mb-2">
                    my MINK supports different profile types to fit different
                    goals:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      <strong>Personal accounts</strong> for regular users and
                      creators
                    </li>
                    <li>
                      <strong>Business profiles</strong> for brands, services,
                      and businesses
                    </li>
                    <li>
                      <strong>Page profiles</strong> for public pages and
                      community-style presence
                    </li>
                  </ul>
                  <p className="mt-4">
                    Users can switch between profiles while staying within one
                    app experience.
                  </p>
                </div>

                {/* Creator support and monetization */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Creator support and monetization
                  </h2>
                  <p className="mb-2">
                    my MINK also includes monetization features designed to
                    support creators:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      <strong>Buy Me a Coffee</strong> style support (powered
                      through secure payment providers)
                    </li>
                    <li>
                      <strong>Membership / premium access</strong> features
                      (where applicable)
                    </li>
                  </ul>
                  <p className="mt-4">
                    We focus on building this in a way that is transparent for
                    users, and stable for creators.
                  </p>
                </div>

                {/* Safety, moderation, and community trust */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Safety, moderation, and community trust
                  </h2>
                  <p className="mb-2">
                    We take safety and platform integrity seriously. my MINK
                    provides tools to report and manage content, including
                    reporting for:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>harassment and bullying</li>
                    <li>spam and scams</li>
                    <li>hate or abusive behaviour</li>
                    <li>self-harm risks</li>
                    <li>explicit or unsafe content</li>
                  </ul>
                  <p className="mt-4">
                    We use a mix of reporting workflows and moderation processes
                    to review content and take action where needed. We also
                    support user controls like blocking, privacy options, and
                    account management features.
                  </p>
                </div>

                {/* Privacy-first mindset */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Privacy-first mindset
                  </h2>
                  <p className="mb-2">
                    We believe users should understand what data is collected
                    and why. We work to keep things practical:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      We only ask for information needed to run the platform
                    </li>
                    <li>We don't sell personal data</li>
                    <li>Users can manage their account and request deletion</li>
                    <li>
                      Data is handled using secure infrastructure and reputable
                      service providers
                    </li>
                  </ul>
                </div>

                {/* Who operates my MINK */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Who operates my MINK
                  </h2>
                  <p>
                    my MINK is operated by <strong>Takemade Pty Ltd</strong>.
                  </p>
                  <p className="mt-4">
                    The app is developed and maintained by{" "}
                    <strong>SOFTMENT SOLUTIONS PVT LTD</strong> as our
                    technology partner.
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Contact
                  </h2>
                  <p>
                    For support, feedback, or questions, you can reach us at:
                  </p>
                  <p className="mt-4">
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline"
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                  <p className="mt-2">
                    Website:{" "}
                    <a
                      href="https://mymink.com.au"
                      className="text-primary-red hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://mymink.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
