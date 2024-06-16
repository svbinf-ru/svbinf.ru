import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'

export default function Olympiads() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/olymp', label: 'Олимпиады' },
                    { href: '/olymp/list', label: 'Олимпиады и конкурсы' },
                ]}
            />
            <Container>
                <h1>Олимпиады и конкурсы</h1>
                <p>
                    Подборка олимпиад и конкурсов, в которых вы можете принять
                    участие.
                </p>
                <Grid></Grid>
                {/* TODO: add quote */}
            </Container>
        </main>
    )
}
