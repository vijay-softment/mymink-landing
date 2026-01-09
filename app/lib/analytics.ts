/**
 * Plausible Analytics Event Tracking
 * Privacy-friendly analytics helper
 */

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number> }
    ) => void;
  }
}

/**
 * Track a custom event in Plausible Analytics
 * @param eventName - The name of the event (e.g., 'download_app_store')
 * @param props - Optional properties to attach to the event
 */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number>
): void {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, props ? { props } : undefined);
  }
}

/**
 * Pre-defined event tracking functions for common actions
 */
export const analytics = {
  downloadAppStore: (location?: string) => {
    trackEvent("download_app_store", location ? { location } : undefined);
  },
  downloadGooglePlay: (location?: string) => {
    trackEvent("download_google_play", location ? { location } : undefined);
  },
  downloadHeaderAppStore: () => {
    trackEvent("download_header_app_store");
  },
  downloadHeaderGooglePlay: () => {
    trackEvent("download_header_google_play");
  },
};
