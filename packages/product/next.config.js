const withTM = require('next-transpile-modules')(['@10x/foundation']);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
};

module.exports = withTM(nextConfig);
