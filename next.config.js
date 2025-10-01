/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
