import { LucideIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'

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

export interface ExamResult {
    title: string
    max: number
    students?: number
    average?: number
    best?: number
    info?: string[]
}

export interface MaterialsImage {
    src: StaticImageData
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

export interface Option {
    value: string
    label: string
}

export interface Secret {
    title: string
    description: string
    href: string
    picture: StaticImageData
}

export interface Student {
    name: string
    description: string
    url: string
    picture: StaticImageData
}

type AchievementType = 'certificate' | 'commendation' | 'diploma' | 'gratitude'
