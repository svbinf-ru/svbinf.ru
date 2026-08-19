import Link from 'next/link'
import { FC } from 'react'

import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'

import styles from './styles.module.scss'

export const HomepageNavigation: FC = () => {
    return (
        <Container>
            <Grid>
                <nav className={styles.group}>
                    <Link href="/olymp/prep">Подготовка к олимпиадам</Link>
                    <Link href="/olymp/list">Олимпиады и конкурсы</Link>
                    <Link href="/materials/lessons">Материалы с урока</Link>
                    <Link href="/materials/images">Картинки</Link>
                    <Link href="/materials/python">Python</Link>
                </nav>
                <nav className={styles.group}>
                    <Link href="/misc/programs">Программы</Link>
                    <Link href="/exams">Экзамены</Link>
                    <Link href="/misc/articles">Статьи</Link>
                    <Link href="/misc/videos">Видео</Link>
                    <Link href="/misc/websites">Сайты</Link>
                </nav>
                <nav className={styles.group}>
                    <Link href="/achievements/students">
                        Достижения учеников
                    </Link>
                    <Link href="/achievements/teacher">Мои достижения</Link>
                    <Link href="/schedule">Расписание</Link>
                    <Link href="/students">Ученики</Link>
                    <Link href="/about">О себе</Link>
                </nav>
            </Grid>
        </Container>
    )
}
