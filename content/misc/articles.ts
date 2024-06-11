import bullying from '@/assets/misc/articles/bullying.webp'
import cryptocurrency from '@/assets/misc/articles/cryptocurrency.webp'
import metadata from '@/assets/misc/articles/metadata.webp'
import scammer from '@/assets/misc/articles/scammer.webp'
import search from '@/assets/misc/articles/search.webp'
import socialNetworks from '@/assets/misc/articles/social-networks.webp'
import viruses from '@/assets/misc/articles/viruses.webp'

import { Misc } from '@/content/utils'

export const articles: Misc[] = [
    {
        href: 'https://www.kaspersky.ru/resource-center/threats/computer-viruses-and-malware-facts-and-faqs',
        thumbnail: viruses,
        title: 'Компьютерные вирусы',
        description: 'Факты и часто задаваемые вопросы о вредоносном ПО.',
    },
    {
        href: 'https://windows-school.ru/blog/kak_izmenjat_metadannye_fotografij/2019-03-03-310',
        thumbnail: metadata,
        title: 'Метаданные',
        description: 'Узнайте о том, какую информацию содержат файлы.',
    },
    {
        href: 'https://rosuchebnik.ru/material/bulling-v-shkole-article/',
        thumbnail: bullying,
        title: 'Буллинг',
        description: 'Что делать, если вы узнали о травле ребенка?',
    },
    {
        href: 'https://www.kaspersky.ru/resource-center/definitions/what-is-cryptocurrency',
        thumbnail: cryptocurrency,
        title: 'Криптовалюта',
        description: 'Что такое криптовалюта и как она применяется?',
    },
    {
        href: 'https://xn--b1aew.xn--p1ai/document/1910260',
        thumbnail: scammer,
        title: 'Интернет-мошенничество',
        description:
            'Памятка о том, как не стать жертвой интернет-мошенничества.',
    },
    {
        href: 'https://www.kaspersky.ru/blog/kids-location-tracking/28470/',
        thumbnail: search,
        title: 'Местоположение ребёнка',
        description:
            'О том, как уследить за теми, кто теряется повсюду и находится везде.',
    },
    {
        href: 'https://www.kaspersky.ru/blog/8-steps-to-freedom-from-social-media/31763/',
        thumbnail: socialNetworks,
        title: 'Путь к свободе',
        description: 'Как выпутаться из социальных сетей.',
    },
]
