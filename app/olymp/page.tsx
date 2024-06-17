import { Metadata } from 'next'

import list from '@/assets/olymp/list.webp'
import prep from '@/assets/olymp/prep.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { NavigationBanner } from '@/components/NavigationBanner'

export const metadata: Metadata = {
    title: 'Олимпиады',
}

export default function Olympiads() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/olymp', label: 'Олимпиады' }]} />
            <Container>
                <h1>Олимпиады</h1>
                <Grid>
                    <NavigationBanner
                        href="/olymp/list"
                        title="Олимпиады и конкурсы"
                        image={list}
                    />
                    <NavigationBanner
                        href="/olymp/prep"
                        title="Ресурсы для подготовки"
                        image={prep}
                    />
                </Grid>
            </Container>
        </main>
    )
}
