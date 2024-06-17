import Link from 'next/link'
import { FC } from 'react'

import styles from './styles.module.scss'

interface Props {
    title: string
    pubDate: string
    href: string
}

export const NewsEntry: FC<Props> = ({ title, pubDate, href }) => {
    return (
        <figure className={styles.entry}>
            <Link href={href}>
                <h3>{title}</h3>
            </Link>
            <figcaption>
                Опубликовано:{' '}
                <time dateTime={pubDate}>
                    {new Date(pubDate).toLocaleDateString('ru')}
                </time>
            </figcaption>
        </figure>
    )
}
