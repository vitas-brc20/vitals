/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '.',
    output: 'export',
    trailingSlash: true,
    optimizeFonts: true,
    images: {
        disableStaticImages: false,
        formats: ['image/avif', 'image/webp'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'devcdn.vitals.io',
            },
            {
                protocol: 'https',
                hostname: 'cdn.vitals.io',
            },
        ],
    },
};
export default nextConfig;
