import blaisePascal from '@/assets/quotes/vladimir-lenin.png' // Тут пасхалка.
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Quotation } from '@/components/Quotation'
import { SecondaryCard } from '@/components/SecondaryCard'
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
                        <SecondaryCard
                            key={a.title}
                            href={a.href}
                            thumbnail={a.thumbnail}
                            title={a.title}
                            description={a.description}
                        />
                    ))}
                </Grid>
                <Quotation
                    quote="Главная проблема цитат в Интернете в том, что люди сразу верят в их подлинность."
                    author="Владимир Ильич Ленин"
                    picture={blaisePascal}
                    pictureWidth={256}
                    pictureHeight={256}
                    unoptimized={true}
                />
            </Container>
        </main>
    )
}
