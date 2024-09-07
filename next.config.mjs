/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {// https://tailwindui.com/img/logos/tuple-logo-gray-900.svg
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: 'img/logos'
      },
    ],
  },
};

export default nextConfig;
