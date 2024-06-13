import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const Box: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.box}>{children}</div>
}
