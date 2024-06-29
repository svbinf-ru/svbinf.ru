import { ChevronsUpDown, ChevronUp, Info, Users } from 'lucide-react'
import { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import alanTuring from '@/assets/quotes/alan-turing.webp'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ContainerBorders } from '@/components/ContainerBorders'
import { Quotation } from '@/components/Quotation'
import { results } from '@/content/exams/results'

import styles from './styles.module.scss'

export const metadata: Metadata = {
    title: 'Экзамены',
}

const nunito = Nunito({ subsets: ['cyrillic'] })

export default function Exams() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/exams', label: 'Экзамены' }]} />
            <Container>
                <h1>Экзамены</h1>
                <h2>Результаты прошлых лет</h2>
                {results.map((r) => (
                    <ContainerBorders key={r.title}>
                        <h3 className={styles.resultTitle}>{r.title}</h3>
                        <div className={nunito.className}>
                            {r.students && (
                                <p className={styles.entry}>
                                    <Users />
                                    <span>
                                        Учеников: <b>{r.students}</b>
                                    </span>
                                </p>
                            )}
                            {r.average && (
                                <p className={styles.entry}>
                                    <ChevronsUpDown />
                                    <span>
                                        Средний:{' '}
                                        <b>
                                            {r.average}/{r.max}
                                        </b>
                                    </span>
                                </p>
                            )}
                            {r.best && (
                                <p className={styles.entry}>
                                    <ChevronUp />
                                    <span>
                                        Лучший:{' '}
                                        <b>
                                            {r.best}/{r.max}
                                        </b>
                                    </span>
                                </p>
                            )}
                        </div>
                        <div>
                            {r.info &&
                                r.info.map((i) => (
                                    <p className={styles.entry} key={i}>
                                        <Info />
                                        <span>{i}</span>
                                    </p>
                                ))}
                        </div>
                    </ContainerBorders>
                ))}
                <Quotation
                    quote="Те, кто могут что-то представить, способны сотворить невозможное."
                    author="Алан Тьюринг"
                    picture={alanTuring}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
        </main>
    )
}
