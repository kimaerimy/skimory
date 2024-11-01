import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tmzfpwbyzhlpdzjvdnbf.supabase.co",
        pathname: "/storage/v1/object/public/photos/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // SVG를 React 컴포넌트로 변환
    });

    return config;
  },
};

export default nextConfig;
