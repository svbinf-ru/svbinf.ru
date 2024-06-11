import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const Grid: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.grid}>{children}</div>
}
