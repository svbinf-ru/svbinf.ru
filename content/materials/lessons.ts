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
        src: bin,
        caption: 'Триады и тетрады',
        full: '/img/materials/lessons/bin.png',
    },
    {
        src: powers,
        caption: 'Степени двойки',
        full: '/img/materials/lessons/powers.png',
    },
    {
        src: logic,
        caption: 'Законы алгебры логики',
        full: '/img/materials/lessons/logic.png',
    },
    {
        src: logicOp,
        caption: 'Логические операции',
        full: '/img/materials/lessons/logic-op.png',
    },
    {
        src: euler,
        caption: 'Круги Эйлера',
        full: '/img/materials/lessons/euler.png',
    },
    {
        src: units,
        caption: 'Перевод единиц измерения',
        full: '/img/materials/lessons/units.png',
    },
    {
        src: graph,
        caption: 'Граф',
        full: '/img/materials/lessons/graph.png',
    },
]
