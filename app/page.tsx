import anonForm from '@/assets/anon-form.webp'
import raptor from '@/assets/raptor.webp'
import { CardLink } from '@/components/CardLink'
import { Container } from '@/components/Container'
import { GridTwoColumns } from '@/components/GridTwoColumns'
import { HomepageNavigation } from '@/components/HomepageNavigation'
import { NewsFeed } from '@/components/NewsFeed'

export default function Home() {
    return (
        <main>
            <HomepageNavigation />
            <Container>
                <GridTwoColumns>
                    <CardLink
                        href="/secrets"
                        image={raptor}
                        imageAlt="Раптор"
                        imageWidth={256}
                        imageHeight={256}
                    >
                        <p>Если это понятно, то это понятно.</p>
                        <p>Если это не понятно, то это не понятно.</p>
                    </CardLink>
                    <CardLink
                        href="https://forms.gle/kkavKTSN86r3yZLx6"
                        target="_blank"
                        imageWidth={256}
                        imageHeight={256}
                        image={anonForm}
                        imageAlt="Ждун дождался тебя и вручает тебе п9tеpkу!"
                        imagePosition="right"
                    >
                        <p>Напиши мне своё анонимное мнение.</p>
                        <p>Напиши мне то, что не можешь сказать вслух.</p>
                    </CardLink>
                </GridTwoColumns>
            </Container>
            <NewsFeed />
        </main>
    )
}
