import acmp from '@/assets/olymp/prep/acmp.webp'
import codeforces from '@/assets/olymp/prep/codeforces.webp'
import codewars from '@/assets/olymp/prep/codewars.webp'
import informatics from '@/assets/olymp/prep/informatics.webp'
import leetcode from '@/assets/olymp/prep/leetcode.webp'
import timus from '@/assets/olymp/prep/timus.webp'

import { OlympPrep } from '@/content/olymp'

export const prepResources: OlympPrep[] = [
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
]
