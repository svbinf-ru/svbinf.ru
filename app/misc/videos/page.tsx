import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Miscellaneous } from '@/components/Miscellaneous'
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
                        <Miscellaneous
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
