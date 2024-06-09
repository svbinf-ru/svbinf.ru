import '@/styles/_globals.scss'

import Header from '@/components/Header'

import styles from './layout.module.scss'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className={styles.fullHeight} lang="en">
            <body className={styles.fullHeight}>
                <div className={styles.wrapper}>
                    <Header />
                    {children}
                    <footer>footer</footer>
                </div>
            </body>
        </html>
    )
}
