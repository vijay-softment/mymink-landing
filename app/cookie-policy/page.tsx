import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read my MINK's Cookie Policy to understand how we use cookies and similar technologies on our platform. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Cookie Policy | my MINK",
    description:
      "Read my MINK's Cookie Policy to understand how we use cookies and similar technologies on our platform.",
    url: "https://mymink.com.au/cookie-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/cookie-policy",
  },
};

export default function CookiePolicy() {
  return (
    <>
      <LegalPageHeader title="Cookie Policy" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Cookie Policy
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
                    1. What Are Cookies
                  </h2>
                  <p>
                    Cookies are small text files stored on your device when you visit a website or use an app. They help improve functionality, security, and user experience.
                  </p>
                  <p className="mt-4">
                    This Cookie Policy explains how my MINK uses cookies and similar technologies.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. How We Use Cookies
                  </h2>
                  <p className="mb-2">We use cookies and similar technologies to:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Keep you logged in</li>
                    <li>Remember your preferences</li>
                    <li>Improve performance and reliability</li>
                    <li>Analyze usage and detect problems</li>
                    <li>Prevent fraud and abuse</li>
                    <li>Support features such as messaging, feeds, and payments</li>
                  </ul>
                  <p className="mt-4">
                    Cookies help ensure my MINK works correctly and securely.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. Types of Cookies We Use
                  </h2>
                  <p className="mb-4">We use the following types of cookies:</p>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Essential Cookies
                  </h3>
                  <p>
                    These are required for the platform to function. They allow account login, security checks, and core features.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Performance & Analytics Cookies
                  </h3>
                  <p>
                    These help us understand how users interact with my MINK, so we can improve stability, speed, and usability.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Functionality Cookies
                  </h3>
                  <p>
                    These remember your settings, language, and preferences.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Security Cookies
                  </h3>
                  <p>
                    These help detect suspicious activity, prevent abuse, and protect user accounts.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Third-Party Cookies
                  </h2>
                  <p>
                    Some cookies are set by third-party services we use, including providers for:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Authentication</li>
                    <li>Analytics</li>
                    <li>Payments</li>
                    <li>Media delivery</li>
                    <li>Security</li>
                    <li>Error tracking</li>
                  </ul>
                  <p className="mt-4">
                    These providers may place their own cookies according to their privacy policies.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Managing Cookies
                  </h2>
                  <p>
                    You can control or delete cookies through your browser or device settings. Disabling cookies may limit or break certain features of my MINK.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Cookies in the Mobile App
                  </h2>
                  <p>
                    In the my MINK mobile app, similar technologies are used for login, security, notifications, and analytics. These operate in the same way as cookies on the web.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Updates to This Policy
                  </h2>
                  <p>
                    We may update this Cookie Policy when our services or legal requirements change. The latest version will always be available on our website.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Contact Us
                  </h2>
                  <p>
                    If you have any questions about cookies or tracking technologies:
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

