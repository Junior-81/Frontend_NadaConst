const nextConfig = {
  experimental: {
    turbo: {
      enabled: false,
    },
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/pages/:path*",
      },
    ];
  },
};

export default nextConfig;
