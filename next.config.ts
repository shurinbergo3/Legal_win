import path from 'node:path';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'standalone',
  // Pin the workspace root. Without it a stray lockfile anywhere up the tree
  // makes Next guess a parent directory as the root, which silently changes
  // what gets traced into the standalone build.
  turbopack: { root: __dirname },
  outputFileTracingRoot: path.resolve(__dirname),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 1080, 1200, 1920],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.legalwin.pl' }
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.legalwin.pl' }],
        destination: 'https://legalwin.pl/:path*',
        permanent: true
      },
      { source: '/eng', destination: '/en', permanent: true },
      { source: '/eng/:path*', destination: '/en/:path*', permanent: true },
      {
        source: '/apple-touch-icon-precomposed.png',
        destination: '/apple-touch-icon.png',
        permanent: true
      },
      // Browsers and link scrapers still probe /favicon.ico blindly; without
      // this every such probe is a logged 404.
      { source: '/favicon.ico', destination: '/favicon-32.png', permanent: true },
      {
        source: '/files/policy_20250410151644.pdf',
        destination: '/ru/polityka-prywatnosci',
        permanent: true
      },
      { source: '/tr/uslugi/business', destination: '/tr', permanent: true }
    ];
  }
};

export default withNextIntl(nextConfig);
