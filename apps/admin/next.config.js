/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@listify/shared'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
