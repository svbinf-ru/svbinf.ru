import { Metadata } from 'next'

import alanTuring from '@/assets/quotes/alan-turing.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Quotation } from '@/components/Quotation'

export const metadata: Metadata = {
    title: 'Экзамены',
}

export default function Exams() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/exams', label: 'Экзамены' }]} />
            <Container>
                <h1>Экзамены</h1>
                <Quotation
                    quote="Те, кто могут что-то представить, способны сотворить невозможное."
                    author="Алан Тьюринг"
                    picture={alanTuring}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
