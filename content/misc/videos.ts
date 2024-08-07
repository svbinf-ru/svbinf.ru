import blindUsingPhone from '@/assets/misc/videos/blind-using-phone.webp'
import electronicsInOil from '@/assets/misc/videos/electronics-in-oil.webp'
import holidays from '@/assets/misc/videos/holidays.webp'
import inkjetPrinter from '@/assets/misc/videos/inkjet-printer.webp'
import membraneKeyboard from '@/assets/misc/videos/membrane-keyboard.webp'
import memorial from '@/assets/misc/videos/memorial.webp'
import noiseCancelling from '@/assets/misc/videos/noise-cancelling.webp'
import raytracingExcel from '@/assets/misc/videos/raytracing-excel.webp'
import digitalLiteracy from '@/assets/misc/videos/digital-literacy.webp'

import { Misc } from '@/content/utils'

export const videos: Misc[] = [
    {
        href: 'https://cdn.svb369.ru/v/mp4/digital-literacy.mp4',
        thumbnail: digitalLiteracy,
        title: 'Родители, спокойно',
        description:
            '93% российских школьников умеют определять небезопасный контент в сети',
    },
    {
        href: 'https://gorod-plus.tv/videos/110749',
        thumbnail: memorial,
        title: 'Памятная доска Герою России Александру Жихареву',
        description:
            'В лицее № 369 Красносельского района открыли мемориальную доску Герою России Александру Жихареву. В церемонии принял участие губернатор Петербурга Александр Беглов.',
    },
    {
        href: 'https://www.5-tv.ru/news/421384/vrossii-hotat-sokratit-skolnye-letnie-kanikuly/',
        thumbnail: holidays,
        title: 'В России хотят сократить школьные летние каникулы',
        description:
            'Школьные каникулы предлагается сократить до полутора месяцев. Мнения на этот счет у общественности разделились.',
    },
    {
        href: 'https://drive.google.com/file/d/13dXpwFtZy4KcgNzI80WaN5YUCv68SXib/view',
        thumbnail: electronicsInOil,
        title: 'Как техника работает в масле?',
        description: 'Наглядная демонстрация работы электроники в масле.',
    },
    {
        href: 'https://drive.google.com/file/d/1tgVHvUeAHyKrDx2kElZPsCAjSLhqHHPa/view',
        thumbnail: membraneKeyboard,
        title: 'Мембранная клавиатура',
        description: 'Узнайте принцип работы мембранной клавиатуры.',
    },
    {
        href: 'https://drive.google.com/file/d/1rJRIeHCBiQWJ44xM2jlwwzzcAft2LYwi/view',
        thumbnail: raytracingExcel,
        title: 'Трассировка лучей в Excel',
        description: 'Демонстрация трёхмерной трассировки лучей в Excel.',
    },
    {
        href: 'https://drive.google.com/file/d/1TxUrg2g28turAR6gAM-wOt6pINfLnnmp/view',
        thumbnail: noiseCancelling,
        title: 'Шумоподавление',
        description: 'О том, как работает шумоподавление.',
    },
    {
        href: 'https://drive.google.com/file/d/1tsOV0vAzZWiGvKH2WOr-ZlL6fOLEEyaU/view',
        thumbnail: blindUsingPhone,
        title: 'Доступность',
        description: 'Как незрячий человек пользуется смартфоном.',
    },
    {
        href: 'https://drive.google.com/file/d/17ox1HIm_6uk3H2tcSY83-oKF2oFc5049/view',
        thumbnail: inkjetPrinter,
        title: 'Струйный принтер',
        description: 'Принцип работы струйного принтера.',
    },
]
