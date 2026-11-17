import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/arleahlucena",
    assetPrefix: "/arleahlucena/",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;