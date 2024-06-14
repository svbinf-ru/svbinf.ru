import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { SecondaryCard } from '@/components/SecondaryCard'
import { prepResources } from '@/content/olymp/prep'

export default function Olympiads() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/olymp', label: 'Олимпиады' },
                    { href: '/olymp/prep', label: 'Ресурсы для подготовки' },
                ]}
            />
            <Container>
                <h1>Ресурсы для подготовки к олимпиадам</h1>
                <p>Полезные сайты для подготовки к олимпиадам и техническим собеседованиям.</p>
                <Grid>
                    {prepResources.map((r) => (
                        <SecondaryCard
                            key={r.title}
                            href={r.href}
                            thumbnail={r.thumbnail}
                            title={r.title}
                            description={r.description}
                        />
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
