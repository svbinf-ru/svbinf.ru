import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'

import { Card } from '../Card'

interface Props {
    href: string
    target?: HTMLAttributeAnchorTarget
    image: StaticImageData
    imageAlt: string
    imageWidth?: number
    imageHeight?: number
    imagePosition?: 'left' | 'right'
}

export const CardLink: FC<PropsWithChildren<Props>> = ({
    href,
    target,
    image,
    imageAlt,
    children,
    imageWidth,
    imageHeight,
    imagePosition = 'left',
}) => {
    return (
        <Link
            href={href}
            target={target}
            draggable={false}
            style={{ textDecoration: 'none' }}
        >
            <Card
                image={image}
                imageAlt={imageAlt}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                imagePosition={imagePosition}
            >
                {children}
            </Card>
        </Link>
    )
}
