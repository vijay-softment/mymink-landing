import type { Metadata } from "next";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read my MINK's Refund Policy to understand our refund process for memberships and purchases. Operated by Takemade Pty Ltd.",
  openGraph: {
    title: "Refund Policy | my MINK",
    description:
      "Read my MINK's Refund Policy to understand our refund process for memberships and purchases.",
    url: "https://mymink.com.au/refunds",
    type: "website",
  },
  alternates: {
    canonical: "https://mymink.com.au/refunds",
  },
};

export default function Refunds() {
  return (
    <>
      <LegalPageHeader title="Refund Policy" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Header Info */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Refund Policy
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
                    1. Overview
                  </h2>
                  <p>
                    my MINK allows users to support creators and unlock premium features through in-app purchases and third-party payment providers. This policy explains how payments, fees, refunds, and disputes are handled.
                  </p>
                  <p className="mt-4">
                    By making a payment on my MINK, you agree to this policy.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    2. Payment Methods
                  </h2>
                  <p className="mb-2">my MINK uses secure third-party providers to process all payments:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li><strong>Stripe</strong> – for Buy Me a Coffee and creator tips</li>
                    <li><strong>Apple App Store</strong> – for iOS premium purchases</li>
                    <li><strong>Google Play Store</strong> – for Android premium purchases</li>
                    <li><strong>RevenueCat</strong> – for managing premium memberships</li>
                  </ul>
                  <p className="mt-4">
                    my MINK does not store or process credit card numbers directly.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    3. Buy Me a Coffee
                  </h2>
                  <p>
                    Buy Me a Coffee allows users to support creators with small payments.
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    What happens when you send a coffee:
                  </h3>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>You choose the number of coffees</li>
                    <li>The total amount is charged via Stripe</li>
                    <li>The creator receives the funds minus fees</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-black mt-6 mb-3">
                    Platform Fee
                  </h3>
                  <p>
                    my MINK charges a <strong>platform service fee</strong> on each transaction. Stripe processing fees also apply.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    4. Premium Memberships
                  </h2>
                  <p>
                    Premium memberships unlock additional features in my MINK.
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Payments are processed through Apple or Google</li>
                    <li>Managed by RevenueCat</li>
                    <li>One-time or subscription based depending on product</li>
                  </ul>
                  <p className="mt-4">
                    All billing, invoices, and refunds are handled by the app store used to make the purchase.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    5. Refunds – Buy Me a Coffee
                  </h2>
                  <p>
                    Coffee tips are considered <strong>voluntary digital donations</strong> to creators.
                  </p>
                  <p className="mt-4">
                    Refunds are not guaranteed.
                  </p>
                  <p className="mt-4 mb-2">However, refunds may be considered if:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>A technical error occurred</li>
                    <li>The payment was duplicated</li>
                    <li>Fraud is suspected</li>
                  </ul>
                  <p className="mt-4">
                    Refunds are processed by Stripe and may take several business days.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    6. Refunds – Premium Memberships
                  </h2>
                  <p>
                    Premium membership purchases follow the policies of:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Apple App Store</li>
                    <li>Google Play Store</li>
                  </ul>
                  <p className="mt-4">
                    To request a refund, users must contact the store directly:
                  </p>
                  <ul className="list-disc space-y-1 ml-6 mt-2">
                    <li>Apple: <a href="https://reportaproblem.apple.com" className="text-primary-red hover:underline" target="_blank" rel="noopener noreferrer">https://reportaproblem.apple.com</a></li>
                    <li>Google: <a href="https://support.google.com/googleplay" className="text-primary-red hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/googleplay</a></li>
                  </ul>
                  <p className="mt-4">
                    my MINK cannot issue refunds for app store purchases.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    7. Failed or Reversed Payments
                  </h2>
                  <p className="mb-2">If a payment fails, is reversed, or charged back:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Access to premium features may be removed</li>
                    <li>Creator payouts may be adjusted</li>
                    <li>The account may be restricted in cases of abuse</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    8. Taxes & Currency
                  </h2>
                  <p>
                    Payments may be charged in your local currency.
                  </p>
                  <p className="mt-4">
                    Taxes (VAT, GST, etc.) may be applied based on your location.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    9. Creator Payouts
                  </h2>
                  <p>
                    Creators receive their earnings through Stripe.
                  </p>
                  <p className="mt-4 mb-2">my MINK is not responsible for:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Bank delays</li>
                    <li>Stripe verification issues</li>
                    <li>Local tax obligations</li>
                  </ul>
                  <p className="mt-4">
                    Creators are responsible for their own tax reporting.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    10. Fraud & Abuse
                  </h2>
                  <p className="mb-2">We reserve the right to suspend or terminate accounts involved in:</p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>Chargebacks</li>
                    <li>Payment fraud</li>
                    <li>Abuse of the tipping system</li>
                    <li>Refund exploitation</li>
                  </ul>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    11. Changes
                  </h2>
                  <p>
                    We may update this policy at any time.
                  </p>
                  <p className="mt-4">
                    The latest version will always be available on our website and app.
                  </p>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    12. Contact
                  </h2>
                  <p>
                    For payment or billing questions:
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
