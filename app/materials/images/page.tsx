import { Metadata } from 'next'

import benjaminFranklin from '@/assets/quotes/benjamin-franklin.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ContainerBorders } from '@/components/ContainerBorders'
import { ImageWithLink } from '@/components/ImageWithLink'
import { Quotation } from '@/components/Quotation'
import { Waterfall } from '@/components/Waterfall'
import { avatars } from '@/content/materials/images'

export const metadata: Metadata = {
    title: 'Картинки',
}

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
                <ContainerBorders>
                    <h2>Аватарки</h2>
                    <p>
                        Важно сохранять анонимность, но можно добавить в это
                        немножко стиля.
                    </p>
                    <b>
                         Больше аватарок{' '}
                        <a
                            href="https://disk.yandex.ru/d/KcMaRe81-k5ouw"
                            target="_blank"
                        >
                            доступно на Диске
                        </a>
                        {' '}и{' '}
                        <a
                            href="https://github.com/svb369-ru/avatars"
                            target="_blank"
                        >
                            в репозитории GitHub
                        </a>
                        .
                    </b>
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
                </ContainerBorders>
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
