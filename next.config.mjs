import withPWAFactory from 'next-pwa'

const withPWA = withPWAFactory({
    dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    sassOptions: {
        includePaths: ['styles'],
    },
})

export default nextConfig
