# Plausible Analytics Setup Guide

## ✅ Implementation Complete

Plausible Analytics has been successfully integrated into your Next.js landing page. This is a privacy-friendly analytics solution that:
- ✅ Doesn't use cookies
- ✅ Complies with GDPR, CCPA, and PECR
- ✅ Lightweight (~1KB script)
- ✅ No personal data collection

## 📋 What's Been Implemented

### 1. Analytics Script Component
- **File**: `app/components/PlausibleScript.tsx`
- Automatically loads Plausible script
- Only loads in production (or when `NEXT_PUBLIC_ENABLE_ANALYTICS` is set)

### 2. Analytics Helper Functions
- **File**: `app/lib/analytics.ts`
- `trackEvent()` - Generic event tracking function
- `analytics.downloadAppStore()` - Track App Store downloads
- `analytics.downloadGooglePlay()` - Track Google Play downloads

### 3. Event Tracking Added To:

#### Home Page (`app/page.tsx`)
- ✅ "Download on App Store" button → `download_app_store` (location: "home_hero")
- ✅ "Get it on Play Store" button → `download_google_play` (location: "home_hero")

#### Download Page (`app/download/page.tsx`)
- ✅ "Download on App Store" button → `download_app_store` (location: "download_page")
- ✅ "Get it on Play Store" button → `download_google_play` (location: "download_page")

#### Footer (`app/components/Footer.tsx`)
- ✅ "Download on App Store" button → `download_app_store` (location: "footer")
- ✅ "Get it on Play Store" button → `download_google_play` (location: "footer")

### 4. Button Component Enhanced
- **File**: `app/components/Button.tsx`
- Added `trackEvent` and `trackProps` props
- Automatically tracks events when buttons are clicked

## 🚀 Setup Instructions

### Step 1: Get Your Plausible Domain

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain (e.g., `mymink.com.au`)
3. Get your domain from the Plausible dashboard

### Step 2: Configure Environment Variables

Create or update `.env.local` file:

```bash
# Your domain (e.g., mymink.com.au)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mymink.com.au

# Your Script ID from Plausible dashboard (after choosing "Script" option)
# Example: pa-h965s2RtoeykD5MzDeZbq
NEXT_PUBLIC_PLAUSIBLE_SCRIPT_ID=pa-h965s2RtoeykD5MzDeZbq
```

**Important:** After choosing "Script" option in Plausible, you'll get a custom script URL like:
```
https://plausible.io/js/pa-h965s2RtoeykD5MzDeZbq.js
```

Extract the script ID (the part after `/js/` and before `.js`): `pa-h965s2RtoeykD5MzDeZbq`

### Step 3: Enable Analytics in Development (Optional)

To test analytics in development, add to `.env.local`:

```bash
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Step 4: Deploy and Verify

1. Deploy your site
2. Visit your site and click download buttons
3. Check Plausible dashboard for events:
   - Go to your Plausible dashboard
   - Click on "Custom Events" or "Goals"
   - You should see:
     - `download_app_store`
     - `download_google_play`

## 📊 Tracked Events

### Event Names:
- `download_app_store` - When user clicks App Store download button
- `download_google_play` - When user clicks Google Play download button

### Event Properties:
Each event includes a `location` property:
- `home_hero` - Home page hero section
- `download_page` - Download page
- `footer` - Footer section

## 🔍 Verifying Events in Plausible

1. **Login to Plausible Dashboard**
2. **Navigate to "Goals" or "Custom Events"**
3. **Look for these events:**
   - `download_app_store`
   - `download_google_play`
4. **Filter by location property** to see where clicks are coming from

## 🎯 Additional Tracking (Optional)

### Track Scroll Depth

To add scroll depth tracking, you can add this to any page:

```typescript
"use client";

import { useEffect } from "react";
import { trackEvent } from "./lib/analytics";

export default function YourPage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track at 25%, 50%, 75%, 100%
      if ([25, 50, 75, 100].includes(scrollPercent)) {
        trackEvent("scroll_depth", { percent: scrollPercent });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ... rest of your component
}
```

### Track CTA Button Clicks

For any other CTA buttons, use the Button component with tracking:

```tsx
<Button
  href="/some-page"
  trackEvent="cta_click"
  trackProps={{ button_name: "signup" }}
>
  Sign Up
</Button>
```

Or use the helper directly:

```tsx
import { trackEvent } from "./lib/analytics";

<a 
  href="/some-page"
  onClick={() => trackEvent("cta_click", { button_name: "signup" })}
>
  Sign Up
</a>
```

## 🔒 Privacy Features

Plausible Analytics is privacy-friendly by design:
- ✅ No cookies used
- ✅ No personal data collected
- ✅ GDPR compliant
- ✅ CCPA compliant
- ✅ PECR compliant
- ✅ Lightweight (~1KB)
- ✅ Open source

## 📝 Notes

- Analytics only loads in production by default
- To test in development, set `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
- Events are tracked before navigation (so they're captured even if user leaves)
- All tracking is done client-side

## ✅ Checklist

- [x] Plausible script component created
- [x] Analytics helper functions created
- [x] Home page download buttons tracked
- [x] Download page buttons tracked
- [x] Footer download buttons tracked
- [x] Button component enhanced with tracking
- [ ] Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` environment variable
- [ ] Deploy and verify events in Plausible dashboard

## 🆘 Troubleshooting

### Events not showing in Plausible?

1. **Check domain configuration**: Make sure `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` matches your Plausible domain
2. **Check script loading**: Open browser DevTools → Network tab → Look for `plausible.io/js/script.js`
3. **Check console**: Look for any JavaScript errors
4. **Verify production mode**: Analytics only loads in production unless `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
5. **Check Plausible dashboard**: Events may take a few seconds to appear

### Script not loading?

- Make sure you're in production mode OR `NEXT_PUBLIC_ENABLE_ANALYTICS=true` is set
- Check browser console for errors
- Verify the domain is correctly configured in Plausible

## 📚 Resources

- [Plausible Documentation](https://plausible.io/docs)
- [Plausible Custom Events](https://plausible.io/docs/custom-event-goals)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)
