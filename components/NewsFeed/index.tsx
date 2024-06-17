import Link from 'next/link'
import { FC } from 'react'

import { getRecentNews } from '@/app/news/utils'
import { Container } from '@/components/Container'
import { NewsEntry } from '@/components/NewsEntry'

import styles from './styles.module.scss'

export const NewsFeed: FC = () => {
    return (
        <Container>
            <h2>Новости</h2>
            <NewsEntry {...getRecentNews()[0]} />
            <Link className={styles.link} href="/news">
                Все новости
            </Link>
        </Container>
    )
}
