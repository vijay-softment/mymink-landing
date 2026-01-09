import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read my MINK's Privacy Policy to understand how we collect, use, and protect your personal information. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Privacy Policy | my MINK",
    description:
      "Read my MINK's Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: "https://mymink.com.au/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/privacy",
  },
};

export default function Privacy() {
  return (
    <>
      <LegalPageHeader title="Privacy Policy" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                  Privacy Policy
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
                  1. Introduction
                </h2>
                <p>
                  Takemade Pty Ltd ("we", "our", or "us") operates the my MINK mobile application and website. We are committed to protecting your privacy and handling your personal data in a transparent, lawful, and secure manner.
                </p>
                <p className="mt-4">
                  This Privacy Policy explains what information we collect, how we use it, how it is shared, and what rights you have.
                </p>
                <p className="mt-4">
                  By using my MINK, you agree to this Privacy Policy.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  2. Who Can Use my MINK
                </h2>
                <p>
                  my MINK is intended for people aged 16 years or older.
                </p>
                <p className="mt-4">
                  We may require age verification. If we discover that a user is under 16, their account may be restricted or removed.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  3. Information We Collect
                </h2>
                
                <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                  A. Account & Profile Information
                </h3>
                <p className="mb-2">When you create an account or profile, we may collect:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Username</li>
                  <li>Full name</li>
                  <li>Profile photo</li>
                  <li>Biography</li>
                  <li>Website</li>
                  <li>Location</li>
                  <li>Gender</li>
                  <li>Date of birth</li>
                  <li>Business or Page profile details</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                  B. Content You Create
                </h3>
                <p className="mb-2">We collect and store:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Photos, videos, and text posts</li>
                  <li>Captions and hashtags</li>
                  <li>Comments, replies, likes, saves, and shares</li>
                  <li>Reports you submit</li>
                  <li>Profile views</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                  C. Messaging & Calls
                </h3>
                <p className="mb-2">We collect:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Chat messages and metadata</li>
                  <li>Video and audio call metadata (duration, status, participants)</li>
                  <li>Live stream chats and interactions</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                  D. Payments
                </h3>
                <p className="mb-2">When you use Buy Me a Coffee or Memberships:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Payment amount</li>
                  <li>Currency</li>
                  <li>Transaction IDs</li>
                  <li>Creator and supporter user IDs</li>
                </ul>
                <p className="mt-4">
                  Payments are processed by third-party providers. We do not store your card details.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                  E. Device & Technical Data
                </h3>
                <p className="mb-2">We may collect:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Device type and operating system</li>
                  <li>App version</li>
                  <li>Crash reports and diagnostics</li>
                  <li>Push notification token</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                  F. Location Data
                </h3>
                <p>
                  We only collect location if:
                </p>
                <ul className="list-disc space-y-1 ml-6 mt-2">
                  <li>You add it to a post</li>
                  <li>You create an event</li>
                  <li>You add it to your profile</li>
                </ul>
                <p className="mt-4">
                  We do not track your location in the background.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  4. How We Use Your Data
                </h2>
                <p className="mb-2">We use your information to:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Create and manage your account</li>
                  <li>Show posts, reels, messages, and profiles</li>
                  <li>Enable search, feeds, and recommendations</li>
                  <li>Provide messaging, calls, and live streaming</li>
                  <li>Process payments</li>
                  <li>Detect abuse, spam, or illegal activity</li>
                  <li>Moderate content</li>
                  <li>Provide customer support</li>
                  <li>Improve the app</li>
                  <li>Meet legal obligations</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  5. Content Moderation
                </h2>
                <p>
                  To keep my MINK safe, we use automated and manual moderation tools.
                </p>
                <p className="mt-4 mb-2">Images and videos may be checked for:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Nudity or pornography</li>
                  <li>Violence</li>
                  <li>Sexual exploitation</li>
                  <li>Illegal or harmful content</li>
                </ul>
                <p className="mt-4">
                  If content violates our rules, it may be removed or restricted.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  6. How We Share Data
                </h2>
                <p className="mb-4">
                  We do not sell your personal data.
                </p>
                <p className="mb-2">
                  We share data only with service providers needed to operate my MINK, including:
                </p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Firebase (authentication, database, notifications)</li>
                  <li>AWS (image and file storage)</li>
                  <li>Cloudinary (video processing and delivery)</li>
                  <li>Stripe (payments and creator payouts)</li>
                  <li>RevenueCat (membership purchases)</li>
                  <li>Agora (video and audio calls, live streams)</li>
                  <li>Algolia (search)</li>
                  <li>OpenAI (chatbot feature)</li>
                  <li>Google Translate (translations)</li>
                  <li>Didit (age verification)</li>
                  <li>Sentry (error reporting)</li>
                  <li>Branch.io (shareable links)</li>
                </ul>
                <p className="mt-4">
                  These companies act as data processors and may only use your data to provide their services to my MINK.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  7. International Data Transfers
                </h2>
                <p>
                  Your data may be stored or processed in Australia, the United States, Europe, or other countries where our service providers operate. We ensure appropriate safeguards are in place.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  8. Data Retention
                </h2>
                <ul className="list-disc space-y-2 ml-6">
                  <li><strong>Active accounts:</strong> data is stored while your account is active</li>
                  <li><strong>Deactivated accounts:</strong> data is kept but hidden</li>
                  <li><strong>Deleted accounts:</strong> data is permanently removed</li>
                  <li><strong>Payment records</strong> may be retained for legal and financial compliance</li>
                </ul>
                <p className="mt-4">
                  Once deleted, your data cannot be recovered.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  9. Security
                </h2>
                <p className="mb-2">We use:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>Encrypted connections (HTTPS)</li>
                  <li>Secure servers</li>
                  <li>Access controls</li>
                </ul>
                <p className="mt-4">
                  No system is 100% secure, but we take strong steps to protect your data.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  10. Your Rights
                </h2>
                <p className="mb-2">You may have the right to:</p>
                <ul className="list-disc space-y-1 ml-6">
                  <li>View your data</li>
                  <li>Edit your data</li>
                  <li>Delete your account</li>
                  <li>Request a copy of your data</li>
                  <li>Restrict or object to certain processing</li>
                </ul>
                <p className="mt-4">
                  To make a request, email <a href="mailto:support@mymink.com.au" className="text-primary-red hover:underline">support@mymink.com.au</a>.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  11. Children's Privacy
                </h2>
                <p>
                  my MINK is not intended for users under 16.
                </p>
                <p className="mt-4">
                  If a child is discovered, their account will be restricted or removed.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  12. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time.
                </p>
                <p className="mt-4">
                  Changes will be posted on our website or in the app.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                  13. Contact Us
                </h2>
                <p>
                  If you have any questions about privacy or data:
                </p>
                <p className="mt-4">
                  <strong>Takemade Pty Ltd</strong><br />
                  Email: <a href="mailto:support@mymink.com.au" className="text-primary-red hover:underline">support@mymink.com.au</a>
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
