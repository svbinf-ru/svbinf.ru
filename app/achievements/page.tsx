import { Metadata } from 'next'

import students from '@/assets/achievements/students.webp'
import teacher from '@/assets/achievements/teacher.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { NavigationBanner } from '@/components/NavigationBanner'

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
                <Grid>
                    <NavigationBanner
                        image={students}
                        href="/achievements/students"
                        title="Ученики"
                    />
                    <NavigationBanner
                        image={teacher}
                        href="/achievements/teacher"
                        title="Вадим Борисович"
                    />
                </Grid>
            </Container>
        </main>
    )
}
