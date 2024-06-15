import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'

export default function Exams() {
    return (
        <main>
            <Breadcrumbs items={[{ href: '/exams', label: 'Экзамены' }]} />
            <Container>
                <h1>Экзамены</h1>
            </Container>
        </main>
    )
}
