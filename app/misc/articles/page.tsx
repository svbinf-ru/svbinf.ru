import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Miscellaneous } from '@/components/Miscellaneous'
import { articles } from '@/content/misc/articles'

export default function Articles() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/misc', label: 'Разное' },
                    { href: '/misc/articles', label: 'Статьи' },
                ]}
            />
            <Container>
                <h1>Статьи</h1>
                <Grid>
                    {articles.map((a) => (
                        <Miscellaneous
                            key={a.title}
                            href={a.href}
                            thumbnail={a.thumbnail}
                            title={a.title}
                            description={a.description}
                        />
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
