import '@/styles/_globals.scss'

import { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { CSSProperties } from 'react'

import background from '@/assets/blurry-gradient.png'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import styles from './layout.module.scss'

export const metadata: Metadata = {
    metadataBase: new URL('https://svbinf.ru'),
    title: {
        template: '%s | Вадим Борисович',
        default: 'Вадим Борисович',
    },
    description:
        'Сайт учителя информатики Вадима Борисовича Скотникова. Здесь вы можете узнать информацию об олимпиадах, скачать полезные материалы, найти ссылки на интересные сайты, программы и статьи. А также можете найти секретные послания.',
    applicationName: 'Вадим Борисович',
    keywords: [
        'Education',
        'Computer Science',
        'IT',
        'Преподавание',
        'Информатика',
        'ИКТ',
        'Компьютеры',
    ],
    publisher: 'Cloudflare',
    twitter: {
        card: 'summary_large_image',
    },
    manifest: '/manifest.json',
}

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
