import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "User Consent & Data Usage",
  description:
    "Read my MINK's User Consent & Data Usage policy to understand how we use your data and what consent you provide. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "User Consent & Data Usage | my MINK",
    description:
      "Read my MINK's User Consent & Data Usage policy to understand how we use your data and what consent you provide.",
    url: "https://mymink.com.au/user-consent",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/user-consent",
  },
};

export default function UserConsent() {
  return (
    <>
      <LegalPageHeader title="User Consent & Data Usage" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    User Consent & Data Usage
                  </h1>
                  <div className="space-y-2 text-sm md:text-base">
                    <p>
                      <strong>my MINK</strong>
                    </p>
                    <p>
                      Operated by <strong>Takemade Pty Ltd</strong>
                    </p>
                    <p>
                      Support:{" "}
                      <a
                        href="mailto:support@mymink.com.au"
                        className="text-primary-red hover:underline"
                      >
                        support@mymink.com.au
                      </a>
                    </p>
                    <p>
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
                    <p>
                      Developer: <strong>SOFTMENT SOLUTIONS PVT LTD</strong>
                    </p>
                    <p className="text-text-grey">
                      Last updated: January 6, 2026
                    </p>
                  </div>
                </div>

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    1. Purpose of This Page
                  </h2>
                  <p>
                    This page explains how <strong>my MINK</strong> collects,
                    uses, stores, and processes personal data, and how your
                    consent is obtained.
                  </p>
                  <p className="mt-4">
                    By creating an account or using my MINK, you confirm that
                    you understand and agree to how your data is used as
                    described here and in our Privacy Policy.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. What You Are Consenting To
                  </h2>
                  <p>
                    When you sign up or use my MINK, you consent to the
                    processing of your personal data for the following
                    purposes:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-4">
                    <li>Creating and managing your account</li>
                    <li>Displaying your profile, posts, and interactions</li>
                    <li>
                      Enabling social features such as likes, follows,
                      messaging, calls, and live streams
                    </li>
                    <li>Storing and delivering your photos and videos</li>
                    <li>Processing payments and memberships</li>
                    <li>Preventing fraud, abuse, and illegal activity</li>
                    <li>Content moderation and safety enforcement</li>
                    <li>Sending notifications</li>
                    <li>Improving app performance and reliability</li>
                  </ul>
                  <p className="mt-4">
                    Without this data processing, my MINK cannot function.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. Explicit Consent Areas
                  </h2>
                  <p className="mb-2">
                    Some data uses require specific consent. These include:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Push notifications</li>
                    <li>Crash and error reporting</li>
                    <li>Location data (when you choose to add it)</li>
                    <li>Age verification</li>
                    <li>Payment processing</li>
                    <li>AI chatbot usage</li>
                  </ul>
                  <p className="mt-4">
                    You can enable or disable certain features in your device or
                    account settings.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Withdrawal of Consent
                  </h2>
                  <p>
                    You can withdraw consent at any time by:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-4">
                    <li>Changing app permissions</li>
                    <li>Turning off notifications</li>
                    <li>Disabling optional features</li>
                    <li>Deleting your account</li>
                  </ul>
                  <p className="mt-4">
                    Withdrawing consent may limit or disable parts of the app.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Data Usage Transparency
                  </h2>
                  <p>
                    Your data is used only to operate and improve my MINK.
                  </p>
                  <p className="mt-4">
                    We do <strong>not</strong> sell personal data.
                  </p>
                  <p className="mt-2">
                    We do <strong>not</strong> allow advertisers to access
                    private messages or private data.
                  </p>
                  <p className="mt-2">
                    We do <strong>not</strong> share personal data except with
                    trusted service providers.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Automated Processing & AI
                  </h2>
                  <p className="mb-2">my MINK uses automated systems for:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Content moderation</li>
                    <li>Spam and abuse detection</li>
                    <li>Language detection</li>
                    <li>Translations</li>
                    <li>AI chatbot replies</li>
                  </ul>
                  <p className="mt-4">
                    These systems help keep the platform safe and usable. Human
                    review may also occur when needed.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Consent for Payments
                  </h2>
                  <p>
                    When you make payments (Buy Me a Coffee or Memberships), you
                    consent to your payment data being processed by Stripe,
                    Apple, Google, or RevenueCat to complete transactions and
                    comply with financial laws.
                  </p>
                  <p className="mt-4">
                    my MINK never stores your card details.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Consent for Age Verification
                  </h2>
                  <p>
                    If required, you consent to third-party age verification
                    services to confirm you meet minimum age requirements.
                  </p>
                  <p className="mt-4">
                    Failure to verify may result in account restriction or
                    removal.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    9. Consent for Communications
                  </h2>
                  <p className="mb-2">
                    By using my MINK, you consent to receive:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Service notifications</li>
                    <li>Security alerts</li>
                    <li>Transaction messages</li>
                    <li>System messages</li>
                  </ul>
                  <p className="mt-4">
                    You can opt out of promotional notifications, but not
                    essential service communications.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    10. Legal Basis
                  </h2>
                  <p>Your consent is collected under:</p>
                  <ul className="list-disc space-y-1 ml-6 mt-4">
                    <li>GDPR (Europe)</li>
                    <li>CCPA (California)</li>
                    <li>Australian Privacy Act</li>
                    <li>App Store & Google Play policies</li>
                  </ul>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    11. Changes to This Page
                  </h2>
                  <p>
                    We may update this page as the platform evolves. Continued
                    use of my MINK means you accept the updated terms.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    12. Contact
                  </h2>
                  <p>For consent or data questions, contact:</p>
                  <p className="mt-4">
                    <strong>Takemade Pty Ltd</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline"
                    >
                      support@mymink.com.au
                    </a>
                    <br />
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

