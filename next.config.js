/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
            source: '/across/available-routes',
            destination: 'https://across.to/api/available-routes',
        },
        {
            source: '/across/limits/:path*',
            destination: 'https://across.to/api/limits/:path*',
        },
        {
            source: '/across/suggested-fees/:path*',
            destination: 'https://across.to/api/suggested-fees/:path*',
        },
    ]
}

module.exports = nextConfig
