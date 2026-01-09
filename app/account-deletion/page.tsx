import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Account Deletion Policy",
  description:
    "Read my MINK's Account Deletion Policy to understand how to delete your account and what happens to your data. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Account Deletion Policy | my MINK",
    description:
      "Read my MINK's Account Deletion Policy to understand how to delete your account and what happens to your data.",
    url: "https://mymink.com.au/account-deletion",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/account-deletion",
  },
};

export default function AccountDeletion() {
  return (
    <>
      <LegalPageHeader title="Account Deletion" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Account Deletion Policy
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
                    1. How to Delete Your Account
                  </h2>
                  <p>
                    You can delete your my MINK account at any time from within the app.
                  </p>
                  <p className="mt-4">
                    When you confirm deletion, the process starts immediately.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. What Happens When You Delete Your Account
                  </h2>
                  <p className="mb-2">When your account is deleted:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Your login and authentication are removed</li>
                    <li>Your profile is deleted</li>
                    <li>All your posts, photos, videos, and comments are removed</li>
                    <li>Your messages are deleted</li>
                    <li>Your business or page profiles are deleted</li>
                    <li>Your followers and connections are removed</li>
                    <li>Your live streams, events, and marketplace items are deleted</li>
                  </ul>
                  <p className="mt-4">
                    Your account cannot be recovered after deletion.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. Content in Other Users' Chats
                  </h2>
                  <p>
                    Messages you sent to others may be replaced with a notice that the user is no longer available. This ensures conversation integrity while removing your identity.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Payment Data
                  </h2>
                  <p>
                    Payment records related to purchases or creator earnings may be kept if required for:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Tax</li>
                    <li>Accounting</li>
                    <li>Fraud prevention</li>
                    <li>Legal compliance</li>
                  </ul>
                  <p className="mt-4">
                    No card numbers or sensitive payment details are stored by my MINK.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Timeframe
                  </h2>
                  <p>
                    Most data is deleted within minutes. Some systems may take up to a few hours to fully remove all references.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Account Deletion for Business & Page Profiles
                  </h2>
                  <p>
                    If you have a Business or Page profile:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>It can be deleted separately</li>
                    <li>Or it will be removed automatically when your main account is deleted</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Abuse or Legal Holds
                  </h2>
                  <p>
                    If an account is involved in fraud, abuse, or legal investigations, deletion may be delayed until the issue is resolved.
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
