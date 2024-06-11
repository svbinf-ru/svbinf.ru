import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './styles.module.scss'

interface Props {
    href: string
    thumbnail: StaticImageData
    title: string
    description: string
}

export const Miscellaneous: FC<Props> = ({
    href,
    thumbnail,
    title,
    description,
}) => {
    return (
        <Link
            className={styles.misc}
            href={href}
            target="_blank"
            draggable={false}
        >
            <figure>
                <Image
                    className={styles.image}
                    src={thumbnail.src}
                    alt={title}
                    width={thumbnail.width}
                    height={thumbnail.height}
                />
                <figcaption className={styles.caption}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </figcaption>
            </figure>
        </Link>
    )
}
