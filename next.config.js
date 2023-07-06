/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
