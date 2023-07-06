/** @type {import('next').NextConfig} */
const nextConfig = {
 
  trailingSlash: true,
  
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
