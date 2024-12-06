/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tharunrajeev.github.io"],
  },
  output: 'export', // Enables static site export
  basePath: '/Pokedex', // Replace <repository-name> with your GitHub repo name
  assetPrefix: '/Pokedex', // Ensures correct paths for assets
};

module.exports = nextConfig;
