/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/industries/:path*',
        destination: '/platform/small-business',
        permanent: true,
      },
      {
        source: '/review-platforms/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/enterprise',
        destination: '/pricing/agency',
        permanent: true,
      },
      {
        source: '/affiliate',
        destination: '/',
        permanent: true,
      },
      {
        source: '/demo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gradeus-alternative',
        destination: '/reviewshake-vs-gradeus',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
