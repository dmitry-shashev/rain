import React, { FC } from 'react'
import { FormProps } from '../form-props'
import { LoginModel } from '@rain/models-ui'
import { Button } from '@mui/material'
import GlobalFormErrors from '../GlobalFormError/GlobalFormError'
import { useForm } from 'react-hook-form'
import { FIELD_REQUIRED_MESSAGE } from '../form-error-messages'
import CustomTextField from '../Fields/CustomTextField'

export const LoginForm: FC<FormProps<LoginModel>> = ({
  onSubmit,
  defaultValues = {},
  loading,
  globalErrors,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginModel>({
    defaultValues,
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb10">
        <CustomTextField
          control={control}
          errors={errors}
          loading={loading}
          rules={{
            required: FIELD_REQUIRED_MESSAGE,
          }}
          autoFocus
          name="email"
          label="Email"
        />
        <CustomTextField
          control={control}
          errors={errors}
          loading={loading}
          rules={{
            required: FIELD_REQUIRED_MESSAGE,
          }}
          name="password"
          label="Password"
          type="password"
        />
      </div>
      <GlobalFormErrors globalErrors={globalErrors} />
      <Button disabled={loading} fullWidth type="submit" variant="contained">
        Sign In
      </Button>
    </form>
  )
}
