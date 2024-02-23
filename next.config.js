/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.MEDIA_URL,
      },
    ],
  },
  staticPageGenerationTimeout: 10000,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

module.exports = nextConfig;