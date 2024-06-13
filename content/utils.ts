import { LucideIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'

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

export interface Misc {
    href: string
    thumbnail: StaticImageData
    title: string
    description: string
}
