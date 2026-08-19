import { ExamResult } from '../utils'

// Поля
// - title    (string):    Название экзамена.
// - max      (number?):   Максимально возможный балл.
// - students (number?):   Количество учеников.
// - average  (number?):   Средний результат.
// - best     (number?):   Лучший результат.
// - info     (string[]?): Любая дополнительная информация
export const results: ExamResult[] = [
    {
        title: 'ЕГЭ 2026',
        students: 24,
        max: 100,
        average: 85,
        best: 100,
        info: ['100 баллов — 1 ученик'],
    },
    {
        title: 'ОГЭ 2025',
        students: 29,
        max: 21,
        average: 20,
        best: 21,
        info: ['21 балл — 9 учеников'],
    },
    {
        title: 'ЕГЭ 2024',
        students: 18,
        max: 100,
        average: 73,
        best: 88,
    },
    {
        title: 'ОГЭ 2024',
        students: 31,
        max: 19,
        average: 17,
        best: 19,
        info: ['19 баллов — 15 учеников'],
    },
    {
        title: 'ЕГЭ 2023',
        students: 9,
        max: 100,
        average: 72,
        best: 93,
    },
    {
        title: 'ОГЭ 2022',
        students: 34,
        max: 19,
        average: 14,
        best: 19,
        info: ['19 баллов — 1 ученик'],
    },
    {
        title: 'ОГЭ 2021',
        students: 15,
        max: 19,
        average: 16,
        best: 19,
        info: ['19 баллов — 1 ученик'],
    },
]
