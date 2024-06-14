import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
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
            </Container>
        </main>
    )
}
