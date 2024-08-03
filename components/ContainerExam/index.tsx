import { FC } from 'react'

import styles from './styles.module.scss'
import { Nunito } from 'next/font/google'
import { ChevronUp, ChevronsUpDown, Info, Users } from 'lucide-react'
import { ExamResult } from '@/content/utils'

const nunito = Nunito({ subsets: ['cyrillic'] })

export const ContainerExam: FC<ExamResult> = ({
    title,
    max,
    average,
    students,
    best,
    info,
}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.resultTitle}>{title}</h3>
            <div className={nunito.className}>
                {students && (
                    <p className={styles.entry}>
                        <Users />
                        <span>
                            Учеников: <b>{students}</b>
                        </span>
                    </p>
                )}
                {average && (
                    <p className={styles.entry}>
                        <ChevronsUpDown />
                        <span>
                            Средний:{' '}
                            <b>
                                {average}/{max}
                            </b>
                        </span>
                    </p>
                )}
                {best && (
                    <p className={styles.entry}>
                        <ChevronUp />
                        <span>
                            Лучший:{' '}
                            <b>
                                {best}/{max}
                            </b>
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
        </div>
    )
}
