import euler from '@/assets/materials/lessons/euler.webp'
import graph from '@/assets/materials/lessons/graph.webp'
import units from '@/assets/materials/lessons/units.webp'

import { MaterialsImage, MaterialsTable } from '@/content/utils'

export const images: MaterialsImage[] = [
    {
        src: euler,
        caption: 'Круги Эйлера',
        full: '/static/img/lessons/euler.png',
    },
    {
        src: graph,
        caption: 'Граф',
        full: '/static/img/lessons/graph.png',
    },
    {
        src: units,
        caption: 'Перевод единиц измерения',
        full: '/static/img/lessons/units.png',
    },
]

export const tables: MaterialsTable[] = [
    {
        table: (
            <table>
                <tbody>
                    {new Array(10).fill(0).map((_, index) => (
                        <tr>
                            <td>
                                2<sup>{index}</sup> = {Math.pow(2, index)}
                            </td>
                            <td>
                                2<sup>{index + 10}</sup> ={' '}
                                {Math.pow(2, index + 10)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ),
        caption: 'Степени двойки',
        full: 'https://shelepugin.ru',
    },
    {
        table: (
            <table>
                <thead>
                    <tr>
                        <td colSpan={4}>2 СС</td> <td>8 СС</td> <td>16 СС</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td> <td>0</td> <td>0</td> <td>0</td> <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>0</td> <td>1</td> <td>0</td> <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>0</td> <td>1</td> <td>1</td> <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>4</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>1</td> <td>0</td> <td>1</td> <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>1</td> <td>1</td> <td>0</td> <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>0</td> <td>1</td> <td>1</td> <td>1</td> <td>7</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>0</td> <td>0</td> <td>0</td> <td>8</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>0</td> <td>0</td> <td>1</td> <td>–</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>0</td> <td>1</td> <td>0</td> <td>–</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>0</td> <td>1</td> <td>1</td> <td>–</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>1</td> <td>0</td> <td>0</td> <td>–</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>1</td> <td>0</td> <td>1</td> <td>–</td>
                        <td>D</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>1</td> <td>1</td> <td>0</td> <td>–</td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>1</td> <td>1</td> <td>1</td> <td>1</td> <td>–</td>
                        <td>F</td>
                    </tr>
                </tbody>
            </table>
        ),
        caption: 'Таблица триад и тетрад',
        full: 'https://shelepugin.ru',
    },
]
