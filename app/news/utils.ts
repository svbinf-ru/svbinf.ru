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
    ['2024-09-04', 'График школьного этапа ВсОШ 2024-2025!'],
    ['2024-07-29-olymp', 'Как и зачем мы переписали этот сайт'],
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
