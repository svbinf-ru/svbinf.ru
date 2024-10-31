import { Dirent, readdirSync } from 'fs'
import { join } from 'path'

interface NewsEntry {
    title: string
    href: string
    pubDate: string
}

// Next.js не поддерживает символы в кодировке UTF-8 в маршрутизации.
// В том числе не поддерживается кириллица.
// См. также: https://github.com/vercel/next.js/issues/10084
const titleMap = new Map([
    ['2024-10-31_olymp_municipal', 'График районного этапа ВСОШ 2024-2025!'],
    ['2024-09-04_olymp', 'График школьного этапа ВсОШ 2024-2025!'],
    [
        '2024-09-04_competition',
        'II Всероссийский чемпионат по виртуальной робототехнике',
    ],
    ['2024-07-29', 'Как и зачем мы переписали этот сайт'],
])

const direntToNews = (dirent: Dirent): NewsEntry => {
    const pubDate = dirent.name.split('_')[0]

    return {
        title: titleMap.get(dirent.name) ?? `Новости от ${pubDate}`,
        href: `/news/${dirent.name}`,
        pubDate,
    }
}

export const getRecentNews = (): NewsEntry[] => {
    const newsDir = join(process.cwd(), 'app', 'news')

    return readdirSync(newsDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .slice(-15)
        .reverse()
        .map(direntToNews)
}
