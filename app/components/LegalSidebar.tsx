"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LegalSidebar() {
  const pathname = usePathname();

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/community-guidelines", label: "Community Guidelines" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ];

  const policyLinks = [
    { href: "/refunds", label: "Refund Policy" },
    { href: "/account-deletion", label: "Account Deletion" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/data-retention", label: "Data Retention & Deletion Policy" },
    { href: "/gdpr", label: "GDPR Compliance" },
    { href: "/user-consent", label: "User Consent & Data Usage" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/download", label: "Download" },
  ];

  const supportLinks = [
    { href: "mailto:support@mymink.com.au", label: "support@mymink.com.au", isExternal: true },
    { href: "/help", label: "Help & Support" },
  ];

  const renderLink = (link: { href: string; label: string; isExternal?: boolean }) => {
    const isActive = pathname === link.href;
    const className = `block px-4 py-2 text-sm transition-colors duration-200 ${
      isActive
        ? "bg-gray-200 text-text-black font-medium"
        : "text-text-darkGrey hover:bg-gray-100 hover:text-text-black"
    }`;

    if (link.isExternal) {
      return (
        <a
          key={link.href}
          href={link.href}
          className={className}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className={className}
        scroll={false}
        onClick={() => {
          // Manually scroll to top after navigation to avoid Next.js warning
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }, 0);
        }}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-16 space-y-6">
        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-text-black mb-4 px-4">
            Legal
          </h3>
          <nav className="space-y-1">
            {legalLinks.map(renderLink)}
          </nav>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-sm font-semibold text-text-black mb-4 px-4">
            Policies
          </h3>
          <nav className="space-y-1">
            {policyLinks.map(renderLink)}
          </nav>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-text-black mb-4 px-4">
            Company
          </h3>
          <nav className="space-y-1">
            {companyLinks.map(renderLink)}
          </nav>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-text-black mb-4 px-4">
            Support
          </h3>
          <nav className="space-y-1">
            {supportLinks.map(renderLink)}
          </nav>
        </div>
      </div>
    </aside>
  );
}
