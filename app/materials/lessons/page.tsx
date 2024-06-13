import Image from 'next/image'
import Link from 'next/link'

import { Box } from '@/components/Box'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { images } from '@/content/materials/lessons'

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
                    {images.map((img, index) => (
                        <Box key={index}>
                            <Image src={img.src} alt={img.caption} />
                            <Link href={img.full} target="_blank">
                                <h3>{img.caption}</h3>
                            </Link>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
