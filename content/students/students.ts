import grekinaalice from '@/assets/students/grekinaalice.webp'
import shelepuginivan from '@/assets/students/shelepuginivan.webp'
import shtukmeisterdiana from '@/assets/students/shtukmeisterdiana.webp'

import { Student } from '@/content/utils'

// Поля:
// - name        (string):          Имя и фамилия ученика.
// - description (string):          Текст-описание, например, род деятельности.
// - url         (string):          Ссылка на ресурс ученика (сайт, социальную сеть и т.д.).
// - picture     (StaticImageData): Фото ученика.
export const students: Student[] = [
    {
        name: 'Иван Шелепугин',
        description: 'Разработчик ПО',
        url: 'https://shelepugin.ru/',
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
