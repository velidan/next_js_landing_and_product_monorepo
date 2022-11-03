const withTM = require('next-transpile-modules')(['@10x/foundation']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = withTM(nextConfig);
