import React from 'react'
import { Page } from '../interfaces/page'
import { LoginForm } from '@rain/components'
import { LoginModel } from '@rain/models-ui'

const LoginPage: Page = () => {
  const onSubmit = (data: LoginModel): void => {
    // eslint-disable-next-line no-alert
    alert(`Submitted - ${data.email}`)
  }

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default LoginPage
