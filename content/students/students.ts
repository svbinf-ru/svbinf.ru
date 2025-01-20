import grekinaalice from '@/assets/students/grekinaalice.webp'
import shelepuginivan from '@/assets/students/shelepuginivan.webp'
import shtukmeisterdiana from '@/assets/students/shtukmeisterdiana.webp'

import { Student } from '@/content/utils'

export const students: Student[] = [
    {
        name: 'Иван Шелепугин',
        description:
            'Open-source разработчик, Linux-энтузиаст, создатель Hakutest.',
        url: 'https://github.com/shelepuginivan',
        picture: shelepuginivan,
    },
    {
        name: 'Диана Штукмейстер',
        description:
            'Digital художник-анималист, иллюстратор, концепт-художник.',
        url: 'https://cara.app/dianafirai',
        picture: shtukmeisterdiana,
    },
    {
        name: 'Алиса Грекина',
        description:
            'Главный редактор и писатель независимого творческого объединения «МОХ».',
        url: 'https://t.me/Mossprint_tg',
        picture: grekinaalice,
    },
]
