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
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
    },
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
};

module.exports = nextConfig;
