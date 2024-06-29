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
                    <button
                        className={styles.button}
                        onClick={toggleMenu}
                        aria-label="Закрыть меню навигации"
                    >
                        <X size={32} />
                    </button>
                </div>
                <nav className={styles.headerNavigation}>
                    <div className={styles.headerNavigationGroup}>
                        <Link href="/materials" onClick={closeMenu}>
                            Материалы
                        </Link>
                        <Link href="/olymp" onClick={closeMenu}>
                            Олимпиады
                        </Link>
                        <Link href="/exams" onClick={closeMenu}>
                            Экзамены
                        </Link>
                    </div>
                    <div className={styles.headerNavigationGroup}>
                        <Link href="/schedule" onClick={closeMenu}>
                            Расписание
                        </Link>
                        <Link href="/misc" onClick={closeMenu}>
                            Разное
                        </Link>
                    </div>
                    <div className={styles.headerNavigationGroup}>
                        <Link href="/achievements" onClick={closeMenu}>
                            Достижения
                        </Link>
                        <Link href="/students" onClick={closeMenu}>
                            Ученики
                        </Link>
                        <Link href="/about" onClick={closeMenu}>
                            О себе
                        </Link>
                    </div>
                    <div className={styles.headerNavigationGroup}></div>
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
                <button
                    className={styles.button}
                    onClick={toggleMenu}
                    aria-label="Открыть меню навигации"
                >
                    <Menu size={32} />
                </button>
            </div>
        </header>
    )
}
