/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for GoDaddy deployment
  output: 'export',
  // Disable source maps to suppress 404 warnings (optional)
  productionBrowserSourceMaps: false,
  images: {
    // Required for static export - images won't be optimized by Next.js
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    // Allow larger images for icons
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optional: Add trailing slashes to URLs (better for static hosting)
  trailingSlash: true,
}

module.exports = nextConfig

