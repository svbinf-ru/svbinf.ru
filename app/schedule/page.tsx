import Link from 'next/link'

import { BellTimetable } from '@/components/BellTimetable'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'

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
            </Container>
        </main>
    )
}
