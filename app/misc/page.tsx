import articles from '@/assets/misc/articles.webp'
import programs from '@/assets/misc/programs.webp'
import videos from '@/assets/misc/videos.webp'
import websites from '@/assets/misc/websites.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { NavigationBanner } from '@/components/NavigationBanner'

export default function Miscellaneous() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/misc', label: 'Разное' }]} />
            <Container>
                <h1>Разное</h1>
                <p>Подборка полезных материалов.</p>
                <Grid>
                    <NavigationBanner
                        image={videos}
                        href="/misc/videos"
                        title="Видео"
                    />
                    <NavigationBanner
                        image={programs}
                        href="/misc/programs"
                        title="Программы"
                    />
                    <NavigationBanner
                        image={websites}
                        href="/misc/websites"
                        title="Сайты"
                    />
                    <NavigationBanner
                        image={articles}
                        href="/misc/articles"
                        title="Статьи"
                    />
                </Grid>
            </Container>
        </main>
    )
}
