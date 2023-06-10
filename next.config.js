/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com', 'pbs.twimg.com']
    },
    async headers(){
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://frame-it-app.vercel.app/'
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
