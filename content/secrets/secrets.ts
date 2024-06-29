import pikachu from '@/assets/secrets/pikachu.webp'
import lenin from '@/assets/secrets/vladimir-lenin.png'
import clarke from '@/assets/secrets/arthur-clarke.webp'
import satori from '@/assets/secrets/satori.webp'
import ga1 from '@/assets/secrets/ga1.webp'
import ga2 from '@/assets/secrets/ga2.webp'
import flandre from '@/assets/secrets/flandre.webp'
import cryprography from '@/assets/secrets/cryptography.webp'
import questionmark from '@/assets/secrets/questionmark.png'

import { Secret } from '@/content/utils'

export const secrets: Secret[] = [
    {
        title: 'Александра нашла пасхалку №1 (12.10.2019)',
        description:
            'Она находится в разделе "Полезные сайты". Нужно было отсканировать QR код с картинки сайта "QR mania".',
        href: '/misc/websites',
        picture: pikachu,
    },
    {
        title: 'Егор нашёл пасхалку №2 (18.04.2023)',
        description:
            'Она находится в разделе "Статьи". Нужно было скачать фото Паскаля и открыть её свойства, подробно.',
        href: '/misc/articles',
        picture: lenin,
    },
    {
        title: 'Николай нашёл пасхалку №3 (14.01.2022)',
        description:
            'Она находится в разделе "Полезные сайты". Нужно было выделить цитату в конце страницы.',
        href: '/misc/websites',
        picture: clarke,
    },
    {
        title: 'Ещё никто не нашёл пасхалку №4',
        description: 'А она уже где-то есть. Где-то рядом. ПРЯМ СОВСЕМ РЯДОМ!',
        href: '/',
        picture: questionmark,
    },
    {
        title: 'Кирилл и Иван нашли пасхалку №5 (16.07.2023 и 03.08.2023)',
        description:
            'Она находится в нижнем колонтитуле каждой страницы. Нужно было нажать на котика.',
        href: '#footer',
        picture: satori,
    },
    {
        title: 'Алёна и Ваня нашли пасхалку №6 (05.08.2023)',
        description:
            'Она находится в разделе "Расписание и звонки". Нужно было нажать на фото класса.',
        href: '/schedule',
        picture: ga1,
    },
    {
        title: 'Алёна и Ваня нашли пасхалку №7 (06.08.2023)',
        description:
            'Она находится на главной странице. Нужно было "Посмотреть код" ждуна.',
        href: '/',
        picture: ga2,
    },
    {
        title: 'Иван нашёл пасхалку №8 (06.08.2023)',
        description:
            'Она находится в разделе "Достижения". Нужно было открыть подозрительную красную грамоту.',
        href: '/achievements/students?type=commendation&year=2023',
        picture: flandre,
    },
    {
        title: 'Егор нашёл пасхалку №9 (27.04.2024)',
        description:
            'Она находится на скрытой странице "/paskhalka". Нужно было указать это в адресе.',
        href: '/paskhalka',
        picture: cryprography,
    },
]
