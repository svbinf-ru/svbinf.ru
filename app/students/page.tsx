import { Metadata } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CardLink } from '@/components/CardLink'
import { Container } from '@/components/Container'
import { students } from '@/content/students/students'
import { GridTwoColumns } from '@/components/GridTwoColumns'

export const metadata: Metadata = {
    title: 'Ученики',
}

export default function Secrets() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/students', label: 'Ученики' }]} />
            <Container>
                <h1>Мои ученики</h1>
                <GridTwoColumns>
                    {students.map((s, i) => (
                        <CardLink
                            key={s.name}
                            href={s.url}
                            target="_blank"
                            image={s.picture}
                            imageAlt={s.name}
                            imageWidth={256}
                            imageHeight={256}
                            imagePosition={i % 2 == 0 ? 'left' : 'right'}
                        >
                            <h2>{s.name}</h2>
                            <p>{s.description}</p>
                        </CardLink>
                    ))}
                </GridTwoColumns>
            </Container>
        </main>
    )
}
