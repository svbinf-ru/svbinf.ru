import { NotebookPen, Star, User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import { Container } from '@/components/Container'

import styles from './styles.module.scss'

export const HomepageNavigation: FC = () => {
    return (
        <Container>
            <h2>Навигация</h2>
            <div className={styles.navigation}>
                <nav className={styles.group}>
                    <NotebookPen color="aquamarine" />
                    <Link href="/materials/lessons">Материалы с урока</Link>
                    <Link href="/materials/python">Python</Link>

                    <Link href="/schedule">Расписание</Link>
                    <Link href="/exams">Экзамены</Link>
                    <Link href="/olymp">Олимпиады</Link>
                </nav>
                <nav className={styles.group}>
                    <Star color="yellow" />
                    <Link href="/misc/articles">Статьи</Link>
                    <Link href="/misc/programs">Программы</Link>
                    <Link href="/misc/videos">Видео</Link>
                    <Link href="/misc/websites">Сайты</Link>
                    <Link href="/materials/images">Картинки</Link>
                </nav>
                <nav className={styles.group}>
                    <User color="orchid" />
                    <Link href="/about">О себе</Link>
                    <Link href="/achievements">Достижения</Link>
                </nav>
            </div>
        </Container>
    )
}
