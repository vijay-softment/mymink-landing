import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read my MINK's Terms of Service to understand the rules and guidelines for using our platform. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Terms of Service | my MINK",
    description:
      "Read my MINK's Terms of Service to understand the rules and guidelines for using our platform.",
    url: "https://mymink.com.au/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/terms",
  },
};

export default function Terms() {
  return (
    <>
      <LegalPageHeader title="Terms of Service" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Terms of Service
                  </h1>
                  <div className="space-y-2 text-sm md:text-base">
                    <p><strong>my MINK</strong></p>
                    <p>Operated by <strong>Takemade Pty Ltd</strong></p>
                    <p>Support: <a href="mailto:support@mymink.com.au" className="text-primary-red hover:underline">support@mymink.com.au</a></p>
                    <p>Website: <a href="https://mymink.com.au" className="text-primary-red hover:underline" target="_blank" rel="noopener noreferrer">https://mymink.com.au</a></p>
                    <p>Developer: <strong>SOFTMENT SOLUTIONS PVT LTD</strong></p>
                    <p className="text-text-grey">Last updated: January 6, 2026</p>
                  </div>
                </div>

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    1. Acceptance of These Terms
                  </h2>
                  <p>
                    These Terms of Service ("Terms") govern your use of the <strong>my MINK</strong> mobile application, website, and related services (collectively, the "Services").
                  </p>
                  <p className="mt-4">
                    By accessing or using my MINK, you agree to be bound by these Terms.
                  </p>
                  <p className="mt-4">
                    If you do not agree, you may not use the Services.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. Who Can Use my MINK
                  </h2>
                  <p>
                    You must be at least <strong>16 years old</strong> to use my MINK.
                  </p>
                  <p className="mt-4">
                    We may require age verification. If we determine that a user is under 16, their account may be restricted, suspended, or permanently removed.
                  </p>
                  <p className="mt-4">
                    You are responsible for ensuring that your use of my MINK complies with the laws of your country.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. Your Account
                  </h2>
                  <p>
                    You are responsible for maintaining the security of your account.
                  </p>
                  <p className="mt-4">
                    You must provide accurate and up-to-date information.
                  </p>
                  <p className="mt-4 mb-2">You may not:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Use another person's account</li>
                    <li>Impersonate others</li>
                    <li>Create accounts for illegal or abusive purposes</li>
                  </ul>
                  <p className="mt-4">
                    We may suspend or terminate accounts that violate these rules.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Content You Post
                  </h2>
                  <p>
                    You retain ownership of the content you create, including posts, videos, messages, and profile information.
                  </p>
                  <p className="mt-4">
                    By posting on my MINK, you grant Takemade Pty Ltd a <strong>non-exclusive, worldwide, royalty-free license</strong> to host, store, display, distribute, and process your content in order to operate the platform.
                  </p>
                  <p className="mt-4">
                    You are responsible for all content you upload.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Prohibited Content and Behavior
                  </h2>
                  <p className="mb-2">You may not post, share, or engage in content or behavior that is:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Pornographic, sexually explicit, or involving nudity</li>
                    <li>Exploitative or involving minors</li>
                    <li>Violent, hateful, abusive, or harassing</li>
                    <li>Illegal, fraudulent, or deceptive</li>
                    <li>Infringing on intellectual property</li>
                    <li>Spam, scams, or fake engagement</li>
                    <li>Promoting terrorism or extremism</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to remove content and restrict or terminate accounts at our sole discretion.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Content Moderation
                  </h2>
                  <p>
                    my MINK uses automated and manual systems to detect and remove prohibited content.
                  </p>
                  <p className="mt-4">
                    This may include scanning images, videos, and reports from users.
                  </p>
                  <p className="mt-4">
                    We may remove, limit, or delete content at any time if it violates our rules or creates legal or safety risks.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Reporting and Enforcement
                  </h2>
                  <p>
                    Users may report posts, comments, or accounts.
                  </p>
                  <p className="mt-4 mb-2">We may:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Review reports</li>
                    <li>Remove content</li>
                    <li>Suspend or ban users</li>
                    <li>Restrict features</li>
                  </ul>
                  <p className="mt-4">
                    Our enforcement decisions are final.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Messaging, Calls & Live Streaming
                  </h2>
                  <p>
                    my MINK provides messaging, video calls, audio calls, and live streaming features.
                  </p>
                  <p className="mt-4 mb-2">You may not use these features for:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Harassment</li>
                    <li>Sexual exploitation</li>
                    <li>Scams</li>
                    <li>Recording or broadcasting without consent</li>
                  </ul>
                  <p className="mt-4">
                    We may monitor, limit, or terminate these features to protect users.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    9. Payments and Monetization
                  </h2>
                  <p className="mb-2">my MINK supports:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li><strong>Buy Me a Coffee</strong> (creator tipping)</li>
                    <li><strong>Premium Memberships</strong></li>
                  </ul>
                  <p className="mt-4">
                    All payments are processed by third-party providers such as <strong>Stripe</strong> and <strong>RevenueCat</strong>.
                  </p>
                  <p className="mt-4">
                    We do not store your payment card details.
                  </p>
                  <p className="mt-4">
                    Creators are responsible for complying with their local tax and financial obligations.
                  </p>
                  <p className="mt-4">
                    Refunds are governed by:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Stripe's policies for Buy Me a Coffee</li>
                    <li>Apple and Google's policies for memberships</li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    10. Account Deletion and Deactivation
                  </h2>
                  <p>
                    You may delete your account at any time through the app.
                  </p>
                  <p className="mt-4 mb-2">When you delete your account:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Your profile and content are removed</li>
                    <li>Messages may be anonymized</li>
                    <li>Payment records may be retained for legal reasons</li>
                  </ul>
                  <p className="mt-4">
                    Deactivated accounts remain stored but hidden until reactivated or deleted.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    11. Intellectual Property
                  </h2>
                  <p>
                    All my MINK branding, software, designs, and platform features belong to <strong>Takemade Pty Ltd</strong>.
                  </p>
                  <p className="mt-4">
                    You may not copy, modify, reverse-engineer, or distribute our platform without permission.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    12. Third-Party Services
                  </h2>
                  <p className="mb-2">my MINK integrates third-party services including:</p>
                  <p>
                    Firebase, AWS, Cloudinary, Stripe, Agora, OpenAI, Algolia, Didit, and others.
                  </p>
                  <p className="mt-4">
                    Your use of these services is subject to their own terms and policies.
                  </p>
                </div>

                {/* Section 13 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    13. Disclaimer
                  </h2>
                  <p>
                    my MINK is provided "as is" without warranties of any kind.
                  </p>
                  <p className="mt-4">
                    We do not guarantee uninterrupted service, perfect accuracy, or error-free operation.
                  </p>
                  <p className="mt-4">
                    We are not responsible for user-generated content.
                  </p>
                </div>

                {/* Section 14 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    14. Limitation of Liability
                  </h2>
                  <p>
                    To the maximum extent allowed by law, Takemade Pty Ltd shall not be liable for:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Loss of data</li>
                    <li>Loss of profits</li>
                    <li>User disputes</li>
                    <li>Content posted by users</li>
                    <li>Third-party service failures</li>
                  </ul>
                  <p className="mt-4">
                    Your use of my MINK is at your own risk.
                  </p>
                </div>

                {/* Section 15 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    15. Termination
                  </h2>
                  <p>
                    We may suspend or terminate your access to my MINK at any time for violating these Terms or for legal, safety, or operational reasons.
                  </p>
                </div>

                {/* Section 16 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    16. Changes to These Terms
                  </h2>
                  <p>
                    We may update these Terms from time to time.
                  </p>
                  <p className="mt-4">
                    The latest version will always be available on our website and in the app.
                  </p>
                  <p className="mt-4">
                    Continued use of my MINK means you accept the updated Terms.
                  </p>
                </div>

                {/* Section 17 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    17. Governing Law
                  </h2>
                  <p>
                    These Terms are governed by the laws of <strong>Australia</strong>.
                  </p>
                </div>

                {/* Section 18 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    18. Contact
                  </h2>
                  <p>
                    If you have any questions about these Terms, contact:
                  </p>
                  <p className="mt-4">
                    <strong>Takemade Pty Ltd</strong><br />
                    Email: <a href="mailto:support@mymink.com.au" className="text-primary-red hover:underline">support@mymink.com.au</a><br />
                    Website: <a href="https://mymink.com.au" className="text-primary-red hover:underline" target="_blank" rel="noopener noreferrer">https://mymink.com.au</a>
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
