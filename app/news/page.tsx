import Link from 'next/link'

import { getRecentNews } from './utils'

export default function News() {
    return (
        <>
            <h1>Последние новости</h1>
            {getRecentNews().map((entry) => (
                <Link key={entry.title} href={entry.relLink}>
                    <div>{entry.title}</div>
                </Link>
            ))}
        </>
    )
}
