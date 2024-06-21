'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FC, FormEvent } from 'react'

import { ImageWithLink } from '@/components/ImageWithLink'
import { Waterfall } from '@/components/Waterfall'
import {
    Achievement,
    achievementTypes,
    achievementYears,
} from '@/content/utils'

import styles from './styles.module.scss'

interface Props {
    achievements: Achievement[]
}

const filterFunc = (
    yearString: string | null,
    type: string | null,
): ((a: Achievement) => boolean) => {
    const yearSeachValid = Boolean(yearString && !isNaN(parseInt(yearString)))
    const typeSearchValid = Boolean(
        type &&
            (type === 'certificate' ||
                type === 'commendation' ||
                type === 'diploma' ||
                type === 'gratitude'),
    )

    return (a: Achievement) => {
        const yearValid =
            !yearSeachValid || a.year === parseInt(yearString ?? '')
        const typeValid = !typeSearchValid || a.type === type

        return yearValid && typeValid
    }
}

export const AchievementsList: FC<Props> = ({ achievements }) => {
    const search = useSearchParams()
    const router = useRouter()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const searchParams = new URLSearchParams(formData as any)

        router.push(`?${searchParams.toString()}`)
    }

    const filteredAchievements = achievements.filter(
        filterFunc(search.get('year'), search.get('type')),
    )

    return (
        <>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
                aria-label="Фильтр"
            >
                <select
                    className={styles.formItem}
                    name="type"
                    aria-label="Тип достижения"
                >
                    {achievementTypes.map((t) => (
                        <option key={t.value} value={t.value}>
                            {t.label}
                        </option>
                    ))}
                </select>
                <span aria-hidden={true}>за</span>
                <select
                    className={styles.formItem}
                    name="year"
                    aria-label="Год достижения"
                >
                    {achievementYears.map((y) => (
                        <option key={y.value} value={y.value}>
                            {y.label}
                        </option>
                    ))}
                </select>
                <button className={styles.formItem} type="submit">
                    Фильтр
                </button>
                <button className={styles.formItem} type="reset">
                    Сброс
                </button>
            </form>
            {filteredAchievements.length ? (
                <Waterfall>
                    {filteredAchievements.map((a) => (
                        <ImageWithLink
                            key={a.full}
                            src={a.thumbnail}
                            alt={a.full}
                            href={a.full}
                        />
                    ))}
                </Waterfall>
            ) : (
                <h2 className={styles.notFoundHeading}>Ничего не найдено</h2>
            )}
        </>
    )
}
