import { Metadata } from 'next'

import philipFry from '@/assets/quotes/philip-fry.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Quotation } from '@/components/Quotation'

export const metadata: Metadata = {
    title: 'Достижения',
}

export default function Achievements() {
    return (
        <main>
            <Breadcrumbs
                items={[{ href: '/achievements', label: 'Достижения' }]}
            />
            <Container>
                <h1>Достижения</h1>
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
