/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 hours
    dangerouslyAllowSVG: false,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Fix for mobile network access
  allowedDevOrigins: ['192.168.1.46'],
  
  // Mobile performance optimizations
  experimental: {
    // Enable modern bundling for better mobile performance
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
