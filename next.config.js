/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'out',
    experimental: {
        optimizePackageImports: ['icon-library'],
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true
    },
    swcMinify: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  }
}

module.exports = nextConfig

module.exports = {
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
};