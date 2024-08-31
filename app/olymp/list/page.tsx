import { Metadata } from 'next'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ContainerOlymp } from '@/components/ContainerOlymp'
import { GridTwoColumns } from '@/components/GridTwoColumns'
import { olympiads } from '@/content/olymp/list'

export const metadata: Metadata = {
    title: 'Список олимпиад и конкурсов',
}

export default function Olympiads() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/olymp', label: 'Олимпиады' },
                    { href: '/olymp/list', label: 'Олимпиады и конкурсы' },
                ]}
            />
            <Container>
                <h1>Олимпиады и конкурсы</h1>
                <p>
                    Подборка олимпиад и конкурсов, в которых вы можете принять
                    участие.
                </p>
                <GridTwoColumns>
                    {olympiads.map((o) => (
                        <ContainerOlymp
                            key={o.title}
                            title={o.title}
                            href={o.href}
                            level={o.level}
                            date={o.date}
                            place={o.place}
                            info={o.info}
                        />
                    ))}
                </GridTwoColumns>
                {/* TODO: add quote */}
            </Container>
        </main>
    )
}
