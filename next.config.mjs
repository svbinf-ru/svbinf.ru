// @ts-check

import withMDX from '@next/mdx'
import withPWA from 'next-pwa'

class NextConfig {
    constructor(config) {
        this.config = config
    }

    apply(withFunc) {
        this.config = withFunc(this.config)
    }

    configuration() {
        return this.config
    }
}

const nextConfig = new NextConfig({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    sassOptions: {
        includePaths: ['styles'],
    },
})

nextConfig.apply(withPWA({ dest: 'public' }))
nextConfig.apply(withMDX())

export default nextConfig.configuration()
