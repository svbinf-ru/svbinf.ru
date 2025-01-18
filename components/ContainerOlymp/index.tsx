import { Calendar, Info, MapPin, Star, Type } from 'lucide-react'
import { Nunito } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import { Olymp } from '@/content/olymp'

import styles from './styles.module.scss'

const nunito = Nunito({ subsets: ['cyrillic'] })

export const ContainerOlymp: FC<Olymp> = ({
    title,
    href,
    type,
    level,
    date,
    place,
    info,
}) => {
    return (
        <Link href={href} target="_blank" className={styles.container}>
            <h3 className={styles.resultTitle}>{title}</h3>
            <div className={nunito.className}>
                {type && (
                    <p className={styles.entry}>
                        <Type />
                        <span>
                            Тип: <b>{type}</b>
                        </span>
                    </p>
                )}
                {level && (
                    <p className={styles.entry}>
                        <Star />
                        <span>
                            Уровень: <b>{level}</b>
                        </span>
                    </p>
                )}
                {date && (
                    <p className={styles.entry}>
                        <Calendar />
                        <span>
                            Дата: <b>{date}</b>
                        </span>
                    </p>
                )}
                {place && (
                    <p className={styles.entry}>
                        <MapPin />
                        <span>
                            Место: <b>{place}</b>
                        </span>
                    </p>
                )}
            </div>
            <div>
                {info &&
                    info.map((i) => (
                        <p className={styles.entry} key={i}>
                            <Info />
                            <span>{i}</span>
                        </p>
                    ))}
            </div>
        </Link>
    )
}
