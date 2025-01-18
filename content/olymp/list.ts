import { Olymp } from '@/content/olymp'

//const example: Olymp = {
//   href: 'https://ссылка-на-сайт-олимпиады',
//   title: 'Название',
//   type: 'Олимпиада, Конкурс, Перечневая олимпиада, ...)',
//   level: 'Муниципальный, Городской, Всероссийский, Международный, ...',
//   place: 'Где-то во вселенной',
//   date: '1 марта 2025',
//   info: [
//       'любая доп. информация',
//       'новый пункт с новой строки',
//   ]
//}

// Перечневые олимпиады.
export const listedOlympiads: Olymp[] = [
    {
        title: 'Всероссийская олимпиада по искусственному интеллекту',
        href: 'https://olimpiada.ru/activity/5825',
        info: ['Очно-заочная'],
    },
    {
        title: 'Олимпиада «Высшая проба» по информатике',
        href: 'https://olimpiada.ru/activity/153',
        info: ['Очно-заочная'],
    },
    {
        title: 'Олимпиада СПбГУ по информатике',
        href: 'https://olimpiada.ru/activity/465',
        info: ['Очно-заочная'],
    },
    {
        title: 'Олимпиада «Газпром»',
        href: 'https://olimpiada.ru/activity/5516',
        info: ['Очно-заочная'],
    },
    {
        title: 'Олимпиада «Гранит науки» по информатике',
        href: 'https://olimpiada.ru/activity/5481',
        info: ['Очно-заочная'],
    },
    {
        title: 'Открытая олимпиада школьников (информатика)',
        href: 'https://olimpiada.ru/activity/4357',
        info: ['Очно-заочная'],
    },
    {
        title: 'Олимпиада школьников по информатике и программированию',
        href: 'https://olimpiada.ru/activity/4337',
        info: ['Очно-заочная'],
    },
    {
        title: 'Национальная технологическая олимпиада',
        href: 'https://olimpiada.ru/activity/5369',
        info: ['Командная', 'Очно-заочная'],
    },
]

// Другие олимпиады (не из перечня Минобрнауки).
export const otherOlympiads: Olymp[] = [
    {
        title: 'Международная олимпиада Innopolis Open по информатике',
        href: 'https://olimpiada.ru/activity/5283',
        type: 'Олимпиада',
        level: 'Международная',
    },
    {
        title: 'Международная олимпиада Innopolis Open по информационной безопасности',
        href: 'https://olimpiada.ru/activity/5698',
        type: 'Олимпиада',
        level: 'Международная',
    },
    {
        title: 'Санкт-Петербургская открытая олимпиада по программированию для 3-7 классов',
        href: 'http://prog.matolimp-spb.org',
        type: 'Олимпиада',
        level: 'Городской',
    },
]

// Другие мероприятия: конкурсы, конференции, хакатоны.
export const otherEvents: Olymp[] = [
    {
        title: 'II Всероссийский чемпионат по виртуальной робототехнике',
        href: 'https://kulibin.app/competition',
        type: 'Чемпионат',
        info: ['При поддержке РДДМ «Движение первых»'],
    },
    {
        title: 'Открытая юношеская научно-практическая конференция «Будущее сильной России — в высоких технологиях»',
        href: 'https://futureofrussia.anichkov.ru',
        type: 'Конференция',
        level: 'Всероссийский',
    },
    {
        title: 'Городской открытый конкурс компьютерной графики «Цифровое перо»',
        href: 'https://center-tvorchestva.ru/nashi-meropriyatiya/',
        type: 'Конкурс',
        level: 'Городской',
    },
]
