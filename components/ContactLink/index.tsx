import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

import styles from './styles.module.scss'

interface Props {
    href: string
    icon: LucideIcon
    text: string
}

export const ContactLink: FC<Props> = ({ href, icon: Icon, text }) => {
    return (
        <a className={styles.link} href={href} target="_blank">
            <Icon size={20} /> <span>{text}</span>
        </a>
    )
}
