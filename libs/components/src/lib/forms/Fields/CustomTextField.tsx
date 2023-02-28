import React, { ReactElement } from 'react'
import {
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  loading?: boolean
  control?: Control<TFieldValues>
  errors: FieldErrors<TFieldValues>
  label: string
  name: TName
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  autoFocus?: boolean
  type?: 'text' | 'password'
}

function CustomTextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  loading,
  control,
  errors,
  name,
  rules,
  label,
  autoFocus,
  type = 'text',
}: Props<TFieldValues, TName>): ReactElement {
  const errorMessage = String(errors[name]?.message ?? '') || undefined
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          disabled={loading}
          error={!!errorMessage}
          helperText={errorMessage}
          label={label}
          autoFocus={autoFocus}
          type={type}
          fullWidth
          margin="normal"
        />
      )}
    />
  )
}

export default CustomTextField
