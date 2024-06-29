import { Metadata } from 'next'
import Link from 'next/link'

import linusTorvalds from '@/assets/quotes/linus-torvalds.webp'
import consultations from '@/assets/schedule/consultations.webp'
import { BellTimetable } from '@/components/BellTimetable'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CardLink } from '@/components/CardLink'
import { Container } from '@/components/Container'
import { Quotation } from '@/components/Quotation'

export const metadata: Metadata = {
    title: 'Расписание и звонки',
}

export default function Schedule() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/schedule', label: 'Расписание' }]} />
            <Container>
                <h1>Расписание и звонки</h1>
                <p>
                    Скачать{' '}
                    <Link
                        href="/img/schedule/bell-timetable-vertical.png"
                        target="_blank"
                        download="расписание вертикальное.png"
                    >
                        вертикальное
                    </Link>{' '}
                    или{' '}
                    <Link
                        href="/img/schedule/bell-timetable-horizontal.png"
                        target="_blank"
                        download="расписание горизонтальное.png"
                    >
                        горизонтальное
                    </Link>{' '}
                    расписание звонков.
                </p>
                <BellTimetable />
                <CardLink
                    href="https://xn--_____-4vebdbp0abgazhnfyk0cngb6a0ag7bf30bwa6b/"
                    target="_blank"
                    image={consultations}
                    imageAlt="Консультации"
                    imageWidth={256}
                    imageHeight={256}
                >
                    <h2>Консультации</h2>
                    <p>
                        Консультации проходят по предворительной договорённости.
                    </p>
                </CardLink>
                <Quotation
                    quote="Интеллект — это способность избегать выполнения работы, но так, чтобы она при этом была сделана."
                    author="Линус Торвальдс"
                    picture={linusTorvalds}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
