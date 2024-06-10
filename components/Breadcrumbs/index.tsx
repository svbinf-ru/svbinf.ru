import { ChevronRight, Home } from 'lucide-react'
import { Nunito } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import styles from './styles.module.scss'

interface Item {
    label: string
    href: string
}

interface Props {
    items: Item[]
}

const nunito = Nunito({ subsets: ['cyrillic'] })

export const Breadcrumbs: FC<Props> = ({ items }) => {
    return (
        <nav className={`${nunito.className} ${styles.breadcrumbs}`}>
            <div className={styles.container} data-hoverable={true}>
                <Link className={styles.link} href="/">
                    <Home size={20} />
                </Link>
            </div>
            {items.map((item) => (
                <div className={styles.item} key={item.href}>
                    <div className={styles.container}>
                        <ChevronRight className={styles.separator} size={20} />
                    </div>
                    <div className={styles.container} data-hoverable={true}>
                        <Link className={styles.link} href={item.href}>
                            {item.label}
                        </Link>
                    </div>
                </div>
            ))}
        </nav>
    )
}
