import Link from 'next/link'

import linusTorvalds from '@/assets/quotes/linus-torvalds.webp'
import { BellTimetable } from '@/components/BellTimetable'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Quotation } from '@/components/Quotation'

export default function Schedule() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/schedule', label: 'Расписание' }]} />
            <Container>
                <h1>Расписание и звонки</h1>
                <p>
                    Скачать{' '}
                    <Link
                        href="/static/img/schedule/bell-timetable-vertical.png"
                        target="_blank"
                        download="расписание вертикальное.png"
                    >
                        вертикальное
                    </Link>{' '}
                    или{' '}
                    <Link
                        href="/static/img/schedule/bell-timetable-horizontal.png"
                        target="_blank"
                        download="расписание горизонтальное.png"
                    >
                        горизонтальное
                    </Link>{' '}
                    расписание звонков.
                </p>
                <BellTimetable />
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
