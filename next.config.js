/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com', 'pbs.twimg.com', 'cdn.jsdelivr.net']
    },
    async headers(){
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*'
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'POST'
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
