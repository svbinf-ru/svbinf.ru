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
                    <header>header</header>
                    {children}
                    <footer>footer</footer>
                </div>
            </body>
        </html>
    )
}
