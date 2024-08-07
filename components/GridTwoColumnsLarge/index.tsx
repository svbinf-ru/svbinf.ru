import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const GridTwoColumnsLarge: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.grid}>{children}</div>
}
