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
        <nav
            className={`${nunito.className} ${styles.breadcrumbs}`}
            itemScope
            itemType="https://schema.org/BreadcrumbList"
        >
            <div className={styles.container} data-hoverable={true}>
                <Link className={styles.link} href="/">
                    <Home size={20} />
                </Link>
            </div>
            {items.map((item, index) => (
                <div
                    className={styles.item}
                    itemScope
                    itemProp="itemListElement"
                    itemType="https://schema.org/ListItem"
                    key={item.href}
                >
                    <div className={styles.container}>
                        <ChevronRight className={styles.separator} size={20} />
                    </div>
                    <div className={styles.container} data-hoverable={true}>
                        <Link
                            itemProp="item"
                            className={styles.link}
                            href={item.href}
                        >
                            <span itemProp="name">{item.label}</span>
                            <meta
                                itemProp="position"
                                content={`${index + 1}`}
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </nav>
    )
}
