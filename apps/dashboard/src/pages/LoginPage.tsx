import React from 'react'
import { Page } from '../interfaces/page'
import { LoginForm } from '@rain/components'
import { LoginModel } from '@rain/models-ui'
import { useAuthControllerLoginMutation } from '@rain/store'
import { ColorKind, ColorKindData } from '@rain/core'

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

  //-----------------------------------------------------------------
  // test constants functionality

  // assigning readonly value to a regular
  // in order to check error on the next line (uncomment)
  const p: ColorKindData = ColorKind.BLUE
  // p.label = '123'
  // @#$
  // eslint-disable-next-line no-console
  console.log(`pre defined: "${p.label}"`)
  const byLabel = ColorKind.getByLabel('Green')
  // @#$
  // eslint-disable-next-line no-console
  console.log(`by label (value): ${byLabel.value}`)
  const allPossible = ColorKind.getAll()
  // @#$
  // eslint-disable-next-line no-console
  console.log('all possible', allPossible)
  const wrongVariant = ColorKind.getByKey('some')
  // @#$
  // eslint-disable-next-line no-console
  console.log(`wrong variant (value): ${wrongVariant.value}`)
  const correctVariant = ColorKind.getByKey('RED')
  // @#$
  // eslint-disable-next-line no-console
  console.log(`correct variant (value): ${correctVariant.value}`)

  // ColorKind.BLUE = ColorKind.RED

  //-----------------------------------------------------------------

  return (
    <div>
      <LoginForm onSubmit={onSubmit} loading={isLoading} />
    </div>
  )
}

export default LoginPage
