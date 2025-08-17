/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "build",
    experimental: {
        optimizePackageImports: ["icon-library"],
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true,
    },
    swcMinify: true,
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
};

module.exports = nextConfig;
