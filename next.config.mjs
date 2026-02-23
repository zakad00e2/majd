/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // TODO: Remove unoptimized when using real jpg/png images
    unoptimized: true,
  },
};

export default nextConfig;
