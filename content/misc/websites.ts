import akinator from '@/assets/misc/websites/akinator.webp'
import freemp3cloud from '@/assets/misc/websites/freemp3cloud.webp'
import iconbird from '@/assets/misc/websites/iconbird.webp'
import ilovepdf from '@/assets/misc/websites/ilovepdf.webp'
import qrmania from '@/assets/misc/websites/qrmania.webp'
import randomtools from '@/assets/misc/websites/randomtools.webp'
import storyset from '@/assets/misc/websites/storyset.webp'
import thisPersonDoesNotExist from '@/assets/misc/websites/this-person-does-not-exist.webp'
import youdotcom from '@/assets/misc/websites/youdotcom.webp'
import vocalremover from '@/assets/misc/websites/vocalremover.webp'
import pathfinding from '@/assets/misc/websites/pathfinding.webp'
import theTrueSize from '@/assets/misc/websites/the-true-size.webp'
import virustotal from '@/assets/misc/websites/virustotal.webp'

import { Misc } from '@/content/utils'

export const websites: Misc[] = [
    {
        href: 'https://ru.akinator.com/',
        thumbnail: akinator,
        title: 'Акинатор',
        description:
            'Игрок должен загадать любого персонажа, а Акинатор — отгадать его.',
    },
    {
        href: 'https://www.ilovepdf.com/',
        thumbnail: ilovepdf,
        title: 'ILovePDF',
        description: 'Онлайн-инструменты для работы с PDF-документами',
    },
    {
        href: 'https://storyset.com/',
        thumbnail: storyset,
        title: 'Storyset',
        description: 'Иллюстрации для ваших презентаций и проектов.',
    },
    {
        href: 'https://iconbird.com/',
        thumbnail: iconbird,
        title: 'Iconbird',
        description: 'Русскоязычный аггрегатор бесплатных иконок.',
    },
    {
        href: 'https://qrmania.ru/',
        thumbnail: qrmania,
        title: 'QR mania',
        description:
            'Создание QR-кодов. Сканирование и чтение QR-кодов онлайн с камеры.',
    },
    {
        href: 'https://virustotal.com/',
        thumbnail: virustotal,
        title: 'VirusTotal',
        description: 'Онлайн-антивирус',
    },
    {
        href: 'https://freemp3cloud.com',
        thumbnail: freemp3cloud,
        title: 'Free Mp3 Cloud',
        description: 'Поиск и загрузка миллионов треков в формате .mp3',
    },
    {
        href: 'https://you.com',
        thumbnail: youdotcom,
        title: 'You.com',
        description: 'Бесплатный ChatGPT в России',
    },
    {
        href: 'https://thispersondoesnotexist.com/',
        thumbnail: thisPersonDoesNotExist,
        title: 'This Person Does Not Exist',
        description:
            'Генерирует фотографию человека с помощью нейронных сетей.',
    },
    {
        href: 'https://randomtools.io',
        thumbnail: randomtools,
        title: 'Random Tools',
        description: 'Утилиты для работы с соц. сетями, рандомом и данными.',
    },
    {
        href: 'https://vocalremover.org/ru/',
        thumbnail: vocalremover,
        title: 'Vocal Remover',
        description: 'Сделать минус из любой песни.',
    },
    {
        href: 'https://thetruesize.com/',
        thumbnail: theTrueSize,
        title: 'The True Size',
        description:
            'Меняет картину мира, показывая истинный размер каждой страны.',
    },
    {
        href: 'https://qiao.github.io/PathFinding.js/visual/',
        thumbnail: pathfinding,
        title: 'PathFinding',
        description:
            'Определение наилучшего, оптимального маршрута между двумя точками.',
    },
]
