import React, { FC } from 'react'
import styles from './SomeTestComponent.module.scss'

interface Props {
  name: string
}

export const SomeTestComponent: FC<Props> = ({ name }) => {
  return (
    <div className={styles.someWrap}>
      <div>Hello {name}!</div>
    </div>
  )
}
