import React from 'react'
import { Page } from '../interfaces/page'
import { LoginForm } from '@rain/components'
import { LoginModel } from '@rain/models-ui'
import { useAuthControllerLoginMutation } from '@rain/store'

const LoginPage: Page = () => {
  const [login, { isLoading }] = useAuthControllerLoginMutation()
  const onSubmit = (data: LoginModel): void => {
    login({
      loginDto: {
        email: data.email,
        password: data.password,
      },
    })
  }

  return (
    <div>
      <LoginForm onSubmit={onSubmit} loading={isLoading} />
    </div>
  )
}

export default LoginPage
