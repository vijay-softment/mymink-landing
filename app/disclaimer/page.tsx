import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read my MINK's Disclaimer to understand the limitations of liability and terms of use for our platform. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Disclaimer | my MINK",
    description:
      "Read my MINK's Disclaimer to understand the limitations of liability and terms of use for our platform.",
    url: "https://mymink.com.au/disclaimer",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <>
      <LegalPageHeader title="Disclaimer" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Disclaimer
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
                    1. General Information
                  </h2>
                  <p>
                    my MINK is a social networking and digital platform that allows users to create profiles, share content, communicate with others, stream, sell products, host events, and use various interactive features.
                  </p>
                  <p className="mt-4">
                    The information and services provided on my MINK are offered for general informational, entertainment, and social interaction purposes only. We do not guarantee that any content on the platform is accurate, complete, reliable, or suitable for any specific purpose.
                  </p>
                  <p className="mt-4">
                    Use of the platform is at your own risk.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. User-Generated Content
                  </h2>
                  <p>
                    All content on my MINK, including posts, videos, messages, comments, live streams, marketplace listings, events, and profiles, is created by users.
                  </p>
                  <p className="mt-4">
                    Takemade Pty Ltd does not create, verify, or endorse user content and is not responsible for any opinions, statements, media, or information posted by users.
                  </p>
                  <p className="mt-4">
                    We do not guarantee the accuracy, safety, legality, or reliability of any user-generated content. You agree that you rely on any such content at your own risk.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. No Professional Advice
                  </h2>
                  <p>
                    Content on my MINK may include opinions, experiences, or general information related to lifestyle, relationships, health, finance, business, astrology, cryptocurrency, or other topics.
                  </p>
                  <p className="mt-4">
                    This content does not constitute professional, legal, financial, medical, or business advice. You should always seek qualified professional advice before making decisions based on information found on the platform.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. External Links and Third-Party Services
                  </h2>
                  <p>
                    my MINK may include links to third-party websites, services, or payment providers such as Stripe, RevenueCat, Cloudinary, AWS, Agora, OpenAI, and others.
                  </p>
                  <p className="mt-4">
                    We do not control or endorse these third-party services and are not responsible for their content, availability, security, or privacy practices. Your use of any third-party service is governed by their own terms and privacy policies.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Platform Availability
                  </h2>
                  <p>
                    We strive to keep my MINK available and functioning properly, but we do not guarantee uninterrupted, secure, or error-free service.
                  </p>
                  <p className="mt-4">
                    We are not responsible for any loss, damage, or inconvenience caused by downtime, technical issues, data loss, or service interruptions.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p>
                    To the maximum extent permitted by law, Takemade Pty Ltd and its developers, partners, employees, and contractors will not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of my MINK.
                  </p>
                  <p className="mt-4">
                    This includes but is not limited to loss of data, loss of income, loss of reputation, emotional distress, or business interruption.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Use at Your Own Risk
                  </h2>
                  <p>
                    By using my MINK, you acknowledge that you do so voluntarily and at your own risk. You are responsible for your interactions with other users, the content you share, and the decisions you make based on information found on the platform.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Changes to This Disclaimer
                  </h2>
                  <p>
                    We may update this Disclaimer at any time. Changes will be published on our website or within the app. Continued use of my MINK after changes means you accept the updated Disclaimer.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    9. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Disclaimer, please contact:
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

