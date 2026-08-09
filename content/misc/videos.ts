import digitalLiteracy from '@/assets/misc/videos/digital-literacy.webp'
import holidays from '@/assets/misc/videos/holidays.webp'
import memorial from '@/assets/misc/videos/memorial.webp'

import { Misc } from '@/content/utils'

// Поля:
// - href        (string):          Ссылка на ресурс
//                                  (статью, программу, видео или сайт).
// - thumbnail   (StaticImageData): Превью ресурса.
// - title       (string):          Название ресурса.
// - description (string):          Описание ресурса.
export const videos: Misc[] = [
    {
        href: 'https://disk.yandex.ru/i/zxOOaYSEJFWGTw',
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
]
