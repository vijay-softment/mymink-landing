# GoDaddy Deployment Guide

## Option 1: Static Export (Recommended for Shared Hosting)

If your GoDaddy plan only supports static files (HTML, CSS, JS), use this method.

### Step 1: Update `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true, // Optional: adds trailing slashes to URLs
};

module.exports = nextConfig;
```

### Step 2: Build Static Files

```bash
npm run build
```

This will create a `out` folder with all static HTML, CSS, and JS files.

### Step 3: Upload to GoDaddy

1. **Connect via FTP/SFTP** or use GoDaddy's File Manager
2. **Upload the entire `out` folder contents** to your domain's `public_html` folder
3. **Make sure `index.html` is in the root** of `public_html`

### Step 4: Test Your Site

Visit your domain to verify everything works.

---

## Option 2: Node.js Hosting (If GoDaddy Supports Node.js)

If your GoDaddy plan supports Node.js (cPanel with Node.js or Managed WordPress with Node.js), use this method.

### Step 1: Update `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Creates minimal production build
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
```

### Step 2: Build for Production

```bash
npm run build
```

This creates a `.next/standalone` folder with the minimal build.

### Step 3: Upload to GoDaddy

1. **Upload the `.next/standalone` folder** to your server
2. **Upload `public` folder** to the same location
3. **Upload `package.json`** (production dependencies only)
4. **Create a `server.js` or use the built-in Next.js server**

### Step 4: Install Dependencies and Start

```bash
npm install --production
npm start
```

---

## Quick Start: Static Export (Most Common)

### 1. Update Config

Update `next.config.js` to enable static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
```

### 2. Build

```bash
npm run build
```

### 3. Upload

Upload everything from the `out` folder to GoDaddy's `public_html` folder.

---

## Important Notes

### For Static Export:

- ✅ Works on any hosting (shared hosting, static hosting)
- ✅ No server required
- ⚠️ Images won't be optimized by Next.js (but still work)
- ⚠️ Sitemap will be static (generated at build time)
- ⚠️ No server-side features

### For Node.js Hosting:

- ✅ Full Next.js features
- ✅ Image optimization works
- ✅ Dynamic sitemap
- ⚠️ Requires Node.js support on GoDaddy
- ⚠️ More complex setup

---

## Troubleshooting

### 404 Errors on Routes

- Make sure you uploaded all files from the `out` folder
- Check that `.htaccess` is configured (if using Apache)
- Verify file permissions

### Images Not Loading

- For static export, images are copied to `out` folder automatically
- Check that `public` folder contents are in the right location

### Environment Variables

- For static export, only `NEXT_PUBLIC_*` variables work
- Make sure to set them before building
- They're embedded in the JavaScript bundle

---

## Recommended: Static Export

For GoDaddy shared hosting, **static export is recommended** because:

1. Works on all GoDaddy plans
2. Simple upload process
3. Fast loading (pre-rendered HTML)
4. No server configuration needed
