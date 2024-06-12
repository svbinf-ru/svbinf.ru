import Image, { StaticImageData } from 'next/image'
import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

interface Props {
    image: StaticImageData
    imageAlt: string
    imageWidth?: number
    imageHeight?: number
    imagePosition?: 'left' | 'right'
}

export const Card: FC<PropsWithChildren<Props>> = ({
    image,
    imageAlt,
    children,
    imageWidth,
    imageHeight,
    imagePosition = 'left',
}) => {
    return (
        <div className={styles.card} data-image-pos={imagePosition}>
            <Image
                className={styles.image}
                src={image.src}
                width={imageWidth ?? image.width}
                height={imageHeight ?? image.height}
                alt={imageAlt}
            />
            <div className={styles.text}>{children}</div>
        </div>
    )
}
