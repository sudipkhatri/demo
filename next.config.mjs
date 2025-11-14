/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React 19 support
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum quality (1-100)
    minimumCacheTTL: 60,
    // Allow external domains if needed (add your CDN domains here)
    remotePatterns: [],
    // Disable static image import optimization warnings
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Turbopack is default in Next.js 16
  turbopack: {
    resolveAlias: {
      // Resolve workspace root warning
    },
  },
};

export default nextConfig;
