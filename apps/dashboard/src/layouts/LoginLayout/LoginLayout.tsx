import React, { FC } from 'react'
import styles from './LoginLayout.module.scss'
import { Outlet } from 'react-router-dom'

const LoginLayout: FC = () => {
  return (
    <div className={styles.wrap}>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  )
}

export default LoginLayout
