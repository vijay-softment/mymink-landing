import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact my MINK support team for help with account issues, reports, payments, privacy questions, or general feedback. Email: support@mymink.com.au",
  openGraph: {
    title: "Contact Us | my MINK",
    description:
      "Contact my MINK support team for help with account issues, reports, payments, privacy questions, or general feedback.",
    url: "https://mymink.com.au/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/contact",
  },
};

export default function Contact() {
  return (
    <>
      <LegalPageHeader title="Contact Us" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Introduction */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Contact Us
                  </h1>
                  <p className="text-base md:text-lg">
                    We're here to help with account issues, reports, payments,
                    privacy questions, or general feedback about{" "}
                    <strong>my MINK</strong>.
                  </p>
                </div>

                {/* Support Email */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Support Email
                  </h2>
                  <p>For all support requests, please email:</p>
                  <p>
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline "
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                </div>

                {/* What to include in your message */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    What to include in your message
                  </h2>
                  <p className="mb-2">
                    To help us respond faster, please include:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      Your <strong>my MINK username</strong>
                    </li>
                    <li>
                      The <strong>email or phone number</strong> linked to your
                      account
                    </li>
                    <li>A short description of the issue</li>
                    <li>Screenshots (if available)</li>
                  </ul>
                </div>

                {/* Reporting content or users */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Reporting content or users
                  </h2>
                  <p className="mb-2">
                    If you want to report a post, comment, or user, please use
                    the <strong>Report</strong> option inside the app first.
                  </p>
                  <p className="mb-2 mt-4">
                    If you still need help, email us with:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      The <strong>username</strong> of the account involved
                    </li>
                    <li>
                      The <strong>post link / post ID</strong> (or screenshot)
                    </li>
                    <li>The reason you are reporting it</li>
                  </ul>
                </div>

                {/* Legal, privacy, and data requests */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Legal, privacy, and data requests
                  </h2>
                  <p>
                    For privacy questions, data access requests, or account
                    deletion support, contact:
                  </p>
                  <p>
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline"
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                </div>

                {/* Company */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Company
                  </h2>
                  <p>
                    <strong>Takemade Pty Ltd</strong>
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
