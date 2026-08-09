import '@/public/prism/prism.css'

import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import barbaraChaseRiboud from '@/assets/quotes/barbara-chase-riboud.webp'
import { Box } from '@/components/Box'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Quotation } from '@/components/Quotation'
import { codeExamples } from '@/content/materials/python'

export const metadata: Metadata = {
    title: 'Python',
}

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
                <a
                    href="https://cdn.svb369.ru/d/pdf/python.pdf"
                    download
                    target="_blank"
                >
                    Скачать шпаргалку по Python 3
                </a>
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
                <Quotation
                    quote="Питон носит свое одиночество в себе, словно съел глину."
                    author="Барбара Чейз-Рибу"
                    picture={barbaraChaseRiboud}
                    pictureWidth={256}
                    pictureHeight={256}
                />
            </Container>
            <Script src="/prism/prism.js" />
        </main>
    )
}
