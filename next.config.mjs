const nextConfig = {
  reactStrictMode: false,
  images: {
    // Keep the contact hero crisp at the 1920px Figma width.
    qualities: [90],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
