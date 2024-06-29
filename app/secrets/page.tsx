import { Metadata } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CardLink } from '@/components/CardLink'
import { Container } from '@/components/Container'
import { secrets } from '@/content/secrets/secrets'

export const metadata: Metadata = {
    title: 'Перечень сыщиков лицея',
}

export default function Secrets() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/secrets', label: 'Пасхалки' }]} />
            <Container>
                <h1>Перечень сыщиков лицея</h1>
                {secrets.map((s, i) => (
                    <CardLink
                        key={i}
                        href={s.href}
                        target="_blank"
                        image={s.picture}
                        imageAlt={`Пасхалка ${i + 1}`}
                        imagePosition={i % 2 == 0 ? 'left' : 'right'}
                        imageWidth={256}
                        imageHeight={256}
                    >
                        <h2>{s.title}</h2>
                        <p>{s.description}</p>
                    </CardLink>
                ))}
                {/* TODO: add quote */}
            </Container>
        </main>
    )
}
