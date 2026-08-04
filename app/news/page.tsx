import { Metadata } from 'next'

import { NewsEntry } from '@/components/NewsEntry'

import { getRecentNews } from './utils'

export const metadata: Metadata = {
    title: 'Новости',
    robots: {
        index: false,
        follow: false,
    },
}

export default function News() {
    return (
        <>
            <h1>Последние новости</h1>
            {getRecentNews().map((entry) => (
                <NewsEntry
                    key={entry.href}
                    title={entry.title}
                    href={entry.href}
                    pubDate={entry.pubDate}
                />
            ))}
        </>
    )
}
