import bin from '@/assets/materials/lessons/bin.webp'
import euler from '@/assets/materials/lessons/euler.webp'
import graph from '@/assets/materials/lessons/graph.webp'
import logic from '@/assets/materials/lessons/logic.webp'
import powers from '@/assets/materials/lessons/powers.webp'
import units from '@/assets/materials/lessons/units.webp'

import { MaterialsImage } from '@/content/utils'

export const images: MaterialsImage[] = [
    {
        src: euler,
        caption: 'Круги Эйлера',
        full: '/img/lessons/euler.png',
    },
    {
        src: graph,
        caption: 'Граф',
        full: '/img/lessons/graph.png',
    },
    {
        src: units,
        caption: 'Перевод единиц измерения',
        full: '/img/lessons/units.png',
    },
    {
        src: powers,
        caption: 'Степени двойки',
        full: '/img/lessons/powers.png',
    },
    {
        src: bin,
        caption: 'Триады и тетрады',
        full: '/img/lessons/bin.png',
    },
    {
        src: logic,
        caption: 'Законы алгебры логики',
        full: '/img/lessons/logic.png',
    },
]
