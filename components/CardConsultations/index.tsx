import Image from 'next/image'
import Link from 'next/link'

import consultations from '@/assets/schedule/consultations.webp'

import styles from './style.module.scss'

export const CardConsultations = () => {
    return (
        <Link
            href="https://xn--_____-4vebdbp0abgazhnfyk0cngb6a0ag7bf30bwa6b/"
            target="_blank"
            draggable={false}
            style={{ textDecoration: 'none' }}
        >
            <div className={styles.card}>
                <Image
                    className={styles.image}
                    src={consultations}
                    width={256}
                    height={256}
                    alt="Консультации"
                />
                <div className={styles.text}>
                    <h2>Консультации</h2>
                    <p>
                        Консультации проходят по предворительной договорённости.
                    </p>
                </div>
            </div>
        </Link>
    )
}
