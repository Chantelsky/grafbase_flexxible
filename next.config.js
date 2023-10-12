/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res-cloundinary.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['cloudinary', 'graphql-request'],
  },
};

module.exports = nextConfig;
