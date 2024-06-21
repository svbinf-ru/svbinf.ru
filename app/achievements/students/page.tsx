import { Metadata } from 'next'
import { Suspense } from 'react'

import { AchievementsList } from '@/components/AchievementsList'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { students } from '@/content/achievements/students'

export const metadata: Metadata = {
    title: 'Достижения учеников',
}

export default function Achievements() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/achievements', label: 'Достижения' },
                    { href: '/achievements/students', label: 'Ученики' },
                ]}
            />
            <Container>
                <h1>Достижения учеников</h1>
                <Suspense>
                    <AchievementsList achievements={students} />
                </Suspense>
            </Container>
        </main>
    )
}
