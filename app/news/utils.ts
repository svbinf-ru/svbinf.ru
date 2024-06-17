import { Dirent, readdirSync } from 'fs'

interface NewsEntry {
    title: string
    href: string
    pubDate: string
}

// Next.js не поддерживает символы в кодировке UTF-8 в маршрутизации.
// В том числе не поддерживается кириллица.
// См. также: https://github.com/vercel/next.js/issues/10084
const titleMap = new Map([['2024-06-17_the-first-post', 'Первый пост']])

const direntToNews = (dirent: Dirent): NewsEntry => {
    const [pubDate, title] = dirent.name.split('_')
    const capitilizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    const fallbackTitle = capitilizedTitle.split('-').join(' ')

    return {
        title: titleMap.get(dirent.name) ?? fallbackTitle,
        href: `/news/${dirent.name}`,
        pubDate,
    }
}

export const getRecentNews = (): NewsEntry[] => {
    return readdirSync(__dirname, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .slice(0, 15)
        .map(direntToNews)
}
