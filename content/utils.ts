import { LucideIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { JSX } from 'react'

export const achievementYears: Option[] = [
    {
        label: 'Все года',
        value: '_',
    },
    {
        label: '2017 год',
        value: '2017',
    },
    {
        label: '2018 год',
        value: '2018',
    },
    {
        label: '2019 год',
        value: '2019',
    },
    {
        label: '2020 год',
        value: '2020',
    },
    {
        label: '2021 год',
        value: '2021',
    },
    {
        label: '2022 год',
        value: '2022',
    },
    {
        label: '2023 год',
        value: '2023',
    },
    {
        label: '2024 год',
        value: '2024',
    },
]

export const achievementTypes: Option[] = [
    {
        label: 'Все',
        value: '_',
    },
    {
        value: 'certificate',
        label: 'Сертификаты',
    },
    {
        value: 'commendation',
        label: 'Грамоты',
    },
    {
        value: 'diploma',
        label: 'Дипломы',
    },
    {
        value: 'gratitude',
        label: 'Благодарности',
    },
]

export interface Achievement {
    thumbnail: StaticImageData
    full: string
    year: number
    type: AchievementType
}

export interface Contact {
    href: string
    icon: LucideIcon
    text: string
}

export interface Education {
    full: string
    thumbnail: StaticImageData
    title: string
    description: string
}

export interface MaterialsImage {
    src: StaticImageData
    caption: string
    full: string
}

export interface MaterialsTable {
    table: JSX.Element
    caption: string
    full: string
}

export interface MaterialsCode {
    code: string
    caption: string
    playground: string
}

export interface Misc {
    href: string
    thumbnail: StaticImageData
    title: string
    description: string
}

export interface OlympPrep {
    href: string
    thumbnail: StaticImageData
    title: string
    description: string
}

interface Option {
    value: string
    label: string
}

type AchievementType = 'certificate' | 'commendation' | 'diploma' | 'gratitude'
