import { Metadata } from 'next'

import alanTuring from '@/assets/quotes/alan-turing.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ContainerExam } from '@/components/ContainerExam'
import { Grid } from '@/components/Grid'
import { Quotation } from '@/components/Quotation'
import { results } from '@/content/exams/results'

export const metadata: Metadata = {
    title: 'Экзамены',
}

export default function Exams() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/exams', label: 'Экзамены' }]} />
            <Container>
                <h1>Экзамены</h1>
                <h2>Результаты прошлых лет</h2>
                <Grid>
                    {results.map((r) => (
                        <ContainerExam
                            key={r.title}
                            title={r.title}
                            max={r.max}
                            students={r.students}
                            average={r.average}
                            best={r.best}
                            info={r.info}
                        />
                    ))}
                </Grid>
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
