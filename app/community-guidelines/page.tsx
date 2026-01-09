import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Read my MINK's Community Guidelines to understand the rules and standards for using our platform. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Community Guidelines | my MINK",
    description:
      "Read my MINK's Community Guidelines to understand the rules and standards for using our platform.",
    url: "https://mymink.com.au/community-guidelines",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/community-guidelines",
  },
};

export default function CommunityGuidelines() {
  return (
    <>
      <LegalPageHeader title="Community Guidelines" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Community Guidelines
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
                    1. Our Purpose
                  </h2>
                  <p>
                    my MINK exists to help people connect, express themselves,
                    and build communities in a safe, respectful, and creative
                    environment. These Community Guidelines define what is and
                    is not allowed on the platform.
                  </p>
                  <p className="mt-4">
                    By using my MINK, you agree to follow these rules.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. Be Respectful
                  </h2>
                  <p>
                    Users must treat others with dignity and respect. You may
                    not engage in:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Harassment, bullying, or threats</li>
                    <li>Hate speech or discrimination</li>
                    <li>Targeting or attacking individuals or groups</li>
                    <li>Encouraging harm to others</li>
                    <li>Doxxing or sharing private information</li>
                  </ul>
                  <p className="mt-4">
                    We do not tolerate abusive or demeaning behavior in any
                    form.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. No Harmful or Illegal Content
                  </h2>
                  <p className="mb-2">
                    You may not post, share, or promote content that includes:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Violence, threats, or graphic harm</li>
                    <li>Terrorism or extremist content</li>
                    <li>Sexual exploitation or abuse</li>
                    <li>Human trafficking</li>
                    <li>Illegal drugs or criminal activity</li>
                    <li>Self-harm or suicide encouragement</li>
                    <li>Content involving minors</li>
                  </ul>
                  <p className="mt-4">
                    Any content that breaks the law or puts people at risk will
                    be removed and may be reported to authorities.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Sexual and Adult Content
                  </h2>
                  <p>
                    my MINK is not a platform for pornography or explicit sexual
                    material.
                  </p>
                  <p className="mt-4 mb-2">The following is not allowed:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Pornographic images or videos</li>
                    <li>Explicit sexual acts</li>
                    <li>Sexual exploitation</li>
                    <li>Content involving minors</li>
                    <li>Non-consensual or abusive sexual content</li>
                  </ul>
                  <p className="mt-4">
                    Some artistic or non-explicit adult content may be allowed,
                    but we strictly enforce safety standards.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Protect Children
                  </h2>
                  <p>
                    Users must be 16 years or older. Content involving minors in
                    any sexual, harmful, or exploitative way is strictly
                    forbidden and will result in immediate account termination
                    and reporting to authorities.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Authenticity & Impersonation
                  </h2>
                  <p className="mb-2">You must not:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Impersonate another person</li>
                    <li>Pretend to be a brand or business you do not own</li>
                    <li>Mislead users about your identity</li>
                  </ul>
                  <p className="mt-4">
                    Fake accounts, scams, and impersonation will be removed.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Spam, Scams, and Misuse
                  </h2>
                  <p className="mb-2">You may not use my MINK to:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Send spam or fake engagement</li>
                    <li>Run scams or fraud</li>
                    <li>Mislead users for money or clicks</li>
                    <li>Abuse referrals, likes, or follows</li>
                    <li>Use bots or automation</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Marketplace & Promotions
                  </h2>
                  <p>If you sell or promote products or services:</p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>You must be honest</li>
                    <li>You must not sell illegal or dangerous items</li>
                    <li>You must follow local laws</li>
                    <li>You are responsible for your transactions</li>
                  </ul>
                  <p className="mt-4">
                    my MINK does not guarantee or mediate deals between users.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    9. Reporting & Enforcement
                  </h2>
                  <p>
                    Users can report posts, comments, and accounts. We review
                    reports using both automated systems and human moderators.
                  </p>
                  <p className="mt-4 mb-2">We may take actions such as:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Removing content</li>
                    <li>Limiting visibility</li>
                    <li>Suspending accounts</li>
                    <li>Permanently banning users</li>
                  </ul>
                  <p className="mt-4">
                    Serious violations may be reported to authorities.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    10. Account Responsibility
                  </h2>
                  <p>
                    You are responsible for everything posted or done through
                    your account. You must keep your login secure and follow all
                    rules.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    11. Changes to These Guidelines
                  </h2>
                  <p>
                    We may update these Community Guidelines to improve safety
                    and compliance. Updates will be posted on our website or in
                    the app.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    12. Contact Us
                  </h2>
                  <p>If you have questions or need to report an issue:</p>
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
