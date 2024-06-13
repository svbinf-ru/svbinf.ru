import '@/public/prism/prism.css'

import Link from 'next/link'
import Script from 'next/script'

import { Box } from '@/components/Box'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { codeExamples } from '@/content/materials/python'

export default function Python() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/materials', label: 'Материалы' },
                    { href: '/materials/python', label: 'Python' },
                ]}
            />
            <Container>
                <h1>Python</h1>
                <p>
                    Примеры алгоритмов на языке программирования{' '}
                    <Link href="https://www.python.org/" target="_blank">
                        Python
                    </Link>
                    .
                </p>
                {codeExamples.map((c) => (
                    <Box key={c.caption}>
                        <pre>
                            <code className="language-python">{c.code}</code>
                        </pre>
                        <Link href={c.playground} target="_blank">
                            <h3>{c.caption}</h3>
                        </Link>
                    </Box>
                ))}
            </Container>
            <Script src="/prism/prism.js" />
        </main>
    )
}
