import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "u9a6wmr3as.ufs.sh",
      },
      {
        hostname: "scontent.fvdc4-1.fna.fbcdn.net",
      },
      {
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
