import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import styles from './styles.module.scss'

interface Props {
    quote: string
    author: string
    picture: StaticImageData
    pictureWidth?: number
    pictureHeight?: number
}

export const Quotation: FC<Props> = ({
    quote,
    author,
    picture,
    pictureWidth,
    pictureHeight,
}) => {
    return (
        <blockquote className={styles.quotation}>
            <Image
                className={styles.image}
                src={picture.src}
                alt={author}
                width={pictureWidth ?? picture.width}
                height={pictureHeight ?? picture.height}
            />
            <div className={styles.text}>
                <p>{quote}</p>
                <cite>{author}</cite>
            </div>
        </blockquote>
    )
}
