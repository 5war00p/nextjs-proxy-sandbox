/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => [
        {
            source: '/across/:path*',
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" },
            ]
        }
    ],
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
        {
            source: '/across/deposits/:path*',
            destination: 'https://api.across.to/deposits/:path*',
        },
        {
            source: '/across/deposits/details/:path*',
            destination: 'https://api.across.to/deposits/details/:path*',
        },
    ]
}

module.exports = nextConfig
