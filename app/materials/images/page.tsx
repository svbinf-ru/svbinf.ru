import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ImageWithLink } from '@/components/ImageWithLink'
import { Waterfall } from '@/components/Waterfall'
import { images } from '@/content/materials/images'

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
                <h1>Материалы - Изображения</h1>
                <Waterfall>
                    {images.map((i) => (
                        <ImageWithLink
                            key={i.src.src}
                            href={i.full}
                            src={i.src}
                            alt={i.caption}
                        />
                    ))}
                </Waterfall>
            </Container>
        </main>
    )
}
