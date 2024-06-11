'use client'

import Image from 'next/image'
import { FC } from 'react'

import cat from '@/assets/cat.svg'

import styles from './styles.module.scss'

const catClick = () => {
    window.open(
        'https://drive.google.com/file/d/1nkVrF4CewV3TWAls6-qcnPLDVCacmB5U/view',
    )
}

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <button className={styles.catButton} onClick={catClick}>
                <Image
                    src={cat.src}
                    width={78}
                    height={36}
                    alt="Спящий котик"
                />
            </button>
            <p>Скотников Вадим Борисович, {new Date().getFullYear()}</p>
        </footer>
    )
}
