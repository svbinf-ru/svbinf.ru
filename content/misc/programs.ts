import alacritty from '@/assets/misc/programs/alacritty.webp'
import blender from '@/assets/misc/programs/blender.webp'
import desktopGoose from '@/assets/misc/programs/desktop-goose.webp'
import dosbox from '@/assets/misc/programs/dosbox.webp'
import gimp from '@/assets/misc/programs/gimp.webp'
import hakutest from '@/assets/misc/programs/hakutest.webp'
import inkscape from '@/assets/misc/programs/inkscape.webp'
import keepassxc from '@/assets/misc/programs/keepassxc.webp'
import mailspring from '@/assets/misc/programs/mailspring.webp'
import obs from '@/assets/misc/programs/obs.webp'
import obsidian from '@/assets/misc/programs/obsidian.webp'
import paint from '@/assets/misc/programs/paint.webp'
import sumatrapdf from '@/assets/misc/programs/sumatrapdf.webp'

import { Misc } from '@/content/utils'

// Поля:
// - href        (string):          Ссылка на ресурс
//                                  (статью, программу, видео или сайт).
// - thumbnail   (StaticImageData): Превью ресурса.
// - title       (string):          Название ресурса.
// - description (string):          Описание ресурса.
export const programs: Misc[] = [
    {
        href: 'https://hakutest.org/ru/',
        thumbnail: hakutest,
        title: 'Hakutest',
        description:
            'Система для образовательного тестирования с автоматической проверкой ответов.',
    },
    {
        href: 'https://alacritty.org/',
        thumbnail: alacritty,
        title: 'Alacritty',
        description:
            'Минималистичный и быстрый терминал с графическим ускорением.',
    },
    {
        href: 'https://obsproject.com/',
        thumbnail: obs,
        title: 'OBS Studio',
        description:
            'Бесплатное ПО для записи видео и трансляций с открытым исходным кодом.',
    },
    {
        href: 'https://www.getmailspring.com/',
        thumbnail: mailspring,
        title: 'Mailspring',
        description: 'Быстрый, удобный и кастомизируемый почтовый клиент.',
    },
    {
        href: 'https://www.blender.org/',
        thumbnail: blender,
        title: 'Blender',
        description:
            'Бесплатный пакет для создания 3D-изображений с открытым исходным кодом.',
    },
    {
        href: 'https://www.getpaint.net/download.html',
        thumbnail: paint,
        title: 'Paint.NET',
        description: 'Простой редактор изображений для Windows.',
    },
    {
        href: 'https://www.gimp.org/',
        thumbnail: gimp,
        title: 'GIMP',
        description:
            'Бесплатный редактор растровой графики с открытым исходным кодом.',
    },
    {
        href: 'https://inkscape.org/',
        thumbnail: inkscape,
        title: 'Inkscape',
        description:
            'Бесплатный редактор векторной графики с открытым исходным кодом.',
    },
    {
        href: 'https://keepassxc.org/',
        thumbnail: keepassxc,
        title: 'KeePassXC',
        description:
            'Удобный и безопасный менеджер пароль с множеством возможностей.',
    },
    {
        href: 'https://obsidian.md/',
        thumbnail: obsidian,
        title: 'Obsidian',
        description: 'Создавайте свою базу знаний из заметок.',
    },
    {
        href: 'https://www.sumatrapdfreader.org/',
        thumbnail: sumatrapdf,
        title: 'Sumatra PDF',
        description: 'Простой и производительный просмотрщик PDF-документов.',
    },
    {
        href: 'https://samperson.itch.io/desktop-goose',
        thumbnail: desktopGoose,
        title: 'Desktop Goose',
        description:
            'Гусь схватит вашу мышь, оставит грязь на вашем экране, напишет вам сообщение, доставит вам мемы!',
    },
    {
        href: 'https://www.dosbox.com/',
        thumbnail: dosbox,
        title: 'DOSBox',
        description: 'Эмулятор, запускающий программы для DOS.',
    },
]
