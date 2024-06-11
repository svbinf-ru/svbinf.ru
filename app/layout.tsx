import '@/styles/_globals.scss'

import { Raleway } from 'next/font/google'
import { CSSProperties } from 'react'

import background from '@/assets/blurry-gradient.png'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import styles from './layout.module.scss'

const raleway = Raleway({ subsets: ['cyrillic'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const bodyCss: CSSProperties = {
        backgroundImage: `url('${background.src}')`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <html lang="ru">
            <body className={raleway.className} style={bodyCss}>
                <div className={styles.wrapper}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
