import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Miscellaneous } from '@/components/Miscellaneous'
import { websites } from '@/content/misc/websites'

export default function Videos() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/misc', label: 'Разное' },
                    { href: '/misc/websites', label: 'Сайты' },
                ]}
            />
            <Container>
                <h1>Сайты</h1>
                <Grid>
                    {websites.map((w) => (
                        <Miscellaneous
                            key={w.title}
                            href={w.href}
                            thumbnail={w.thumbnail}
                            title={w.title}
                            description={w.description}
                        />
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
