import Image from 'next/image'
import Link from 'next/link'

import { Box } from '@/components/Box'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { images, tables } from '@/content/materials/lessons'

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
                <h2>Изображения</h2>
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
                <h2>Таблицы</h2>
                <Grid>
                    {tables.map((t) => (
                        <Box key={t.caption}>
                            {t.table}
                            <Link href={t.full} target="_blank">
                                <h3>{t.caption}</h3>
                            </Link>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
