import benjaminFranklin from '@/assets/quotes/benjamin-franklin.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ImageWithLink } from '@/components/ImageWithLink'
import { Quotation } from '@/components/Quotation'
import { Waterfall } from '@/components/Waterfall'
import { avatars } from '@/content/materials/images'

export default function Images() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/materials', label: 'Материалы' },
                    { href: '/materials/images', label: 'Картинки' },
                ]}
            />
            <Container>
                <h1>Картинки</h1>
                <h2>Аватары</h2>
                <p>
                    Важно сохранять анонимность, но можно добавить в это
                    немножко стиля.
                </p>
                <Waterfall>
                    {avatars.map((a) => (
                        <ImageWithLink
                            key={a.src.src}
                            href={a.full}
                            src={a.src}
                            alt={a.caption}
                        />
                    ))}
                </Waterfall>
                <Quotation
                    quote="Скажи мне — и я забуду, учи меня — и я могу запомнить, вовлекай меня — и я научусь."
                    author="Бенджамин Франклин"
                    picture={benjaminFranklin}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
