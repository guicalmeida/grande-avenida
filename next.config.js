/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.MEDIA_URL,
      },
    ],
  },
};

module.exports = nextConfig;
