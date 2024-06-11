import bullying from '@/assets/misc/articles/bullying.png'
import cryptocurrency from '@/assets/misc/articles/cryptocurrency.png'
import metadata from '@/assets/misc/articles/metadata.png'
import scammer from '@/assets/misc/articles/scammer.png'
import search from '@/assets/misc/articles/search.png'
import socialNetworks from '@/assets/misc/articles/social-networks.png'
import viruses from '@/assets/misc/articles/viruses.png'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { Miscellaneous } from '@/components/Miscellaneous'

export default function Articles() {
    return (
        <main>
            <Breadcrumbs
                items={[
                    { href: '/misc', label: 'Разное' },
                    { href: '/misc/articles', label: 'Статьи' },
                ]}
            />
            <Container>
                <h1>Статьи</h1>
                <Grid>
                    <Miscellaneous
                        href="https://www.kaspersky.ru/resource-center/threats/computer-viruses-and-malware-facts-and-faqs"
                        thumbnail={viruses}
                        title="Компьютерные вирусы"
                        description="Факты и часто задаваемые вопросы о вредоносном ПО."
                    />
                    <Miscellaneous
                        href="https://windows-school.ru/blog/kak_izmenjat_metadannye_fotografij/2019-03-03-310"
                        thumbnail={metadata}
                        title="Метаданные"
                        description="Узнайте о том, какую информацию содержат файлы."
                    />
                    <Miscellaneous
                        href="https://rosuchebnik.ru/material/bulling-v-shkole-article/"
                        thumbnail={bullying}
                        title="Буллинг"
                        description="Что делать, если вы узнали о травле ребенка?"
                    />
                    <Miscellaneous
                        href="https://www.kaspersky.ru/resource-center/definitions/what-is-cryptocurrency"
                        thumbnail={cryptocurrency}
                        title="Криптовалюта"
                        description="Что такое криптовалюта и как она применяется?"
                    />
                    <Miscellaneous
                        href="https://xn--b1aew.xn--p1ai/document/1910260"
                        thumbnail={scammer}
                        title="Интернет-мошенничество"
                        description="Памятка о том, как не стать жертвой интернет-мошенничества."
                    />
                    <Miscellaneous
                        href="https://www.kaspersky.ru/blog/kids-location-tracking/28470/"
                        thumbnail={search}
                        title="Местоположение ребёнка"
                        description="О том, как уследить за теми, кто теряется повсюду и находится везде."
                    />
                    <Miscellaneous
                        href="https://www.kaspersky.ru/blog/8-steps-to-freedom-from-social-media/31763/"
                        thumbnail={socialNetworks}
                        title="Путь к свободе"
                        description="Как выпутаться из социальных сетей."
                    />
                </Grid>
            </Container>
        </main>
    )
}
