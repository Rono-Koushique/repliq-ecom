/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["i.dummyjson.com", "source.unsplash.com"],
    },
};

module.exports = nextConfig;
