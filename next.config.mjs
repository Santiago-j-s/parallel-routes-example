/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prd.place",
        port: "",
      },
    ],
  },
};

export default nextConfig;
