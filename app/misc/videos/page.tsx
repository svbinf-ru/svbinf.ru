import maximGorky from '@/assets/quotes/maxim-gorky.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Quotation } from '@/components/Quotation'
import { SecondaryCard } from '@/components/SecondaryCard'
import { videos } from '@/content/misc/videos'

export default function Videos() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/misc', label: 'Разное' },
                    { href: '/misc/videos', label: 'Видео' },
                ]}
            />
            <Container>
                <h1>Видео</h1>
                <Grid>
                    {videos.map((v) => (
                        <SecondaryCard
                            key={v.title}
                            href={v.href}
                            thumbnail={v.thumbnail}
                            title={v.title}
                            description={v.description}
                        />
                    ))}
                </Grid>
                <Quotation
                    quote="Учитесь у всех, не подражайте никому."
                    author="Максим Горький"
                    picture={maximGorky}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
