"use client";

import Script from "next/script";

/**
 * Plausible Analytics Script Component
 *
 * Configuration:
 * 1. Add NEXT_PUBLIC_PLAUSIBLE_DOMAIN to .env.local (e.g., "mymink.com.au")
 * 2. Add NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID to .env.local (from Plausible dashboard)
 *    Example: "pa-h965s2RtoeykD5MzDeZbq"
 */
const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "mymink.com.au";
const PLAUSIBLE_SCRIPT_ID = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID;

export default function PlausibleScript() {
  // Only load in production or if explicitly enabled
  if (
    process.env.NODE_ENV !== "production" &&
    !process.env.NEXT_PUBLIC_ENABLE_ANALYTICS
  ) {
    return null;
  }

  // Use custom script URL if script ID is provided, otherwise use default
  const scriptSrc = PLAUSIBLE_SCRIPT_ID
    ? `https://plausible.io/js/${PLAUSIBLE_SCRIPT_ID}.js`
    : "https://plausible.io/js/script.js";

  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={PLAUSIBLE_DOMAIN}
        src={scriptSrc}
      />
      {PLAUSIBLE_SCRIPT_ID && (
        <Script
          id="plausible-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments);
              };
              plausible.init = plausible.init || function(i) {
                plausible.o = i || {};
              };
              plausible.init();
            `,
          }}
        />
      )}
    </>
  );
}
