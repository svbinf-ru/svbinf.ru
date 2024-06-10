'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './styles.module.scss'

export const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)
    const toggleMenu = () => setMenuOpen((s) => !s)

    if (menuOpen) {
        return (
            <header className={styles.header}>
                <div className={styles.headerMenu}>
                    <Link className={styles.title} href="/" onClick={closeMenu}>
                        Вадим Борисович
                    </Link>
                    <button className={styles.button} onClick={toggleMenu}>
                        <X size={32} />
                    </button>
                </div>
                <nav className={styles.headerNavigation}>
                    <div className={styles.headerNavigationGroup}>
                        <Link href="/exams" onClick={closeMenu}>
                            Экзамены
                        </Link>
                        <Link href="/olymp" onClick={closeMenu}>
                            Олимпиады
                        </Link>
                        <Link href="/schedule" onClick={closeMenu}>
                            Расписание
                        </Link>
                    </div>
                    <div className={styles.headerNavigationGroup}>
                        <Link href="/about" onClick={closeMenu}>
                            О себе
                        </Link>
                        <Link href="/achievements" onClick={closeMenu}>
                            Достижения
                        </Link>
                    </div>
                    <div className={styles.headerNavigationGroup}>
                        <Link href="/misc" onClick={closeMenu}>
                            Разное
                        </Link>
                        <Link href="/secrets" onClick={closeMenu}>
                            Пасхалки
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerMenu}>
                <Link className={styles.title} href="/">
                    Вадим Борисович
                </Link>
                <button className={styles.button} onClick={toggleMenu}>
                    <Menu size={32} />
                </button>
            </div>
        </header>
    )
}
