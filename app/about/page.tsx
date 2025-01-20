import { Metadata } from 'next'
import Link from 'next/link'

import profile from '@/assets/profile.webp'
import vbSn from '@/assets/quotes/vb-sn.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GridTwoColumnsLarge } from '@/components/GridTwoColumnsLarge'
import { Quotation } from '@/components/Quotation'
import { education } from '@/content/about/education'

export const metadata: Metadata = {
    title: 'О себе',
}

const calcExperience = (): string => {
    const teacherSince = 1567376053 * 1000
    const now = Date.now()

    const diff = now - teacherSince
    const toYears = 31536000000
    const yearsOfExperience = Math.floor(diff / toYears)

    switch (yearsOfExperience % 10) {
        case 1:
            return `${yearsOfExperience} год`
        case 2:
        case 3:
        case 4:
            return `${yearsOfExperience} года`
        default:
            return `${yearsOfExperience} лет`
    }
}

export default function About() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/about', label: 'О себе' }]} />
            <Container>
                <Card
                    image={profile}
                    imageAlt="Скотников Вадим Борисович"
                    imageWidth={256}
                    imageHeight={256}
                >
                    <h1>Скотников Вадим Борисович</h1>
                    <p>
                        Учитель информатики, педагогический стаж работы{' '}
                        {calcExperience()}.
                    </p>
                    <p>
                        Установлена{' '}
                        <Link
                            href="https://cdn.svb369.ru/d/pdf/об-установлении-первой-квалификационной-категории.pdf"
                            target="_blank"
                        >
                            <b>первая квалификационная категория</b>
                        </Link>{' '}
                        с 17 декабря 2020.
                    </p>
                    <p>
                        Установлена{' '}
                        <Link
                            href="https://cdn.svb369.ru/d/pdf/об-установлении-высшей-квалификационной-категории.pdf"
                            target="_blank"
                        >
                            <b>высшая квалификационная категория</b>
                        </Link>{' '}
                        с 26 января 2023.
                    </p>
                </Card>
                <GridTwoColumnsLarge>
                    {education.map((e, i) => (
                        <Card
                            key={e.title}
                            image={e.thumbnail}
                            imageAlt={e.title}
                            imagePosition={i % 2 == 0 ? 'left' : 'right'}
                        >
                            <Link target="_blank" href={e.full}>
                                <h2>{e.title}</h2>
                            </Link>
                            <p>{e.description}</p>
                        </Card>
                    ))}
                </GridTwoColumnsLarge>
                <Quotation
                    quote={
                        'В.Б. —    Linux лучше, чем Windows.\nС.Н. —    Чем?\nВ.Б. —    Чем Windows!'
                    }
                    author="Скотников Вадим Борисович и Синявин Никита"
                    picture={vbSn}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
