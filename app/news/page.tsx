import { Metadata } from 'next'

import marisaKirisame from '@/assets/quotes/marisa-kirisame.webp'
import { NewsEntry } from '@/components/NewsEntry'
import { Quotation } from '@/components/Quotation'

import { getRecentNews } from './utils'

export const metadata: Metadata = {
    title: 'Новости',
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
            <Quotation
                quote="Это не магия, если не сверкает. Суть даммаку в огневой мощи."
                author="Мариса Кирисаме"
                picture={marisaKirisame}
                pictureWidth={256}
                pictureHeight={256}
            />
        </>
    )
}
