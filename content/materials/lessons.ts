import bin from '@/assets/materials/lessons/bin.webp'
import euler from '@/assets/materials/lessons/euler.webp'
import graph from '@/assets/materials/lessons/graph.webp'
import logic from '@/assets/materials/lessons/logic.webp'
import logicOp from '@/assets/materials/lessons/logic-op.webp'
import powers from '@/assets/materials/lessons/powers.webp'
import units from '@/assets/materials/lessons/units.webp'

import { MaterialsImage } from '@/content/utils'

// Поля
// - src     (StaticImageData): Превью картинки.
// - caption (string):          Описание картинки. Не отображается на экране,
//                              но нужно для доступности.
// - full    (string):          Ссылка на оригинальный файл
//                              (в большем разрешении и с большим размером).
export const images: MaterialsImage[] = [
    {
        src: euler,
        caption: 'Круги Эйлера',
        full: 'https://cdn.svb369.ru/i/png/euler.png',
    },
    {
        src: graph,
        caption: 'Граф',
        full: 'https://cdn.svb369.ru/i/png//graph.png',
    },
    {
        src: units,
        caption: 'Перевод единиц измерения',
        full: 'https://cdn.svb369.ru/i/png/units.png',
    },
    {
        src: powers,
        caption: 'Степени двойки',
        full: 'https://cdn.svb369.ru/i/png/powers.png',
    },
    {
        src: bin,
        caption: 'Триады и тетрады',
        full: 'https://cdn.svb369.ru/i/png/bin.png',
    },
    {
        src: logic,
        caption: 'Законы алгебры логики',
        full: 'https://cdn.svb369.ru/i/png/logic.png',
    },
    {
        src: logicOp,
        caption: 'Логические операции',
        full: 'https://cdn.svb369.ru/i/png/logic-op.png',
    },
]
