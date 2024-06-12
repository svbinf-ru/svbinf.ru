import Link from 'next/link'

import anonForm from '@/assets/anon-form.webp'
import favicon from '@/assets/favicon.webp'
import raptor from '@/assets/raptor.webp'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { HomepageNavigation } from '@/components/HomepageNavigation'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main>
            <Container>
                <Card
                    image={favicon}
                    imageAlt="Логотип SVB369.ru"
                    imageWidth={256}
                    imageHeight={256}
                >
                    <h1>Добро пожаловать!</h1>
                    <p>
                        Здесь вы можете узнать информацию об олимпиадах, скачать
                        полезные материалы, найти ссылки на интересные сайты,
                        программы и статьи. А также можете найти секретные
                        послания.
                    </p>
                </Card>
            </Container>
            <HomepageNavigation />
            <Container>
                <Link
                    className={styles.linkCard}
                    href="https://forms.gle/kkavKTSN86r3yZLx6"
                    target="_blank"
                    draggable={false}
                >
                    <Card
                        imageWidth={256}
                        imageHeight={256}
                        image={anonForm}
                        imageAlt="Ждун"
                        imagePosition="right"
                    >
                        <h2>Анонимная форма</h2>
                        <p>Напиши мне своё анонимное мнение.</p>
                        <p>Напиши мне то, что не можешь сказать вслух.</p>
                    </Card>
                </Link>
                <Link
                    className={styles.linkCard}
                    href="/secrets"
                    draggable={false}
                >
                    <Card
                        image={raptor}
                        imageAlt="Раптор"
                        imageWidth={256}
                        imageHeight={256}
                    >
                        <h2>Пасхалки</h2>
                        <p>Если это понятно, то это понятно.</p>
                        <p>Если это не понятно, то это не понятно.</p>
                    </Card>
                </Link>
            </Container>
        </main>
    )
}
