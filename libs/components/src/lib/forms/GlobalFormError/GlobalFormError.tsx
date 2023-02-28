import React, { FC } from 'react'
import styles from './GlobalFormError.module.scss'

interface Props {
  globalErrors?: ReadonlyArray<string>
}

const GlobalFormErrors: FC<Props> = ({ globalErrors }) => {
  if (!globalErrors) {
    return null
  }

  return (
    <div className={styles.wrap}>
      {globalErrors?.map((msg) => (
        <div key={msg}>{msg}</div>
      ))}
    </div>
  )
}

export default GlobalFormErrors
