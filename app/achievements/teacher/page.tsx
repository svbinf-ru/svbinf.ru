import { Metadata } from 'next'
import { Suspense } from 'react'

import philipFry from '@/assets/quotes/philip-fry.webp'
import { AchievementsList } from '@/components/AchievementsList'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Quotation } from '@/components/Quotation'
import { teacher } from '@/content/achievements/teacher'

export const metadata: Metadata = {
    title: 'Мои достижения',
}

export default function Achievements() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/achievements', label: 'Достижения' },
                    { href: '/achievements/teacher', label: 'Мои' },
                ]}
            />
            <Container>
                <h1>Мои достижения</h1>
                <Suspense>
                    <AchievementsList achievements={teacher} />
                </Suspense>
                <Quotation
                    quote="Нет ничего невозможного, если ты можешь это вообразить. Это и означает быть учёным."
                    author="Филипп Дж. Фрай"
                    picture={philipFry}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
