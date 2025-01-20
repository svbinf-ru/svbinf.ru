import { Metadata } from 'next'

import ivanShelepugin from '@/assets/quotes/ivan-shelepugin.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Quotation } from '@/components/Quotation'
import { SecondaryCard } from '@/components/SecondaryCard'
import { programs } from '@/content/misc/programs'

export const metadata: Metadata = {
    title: 'Программы',
}

export default function Programs() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/misc', label: 'Разное' },
                    { href: '/misc/programs', label: 'Программы' },
                ]}
            />
            <Container>
                <h1>Программы</h1>
                <Grid>
                    {programs.map((p) => (
                        <SecondaryCard
                            key={p.title}
                            href={p.href}
                            thumbnail={p.thumbnail}
                            title={p.title}
                            description={p.description}
                        />
                    ))}
                </Grid>
                <Quotation
                    quote="I use Arch btw!"
                    author="Шелепугин Иван Михайлович"
                    picture={ivanShelepugin}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
