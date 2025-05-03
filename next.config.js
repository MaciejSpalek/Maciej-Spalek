/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "spwrtt.usermd.net"],
  },
};

module.exports = nextConfig;
