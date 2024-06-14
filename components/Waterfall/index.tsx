import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const Waterfall: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.waterfall}>{children}</div>
}
