import { Metadata } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
    title: 'Перечень сыщиков лицея',
}

export default function Secrets() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/secrets', label: 'Пасхалки' }]} />
            <Container>
                <h1>Перечень сыщиков лицея</h1>
                {/* TODO: add quote */}
            </Container>
        </main>
    )
}
