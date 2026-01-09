import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Data Retention & Deletion Policy",
  description:
    "Read my MINK's Data Retention & Deletion Policy to understand how long we retain your data and when it's deleted. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Data Retention & Deletion Policy | my MINK",
    description:
      "Read my MINK's Data Retention & Deletion Policy to understand how long we retain your data and when it's deleted.",
    url: "https://mymink.com.au/data-retention",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/data-retention",
  },
};

export default function DataRetention() {
  return (
    <>
      <LegalPageHeader title="Data Retention & Deletion Policy" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Data Retention & Deletion Policy
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
                    1. Purpose
                  </h2>
                  <p>
                    This policy explains how my MINK stores, retains, and deletes user data. We are committed to protecting user privacy while meeting legal, security, and operational requirements.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. What Data We Store
                  </h2>
                  <p className="mb-2">We may store the following types of data:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Account and profile information</li>
                    <li>Posts, media, comments, and messages</li>
                    <li>Business and Page profiles</li>
                    <li>Live streams and interactions</li>
                    <li>Payment records</li>
                    <li>Reports, blocks, and moderation history</li>
                    <li>Technical logs and error reports</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. How Long We Retain Data
                  </h2>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Active Accounts
                  </h3>
                  <p>
                    While your account is active, we retain your data so the platform can function properly.
                  </p>
                  <p className="mt-4 mb-2">This includes:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Your profile</li>
                    <li>Posts and media</li>
                    <li>Messages</li>
                    <li>Followers and interactions</li>
                    <li>Payment history</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Deactivated Accounts
                  </h3>
                  <p>
                    If you deactivate your account:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Your data is kept</li>
                    <li>Your profile and content are hidden</li>
                    <li>You can reactivate at any time</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Deleted Accounts
                  </h3>
                  <p>
                    When you delete your account:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Your personal data is permanently removed</li>
                    <li>Your posts, media, messages, and profiles are deleted</li>
                    <li>Your account cannot be restored</li>
                  </ul>
                  <p className="mt-4">
                    Some payment records may be retained only where required by law or financial regulations.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Legal and Security Retention
                  </h2>
                  <p className="mb-2">We may keep limited data longer when required for:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Fraud prevention</li>
                    <li>Dispute resolution</li>
                    <li>Tax or accounting compliance</li>
                    <li>Law enforcement requests</li>
                    <li>Platform safety</li>
                  </ul>
                  <p className="mt-4">
                    This data is stored securely and is not used for marketing.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Backup and Deletion Timing
                  </h2>
                  <p>
                    When you delete your account, your data is removed from active systems immediately.
                  </p>
                  <p className="mt-4">
                    Backups may take a short time to fully clear, but they are automatically overwritten and not restored.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Your Rights
                  </h2>
                  <p className="mb-2">You may request:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>A copy of your data</li>
                    <li>Correction of incorrect data</li>
                    <li>Deletion of your account</li>
                    <li>Restriction of processing</li>
                  </ul>
                  <p className="mt-4">
                    Requests can be sent to <a href="mailto:support@mymink.com.au" className="text-primary-red hover:underline">support@mymink.com.au</a>.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Changes
                  </h2>
                  <p>
                    We may update this policy if laws or our services change. The latest version will always be published.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Contact
                  </h2>
                  <p>
                    For help with account deletion or data requests:
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

