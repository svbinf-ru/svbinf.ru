// @ts-check

import withMDX from '@next/mdx'
import withPWA from 'next-pwa'
import remarkGfm from 'remark-gfm'

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
    images: {
        unoptimized: true,
    },
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    sassOptions: {
        includePaths: ['styles'],
    },
})

nextConfig.apply(withPWA({ dest: 'public' }))
nextConfig.apply(
    withMDX({
        options: {
            remarkPlugins: [remarkGfm],
        },
    }),
)

export default nextConfig.configuration()
