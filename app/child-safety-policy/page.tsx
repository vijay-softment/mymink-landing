import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Child Safety Standards Policy",
  description:
    "Read my MINK's Child Safety Standards Policy, including prohibited content, reporting tools, enforcement actions, and CSAE protections.",
  openGraph: {
    title: "Child Safety Standards Policy | my MINK",
    description:
      "Read my MINK's Child Safety Standards Policy, including prohibited content, reporting tools, enforcement actions, and CSAE protections.",
    url: "https://mymink.com.au/child-safety-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/child-safety-policy",
  },
};

export default function ChildSafetyPolicyPage() {
  return (
    <>
      <LegalPageHeader title="Child Safety Policy" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Child Safety Standards Policy – my MINK
                  </h1>
                  <div className="space-y-2 text-sm md:text-base">
                    <p>
                      <strong>Effective Date:</strong> 18 March 2026
                    </p>
                    <p>
                      At my MINK, operated by <strong>Takemade Pty Ltd</strong>{" "}
                      and developed by{" "}
                      <strong>Softment Solutions Pvt Ltd</strong>, we are
                      committed to ensuring a safe environment for all users,
                      especially minors. We maintain a strict zero-tolerance
                      policy toward child sexual abuse and exploitation (CSAE).
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Prohibited Content &amp; Behavior
                  </h2>
                  <p className="mb-2">
                    The following are strictly prohibited on my MINK:
                  </p>
                  <ul className="list-disc space-y-2 ml-6">
                    <li>Any form of Child Sexual Abuse Material (CSAM)</li>
                    <li>Sexual exploitation or abuse of minors</li>
                    <li>
                      Grooming, predatory behavior, or inappropriate
                      interaction with minors
                    </li>
                    <li>
                      Sharing, promoting, or linking to exploitative content
                      involving minors
                    </li>
                  </ul>
                  <p className="mt-4">
                    Any violation will result in immediate action.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    User Safety Measures
                  </h2>
                  <p className="mb-2">To protect users, my MINK implements:</p>
                  <ul className="list-disc space-y-2 ml-6">
                    <li>Content monitoring and moderation systems</li>
                    <li>Mechanisms to detect and prevent abusive behavior</li>
                    <li>
                      Community guidelines that strictly prohibit harmful
                      conduct
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Reporting &amp; Blocking
                  </h2>
                  <p className="mb-2">
                    We provide in-app tools that allow users to:
                  </p>
                  <ul className="list-disc space-y-2 ml-6">
                    <li>Report inappropriate content or users</li>
                    <li>Block other users</li>
                  </ul>
                  <p className="mt-4">
                    All reports are reviewed promptly, and appropriate action is
                    taken.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Enforcement Actions
                  </h2>
                  <p className="mb-2">
                    If any user violates our child safety standards, we may:
                  </p>
                  <ul className="list-disc space-y-2 ml-6">
                    <li>Remove the content immediately</li>
                    <li>Suspend or permanently ban the account</li>
                    <li>
                      Report the user and content to relevant law enforcement
                      authorities
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Child Safety Contact
                  </h2>
                  <p>
                    If you have concerns related to child safety, you can
                    contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline"
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                  <p className="mt-4">
                    We take all reports seriously and act swiftly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Compliance with Laws
                  </h2>
                  <p>
                    my MINK complies with all applicable child safety laws and
                    regulations, including obligations related to preventing
                    CSAE. We cooperate fully with law enforcement authorities
                    when required.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Policy Updates
                  </h2>
                  <p>
                    We may update this policy from time to time. Continued use
                    of the app means you accept these updates.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-text-black">
                    This policy applies specifically to the my MINK application
                    available on Google Play.
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
