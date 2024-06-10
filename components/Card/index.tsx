import Image, { StaticImageData } from 'next/image'
import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

interface Props {
    image: StaticImageData
    imageAlt: string
    imagePosition?: 'left' | 'right'
}

export const Card: FC<PropsWithChildren<Props>> = ({
    image,
    imageAlt,
    children,
    imagePosition = 'left',
}) => {
    return (
        <div className={styles.card} data-image-pos={imagePosition}>
            <Image
                className={styles.image}
                src={image.src}
                width={256}
                height={256}
                alt={imageAlt}
            />
            <div className={styles.text}>{children}</div>
        </div>
    )
}
