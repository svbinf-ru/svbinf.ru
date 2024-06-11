import desktopGoose from '@/assets/misc/programs/desktop-goose.webp'
import dosbox from '@/assets/misc/programs/dosbox.webp'
import gimp from '@/assets/misc/programs/gimp.webp'
import inkscape from '@/assets/misc/programs/inkscape.webp'
import mailspring from '@/assets/misc/programs/mailspring.webp'
import obsidian from '@/assets/misc/programs/obsidian.webp'
import sumatrapdf from '@/assets/misc/programs/sumatrapdf.webp'

import { Misc } from '@/content/utils'

export const programs: Misc[] = [
    {
        href: 'https://www.getmailspring.com/',
        thumbnail: mailspring,
        title: 'Mailspring',
        description: 'Быстрый, удобный и кастомизируемый почтовый клиент.',
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
