import { Metadata } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'

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
            </Container>
        </main>
    )
}
