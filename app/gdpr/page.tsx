import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "GDPR Compliance",
  description:
    "Read my MINK's GDPR Compliance information to understand how we protect your data rights under the General Data Protection Regulation. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "GDPR Compliance | my MINK",
    description:
      "Read my MINK's GDPR Compliance information to understand how we protect your data rights under the General Data Protection Regulation.",
    url: "https://mymink.com.au/gdpr",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/gdpr",
  },
};

export default function GDPR() {
  return (
    <>
      <LegalPageHeader title="GDPR Compliance" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    GDPR Compliance
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
                    1. Our Commitment to GDPR
                  </h2>
                  <p>
                    Takemade Pty Ltd complies with the{" "}
                    <strong>General Data Protection Regulation (GDPR)</strong>{" "}
                    for users located in the European Union (EU), United Kingdom
                    (UK), and European Economic Area (EEA).
                  </p>
                  <p className="mt-4">
                    GDPR gives individuals control over how their personal data
                    is collected, used, and stored. my MINK is designed to
                    respect and protect these rights.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. Who Is the Data Controller
                  </h2>
                  <p>
                    For users in Europe, the <strong>data controller</strong>{" "}
                    is:
                  </p>
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
                  <p className="mt-4">
                    Takemade Pty Ltd determines how and why personal data is
                    processed.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. What Data We Process
                  </h2>
                  <p className="mb-2">
                    We process personal data to operate the my MINK platform,
                    including:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Account and profile information</li>
                    <li>Posts, comments, messages, and media</li>
                    <li>Payment and transaction data</li>
                    <li>Device and technical data</li>
                    <li>Location data (if provided)</li>
                    <li>Reports, moderation records, and safety logs</li>
                  </ul>
                  <p className="mt-4">
                    This data is required to provide a safe, functional, and
                    personalized social platform.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Legal Basis for Processing
                  </h2>
                  <p>Under GDPR, we process your data based on:</p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>
                      <strong>Contract</strong> – to provide your my MINK
                      account and services
                    </li>
                    <li>
                      <strong>Consent</strong> – for optional features such as
                      notifications and analytics
                    </li>
                    <li>
                      <strong>Legal obligation</strong> – for tax, safety, and
                      fraud prevention
                    </li>
                    <li>
                      <strong>Legitimate interest</strong> – to keep the
                      platform secure and improve user experience
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Your GDPR Rights
                  </h2>
                  <p>
                    If you are in the EU, UK, or EEA, you have the following
                    rights:
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Right to Access
                  </h3>
                  <p>You can request a copy of your personal data.</p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Right to Rectification
                  </h3>
                  <p>You can correct inaccurate or incomplete data.</p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Right to Erasure (Right to be Forgotten)
                  </h3>
                  <p>
                    You can permanently delete your account and all related
                    data.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Right to Restrict Processing
                  </h3>
                  <p>
                    You can ask us to temporarily stop processing your data.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Right to Object
                  </h3>
                  <p>You can object to certain types of processing.</p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Right to Data Portability
                  </h3>
                  <p>
                    You can request a copy of your data in a portable format.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. How to Exercise Your Rights
                  </h2>
                  <p>
                    You can manage most data directly in the app, including:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Editing your profile</li>
                    <li>Deleting posts</li>
                    <li>Deleting your account</li>
                  </ul>
                  <p className="mt-4">For full GDPR requests, email:</p>
                  <p className="mt-2">
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline"
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                  <p className="mt-4">
                    We respond within the legally required timeframe.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Data Deletion
                  </h2>
                  <p className="mb-2">When you delete your my MINK account:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      Your profile, posts, messages, and media are permanently
                      deleted
                    </li>
                    <li>Your data cannot be recovered</li>
                    <li>
                      Some payment records may be kept for legal and tax
                      compliance
                    </li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. International Data Transfers
                  </h2>
                  <p>
                    Your data may be stored and processed outside the EU,
                    including in Australia, the United States, and other
                    countries.
                  </p>
                  <p className="mt-4 mb-2">
                    We use GDPR-approved safeguards such as:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Secure cloud infrastructure</li>
                    <li>Encrypted connections</li>
                    <li>Contractual protections with service providers</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    9. Data Processors
                  </h2>
                  <p className="mb-2">
                    We use trusted GDPR-compliant processors such as:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Firebase</li>
                    <li>AWS</li>
                    <li>Cloudinary</li>
                    <li>Stripe</li>
                    <li>RevenueCat</li>
                    <li>Agora</li>
                    <li>Algolia</li>
                    <li>OpenAI</li>
                    <li>Google</li>
                  </ul>
                  <p className="mt-4">
                    They process data only on our instructions and never sell
                    it.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    10. Data Protection Officer
                  </h2>
                  <p>For GDPR matters, contact:</p>
                  <p className="mt-4">
                    <strong>Data Protection Officer</strong>
                    <br />
                    Takemade Pty Ltd
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline"
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    11. Complaints
                  </h2>
                  <p>
                    If you believe your data rights have been violated, you have
                    the right to lodge a complaint with your local data
                    protection authority in the EU or UK.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    12. Updates
                  </h2>
                  <p>
                    We may update this GDPR page from time to time. The latest
                    version will always be available on our website and in the
                    my MINK app.
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
