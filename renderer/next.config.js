/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: false,
  experimental: {
    transpilePackages: ["ui"],
  },

  i18n: {
    locales: ['en', 'fr'], // Langues prises en charge
    defaultLocale: 'en', // Langue par défaut
  },

  images: { domains: ['*'] },
  webpack: (config) => {
    return config
  },
}
