/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV === 'development' 

const nextConfig = {
  output: isDevelopment ? '' : "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.MEDIA_URL,
      },
    ],
  },
  basePath: isDevelopment ? '' : "/grande-avenida",
  staticPageGenerationTimeout: 10000,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

module.exports = nextConfig;