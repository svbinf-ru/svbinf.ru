import Image from 'next/image'
import { FC } from 'react'

import arthurClarke from '@/assets/quotes/arthur-clarke.webp'

import styles from './styles.module.scss'

export const QuotationSuspicious: FC = () => {
    return (
        <blockquote className={styles.quotation}>
            <Image
                className={styles.image}
                src={arthurClarke}
                alt="Артур Чарльз Кларк"
                width={256}
                height={256}
            />
            <div className={styles.text}>
                <p>
                    Искать что-либо в Интернете — все равно что пытаться
                    зачерпнуть стакан воды из Ниагары.
                </p>
                <p className={styles.secret}>
                    Кларк дарит тебе пятёрky за твой долгий поиск!
                </p>
                <cite>Артур Чарльз Кларк</cite>
            </div>
        </blockquote>
    )
}
