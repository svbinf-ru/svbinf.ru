'use client'

import { Gift, Send } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import cat from '@/assets/cat.svg'

import styles from './styles.module.scss'

const catClick = () => {
    window.open(
        'https://drive.google.com/file/d/1nkVrF4CewV3TWAls6-qcnPLDVCacmB5U/view',
    )
}

const zipClick = () => {
    window.open('https://disk.yandex.ru/d/KrNF--Gmh6Bdlg')
}

export const Footer: FC = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.buttonWrapper}>
                <button className={styles.catButton} onClick={catClick}>
                    <Image
                        src={cat.src}
                        width={78}
                        height={36}
                        alt="Спящий котик"
                    />
                </button>
                <button className={styles.zipButton} onClick={zipClick}>
                    <Gift
                        color="white"
                        width={30}
                        height={30}
                        strokeWidth={1}
                    />
                </button>
                <a href="https://t.me/VadimBS_369" target="_blank">
                    <Send
                        color="white"
                        width={30}
                        height={30}
                        strokeWidth={1}
                    />
                </a>
            </div>
            <p>Скотников Вадим Борисович, {new Date().getFullYear()}</p>
        </footer>
    )
}
