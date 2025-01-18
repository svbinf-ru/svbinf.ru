import { FC, PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const ContainerVertical: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}
