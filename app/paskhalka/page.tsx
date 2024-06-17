import { Metadata } from 'next'

import cryptography from '@/assets/cryptography.webp'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import styles from './styles.module.css'

export const metadata: Metadata = {
    title: 'Дарующая оценку пять Криптография',
}

export default function Paskhalka() {
    return (
        <main>
            <Container>
                <h1>
                    Смотрел как Егор перебирает варианты страниц и решил сделать
                    такую пасхалку. Кто её найдет первый? Сам Егор или кто-то
                    другой?
                </h1>
                <Card
                    image={cryptography}
                    imageAlt="Дарующая оценку пять Криптография"
                    imageWidth={256}
                    imageHeight={256}
                    imagePosition="right"
                >
                    <p>
                        Ну и по традиции, криптография дарит тебе{' '}
                        <b className={styles.floating}>пятёрку</b>.
                    </p>
                </Card>
            </Container>
        </main>
    )
}
