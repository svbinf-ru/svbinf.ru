import { Calendar, Info, MapPin, Star, Type } from 'lucide-react'
import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { ContainerBorders } from '@/components/ContainerBorders'
import { olympiads } from '@/content/olymp/list'

import styles from './styles.module.scss'

export const metadata: Metadata = {
    title: 'Список олимпиад и конкурсов',
}

const nunito = Nunito({ subsets: ['cyrillic'] })

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
                {olympiads.map((r) => (
                    <ContainerBorders key={r.title}>
                        <Link href={r.href} target="_blank">
                            <h3 className={styles.resultTitle}>{r.title}</h3>
                        </Link>
                        <div className={nunito.className}>
                            {r.type && (
                                <p className={styles.entry}>
                                    <Type />
                                    <span>
                                        Тип: <b>{r.type}</b>
                                    </span>
                                </p>
                            )}
                            {r.level && (
                                <p className={styles.entry}>
                                    <Star />
                                    <span>
                                        Уровень: <b>{r.level}</b>
                                    </span>
                                </p>
                            )}
                            {r.date && (
                                <p className={styles.entry}>
                                    <Calendar />
                                    <span>
                                        Дата: <b>{r.date}</b>
                                    </span>
                                </p>
                            )}
                            {r.place && (
                                <p className={styles.entry}>
                                    <MapPin />
                                    <span>
                                        Место: <b>{r.place}</b>
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
                {/* TODO: add quote */}
            </Container>
        </main>
    )
}
