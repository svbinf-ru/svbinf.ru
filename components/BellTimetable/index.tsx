import { FC } from 'react'

import styles from './styles.module.scss'

export const BellTimetable: FC = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Начало</td>
                    <td>Конец</td>
                    <td>Перемена</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>08:00</td>
                    <td>08:40</td>
                    <td>5 мин</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>08:45</td>
                    <td>09:25</td>
                    <td>20 мин</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>09:45</td>
                    <td>10:25</td>
                    <td>5 мин</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>10:30</td>
                    <td>11:10</td>
                    <td>20 мин</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>11:30</td>
                    <td>12:10</td>
                    <td>5 мин</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>12:15</td>
                    <td>12:55</td>
                    <td>20 мин</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>13:15</td>
                    <td>13:55</td>
                    <td>5 мин</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>14:00</td>
                    <td>14:40</td>
                    <td>20 мин</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>15:00</td>
                    <td>15:40</td>
                    <td>10 мин</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>15:50</td>
                    <td>16:30</td>
                    <td>10 мин</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>16:40</td>
                    <td>17:20</td>
                    <td>10 мин</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>17:30</td>
                    <td>18:10</td>
                    <td>–</td>
                </tr>
            </tbody>
        </table>
    )
}
