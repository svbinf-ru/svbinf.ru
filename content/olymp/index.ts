import { StaticImageData } from 'next/image'

export interface OlympPrep {
    href: string
    thumbnail: StaticImageData
    title: string
    description: string
}

export interface Olymp {
    href: string
    title: string
    type?: string
    level?: string
    date?: string
    place?: string
    info?: string[]
}
