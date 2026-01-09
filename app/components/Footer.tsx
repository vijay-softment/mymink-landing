"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { analytics } from "../lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "X",
      href: "https://twitter.com",
      icon: "/images/twitter.svg",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "/images/facebook.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "/images/instagram.svg",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "/images/linkedin.svg",
    },
  ];

  return (
    <footer className="mt-4" style={{ backgroundColor: "#020202" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/icons.png"
                alt="my MINK logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">my MINK</span>
            </motion.div>
            <p className="text-sm text-gray-400 mb-6">
              Connect. Create. Share.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-all duration-300"
                  aria-label={social.name}
                  style={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="object-contain"
                    style={{
                      width: social.name === "X" ? "18px" : "20px",
                      height: social.name === "X" ? "18px" : "20px",
                      maxWidth: social.name === "X" ? "18px" : "20px",
                      maxHeight: social.name === "X" ? "18px" : "20px",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.downloadAppStore("footer")}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700  py-3 transition-all duration-300 whitespace-nowrap w-full font-serif"
              >
                <svg
                  className="w-5 h-5 text-white flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-sm font-normal text-white">
                  Download on App Store
                </span>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.downloadGooglePlay("footer")}
                className="flex items-center justify-center gap-2 bg-white border border-red-600  py-3 hover:bg-gray-50 transition-all duration-300 whitespace-nowrap w-full font-serif"
              >
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-sm font-normal text-red-600">
                  Get it on Play Store
                </span>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/community-guidelines"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Policies
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/refunds"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/account-deletion"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Account Deletion
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/data-retention"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Data Retention Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/user-consent"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  User Consent & Data Usage
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@mymink.com.au"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  support@mymink.com.au
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed text-left">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners 2008-{currentYear} © my
            MINK™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
