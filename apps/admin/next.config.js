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
    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion', 'sonner'],
    },
};
module.exports = nextConfig;
