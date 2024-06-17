import { Metadata } from 'next'

import images from '@/assets/materials/images.webp'
import lessons from '@/assets/materials/lessons.webp'
import python from '@/assets/materials/python.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { NavigationBanner } from '@/components/NavigationBanner'

export const metadata: Metadata = {
    title: 'Материалы',
}

export default function Materials() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/materials', label: 'Материалы' }]} />
            <Container>
                <h1>Материалы</h1>
                <p>Полезная информация, источники и материалы.</p>
                <Grid>
                    <NavigationBanner
                        image={lessons}
                        href="/materials/lessons"
                        title="Материалы с урока"
                    />
                    <NavigationBanner
                        image={python}
                        href="/materials/python"
                        title="Python"
                    />
                    <NavigationBanner
                        image={images}
                        href="/materials/images"
                        title="Картинки"
                    />
                </Grid>
            </Container>
        </main>
    )
}
