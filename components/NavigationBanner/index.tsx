import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { CSSProperties, FC } from 'react'

import styles from './styles.module.scss'

interface Props {
    href: string
    image: StaticImageData
    title: string
}

export const NavigationBanner: FC<Props> = ({ href, image, title }) => {
    const linkCss: CSSProperties = {
        backgroundImage: `url('${image.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
    }

    return (
        <Link className={styles.banner} href={href} style={linkCss}>
            <h3 className={styles.title}>{title}</h3>
        </Link>
    )
}
