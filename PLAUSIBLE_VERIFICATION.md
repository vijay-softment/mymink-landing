# Plausible Verification Guide

## Step 1: Choose "Script" Option ✅

When Plausible asks which verification method to use, choose:

- **Script** ← Choose this one!

This is correct because we're using the Plausible script directly in Next.js.

## Step 2: Get Your Verification Code

After choosing "Script", Plausible will provide you with:

1. A verification code (looks like: `abc123xyz456`)
2. A meta tag to add to your site

The meta tag will look like:

```html
<meta name="plausible-verification" content="your-verification-code" />
```

## Step 3: Add Verification Code

### Option A: Using Environment Variable (Recommended)

1. Add to your `.env.local` file:

```bash
NEXT_PUBLIC_PLAUSIBLE_VERIFICATION=your-verification-code-here
```

2. Update `app/layout.tsx` - uncomment and update the `other` section:

```typescript
other: {
  "plausible-verification": process.env.NEXT_PUBLIC_PLAUSIBLE_VERIFICATION || "",
},
```

### Option B: Add Directly to Layout

If you prefer to add it directly (not recommended for production), update `app/layout.tsx`:

```typescript
other: {
  "plausible-verification": "your-verification-code-here",
},
```

## Step 4: Deploy and Verify

1. **Deploy your site** with the verification code
2. **Go back to Plausible dashboard**
3. **Click "Verify"** or wait for automatic verification
4. Plausible will check if the meta tag is present on your site

## Step 5: Confirm It's Working

Once verified:

1. Visit your live site
2. Open browser DevTools → Network tab
3. Look for a request to `plausible.io/js/script.js`
4. Check Plausible dashboard - you should see your domain as "Verified" ✅

## Troubleshooting

### Verification Not Working?

1. **Check the meta tag is present:**

   - Visit your live site
   - View page source (Right-click → View Page Source)
   - Search for "plausible-verification"
   - Make sure the meta tag is in the `<head>` section

2. **Check environment variable:**

   - Make sure `NEXT_PUBLIC_PLAUSIBLE_VERIFICATION` is set
   - Restart your dev server after adding env variables
   - Rebuild and redeploy for production

3. **Check domain matches:**
   - Make sure `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` matches exactly what you added in Plausible
   - No trailing slashes or protocols

### Still Having Issues?

- Make sure you're checking the **live/production** site, not localhost
- Plausible verification only works on the actual domain
- Wait a few minutes after deploying - verification can take a moment

## Quick Checklist

- [ ] Chose "Script" option in Plausible
- [ ] Got verification code from Plausible
- [ ] Added `NEXT_PUBLIC_PLAUSIBLE_VERIFICATION` to `.env.local`
- [ ] Updated `app/layout.tsx` to use the verification code
- [ ] Deployed site
- [ ] Verified meta tag appears in page source
- [ ] Confirmed verification in Plausible dashboard

## Notes

- Verification is only needed once
- After verification, you can remove the verification code if you want (it won't affect tracking)
- The script will work even without verification, but verification confirms you own the domain
