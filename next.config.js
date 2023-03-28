/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

module.exports = {
  images: {
    formats: [
      "image/avif",
      "image/webp",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/KaiDevrim/**/*",
      },
      {
        protocol: "https",
        hostname: "githubusercontent.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "",
      },
    ],
    domains: [
      "raw.githubusercontent.com",
      "github.com",
      "githubusercontent.com",
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Resume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
