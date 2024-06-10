import '@/styles/_globals.scss'

import { Raleway } from 'next/font/google'

import { Header } from '@/components/Header'

import styles from './layout.module.scss'

const raleway = Raleway({ subsets: ['cyrillic'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body className={raleway.className}>
                <div className={styles.wrapper}>
                    <Header />
                    {children}
                    <footer>footer</footer>
                </div>
            </body>
        </html>
    )
}
