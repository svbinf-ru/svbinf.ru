'use client'

import { Nunito } from 'next/font/google'
import { FC, useEffect, useState } from 'react'

import { Box } from '@/components/Box'

import styles from './styles.module.scss'

const humanReadableDays = (days: number): string => {
    if (days <= 0) {
        return ''
    }

    switch (days % 10) {
        case 1:
            return `${days} день`
        case 2:
        case 3:
        case 4:
            return `${days} дня`
        default:
            return `${days} дней`
    }
}

const humanReadableHours = (hours: number): string => {
    if (hours <= 0) {
        return ''
    }

    switch (hours % 10) {
        case 1:
            return `${hours} час`
        case 2:
        case 3:
        case 4:
            return `${hours} часа`
        default:
            return `${hours} часов`
    }
}

const humanReadableMinutes = (minutes: number): string => {
    if (minutes <= 0) {
        return ''
    }

    switch (minutes % 10) {
        case 1:
            return `${minutes} минута`
        case 2:
        case 3:
        case 4:
            return `${minutes} минуты`
        default:
            return `${minutes} минут`
    }
}

const humanReadableSeconds = (seconds: number): string => {
    if (seconds <= 0) {
        return ''
    }

    switch (seconds % 10) {
        case 1:
            return `${seconds} секунда`
        case 2:
        case 3:
        case 4:
            return `${seconds} секунды`
        default:
            return `${seconds} секунд`
    }
}

const humanReadableTime = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
): string => {
    const parts = [
        humanReadableDays(days),
        humanReadableHours(hours),
        humanReadableMinutes(minutes),
        humanReadableSeconds(seconds),
    ].filter((s) => s.length > 0)

    return `${parts.slice(0, -1).join(', ')} и ${parts[parts.length - 1]}`
}

const durationString = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
): string => {
    const datePart = days > 0 ? `${days}D` : ''
    return `P${datePart}T${hours}H${minutes}M${seconds}S`
}

interface Props {
    date: Date
    message: string
    showDate?: boolean
}

const nunito = Nunito({ subsets: ['cyrillic'] })

export const Countdown: FC<Props> = ({ date, message, showDate = false }) => {
    const diffSeconds = Math.floor((date.getTime() - Date.now()) / 1000)
    const [secondsTotal, setSecondsTotal] = useState(diffSeconds)

    useEffect(() => {
        const countdown = setInterval(() => {
            setSecondsTotal((d) => d - 1)
        }, 1000)

        return () => clearInterval(countdown)
    })

    if (secondsTotal <= 0) {
        return null
    }

    const minutesTotal = Math.floor(secondsTotal / 60)
    const hoursTotal = Math.floor(minutesTotal / 60)
    const days = Math.floor(hoursTotal / 24)
    const hours = hoursTotal % 24
    const minutes = minutesTotal % 60
    const seconds = secondsTotal % 60

    return (
        <Box>
            <h2>{message}</h2>
            <time
                className={`${styles.countdown} ${nunito.className}`}
                dateTime={durationString(days, hours, minutes, seconds)}
            >
                {humanReadableTime(days, hours, minutes, seconds)}
            </time>
            {showDate && (
                <time
                    className={nunito.className}
                    dateTime={date.toISOString()}
                >
                    {date.toLocaleDateString('ru')}
                </time>
            )}
        </Box>
    )
}
