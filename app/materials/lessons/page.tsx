import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import confucius from '@/assets/quotes/confucius.webp'
import { Box } from '@/components/Box'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Quotation } from '@/components/Quotation'
import { images } from '@/content/materials/lessons'

export const metadata: Metadata = {
    title: 'Материалы с урока',
}

export default function Lessons() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/materials', label: 'Материалы' },
                    { href: '/materials/lessons', label: 'Материалы с урока' },
                ]}
            />
            <Container>
                <h1>Материалы с урока</h1>
                <Grid>
                    {images.map((i) => (
                        <Box key={i.caption}>
                            <Image src={i.src} alt={i.caption} />
                            <Link href={i.full} target="_blank">
                                <h3>{i.caption}</h3>
                            </Link>
                        </Box>
                    ))}
                </Grid>
                <Quotation
                    quote="Учитесь так, словно вы постоянно ощущаете нехватку своих знаний, и так, словно вы постоянно боитесь растерять свои знания."
                    author="Конфуций"
                    picture={confucius}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
