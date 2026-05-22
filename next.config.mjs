/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      (process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:5002/api"
        : "https://lexvaro-backend.onrender.com/api"),
    NEXT_PUBLIC_WHATSAPP_PHONE: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "917306203782",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "localhost" },
    ],
    formats: ["image/avif", "image/webp"],
    // Limit simultaneous image optimizations
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  // Reduce JS payload — remove console.* in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Faster builds + smaller output
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "@radix-ui/react-icons",
      "framer-motion",
    ],
  },
};

export default nextConfig;
