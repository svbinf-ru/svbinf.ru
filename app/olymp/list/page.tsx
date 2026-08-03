import { Metadata } from 'next'

import marisaKirisame from '@/assets/quotes/marisa-kirisame.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ContainerOlymp } from '@/components/ContainerOlymp'
import { ContainerVertical } from '@/components/ContainerVertical'
import { GridTwoColumns } from '@/components/GridTwoColumns'
import {
    listedOlympiads,
    otherEvents,
    otherOlympiads,
} from '@/content/olymp/list'

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
                <ContainerVertical>
                    <h2>Перечневые олимпиады</h2>
                    <p>
                        Это официальные олимпиады, внесённые в перечень
                        Минестерства образования. Победа в такой олимпиаде может
                        обеспечить поступление в вуз без экзаменов (БВИ) или 100
                        баллов по профильному предмету.
                    </p>
                    <GridTwoColumns>
                        {listedOlympiads.map((o) => (
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
                </ContainerVertical>
                <ContainerVertical>
                    <h2>Другие олимпиады</h2>
                    <GridTwoColumns>
                        {otherOlympiads.map((o) => (
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
                </ContainerVertical>
                <ContainerVertical>
                    <h2>Конкурсы, соревнования, конференции</h2>
                    <GridTwoColumns>
                        {otherEvents.map((o) => (
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
                </ContainerVertical>
                <Quotation
                    quote="Это не магия, если не сверкает. Суть даммаку в огневой мощи."
                    author="Мариса Кирисаме"
                    picture={marisaKirisame}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
