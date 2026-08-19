import acmp from '@/assets/olymp/prep/acmp.webp'
import codeforces from '@/assets/olymp/prep/codeforces.webp'
import codewars from '@/assets/olymp/prep/codewars.webp'
import informatics from '@/assets/olymp/prep/informatics.webp'
import leetcode from '@/assets/olymp/prep/leetcode.webp'
import timus from '@/assets/olymp/prep/timus.webp'
import to from '@/assets/olymp/prep/to.webp'
import io from '@/assets/olymp/prep/io.webp'
import iml from '@/assets/olymp/prep/iml.webp'
import aml from '@/assets/olymp/prep/aml.webp'

import { OlympPrep } from '@/content/olymp'

// Поля:
// - href        (string):          Ссылка на ресурс
// - thumbnail   (StaticImageData): Превью ресурса.
// - title       (string):          Название ресурса.
// - description (string):          Описание ресурса.
export const prepResources: OlympPrep[] = [
    {
        href: 'https://codeforces.com/',
        thumbnail: codeforces,
        title: 'Codeforces',
        description:
            'Проект, объединяющий людей, интересующихся и принимающих участие в конкурсах по программированию.',
    },
    {
        href: 'https://informatics.msk.ru/',
        thumbnail: informatics,
        title: 'Информатикс',
        description: 'Учебные и олимпиадные задачи по информатике.',
    },
    {
        href: 'https://acmp.ru/index.asp?main=tasks',
        thumbnail: acmp,
        title: 'Школа программиста',
        description: 'Сборник олимпиадных задач по информатике.',
    },
    {
        href: 'https://www.codewars.com/',
        thumbnail: codewars,
        title: 'Codewars',
        description: 'Овладейте кодом с помощью сложных задач.',
    },
    {
        href: 'https://leetcode.com/',
        thumbnail: leetcode,
        title: 'LeetCode',
        description: 'Крупнейшая платформа с задачами на алгоритмы.',
    },
    {
        href: 'https://acm.timus.ru/',
        thumbnail: timus,
        title: 'Timus Online Judge',
        description:
            'Российский архив задач по программированию с автоматической системой проверки.',
    },
    {
        href: 'https://education.tbank.ru/school',
        thumbnail: to,
        title: 'Т-Образование',
        description: 'Бесплатные курсы и мероприятия, подготовка к олимпиадам по информатике.',
    },
    {
        href: 'https://education.yandex.ru/vsosh',
        thumbnail: io,
        title: 'Яндекс образование',
        description: 'Бесплатные сборы для школьников 5–11-х классов.',
    },
    {
        href: 'https://education.yandex.ru/handbook/ml',
        thumbnail: iml,
        title: 'Яндекс образование',
        description: 'Учебник по машинному обучению.',
    },
    {
        href: 'https://ml.ai-academy.ru/',
        thumbnail: aml,
        title: 'Академия ИИ',
        description: 'Бесплатный онлайн-курс Машинное обучение.',
    },
]
